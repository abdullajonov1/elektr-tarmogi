/**
 * Statistics, chart data, and connected-object queries for UN_Electrik layers.
 */
import {
  attrValue,
  domainLabel,
  fallbackVoltageColor,
  formatMeters,
  isTransformerLabel,
  isSubstationLabel,
  isExternalSourceLabel,
  parseVoltageKv,
  type DeviceFieldMap,
  type LineFieldMap,
} from "./un-fields";
import type { UnLayersHandle } from "./un-layers";
import { childLayers } from "./un-walk";

export interface VoltageChartRow {
  label: string;
  value: number;
  color: string;
}

export interface GlobalStats {
  totalLineMeters: number;
  totalTransformers: number;
  totalLineMetersLabel: string;
}

export interface ExtentStats {
  transformers: number;
  lineMeters: number;
  lines: number;
}

export interface AttributePopupData {
  objectId: number | string;
  globalId: string;
  geometry: any;
  nomi: string;
  turi: string;
  kuchlanish: string;
  quvvati: string;
  holati: string;
  connectedLines: number;
  voltageKv: number;
  attrs: Record<string, any>;
}

export type ConnectionFlow = "Yuqori oqim" | "Pastga oqim";

export type EquipmentCategory =
  | "Podstansiya"
  | "Transformator"
  | "Tashqi manba"
  | "Liniya";

export function classifyEquipment(label: string, isLine = false): EquipmentCategory | "" {
  if (isLine) return "Liniya";
  const n = String(label || "");
  if (isTransformerLabel(n)) return "Transformator";
  if (isSubstationLabel(n)) return "Podstansiya";
  if (isExternalSourceLabel(n)) return "Tashqi manba";
  const low = n.toLowerCase().replace(/_/g, " ");
  if (low.includes("liniya") || /\bline\b/.test(low)) return "Liniya";
  return "";
}

function formatHolati(raw: unknown): string {
  const s = String(raw ?? "").trim();
  const n = s.toLowerCase();
  if (!s || s === "—" || n === "0" || n === "false" || n === "no") return "Nofaol";
  if (
    n === "1" ||
    n === "true" ||
    n.includes("faol") ||
    n.includes("active") ||
    n.includes("connected")
  ) {
    return "Faol";
  }
  if (/^-?\d+$/.test(s)) return Number(s) > 0 ? "Faol" : "Nofaol";
  return s;
}

function resolveGroupLabel(
  raw: unknown,
  domain: Map<string, string>,
  infos: Array<{ value: string | number; label: string }>,
): string {
  const fromDomain = domainLabel(domain, raw, "");
  if (fromDomain && fromDomain !== String(raw ?? "")) return fromDomain;
  const hit = infos.find((i) => String(i.value) === String(raw ?? ""));
  if (hit?.label) return hit.label;
  return String(fromDomain || raw || "").replace(/_/g, " ");
}

function formatVoltageLabel(raw: unknown): string {
  const s = String(raw ?? "").trim();
  if (!s || s === "—" || s === "null" || s === "undefined") return "—";
  if (/k\s*v/i.test(s)) return s.replace(/\s+/g, " ");
  if (/^-?\d+(?:[.,]\d+)?$/.test(s)) return `${s.replace(",", ".")} kV`;
  return s;
}

function deviceVoltageLabel(attrs: any, fields: DeviceFieldMap): string {
  const raw = attrValue(attrs, fields.voltage);
  if (raw == null || raw === "") return "—";
  return formatVoltageLabel(
    domainLabel(fields.voltageDomain, raw, String(raw)),
  );
}

function lineVoltageLabel(attrs: any, fields: LineFieldMap): string {
  const names = [fields.voltage, ...(fields.voltageCandidates || [])];
  const tried = new Set<string>();
  for (const name of names) {
    if (!name) continue;
    const key = name.toLowerCase();
    if (tried.has(key)) continue;
    tried.add(key);
    const raw = attrValue(attrs, name);
    if (raw == null || raw === "") continue;
    const domain = fields.domainByField?.get(name) || fields.voltageDomain;
    let labeled = domainLabel(domain, raw, String(raw));
    const info = fields.voltageInfos.find(
      (i) => String(i.value) === String(raw) || i.label === labeled,
    );
    if (info?.label) labeled = info.label;
    const formatted = formatVoltageLabel(labeled);
    if (formatted && formatted !== "—") return formatted;
  }
  return "—";
}

function formatObjectId(oid: string, name: string): string {
  if (/^OBJ-/i.test(name)) return name;
  if (oid && /^\d+$/.test(oid)) return `OBJ-${oid}`;
  if (name && name !== oid) return name;
  return oid ? `OBJ-${oid}` : "OBJ";
}

export interface ConnectedObjectRow {
  id: string;
  uskunaTuri: string;
  kuchlanish: string;
  boglanishTuri: ConnectionFlow;
  holati: string;
  voltageKv: number;
  geometry?: any;
  globalId?: string;
}

function esc(value: unknown): string {
  return String(value ?? "").replace(/'/g, "''");
}

export async function queryFeaturesSafe(layer: any, params: Record<string, unknown>): Promise<any> {
  const features: any[] = [];
  const seen = new Set<any>();
  const tryQuery = async (target: any): Promise<boolean> => {
    if (!target || seen.has(target) || typeof target.queryFeatures !== "function") {
      return false;
    }
    seen.add(target);
    try {
      const result = await target.queryFeatures(params);
      const list = result?.features || [];
      features.push(...list);
      return list.length > 0;
    } catch {
      return false;
    }
  };

  if (await tryQuery(layer)) return { features };
  for (const child of childLayers(layer)) {
    await tryQuery(child);
  }
  if (features.length) return { features };
  for (const child of childLayers(layer)) {
    for (const grand of childLayers(child)) await tryQuery(grand);
  }
  return { features };
}

/** Query parent + every sublayer and merge (needed for large OID/GUID traces). */
export async function queryFeaturesEverywhere(
  layer: any,
  params: Record<string, unknown>,
): Promise<any> {
  const features: any[] = [];
  const seenTargets = new Set<any>();
  const seenKeys = new Set<string>();

  const addFeatures = (list: any[], target: any): void => {
    for (const f of list) {
      const attrs = f?.attributes || {};
      const oid =
        attrs.OBJECTID ?? attrs.objectid ?? attrs.ObjectId ?? attrs.objectID;
      const gid = attrs.GLOBALID ?? attrs.globalid ?? attrs.GlobalId;
      const key = gid
        ? String(gid)
        : `${target?.uid || target?.id || "layer"}:${oid ?? features.length}`;
      if (seenKeys.has(key)) continue;
      seenKeys.add(key);
      features.push(f);
    }
  };

  const tryQuery = async (target: any): Promise<void> => {
    if (
      !target ||
      seenTargets.has(target) ||
      typeof target.queryFeatures !== "function"
    ) {
      return;
    }
    seenTargets.add(target);
    try {
      const result = await target.queryFeatures(params);
      addFeatures(result?.features || [], target);
    } catch {
      /* ignore */
    }
  };

  const walk = async (node: any): Promise<void> => {
    await tryQuery(node);
    for (const child of childLayers(node)) {
      await walk(child);
    }
  };

  await walk(layer);
  return { features };
}

async function queryCountSafe(layer: any, params: Record<string, unknown>): Promise<number> {
  if (layer && typeof layer.queryFeatureCount === "function") {
    try {
      return Number(await layer.queryFeatureCount(params)) || 0;
    } catch {
      /* fall through */
    }
  }
  const result = await queryFeaturesSafe(layer, {
    ...params,
    returnGeometry: false,
    outFields: ["OBJECTID"],
  });
  return result?.features?.length || 0;
}

async function queryStats(
  layer: any,
  where: string,
  field: string,
  statisticType: "sum" | "count",
  geometry?: any,
): Promise<number> {
  if (!layer || !field) return 0;
  try {
    const result = await queryFeaturesSafe(layer, {
      where: where || "1=1",
      geometry: geometry || undefined,
      spatialRelationship: geometry ? "intersects" : undefined,
      outStatistics: [
        {
          onStatisticField: field,
          outStatisticFieldName: "stat_value",
          statisticType,
        },
      ],
      returnGeometry: false,
    });
    const attrs = result?.features?.[0]?.attributes || {};
    const raw =
      attrs.stat_value ??
      attrs.STAT_VALUE ??
      attrs.Stat_Value ??
      Object.values(attrs)[0];
    const n = Number(raw);
    return Number.isFinite(n) ? n : 0;
  } catch {
    return 0;
  }
}

function transformerWhere(deviceFields: DeviceFieldMap): string {
  const field = deviceFields.assetGroup;
  const values: Array<string | number> = [];
  for (const info of deviceFields.groupInfos) {
    if (isTransformerLabel(info.label || String(info.value))) {
      values.push(info.value);
    }
  }
  if (!values.length) {
    for (const [code, label] of deviceFields.assetGroupDomain.entries()) {
      if (isTransformerLabel(label)) values.push(code);
    }
  }
  if (!values.length) {
    return `(LOWER(CAST(${field} AS VARCHAR(128))) LIKE '%transform%')`;
  }
  const parts = values.map((v) =>
    typeof v === "number" || /^-?\d+$/.test(String(v))
      ? `${field} = ${v}`
      : `${field} = '${esc(v)}'`,
  );
  return `(${parts.join(" OR ")})`;
}

export async function fetchGlobalStats(
  handle: UnLayersHandle,
): Promise<GlobalStats> {
  const { lineLayer, deviceLayer, lineFields, deviceFields } = handle;
  const lengthField = lineFields.length || "Shape__Length";
  const totalLineMeters = await queryStats(
    lineLayer,
    "1=1",
    lengthField,
    "sum",
  );
  const oid = deviceFields.objectId || "OBJECTID";
  const totalTransformers = await queryStats(
    deviceLayer,
    transformerWhere(deviceFields),
    oid,
    "count",
  );
  return {
    totalLineMeters,
    totalTransformers,
    totalLineMetersLabel: formatMeters(totalLineMeters),
  };
}

export async function fetchExtentStats(
  handle: UnLayersHandle,
  extent: any,
): Promise<ExtentStats> {
  if (!extent) return { transformers: 0, lineMeters: 0, lines: 0 };
  const { lineLayer, deviceLayer, lineFields, deviceFields } = handle;
  const lengthField = lineFields.length || "Shape__Length";
  const oid = deviceFields.objectId || "OBJECTID";
  const [lineMeters, transformers, lines] = await Promise.all([
    queryStats(lineLayer, "1=1", lengthField, "sum", extent),
    queryStats(
      deviceLayer,
      transformerWhere(deviceFields),
      oid,
      "count",
      extent,
    ),
    queryCountSafe(lineLayer, {
      where: "1=1",
      geometry: extent,
      spatialRelationship: "intersects",
    }),
  ]);
  return { transformers, lineMeters, lines };
}

function looksLikeVoltage(label: string): boolean {
  return /\d+\s*k?v/i.test(label) || /^\d+(?:[.,]\d+)?$/.test(label.trim());
}

async function groupCountsByField(
  lineLayer: any,
  field: string,
  lineFields: LineFieldMap,
): Promise<VoltageChartRow[]> {
  const result = await queryFeaturesSafe(lineLayer, {
    where: "1=1",
    outStatistics: [
      {
        onStatisticField: field,
        outStatisticFieldName: "cnt",
        statisticType: "count",
      },
    ],
    groupByFieldsForStatistics: [field],
    returnGeometry: false,
  });

  const domain =
    lineFields.domainByField.get(field) || lineFields.voltageDomain;
  const colorByValue = new Map<string, string>();
  const labelByValue = new Map<string, string>();
  for (const info of lineFields.voltageInfos) {
    colorByValue.set(String(info.value), info.color);
    labelByValue.set(String(info.value), info.label || String(info.value));
  }
  for (const [code, label] of domain.entries()) {
    if (!labelByValue.has(code)) labelByValue.set(code, label);
  }

  const rows: VoltageChartRow[] = [];
  for (const f of result?.features || []) {
    const attrs = f.attributes || {};
    const raw = attrValue(attrs, field);
    const key = String(raw ?? "");
    const count = Number(attrs.cnt ?? attrs.CNT ?? attrs.Count ?? 0) || 0;
    if (!count) continue;
    const label = labelByValue.get(key) || domainLabel(domain, raw, key);
    rows.push({
      label,
      value: count,
      color: colorByValue.get(key) || fallbackVoltageColor(label),
    });
  }

  rows.sort((a, b) => parseVoltageKv(b.label) - parseVoltageKv(a.label));
  return rows;
}

/**
 * Voltage breakdown for the pie chart. Utility Network layers expose several
 * look-alike fields (ASSETGROUP, ASSETTYPE, Kuchlanish), and grouping by the
 * wrong one collapses everything into a single slice — so candidates are tried
 * until one yields a real multi-voltage split.
 */
export async function fetchVoltageChart(
  handle: UnLayersHandle,
): Promise<VoltageChartRow[]> {
  const { lineLayer, lineFields } = handle;
  if (!lineLayer) return [];

  const candidates = lineFields.voltageCandidates?.length
    ? lineFields.voltageCandidates
    : [lineFields.voltage].filter(Boolean);

  let best: VoltageChartRow[] = [];
  for (const field of candidates) {
    let rows: VoltageChartRow[] = [];
    try {
      rows = await groupCountsByField(lineLayer, field, lineFields);
    } catch {
      continue;
    }
    if (!rows.length) continue;

    const voltageLike = rows.filter((r) => looksLikeVoltage(r.label));
    if (voltageLike.length >= 2) {
      return canonicalizeVoltageRows(
        voltageLike.map((r) => ({
          ...r,
          color: r.color || fallbackVoltageColor(r.label),
        })),
      );
    }
    if (rows.length > best.length) best = rows;
  }

  if (best.length) return canonicalizeVoltageRows(best);

  return canonicalizeVoltageRows(
    lineFields.voltageInfos.map((info) => ({
      label: info.label || String(info.value),
      value: 0,
      color: info.color,
    })),
  );
}

const CANONICAL_VOLTAGES: VoltageChartRow[] = [
  { label: "110 kV", value: 0, color: "#f43f5e" },
  { label: "35 kV", value: 0, color: "#f97316" },
  { label: "10 kV", value: 0, color: "#eab308" },
  { label: "6 kV", value: 0, color: "#22d3ee" },
];

function nearestCanonicalKv(kv: number): 110 | 35 | 10 | 6 | 0 {
  if (!kv || kv <= 0) return 0;
  const opts: Array<110 | 35 | 10 | 6> = [110, 35, 10, 6];
  let best: 110 | 35 | 10 | 6 = 10;
  let dist = Infinity;
  for (const n of opts) {
    const d = Math.abs(n - kv);
    if (d < dist) {
      dist = d;
      best = n;
    }
  }
  if (dist / best > 0.45) return 0;
  return best;
}

/** Fold whatever the service returned into the 110 / 35 / 10 / 6 kV legend. */
export function canonicalizeVoltageRows(rows: VoltageChartRow[]): VoltageChartRow[] {
  const next = CANONICAL_VOLTAGES.map((r) => ({ ...r }));
  for (const row of rows) {
    const kv = nearestCanonicalKv(parseVoltageKv(row.label));
    if (!kv) continue;
    const target = next.find((r) => r.label.startsWith(String(kv)));
    if (target) target.value += Number(row.value) || 0;
  }
  if (next.some((r) => r.value > 0)) return next;
  return rows;
}

export async function countConnectedLines(
  lineLayer: any,
  geometry: any,
  bufferMeters = 8,
): Promise<number> {
  if (!lineLayer || !geometry) return 0;
  return queryCountSafe(lineLayer, {
    geometry,
    distance: bufferMeters,
    units: "meters",
    spatialRelationship: "intersects",
    where: "1=1",
  });
}

export function buildPopupFromFeature(
  feature: any,
  deviceFields: DeviceFieldMap,
  connectedLines: number,
): AttributePopupData {
  const attrs = feature?.attributes || {};
  const turiRaw = attrValue(attrs, deviceFields.type);
  const turi = resolveGroupLabel(
    turiRaw,
    deviceFields.assetGroupDomain,
    deviceFields.groupInfos,
  );
  const voltRaw = attrValue(attrs, deviceFields.voltage);
  const kuchlanish = domainLabel(
    deviceFields.voltageDomain,
    voltRaw,
    String(voltRaw ?? "—"),
  );
  const statusRaw = attrValue(attrs, deviceFields.status);
  const holati = deviceFields.status
    ? domainLabel(deviceFields.statusDomain, statusRaw, String(statusRaw ?? "Faol"))
    : "Faol";
  const nomiRaw = attrValue(attrs, deviceFields.name);
  const powerRaw = attrValue(attrs, deviceFields.power);
  let quvvati = powerRaw == null || powerRaw === "" ? "—" : String(powerRaw);
  if (quvvati !== "—" && !/kva|mva|kw/i.test(quvvati)) {
    quvvati = `${quvvati} kVA`;
  }

  return {
    objectId: attrValue(attrs, deviceFields.objectId) as any,
    globalId: String(attrValue(attrs, deviceFields.globalId) ?? ""),
    geometry: feature.geometry,
    nomi: String(nomiRaw ?? attrValue(attrs, deviceFields.objectId) ?? "—"),
    turi: classifyEquipment(turi) || String(turi).replace(/_/g, " "),
    kuchlanish: /kv/i.test(kuchlanish) ? kuchlanish : `${kuchlanish}`.trim(),
    quvvati,
    holati: formatHolati(holati),
    connectedLines,
    voltageKv: parseVoltageKv(kuchlanish),
    attrs,
  };
}

async function queryAssociationsConnected(
  map: any,
  globalId: string,
): Promise<string[]> {
  if (!globalId || !map) return [];
  try {
    const networks = map.utilityNetworks;
    const un =
      networks?.getItemAt?.(0) ||
      (Array.isArray(networks) ? networks[0] : null) ||
      networks?.items?.[0];
    if (!un) return [];
    if (typeof un.load === "function") await un.load();
    if (typeof un.queryAssociations !== "function") return [];
    const result = await un.queryAssociations({
      elements: [{ globalId }],
      associationTypes: ["connectivity", "Connectivity"],
    });
    const ids: string[] = [];
    const associations = result?.associations || result || [];
    for (const a of associations) {
      const from = a.fromNetworkElement?.globalId || a.fromGlobalId;
      const to = a.toNetworkElement?.globalId || a.toGlobalId;
      if (from && from !== globalId) ids.push(String(from));
      if (to && to !== globalId) ids.push(String(to));
    }
    return Array.from(new Set(ids));
  } catch {
    return [];
  }
}

export async function fetchConnectedObjects(
  handle: UnLayersHandle,
  popup: AttributePopupData,
  map?: any,
): Promise<ConnectedObjectRow[]> {
  const { deviceLayer, lineLayer, deviceFields, lineFields } = handle;
  const rows: ConnectedObjectRow[] = [];
  const seen = new Set<string>();
  const originKv = popup.voltageKv || 0;
  const originGid = popup.globalId;

  const pushDevice = (feature: any, flow: ConnectionFlow) => {
    const attrs = feature?.attributes || {};
    const gid = String(attrValue(attrs, deviceFields.globalId) ?? "");
    const oid = String(attrValue(attrs, deviceFields.objectId) ?? "");
    const key = gid || oid;
    if (!key || key === originGid || seen.has(key)) return;
    seen.add(key);
    const turiRaw = attrValue(attrs, deviceFields.type);
    const groupLabel = resolveGroupLabel(
      turiRaw,
      deviceFields.assetGroupDomain,
      deviceFields.groupInfos,
    );
    const turi =
      classifyEquipment(groupLabel) || groupLabel || "Uskuna";
    const kuchlanish = deviceVoltageLabel(attrs, deviceFields);
    const statusRaw = attrValue(attrs, deviceFields.status);
    const holati = formatHolati(
      deviceFields.status
        ? domainLabel(
            deviceFields.statusDomain,
            statusRaw,
            String(statusRaw ?? ""),
          )
        : "Faol",
    );
    rows.push({
      id: formatObjectId(oid, String(attrValue(attrs, deviceFields.name) ?? "")),
      uskunaTuri: turi,
      kuchlanish,
      boglanishTuri: flow,
      holati,
      voltageKv: parseVoltageKv(kuchlanish),
      geometry: feature.geometry,
      globalId: gid,
    });
  };

  const pushLine = (feature: any, flow: ConnectionFlow) => {
    const attrs = feature?.attributes || {};
    const gid = String(attrValue(attrs, lineFields.globalId) ?? "");
    const oid = String(attrValue(attrs, lineFields.objectId) ?? "");
    const key = `line:${gid || oid}`;
    if (!key || seen.has(key)) return;
    seen.add(key);
    const kuchlanish = lineVoltageLabel(attrs, lineFields);
    const statusRaw = attrValue(attrs, lineFields.status);
    const holati = formatHolati(statusRaw);
    rows.push({
      id: oid ? `OBJ-${oid}` : gid ? `OBJ-${gid.slice(0, 6)}` : "OBJ-LINE",
      uskunaTuri: "Liniya",
      kuchlanish,
      boglanishTuri: flow,
      holati,
      voltageKv: parseVoltageKv(kuchlanish),
      geometry: feature.geometry,
      globalId: gid,
    });
  };

  // 1) Utility Network associations (if available)
  const assocIds = await queryAssociationsConnected(map, originGid);
  if (assocIds.length && deviceLayer) {
    try {
      const where = `${deviceFields.globalId} IN (${assocIds
        .map((id) => `'${esc(id)}'`)
        .join(",")})`;
      const result = await queryFeaturesSafe(deviceLayer, {
        where,
        outFields: ["*"],
        returnGeometry: true,
      });
      for (const f of result?.features || []) {
        const kv = parseVoltageKv(
          domainLabel(
            deviceFields.voltageDomain,
            attrValue(f.attributes, deviceFields.voltage),
            String(attrValue(f.attributes, deviceFields.voltage) ?? ""),
          ),
        );
        const flow: ConnectionFlow =
          kv > originKv ? "Yuqori oqim" : "Pastga oqim";
        pushDevice(f, flow);
      }
    } catch {
      /* fall through to spatial */
    }
  }

  // 2) Spatial: lines near point, then devices near those lines
  if (popup.geometry && lineLayer) {
    try {
      const lineResult = await queryFeaturesSafe(lineLayer, {
        geometry: popup.geometry,
        distance: 12,
        units: "meters",
        spatialRelationship: "intersects",
        where: "1=1",
        outFields: ["*"],
        returnGeometry: true,
        num: 200,
      });
      for (const lf of lineResult?.features || []) {
        const kv = parseVoltageKv(
          domainLabel(
            lineFields.voltageDomain,
            attrValue(lf.attributes, lineFields.voltage),
            String(attrValue(lf.attributes, lineFields.voltage) ?? ""),
          ),
        );
        const flow: ConnectionFlow =
          kv > originKv ? "Yuqori oqim" : "Pastga oqim";
        pushLine(lf, flow);

        if (deviceLayer && lf.geometry) {
          try {
            const nearDevices = await queryFeaturesSafe(deviceLayer, {
              geometry: lf.geometry,
              distance: 8,
              units: "meters",
              spatialRelationship: "intersects",
              where: "1=1",
              outFields: ["*"],
              returnGeometry: true,
              num: 50,
            });
            for (const df of nearDevices?.features || []) {
              const dkv = parseVoltageKv(
                domainLabel(
                  deviceFields.voltageDomain,
                  attrValue(df.attributes, deviceFields.voltage),
                  String(attrValue(df.attributes, deviceFields.voltage) ?? ""),
                ),
              );
              const dflow: ConnectionFlow =
                dkv > originKv ? "Yuqori oqim" : "Pastga oqim";
              pushDevice(df, dflow);
            }
          } catch {
            /* skip */
          }
        }
      }
    } catch {
      /* ignore */
    }
  }

  rows.sort((a, b) => {
    if (a.boglanishTuri !== b.boglanishTuri) {
      return a.boglanishTuri === "Yuqori oqim" ? -1 : 1;
    }
    return b.voltageKv - a.voltageKv;
  });

  const allowed = new Set([
    "Podstansiya",
    "Transformator",
    "Tashqi manba",
    "Liniya",
  ]);
  return rows.filter((r) => allowed.has(r.uskunaTuri)).slice(0, 80);
}
