import { React } from "jimu-core";
import type { TableColumn, TableRow, TableTab } from "../un-table";
import type { EtMessages } from "../i18n";

interface Props {
  deviceColumns: TableColumn[];
  lineColumns: TableColumn[];
  deviceRows: TableRow[];
  lineRows: TableRow[];
  loading?: boolean;
  emptyText?: string;
  selectedId?: string;
  onRowClick?: (row: TableRow, kind: "point" | "polyline") => void;
  t: EtMessages;
}

type TypeSortMode = "default" | "reverse";

export default function AttributeTable(props: Props): React.ReactElement {
  const {
    deviceColumns,
    lineColumns,
    deviceRows,
    lineRows,
    loading,
    emptyText,
    selectedId,
    onRowClick,
    t,
  } = props;
  const [search, setSearch] = React.useState("");
  const [tab, setTab] = React.useState<TableTab>("device");
  const [typeSort, setTypeSort] = React.useState<TypeSortMode>("default");

  const columns = tab === "device" ? deviceColumns : lineColumns;
  const sourceRows = tab === "device" ? deviceRows : lineRows;

  const typeKey = React.useMemo(() => {
    const hit = columns.find((c) => c.key === "uskunaTuri");
    return hit?.key || "uskunaTuri";
  }, [columns]);

  const displayType = React.useCallback(
    (row: TableRow): string => {
      // Lines tab: always show Liniya (never device asset-group labels).
      if (tab === "line") return t.line;
      return String(row.values[typeKey] || "").trim();
    },
    [tab, t.line, typeKey],
  );

  const filtered = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    let rows = sourceRows;
    if (q) {
      rows = sourceRows.filter((r, idx) => {
        if (String(idx + 1).includes(q)) return true;
        if (r.globalId.toLowerCase().includes(q)) return true;
        if (displayType(r).toLowerCase().includes(q)) return true;
        return columns.some((c) => {
          if (c.key === typeKey) return false;
          return String(r.values[c.key] || "")
            .toLowerCase()
            .includes(q);
        });
      });
    }

    // Reverse list order (last → first); № still renumbers 1..n from top.
    if (typeSort === "reverse") {
      rows = [...rows].reverse();
    }
    return rows;
  }, [sourceRows, search, columns, typeSort, displayType, typeKey]);

  const headers = [
    { key: "__row", label: "№" },
    ...columns
      .filter((c) => c.key !== "globalId")
      .map((c) => ({ key: c.key, label: c.label })),
    ...(columns.some((c) => c.key === "globalId")
      ? [{ key: "globalId", label: "Global ID" }]
      : []),
  ];

  const cellValue = (row: TableRow, key: string, rowIndex: number): string => {
    if (key === "__row") return String(rowIndex + 1);
    if (key === "globalId") return row.globalId || row.values.globalId || "";
    if (key === typeKey) return displayType(row);
    return row.values[key] || "";
  };

  const toggleTypeSort = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTypeSort((prev) => (prev === "default" ? "reverse" : "default"));
  };

  React.useEffect(() => {
    // Reset sort when switching tabs so "oddiy" is the baseline each time.
    setTypeSort("default");
  }, [tab]);

  return (
    <div className="et-table-panel">
      <div className="et-table-header">
        <div className="et-table-header-left">
          <div className="et-table-tabs">
            <button
              type="button"
              className={`et-tab${tab === "device" ? " is-active" : ""}`}
              onClick={() => setTab("device")}
            >
              {t.devicesTab}
            </button>
            <button
              type="button"
              className={`et-tab${tab === "line" ? " is-active" : ""}`}
              onClick={() => setTab("line")}
            >
              {t.linesTab}
            </button>
          </div>
          <span className="et-table-count">
            {filtered.length.toLocaleString("ru-RU")}
          </span>
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
        </div>
      </div>

      <div className="et-table-scroll">
        <table className="et-table">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h.key}>
                  {h.key === typeKey ? (
                    <span className="et-th-with-sort">
                      <span>{h.label}</span>
                      <button
                        type="button"
                        className={`et-sort-btn${
                          typeSort === "reverse" ? " is-active" : ""
                        }`}
                        onClick={toggleTypeSort}
                        title={
                          typeSort === "reverse"
                            ? "Oddiy tartib (boshidan)"
                            : "Teskari tartib (oxiridan)"
                        }
                        aria-label={
                          typeSort === "reverse"
                            ? "Oddiy tartib (boshidan)"
                            : "Teskari tartib (oxiridan)"
                        }
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          {typeSort === "reverse" ? (
                            <>
                              <path d="M8 18V6" />
                              <path d="M4 10l4-4 4 4" />
                              <path d="M16 6v12" />
                              <path d="M12 14l4 4 4-4" />
                            </>
                          ) : (
                            <>
                              <path d="M8 6v12" />
                              <path d="M4 14l4 4 4-4" />
                              <path d="M16 18V6" />
                              <path d="M12 10l4-4 4 4" />
                            </>
                          )}
                        </svg>
                      </button>
                    </span>
                  ) : (
                    h.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={Math.max(headers.length, 1)} className="et-muted">
                  {t.loading}
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={Math.max(headers.length, 1)} className="et-muted">
                  {sourceRows.length === 0
                    ? emptyText || t.noData
                    : t.noMatch}
                </td>
              </tr>
            ) : (
              filtered.map((row, rowIndex) => (
                <tr
                  key={row.id}
                  onClick={() =>
                    onRowClick?.(row, tab === "device" ? "point" : "polyline")
                  }
                  className={`${onRowClick ? "is-clickable" : ""}${
                    selectedId &&
                    (selectedId === row.id ||
                      selectedId === row.globalId ||
                      selectedId === String(row.objectId))
                      ? " is-selected"
                      : ""
                  }`}
                >
                  {headers.map((h) => {
                    const val = cellValue(row, h.key, rowIndex);
                    const linkish = h.key === "globalId";
                    const countish = h.key === "uskunalarSoni";
                    return (
                      <td
                        key={h.key}
                        title={val}
                        className={
                          linkish
                            ? "et-cell-link"
                            : countish
                              ? "et-cell-count"
                              : undefined
                        }
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
