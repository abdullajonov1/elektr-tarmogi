import { esriFieldList } from "./un-walk";

export type DomainMap = Map<string, string>; // code string -> label

export interface UniqueValueInfo {
  value: string | number;
  label: string;
  color: string;
}

export interface DeviceFieldMap {
  objectId: string;
  globalId: string;
  assetGroup: string;
  assetType: string;
  name: string;
  type: string;
  voltage: string;
  power: string;
  status: string;
  model: string;
  count: string;
  assetGroupDomain: DomainMap;
  assetTypeDomain: DomainMap;
  voltageDomain: DomainMap;
  statusDomain: DomainMap;
  /** Unique-value infos for ASSETGROUP-style renderer (Podstansiya, Transformator…). */
  groupInfos: UniqueValueInfo[];
}

export interface LineFieldMap {
  objectId: string;
  globalId: string;
  voltage: string;
  length: string;
  status: string;
  voltageDomain: DomainMap;
  /** Unique-value infos for voltage renderer (110 kV, 35 kV…). */
  voltageInfos: UniqueValueInfo[];
  /** Ordered fields to try when grouping line counts by voltage. */
  voltageCandidates: string[];
  /** Coded domain per candidate field, for chart labels. */
  domainByField: Map<string, DomainMap>;
}

function norm(s: unknown): string {
  return String(s || "")
    .toLowerCase()
    .replace(/[''`ʼ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function fieldList(layer: any): any[] {
  return esriFieldList(layer);
}

/**
 * A SubtypeGroupLayer often exposes no `fields` until fully loaded, so the
 * builder data source schema is merged in as a second source of truth.
 */
function mergeFieldLists(primary: any[], extra: any[]): any[] {
  if (!extra?.length) return primary;
  const merged = [...primary];
  const known = new Set(primary.map((f) => String(f?.name || "").toLowerCase()));
  for (const f of extra) {
    const name = String(f?.name || "").toLowerCase();
    if (!name || known.has(name)) continue;
    known.add(name);
    merged.push(f);
  }
  return merged;
}

function schemaFieldPlain(f: any, key: string): any {
  if (!f) return { name: key, alias: key, type: "" };
  if (typeof f.get === "function") {
    return {
      name: String(f.get("name") || f.get("jimuName") || key),
      alias: String(f.get("alias") || f.get("name") || key),
      type: String(f.get("esriType") || f.get("type") || ""),
    };
  }
  return {
    name: String(f.name || f.jimuName || key),
    alias: String(f.alias || f.name || key),
    type: String(f.esriType || f.type || ""),
  };
}

/** Reads {name, alias, type} triples out of an ExB data source schema. */
export function dataSourceFields(dataSource: any): any[] {
  try {
    const schema = dataSource?.getSchema?.();
    const raw = schema?.fields;
    if (!raw) return [];
    const keys =
      typeof raw.keySeq === "function"
        ? raw.keySeq().toArray()
        : Object.keys(raw);
    return keys.map((key: string) => {
      const f = typeof raw.get === "function" ? raw.get(key) : raw[key];
      return schemaFieldPlain(f, key);
    });
  } catch {
    return [];
  }
}

export function findField(
  fields: any[],
  candidates: string[],
  used?: Set<string>,
): string {
  const norms = candidates.map(norm);
  const taken = (name: string) => used?.has(name.toLowerCase());
  for (const f of fields) {
    const fname = String(f?.name || "");
    if (taken(fname)) continue;
    const name = norm(fname);
    const alias = norm(f?.alias);
    if (norms.includes(name) || norms.includes(alias)) {
      return fname;
    }
  }
  for (const f of fields) {
    const fname = String(f?.name || "");
    if (taken(fname)) continue;
    const name = norm(fname);
    const alias = norm(f?.alias);
    for (const c of norms) {
      if (!c) continue;
      if (name.includes(c) || alias.includes(c)) return fname;
    }
  }
  return "";
}

function codedDomain(field: any): DomainMap {
  const map: DomainMap = new Map();
  const domain = field?.domain;
  const coded = domain?.codedValues || domain?.codedValue || [];
  if (Array.isArray(coded)) {
    for (const cv of coded) {
      const code = cv?.code;
      const name = cv?.name ?? cv?.label;
      if (code !== undefined && code !== null && name != null) {
        map.set(String(code), String(name));
      }
    }
  }
  return map;
}

function colorFromSymbol(symbol: any): string {
  try {
    const color =
      symbol?.color ||
      symbol?.outline?.color ||
      symbol?.symbolLayers?.[0]?.material?.color ||
      symbol?.symbolLayers?.[0]?.color;
    if (!color) return "#60a5fa";
    if (typeof color === "string") return color;
    const r = Math.round(color.r ?? color[0] ?? 96);
    const g = Math.round(color.g ?? color[1] ?? 165);
    const b = Math.round(color.b ?? color[2] ?? 250);
    return `rgb(${r},${g},${b})`;
  } catch {
    return "#60a5fa";
  }
}

function uniqueInfosFromRenderer(layer: any): UniqueValueInfo[] {
  const renderer = layer?.renderer;
  if (!renderer) return [];
  const infos = renderer.uniqueValueInfos || renderer.uniqueValueGroups?.[0]?.classes || [];
  if (!Array.isArray(infos)) return [];
  return infos.map((info: any) => {
    const value = info.value ?? info.values?.[0] ?? "";
    const label = String(info.label || info.description || value || "");
    return {
      value,
      label,
      color: colorFromSymbol(info.symbol),
    };
  });
}

function rendererField(layer: any): string {
  const r = layer?.renderer;
  if (!r) return "";
  return String(r.field || r.field1 || r.fields?.[0] || "").trim();
}

const VOLTAGE_FALLBACK_COLORS: Record<string, string> = {
  "110": "#e11d48",
  "35": "#f97316",
  "10": "#eab308",
  "6": "#22d3ee",
};

export function fallbackVoltageColor(label: string): string {
  const m = String(label).match(/(\d+)/);
  if (m && VOLTAGE_FALLBACK_COLORS[m[1]]) return VOLTAGE_FALLBACK_COLORS[m[1]];
  return "#60a5fa";
}

export function resolveDeviceFields(
  layer: any,
  extraFields: any[] = [],
): DeviceFieldMap {
  const fields = mergeFieldLists(fieldList(layer), extraFields);
  const byName = (n: string) => fields.find((f) => norm(f.name) === norm(n));

  const assetGroup =
    findField(fields, [
      "assetgroup",
      "ASSETGROUP",
      "uskuna turi",
      "turi",
      "type",
      "asset_group",
    ]) || rendererField(layer) || "ASSETGROUP";

  const assetType =
    findField(fields, ["assettype", "ASSETTYPE", "asset_type"]) || "ASSETTYPE";

  const voltage =
    findField(fields, [
      "kuchlanish turi",
      "kuchlanish",
      "voltage",
      "nominalvoltage",
      "nominal_voltage",
      "assettype",
      "ASSETTYPE",
    ]) || "";

  const name = findField(fields, [
    "nomi",
    "name",
    "assetid",
    "asset_id",
    "facilityid",
    "label",
  ]);
  const power = findField(fields, [
    "quvvati",
    "quvvat",
    "power",
    "mva",
    "kva",
    "ratedpower",
    "rated_power",
  ]);
  const status = findField(fields, [
    "holati",
    "holat",
    "status",
    "lifecycle",
    "lifecyclestatus",
  ]);
  const model = findField(fields, [
    "model",
    "uskuna turi",
    "equipment",
    "assettype",
  ]);
  const count = findField(fields, [
    "uskunalar soni",
    "count",
    "soni",
    "quantity",
  ]);

  const agField = byName(assetGroup);
  const assetTypeField = byName(assetType);
  const voltField = voltage ? byName(voltage) : null;
  const statusField = status ? byName(status) : null;

  let groupInfos = uniqueInfosFromRenderer(layer);
  // Prefer ASSETGROUP-looking infos
  if (groupInfos.length === 0 && agField) {
    const domain = codedDomain(agField);
    groupInfos = Array.from(domain.entries()).map(([value, label]) => ({
      value,
      label,
      color: /transform/i.test(label)
        ? "#f97316"
        : /podstansiya|substation/i.test(label)
          ? "#3b82f6"
          : "#60a5fa",
    }));
  }

  return {
    objectId:
      findField(fields, ["objectid", "OBJECTID", "fid"]) || "OBJECTID",
    globalId:
      findField(fields, ["globalid", "GLOBALID", "global_id"]) || "GLOBALID",
    assetGroup,
    assetType,
    name: name || assetGroup,
    type: assetGroup,
    voltage: voltage || assetGroup,
    power: power || "",
    status: status || "",
    model: model || "",
    count: count || "",
    assetGroupDomain: codedDomain(agField),
    assetTypeDomain: codedDomain(assetTypeField),
    voltageDomain: codedDomain(voltField),
    statusDomain: codedDomain(statusField),
    groupInfos,
  };
}

export function resolveLineFields(
  layer: any,
  extraFields: any[] = [],
): LineFieldMap {
  const fields = mergeFieldLists(fieldList(layer), extraFields);
  const byName = (n: string) => fields.find((f) => norm(f.name) === norm(n));

  const voltage =
    findField(fields, [
      "kuchlanish",
      "kuchlanish turi",
      "voltage",
      "nominalvoltage",
      "nominal_voltage",
    ]) ||
    rendererField(layer) ||
    findField(fields, ["assettype", "ASSETTYPE", "assetgroup", "ASSETGROUP"]) ||
    "ASSETGROUP";

  // Candidate order for the voltage breakdown: explicit voltage-named fields
  // first, then the renderer field, then asset type / group as a last resort.
  const voltageCandidates: string[] = [];
  const pushCandidate = (name: string) => {
    const clean = String(name || "").trim();
    if (!clean) return;
    if (voltageCandidates.some((c) => c.toLowerCase() === clean.toLowerCase())) {
      return;
    }
    voltageCandidates.push(clean);
  };
  pushCandidate(voltage);
  for (const f of fields) {
    if (/kuchlanish|voltage/i.test(`${f?.name} ${f?.alias}`)) {
      pushCandidate(String(f.name));
    }
  }
  pushCandidate(rendererField(layer));
  for (const f of fields) {
    if (/assettype|asset_type|liniya turi/i.test(`${f?.name} ${f?.alias}`)) {
      pushCandidate(String(f.name));
    }
  }
  for (const f of fields) {
    if (/assetgroup|asset_group|uskuna turi/i.test(`${f?.name} ${f?.alias}`)) {
      pushCandidate(String(f.name));
    }
  }

  const domainByField = new Map<string, DomainMap>();
  for (const candidate of voltageCandidates) {
    domainByField.set(candidate, codedDomain(byName(candidate)));
  }

  const length =
    findField(fields, [
      "shape_length",
      "shape.len",
      "shape_len",
      "length",
      "uzunlik",
      "meters",
    ]) || "Shape__Length";

  const status = findField(fields, [
    "holati",
    "holat",
    "status",
    "lifecycle",
    "lifecyclestatus",
  ]);

  let voltageInfos = uniqueInfosFromRenderer(layer);
  if (voltageInfos.length === 0) {
    const domain = codedDomain(byName(voltage));
    voltageInfos = Array.from(domain.entries()).map(([value, label]) => ({
      value,
      label,
      color: fallbackVoltageColor(label),
    }));
  } else {
    voltageInfos = voltageInfos.map((info) => ({
      ...info,
      color:
        info.color && info.color !== "#60a5fa"
          ? info.color
          : fallbackVoltageColor(info.label),
    }));
  }

  // Prefer voltage-looking labels (contain kV / digits)
  const kvInfos = voltageInfos.filter((i) =>
    /\d+\s*k?v|^\d+$/i.test(i.label) || /\d+/.test(String(i.value)),
  );
  if (kvInfos.length >= 2) voltageInfos = kvInfos;

  return {
    objectId:
      findField(fields, ["objectid", "OBJECTID", "fid"]) || "OBJECTID",
    globalId:
      findField(fields, ["globalid", "GLOBALID", "global_id"]) || "GLOBALID",
    voltage,
    length,
    status: status || "",
    voltageDomain: codedDomain(byName(voltage)),
    voltageInfos,
    voltageCandidates,
    domainByField,
  };
}

export function deviceAssetGroupLabel(raw: unknown): string {
  const key = String(raw ?? "").trim();
  const map: Record<string, string> = {
    "1": "Podstansiya",
    "2": "Transformator",
    "3": "Tashqi_manba",
  };
  return map[key] || "";
}

/** Asset group code 2 = Transformator in UN_Electrik. */
export function isTransformerAssetGroup(raw: unknown): boolean {
  return String(raw ?? "").trim() === "2";
}

/** Asset group code 1 = Podstansiya in UN_Electrik. */
export function isSubstationAssetGroup(raw: unknown): boolean {
  return String(raw ?? "").trim() === "1";
}

/** Asset group code 3 = Tashqi manba in UN_Electrik. */
export function isExternalAssetGroup(raw: unknown): boolean {
  return String(raw ?? "").trim() === "3";
}

export function domainLabel(
  domain: DomainMap,
  raw: unknown,
  fallback?: string,
): string {
  if (raw === null || raw === undefined || raw === "") {
    return fallback || "—";
  }
  const key = String(raw);
  if (domain.has(key)) return domain.get(key)!;
  return fallback ?? key;
}

export function isTransformerLabel(label: string): boolean {
  const n = norm(label);
  return n.includes("transform") || n.includes("трансформ");
}

export function isExternalSourceLabel(label: string): boolean {
  const n = norm(label);
  return (
    n.includes("tashqi") ||
    n.includes("manba") ||
    n.includes("external source") ||
    n.includes("tashqi_manba")
  );
}

export function isSubstationLabel(label: string): boolean {
  const n = norm(label);
  return (
    n.includes("podstansiya") ||
    n.includes("substation") ||
    n.includes("подстанц")
  );
}

export function parseVoltageKv(raw: unknown): number {
  const s = String(raw ?? "");
  // Prefer the highest number when values like "110/35/10" or "10/0,4"
  const nums = s
    .replace(/,/g, ".")
    .match(/\d+(?:\.\d+)?/g)
    ?.map(Number)
    .filter((n) => Number.isFinite(n) && n > 0) || [];
  if (!nums.length) return 0;
  return Math.max(...nums);
}

export function formatMeters(meters: number): string {
  if (!Number.isFinite(meters) || meters <= 0) return "0 m";
  const rounded = Math.round(meters);
  return `${rounded.toLocaleString("ru-RU")} m`;
}

/** Format meters as km for indicator display (value only, unit separate). */
export function formatKmValue(meters: number): string {
  if (!Number.isFinite(meters) || meters <= 0) return "0";
  const km = meters / 1000;
  if (km >= 1000) return Math.round(km).toLocaleString("ru-RU");
  if (km >= 100) return Math.round(km).toLocaleString("ru-RU");
  if (km >= 10) return km.toFixed(1).replace(".", ",");
  return km.toFixed(2).replace(".", ",");
}

export function attrValue(
  attrs: Record<string, any> | null | undefined,
  field: string,
): unknown {
  if (!attrs || !field) return undefined;
  if (field in attrs) return attrs[field];
  const lower = field.toLowerCase();
  for (const key of Object.keys(attrs)) {
    if (key.toLowerCase() === lower) return attrs[key];
  }
  return undefined;
}
