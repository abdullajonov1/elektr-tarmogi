import { React, getAppStore } from "jimu-core";
import { loadArcGISJSAPIModules } from "jimu-arcgis";
import {
  DEFAULT_PORTAL_URL,
  DEFAULT_WEBMAP_ITEM_ID,
} from "../config";
import {
  applyLayerToggles,
  buildUnHandle,
  defaultEnabledToggles,
  findUnLayers,
  isDeviceLayerTitle,
  isLineLayerTitle,
  type LayerToggleId,
  type UnLayersHandle,
} from "./un-layers";
import { childLayers } from "./un-walk";
import type { LayerPick } from "./layer-picks";
import {
  buildPopupFromFeature,
  countConnectedLines,
  fetchExtentStats,
  fetchGlobalStats,
  fetchVoltageChart,
  type AttributePopupData,
  type ExtentStats,
  type GlobalStats,
  type VoltageChartRow,
} from "./un-query";

export interface EmbeddedMapApi {
  goToGeometry: (geometry: any) => void;
  highlightGeometry: (geometry: any, kind?: "point" | "polyline") => void;
  clearHighlight: () => void;
  resetView: () => void;
  getView: () => any;
}

interface Props {
  layers: LayerPick[];
  enabledToggles: Set<LayerToggleId>;
  portalUrl?: string;
  webMapItemId?: string;
  onHandleReady: (handle: UnLayersHandle | null) => void;
  onChart: (rows: VoltageChartRow[]) => void;
  onGlobalStats: (stats: GlobalStats) => void;
  onExtentStats: (stats: ExtentStats) => void;
  onPopup: (data: AttributePopupData | null) => void;
  onStatus: (status: "loading" | "ready" | "error", message?: string) => void;
  onApi?: (api: EmbeddedMapApi | null) => void;
  onViewReady?: (view: any) => void;
  /** When true, skip popup click so Utility Network Trace can place flags. */
  suppressClick?: boolean;
}

function normalizeUrl(url: unknown): string {
  return String(url || "")
    .trim()
    .replace(/\/+$/, "")
    .toLowerCase();
}

function layerEndpoint(layer: any): string {
  const url = normalizeUrl(layer?.url);
  if (!url) return "";
  if (/\/\d+$/.test(url)) return url;
  const id = layer?.layerId ?? layer?.sublayerId;
  return id === undefined || id === null ? url : `${url}/${id}`;
}

function allLayersOf(map: any): any[] {
  return map?.allLayers?.toArray?.() || map?.layers?.toArray?.() || [];
}

function normText(t: unknown): string {
  return String(t || "")
    .toLowerCase()
    .replace(/[''`ʼ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
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

function findLayerByPick(map: any, pick: LayerPick): any {
  const layers = allLayersOf(map);
  const target = normalizeUrl(pick.url);
  if (target) {
    const byUrl = layers.find((l: any) => {
      const ep = layerEndpoint(l);
      return ep && (ep === target || ep.includes(target) || target.includes(ep));
    });
    if (byUrl) return byUrl;
  }

  const pickId = String(pick.id || "").toLowerCase();
  if (pickId) {
    const byMapId = layers.find((l: any) => {
      const lid = String(l?.id || "").toLowerCase();
      return lid && pickId.includes(lid);
    });
    if (byMapId) return byMapId;
  }

  const title = normText(pick.title);
  if (title && title.length > 2) {
    const exact = layers.find((l: any) => normText(l.title) === title);
    if (exact) return exact;
    const fuzzy = layers.find((l: any) => {
      const lt = normText(l.title);
      return lt.includes(title) || title.includes(lt);
    });
    if (fuzzy) return fuzzy;
  }

  if (isDeviceLayerTitle(pick.title)) {
    return layers.find((l: any) => isDeviceLayerTitle(String(l.title || "")));
  }
  if (isLineLayerTitle(pick.title)) {
    return layers.find((l: any) => isLineLayerTitle(String(l.title || "")));
  }
  return null;
}

function assignRoles(layers: any[]): { deviceLayer: any; lineLayer: any } {
  let deviceLayer: any = null;
  let lineLayer: any = null;
  for (const layer of layers) {
    if (!layer) continue;
    const title = String(layer.title || "");
    const geom = layerGeometryType(layer);
    if (
      !deviceLayer &&
      (isDeviceLayerTitle(title) || geom === "point" || geom === "multipoint")
    ) {
      deviceLayer = layer;
      continue;
    }
    if (
      !lineLayer &&
      (isLineLayerTitle(title) || geom === "polyline" || geom === "line")
    ) {
      lineLayer = layer;
    }
  }
  return { deviceLayer, lineLayer };
}

function resolvePortalUrl(explicit?: string): string {
  const fromConfig = String(explicit || "").trim();
  if (fromConfig) return fromConfig.replace(/\/+$/, "");
  try {
    const state = getAppStore().getState() as any;
    const portal =
      state?.portalUrl ||
      state?.appConfig?.attributes?.portalUrl ||
      state?.appContext?.portalUrl ||
      "";
    if (portal) return String(portal).replace(/\/+$/, "");
  } catch {
    /* ignore */
  }
  return DEFAULT_PORTAL_URL;
}

/**
 * Own MapView that fills the widget map slot (no separate Map widget needed).
 */
export default function EmbeddedMap(props: Props): React.ReactElement {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const viewRef = React.useRef<any>(null);
  const handleRef = React.useRef<UnLayersHandle | null>(null);
  const clickHandleRef = React.useRef<{ remove?: () => void } | null>(null);
  const extentWatchRef = React.useRef<{ remove?: () => void } | null>(null);
  const extentTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const highlightLayerRef = React.useRef<any>(null);
  const pulseTimerRef = React.useRef<ReturnType<typeof setInterval> | null>(
    null,
  );
  const defaultExtentRef = React.useRef<any>(null);
  const GraphicRef = React.useRef<any>(null);
  const GraphicsLayerRef = React.useRef<any>(null);
  const bootToken = React.useRef(0);
  const callbacksRef = React.useRef(props);
  callbacksRef.current = props;
  const suppressClickRef = React.useRef(!!props.suppressClick);
  suppressClickRef.current = !!props.suppressClick;

  const dsKey = props.layers.map((l) => l.id || l.url).join("|");
  const itemId =
    String(props.webMapItemId || "").trim() || DEFAULT_WEBMAP_ITEM_ID;
  const portalUrl = resolvePortalUrl(props.portalUrl);
  const enabledToggles = props.enabledToggles;

  React.useEffect(() => {
    const handle = handleRef.current;
    if (!handle) return;
    applyLayerToggles(handle, enabledToggles);
  }, [enabledToggles]);

  const stopPulse = React.useCallback(() => {
    if (pulseTimerRef.current) {
      clearInterval(pulseTimerRef.current);
      pulseTimerRef.current = null;
    }
    try {
      highlightLayerRef.current?.removeAll?.();
    } catch {
      /* ignore */
    }
  }, []);

  const startPulse = React.useCallback(
    (geometry: any, kind: "point" | "polyline") => {
      stopPulse();
      const layer = highlightLayerRef.current;
      const Graphic = GraphicRef.current;
      const view = viewRef.current;
      if (!layer || !Graphic || !geometry || !view) return;

      const isPoint =
        kind === "point" ||
        geometry.type === "point" ||
        geometry.type === "multipoint";

      let phase = 0;
      const draw = () => {
        phase = (phase + 1) % 40;
        const t = phase < 20 ? phase / 20 : (40 - phase) / 20;
        const opacity = 0.35 + t * 0.65;
        try {
          layer.removeAll();
          if (isPoint) {
            const size = 14 + t * 18;
            layer.add(
              new Graphic({
                geometry,
                symbol: {
                  type: "simple-marker",
                  style: "circle",
                  color: [56, 189, 248, opacity * 0.35],
                  size,
                  outline: {
                    color: [14, 165, 233, opacity],
                    width: 2.5 + t * 1.5,
                  },
                },
              }),
            );
            layer.add(
              new Graphic({
                geometry,
                symbol: {
                  type: "simple-marker",
                  style: "circle",
                  color: [125, 211, 252, opacity],
                  size: 8,
                  outline: { color: [255, 255, 255, opacity], width: 1.5 },
                },
              }),
            );
          } else {
            layer.add(
              new Graphic({
                geometry,
                symbol: {
                  type: "simple-line",
                  color: [56, 189, 248, opacity * 0.35],
                  width: 10 + t * 6,
                  cap: "round",
                  join: "round",
                },
              }),
            );
            layer.add(
              new Graphic({
                geometry,
                symbol: {
                  type: "simple-line",
                  color: [251, 191, 36, opacity],
                  width: 3.5 + t * 1.5,
                  cap: "round",
                  join: "round",
                },
              }),
            );
          }
        } catch {
          /* ignore */
        }
      };

      draw();
      pulseTimerRef.current = setInterval(draw, 55);
    },
    [stopPulse],
  );

  const detachListeners = React.useCallback(() => {
    stopPulse();
    if (extentTimerRef.current) clearTimeout(extentTimerRef.current);
    try {
      clickHandleRef.current?.remove?.();
    } catch {
      /* ignore */
    }
    clickHandleRef.current = null;
    try {
      extentWatchRef.current?.remove?.();
    } catch {
      /* ignore */
    }
    extentWatchRef.current = null;
    try {
      if (highlightLayerRef.current) {
        const map = viewRef.current?.map;
        map?.remove?.(highlightLayerRef.current);
        highlightLayerRef.current.removeAll?.();
      }
    } catch {
      /* ignore */
    }
    highlightLayerRef.current = null;
    handleRef.current = null;
    defaultExtentRef.current = null;
    callbacksRef.current.onApi?.(null);
    callbacksRef.current.onHandleReady(null);
  }, [stopPulse]);

  const destroyView = React.useCallback(() => {
    detachListeners();
    const view = viewRef.current;
    viewRef.current = null;
    if (!view) return;
    try {
      view.destroy?.();
    } catch {
      /* ignore */
    }
  }, [detachListeners]);

  const bindView = React.useCallback(
    async (view: any, token: number) => {
      const cb = () => callbacksRef.current;
      const picks = cb().layers;
      if (!view) {
        cb().onHandleReady(null);
        cb().onStatus("ready");
        return;
      }

      try {
        await view.when?.();
      } catch {
        /* continue */
      }
      if (token !== bootToken.current) return;

      const map = view.map;
      if (!map) {
        cb().onHandleReady(null);
        cb().onStatus("ready");
        return;
      }

      try {
        await Promise.all(
          allLayersOf(map).map((l: any) =>
            l.load?.().catch?.((): undefined => undefined),
          ),
        );
      } catch {
        /* ignore */
      }
      if (token !== bootToken.current) return;

      let GraphicsLayer = GraphicsLayerRef.current;
      let Graphic = GraphicRef.current;
      if (!GraphicsLayer || !Graphic) {
        const mods = await loadArcGISJSAPIModules([
          "esri/layers/GraphicsLayer",
          "esri/Graphic",
        ]);
        GraphicsLayer = mods[0];
        Graphic = mods[1];
        GraphicsLayerRef.current = GraphicsLayer;
        GraphicRef.current = Graphic;
      }

      const highlightLayer = new GraphicsLayer({
        listMode: "hide",
        title: "et-highlight",
      });
      try {
        map.add(highlightLayer);
        map.reorder?.(highlightLayer, map.layers.length - 1);
      } catch {
        /* ignore */
      }
      highlightLayerRef.current = highlightLayer;
      viewRef.current = view;

      try {
        if (view.popup) view.popup.autoOpenEnabled = false;
      } catch {
        /* ignore */
      }
      try {
        if (view.ui) view.ui.components = [];
      } catch {
        /* ignore */
      }

      let deviceLayer: any = null;
      let lineLayer: any = null;
      if (picks.length >= 2) {
        const matched = picks
          .map((pick) => findLayerByPick(map, pick))
          .filter(Boolean);
        ({ deviceLayer, lineLayer } = assignRoles(matched));
      }
      if (!deviceLayer || !lineLayer || deviceLayer === lineLayer) {
        const found = findUnLayers(map);
        deviceLayer = deviceLayer || found.deviceLayer;
        lineLayer = lineLayer || found.lineLayer;
      }

      if (!deviceLayer || !lineLayer || deviceLayer === lineLayer) {
        handleRef.current = null;
        cb().onHandleReady(null);
        cb().onViewReady?.(view);
        cb().onStatus("ready");
        return;
      }

      const handle = buildUnHandle(map, deviceLayer, lineLayer);
      if (!handle) {
        cb().onHandleReady(null);
        cb().onViewReady?.(view);
        cb().onStatus("ready");
        return;
      }

      handleRef.current = handle;
      applyLayerToggles(handle, defaultEnabledToggles(handle.toggles));
      cb().onHandleReady(handle);
      cb().onViewReady?.(view);

      void fetchGlobalStats(handle).then((s) => {
        if (token === bootToken.current) cb().onGlobalStats(s);
      });
      void fetchVoltageChart(handle).then((rows) => {
        if (token === bootToken.current) cb().onChart(rows);
      });

      const refreshExtent = () => {
        if (extentTimerRef.current) clearTimeout(extentTimerRef.current);
        extentTimerRef.current = setTimeout(() => {
          const extent = view.extent;
          if (!extent || !handleRef.current) return;
          void fetchExtentStats(handleRef.current, extent).then((s) => {
            if (token === bootToken.current) cb().onExtentStats(s);
          });
        }, 400);
      };
      refreshExtent();
      try {
        extentWatchRef.current?.remove?.();
      } catch {
        /* ignore */
      }
      extentWatchRef.current = view.watch("stationary", (stationary: boolean) => {
        if (stationary) refreshExtent();
      });

      try {
        clickHandleRef.current?.remove?.();
      } catch {
        /* ignore */
      }
      clickHandleRef.current = view.on("click", async (event: any) => {
        if (suppressClickRef.current) {
          console.log("[ET Trace] embedded-map click suppressed (trace picking)");
          return;
        }
        console.log("[ET Trace] embedded-map popup click (not suppressed)");
        const h = handleRef.current;
        if (!h) return;
        try {
          const kids = childLayers(h.deviceLayer);
          const hit = await view.hitTest(event, {
            include: [h.deviceLayer, ...kids],
          });
          const result =
            hit?.results?.find((r: any) => {
              const layer = r?.graphic?.layer || r?.layer;
              return (
                layer === h.deviceLayer ||
                kids.includes(layer) ||
                r?.graphic?.geometry?.type === "point"
              );
            }) || null;
          const graphic = result?.graphic;
          if (!graphic) {
            cb().onPopup(null);
            return;
          }
          const connectedCount = await countConnectedLines(
            h.lineLayer,
            graphic.geometry,
          );
          const popup = buildPopupFromFeature(
            graphic,
            h.deviceFields,
            connectedCount,
          );
          if (token !== bootToken.current) return;
          if (graphic.geometry) startPulse(graphic.geometry, "point");
          cb().onPopup(popup);
        } catch (err) {
          cb().onStatus(
            "ready",
            err instanceof Error ? err.message : "Click xatosi",
          );
        }
      });

      cb().onApi?.({
        goToGeometry: (geometry: any) => {
          if (!geometry || !viewRef.current) return;
          void viewRef.current
            .goTo({ target: geometry, zoom: 16 })
            .catch((): undefined => undefined);
        },
        clearHighlight: () => stopPulse(),
        highlightGeometry: (geometry: any, kind?: "point" | "polyline") => {
          if (!geometry || !viewRef.current) return;
          const gType = String(geometry.type || "").toLowerCase();
          const resolved: "point" | "polyline" =
            kind ||
            (gType.includes("line") || gType === "polyline"
              ? "polyline"
              : "point");
          startPulse(geometry, resolved);
          const target =
            resolved === "point"
              ? { target: geometry, zoom: 17 }
              : { target: geometry };
          void viewRef.current.goTo(target).catch((): undefined => undefined);
        },
        resetView: () => {
          stopPulse();
          const v = viewRef.current;
          const ext = defaultExtentRef.current;
          if (!v) return;
          if (ext) void v.goTo(ext).catch((): undefined => undefined);
        },
        getView: () => viewRef.current,
      });

      try {
        if (view.extent) {
          defaultExtentRef.current = view.extent.clone?.() || view.extent;
        }
      } catch {
        /* ignore */
      }

      try {
        view.resize?.();
      } catch {
        /* ignore */
      }

      cb().onStatus("ready");
    },
    [startPulse, stopPulse],
  );

  React.useEffect(() => {
    let disposed = false;
    const token = ++bootToken.current;
    const cb = () => callbacksRef.current;

    const boot = async () => {
      cb().onStatus("loading");
      cb().onPopup(null);
      destroyView();

      if (!containerRef.current) {
        cb().onStatus("error", "Xarita konteyneri topilmadi");
        return;
      }

      try {
        const [WebMap, MapView] = await loadArcGISJSAPIModules([
          "esri/WebMap",
          "esri/views/MapView",
        ]);
        if (disposed || token !== bootToken.current || !containerRef.current) {
          return;
        }

        const map = new WebMap({
          portalItem: {
            id: itemId,
            portal: { url: portalUrl },
          },
        });
        await map.load();
        if (disposed || token !== bootToken.current || !containerRef.current) {
          return;
        }

        const view = new MapView({
          container: containerRef.current,
          map,
          ui: { components: [] },
        });
        viewRef.current = view;
        try {
          if (view.popup) view.popup.autoOpenEnabled = false;
        } catch {
          /* ignore */
        }

        await bindView(view, token);
      } catch (err) {
        if (disposed || token !== bootToken.current) return;
        cb().onStatus(
          "error",
          err instanceof Error ? err.message : "Xarita yuklanmadi",
        );
      }
    };

    void boot();

    return () => {
      disposed = true;
      bootToken.current += 1;
      destroyView();
    };
  }, [itemId, portalUrl, dsKey, bindView, destroyView]);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => {
      try {
        viewRef.current?.resize?.();
      } catch {
        /* ignore */
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return <div ref={containerRef} className="et-map-view" />;
}
