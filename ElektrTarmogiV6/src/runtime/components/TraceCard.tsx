import { React } from "jimu-core";
import ReactDOM from "react-dom";
import { loadArcGISJSAPIModules } from "jimu-arcgis";
import type { EtMessages } from "../i18n";
import { translateTraceType, translateTraceTypeHint } from "../i18n";
import type { UnLayersHandle } from "../un-layers";
import {
  isTransformerAssetGroup,
  isSubstationAssetGroup,
  isExternalAssetGroup,
  isTransformerLabel,
  isSubstationLabel,
  isExternalSourceLabel,
} from "../un-fields";
import {
  buildTraceFilterContext,
  waitForSelectFeatures,
  traceFilterFromVmImmediate,
  mergeTraceFilters,
  measureTraceLineMetersSync,
  breakdownTraceResultItem,
  type TraceFilterContext,
  type TraceElementBreakdownRow,
} from "../un-trace-stats";

interface Props {
  view: any | null;
  t: EtMessages;
  handle?: UnLayersHandle | null;
  getHandle?: () => UnLayersHandle | null;
  /** Pause EmbeddedMap popup-click while Trace sketch is active. */
  onPickingChange?: (picking: boolean) => void;
  onTraceStats?: (filter: TraceFilterContext | null) => void;
}

type TabId = "input" | "results";
type SectionId = "starts" | "barriers";
type Status = "idle" | "loading" | "ready" | "missing";
type FlagKind = "starting-point" | "barrier";

interface TraceOption {
  globalId: string;
  title: string;
  selected: boolean;
}

interface FlagRow {
  id: number;
  type: string;
  label: string;
  raw: any;
}

interface ResultRow {
  key: string;
  title: string;
  status: string;
  elementCount: number;
  raw: any;
}

/** Borderless + cursor for map pick mode. */
const TRACE_PICK_CURSOR =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M12 6v12M6 12h12\' stroke=\'%237dd3fc\' stroke-width=\'2.5\' stroke-linecap=\'round\'/%3E%3C/svg%3E") 12 12, crosshair';

function listConfigs(un: any): any[] {
  const raw = un?.sharedNamedTraceConfigurations;
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  if (typeof raw.toArray === "function") return raw.toArray();
  if (Array.isArray(raw.items)) return raw.items;
  const n = Number(raw.length || 0);
  if (!n || typeof raw.getItemAt !== "function") return [];
  const out: any[] = [];
  for (let i = 0; i < n; i++) out.push(raw.getItemAt(i));
  return out.filter(Boolean);
}

function looksLikeGuid(value: unknown): boolean {
  const s = String(value ?? "").trim();
  return /^\{?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\}?$/i.test(
    s,
  );
}

function domainLabel(layer: any, fieldName: string, code: unknown): string | null {
  if (code == null || !fieldName) return null;
  try {
    const fields = layer?.fields || [];
    const field = fields.find(
      (f: any) =>
        String(f?.name || "").toLowerCase() === fieldName.toLowerCase(),
    );
    const coded = field?.domain?.codedValues || field?.domain?.codedValue;
    if (!Array.isArray(coded)) return null;
    const hit = coded.find((cv: any) => String(cv?.code) === String(code));
    const name = hit?.name ?? hit?.label;
    return name != null && String(name).trim() ? String(name).trim() : null;
  } catch {
    return null;
  }
}

/** Prefer device icons (point) over lines when both sit under the click. */
function hitGeomRank(geomType: unknown): number {
  const t = String(geomType || "").toLowerCase();
  if (t === "point" || t === "multipoint") return 0;
  if (t === "polyline") return 1;
  return 9;
}

function prioritizeHitResults(results: any[]): any[] {
  return [...(results || [])].sort((a, b) => {
    const ra = hitGeomRank(a?.graphic?.geometry?.type);
    const rb = hitGeomRank(b?.graphic?.geometry?.type);
    if (ra !== rb) return ra - rb;
    return 0;
  });
}

function attrAssetGroup(attrs: Record<string, any>): string {
  return String(
    attrs?.assetgroup ??
      attrs?.ASSETGROUP ??
      attrs?.assetGroup ??
      attrs?.AssetGroup ??
      "",
  ).trim();
}

function attrAssetType(attrs: Record<string, any>): string {
  return String(
    attrs?.assettype ??
      attrs?.ASSETTYPE ??
      attrs?.assetType ??
      attrs?.AssetType ??
      "",
  ).trim();
}

function classifyFlagGraphic(
  graphic: any,
): "transformer" | "substation" | "external" | "line" | "device" {
  const gType = String(graphic?.geometry?.type || "").toLowerCase();
  if (gType === "polyline") return "line";

  const attrs = graphic?.attributes || {};
  const ag = attrAssetGroup(attrs);
  const at = attrAssetType(attrs);
  const layerTitle = String(graphic?.layer?.title || graphic?.sourceLayer?.title || "");
  const agLabel = domainLabel(graphic?.layer || graphic?.sourceLayer, "assetgroup", ag) || ag;
  const atLabel = domainLabel(graphic?.layer || graphic?.sourceLayer, "assettype", at) || at;

  if (
    isTransformerAssetGroup(ag) ||
    isTransformerLabel(agLabel) ||
    isTransformerLabel(atLabel) ||
    isTransformerLabel(layerTitle)
  ) {
    return "transformer";
  }
  if (
    isSubstationAssetGroup(ag) ||
    isSubstationLabel(agLabel) ||
    isSubstationLabel(atLabel) ||
    isSubstationLabel(layerTitle)
  ) {
    return "substation";
  }
  if (
    isExternalAssetGroup(ag) ||
    isExternalSourceLabel(agLabel) ||
    isExternalSourceLabel(atLabel) ||
    isExternalSourceLabel(layerTitle)
  ) {
    return "external";
  }
  if (gType === "point" || gType === "multipoint") return "device";
  return "device";
}

/** Human-readable flag label from feature / layer (never prefer GlobalID). */
function resolveFlagDisplay(graphic: any, vm?: any): { field: string; value: string } | null {
  if (!graphic) return null;

  try {
    const esriDv = vm?._getDisplayField?.(graphic);
    if (esriDv?.value != null && String(esriDv.value).trim()) {
      const v = String(esriDv.value).trim();
      if (!looksLikeGuid(v)) {
        return {
          field: String(esriDv.field || "display"),
          value: v,
        };
      }
    }
  } catch {
    /* ignore */
  }

  const layer = graphic.layer || graphic.sourceLayer;
  const attrs = graphic.attributes || {};
  const preferred = [
    layer?.displayField,
    "name",
    "Name",
    "NAME",
    "title",
    "Title",
    "assettype",
    "ASSETTYPE",
    "assetgroup",
    "ASSETGROUP",
  ].filter(Boolean) as string[];

  for (const key of preferred) {
    const raw = attrs[key];
    if (raw == null || String(raw).trim() === "") continue;
    if (looksLikeGuid(raw)) continue;
    const labeled = domainLabel(layer, key, raw) || String(raw).trim();
    if (labeled && !looksLikeGuid(labeled)) {
      return { field: key, value: labeled };
    }
  }

  const layerTitle = String(layer?.title || "").trim();
  const oid = attrs.OBJECTID ?? attrs.objectid ?? attrs.ObjectId;
  if (layerTitle && oid != null) {
    return { field: "objectid", value: `${layerTitle} #${oid}` };
  }
  if (layerTitle) return { field: "layer", value: layerTitle };

  return null;
}

function semanticFlagLabel(graphic: any, t: EtMessages): string {
  switch (classifyFlagGraphic(graphic)) {
    case "line":
      return t.line;
    case "transformer":
      return t.transformer;
    case "substation":
      return t.substation;
    case "external":
      return t.externalSource;
    default: {
      const resolved = resolveFlagDisplay(graphic, null);
      return resolved?.value || t.transformer;
    }
  }
}

/** Esri ViewModel stores label on displayValue (not displayField). */
function flagLabel(flag: any, index: number, t: EtMessages): string {
  const candidates = [
    flag?.displayValue,
    flag?.displayField,
    flag?.details?.attributes?.displayValue,
    flag?.details?.attributes?.displayField,
  ];
  for (const dv of candidates) {
    const raw =
      typeof dv === "string"
        ? dv.trim()
        : dv?.value != null
          ? String(dv.value).trim()
          : "";
    if (raw && !looksLikeGuid(raw)) return raw;
  }

  if (flag?.details) {
    return semanticFlagLabel(flag.details, t);
  }

  const gType = String(
    flag?.details?.geometry?.type ||
      flag?.mapGraphic?.geometry?.type ||
      "",
  ).toLowerCase();
  if (gType.includes("line")) return t.line;
  if (gType === "point" || gType === "multipoint") return t.transformer;

  return `${t.traceStarts} #${index + 1}`;
}

function resultTitle(item: any, fallback: string): string {
  const ti = item?.TraceItem || item?.traceItem || item?.trace;
  return ti?.title || item?.title || ti?.name || item?.name || fallback;
}

function resultElementCount(item: any): number {
  const tr = item?.TraceResult || item?.traceResult || item?.results;
  const elements = tr?.elements;
  if (Array.isArray(elements)) return elements.length;
  if (elements?.length != null) return Number(elements.length);
  const agg = tr?.aggregatedGeometry;
  if (agg) return 1;
  return 0;
}

function breakdownLabel(
  id: TraceElementBreakdownRow["id"],
  t: EtMessages,
): string {
  switch (id) {
    case "line":
      return t.line;
    case "transformer":
      return t.transformer;
    case "substation":
      return t.substation;
    case "external":
      return t.externalSource;
    default:
      return t.traceDevice;
  }
}

function computeTraceTipStyle(anchor: DOMRect): {
  style: React.CSSProperties;
  below: boolean;
} {
  const pad = 12;
  const maxW = Math.min(240, window.innerWidth - pad * 2);
  let left = anchor.left + anchor.width / 2;
  left = Math.max(
    pad + maxW / 2,
    Math.min(window.innerWidth - pad - maxW / 2, left),
  );
  const below = anchor.top < 88;
  if (below) {
    return {
      below: true,
      style: {
        left,
        top: anchor.bottom + 8,
        transform: "translate(-50%, 0)",
        maxWidth: maxW,
      },
    };
  }
  return {
    below: false,
    style: {
      left,
      top: anchor.top - 8,
      transform: "translate(-50%, -100%)",
      maxWidth: maxW,
    },
  };
}

/**
 * Custom et-design Trace card.
 * Same workflow as Esri sample:
 * https://developers.arcgis.com/javascript/latest/sample-code/utility-network-trace/
 * Select Connected → + starting point → click line/device → Run → map graphics.
 */
export default function TraceCard(props: Props): React.ReactElement {
  const { view, t, handle, getHandle, onPickingChange, onTraceStats } = props;
  const vmRef = React.useRef<any>(null);
  const unRef = React.useRef<any>(null);
  const handleLiveRef = React.useRef(handle);
  handleLiveRef.current = handle;
  const resolveHandle = (): UnLayersHandle | null =>
    getHandle?.() || handleLiveRef.current || handle || null;
  const handlesRef = React.useRef<Array<{ remove?: () => void }>>([]);
  const pickHandleRef = React.useRef<{ remove?: () => void } | null>(null);

  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState("");
  const [tab, setTab] = React.useState<TabId>("input");
  const [openSection, setOpenSection] = React.useState<SectionId>("starts");
  const [traces, setTraces] = React.useState<TraceOption[]>([]);
  const [flags, setFlags] = React.useState<FlagRow[]>([]);
  const [results, setResults] = React.useState<ResultRow[]>([]);
  const [picking, setPicking] = React.useState<FlagKind | null>(null);
  const [running, setRunning] = React.useState(false);
  const [runError, setRunError] = React.useState("");
  const [traceTip, setTraceTip] = React.useState<{
    id: string;
    text: string;
    anchor: DOMRect;
  } | null>(null);

  const cancelPickClick = React.useCallback(() => {
    try {
      pickHandleRef.current?.remove?.();
    } catch {
      /* ignore */
    }
    pickHandleRef.current = null;
    try {
      vmRef.current?.removeClickHandler?.();
    } catch {
      /* ignore */
    }
  }, []);

  const applyMapCursor = React.useCallback(
    (active: boolean) => {
      const el =
        view?.container ||
        view?.surface ||
        (typeof document !== "undefined"
          ? document.querySelector(".et-map-wrap .esri-view")
          : null);
      if (!el || !el.style) return;
      if (active) {
        el.style.cursor = TRACE_PICK_CURSOR;
      } else {
        el.style.cursor = "";
      }
    },
    [view],
  );

  const setPickingSafe = React.useCallback(
    (next: FlagKind | null) => {
      setPicking(next);
      onPickingChange?.(!!next);
      applyMapCursor(!!next);
    },
    [onPickingChange, applyMapCursor],
  );

  const readFlags = (vm: any): any[] => {
    const a = vm?.flags;
    const b = vm?._flags;
    if (Array.isArray(a) && a.length) return a;
    if (Array.isArray(b) && b.length) return b;
    if (Array.isArray(a)) return a;
    if (Array.isArray(b)) return b;
    return [];
  };

  const syncFromVm = React.useCallback(() => {
    const vm = vmRef.current;
    if (!vm) return;

    const traceList: TraceOption[] = (vm.traces || []).map((tr: any) => ({
      globalId: String(tr.globalId || ""),
      title: String(tr.title || tr.name || tr.globalId || "Trace"),
      selected: !!tr.selected,
    }));
    setTraces(traceList.filter((tr) => tr.globalId));

    const flagList: FlagRow[] = readFlags(vm).map((f: any, i: number) => ({
      id: Number(f.id ?? i),
      type: String(f.type || ""),
      label: flagLabel(f, i, t),
      raw: f,
    }));
    setFlags(flagList);

    const resultList: ResultRow[] = (vm.traceResults || []).map(
      (r: any, i: number) => ({
        key: String(
          r?.TraceItem?.globalId ||
            r?.trace?.globalId ||
            r?.globalId ||
            i,
        ),
        title: translateTraceType(
          resultTitle(r, `${t.traceResult} ${i + 1}`),
          t,
        ),
        status: String(r?.status || ""),
        elementCount: resultElementCount(r),
        raw: r,
      }),
    );
    setResults(resultList);
  }, [t]);

  /** Collect feature / subtype layers so hitTest can resolve lines & devices. */
  const collectTraceHitLayers = React.useCallback(
    (mapView: any, un: any): any[] => {
      const out: any[] = [];
      const seen = new Set<any>();
      const add = (layer: any) => {
        if (!layer || seen.has(layer)) return;
        if (layer.visible === false) return;
        seen.add(layer);
        out.push(layer);
      };
      const walk = (layer: any) => {
        if (!layer) return;
        const type = String(layer.type || "");
        if (type === "feature" || type === "subtype-sublayer") {
          add(layer);
          return;
        }
        if (type === "subtype-group") {
          add(layer);
          const subs =
            layer.sublayers?.toArray?.() ||
            layer.sublayers?.items ||
            [];
          for (const sub of subs) walk(sub);
          return;
        }
        if (type === "group") {
          const kids = layer.layers?.toArray?.() || [];
          for (const kid of kids) walk(kid);
        }
      };

      for (const layer of mapView?.map?.allLayers?.toArray?.() || []) {
        walk(layer);
      }

      const sources =
        un?.networkSources?.toArray?.() || un?.networkSources || [];
      for (const src of sources) {
        if (src?.layer) walk(src.layer);
      }

      return out;
    },
    [],
  );

  const ensureHitLayers = React.useCallback(
    (vm: any, mapView: any): void => {
      try {
        vm._loadUNSupportItems?.();
      } catch (err) {
        console.warn("[ET Trace] _loadUNSupportItems failed", err);
      }
      // Prefer Esri's UN-validated layers; only supplement if empty.
      const esriLayers = Array.isArray(vm._validUNLayers)
        ? vm._validUNLayers.filter(Boolean)
        : [];
      const extra = collectTraceHitLayers(mapView, unRef.current);
      const merged: any[] = [];
      const seen = new Set<any>();
      for (const layer of [...esriLayers, ...extra]) {
        if (!layer || seen.has(layer)) continue;
        seen.add(layer);
        merged.push(layer);
      }
      if (merged.length) vm._validUNLayers = merged;
      console.log("[ET Trace] hit layers ready", {
        count: merged.length,
        esriCount: esriLayers.length,
        titles: merged.slice(0, 20).map((l: any) => ({
          title: l?.title || l?.name,
          type: l?.type,
          id: l?.id,
          visible: l?.visible,
        })),
        vmValidCount: vm._validUNLayers?.length ?? 0,
      });
    },
    [collectTraceHitLayers],
  );

  /** Manual flag via public TraceLocation API (portal strips private VM methods). */
  const addFlagFromHitResults = React.useCallback(
    async (
      vm: any,
      hitResults: any[],
      clickPoint: any,
      type: FlagKind,
    ): Promise<boolean> => {
      const un = vm?.utilityNetwork;
      if (!un || !clickPoint || !hitResults?.length) return false;

      const [TraceLocation, Graphic, SimpleMarkerSymbol] =
        await loadArcGISJSAPIModules([
          "esri/rest/networks/support/TraceLocation",
          "esri/Graphic",
          "esri/symbols/SimpleMarkerSymbol",
        ]);

      const candidates = hitResults
        .map((r: any) => r?.graphic)
        .filter((g: any) => {
          const gt = String(g?.geometry?.type || "");
          return gt === "point" || gt === "polyline";
        });
      // Prefer devices (icons) over lines when both are under the click.
      candidates.sort((a: any, b: any) => {
        return (
          hitGeomRank(a?.geometry?.type) - hitGeomRank(b?.geometry?.type)
        );
      });

      const flagColor =
        type === "barrier" ? [227, 27, 21, 0.85] : [21, 244, 21, 0.85];

      for (const graphic of candidates) {
        try {
          const gType = String(graphic.geometry.type);
          const globalId = String(
            graphic.attributes?.globalid ||
              graphic.attributes?.GLOBALID ||
              graphic.attributes?.GlobalID ||
              "",
          ).trim();
          if (!globalId) {
            console.warn("[ET Trace] skip hit: no globalId", {
              layer: graphic.layer?.title,
              gType,
            });
            continue;
          }

          let percentAlong: number | null = null;
          let terminalId: number | null = null;
          let allTerminals: any = null;
          let selectedTerminals: number[] | null = null;

          if (gType === "polyline") {
            percentAlong = 0.5;
            try {
              const along = vm._geometryHandler?.getPercentageAlong?.(
                graphic.geometry,
                clickPoint,
                graphic.geometry.spatialReference,
              );
              if (Array.isArray(along) && Number.isFinite(along[0])) {
                percentAlong = along[0];
              } else if (Number.isFinite(along)) {
                percentAlong = Number(along);
              }
            } catch (err) {
              console.warn("[ET Trace] percentAlong failed, using 0.5", err);
            }
          } else {
            try {
              allTerminals = un.getTerminalConfiguration?.(graphic) ?? null;
            } catch (err) {
              console.warn("[ET Trace] getTerminalConfiguration failed", err);
            }
            terminalId =
              allTerminals?.terminals?.[0]?.id != null
                ? Number(allTerminals.terminals[0].id)
                : 1;
            selectedTerminals = [terminalId];
          }

          const loc: any = new TraceLocation({
            globalId,
            type,
            terminalId,
            percentAlong,
            isFilterBarrier: false,
          });

          const mapGraphic = new Graphic({
            geometry: clickPoint,
            symbol: new SimpleMarkerSymbol({
              color: flagColor,
              size: 12,
              outline: { color: flagColor, width: 0 },
            }),
            attributes: {
              globalid: globalId,
              type,
            },
          });

          loc.details = graphic;
          loc.mapGraphic = mapGraphic;
          loc.mapPoint = clickPoint;
          loc.allTerminals = allTerminals;
          loc.selectedTerminals = selectedTerminals;
          const displayLabel = semanticFlagLabel(graphic, t);
          loc.displayValue = {
            field: "kind",
            value: displayLabel,
          };
          // Esri getter auto-increments _flagId
          try {
            loc.id = vm._uniqueFlagId;
          } catch {
            loc.id =
              typeof vm._flagId === "number"
                ? vm._flagId++
                : Date.now() + Math.floor(Math.random() * 1000);
          }

          // Add marker to UN flag graphics layer if present
          try {
            const layers = vm.view?.map?.allLayers?.toArray?.() ||
              vm.view?.map?.layers?.toArray?.() ||
              [];
            const flagLayer = layers.find(
              (l: any) =>
                l?.type === "graphics" &&
                String(l?.id || "").includes("utility-network-trace-flags"),
            );
            if (flagLayer) {
              flagLayer.add(mapGraphic);
            } else {
              // Ensure a simple graphics layer exists for markers
              const [GraphicsLayer] = await loadArcGISJSAPIModules([
                "esri/layers/GraphicsLayer",
              ]);
              const layer = new GraphicsLayer({
                id: `utility-network-trace-flags-et-${Date.now()}`,
                listMode: "hide",
                title: "ET Trace Flags",
              });
              vm.view.map.add(layer);
              layer.add(mapGraphic);
            }
          } catch (err) {
            console.warn("[ET Trace] add flag graphic failed", err);
          }

          const prev = Array.isArray(vm._flags) ? vm._flags : [];
          const next = [...prev, loc];
          vm._flags = next;
          try {
            vm.flags = next;
          } catch {
            /* ignore */
          }

          console.log("[ET Trace] manual flag added", {
            type,
            gType,
            globalId,
            terminalId,
            percentAlong,
            layer: graphic.layer?.title,
            flags: next.length,
          });
          return true;
        } catch (err) {
          console.error("[ET Trace] manual flag error", err);
        }
      }
      return false;
    },
    [t],
  );

  /**
   * Reliable pick: map click + prioritized device/line hit.
   * Prefer icons (point) over lines when both are under the click.
   */
  const pickFlagByMapClick = React.useCallback(
    async (type: FlagKind): Promise<boolean> => {
      const vm = vmRef.current;
      const mapView = view;
      console.log("[ET Trace] pickFlagByMapClick start", {
        type,
        hasVm: !!vm,
        hasView: !!mapView,
        viewReady: !!mapView?.ready,
        hasUN: !!vm?.utilityNetwork,
      });
      if (!vm || !mapView) {
        console.warn("[ET Trace] pick aborted: missing vm or view");
        return false;
      }

      ensureHitLayers(vm, mapView);
      cancelPickClick();

      const [Graphic] = await loadArcGISJSAPIModules(["esri/Graphic"]);

      return await new Promise<boolean>((resolve) => {
        const finish = (ok: boolean, reason?: string) => {
          console.log("[ET Trace] pick finish", { ok, reason, type });
          try {
            pickHandleRef.current?.remove?.();
          } catch {
            /* ignore */
          }
          pickHandleRef.current = null;
          resolve(ok);
        };

        console.log("[ET Trace] waiting for map click…");
        pickHandleRef.current = mapView.on("click", async (event: any) => {
          console.log("[ET Trace] map click received", {
            type,
            screen: event?.screenPoint || { x: event?.x, y: event?.y },
            mapPoint: event?.mapPoint
              ? {
                  x: event.mapPoint.x,
                  y: event.mapPoint.y,
                  spatialReference: event.mapPoint.spatialReference?.wkid,
                }
              : null,
          });
          try {
            const point = event?.mapPoint;
            if (!point) {
              finish(false, "no-mapPoint");
              return;
            }

            const include = vm._validUNLayers?.length
              ? vm._validUNLayers
              : undefined;
            let allResults: any[] = [];
            for (const opts of [
              include ? { include } : undefined,
              undefined,
            ]) {
              const hit = await mapView.hitTest(event, opts);
              const results = (hit?.results || []).filter(
                (r: any) => r?.graphic?.geometry,
              );
              console.log("[ET Trace] hitTest pass", {
                includeCount: opts?.include?.length ?? "all",
                resultCount: results.length,
                results: results.slice(0, 8).map((r: any) => ({
                  type: r?.type,
                  layerTitle: r?.layer?.title || r?.graphic?.layer?.title,
                  layerType: r?.layer?.type || r?.graphic?.layer?.type,
                  geomType: r?.graphic?.geometry?.type,
                  oid:
                    r?.graphic?.attributes?.OBJECTID ??
                    r?.graphic?.attributes?.objectid,
                  gid:
                    r?.graphic?.attributes?.globalid ||
                    r?.graphic?.attributes?.GLOBALID,
                })),
              });
              if (results.length) {
                allResults = prioritizeHitResults(results);
                break;
              }
            }

            let hitOk = false;
            const topGeom = String(
              allResults[0]?.graphic?.geometry?.type || "",
            ).toLowerCase();
            const preferManual =
              topGeom === "point" || topGeom === "multipoint";

            // 1) Prefer our ranking: device icon first when present under click
            if (allResults.length) {
              hitOk = await addFlagFromHitResults(
                vm,
                allResults,
                point,
                type,
              );
              console.log("[ET Trace] manual flag path", {
                hitOk,
                preferManual,
                topGeom,
              });
            }

            // 2) Esri native fallback (only if manual failed)
            if (!hitOk) {
              try {
                const probe = new Graphic({ geometry: point });
                hitOk = !!(await vm.queryFlagByHitTest(
                  {
                    graphic: probe,
                    state: "complete",
                    tool: "point",
                    toolEventInfo: null,
                    type: "create",
                  },
                  type,
                  null,
                ));
                console.log("[ET Trace] queryFlagByHitTest(point-only)", {
                  hitOk,
                });
              } catch (err) {
                console.error("[ET Trace] point-only query failed", err);
              }
            }

            // 3) Force Esri lookup with prioritized hits
            if (!hitOk && allResults.length) {
              const origHitTest = mapView.hitTest?.bind(mapView);
              try {
                mapView.hitTest = async () => ({ results: allResults });
                const probe = new Graphic({ geometry: point });
                hitOk = !!(await vm.queryFlagByHitTest(
                  {
                    graphic: probe,
                    state: "complete",
                    tool: "point",
                    toolEventInfo: null,
                    type: "create",
                  },
                  type,
                  null,
                ));
                console.log("[ET Trace] queryFlagByHitTest(forced-hits)", {
                  hitOk,
                });
              } catch (err) {
                console.error("[ET Trace] forced-hits query failed", err);
              } finally {
                if (origHitTest) mapView.hitTest = origHitTest;
              }
            }

            finish(!!hitOk, hitOk ? "ok" : "no-asset");
          } catch (err) {
            console.error("[ET Trace] click handler error", err);
            finish(false, "click-error");
          }
        });
      });
    },
    [view, cancelPickClick, ensureHitLayers, addFlagFromHitResults],
  );

  React.useEffect(() => {
    let cancelled = false;

    const clearHandles = () => {
      handlesRef.current.forEach((h) => {
        try {
          h?.remove?.();
        } catch {
          /* ignore */
        }
      });
      handlesRef.current = [];
    };

    const destroy = () => {
      clearHandles();
      cancelPickClick();
      onPickingChange?.(false);
      const vm = vmRef.current;
      vmRef.current = null;
      if (!vm) return;
      try {
        vm.removeClickHandler?.();
      } catch {
        /* ignore */
      }
      try {
        vm.reset?.();
      } catch {
        /* ignore */
      }
      try {
        vm.destroy?.();
      } catch {
        /* ignore */
      }
    };

    const mount = async () => {
      destroy();
      setPickingSafe(null);
      setRunning(false);
      setRunError("");
      setResults([]);
      setFlags([]);
      setTraces([]);
      setTab("input");

      if (!view) {
        setStatus("idle");
        setMessage("");
        return;
      }

      setStatus("loading");
      setMessage(t.traceLoading);

      try {
        await view.when?.();
        const [UtilityNetworkTraceViewModel, reactiveUtils] =
          await loadArcGISJSAPIModules([
            "esri/widgets/UtilityNetworkTrace/UtilityNetworkTraceViewModel",
            "esri/core/reactiveUtils",
          ]);
        if (cancelled) return;

        const vm = new UtilityNetworkTraceViewModel({
          view,
          showSelectionAttributes: true,
          selectOnComplete: true,
          showGraphicsOnComplete: true,
        });
        vmRef.current = vm;

        const un = await vm.loadUtilityNetwork();
        if (cancelled) return;

        if (!un) {
          setStatus("missing");
          setMessage(t.traceNoNetwork);
          return;
        }

        unRef.current = un;

        try {
          await un.load?.();
        } catch {
          /* continue */
        }

        if (!listConfigs(un).length) {
          setStatus("missing");
          setMessage(t.traceNoConfigs);
          return;
        }

        // Prepare flag graphics + valid UN layers for hit-testing.
        try {
          vm._loadUNSupportItems?.();
        } catch {
          /* ignore */
        }
        ensureHitLayers(vm, view);

        vm.selectTracesOnLoad?.();
        syncFromVm();

        const watch = (get: () => unknown) => {
          const h = reactiveUtils.watch(get, () => syncFromVm(), {
            initial: true,
          });
          handlesRef.current.push(h);
        };
        watch(() => vm.flags);
        watch(() => vm._flags);
        watch(() => vm.traces);
        watch(() => vm.selectedTraces);
        watch(() => vm.traceResults);
        watch(() => vm.state);

        try {
          const h1 = vm.on?.("add-flag-complete", () => syncFromVm());
          const h2 = vm.on?.("add-flag-error", () => syncFromVm());
          if (h1) handlesRef.current.push(h1);
          if (h2) handlesRef.current.push(h2);
        } catch {
          /* ignore */
        }

        if (!cancelled) {
          setStatus("ready");
          setMessage("");
        }
      } catch (err) {
        if (!cancelled) {
          setStatus("missing");
          setMessage(err instanceof Error ? err.message : t.traceNoNetwork);
        }
      }
    };

    void mount();

    return () => {
      cancelled = true;
      destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- remount only when view changes
  }, [view]);

  React.useEffect(() => {
    return () => {
      applyMapCursor(false);
      onPickingChange?.(false);
    };
  }, [onPickingChange, applyMapCursor]);

  const startFlags = flags.filter((f) => f.type === "starting-point");
  const barrierFlags = flags.filter((f) => f.type === "barrier");
  const selectedCount = traces.filter((tr) => tr.selected).length;
  // Barriers optional — Run needs: ≥1 Trace type + ≥1 Starting point.
  const canRun =
    status === "ready" &&
    selectedCount > 0 &&
    startFlags.length > 0 &&
    !running &&
    !picking;

  const runHint =
    status !== "ready"
      ? ""
      : selectedCount <= 0
        ? t.traceNeedInputs
        : startFlags.length <= 0
          ? t.traceNeedStart
          : "";

  const isOpen = (id: SectionId) => openSection === id;

  /** Accordion: opening one section closes the others. */
  const toggleSection = (id: SectionId) => {
    setOpenSection(id);
  };

  const ensureOpen = (id: SectionId) => {
    setOpenSection(id);
  };

  const onToggleTrace = (globalId: string, selected: boolean) => {
    vmRef.current?.selectTraces?.(selected, globalId);
    syncFromVm();
  };

  const onPick = async (type: FlagKind) => {
    const vm = vmRef.current;
    console.log("[ET Trace] + button clicked", {
      type,
      hasVm: !!vm,
      hasView: !!view,
      alreadyPicking: !!picking,
      status,
      flags: flags.length,
    });
    if (!vm || !view || picking) {
      console.warn("[ET Trace] + ignored", {
        reason: !vm ? "no-vm" : !view ? "no-view" : "already-picking",
      });
      return;
    }

    ensureOpen(type === "starting-point" ? "starts" : "barriers");
    setPickingSafe(type);
    setRunError("");
    try {
      const ok = await pickFlagByMapClick(type);
      syncFromVm();
      console.log("[ET Trace] pick result", {
        ok,
        flagsAfter: (vmRef.current?.flags || vmRef.current?._flags || [])
          .length,
      });
      if (!ok) {
        setRunError(t.traceNoAsset);
      }
    } catch (err) {
      console.error("[ET Trace] onPick error", err);
      setRunError(t.traceNoAsset);
    } finally {
      setPickingSafe(null);
    }
  };

  const onRemoveFlag = (flag: FlagRow) => {
    const vm = vmRef.current;
    if (!vm || !flag?.raw) return;
    try {
      // Prefer Esri API when present
      if (typeof vm.removeFlag === "function") {
        vm.removeFlag(flag.raw);
      }
    } catch (err) {
      console.warn("[ET Trace] removeFlag API failed", err);
    }

    // Portal-safe fallback: always sync _flags + remove marker
    try {
      const target = flag.raw;
      const prev = Array.isArray(vm._flags) ? vm._flags : readFlags(vm);
      const next = prev.filter((f: any) => {
        if (target.id != null && f?.id != null) return f.id !== target.id;
        if (target.globalId && f?.globalId) {
          return !(
            String(f.globalId).toLowerCase() ===
              String(target.globalId).toLowerCase() &&
            String(f.type) === String(target.type)
          );
        }
        return f !== target;
      });
      vm._flags = next;
      try {
        vm.flags = next;
      } catch {
        /* ignore */
      }

      const g = target.mapGraphic;
      if (g) {
        try {
          g.layer?.remove?.(g);
        } catch {
          /* ignore */
        }
        try {
          const layers =
            vm.view?.map?.allLayers?.toArray?.() ||
            vm.view?.map?.layers?.toArray?.() ||
            [];
          for (const layer of layers) {
            if (layer?.type === "graphics" && layer?.remove) {
              try {
                layer.remove(g);
              } catch {
                /* ignore */
              }
            }
          }
        } catch {
          /* ignore */
        }
      }
    } catch (err) {
      console.error("[ET Trace] manual removeFlag failed", err);
    }
    syncFromVm();
  };

  const onRun = async () => {
    const vm = vmRef.current;
    if (!vm || running) return;
    setRunError("");
    const setup = vm.checkCanTrace?.();
    if (setup && setup.status === false) {
      const issues = (setup.issues || [])
        .map((code: string) => {
          if (code === "noTrace") return t.traceNeedInputs;
          if (code === "noTerminalSelected") return t.traceNoAsset;
          return code;
        })
        .join(" ");
      setRunError(issues || t.traceNeedInputs);
      return;
    }
    setRunning(true);
    try {
      const featureSetsPromise = waitForSelectFeatures(vm, 120000);
      await vm.callTrace();
      syncFromVm();
      const latest = vm.traceResults || [];
      const failed = latest.filter(
        (r: any) => r?.status && /error|fail/i.test(String(r.status)),
      );
      if (!latest.length) {
        setRunError(t.traceNoResults);
      } else if (failed.length) {
        setRunError(String(failed[0].status));
      } else {
        setTab("results");
        const liveHandle = resolveHandle();
        // Instant UI: transformers + line km from elements / aggregated geometry.
        const immediate = traceFilterFromVmImmediate(vm, view);
        const syncLen = measureTraceLineMetersSync(vm, view);
        if (syncLen.meters > immediate.lineMeters) {
          immediate.lineMeters = syncLen.meters;
        }
        if (syncLen.geoms.length) {
          immediate.traceGeometries = syncLen.geoms;
        }
        onTraceStats?.(immediate);

        // Prefer select-features (already in memory) — wait up to 8s, then proceed.
        const featureSets = await Promise.race([
          featureSetsPromise,
          new Promise<any[]>((resolve) =>
            setTimeout(() => resolve([]), 8000),
          ),
        ]);

        const filter = await buildTraceFilterContext(
          vm,
          liveHandle,
          featureSets?.length ? featureSets : null,
          view,
        );
        const finalFilter = mergeTraceFilters(immediate, filter);
        onTraceStats?.({
          ...finalFilter,
          prefetchedFeatureSets:
            featureSets?.length
              ? featureSets
              : finalFilter?.prefetchedFeatureSets,
          tableReady: true,
        });
      }
    } catch (err) {
      setRunError(err instanceof Error ? err.message : t.traceRunError);
    } finally {
      setRunning(false);
    }
  };

  const onReset = () => {
    cancelPickClick();
    try {
      vmRef.current?.removeClickHandler?.();
    } catch {
      /* ignore */
    }
    try {
      vmRef.current?.reset?.();
    } catch {
      /* ignore */
    }
    setRunError("");
    setPickingSafe(null);
    setTab("input");
    onTraceStats?.(null);
    syncFromVm();
  };

  const onClearResult = (row: ResultRow) => {
    try {
      const item = row.raw?.TraceItem || row.raw?.trace || row.raw;
      vmRef.current?.clearResult?.(item);
      syncFromVm();
      void (async () => {
        const filter = await buildTraceFilterContext(
          vmRef.current,
          resolveHandle(),
          null,
          view,
        );
        if (filter) onTraceStats?.({ ...filter, tableReady: true });
      })();
    } catch {
      /* ignore */
    }
  };

  const renderFlagChips = (rows: FlagRow[]) =>
    rows.length ? (
      <div className="et-trace-chip-list">
        {rows.map((f) => (
          <div key={`${f.type}-${f.id}`} className="et-trace-chip">
            <span className="et-trace-chip-text" title={f.label}>
              {f.label}
            </span>
            <button
              type="button"
              className="et-trace-chip-x"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onRemoveFlag(f);
              }}
              aria-label={t.traceRemove}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    ) : null;

  return (
    <div className="et-trace-card">
      <div className="et-trace-card-head">
        <span className="et-card-mark" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="6" cy="18" r="2.4" />
            <circle cx="18" cy="6" r="2.4" />
            <path d="M8.2 17.2 15.8 6.8" strokeLinecap="round" />
          </svg>
        </span>
        <div className="et-trace-card-title">{t.traceTitle}</div>
      </div>

      {status !== "ready" ? (
        <div
          className={`et-trace-msg${status === "missing" ? " is-warn" : ""}`}
        >
          {message || (status === "idle" ? t.traceWaitingMap : t.traceLoading)}
        </div>
      ) : (
        <>
          <div className="et-trace-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              className={`et-trace-tab${tab === "input" ? " is-active" : ""}`}
              aria-selected={tab === "input"}
              onClick={() => setTab("input")}
            >
              {t.traceTabInput}
            </button>
            <button
              type="button"
              role="tab"
              className={`et-trace-tab${tab === "results" ? " is-active" : ""}`}
              aria-selected={tab === "results"}
              onClick={() => setTab("results")}
            >
              {t.traceTabResults}
              {results.length ? ` (${results.length})` : ""}
            </button>
          </div>

          {tab === "input" ? (
            <div className="et-trace-body">
              <div className="et-trace-types-block">
                <div className="et-trace-types-label">
                  {t.traceTypes} ({selectedCount})
                </div>
                {traces.length === 0 ? (
                  <div className="et-trace-hint">{t.traceNoConfigs}</div>
                ) : (
                  <div className="et-trace-type-btns" role="group">
                    {traces.map((tr) => {
                      const hint = translateTraceTypeHint(tr.title, t);
                      const translated = translateTraceType(tr.title, t);
                      const showTranslation =
                        !!translated &&
                        translated.toLowerCase() !==
                          String(tr.title || "").toLowerCase();
                      return (
                        <span
                          key={tr.globalId}
                          className="et-trace-type-wrap"
                        >
                          <button
                            type="button"
                            className={`et-trace-type-btn${
                              tr.selected ? " is-selected" : ""
                            }`}
                            aria-pressed={tr.selected}
                            aria-describedby={`trace-tip-${tr.globalId}`}
                            onClick={() =>
                              onToggleTrace(tr.globalId, !tr.selected)
                            }
                            onMouseDown={(e) => e.preventDefault()}
                            onMouseEnter={(e) =>
                              setTraceTip({
                                id: tr.globalId,
                                text: hint,
                                anchor: e.currentTarget.getBoundingClientRect(),
                              })
                            }
                            onMouseLeave={() => setTraceTip(null)}
                          >
                            <span className="et-trace-type-en">{tr.title}</span>
                            {showTranslation ? (
                              <span className="et-trace-type-tr">
                                ({translated})
                              </span>
                            ) : null}
                          </button>
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>

              <div
                className={`et-trace-section${
                  isOpen("starts") ? " is-open" : ""
                }`}
              >
                <button
                  type="button"
                  className="et-trace-section-head"
                  onClick={() => toggleSection("starts")}
                >
                  <span className="et-trace-section-icon" aria-hidden>
                    ◎
                  </span>
                  <span className="et-trace-section-label">
                    {t.traceStarts} ({startFlags.length})
                  </span>
                  <span className="et-trace-chevron">▾</span>
                </button>
                {isOpen("starts") ? (
                  <div className="et-trace-section-body">
                    <div className="et-trace-hint">{t.traceStartsHint}</div>
                    {renderFlagChips(startFlags)}
                    <button
                      type="button"
                      className={`et-trace-add${
                        picking === "starting-point" ? " is-active" : ""
                      }`}
                      disabled={!!picking}
                      onClick={() => void onPick("starting-point")}
                      title={t.traceAddStart}
                    >
                      +
                    </button>
                    {picking === "starting-point" ? (
                      <div className="et-trace-picking">{t.traceClickMap}</div>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div
                className={`et-trace-section${
                  isOpen("barriers") ? " is-open" : ""
                }`}
              >
                <button
                  type="button"
                  className="et-trace-section-head"
                  onClick={() => toggleSection("barriers")}
                >
                  <span className="et-trace-section-icon" aria-hidden>
                    ⊗
                  </span>
                  <span className="et-trace-section-label">
                    {t.traceBarriers} ({barrierFlags.length})
                  </span>
                  <span className="et-trace-chevron">▾</span>
                </button>
                {isOpen("barriers") ? (
                  <div className="et-trace-section-body">
                    <div className="et-trace-hint">{t.traceBarriersHint}</div>
                    {renderFlagChips(barrierFlags)}
                    <button
                      type="button"
                      className={`et-trace-add${
                        picking === "barrier" ? " is-active" : ""
                      }`}
                      disabled={!!picking}
                      onClick={() => void onPick("barrier")}
                      title={t.traceAddBarrier}
                    >
                      +
                    </button>
                    {picking === "barrier" ? (
                      <div className="et-trace-picking">{t.traceClickMap}</div>
                    ) : null}
                  </div>
                ) : null}
              </div>

              {runError ? (
                <div className="et-trace-msg is-warn">{runError}</div>
              ) : !canRun && runHint ? (
                <div className="et-trace-msg">{runHint}</div>
              ) : null}

              <div className="et-trace-actions">
                <button
                  type="button"
                  className="et-trace-run"
                  disabled={!canRun}
                  onClick={() => void onRun()}
                >
                  {running ? t.traceRunning : t.traceRun}
                </button>
                <button
                  type="button"
                  className="et-trace-reset"
                  onClick={onReset}
                  disabled={running || !!picking}
                >
                  {t.traceReset}
                </button>
              </div>
            </div>
          ) : (
            <div className="et-trace-body et-trace-body-results">
              <div className="et-trace-results-list">
                {results.length === 0 ? (
                  <div className="et-trace-hint">{t.traceNoResults}</div>
                ) : (
                  results.map((r) => {
                    const breakdown = breakdownTraceResultItem(
                      r.raw,
                      unRef.current,
                    ).filter((row) => row.id !== "device");
                    return (
                      <div key={r.key} className="et-trace-result-row">
                        <div className="et-trace-result-header">
                          <div className="et-trace-result-main">
                            <div className="et-trace-result-title">{r.title}</div>
                            <div className="et-trace-result-meta">
                              <div className="et-trace-result-summary">
                                <span className="et-trace-result-total-label">
                                  {t.total}
                                </span>
                                <span className="et-trace-result-total">
                                  {r.elementCount.toLocaleString("ru-RU")}
                                </span>
                                <span className="et-trace-result-total-unit">
                                  {t.traceElements}
                                </span>
                              </div>
                              {r.status ? (
                                <span className="et-trace-result-status">
                                  {r.status}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <button
                            type="button"
                            className="et-trace-flag-remove"
                            onClick={() => onClearResult(r)}
                            aria-label={t.traceRemove}
                          >
                            ×
                          </button>
                        </div>
                        {breakdown.length ? (
                          <ul className="et-trace-result-breakdown">
                            {breakdown.map((row) => (
                              <li key={row.id} className="et-trace-result-type">
                                <span className="et-trace-result-type-label">
                                  {breakdownLabel(row.id, t)}
                                </span>
                                <span className="et-trace-result-type-count">
                                  {row.count.toLocaleString("ru-RU")}
                                  <span className="et-trace-result-type-unit">
                                    {" "}
                                    {t.unitCount}
                                  </span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    );
                  })
                )}
              </div>
              <div className="et-trace-actions">
                <button
                  type="button"
                  className="et-trace-reset"
                  onClick={onReset}
                >
                  {t.traceReset}
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {traceTip && typeof document !== "undefined"
        ? (() => {
            const tip = computeTraceTipStyle(traceTip.anchor);
            const isLight = document
              .querySelector(".et-root")
              ?.classList.contains("is-light");
            return ReactDOM.createPortal(
              <span
                className={`et-trace-type-tip is-visible${
                  tip.below ? " is-below" : ""
                }${isLight ? " is-light" : ""}`}
                role="tooltip"
                style={tip.style}
              >
                {traceTip.text}
              </span>,
              document.body,
            );
          })()
        : null}
    </div>
  );
}
