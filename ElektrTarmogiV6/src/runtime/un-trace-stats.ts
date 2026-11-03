import { loadArcGISJSAPIModules } from "jimu-arcgis";
import {
  isTransformerLabel,
  isTransformerAssetGroup,
  isSubstationAssetGroup,
  isExternalAssetGroup,
  isSubstationLabel,
  isExternalSourceLabel,
  attrValue,
} from "./un-fields";
import { queryFeaturesSafe, queryFeaturesEverywhere } from "./un-query";
import { type UnLayersHandle, prepareUnLayers } from "./un-layers";
import { childLayers } from "./un-walk";

export interface TraceSelectionStats {
  transformers: number;
  devices: number;
  lineMeters: number;
}

export interface TraceFilterContext extends TraceSelectionStats {
  deviceObjectIds: Array<number | string>;
  lineObjectIds: Array<number | string>;
  deviceGlobalIds: string[];
  lineGlobalIds: string[];
  /** All trace element global IDs — query both tables with this list. */
  allGlobalIds: string[];
  allObjectIds: Array<number | string>;
  traceGeometries?: any[];
  /** Esri select-features payload — table rows built locally, no re-query. */
  prefetchedFeatureSets?: any[];
  /** When true, trace table load is allowed (avoids partial reloads). */
  tableReady?: boolean;
}

function emptyFilter(): TraceFilterContext {
  return {
    transformers: 0,
    devices: 0,
    lineMeters: 0,
    deviceObjectIds: [],
    lineObjectIds: [],
    deviceGlobalIds: [],
    lineGlobalIds: [],
    allGlobalIds: [],
    allObjectIds: [],
    traceGeometries: [],
  };
}

function flattenAny(raw: unknown): any[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.filter(Boolean);
  if (typeof (raw as any).toArray === "function") {
    return ((raw as any).toArray() || []).filter(Boolean);
  }
  if (Array.isArray((raw as any).items)) return (raw as any).items.filter(Boolean);
  const n = Number((raw as any).length || 0);
  if (n && typeof (raw as any).getItemAt === "function") {
    const out: any[] = [];
    for (let i = 0; i < n; i++) out.push((raw as any).getItemAt(i));
    return out.filter(Boolean);
  }
  return [];
}

export function flattenSelectResultSet(raw: unknown): any[] {
  const out: any[] = [];
  const walk = (item: unknown): void => {
    if (!item) return;
    if (Array.isArray(item)) {
      item.forEach(walk);
      return;
    }
    const row = item as any;
    const features = row?.featureSet?.features || row?.features;
    if (Array.isArray(features) && features.length) out.push(row);
  };
  walk(raw);
  return out;
}

export function waitForSelectFeatures(vm: any, timeoutMs = 120000): Promise<any[]> {
  return new Promise((resolve) => {
    let settled = false;
    let handle: { remove?: () => void } | null = null;
    const finish = (sets: any[]) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try {
        handle?.remove?.();
      } catch {
        /* ignore */
      }
      resolve(flattenSelectResultSet(sets));
    };
    handle = vm?.on?.("select-features", (evt: any) => {
      finish(evt?.resultSet || []);
    });
    const timer = setTimeout(() => finish([]), timeoutMs);
  });
}

function collectTraceElements(vm: any): any[] {
  const seen = new Set<string>();
  const out: any[] = [];
  const looksLikeElement = (el: any): boolean => {
    if (!el || typeof el !== "object") return false;
    return (
      el.globalId != null ||
      el.globalid != null ||
      el.objectId != null ||
      el.objectID != null ||
      el.networkSourceId != null ||
      el.assetGroupCode != null
    );
  };
  const push = (el: any) => {
    if (!looksLikeElement(el)) return;
    const key = `${el.globalId || el.globalid || ""}:${el.objectId ?? el.objectID ?? ""}:${el.networkSourceId ?? ""}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push(el);
  };
  const visit = (node: any, depth: number): void => {
    if (!node || depth > 8) return;
    if (looksLikeElement(node) && node.networkSourceId != null) {
      push(node);
      return;
    }
    const bag = flattenAny(node);
    if (bag.length && looksLikeElement(bag[0])) {
      bag.forEach(push);
      return;
    }
    if (typeof node !== "object") return;
    for (const key of [
      "elements",
      "results",
      "TraceResult",
      "traceResult",
      "traceResults",
    ]) {
      if (node[key] != null) visit(node[key], depth + 1);
    }
  };
  const traceItems = flattenAny(vm?.traceResults);
  if (!traceItems.length && Array.isArray(vm?.traceResults)) {
    traceItems.push(...vm.traceResults.filter(Boolean));
  }
  for (const item of traceItems) {
    const results = item?.results ?? item?.TraceResult ?? item?.traceResult;
    if (results?.elements) {
      for (const el of flattenAny(results.elements)) push(el);
    }
  }

  if (!out.length) visit(vm?.traceResults, 0);
  if (!out.length) {
    for (const tr of vm?.traceResults || []) visit(tr, 0);
  }
  return out;
}

function isPolylineGeometry(g: any): boolean {
  if (!g || typeof g !== "object") return false;
  if (geometryPaths(g).length) return true;
  const type = String(g.type || g.declaredClass || "").toLowerCase();
  return type.includes("polyline") || type.endsWith(".polyline");
}

function unwrapGeometry(g: any): any {
  if (!g) return null;
  if (g.geometry && (isPolylineGeometry(g.geometry) || g.geometry.paths)) {
    return g.geometry;
  }
  return isPolylineGeometry(g) || g.paths ? g : null;
}

function urlLayerId(url: unknown): string {
  const m = String(url || "").match(/\/(\d+)\/?$/);
  return m ? m[1] : "";
}

type ObjectIdValue = number | string;

/** Preserve bigint OBJECTIDs — Number() corrupts values above MAX_SAFE_INTEGER. */
function parseObjectId(raw: unknown): ObjectIdValue | null {
  if (raw == null || raw === "") return null;
  if (typeof raw === "bigint") return raw.toString();
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!trimmed) return null;
    const n = Number(trimmed);
    if (Number.isSafeInteger(n) && String(n) === trimmed) return n;
    return trimmed;
  }
  if (typeof raw === "number" && Number.isFinite(raw)) {
    return Number.isSafeInteger(raw) ? raw : String(raw);
  }
  return null;
}

function parseObjectIds(raw: unknown[]): ObjectIdValue[] {
  const out: ObjectIdValue[] = [];
  const seen = new Set<string>();
  for (const item of raw) {
    const id = parseObjectId(item);
    if (id == null) continue;
    const key = String(id);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(id);
  }
  return out;
}

function objectIdKey(id: ObjectIdValue): string {
  return String(id);
}

/** Same source Esri uses in addResultGraphicToView: results.aggregatedGeometry.line */
export function collectTraceLineGeometries(vm: any, view?: any): any[] {
  const out: any[] = [];
  const seen = new Set<any>();
  const push = (g: any) => {
    const geom = unwrapGeometry(g);
    if (!geom || seen.has(geom)) return;
    let vertices = 0;
    for (const path of geometryPaths(geom)) {
      vertices += asPathList(path).length;
    }
    if (vertices < 2) return;
    seen.add(geom);
    out.push(geom);
  };

  const traceItems = flattenAny(vm?.traceResults);
  if (!traceItems.length && Array.isArray(vm?.traceResults)) {
    traceItems.push(...vm.traceResults.filter(Boolean));
  }
  for (const item of traceItems) {
    const results = item?.results ?? item?.TraceResult ?? item?.traceResult;
    if (results?.aggregatedGeometry) {
      for (const key of Object.keys(results.aggregatedGeometry)) {
        push(results.aggregatedGeometry[key]);
      }
    }
    push(item?.graphic?.geometry);
    push(item?.resultGraphic?.geometry);
  }

  for (const item of flattenAny(vm?.traceResults)) {
    const results = item?.results ?? item?.TraceResult ?? item?.traceResult;
    if (results?.aggregatedGeometry) {
      push(results.aggregatedGeometry.line);
      push(results.aggregatedGeometry.polyline);
    }
    push(item?.graphic?.geometry);
    push(item?.resultGraphic?.geometry);
  }

  const layers = view?.map?.allLayers?.toArray?.() || [];
  const traceLayers: any[] = [];
  const otherGraphicLayers: any[] = [];
  for (const layer of layers) {
    if (String(layer?.type || "") !== "graphics") continue;
    const label = `${layer?.id || ""} ${layer?.title || ""}`.toLowerCase();
    if (
      label.includes("trace-results") ||
      label.includes("utility-network-trace")
    ) {
      traceLayers.push(layer);
    } else {
      otherGraphicLayers.push(layer);
    }
  }
  for (const layer of traceLayers) {
    for (const graphic of flattenAny(layer.graphics)) push(graphic?.geometry);
  }
  if (!out.length) {
    for (const layer of otherGraphicLayers) {
      for (const graphic of flattenAny(layer.graphics)) push(graphic?.geometry);
    }
    for (const graphic of flattenAny(view?.graphics)) push(graphic?.geometry);
  }
  return out;
}

let geometryEnginePromise: Promise<any> | null = null;

async function getGeometryEngineAsync(): Promise<any | null> {
  if (!geometryEnginePromise) {
    geometryEnginePromise = loadArcGISJSAPIModules([
      "esri/geometry/geometryEngine",
      "esri/geometry/geometryEngineAsync",
    ])
      .then((mods: any[]) => mods?.[0] || mods?.[1] || null)
      .catch((): null => null);
  }
  return geometryEnginePromise;
}

function asPathList(paths: any): any[] {
  if (!paths) return [];
  if (Array.isArray(paths)) return paths;
  if (typeof paths.toArray === "function") return paths.toArray() || [];
  const n = Number(paths.length || 0);
  if (n && typeof paths.getItemAt === "function") {
    const out: any[] = [];
    for (let i = 0; i < n; i++) out.push(paths.getItemAt(i));
    return out;
  }
  return [];
}

function pointXY(p: any): [number, number] | null {
  if (Array.isArray(p) && p.length >= 2) {
    const x = Number(p[0]);
    const y = Number(p[1]);
    return Number.isFinite(x) && Number.isFinite(y) ? [x, y] : null;
  }
  if (p && typeof p === "object") {
    const x = Number(p.x ?? p.longitude ?? p.lng);
    const y = Number(p.y ?? p.latitude ?? p.lat);
    return Number.isFinite(x) && Number.isFinite(y) ? [x, y] : null;
  }
  return null;
}

function haversineMeters(
  lon1: number,
  lat1: number,
  lon2: number,
  lat2: number,
): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371000 * Math.asin(Math.min(1, Math.sqrt(a)));
}

function geometryPaths(geom: any): any[] {
  if (!geom) return [];
  let paths = geom.paths ?? geom.curvePaths;
  if (!paths && typeof geom.toJSON === "function") {
    try {
      const json = geom.toJSON();
      paths = json?.paths ?? json?.curvePaths;
    } catch {
      /* ignore */
    }
  }
  return asPathList(paths);
}

let polylineUtilsPromise: Promise<{ fromJSON: (j: any) => any } | null> | null =
  null;

async function getPolylineFromJSON(): Promise<{ fromJSON: (j: any) => any } | null> {
  if (!polylineUtilsPromise) {
    polylineUtilsPromise = loadArcGISJSAPIModules([
      "esri/geometry/support/jsonUtils",
    ])
      .then((mods: any[]) => mods?.[0] || null)
      .catch((): null => null);
  }
  return polylineUtilsPromise;
}

async function normalizePolyline(geom: any): Promise<any> {
  if (!geom) return null;
  const cls = String(geom.declaredClass || geom.type || "").toLowerCase();
  if (cls.includes("polyline") && geometryPaths(geom).length) return geom;
  let json: any = geom;
  if (typeof geom.toJSON === "function") {
    try {
      json = geom.toJSON();
    } catch {
      json = geom;
    }
  }
  if (!json?.paths && !json?.curvePaths) return null;
  const utils = await getPolylineFromJSON();
  if (!utils?.fromJSON) return json;
  try {
    return utils.fromJSON({ ...json, type: "polyline" });
  } catch {
    return json;
  }
}

function polylineLengthManual(geom: any): number {
  const paths = geometryPaths(geom);
  if (!paths.length) return 0;
  let sample: [number, number] | null = null;
  let planar = 0;
  let geodesic = 0;
  for (const path of paths) {
    const pts = asPathList(path);
    for (let i = 1; i < pts.length; i++) {
      const a = pointXY(pts[i - 1]);
      const b = pointXY(pts[i]);
      if (!a || !b) continue;
      if (!sample) sample = a;
      planar += Math.hypot(b[0] - a[0], b[1] - a[1]);
      geodesic += haversineMeters(a[0], a[1], b[0], b[1]);
    }
  }
  if (!sample) return 0;
  const wkid = Number(
    geom?.spatialReference?.wkid || geom?.spatialReference?.latestWkid || 0,
  );
  const geographic =
    wkid === 4326 ||
    wkid === 4269 ||
    wkid === 4240 ||
    wkid === 4284 ||
    (wkid !== 3857 &&
      wkid !== 102100 &&
      Math.abs(sample[0]) <= 180 &&
      Math.abs(sample[1]) <= 90);
  return geographic ? geodesic : planar;
}

async function measurePolylineMetersAsync(
  geom: any,
  engine?: any,
): Promise<number> {
  if (!geom) return 0;
  const normalized = await normalizePolyline(geom);
  const target = normalized || geom;
  if (engine) {
    const readLen = async (fn: ((g: any, u: string) => any) | undefined) => {
      if (typeof fn !== "function") return 0;
      try {
        const raw = fn.call(engine, target, "meters");
        const n = Number(raw && typeof raw.then === "function" ? await raw : raw);
        return Number.isFinite(n) && n > 0 ? n : 0;
      } catch {
        return 0;
      }
    };
    const geodesic = await readLen(engine.geodesicLength);
    if (geodesic > 0) return geodesic;
    const planar = await readLen(engine.planarLength);
    if (planar > 0) return planar;
  }
  return polylineLengthManual(target);
}

/** Sync length from aggregated / result graphics — no server round-trips. */
export function measureTraceLineMetersSync(
  vm: any,
  view?: any,
): { meters: number; geoms: any[] } {
  const geoms = collectTraceLineGeometries(vm, view);
  let meters = 0;
  for (const g of geoms) {
    meters += polylineLengthManual(g);
  }
  return { meters, geoms };
}

/**
 * Fast length measure: sync first; optional short geometryEngine pass.
 * No multi-second polling — large traces must stay responsive.
 */
export async function measureTraceLineMeters(
  vm: any,
  view?: any,
  _elementCount = 0,
): Promise<{ meters: number; geoms: any[] }> {
  const sync = measureTraceLineMetersSync(vm, view);
  if (sync.meters > 0) return sync;

  const engine = await getGeometryEngineAsync();
  if (!engine || !sync.geoms.length) return sync;

  let meters = 0;
  for (const g of sync.geoms) {
    meters += await measurePolylineMetersAsync(g, engine);
  }
  return { meters, geoms: sync.geoms };
}

function objectIdField(layer: any): string {
  return (
    layer?.objectIdField ||
    layer?.fields?.find?.((f: any) => f.type === "esriFieldTypeOID")?.name ||
    "OBJECTID"
  );
}

function globalIdFieldName(layer: any): string {
  return (
    layer?.globalIdField ||
    layer?.fields?.find?.((f: any) => /globalid/i.test(String(f.name || "")))?.name ||
    "GLOBALID"
  );
}

function escSql(value: unknown): string {
  return String(value ?? "").replace(/'/g, "''");
}

function guidLiterals(id: string): string[] {
  const raw = String(id || "").trim();
  if (!raw) return [];
  const bare = raw.replace(/[{}]/g, "");
  return [...new Set([raw, `{${bare}}`, bare])].map((v) => `'${escSql(v)}'`);
}

function readObjectId(attrs: Record<string, unknown>, layer?: any): ObjectIdValue | null {
  const field = layer ? objectIdField(layer) : "OBJECTID";
  const raw =
    attrValue(attrs, field) ??
    attrValue(attrs, "OBJECTID") ??
    attrValue(attrs, "objectid");
  return parseObjectId(raw);
}

function readGlobalId(attrs: Record<string, unknown>, layer?: any): string {
  const field = layer ? globalIdFieldName(layer) : "GLOBALID";
  return String(
    attrValue(attrs, field) ??
      attrValue(attrs, "GLOBALID") ??
      attrValue(attrs, "globalid") ??
      "",
  ).trim();
}

function lineLengthFromFeature(feature: any, lengthField: string): number {
  const attrs = feature?.attributes || {};
  for (const f of [
    lengthField,
    "Shape__Length",
    "SHAPE__Length",
    "Shape_Length",
    "shape_length",
    "SHAPE_Length",
  ]) {
    const v = Number(attrValue(attrs, f));
    if (Number.isFinite(v) && v > 0) return v;
  }
  return polylineLengthManual(feature?.geometry);
}

function isLineFeature(
  feature: any,
  layer: any,
  handle: UnLayersHandle,
  lineLayerIds?: Set<string>,
): boolean {
  const path = String(layer?.parsedUrl?.path || layer?.url || "");
  const layerKey = urlLayerId(path);
  if (lineLayerIds?.size && layerKey && lineLayerIds.has(layerKey)) return true;
  const g = String(feature?.geometry?.type || layer?.geometryType || "").toLowerCase();
  if (g.includes("line") || g === "polyline") return true;
  if (g === "point" || g === "multipoint") return false;
  return layer === handle.lineLayer || childLayers(handle.lineLayer).includes(layer);
}

function isTransformerFeature(feature: any, handle: UnLayersHandle): boolean {
  const attrs = feature?.attributes || {};
  const { deviceFields } = handle;
  const raw = attrValue(attrs, deviceFields.assetGroup);
  if (isTransformerAssetGroup(raw)) return true;
  const domainLabel = deviceFields.assetGroupDomain.get(String(raw ?? ""));
  if (isTransformerLabel(domainLabel || String(raw ?? ""))) return true;
  const typeRaw = attrValue(attrs, deviceFields.assetType);
  const typeLabel =
    deviceFields.assetTypeDomain.get(String(typeRaw ?? "")) || String(typeRaw ?? "");
  return isTransformerLabel(typeLabel);
}

async function queryByGlobalIds(root: any, globalIds: string[]): Promise<any[]> {
  if (!root || !globalIds.length) return [];
  const unique = [...new Set(globalIds.map((id) => String(id || "").trim()).filter(Boolean))];
  const gidField = globalIdFieldName(root);
  const out: any[] = [];
  const seen = new Set<string>();
  const chunkSize = 15;
  for (let i = 0; i < unique.length; i += chunkSize) {
    const chunk = unique.slice(i, i + chunkSize);
    const literals = chunk.flatMap(guidLiterals);
    if (!literals.length) continue;
    try {
      const result = await queryFeaturesEverywhere(root, {
        where: `${gidField} IN (${literals.join(",")})`,
        outFields: ["*"],
        returnGeometry: false,
      });
      for (const feature of result?.features || []) {
        const gid = readGlobalId(feature?.attributes || {}, root);
        const oid = readObjectId(feature?.attributes || {}, root);
        const key = gid || (oid != null ? `oid:${objectIdKey(oid)}` : "");
        if (!key || seen.has(key)) continue;
        seen.add(key);
        out.push({ feature, layer: root });
      }
    } catch {
      /* next chunk */
    }
  }
  return out;
}

async function queryByObjectIds(
  root: any,
  objectIds: Array<number | string>,
): Promise<any[]> {
  if (!root || !objectIds.length) return [];
  const unique = parseObjectIds(objectIds);
  const out: any[] = [];
  const seen = new Set<string>();
  const chunkSize = 30;
  for (let i = 0; i < unique.length; i += chunkSize) {
    const chunk = unique.slice(i, i + chunkSize);
    try {
      const result = await queryFeaturesEverywhere(root, {
        objectIds: chunk,
        outFields: ["*"],
        returnGeometry: false,
      });
      for (const feature of result?.features || []) {
        const oid = readObjectId(feature?.attributes || {}, root);
        const key = `${root?.uid || root?.id || ""}:${oid != null ? objectIdKey(oid) : ""}`;
        if (oid == null || seen.has(key)) continue;
        seen.add(key);
        out.push({ feature, layer: root });
      }
    } catch {
      /* next chunk */
    }
  }
  return out;
}

async function queryByGeometries(
  root: any,
  geoms: any[],
  extra: Record<string, unknown> = {},
): Promise<any[]> {
  if (!root || !geoms.length) return [];
  const compact: any[] = [];
  for (const geometry of geoms) {
    const verts = vertexCount(geometry);
    if (verts > 400) {
      const ext = geometry.extent || geometry;
      if (ext) compact.push(ext);
    } else {
      compact.push(geometry);
    }
  }
  const out: any[] = [];
  const seen = new Set<string>();
  for (const geometry of compact) {
    try {
      const result = await queryFeaturesSafe(root, {
        geometry,
        spatialRelationship: "intersects",
        returnGeometry: false,
        outFields: ["*"],
        num: 2000,
        ...extra,
      });
      for (const feature of result?.features || []) {
        const oid = readObjectId(feature?.attributes || {}, root);
        const gid = readGlobalId(feature?.attributes || {}, root);
        const key = gid || (oid != null ? `oid:${objectIdKey(oid)}` : "");
        if (!key || seen.has(key)) continue;
        seen.add(key);
        out.push({ feature, layer: root });
      }
    } catch {
      /* next geometry */
    }
  }
  return out;
}

function vertexCount(geom: any): number {
  let n = 0;
  for (const path of geom?.paths || []) n += Array.isArray(path) ? path.length : 0;
  for (const ring of geom?.rings || []) n += Array.isArray(ring) ? ring.length : 0;
  if (Array.isArray(geom?.points)) n += geom.points.length;
  return n;
}

function networkSourceMeta(sourceId: unknown, un: any): any {
  const sources = flattenAny(un?.networkSources);
  const sid = Number(sourceId);
  return sources.find(
    (s: any) => Number(s?.sourceId ?? s?.id) === sid,
  );
}

function isLineNetworkSource(sourceId: unknown, un: any): boolean {
  const src = networkSourceMeta(sourceId, un);
  if (!src) return false;
  const usage = String(src.usageType || "").toLowerCase();
  if (
    usage === "line" ||
    usage === "structureline" ||
    usage === "subnetline"
  ) {
    return true;
  }
  const type = String(src.sourceType || src.type || "").toLowerCase();
  if (type === "edge") return true;
  if (
    type.includes("object") ||
    type === "junction" ||
    type === "container" ||
    type === "association"
  ) {
    return false;
  }
  const blob = `${src.name || ""} ${src.layerName || ""} ${src.sourceName || ""}`.toLowerCase();
  if (/edge object|junction object|uskuna|device/.test(blob)) return false;
  return /line|tarmog|liniya|conductor/.test(blob);
}

function isDeviceNetworkSource(sourceId: unknown, un: any): boolean {
  const src = networkSourceMeta(sourceId, un);
  if (!src) return false;
  const usage = String(src.usageType || "").toLowerCase();
  if (usage === "device" || usage === "junction" || usage === "assembly") {
    return true;
  }
  const type = String(src.sourceType || src.type || "").toLowerCase();
  if (type === "junction" || type === "container") return true;
  if (type === "edge" || type.includes("edgeobject")) return false;
  const blob = `${src.name || ""} ${src.layerName || ""} ${src.sourceName || ""}`.toLowerCase();
  return /device|junction|uskuna|assembly|transform/.test(blob);
}

function collectLayerNumericIds(layer: any): Set<string> {
  const ids = new Set<string>();
  const walk = (node: any): void => {
    if (!node) return;
    const url = String(node.url || node.parsedUrl?.path || "");
    const m = url.match(/\/(\d+)\/?$/);
    if (m) ids.add(m[1]);
    if (node.layerId != null) ids.add(String(node.layerId));
    if (node.source?.mapLayerId != null) {
      ids.add(String(node.source.mapLayerId));
    }
    for (const child of childLayers(node)) walk(child);
  };
  walk(layer);
  return ids;
}

function resolveOidGroups(
  un: any,
  elements: any[],
  lineLayer: any,
  deviceLayer: any,
): { lineOids: ObjectIdValue[]; deviceOids: ObjectIdValue[] } {
  const lineIds = collectLayerNumericIds(lineLayer);
  const deviceIds = collectLayerNumericIds(deviceLayer);
  for (const src of flattenAny(un?.networkSources)) {
    const sid = src?.sourceId ?? src?.id;
    const lid = String(
      un?.getLayerIdBySourceId?.(sid) ?? src?.layerId ?? "",
    );
    if (!lid) continue;
    if (isLineNetworkSource(sid, un)) lineIds.add(lid);
    else if (isDeviceNetworkSource(sid, un)) deviceIds.add(lid);
  }

  const lineOids: ObjectIdValue[] = [];
  const deviceOids: ObjectIdValue[] = [];

  if (un?.getObjectIdsFromElements) {
    try {
      const groups = un.getObjectIdsFromElements(elements) || [];
      for (const g of groups) {
        const oids = parseObjectIds(g?.objectIds || []);
        if (!oids.length) continue;
        const layerKey = urlLayerId(g.layerUrl || g.url || "");
        if (lineIds.has(layerKey)) lineOids.push(...oids);
        else if (deviceIds.has(layerKey)) deviceOids.push(...oids);
      }
    } catch {
      /* fall through */
    }
  }

  for (const el of elements) {
    const oid = parseObjectId(el?.objectId ?? el?.objectID);
    if (oid == null) continue;
    if (isLineNetworkSource(el?.networkSourceId, un)) lineOids.push(oid);
    else if (isDeviceNetworkSource(el?.networkSourceId, un)) deviceOids.push(oid);
  }

  return {
    lineOids: parseObjectIds(lineOids),
    deviceOids: parseObjectIds(deviceOids),
  };
}

function normalizeServiceUrl(url: string): string {
  return String(url || "")
    .toLowerCase()
    .replace(/\/+$/, "")
    .replace(/featureserver/g, "mapserver");
}

function urlsMatchService(a: string, b: string): boolean {
  const na = normalizeServiceUrl(a);
  const nb = normalizeServiceUrl(b);
  if (na && nb && na === nb) return true;
  const ida = urlLayerId(a);
  const idb = urlLayerId(b);
  return !!ida && ida === idb;
}

function normalizeExactUrl(url: string): string {
  return String(url || "").replace(/\/+$/, "");
}

/** Esri Trace VM matches parsedUrl.path === layerUrl exactly. */
function findLayersByExactUrl(view: any, layerUrl: string): any[] {
  const target = normalizeExactUrl(layerUrl);
  if (!target) return [];
  const found: any[] = [];
  const seen = new Set<any>();
  const tryAdd = (layer: any): void => {
    if (!layer || seen.has(layer)) return;
    const path = normalizeExactUrl(String(layer.parsedUrl?.path || layer.url || ""));
    if (path !== target) return;
    seen.add(layer);
    found.push(layer);
  };

  for (const table of view?.map?.allTables?.toArray?.() || []) tryAdd(table);
  for (const layer of view?.map?.allLayers?.toArray?.() || []) tryAdd(layer);
  return found;
}

function findMapLayersForGroupUrl(
  view: any,
  groupUrl: string,
  lineLayer: any,
  deviceLayer: any,
): any[] {
  const exact = findLayersByExactUrl(view, groupUrl);
  if (exact.length) return exact;

  const found: any[] = [];
  const seen = new Set<any>();
  const tryAdd = (layer: any): void => {
    if (!layer || seen.has(layer)) return;
    const path = String(layer.parsedUrl?.path || layer.url || "");
    if (!urlsMatchService(path, groupUrl)) return;
    seen.add(layer);
    found.push(layer);
  };

  for (const table of view?.map?.allTables?.toArray?.() || []) tryAdd(table);
  for (const layer of view?.map?.allLayers?.toArray?.() || []) {
    tryAdd(layer);
    for (const child of childLayers(layer)) tryAdd(child);
  }
  for (const root of [lineLayer, deviceLayer]) {
    tryAdd(root);
    for (const child of childLayers(root)) tryAdd(child);
  }
  return found;
}

/** Same query path Esri Trace VM uses (getFeaturesFromLayers + parsedUrl match). */
async function queryFeaturesFromElementsEsri(
  vm: any,
  view: any,
  elements: any[],
  lineLayer: any,
  deviceLayer: any,
): Promise<any[]> {
  const un = vm?.utilityNetwork;
  if (!un?.getObjectIdsFromElements || !view || !elements.length) return [];

  const [getFeaturesFromLayers] = await loadArcGISJSAPIModules([
    "esri/networks/support/utils",
  ]);
  if (typeof getFeaturesFromLayers !== "function") return [];

  const groups = un.getObjectIdsFromElements(elements) || [];
  const out: any[] = [];

    for (const g of groups) {
    const layerUrl = String(g?.layerUrl || g?.url || "");
    const objectIds = parseObjectIds(g?.objectIds || []);
    if (!layerUrl || !objectIds.length) continue;

    const layers = findMapLayersForGroupUrl(
      view,
      layerUrl,
      lineLayer,
      deviceLayer,
    );
    if (!layers.length) continue;

    const chunkSize = 80;
    for (const layer of layers) {
      const matchedUrl = normalizeExactUrl(
        String(layer.parsedUrl?.path || layerUrl),
      );
      for (let i = 0; i < objectIds.length; i += chunkSize) {
        const chunk = objectIds.slice(i, i + chunkSize);
        try {
          const rows = await getFeaturesFromLayers(
            {
              layers: [layer],
              layerInfos: [
                {
                  layerUrl: matchedUrl,
                  objectIds: chunk,
                  outFields: ["*"],
                },
              ],
              returnGeometry: false,
              outSpatialReference: view.spatialReference,
            },
            false,
          );
          for (const row of rows || []) {
            if (row?.featureSet?.features?.length) out.push(row);
          }
        } catch {
          /* next chunk */
        }
      }
    }
  }
  return out;
}

function applyFeatureSetStats(
  ctx: TraceFilterContext,
  featureSets: any[],
  handle: UnLayersHandle,
  lineLayerIds?: Set<string>,
): void {
  if (!featureSets?.length) return;
  const hits: Array<{ feature: any; layer: any }> = [];
  for (const info of featureSets) {
    const layer = info?.layer;
    const features = info?.featureSet?.features || info?.features || [];
    for (const feature of features) {
      if (feature) hits.push({ feature, layer });
    }
  }
  if (!hits.length) return;
  const fromHits = statsFromHits(hits, handle, lineLayerIds);
  ctx.transformers = fromHits.transformers || ctx.transformers;
  ctx.lineMeters = maxPositiveLineMeters(ctx.lineMeters, fromHits.lineMeters);
  ctx.deviceObjectIds = [
    ...new Set([...ctx.deviceObjectIds, ...fromHits.deviceObjectIds]),
  ];
  ctx.lineObjectIds = [
    ...new Set([...ctx.lineObjectIds, ...fromHits.lineObjectIds]),
  ];
  ctx.deviceGlobalIds = [
    ...new Set([...ctx.deviceGlobalIds, ...fromHits.deviceGlobalIds]),
  ];
  ctx.lineGlobalIds = [
    ...new Set([...ctx.lineGlobalIds, ...fromHits.lineGlobalIds]),
  ];
  ctx.devices = ctx.deviceObjectIds.length || ctx.deviceGlobalIds.length;
}

function findLayerByServiceUrl(
  view: any,
  url: string,
  fallbackRoot?: any,
): any | null {
  const fromView = findLayersByExactUrl(view, url);
  if (fromView.length) return fromView[0];

  const target = normalizeExactUrl(url);
  const targetId = urlLayerId(url);
  const seen = new Set<any>();
  const walk = (node: any): any | null => {
    if (!node || seen.has(node)) return null;
    seen.add(node);
    const nodeUrl = normalizeExactUrl(String(node.url || node.parsedUrl?.path || ""));
    if (nodeUrl && nodeUrl === target) return node;
    if (targetId && urlLayerId(nodeUrl) === targetId) return node;
    for (const child of childLayers(node)) {
      const hit = walk(child);
      if (hit) return hit;
    }
    return null;
  };
  for (const root of [fallbackRoot].filter(Boolean)) {
    const hit = walk(root);
    if (hit) return hit;
  }
  return null;
}

function buildLineLayerIdSet(un: any, lineLayer: any): Set<string> {
  const lineIds = collectLayerNumericIds(lineLayer);
  for (const src of flattenAny(un?.networkSources)) {
    const sid = src?.sourceId ?? src?.id;
    const lid = String(
      un?.getLayerIdBySourceId?.(sid) ?? src?.layerId ?? "",
    );
    if (!lid) continue;
    if (isLineNetworkSource(sid, un)) lineIds.add(lid);
  }
  return lineIds;
}

async function sumLineLengthFromOidGroups(
  un: any,
  elements: any[],
  lineLayer: any,
  lengthField: string,
  view?: any,
  deviceLayer?: any,
): Promise<number> {
  if (!un?.getObjectIdsFromElements || !lineLayer || !elements.length) return 0;
  const lineIds = buildLineLayerIdSet(un, lineLayer);
  const deviceIds = collectLayerNumericIds(deviceLayer);
  for (const src of flattenAny(un?.networkSources)) {
    const sid = src?.sourceId ?? src?.id;
    const lid = String(
      un?.getLayerIdBySourceId?.(sid) ?? src?.layerId ?? "",
    );
    if (!lid) continue;
    if (isDeviceNetworkSource(sid, un)) deviceIds.add(lid);
  }
  let total = 0;
  try {
    const groups = un.getObjectIdsFromElements(elements) || [];
    for (const g of groups) {
      const layerKey = urlLayerId(g.layerUrl || g.url || "");
      const oids = parseObjectIds(g?.objectIds || []);
      if (!oids.length) continue;
      const isDeviceGroup = layerKey && deviceIds.has(layerKey);
      const isLineGroup =
        (layerKey && lineIds.has(layerKey)) || !isDeviceGroup;
      if (!isLineGroup) continue;
      const groupUrl = String(g.layerUrl || g.url || "");
      const target = findLayerByServiceUrl(view, groupUrl, lineLayer);
      let groupLen = 0;
      if (target) {
        groupLen = await sumLineLengthByObjectIds(target, oids, lengthField);
      }
      if (groupLen <= 0 && groupUrl) {
        groupLen = await sumLineLengthByServiceUrl(groupUrl, oids, lengthField);
      }
      if (groupLen <= 0) {
        groupLen = await sumLineLengthByObjectIds(lineLayer, oids, lengthField);
      }
      total += groupLen;
    }
  } catch {
    /* ignore */
  }
  return total;
}

async function queryHitsFromOidGroups(
  un: any,
  elements: any[],
  lineLayer: any,
  deviceLayer: any,
  view?: any,
): Promise<Array<{ feature: any; layer: any }>> {
  if (!un?.getObjectIdsFromElements) return [];
  const lineIds = buildLineLayerIdSet(un, lineLayer);
  const deviceIds = collectLayerNumericIds(deviceLayer);
  for (const src of flattenAny(un?.networkSources)) {
    const sid = src?.sourceId ?? src?.id;
    const lid = String(
      un?.getLayerIdBySourceId?.(sid) ?? src?.layerId ?? "",
    );
    if (!lid) continue;
    if (isDeviceNetworkSource(sid, un)) deviceIds.add(lid);
  }

  const hits: Array<{ feature: any; layer: any }> = [];
  try {
    const groups = un.getObjectIdsFromElements(elements) || [];
    for (const g of groups) {
      const layerKey = urlLayerId(g.layerUrl || g.url || "");
      const oids = parseObjectIds(g?.objectIds || []);
      if (!oids.length) continue;
      const groupUrl = String(g.layerUrl || g.url || "");
      if (lineIds.has(layerKey)) {
        const target = findLayerByServiceUrl(view, groupUrl, lineLayer) || lineLayer;
        hits.push(...(await queryByObjectIds(target, oids)));
      } else if (deviceIds.has(layerKey)) {
        const target =
          findLayerByServiceUrl(view, groupUrl, deviceLayer) || deviceLayer;
        hits.push(...(await queryByObjectIds(target, oids)));
      }
    }
  } catch {
    /* ignore */
  }
  return hits;
}

async function sumLineLengthByServiceUrl(
  serviceLayerUrl: string,
  objectIds: ObjectIdValue[],
  lengthField: string,
): Promise<number> {
  if (!serviceLayerUrl || !objectIds.length) return 0;
  try {
    const [FeatureLayer] = await loadArcGISJSAPIModules([
      "esri/layers/FeatureLayer",
    ]);
    const layer = new FeatureLayer({ url: serviceLayerUrl });
    await layer.load();
    return sumLineLengthByObjectIds(layer, objectIds, lengthField);
  } catch {
    return 0;
  }
}

function maxPositiveLineMeters(...values: number[]): number {
  let best = 0;
  for (const v of values) {
    if (Number.isFinite(v) && v > best) best = v;
  }
  return best;
}

async function sumLineLengthByObjectIds(
  root: any,
  objectIds: Array<number | string>,
  lengthField: string,
): Promise<number> {
  if (!root || !objectIds.length) return 0;
  const unique = parseObjectIds(objectIds);
  const lengthFields = [
    lengthField,
    "Shape__Length",
    "SHAPE__Length",
    "Shape_Length",
    "shape_length",
  ].filter(Boolean);
  const oidField = objectIdField(root);
  const outFields = [...new Set([oidField, ...lengthFields])];
  let total = 0;
  const chunkSize = 30;
  for (let i = 0; i < unique.length; i += chunkSize) {
    const chunk = unique.slice(i, i + chunkSize);
    try {
      const result = await queryFeaturesEverywhere(root, {
        objectIds: chunk,
        outFields,
        returnGeometry: false,
      });
      for (const feature of result?.features || []) {
        const attrs = feature?.attributes || {};
        for (const field of lengthFields) {
          const v = Number(attrValue(attrs, field));
          if (Number.isFinite(v) && v > 0) {
            total += v;
            break;
          }
        }
      }
    } catch {
      /* next chunk */
    }
  }
  return total;
}

function sourceKind(
  el: any,
  un: any,
): "line" | "device" | "other" {
  if (el?.percentAlong != null || el?.positionFrom != null || el?.positionTo != null) {
    return "line";
  }
  if (isLineNetworkSource(el?.networkSourceId, un)) return "line";
  if (isDeviceNetworkSource(el?.networkSourceId, un)) return "device";
  return "other";
}

async function sumFieldByWhere(
  root: any,
  where: string,
  field: string,
): Promise<number | null> {
  if (!root || !where || !field) return null;
  const result = await queryFeaturesEverywhere(root, {
    where,
    outStatistics: [
      {
        onStatisticField: field,
        outStatisticFieldName: "stat_value",
        statisticType: "sum",
      },
    ],
    returnGeometry: false,
  });
  if (!result?.features?.length) return null;
  let sum = 0;
  let any = false;
  for (const feature of result.features) {
    const attrs = feature?.attributes || {};
    const n = Number(
      attrs.stat_value ??
        attrs.STAT_VALUE ??
        attrs.Stat_Value ??
        Object.values(attrs)[0],
    );
    if (Number.isFinite(n)) {
      sum += n;
      any = true;
    }
  }
  return any ? sum : null;
}

async function sumLineMetersOnLayer(
  root: any,
  globalIds: string[],
  objectIds: Array<number | string>,
  lengthField: string,
): Promise<number> {
  if (!root) return 0;
  const fields = [...new Set([lengthField, "Shape__Length"].filter(Boolean))];
  const gidField = globalIdFieldName(root);
  const oidField = objectIdField(root);
  const uniqueGids = [
    ...new Set(globalIds.map((id) => String(id || "").trim()).filter(Boolean)),
  ];
  const uniqueOids = parseObjectIds(objectIds);

  const sumWhere = async (where: string): Promise<number | null> => {
    for (const field of fields) {
      const n = await sumFieldByWhere(root, where, field);
      if (n != null) return n;
    }
    return null;
  };

  let total = 0;
  for (let i = 0; i < uniqueGids.length; i += 15) {
    const chunk = uniqueGids.slice(i, i + 15);
    const literals = chunk.flatMap(guidLiterals);
    if (!literals.length) continue;
    const n = await sumWhere(`${gidField} IN (${literals.join(",")})`);
    if (n != null) total += n;
  }
  if (total > 0) return total;

  if (uniqueOids.length) {
    total = await sumLineLengthByObjectIds(root, uniqueOids, lengthField);
    if (total > 0) return total;
  }

  const hits = uniqueGids.length
    ? await queryByGlobalIds(root, uniqueGids)
    : uniqueOids.length
      ? await queryByObjectIds(root, uniqueOids)
      : [];
  let attrSum = 0;
  for (const { feature } of hits) {
    attrSum += lineLengthFromFeature(feature, lengthField);
  }
  return attrSum;
}

function statsFromHits(
  hits: Array<{ feature: any; layer: any }>,
  handle: UnLayersHandle,
  lineLayerIds?: Set<string>,
): Pick<
  TraceFilterContext,
  | "transformers"
  | "lineMeters"
  | "deviceObjectIds"
  | "lineObjectIds"
  | "deviceGlobalIds"
  | "lineGlobalIds"
> {
  const lengthField = handle.lineFields.length || "Shape__Length";
  let transformers = 0;
  let lineMeters = 0;
  const deviceObjectIds: ObjectIdValue[] = [];
  const lineObjectIds: ObjectIdValue[] = [];
  const deviceGlobalIds: string[] = [];
  const lineGlobalIds: string[] = [];
  const seenDevice = new Set<string>();
  const seenLine = new Set<string>();

  for (const { feature, layer } of hits) {
    const oid = readObjectId(feature?.attributes || {}, layer);
    const gid = readGlobalId(feature?.attributes || {}, layer);
    const key = gid || (oid != null ? `oid:${objectIdKey(oid)}` : "");
    if (isLineFeature(feature, layer, handle, lineLayerIds)) {
      if (key && seenLine.has(key)) continue;
      if (key) seenLine.add(key);
      if (oid != null) lineObjectIds.push(oid);
      if (gid) lineGlobalIds.push(gid);
      lineMeters += lineLengthFromFeature(feature, lengthField);
    } else {
      if (key && seenDevice.has(key)) continue;
      if (key) seenDevice.add(key);
      if (oid != null) deviceObjectIds.push(oid);
      if (gid) deviceGlobalIds.push(gid);
      if (isTransformerFeature(feature, handle)) transformers += 1;
    }
  }

  return {
    transformers,
    lineMeters,
    deviceObjectIds: parseObjectIds(deviceObjectIds),
    lineObjectIds: parseObjectIds(lineObjectIds),
    deviceGlobalIds,
    lineGlobalIds,
  };
}

function elementAssetGroup(el: any): string {
  return String(
    el?.assetGroupCode ??
      el?.assetGroup ??
      el?.ASSETGROUP ??
      el?.assetgroup ??
      el?.attributes?.ASSETGROUP ??
      el?.attributes?.assetgroup ??
      "",
  ).trim();
}

function isSubstationElement(el: any): boolean {
  const ag = elementAssetGroup(el);
  if (isSubstationAssetGroup(ag) || isSubstationLabel(ag)) return true;
  const at =
    el?.assetTypeCode ?? el?.assetType ?? el?.ASSETTYPE ?? el?.assettype;
  return isSubstationLabel(String(at ?? ""));
}

function isExternalElement(el: any): boolean {
  const ag = elementAssetGroup(el);
  if (isExternalAssetGroup(ag) || isExternalSourceLabel(ag)) return true;
  const at =
    el?.assetTypeCode ?? el?.assetType ?? el?.ASSETTYPE ?? el?.assettype;
  return isExternalSourceLabel(String(at ?? ""));
}

export interface TraceElementBreakdownRow {
  id: "line" | "transformer" | "substation" | "external" | "device";
  count: number;
}

function elementsFromTraceResultItem(item: any): any[] {
  const tr = item?.TraceResult || item?.traceResult || item?.results;
  return flattenAny(tr?.elements);
}

/** Count traced elements by equipment category for the results tab. */
export function breakdownTraceResultItem(
  item: any,
  un: any,
): TraceElementBreakdownRow[] {
  const elements = elementsFromTraceResultItem(item);
  if (!elements.length) return [];

  let lines = 0;
  let transformers = 0;
  let substations = 0;
  let external = 0;
  let devices = 0;

  for (const el of elements) {
    const kind = sourceKind(el, un);
    if (kind === "line") {
      lines += 1;
      continue;
    }
    if (isTransformerElement(el)) {
      transformers += 1;
      continue;
    }
    if (isSubstationElement(el)) {
      substations += 1;
      continue;
    }
    if (isExternalElement(el)) {
      external += 1;
      continue;
    }
    devices += 1;
  }

  const rows: TraceElementBreakdownRow[] = [];
  if (lines) rows.push({ id: "line", count: lines });
  if (transformers) rows.push({ id: "transformer", count: transformers });
  if (substations) rows.push({ id: "substation", count: substations });
  if (external) rows.push({ id: "external", count: external });
  if (devices) rows.push({ id: "device", count: devices });

  const order: TraceElementBreakdownRow["id"][] = [
    "line",
    "transformer",
    "substation",
    "external",
    "device",
  ];
  rows.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  return rows;
}

function isTransformerElement(el: any): boolean {
  const ag = elementAssetGroup(el);
  if (isTransformerAssetGroup(ag) || isTransformerLabel(ag)) {
    return true;
  }
  const at =
    el?.assetTypeCode ?? el?.assetType ?? el?.ASSETTYPE ?? el?.assettype;
  return isTransformerLabel(String(at ?? ""));
}

function statsFromElements(elements: any[], un: any): {
  transformers: number;
  lineGlobalIds: string[];
  deviceGlobalIds: string[];
  lineObjectIds: ObjectIdValue[];
  deviceObjectIds: ObjectIdValue[];
  allGlobalIds: string[];
  allObjectIds: ObjectIdValue[];
} {
  const lineGlobalIds: string[] = [];
  const deviceGlobalIds: string[] = [];
  const lineObjectIds: ObjectIdValue[] = [];
  const deviceObjectIds: ObjectIdValue[] = [];
  const allGlobalIds: string[] = [];
  const allObjectIds: ObjectIdValue[] = [];
  let transformers = 0;

  for (const el of elements) {
    const gid = String(el?.globalId || el?.globalid || "").trim();
    const oid = parseObjectId(el?.objectId ?? el?.objectID);
    if (gid) allGlobalIds.push(gid);
    if (oid != null) allObjectIds.push(oid);

    const kind = sourceKind(el, un);
    if (kind === "line") {
      if (gid) lineGlobalIds.push(gid);
      if (oid != null) lineObjectIds.push(oid);
    } else {
      if (gid) deviceGlobalIds.push(gid);
      if (oid != null) deviceObjectIds.push(oid);
      if (isTransformerElement(el)) transformers += 1;
    }
  }

  return {
    transformers,
    lineGlobalIds: [...new Set(lineGlobalIds)],
    deviceGlobalIds: [...new Set(deviceGlobalIds)],
    lineObjectIds: parseObjectIds(lineObjectIds),
    deviceObjectIds: parseObjectIds(deviceObjectIds),
    allGlobalIds: [...new Set(allGlobalIds)],
    allObjectIds: parseObjectIds(allObjectIds),
  };
}

export function buildTraceFilterFromFeatureSets(
  featureSets: any[] | null | undefined,
  handle: UnLayersHandle | null,
  lineLayerIds?: Set<string>,
): TraceFilterContext | null {
  if (!handle || !featureSets?.length) return null;
  const hits: Array<{ feature: any; layer: any }> = [];
  for (const info of featureSets) {
    const layer = info?.layer || handle.deviceLayer;
    const features = info?.featureSet?.features || info?.features || [];
    for (const feature of features) hits.push({ feature, layer });
  }
  const fromHits = statsFromHits(hits, handle, lineLayerIds);
  return {
    ...emptyFilter(),
    ...fromHits,
    devices: fromHits.deviceObjectIds.length || fromHits.deviceGlobalIds.length,
    allGlobalIds: [...fromHits.deviceGlobalIds, ...fromHits.lineGlobalIds],
    allObjectIds: [...fromHits.deviceObjectIds, ...fromHits.lineObjectIds],
  };
}

export function mergeTraceFilters(
  base: TraceFilterContext | null | undefined,
  next: TraceFilterContext | null | undefined,
): TraceFilterContext | null {
  if (!base) return next || null;
  if (!next) return base;
  return {
    ...next,
    transformers: next.transformers > 0 ? next.transformers : base.transformers,
    lineMeters: maxPositiveLineMeters(base.lineMeters, next.lineMeters),
    devices:
      next.devices > 0
        ? next.devices
        : base.devices ||
          base.deviceObjectIds.length ||
          base.deviceGlobalIds.length,
    deviceObjectIds: parseObjectIds([
      ...base.deviceObjectIds,
      ...next.deviceObjectIds,
    ]),
    lineObjectIds: parseObjectIds([
      ...base.lineObjectIds,
      ...next.lineObjectIds,
    ]),
    deviceGlobalIds: [
      ...new Set([...base.deviceGlobalIds, ...next.deviceGlobalIds]),
    ],
    lineGlobalIds: [
      ...new Set([...base.lineGlobalIds, ...next.lineGlobalIds]),
    ],
    allGlobalIds: [...new Set([...base.allGlobalIds, ...next.allGlobalIds])],
    allObjectIds: parseObjectIds([
      ...base.allObjectIds,
      ...next.allObjectIds,
    ]),
    traceGeometries: next.traceGeometries?.length
      ? next.traceGeometries
      : base.traceGeometries,
    prefetchedFeatureSets:
      next.prefetchedFeatureSets?.length
        ? next.prefetchedFeatureSets
        : base.prefetchedFeatureSets,
    tableReady: !!(next.tableReady || base.tableReady),
  };
}

export function countTraceElements(vm: any): number {
  return collectTraceElements(vm).length;
}

export function traceFilterFromVmImmediate(vm: any, view?: any): TraceFilterContext {
  const elements = collectTraceElements(vm);
  const geoms = collectTraceLineGeometries(vm, view);
  const fromElements = statsFromElements(elements, vm?.utilityNetwork);
  const geomMeters = geoms.reduce((sum, g) => sum + polylineLengthManual(g), 0);
  const ctx = emptyFilter();
  ctx.allGlobalIds = fromElements.allGlobalIds;
  ctx.allObjectIds = fromElements.allObjectIds;
  ctx.deviceGlobalIds = fromElements.deviceGlobalIds;
  ctx.lineGlobalIds = fromElements.lineGlobalIds;
  ctx.deviceObjectIds = fromElements.deviceObjectIds;
  ctx.lineObjectIds = fromElements.lineObjectIds;
  ctx.transformers = fromElements.transformers;
  ctx.lineMeters = geomMeters;
  ctx.devices = fromElements.deviceObjectIds.length || fromElements.deviceGlobalIds.length;
  ctx.traceGeometries = geoms;
  return ctx;
}

/**
 * Build indicator stats + table IDs from a completed UN trace.
 * Fast path: elements + select-features + sync geometry length.
 * Heavy OID/GID SUM queries run only when lineMeters is still 0.
 */
export async function buildTraceFilterContext(
  vm: any,
  handle: UnLayersHandle | null,
  featureSets?: any[] | null,
  view?: any,
): Promise<TraceFilterContext | null> {
  const liveHandle =
    handle || (view?.map ? prepareUnLayers(view.map) : null);
  const elements = collectTraceElements(vm);
  if (!liveHandle) return traceFilterFromVmImmediate(vm, view);

  const fromElements = statsFromElements(elements, vm?.utilityNetwork);
  const un = vm?.utilityNetwork;
  const oidGroups = resolveOidGroups(
    un,
    elements,
    liveHandle.lineLayer,
    liveHandle.deviceLayer,
  );
  const lineLayerIds = buildLineLayerIdSet(un, liveHandle.lineLayer);

  const ctx = emptyFilter();
  ctx.allGlobalIds = fromElements.allGlobalIds;
  ctx.allObjectIds = fromElements.allObjectIds;
  ctx.transformers = fromElements.transformers;
  ctx.deviceGlobalIds = fromElements.deviceGlobalIds;
  ctx.lineGlobalIds = fromElements.lineGlobalIds;
  ctx.deviceObjectIds = [
    ...new Set([...fromElements.deviceObjectIds, ...oidGroups.deviceOids]),
  ];
  ctx.lineObjectIds = [
    ...new Set([...fromElements.lineObjectIds, ...oidGroups.lineOids]),
  ];

  // Sync geometry length (no polling) — enough for 4th indicator in most traces.
  const measured = measureTraceLineMetersSync(vm, view);
  ctx.traceGeometries = measured.geoms;
  ctx.lineMeters = measured.meters;

  // Prefer Esri select-features attrs (Shape__Length) — local, no re-query.
  let activeFeatureSets = featureSets?.length ? featureSets : null;
  if (activeFeatureSets?.length) {
    applyFeatureSetStats(ctx, activeFeatureSets, liveHandle, lineLayerIds);
  }

  const lengthField = liveHandle.lineFields?.length || "Shape__Length";
  const hasIds =
    ctx.lineObjectIds.length > 0 ||
    ctx.deviceObjectIds.length > 0 ||
    ctx.lineGlobalIds.length > 0 ||
    ctx.deviceGlobalIds.length > 0;

  // Only if select-features missed AND we have no meters: one Esri feature pull.
  if (!ctx.lineMeters && !activeFeatureSets?.length && elements.length) {
    const esriSets = await queryFeaturesFromElementsEsri(
      vm,
      view,
      elements,
      liveHandle.lineLayer,
      liveHandle.deviceLayer,
    );
    if (esriSets.length) {
      activeFeatureSets = esriSets;
      applyFeatureSetStats(ctx, esriSets, liveHandle, lineLayerIds);
    }
  }

  // Single SUM fallback when attrs/geometry still have no length.
  if (!ctx.lineMeters && (oidGroups.lineOids.length || ctx.lineObjectIds.length)) {
    const lineOids = oidGroups.lineOids.length
      ? oidGroups.lineOids
      : ctx.lineObjectIds;
    const oidGroupMeters = await sumLineLengthFromOidGroups(
      un,
      elements,
      liveHandle.lineLayer,
      lengthField,
      view,
      liveHandle.deviceLayer,
    );
    if (oidGroupMeters > 0) {
      ctx.lineMeters = oidGroupMeters;
    } else {
      ctx.lineMeters = await sumLineLengthByObjectIds(
        liveHandle.lineLayer,
        lineOids,
        lengthField,
      );
    }
  }

  // Enrich IDs from feature sets (already in memory) — skip extra server hits.
  if (activeFeatureSets?.length) {
    const hits = activeFeatureSets.flatMap((info: any) => {
      const layer = info?.layer;
      return (info?.featureSet?.features || info?.features || []).map(
        (feature: any) => ({ feature, layer }),
      );
    });
    if (hits.length) {
      const fromHits = statsFromHits(hits, liveHandle, lineLayerIds);
      ctx.deviceObjectIds = [
        ...new Set([...ctx.deviceObjectIds, ...fromHits.deviceObjectIds]),
      ];
      ctx.lineObjectIds = [
        ...new Set([...ctx.lineObjectIds, ...fromHits.lineObjectIds]),
      ];
      ctx.deviceGlobalIds = [
        ...new Set([...ctx.deviceGlobalIds, ...fromHits.deviceGlobalIds]),
      ];
      ctx.lineGlobalIds = [
        ...new Set([...ctx.lineGlobalIds, ...fromHits.lineGlobalIds]),
      ];
      ctx.transformers = fromHits.transformers || ctx.transformers;
      ctx.lineMeters = maxPositiveLineMeters(ctx.lineMeters, fromHits.lineMeters);
    }
  } else if (!hasIds && oidGroups.lineOids.length + oidGroups.deviceOids.length) {
    // Rare: no feature sets — one OID group query for table IDs only.
    const hits = await queryHitsFromOidGroups(
      un,
      elements,
      liveHandle.lineLayer,
      liveHandle.deviceLayer,
      view,
    );
    if (hits.length) {
      const fromHits = statsFromHits(hits, liveHandle, lineLayerIds);
      ctx.deviceObjectIds = [
        ...new Set([...ctx.deviceObjectIds, ...fromHits.deviceObjectIds]),
      ];
      ctx.lineObjectIds = [
        ...new Set([...ctx.lineObjectIds, ...fromHits.lineObjectIds]),
      ];
      ctx.deviceGlobalIds = [
        ...new Set([...ctx.deviceGlobalIds, ...fromHits.deviceGlobalIds]),
      ];
      ctx.lineGlobalIds = [
        ...new Set([...ctx.lineGlobalIds, ...fromHits.lineGlobalIds]),
      ];
      ctx.transformers = fromHits.transformers || ctx.transformers;
      ctx.lineMeters = maxPositiveLineMeters(ctx.lineMeters, fromHits.lineMeters);
    }
  }

  ctx.devices = ctx.deviceObjectIds.length || ctx.deviceGlobalIds.length;
  ctx.allGlobalIds = [
    ...new Set([
      ...ctx.allGlobalIds,
      ...ctx.deviceGlobalIds,
      ...ctx.lineGlobalIds,
    ]),
  ];
  ctx.allObjectIds = [
    ...new Set([
      ...ctx.allObjectIds,
      ...ctx.deviceObjectIds,
      ...ctx.lineObjectIds,
    ]),
  ];
  if (activeFeatureSets?.length) {
    ctx.prefetchedFeatureSets = activeFeatureSets;
  }
  ctx.tableReady = true;
  return ctx;
}

export async function computeTraceSelectionStats(
  vm: any,
  handle: UnLayersHandle | null,
): Promise<TraceSelectionStats | null> {
  const ctx = await buildTraceFilterContext(vm, handle);
  if (!ctx) return null;
  return {
    transformers: ctx.transformers,
    devices: ctx.devices,
    lineMeters: ctx.lineMeters,
  };
}
