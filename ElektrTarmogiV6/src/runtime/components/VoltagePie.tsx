import { React } from "jimu-core";
import type { VoltageChartRow } from "../un-query";
import type { EtMessages } from "../i18n";

interface Props {
  rows: VoltageChartRow[];
  loading?: boolean;
  connected: boolean;
  t: EtMessages;
}

const SIZE = 118;
const CX = 59;
const CY = 59;
const R = 43;
const STROKE = 13;
const GAP = 0.34;
const MIN_FRAC = 0.05;

function describeArc(
  start: number,
  end: number,
): { d: string; large: number } {
  const x1 = CX + R * Math.cos(start);
  const y1 = CY + R * Math.sin(start);
  const x2 = CX + R * Math.cos(end);
  const y2 = CY + R * Math.sin(end);
  const large = end - start > Math.PI ? 1 : 0;
  return {
    large,
    d: `M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2}`,
  };
}

function buildArcs(data: VoltageChartRow[]) {
  const total = data.reduce((s, r) => s + r.value, 0) || 1;
  const n = data.length;
  const gapTotal = n * GAP;
  const usable = Math.max(Math.PI * 2 - gapTotal, n * 0.2);
  let raw = data.map((r) => Math.max((r.value / total) * usable, usable * MIN_FRAC));
  const sum = raw.reduce((a, b) => a + b, 0);
  raw = raw.map((v) => (v / sum) * usable);

  let angle = -Math.PI / 2;
  return data.map((row, i) => {
    const start = angle + GAP / 2;
    const end = start + raw[i];
    angle += raw[i] + GAP;
    const pct = Math.round((row.value / total) * 100);
    return { ...row, start, end, pct, ...describeArc(start, end) };
  });
}

export default function VoltagePie(props: Props): React.ReactElement {
  const { rows, loading, connected, t } = props;
  const [hovered, setHovered] = React.useState<string | null>(null);

  const legend = rows;
  const data = legend.filter((r) => r.value > 0);
  const total = data.reduce((sum, r) => sum + r.value, 0);
  const arcs = React.useMemo(() => (total ? buildArcs(data) : []), [data, total]);
  const active = hovered ? legend.find((a) => a.label === hovered) : null;
  const activePct = active && total ? Math.round((active.value / total) * 100) : null;

  return (
    <div className="et-pie-card">
      <div className="et-pie-card-head">
        <span className="et-card-mark" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8v4l2.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <div className="et-pie-card-title">{t.voltageComposition}</div>
      </div>

      {!connected ? (
        <div className="et-muted">{t.layerNotConnected}</div>
      ) : loading ? (
        <div className="et-muted">{t.loading}</div>
      ) : total === 0 ? (
        <div className="et-muted">{t.noData}</div>
      ) : (
        <div className="et-pie-card-body">
          <div className="et-pie-figure">
            <svg
              width={SIZE}
              height={SIZE}
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="et-pie-svg"
            >
              <circle
                cx={CX}
                cy={CY}
                r={R}
                fill="none"
                stroke="rgba(148,163,184,0.1)"
                strokeWidth={STROKE + 6}
              />
              {arcs.map((arc) => {
                const hot = hovered === arc.label;
                const dim = hovered && !hot;
                return (
                  <path
                    key={arc.label}
                    d={arc.d}
                    fill="none"
                    stroke={arc.color}
                    strokeWidth={hot ? STROKE + 3 : STROKE}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={dim ? 0.25 : 1}
                    className="et-pie-arc"
                    onMouseEnter={() => setHovered(arc.label)}
                    onMouseLeave={() => setHovered(null)}
                  />
                );
              })}
            </svg>
            <div className="et-pie-center">
              <div className="et-pie-center-label">
                {active ? active.label : t.total}
              </div>
              <div className="et-pie-center-value">
                {(active ? active.value : total).toLocaleString("ru-RU")}
              </div>
              {activePct != null ? (
                <div className="et-pie-center-pct">{activePct}%</div>
              ) : null}
            </div>
          </div>

          <ul className="et-pie-legend">
            {legend.map((row) => {
              const pct = total ? Math.round((row.value / total) * 100) : 0;
              return (
                <li
                  key={row.label}
                  className={`et-pie-legend-row${
                    hovered === row.label ? " is-active" : ""
                  }${row.value <= 0 ? " is-empty" : ""}`}
                  onMouseEnter={() => setHovered(row.label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span
                    className="et-pie-dot"
                    style={{ "--et-pie-color": row.color } as React.CSSProperties}
                  />
                  <span className="et-pie-legend-label">{row.label}</span>
                  <span className="et-pie-legend-value">
                    {row.value.toLocaleString("ru-RU")}
                  </span>
                  <span className="et-pie-bar" aria-hidden="true">
                    <span style={{ width: `${pct}%`, background: row.color }} />
                  </span>
                  <span className="et-pie-legend-pct">{pct}%</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
