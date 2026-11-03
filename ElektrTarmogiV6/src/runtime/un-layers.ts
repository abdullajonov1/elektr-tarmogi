/**
 * Find UN_Electrik device/line layers, hide extras, build Qatlamlar toggles.
 */
import {
  isSubstationLabel,
  isTransformerLabel,
  isExternalSourceLabel,
  resolveDeviceFields,
  resolveLineFields,
  type DeviceFieldMap,
  type LineFieldMap,
  type UniqueValueInfo,
} from "./un-fields";
import { EQUIPMENT_ICONS } from "./equipment-icons";
import { childLayers, disablePopup, fieldSourceLayer } from "./un-walk";

export type LayerToggleId =
  | `v:${string}`
  | "device:transformer"
  | "device:substation"
  | "device:external";

export interface LayerToggleItem {
  id: LayerToggleId;
  label: string;
  kind: "line" | "device";
  color: string;
  swatch: "line" | "circle" | "plus" | "icon";
  icon?: string;
  /** Raw renderer / domain value used in definitionExpression. */
  value: string | number;
  /** Optional subtype/group child layer to show/hide directly. */
  sublayer?: any;
}

export interface UnLayersHandle {
  deviceLayer: any;
  lineLayer: any;
  deviceFields: DeviceFieldMap;
  lineFields: LineFieldMap;
  toggles: LayerToggleItem[];
}

function titleOf(layer: any): string {
  return String(layer?.title || layer?.name || "").trim();
}

function normTitle(t: string): string {
  return t
    .toLowerCase()
    .replace(/[''`ʼ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function isDeviceLayerTitle(title: string): boolean {
  const t = normTitle(title);
  if (!t.includes("uskunalari") && !t.includes("device")) return false;
  if (t.includes("assembly") || t.includes("junction") || t.includes("subnet")) {
    return false;
  }
  return true;
}

export function isLineLayerTitle(title: string): boolean {
  const t = normTitle(title);
  if (t.includes("uskunalari") || t.includes("device")) return false;
  if (
    t.includes("assembly") ||
    t.includes("junction") ||
    t.includes("subnet") ||
    t.includes("structure")
  ) {
    return false;
  }
  if (t === "elektr tarmogi" || t === "elektr tarmog'i") return true;
  if (
    t.includes("elektr tarmogi") &&
    !t.includes("assembly") &&
    !t.includes("junction") &&
    !t.includes("subnet") &&
    !t.includes("uskuna")
  ) {
    const tokens = t.split(" ").filter(Boolean);
    return tokens.length <= 3;
  }
  return false;
}

export function isContextLayerTitle(title: string): boolean {
  const t = normTitle(title);
  return (
    t === "mfy" ||
    t.includes("mfy") ||
    t.includes("tuman") ||
    t.includes("chegara") ||
    t.includes("boundary") ||
    t.includes("district")
  );
}

function isQueryableLayer(layer: any): boolean {
  if (!layer) return false;
  const type = String(layer.type || "");
  const cls = String(layer.declaredClass || "");
  return (
    type === "feature" ||
    type === "subtype-group" ||
    type === "group" ||
    cls.includes("FeatureLayer") ||
    cls.includes("SubtypeGroupLayer")
  );
}

function allFeatureLayers(map: any): any[] {
  const layers = map?.allLayers?.toArray?.() || map?.layers?.toArray?.() || [];
  return layers.filter(isQueryableLayer);
}

function layerGeometryType(layer: any): string {
  const direct = String(layer?.geometryType || "");
  if (direct) return direct;
  for (const child of childLayers(layer)) {
    const g = String(child?.geometryType || "");
    if (g) return g;
  }
  return "";
}

function sqlLiteral(value: string | number): string {
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  const s = String(value).replace(/'/g, "''");
  if (/^-?\d+$/.test(s)) return s;
  return `'${s}'`;
}

function buildInClause(field: string, values: Array<string | number>): string {
  if (!values.length) return "1=0";
  const parts = values.map(sqlLiteral);
  if (parts.length === 1) return `${field} = ${parts[0]}`;
  return `${field} IN (${parts.join(",")})`;
}

export function findUnLayers(map: any): {
  deviceLayer: any | null;
  lineLayer: any | null;
} {
  const layers = allFeatureLayers(map);
  let deviceLayer: any = null;
  let lineLayer: any = null;

  for (const layer of layers) {
    const title = titleOf(layer);
    if (!deviceLayer && isDeviceLayerTitle(title)) deviceLayer = layer;
    else if (!lineLayer && isLineLayerTitle(title)) lineLayer = layer;
  }

  if (!deviceLayer) {
    deviceLayer =
      layers.find((l: any) => {
        const g = layerGeometryType(l);
        return g === "point" || g === "multipoint";
      }) || null;
  }
  if (!lineLayer) {
    lineLayer =
      layers.find((l: any) => {
        const g = layerGeometryType(l);
        return g === "polyline" || g === "line";
      }) || null;
  }

  return { deviceLayer, lineLayer };
}

function colorFromLayer(layer: any, fallback: string): string {
  try {
    const renderer = layer?.renderer;
    const symbol =
      renderer?.symbol || renderer?.uniqueValueInfos?.[0]?.symbol;
    const color =
      symbol?.color ||
      symbol?.outline?.color ||
      renderer?.uniqueValueInfos?.[0]?.symbol?.color;
    if (!color) return fallback;
    if (typeof color === "string") return color;
    const r = Math.round(color.r ?? color[0] ?? 96);
    const g = Math.round(color.g ?? color[1] ?? 165);
    const b = Math.round(color.b ?? color[2] ?? 250);
    return `rgb(${r},${g},${b})`;
  } catch {
    return fallback;
  }
}

function pickGroupInfo(
  infos: UniqueValueInfo[],
  kind: "transformer" | "substation" | "external",
): UniqueValueInfo | null {
  for (const info of infos) {
    const label = info.label || String(info.value);
    if (kind === "transformer" && isTransformerLabel(label)) return info;
    if (kind === "substation" && isSubstationLabel(label)) return info;
    if (kind === "external" && isExternalSourceLabel(label)) return info;
  }
  return null;
}

export function prepareUnLayers(map: any): UnLayersHandle | null {
  const { deviceLayer, lineLayer } = findUnLayers(map);
  return buildUnHandle(map, deviceLayer, lineLayer);
}

/**
 * Builds the handle from explicitly selected layers (builder data sources),
 * hiding every other operational layer except MFY / Tuman Chegara context.
 */
export function buildUnHandle(
  map: any,
  deviceLayer: any,
  lineLayer: any,
  deviceExtraFields: any[] = [],
  lineExtraFields: any[] = [],
): UnLayersHandle | null {
  if (!deviceLayer || !lineLayer) return null;

  const layers = allFeatureLayers(map);
  for (const layer of layers) {
    const title = titleOf(layer);
    if (layer === deviceLayer || layer === lineLayer) {
      layer.visible = true;
      disablePopup(layer);
      continue;
    }
    if (isContextLayerTitle(title)) {
      layer.visible = true;
      disablePopup(layer);
      continue;
    }
    layer.visible = false;
    disablePopup(layer);
  }

  if (map?.popup) {
    try {
      map.popup.autoOpenEnabled = false;
    } catch {
      /* ignore */
    }
  }

  const deviceFields = resolveDeviceFields(
    fieldSourceLayer(deviceLayer),
    deviceExtraFields,
  );
  const lineFields = resolveLineFields(
    fieldSourceLayer(lineLayer),
    lineExtraFields,
  );

  const toggles: LayerToggleItem[] = [];
  const lineChildren = childLayers(lineLayer);
  const voltageChildren = lineChildren.filter((c) =>
    /(\d+)\s*k?v|\b(110|35|10|6)\b/i.test(titleOf(c)),
  );
  const useLineChildren = voltageChildren.length
    ? voltageChildren
    : lineChildren;

  if (useLineChildren.length) {
    for (const child of useLineChildren) {
      const label = titleOf(child) || String(child.subtypeCode ?? child.id);
      const matched = lineFields.voltageInfos.find((i) =>
        titleOf(child).includes(String(i.label)),
      );
      toggles.push({
        id: `v:${label}` as LayerToggleId,
        label,
        kind: "line",
        color: colorFromLayer(child, matched?.color || "#60a5fa"),
        swatch: "line",
        value: child.subtypeCode ?? label,
        sublayer: child,
      });
    }
  } else {
    for (const info of lineFields.voltageInfos) {
      const label = info.label || String(info.value);
      toggles.push({
        id: `v:${String(info.value)}` as LayerToggleId,
        label,
        kind: "line",
        color: info.color,
        swatch: "line",
        value: info.value,
      });
    }
  }

  const deviceChildren = childLayers(deviceLayer);
  const transformerChild = deviceChildren.find((c) =>
    isTransformerLabel(titleOf(c)),
  );
  const substationChild = deviceChildren.find((c) =>
    isSubstationLabel(titleOf(c)),
  );
  const externalChild = deviceChildren.find((c) =>
    isExternalSourceLabel(titleOf(c)),
  );
  const transformer = pickGroupInfo(deviceFields.groupInfos, "transformer");
  const substation = pickGroupInfo(deviceFields.groupInfos, "substation");
  const external = pickGroupInfo(deviceFields.groupInfos, "external");

  toggles.push({
    id: "device:transformer",
    label: "Transformator",
    kind: "device",
    color: transformerChild
      ? colorFromLayer(transformerChild, "#f97316")
      : transformer?.color || "#f97316",
    swatch: "icon",
    icon: EQUIPMENT_ICONS.Transformator,
    value:
      transformer?.value ?? transformerChild?.subtypeCode ?? "Transformator",
    sublayer: transformerChild,
  });

  toggles.push({
    id: "device:substation",
    label: "Podstansiya",
    kind: "device",
    color: substationChild
      ? colorFromLayer(substationChild, "#3b82f6")
      : substation?.color || "#3b82f6",
    swatch: "icon",
    icon: EQUIPMENT_ICONS.Podstansiya,
    value: substation?.value ?? substationChild?.subtypeCode ?? "Podstansiya",
    sublayer: substationChild,
  });

  toggles.push({
    id: "device:external",
    label: "Tashqi manba",
    kind: "device",
    color: externalChild
      ? colorFromLayer(externalChild, "#38bdf8")
      : external?.color || "#38bdf8",
    swatch: "icon",
    icon: EQUIPMENT_ICONS["Tashqi manba"],
    value: external?.value ?? externalChild?.subtypeCode ?? "Tashqi_manba",
    sublayer: externalChild,
  });

  return {
    deviceLayer,
    lineLayer,
    deviceFields,
    lineFields,
    toggles,
  };
}

function hideNonToggledDeviceChildren(
  deviceLayer: any,
  enabledDeviceSublayers: any[],
): void {
  for (const child of childLayers(deviceLayer)) {
    try {
      child.visible = enabledDeviceSublayers.includes(child);
    } catch {
      /* ignore */
    }
  }
}

export function applyLayerToggles(
  handle: UnLayersHandle,
  enabled: Set<LayerToggleId>,
): void {
  const { deviceLayer, lineLayer, deviceFields, lineFields, toggles } = handle;

  const lineToggles = toggles.filter((t) => t.kind === "line");
  const deviceToggles = toggles.filter((t) => t.kind === "device");
  const lineHasSublayers = lineToggles.length > 0 && lineToggles.every((t) => t.sublayer);
  const deviceHasSublayers =
    deviceToggles.length > 0 && deviceToggles.every((t) => t.sublayer);

  if (lineHasSublayers) {
    const managed = new Set(
      lineToggles.map((t) => t.sublayer).filter(Boolean),
    );
    for (const child of childLayers(lineLayer)) {
      if (!managed.has(child)) {
        try {
          child.visible = false;
        } catch {
          /* ignore */
        }
      }
    }
    let any = false;
    for (const t of lineToggles) {
      const on = enabled.has(t.id);
      any = any || on;
      if (t.sublayer) t.sublayer.visible = on;
    }
    lineLayer.visible = any;
    try {
      lineLayer.definitionExpression = null;
    } catch {
      /* ignore */
    }
  } else {
    const lineValues = lineToggles
      .filter((t) => enabled.has(t.id))
      .map((t) => t.value);
    const allLineOn = lineToggles.every((t) => enabled.has(t.id));
    if (!lineValues.length) {
      lineLayer.definitionExpression = "1=0";
      lineLayer.visible = false;
    } else {
      lineLayer.visible = true;
      lineLayer.definitionExpression = allLineOn
        ? null
        : buildInClause(lineFields.voltage, lineValues);
    }
  }

  if (deviceHasSublayers) {
    const enabledChildren = deviceToggles
      .filter((t) => enabled.has(t.id) && t.sublayer)
      .map((t) => t.sublayer);
    hideNonToggledDeviceChildren(deviceLayer, enabledChildren);
    deviceLayer.visible = enabledChildren.length > 0;
    try {
      deviceLayer.definitionExpression = null;
    } catch {
      /* ignore */
    }
  } else {
    const deviceValues = deviceToggles
      .filter((t) => enabled.has(t.id))
      .map((t) => t.value);
    if (!deviceValues.length) {
      deviceLayer.definitionExpression = "1=0";
      deviceLayer.visible = false;
    } else {
      deviceLayer.visible = true;
      deviceLayer.definitionExpression = buildInClause(
        deviceFields.assetGroup,
        deviceValues,
      );
    }
  }
}

export function defaultEnabledToggles(
  toggles: LayerToggleItem[],
): Set<LayerToggleId> {
  return new Set(toggles.map((t) => t.id));
}
