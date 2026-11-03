import { React } from "jimu-core";
import type { GlobalStats } from "../un-query";
import type { TraceSelectionStats } from "../un-trace-stats";
import { formatKmValue } from "../un-fields";
import type { EtMessages } from "../i18n";

interface Props {
  global: GlobalStats | null;
  trace?: TraceSelectionStats | null;
  loading?: boolean;
  compact?: boolean;
  t: EtMessages;
}

type Tone = "blue" | "green" | "purple" | "cyan";

interface Row {
  key: string;
  label: string;
  value: string;
  unit: string;
  tone: Tone;
  icon: React.ReactElement;
}

const numeric = (value: number | undefined | null): string =>
  value === undefined || value === null || !Number.isFinite(value)
    ? "0"
    : Math.round(value).toLocaleString("ru-RU");

function TransformerIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="7" y="8" width="10" height="11" rx="1.5" />
      <path d="M9.5 8V5M14.5 8V5M7 12h10M7 15h10" />
    </svg>
  );
}

function LineIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3v18M6 20l6-5 6 5M5 8h14M7 11h10" />
    </svg>
  );
}

function PinIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 21c4-5 6-8 6-11a6 6 0 1 0-12 0c0 3 2 6 6 11z" />
    </svg>
  );
}

function RouteIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h5.5" />
    </svg>
  );
}

export default function Indicators(props: Props): React.ReactElement {
  const { global: totals, trace, loading, compact = false, t } = props;

  const rows: Row[] = [
    {
      key: "total-transformers",
      label: t.totalTransformers,
      value: numeric(totals?.totalTransformers),
      unit: t.unitCount,
      tone: "blue",
      icon: <TransformerIcon />,
    },
    {
      key: "total-lines",
      label: t.totalNetwork,
      value: formatKmValue(totals?.totalLineMeters ?? 0),
      unit: t.unitKm,
      tone: "green",
      icon: <LineIcon />,
    },
    {
      key: "selected-transformers",
      label: t.selectedTransformers,
      value: numeric(trace?.transformers ?? 0),
      unit: t.unitCount,
      tone: "purple",
      icon: <PinIcon />,
    },
    {
      key: "selected-lines",
      label: t.selectedLines,
      value: formatKmValue(trace?.lineMeters ?? 0),
      unit: t.unitKm,
      tone: "cyan",
      icon: <RouteIcon />,
    },
  ];

  return (
    <div className={`et-indicators${compact ? " is-strip" : ""}`}>
      {compact ? null : (
        <div className="et-indicators-head">
          <span className="et-card-mark" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 19V9M10 19V5M16 19v-7M22 19V8" strokeLinecap="round" />
            </svg>
          </span>
          <div className="et-indicators-title">{t.indicators}</div>
        </div>
      )}
      <div className="et-indicators-list">
        {rows.map((row) => (
          <div key={row.key} className={`et-indicator-row tone-${row.tone}`}>
            <span className="et-indicator-icon">{row.icon}</span>
            <span className="et-indicator-label">{row.label}</span>
            <span className="et-indicator-value">
              {loading && row.key.startsWith("total") ? "…" : row.value}
              <span className="et-indicator-unit">{row.unit}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
