import { React } from "jimu-core";
import { loadArcGISJSAPIModules } from "jimu-arcgis";
import type { EtMessages } from "../i18n";

export interface BasemapOption {
  id: string;
  label: string;
  preview: string;
}

interface Props {
  view: any | null;
  activeId: string;
  onSelect: (id: string) => void;
  t: EtMessages;
}

export const BASEMAP_OPTIONS: Array<{
  id: string;
  labelKey: keyof EtMessages;
  preview: string;
}> = [
  {
    id: "satellite",
    labelKey: "basemapSatellite",
    preview: "linear-gradient(135deg,#1e3a2f,#4a6741)",
  },
  {
    id: "hybrid",
    labelKey: "basemapHybrid",
    preview: "linear-gradient(135deg,#2d4a3e,#6b7280)",
  },
  {
    id: "streets-vector",
    labelKey: "basemapStreets",
    preview: "linear-gradient(135deg,#e5e7eb,#9ca3af)",
  },
  {
    id: "streets-navigation-vector",
    labelKey: "basemapNavigation",
    preview: "linear-gradient(135deg,#dbeafe,#93c5fd)",
  },
  {
    id: "topo-vector",
    labelKey: "basemapTopo",
    preview: "linear-gradient(135deg,#86efac,#fde68a)",
  },
  {
    id: "terrain",
    labelKey: "basemapTerrain",
    preview: "linear-gradient(135deg,#a3e635,#ca8a04)",
  },
  {
    id: "oceans",
    labelKey: "basemapOceans",
    preview: "linear-gradient(135deg,#0ea5e9,#1e3a5f)",
  },
  {
    id: "gray-vector",
    labelKey: "basemapGray",
    preview: "linear-gradient(135deg,#d1d5db,#6b7280)",
  },
  {
    id: "dark-gray-vector",
    labelKey: "basemapDark",
    preview: "linear-gradient(135deg,#1f2937,#0f172a)",
  },
  {
    id: "streets-night-vector",
    labelKey: "basemapNight",
    preview: "linear-gradient(135deg,#0b1220,#1e293b)",
  },
  {
    id: "osm",
    labelKey: "basemapOsm",
    preview: "linear-gradient(135deg,#f8fafc,#94a3b8)",
  },
];

export async function applyBasemap(view: any, basemapId: string): Promise<boolean> {
  if (!view?.map || !basemapId) return false;
  try {
    const [Basemap] = await loadArcGISJSAPIModules(["esri/Basemap"]);
    const next = Basemap.fromId(basemapId);
    if (!next) return false;
    await next.load();
    view.map.basemap = next;
    return true;
  } catch {
    return false;
  }
}

export function readBasemapId(view: any): string {
  const id = String(view?.map?.basemap?.id || "").trim();
  if (id && BASEMAP_OPTIONS.some((o) => o.id === id)) return id;
  if (/imagery|satellite/i.test(id)) return "satellite";
  if (/hybrid/i.test(id)) return "hybrid";
  if (/night/i.test(id)) return "streets-night-vector";
  if (/dark/i.test(id)) return "dark-gray-vector";
  if (/gray|grey/i.test(id)) return "gray-vector";
  if (/navigation/i.test(id)) return "streets-navigation-vector";
  if (/street/i.test(id)) return "streets-vector";
  if (/topo/i.test(id)) return "topo-vector";
  if (/terrain/i.test(id)) return "terrain";
  if (/ocean/i.test(id)) return "oceans";
  if (/osm|open.?street/i.test(id)) return "osm";
  return "satellite";
}

export default function MapBasemapPanel(props: Props): React.ReactElement {
  const { view, activeId, onSelect, t } = props;
  const [busy, setBusy] = React.useState("");
  const [thumbs, setThumbs] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    let cancelled = false;
    const loadThumbs = async (): Promise<void> => {
      try {
        const [Basemap] = await loadArcGISJSAPIModules(["esri/Basemap"]);
        const next: Record<string, string> = {};
        await Promise.all(
          BASEMAP_OPTIONS.map(async (opt) => {
            try {
              const bm = Basemap.fromId(opt.id);
              await bm.load();
              const url = String(bm.thumbnailUrl || "").trim();
              if (url) next[opt.id] = url;
            } catch {
              /* fallback gradient */
            }
          }),
        );
        if (!cancelled) setThumbs(next);
      } catch {
        /* ignore */
      }
    };
    void loadThumbs();
    return () => {
      cancelled = true;
    };
  }, []);

  const onPick = async (id: string) => {
    if (!view || busy || id === activeId) return;
    setBusy(id);
    try {
      const ok = await applyBasemap(view, id);
      if (ok) onSelect(id);
    } finally {
      setBusy("");
    }
  };

  return (
    <div className="et-basemap-panel">
      <div className="et-basemap-head">
        <span className="et-card-mark" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 9h18" />
          </svg>
        </span>
        <div className="et-basemap-title">{t.mapTypes}</div>
      </div>
      <div className="et-basemap-list">
        {BASEMAP_OPTIONS.map((opt) => {
          const active = activeId === opt.id;
          const loading = busy === opt.id;
          const thumbUrl = thumbs[opt.id];
          return (
            <button
              key={opt.id}
              type="button"
              className={`et-basemap-item${active ? " is-active" : ""}`}
              disabled={!!busy}
              onClick={() => void onPick(opt.id)}
            >
              <span className="et-basemap-thumb" aria-hidden>
                {thumbUrl ? (
                  <img src={thumbUrl} alt="" />
                ) : (
                  <span
                    className="et-basemap-thumb-fallback"
                    style={{ background: opt.preview }}
                  />
                )}
              </span>
              <span className="et-basemap-label">{t[opt.labelKey] as string}</span>
              {loading ? <span className="et-basemap-busy">…</span> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
