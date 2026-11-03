import {
  React,
  type AllWidgetProps,
  type UseDataSource,
} from "jimu-core";
import {
  DEFAULT_PORTAL_URL,
  DEFAULT_TITLE,
  DEFAULT_WEBMAP_ITEM_ID,
  type Config,
} from "../config";
import EmbeddedMap, { type EmbeddedMapApi } from "./embedded-map";
import VoltagePie from "./components/VoltagePie";
import LayersPanel from "./components/LayersPanel";
import Indicators from "./components/Indicators";
import AttributePopup from "./components/AttributePopup";
import AttributeTable from "./components/AttributeTable";
import AppHeader from "./components/AppHeader";
import TraceCard from "./components/TraceCard";
import MapBasemapPanel, { readBasemapId } from "./components/MapBasemapPanel";
import {
  defaultEnabledToggles,
  type LayerToggleId,
  type LayerToggleItem,
  type UnLayersHandle,
} from "./un-layers";
import type { TraceFilterContext } from "./un-trace-stats";
import { layerPicksFromUseDataSources } from "./layer-picks";
import type {
  AttributePopupData,
  ExtentStats,
  GlobalStats,
  VoltageChartRow,
} from "./un-query";
import {
  fetchLayerTableRows,
  fetchLayerTableRowsByIds,
  resolveDeviceTableColumns,
  resolveLineTableColumns,
  tableRowsFromTraceFeatureSets,
  type TableColumn,
  type TableRow,
} from "./un-table";
import { getMessages, type EtLang } from "./i18n";
import "./widget.css";

function readConfig(config: any): Config {
  if (!config) {
    return {
      title: DEFAULT_TITLE,
      webMapItemId: DEFAULT_WEBMAP_ITEM_ID,
      portalUrl: DEFAULT_PORTAL_URL,
    };
  }
  const get = (key: string) =>
    typeof config.get === "function" ? config.get(key) : config[key];
  return {
    title: get("title") || DEFAULT_TITLE,
    webMapItemId: get("webMapItemId") || DEFAULT_WEBMAP_ITEM_ID,
    portalUrl: get("portalUrl") || DEFAULT_PORTAL_URL,
  };
}

function toPlainArray(value: unknown): UseDataSource[] {
  if (!value) return [];
  if (Array.isArray(value)) return value as UseDataSource[];
  if (typeof (value as any).toArray === "function") {
    return (value as any).toArray() as UseDataSource[];
  }
  return [];
}

interface State {
  status: "idle" | "loading" | "ready" | "error";
  statusMessage: string;
  toggleItems: LayerToggleItem[];
  enabledToggles: Set<LayerToggleId>;
  chartRows: VoltageChartRow[];
  chartLoading: boolean;
  globalStats: GlobalStats | null;
  statsLoading: boolean;
  extentStats: ExtentStats | null;
  traceFilter: TraceFilterContext | null;
  popup: AttributePopupData | null;
  deviceColumns: TableColumn[];
  lineColumns: TableColumn[];
  deviceRows: TableRow[];
  lineRows: TableRow[];
  tableLoading: boolean;
  selectedRowId: string;
  indicatorsOpen: boolean;
  layersOpen: boolean;
  basemapOpen: boolean;
  activeBasemapId: string;
  darkTheme: boolean;
  lang: EtLang;
  mapView: any | null;
  tracePicking: boolean;
  unHandle: UnLayersHandle | null;
}

export default class Widget extends React.PureComponent<
  AllWidgetProps<Config>,
  State
> {
  private mapApi: EmbeddedMapApi | null = null;
  private tracePickingLive = false;
  private tableToken = 0;
  private handleRef: UnLayersHandle | null = null;
  private geomByRowId = new Map<string, any>();
  /** Set synchronously so extent-change cannot wipe a running trace filter. */
  private traceActive = false;
  private traceTableTimer: ReturnType<typeof setTimeout> | null = null;
  private pendingTraceFilter: TraceFilterContext | null = null;
  private lastTraceTableKey = "";

  state: State = {
    status: "idle",
    statusMessage: "",
    toggleItems: [],
    enabledToggles: new Set(),
    chartRows: [],
    chartLoading: false,
    globalStats: null,
    statsLoading: false,
    extentStats: null,
    traceFilter: null,
    popup: null,
    deviceColumns: [],
    lineColumns: [],
    deviceRows: [],
    lineRows: [],
    tableLoading: false,
    selectedRowId: "",
    indicatorsOpen: true,
    layersOpen: false,
    basemapOpen: false,
    activeBasemapId: "satellite",
    darkTheme: true,
    lang: "uz",
    mapView: null,
    tracePicking: false,
    unHandle: null,
  };

  private getTitle(): string {
    return readConfig(this.props.config).title || DEFAULT_TITLE;
  }

  private getUseDataSources(): UseDataSource[] {
    return toPlainArray(this.props.useDataSources);
  }

  private hasLayerPicks(): boolean {
    return this.getUseDataSources().length >= 2;
  }

  private getLayerPicks() {
    return layerPicksFromUseDataSources(this.getUseDataSources());
  }

  private loadTables = async (): Promise<void> => {
    if (this.traceActive) return;
    const handle = this.handleRef;
    if (!handle) {
      this.setState({
        deviceRows: [],
        lineRows: [],
        tableLoading: false,
      });
      return;
    }
    const token = ++this.tableToken;
    this.setState({ tableLoading: true });
    try {
      const deviceColumns = resolveDeviceTableColumns(handle.deviceLayer);
      const lineColumns = resolveLineTableColumns(handle.lineLayer);
      const [deviceRows, lineRows] = await Promise.all([
        fetchLayerTableRows(handle.deviceLayer, deviceColumns),
        fetchLayerTableRows(handle.lineLayer, lineColumns),
      ]);
      if (token !== this.tableToken) return;
      this.geomByRowId.clear();
      const slimDevice = deviceRows.map((r) => this.stripRowGeometry(r));
      const slimLine = lineRows.map((r) => this.stripRowGeometry(r));
      this.setState({
        deviceColumns,
        lineColumns,
        deviceRows: slimDevice,
        lineRows: slimLine,
        tableLoading: false,
      });
    } catch {
      if (token !== this.tableToken) return;
      this.setState({
        tableLoading: false,
        deviceRows: [],
        lineRows: [],
      });
    }
  };

  private loadTraceTables = async (filter: TraceFilterContext): Promise<void> => {
    const handle = this.handleRef;
    if (!handle) {
      this.setState({ deviceRows: [], lineRows: [], tableLoading: false });
      return;
    }
    const token = ++this.tableToken;
    this.setState({ tableLoading: true });
    try {
      const deviceColumns = resolveDeviceTableColumns(handle.deviceLayer);
      const lineColumns = resolveLineTableColumns(handle.lineLayer);
      const lineOids = [...new Set(filter.lineObjectIds || [])];
      const lineGids = [...new Set(filter.lineGlobalIds || [])];
      const deviceOids = [...new Set(filter.deviceObjectIds || [])];
      const deviceGids = [...new Set(filter.deviceGlobalIds || [])];

      // Prefer in-memory select-features — no server round-trips.
      let deviceRows: TableRow[] = [];
      let lineRows: TableRow[] = [];
      if (filter.prefetchedFeatureSets?.length) {
        const prefetched = tableRowsFromTraceFeatureSets(
          filter.prefetchedFeatureSets,
          handle,
          deviceColumns,
          lineColumns,
        );
        deviceRows = prefetched.deviceRows;
        lineRows = prefetched.lineRows;
      }

      // Only query missing side; never flood with allGlobalIds (too slow).
      const queryOpts = { returnGeometry: false, chunkSize: 200 };
      const needDevice =
        !deviceRows.length && (deviceOids.length > 0 || deviceGids.length > 0);
      const needLine =
        !lineRows.length && (lineOids.length > 0 || lineGids.length > 0);

      if (needDevice || needLine) {
        const [queriedDevice, queriedLine] = await Promise.all([
          needDevice
            ? fetchLayerTableRowsByIds(
                handle.deviceLayer,
                deviceColumns,
                deviceOids,
                5000,
                deviceGids,
                queryOpts,
              )
            : Promise.resolve(deviceRows),
          needLine
            ? fetchLayerTableRowsByIds(
                handle.lineLayer,
                lineColumns,
                lineOids,
                5000,
                lineGids,
                queryOpts,
              )
            : Promise.resolve(lineRows),
        ]);
        if (needDevice) deviceRows = queriedDevice;
        if (needLine) lineRows = queriedLine;
      }

      if (token !== this.tableToken) return;
      this.geomByRowId.clear();
      const slimDevice = deviceRows.map((r) => this.stripRowGeometry(r));
      const slimLine = lineRows.map((r) => this.stripRowGeometry(r));
      this.setState({
        deviceColumns,
        lineColumns,
        deviceRows: slimDevice,
        lineRows: slimLine,
        tableLoading: false,
      });
    } catch {
      if (token !== this.tableToken) return;
      this.setState({ tableLoading: false, deviceRows: [], lineRows: [] });
    }
  };

  /** Keep geometry in side map; omit from React state to avoid heavy re-renders. */
  private stripRowGeometry(row: TableRow): TableRow {
    if (row.geometry) this.geomByRowId.set(row.id, row.geometry);
    const { geometry: _geometry, ...rest } = row;
    return rest;
  }

  private traceFilterTableKey(filter: TraceFilterContext): string {
    const sort = (values: Array<number | string>) =>
      [...values].map(String).sort().join(",");
    return [
      sort(filter.deviceObjectIds),
      sort(filter.lineObjectIds),
      sort(filter.deviceGlobalIds),
      sort(filter.lineGlobalIds),
      String(filter.prefetchedFeatureSets?.length || 0),
    ].join("|");
  }

  private scheduleTraceTableLoad(filter: TraceFilterContext): void {
    const key = this.traceFilterTableKey(filter);
    if (key === this.lastTraceTableKey) return;
    this.pendingTraceFilter = filter;
    if (this.traceTableTimer) clearTimeout(this.traceTableTimer);
    // Immediate load — debounce only collapses rapid duplicate keys.
    this.traceTableTimer = setTimeout(() => {
      this.traceTableTimer = null;
      const pending = this.pendingTraceFilter;
      if (!pending) return;
      const pendingKey = this.traceFilterTableKey(pending);
      if (pendingKey === this.lastTraceTableKey) return;
      this.lastTraceTableKey = pendingKey;
      void this.loadTraceTables(pending);
    }, 0);
  }

  private onHandleReady = (handle: UnLayersHandle | null): void => {
    this.handleRef = handle;
    if (!handle) {
      if (!this.state.toggleItems.length && !this.state.unHandle) return;
      this.setState({
        unHandle: null,
        toggleItems: [],
        enabledToggles: new Set(),
        deviceRows: [],
        lineRows: [],
        deviceColumns: [],
        lineColumns: [],
      });
      return;
    }
    this.setState({
      unHandle: handle,
      toggleItems: handle.toggles.map((t) => ({
        id: t.id,
        label: t.label,
        kind: t.kind,
        color: t.color,
        swatch: t.swatch,
        icon: t.icon,
        value: t.value,
      })),
      enabledToggles: defaultEnabledToggles(handle.toggles),
    });
    void this.loadTables();
  };

  private onChart = (rows: VoltageChartRow[]): void => {
    this.setState({ chartRows: rows, chartLoading: false });
  };

  private onGlobalStats = (stats: GlobalStats): void => {
    this.setState({ globalStats: stats, statsLoading: false });
  };

  private onTraceStats = (filter: TraceFilterContext | null): void => {
    if (filter === null) {
      this.traceActive = false;
      this.lastTraceTableKey = "";
      this.pendingTraceFilter = null;
      if (this.traceTableTimer) {
        clearTimeout(this.traceTableTimer);
        this.traceTableTimer = null;
      }
      this.setState({ traceFilter: null });
      void this.loadTables();
      return;
    }

    const hasData =
      (filter.allGlobalIds?.length ?? 0) > 0 ||
      (filter.allObjectIds?.length ?? 0) > 0 ||
      filter.deviceObjectIds.length > 0 ||
      filter.lineObjectIds.length > 0 ||
      filter.deviceGlobalIds.length > 0 ||
      filter.lineGlobalIds.length > 0 ||
      (filter.traceGeometries?.length ?? 0) > 0 ||
      filter.lineMeters > 0 ||
      filter.transformers > 0;

    if (!hasData) {
      // Async stats can finish empty — never wipe a good in-progress trace update.
      if (this.traceActive && this.state.traceFilter) return;
      return;
    }

    this.traceActive = true;
    const prev = this.state.traceFilter;
    const merged: TraceFilterContext = {
      ...filter,
      transformers:
        filter.transformers > 0
          ? filter.transformers
          : prev?.transformers || 0,
      lineMeters:
        filter.lineMeters > 0 ? filter.lineMeters : prev?.lineMeters || 0,
      deviceObjectIds: [
        ...new Set([
          ...(prev?.deviceObjectIds || []),
          ...filter.deviceObjectIds,
        ]),
      ],
      lineObjectIds: [
        ...new Set([...(prev?.lineObjectIds || []), ...filter.lineObjectIds]),
      ],
      deviceGlobalIds: [
        ...new Set([
          ...(prev?.deviceGlobalIds || []),
          ...filter.deviceGlobalIds,
        ]),
      ],
      lineGlobalIds: [
        ...new Set([...(prev?.lineGlobalIds || []), ...filter.lineGlobalIds]),
      ],
      allGlobalIds: [
        ...new Set([...(prev?.allGlobalIds || []), ...filter.allGlobalIds]),
      ],
      allObjectIds: [
        ...new Set([...(prev?.allObjectIds || []), ...filter.allObjectIds]),
      ],
      traceGeometries:
        filter.traceGeometries?.length
          ? filter.traceGeometries
          : prev?.traceGeometries,
      prefetchedFeatureSets:
        filter.prefetchedFeatureSets?.length
          ? filter.prefetchedFeatureSets
          : prev?.prefetchedFeatureSets,
      tableReady: !!(filter.tableReady || prev?.tableReady),
    };
    this.setState({ traceFilter: merged, statsLoading: false });
    if (merged.tableReady || (merged.prefetchedFeatureSets?.length ?? 0) > 0) {
      this.scheduleTraceTableLoad(merged);
    } else {
      this.setState({ tableLoading: true });
    }
  };

  private onExtentStats = (stats: ExtentStats): void => {
    this.setState({ extentStats: stats });
  };

  private onPopup = (data: AttributePopupData | null): void => {
    if (!data) {
      this.mapApi?.clearHighlight();
      this.setState({ popup: null, selectedRowId: "" });
      return;
    }
    this.setState({
      popup: { ...data, geometry: null, attrs: {} },
      selectedRowId: data.globalId || String(data.objectId || ""),
    });
  };

  private onStatus = (
    s: "loading" | "ready" | "error",
    message?: string,
  ): void => {
    this.setState({
      status: s,
      statusMessage: message || "",
      chartLoading: s === "loading",
      statsLoading: s === "loading",
    });
  };

  private onApi = (api: EmbeddedMapApi | null): void => {
    this.mapApi = api;
  };

  private onViewReady = (view: any): void => {
    this.setState({
      mapView: view || null,
      activeBasemapId: view ? readBasemapId(view) : "satellite",
    });
  };

  private onTracePickingChange = (picking: boolean): void => {
    console.log("[ET Trace] picking state", { picking: !!picking });
    this.tracePickingLive = !!picking;
    this.setState({ tracePicking: !!picking });
  };

  private onClosePopup = (): void => {
    this.mapApi?.clearHighlight();
    this.setState({ popup: null, selectedRowId: "" });
  };

  private onToggleIndicators = (): void => {
    this.setState((prev) => {
      if (prev.popup) {
        this.mapApi?.clearHighlight();
        return { indicatorsOpen: true, popup: null as AttributePopupData | null };
      }
      return { indicatorsOpen: !prev.indicatorsOpen, popup: prev.popup };
    });
  };

  private onToggleLayers = (): void => {
    this.setState((prev) => {
      const nextOpen = !prev.layersOpen;
      return {
        layersOpen: nextOpen,
        basemapOpen: nextOpen ? false : prev.basemapOpen,
      };
    });
  };

  private onToggleBasemap = (): void => {
    this.setState((prev) => {
      const nextOpen = !prev.basemapOpen;
      return {
        basemapOpen: nextOpen,
        layersOpen: nextOpen ? false : prev.layersOpen,
      };
    });
  };

  private onBasemapSelect = (id: string): void => {
    this.setState({ activeBasemapId: id });
  };

  private onToggle = (id: LayerToggleId): void => {
    this.setState((prev) => {
      const next = new Set(prev.enabledToggles);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { enabledToggles: next };
    });
  };

  private onToggleTheme = (): void => {
    this.setState((prev) => ({ darkTheme: !prev.darkTheme }));
  };

  private onLangChange = (lang: EtLang): void => {
    this.setState({ lang });
  };

  private onRowClick = (
    row: TableRow,
    kind: "point" | "polyline",
  ): void => {
    const same =
      this.state.selectedRowId === row.id ||
      this.state.selectedRowId === row.globalId ||
      this.state.selectedRowId === String(row.objectId);
    if (same) {
      this.mapApi?.clearHighlight();
      this.setState({ selectedRowId: "", popup: null });
      this.mapApi?.resetView();
      return;
    }
    this.setState({ selectedRowId: row.id });
    const g = row.geometry || this.geomByRowId.get(row.id);
    if (g) this.mapApi?.highlightGeometry(g, kind);
  };

  render(): React.ReactNode {
    const cfg = readConfig(this.props.config);
    const picks = this.hasLayerPicks() ? this.getLayerPicks() : [];
    const {
      status,
      statusMessage,
      toggleItems,
      enabledToggles,
      chartRows,
      chartLoading,
      globalStats,
      statsLoading,
      extentStats,
      traceFilter,
      popup,
      deviceColumns,
      lineColumns,
      deviceRows,
      lineRows,
      tableLoading,
      selectedRowId,
      layersOpen,
      basemapOpen,
      activeBasemapId,
      darkTheme,
      lang,
      mapView,
      tracePicking,
      unHandle,
    } = this.state;
    const t = getMessages(lang);
    const connected = status === "ready" || !!this.handleRef;

    return (
      <div className={`et-root${darkTheme ? "" : " is-light"} is-map-linked`}>
        <AppHeader
          t={t}
          lang={lang}
          dark={darkTheme}
          subtitle={this.getTitle()}
          kpis={
            <Indicators
              compact
              global={globalStats}
              trace={traceFilter}
              loading={statsLoading}
              t={t}
            />
          }
          onToggleTheme={this.onToggleTheme}
          onLangChange={this.onLangChange}
        />
        <div className="et-layout">
          <aside className="et-left">
            <TraceCard
              view={mapView}
              t={t}
              handle={unHandle || this.handleRef}
              getHandle={() => this.handleRef}
              onPickingChange={this.onTracePickingChange}
              onTraceStats={this.onTraceStats}
            />
          </aside>

          <section className="et-stage">
            <div
              className={`et-map-wrap${tracePicking ? " is-trace-picking" : ""}`}
            >
              <EmbeddedMap
                layers={picks}
                portalUrl={cfg.portalUrl}
                webMapItemId={cfg.webMapItemId}
                enabledToggles={enabledToggles}
                suppressClick={this.tracePickingLive}
                onHandleReady={this.onHandleReady}
                onChart={this.onChart}
                onGlobalStats={this.onGlobalStats}
                onExtentStats={this.onExtentStats}
                onPopup={this.onPopup}
                onStatus={this.onStatus}
                onApi={this.onApi}
                onViewReady={this.onViewReady}
              />

              <div className="et-left-float">
                <AttributePopup
                  data={popup}
                  onClose={this.onClosePopup}
                  t={t}
                />
              </div>

              <div className="et-right-float">
                <div className="et-map-dock">
                  <div className="et-map-dock-btns">
                    {toggleItems.length ? (
                      <button
                        type="button"
                        className={`et-layers-toggle${
                          layersOpen ? " is-open" : ""
                        }`}
                        aria-expanded={layersOpen}
                        aria-label={layersOpen ? t.hideLayers : t.showLayers}
                        title={t.layers}
                        onClick={this.onToggleLayers}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </button>
                    ) : null}
                    <button
                      type="button"
                      className={`et-basemap-toggle${
                        basemapOpen ? " is-open" : ""
                      }`}
                      aria-expanded={basemapOpen}
                      aria-label={basemapOpen ? t.hideMapTypes : t.showMapTypes}
                      title={t.mapTypes}
                      onClick={this.onToggleBasemap}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 9h18" opacity="0.55" />
                        <circle cx="8" cy="13" r="1.5" fill="currentColor" stroke="none" />
                      </svg>
                    </button>
                  </div>
                  {layersOpen && toggleItems.length ? (
                    <div className="et-map-dock-panel et-map-dock-panel-layers">
                      <LayersPanel
                        items={toggleItems}
                        enabled={enabledToggles}
                        onToggle={this.onToggle}
                        t={t}
                      />
                    </div>
                  ) : null}
                  {basemapOpen ? (
                    <div className="et-map-dock-panel et-map-dock-panel-basemap">
                      <MapBasemapPanel
                        view={mapView}
                        activeId={activeBasemapId}
                        onSelect={this.onBasemapSelect}
                        t={t}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              {status === "loading" ? (
                <div className="et-map-banner">{t.loadingMap}</div>
              ) : null}
              {status === "error" && statusMessage ? (
                <div className="et-map-banner">{statusMessage}</div>
              ) : null}
            </div>
          </section>

          <div className="et-bottom-bar">
            <VoltagePie
              rows={chartRows}
              loading={chartLoading}
              connected={connected}
              t={t}
            />
            <div className="et-bottom">
              <AttributeTable
                deviceColumns={deviceColumns}
                lineColumns={lineColumns}
                deviceRows={deviceRows}
                lineRows={lineRows}
                loading={tableLoading}
                emptyText={connected ? t.noData : t.needData}
                selectedId={selectedRowId}
                onRowClick={this.onRowClick}
                t={t}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
