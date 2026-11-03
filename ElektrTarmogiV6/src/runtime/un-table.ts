/**
 * Attribute table columns for the two UN_Electrik operational layers.
 * Only the fields shown in the approved Device / Line table screenshots.
 */
import {
  attrValue,
  deviceAssetGroupLabel,
  domainLabel,
  findField,
  type DomainMap,
} from "./un-fields";
import { queryFeaturesSafe } from "./un-query";
import { childLayers, walkLayerFields } from "./un-walk";

export type TableTab = "device" | "line";

export interface TableColumn {
  key: string;
  label: string;
  field: string;
  domain: DomainMap;
  esriType: string;
}

export interface TableRow {
  id: string;
  objectId: string | number;
  globalId: string;
  geometry?: any;
  values: Record<string, string>;
}

interface ColumnSpec {
  key: string;
  label: string;
  candidates: string[];
}

/** Device tab columns (image 1). */
const DEVICE_SPECS: ColumnSpec[] = [
  {
    key: "uskunaTuri",
    label: "Uskuna turi",
    candidates: ["uskuna turi", "assetgroup", "ASSETGROUP"],
  },
  {
    key: "kuchlanishTuri",
    label: "Kuchlanish turi",
    candidates: [
      "kuchlanish turi",
      "kuchlanishturi",
      "voltage type",
      "nominalvoltage",
      "kuchlanish",
      "voltage",
    ],
  },
  {
    key: "globalId",
    label: "Global ID",
    candidates: ["global id", "globalid", "GLOBALID"],
  },
];

/** Line tab columns (image 2). */
const LINE_SPECS: ColumnSpec[] = [
  {
    key: "uskunaTuri",
    label: "Uskuna turi",
    candidates: ["uskuna turi", "assetgroup", "ASSETGROUP"],
  },
  {
    key: "liniyaNomi",
    label: "Liniya nomi",
    candidates: ["liniya nomi", "linename", "name", "assetid", "ASSETID"],
  },
  {
    key: "kuchlanish",
    label: "Kuchlanish",
    candidates: ["kuchlanish", "voltage", "nominalvoltage", "nominal_voltage"],
  },
  {
    key: "liniyaMalumoti",
    label: "Liniya malumoti",
    candidates: [
      "liniya malumoti",
      "linemalumoti",
      "wiretype",
      "conductor",
      "description",
      "comments",
      "assettype",
      "ASSETTYPE",
    ],
  },
  {
    key: "uzunlik",
    label: "Uzunlik (m)",
    candidates: [
      "uzunlik (m)",
      "uzunlik",
      "shape_length",
      "shape__length",
      "st_length(shape)",
      "st_length",
      "length",
    ],
  },
  {
    key: "globalId",
    label: "Global ID",
    candidates: ["global id", "globalid", "GLOBALID"],
  },
];

function layerFields(layer: any): any[] {
  return walkLayerFields(layer);
}

function codedDomain(field: any): DomainMap {
  const map: DomainMap = new Map();
  const coded = field?.domain?.codedValues || field?.domain?.codedValue || [];
  if (!Array.isArray(coded)) return map;
  for (const cv of coded) {
    if (cv?.code !== undefined && cv?.code !== null) {
      map.set(String(cv.code), String(cv.name ?? cv.label ?? cv.code));
    }
  }
  return map;
}

function resolveColumns(layer: any, specs: ColumnSpec[]): TableColumn[] {
  const fields = layerFields(layer);
  const used = new Set<string>();
  const columns: TableColumn[] = [];
  for (const spec of specs) {
    const fieldName = findField(fields, spec.candidates, used);
    if (!fieldName) continue;
    used.add(fieldName.toLowerCase());
    const def = fields.find(
      (f) => String(f.name).toLowerCase() === fieldName.toLowerCase(),
    );
    columns.push({
      key: spec.key,
      label: spec.label,
      field: fieldName,
      domain: codedDomain(def),
      esriType: String(def?.type || ""),
    });
  }
  return columns;
}

export function resolveDeviceTableColumns(layer: any): TableColumn[] {
  return resolveColumns(layer, DEVICE_SPECS);
}

export function resolveLineTableColumns(layer: any): TableColumn[] {
  return resolveColumns(layer, LINE_SPECS);
}

function formatValue(
  raw: unknown,
  col: TableColumn,
  kind: "device" | "line" = "device",
): string {
  if (raw === null || raw === undefined || raw === "") {
    if (col.key === "uskunaTuri" && kind === "line") return "Liniya";
    return "";
  }
  if (col.key === "uskunaTuri") {
    // Line layer must never show device asset-group labels (Podstansiya, …).
    if (kind === "line") return "Liniya";
    const mapped = deviceAssetGroupLabel(raw);
    if (mapped) return mapped;
  }
  if (col.domain.size) {
    return domainLabel(col.domain, raw, String(raw));
  }
  if (typeof raw === "number" && Number.isFinite(raw) && !Number.isInteger(raw)) {
    return raw.toLocaleString("ru-RU", { maximumFractionDigits: 8 });
  }
  return String(raw);
}

function objectIdField(layer: any): string {
  return String(layer?.objectIdField || "OBJECTID");
}

function parseObjectIdsForTable(raw: Array<number | string>): Array<number | string> {
  const out: Array<number | string> = [];
  const seen = new Set<string>();
  for (const item of raw) {
    if (item == null || item === "") continue;
    let id: number | string;
    if (typeof item === "number" && Number.isFinite(item)) {
      id = Number.isSafeInteger(item) ? item : String(item);
    } else {
      const text = String(item).trim();
      if (!text) continue;
      const n = Number(text);
      id = Number.isSafeInteger(n) && String(n) === text ? n : text;
    }
    const key = String(id);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(id);
  }
  return out;
}

function globalIdField(layer: any, columns: TableColumn[]): string {
  const fromCol = columns.find((c) => c.key === "globalId")?.field;
  if (fromCol) return fromCol;
  const fields = layerFields(layer);
  return findField(fields, ["globalid", "GLOBALID", "global id"]) || "GLOBALID";
}

export async function fetchLayerTableRows(
  layer: any,
  columns: TableColumn[],
  extent?: any,
  max = 1200,
): Promise<TableRow[]> {
  if (!layer || !columns.length) return [];
  const oidField = objectIdField(layer);
  const gidField = globalIdField(layer, columns);
  const outFields = Array.from(
    new Set([...columns.map((c) => c.field), oidField, gidField]),
  );

  const params: Record<string, unknown> = {
    where: "1=1",
    outFields,
    returnGeometry: true,
    num: max,
    orderByFields: [`${oidField} ASC`],
  };
  if (extent) {
    params.geometry = extent;
    params.spatialRelationship = "intersects";
  }

  let result = await queryFeaturesSafe(layer, params);
  if ((!result?.features || result.features.length === 0) && extent) {
    result = await queryFeaturesSafe(layer, {
      where: "1=1",
      outFields,
      returnGeometry: true,
      num: max,
      orderByFields: [`${oidField} ASC`],
    });
  }

  return (result?.features || []).map((f: any, i: number) => {
    const attrs = f.attributes || {};
    const values: Record<string, string> = {};
    const asLine = String(layer?.geometryType || f?.geometry?.type || "")
      .toLowerCase()
      .includes("line");
    for (const col of columns) {
      values[col.key] = formatValue(
        attrValue(attrs, col.field),
        col,
        asLine ? "line" : "device",
      );
    }
    if (asLine) values.uskunaTuri = "Liniya";
    else if (!values.uskunaTuri && layer?.geometryType?.includes?.("line")) {
      values.uskunaTuri = "Liniya";
    }
    const objectId = (attrValue(attrs, oidField) as any) ?? i;
    const globalId = String(attrValue(attrs, gidField) ?? "");
    return {
      id: globalId || String(objectId),
      objectId,
      globalId,
      geometry: f.geometry,
      values,
    };
  });
}

function guidSqlLiterals(id: string): string[] {
  const raw = String(id || "").trim();
  if (!raw) return [];
  const bare = raw.replace(/[{}]/g, "");
  return [...new Set([raw, `{${bare}}`, bare])].map(
    (v) => `'${String(v).replace(/'/g, "''")}'`,
  );
}

export async function fetchLayerTableRowsByIds(
  layer: any,
  columns: TableColumn[],
  objectIds: Array<number | string>,
  max = 5000,
  globalIds: string[] = [],
  options: { returnGeometry?: boolean; chunkSize?: number } = {},
): Promise<TableRow[]> {
  if (!layer || !columns.length) return [];
  const returnGeometry = options.returnGeometry !== false;
  const chunkSize = options.chunkSize ?? 150;
  const unique = parseObjectIdsForTable(objectIds).slice(0, max);
  const uniqueGids = [
    ...new Set(globalIds.map((id) => String(id || "").trim()).filter(Boolean)),
  ].slice(0, max);
  if (!unique.length && !uniqueGids.length) return [];

  const layersToTry = [layer, ...childLayers(layer)];
  const remaining = new Set(unique.map((id) => String(id)));
  const remainingGids = new Set(uniqueGids);
  const features: Array<{ feature: any; layer: any }> = [];
  const seenLayers = new Set<any>();
  const seenRow = new Set<string>();

  const pushFeature = (feature: any, queryLayer: any) => {
    const oidField = objectIdField(queryLayer);
    const gidField = globalIdField(queryLayer, columns);
    const attrs = feature.attributes || {};
    const oidRaw = attrValue(attrs, oidField);
    const oidText = oidRaw == null ? "" : String(oidRaw);
    const gid = String(attrValue(attrs, gidField) ?? "").trim();
    const key = gid || (oidText ? `oid:${oidText}` : "");
    if (key && seenRow.has(key)) return;
    if (key) seenRow.add(key);
    if (oidText) remaining.delete(oidText);
    if (gid) remainingGids.delete(gid);
    features.push({ feature, layer: queryLayer });
  };

  for (const queryLayer of layersToTry) {
    if (!queryLayer || seenLayers.has(queryLayer)) continue;
    seenLayers.add(queryLayer);

    const oidField = objectIdField(queryLayer);
    const gidField = globalIdField(queryLayer, columns);
    const outFields = Array.from(
      new Set([...columns.map((c) => c.field), oidField, gidField]),
    );

    const queryOidChunk = async (chunk: Array<number | string>): Promise<void> => {
      if (!chunk.length) return;
      try {
        const result = await queryFeaturesSafe(queryLayer, {
          objectIds: chunk,
          outFields,
          returnGeometry,
        });
        for (const feature of result?.features || []) {
          pushFeature(feature, queryLayer);
        }
      } catch {
        try {
          const result = await queryFeaturesSafe(queryLayer, {
            where: `${oidField} IN (${chunk.join(",")})`,
            outFields,
            returnGeometry,
          });
          for (const feature of result?.features || []) {
            pushFeature(feature, queryLayer);
          }
        } catch {
          /* try next layer */
        }
      }
    };

    const oidList = [...remaining];
    const oidChunks: Array<Array<number | string>> = [];
    for (let i = 0; i < oidList.length; i += chunkSize) {
      const chunkKeys = oidList
        .slice(i, i + chunkSize)
        .filter((id) => remaining.has(id));
      if (chunkKeys.length) {
        oidChunks.push(
          chunkKeys.map((id) => {
            const n = Number(id);
            return Number.isSafeInteger(n) && String(n) === id ? n : id;
          }),
        );
      }
    }
    const oidConcurrency = 4;
    for (let i = 0; i < oidChunks.length; i += oidConcurrency) {
      if (!remaining.size) break;
      await Promise.all(
        oidChunks.slice(i, i + oidConcurrency).map((chunk) => queryOidChunk(chunk)),
      );
    }

    const gidList = [...remainingGids];
    const gidBatchSize = 40;
    const gidJobs: string[][] = [];
    for (let i = 0; i < gidList.length; i += gidBatchSize) {
      gidJobs.push(gidList.slice(i, i + gidBatchSize));
    }
    const gidConcurrency = 4;
    for (let i = 0; i < gidJobs.length; i += gidConcurrency) {
      if (!remainingGids.size) break;
      await Promise.all(
        gidJobs.slice(i, i + gidConcurrency).map(async (chunk) => {
          const literals = chunk.flatMap(guidSqlLiterals);
          if (!literals.length) return;
          try {
            const result = await queryFeaturesSafe(queryLayer, {
              where: `${gidField} IN (${literals.join(",")})`,
              outFields,
              returnGeometry,
            });
            for (const feature of result?.features || []) {
              pushFeature(feature, queryLayer);
            }
          } catch {
            /* try next batch */
          }
        }),
      );
    }
  }

  return features.map(({ feature: f, layer: sourceLayer }, i) => {
    const attrs = f.attributes || {};
    const oidField = objectIdField(sourceLayer);
    const gidField = globalIdField(sourceLayer, columns);
    const values: Record<string, string> = {};
    const asLine = String(
      sourceLayer?.geometryType || f?.geometry?.type || "",
    )
      .toLowerCase()
      .includes("line");
    for (const col of columns) {
      values[col.key] = formatValue(
        attrValue(attrs, col.field),
        col,
        asLine ? "line" : "device",
      );
    }
    if (asLine) values.uskunaTuri = "Liniya";
    else if (
      !values.uskunaTuri &&
      sourceLayer?.geometryType?.includes?.("line")
    ) {
      values.uskunaTuri = "Liniya";
    }
    const objectId = (attrValue(attrs, oidField) as any) ?? i;
    const globalId = String(attrValue(attrs, gidField) ?? "");
    return {
      id: globalId || String(objectId),
      objectId,
      globalId,
      geometry: f.geometry,
      values,
    };
  });
}

/** Spatial fallback when trace returns geometry but not object ids. */
export async function fetchLayerTableRowsByGeometry(
  layer: any,
  columns: TableColumn[],
  geometries: any[],
  max = 5000,
  distanceMeters = 0,
): Promise<TableRow[]> {
  if (!layer || !columns.length || !geometries.length) return [];
  const oidField = objectIdField(layer);
  const gidField = globalIdField(layer, columns);
  const outFields = Array.from(
    new Set([...columns.map((c) => c.field), oidField, gidField]),
  );
  const seen = new Set<string>();
  const features: Array<{ feature: any; layer: any }> = [];

  for (const queryLayer of [layer, ...childLayers(layer)]) {
    for (const geometry of geometries) {
      try {
        const params: Record<string, unknown> = {
          geometry,
          spatialRelationship: "intersects",
          returnGeometry: true,
          outFields,
          num: max,
        };
        if (distanceMeters > 0) {
          params.distance = distanceMeters;
          params.units = "meters";
        }
        const result = await queryFeaturesSafe(queryLayer, params);
        for (const feature of result?.features || []) {
          const attrs = feature.attributes || {};
          const oid = String(attrValue(attrs, oidField) ?? "");
          const gid = String(attrValue(attrs, gidField) ?? "");
          const key = gid || oid;
          if (!key || seen.has(key)) continue;
          seen.add(key);
          features.push({ feature, layer: queryLayer });
        }
      } catch {
        /* try next geometry/layer */
      }
    }
  }

  return features.slice(0, max).map(({ feature: f, layer: sourceLayer }, i) => {
    const attrs = f.attributes || {};
    const values: Record<string, string> = {};
    const asLine = String(
      sourceLayer?.geometryType || f?.geometry?.type || "",
    )
      .toLowerCase()
      .includes("line");
    for (const col of columns) {
      values[col.key] = formatValue(
        attrValue(attrs, col.field),
        col,
        asLine ? "line" : "device",
      );
    }
    if (asLine) values.uskunaTuri = "Liniya";
    else if (
      !values.uskunaTuri &&
      sourceLayer?.geometryType?.includes?.("line")
    ) {
      values.uskunaTuri = "Liniya";
    }
    const objectId = (attrValue(attrs, oidField) as any) ?? i;
    const globalId = String(attrValue(attrs, gidField) ?? "");
    return {
      id: globalId || String(objectId),
      objectId,
      globalId,
      geometry: f.geometry,
      values,
    };
  });
}

function featureToTableRow(
  feature: any,
  sourceLayer: any,
  columns: TableColumn[],
  index: number,
  kind: "device" | "line" = "device",
): TableRow {
  const attrs = feature?.attributes || {};
  const oidField = objectIdField(sourceLayer);
  const gidField = globalIdField(sourceLayer, columns);
  const values: Record<string, string> = {};
  const asLine =
    kind === "line" ||
    String(sourceLayer?.geometryType || feature?.geometry?.type || "")
      .toLowerCase()
      .includes("line");
  for (const col of columns) {
    values[col.key] = formatValue(
      attrValue(attrs, col.field),
      col,
      asLine ? "line" : "device",
    );
  }
  if (asLine) values.uskunaTuri = "Liniya";
  else if (
    !values.uskunaTuri &&
    sourceLayer?.geometryType?.includes?.("line")
  ) {
    values.uskunaTuri = "Liniya";
  }
  const objectId = (attrValue(attrs, oidField) as any) ?? index;
  const globalId = String(attrValue(attrs, gidField) ?? "");
  return {
    id: globalId || String(objectId),
    objectId,
    globalId,
    geometry: feature?.geometry,
    values,
  };
}

function isLineLayerHit(layer: any, lineLayer: any): boolean {
  if (!layer) return false;
  if (layer === lineLayer) return true;
  for (const child of childLayers(lineLayer)) {
    if (layer === child) return true;
  }
  const g = String(featureGeometryType(layer)).toLowerCase();
  return g.includes("line") || g === "polyline";
}

function featureGeometryType(layerOrFeature: any): string {
  const direct = String(layerOrFeature?.geometryType || "");
  if (direct) return direct;
  return String(layerOrFeature?.geometry?.type || "");
}

/** Build table rows from Esri Trace select-features — avoids server round-trips. */
export function tableRowsFromTraceFeatureSets(
  featureSets: any[] | null | undefined,
  handle: { deviceLayer: any; lineLayer: any },
  deviceColumns: TableColumn[],
  lineColumns: TableColumn[],
): { deviceRows: TableRow[]; lineRows: TableRow[] } {
  const deviceRows: TableRow[] = [];
  const lineRows: TableRow[] = [];
  const seenDevice = new Set<string>();
  const seenLine = new Set<string>();

  for (const info of featureSets || []) {
    const layer = info?.layer;
    const features = info?.featureSet?.features || info?.features || [];
    for (const feature of features) {
      const gType = String(feature?.geometry?.type || "").toLowerCase();
      const asLine =
        gType.includes("line") || gType === "polyline"
          ? true
          : gType === "point" || gType === "multipoint"
            ? false
            : isLineLayerHit(layer, handle.lineLayer);
      const cols = asLine ? lineColumns : deviceColumns;
      if (!cols.length) continue;
      const row = featureToTableRow(
        feature,
        layer || (asLine ? handle.lineLayer : handle.deviceLayer),
        cols,
        0,
        asLine ? "line" : "device",
      );
      const key = row.globalId || String(row.objectId);
      if (!key) continue;
      if (asLine) {
        if (seenLine.has(key)) continue;
        seenLine.add(key);
        lineRows.push(row);
      } else {
        if (seenDevice.has(key)) continue;
        seenDevice.add(key);
        deviceRows.push(row);
      }
    }
  }

  return { deviceRows, lineRows };
}
