import { React } from "jimu-core";
import type { ConnectedObjectRow } from "../un-query";
import { equipmentIcon } from "../equipment-icons";
import type { EtMessages } from "../i18n";
import {
  translateEquipment,
  translateFlow,
  translateStatus,
} from "../i18n";

interface Props {
  rows: ConnectedObjectRow[];
  loading?: boolean;
  emptyText?: string;
  selectedId?: string;
  onRowClick?: (row: ConnectedObjectRow) => void;
  t: EtMessages;
}

type TableTab = "devices" | "lines";

const DEVICE_FILTER_KEYS = ["transformer", "substation", "external"] as const;

export default function ConnectedTable(props: Props): React.ReactElement {
  const { rows, loading, emptyText, selectedId, onRowClick, t } = props;
  const [search, setSearch] = React.useState("");
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [tab, setTab] = React.useState<TableTab>("devices");

  React.useEffect(() => {
    setTypeFilter("all");
  }, [tab]);

  const filterLabels: Record<(typeof DEVICE_FILTER_KEYS)[number], string> = {
    transformer: t.transformer,
    substation: t.substation,
    external: t.externalSource,
  };

  const columns = [
    { key: "id", label: t.colId },
    { key: "uskunaTuri", label: t.colType },
    { key: "kuchlanish", label: t.colVoltage },
    { key: "boglanishTuri", label: t.colConnection },
    { key: "holati", label: t.colStatus },
  ] as const;

  const tabRows = React.useMemo(
    () =>
      rows.filter((r) =>
        tab === "lines" ? r.uskunaTuri === "Liniya" : r.uskunaTuri !== "Liniya",
      ),
    [rows, tab],
  );

  const filtered = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    return tabRows.filter((r) => {
      if (typeFilter !== "all") {
        const want =
          typeFilter === "transformer"
            ? t.transformer
            : typeFilter === "substation"
              ? t.substation
              : t.externalSource;
        if (translateEquipment(r.uskunaTuri, t) !== want) return false;
      }
      if (!q) return true;
      const type = translateEquipment(r.uskunaTuri, t).toLowerCase();
      const flow = translateFlow(r.boglanishTuri, t).toLowerCase();
      const status = translateStatus(r.holati, t).toLowerCase();
      return (
        r.id.toLowerCase().includes(q) ||
        type.includes(q) ||
        r.uskunaTuri.toLowerCase().includes(q) ||
        r.kuchlanish.toLowerCase().includes(q) ||
        flow.includes(q) ||
        status.includes(q)
      );
    });
  }, [tabRows, search, typeFilter, t]);

  return (
    <div className="et-table-panel">
      <div className="et-table-header">
        <div className="et-table-tabs">
          <button
            type="button"
            className={`et-tab${tab === "devices" ? " is-active" : ""}`}
            onClick={() => setTab("devices")}
          >
            {t.devicesTab}
          </button>
          <button
            type="button"
            className={`et-tab${tab === "lines" ? " is-active" : ""}`}
            onClick={() => setTab("lines")}
          >
            {t.linesTab}
          </button>
        </div>
        <div className="et-table-tools">
          <div className="et-search">
            <svg
              className="et-search-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              placeholder={t.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {tab === "devices" ? (
            <button
              type="button"
              className={`et-filter-btn${filterOpen ? " is-open" : ""}`}
              onClick={() => setFilterOpen((v) => !v)}
              aria-label={t.filter}
              title={t.filter}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>

      {filterOpen && tab === "devices" ? (
        <div className="et-table-filters">
          <button
            type="button"
            className={typeFilter === "all" ? "is-active" : ""}
            onClick={() => setTypeFilter("all")}
          >
            {t.all}
          </button>
          {DEVICE_FILTER_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              className={typeFilter === key ? "is-active" : ""}
              onClick={() => setTypeFilter(key)}
            >
              {filterLabels[key]}
            </button>
          ))}
        </div>
      ) : null}

      <div className="et-table-scroll">
        <table className="et-table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key}>{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="et-muted">
                  {t.loading}
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="et-muted">
                  {rows.length === 0
                    ? emptyText || t.selectDevice
                    : t.noMatch}
                </td>
              </tr>
            ) : (
              filtered.map((row) => {
                const typeLabel = translateEquipment(row.uskunaTuri, t);
                const icon = equipmentIcon(row.uskunaTuri);
                const status = translateStatus(row.holati, t);
                const off = row.holati === "Nofaol" || status === t.inactive;
                return (
                  <tr
                    key={`${row.id}-${row.globalId || ""}`}
                    onClick={() => onRowClick?.(row)}
                    className={`${onRowClick ? "is-clickable" : ""}${
                      selectedId &&
                      (selectedId === row.id || selectedId === row.globalId)
                        ? " is-selected"
                        : ""
                    }`}
                  >
                    <td title={row.id}>{row.id}</td>
                    <td>
                      <span className="et-type-cell">
                        {icon ? (
                          <img className="et-type-icon" src={icon} alt="" />
                        ) : (
                          <span className="et-type-line" />
                        )}
                        {typeLabel}
                      </span>
                    </td>
                    <td>{row.kuchlanish}</td>
                    <td>{translateFlow(row.boglanishTuri, t)}</td>
                    <td>
                      <span
                        className={`et-status-pill${off ? " is-off" : ""}`}
                      >
                        {status || t.active}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
