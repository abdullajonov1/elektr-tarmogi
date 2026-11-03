import { React } from "jimu-core";
import type { LayerToggleId, LayerToggleItem } from "../un-layers";
import { equipmentIcon } from "../equipment-icons";
import type { EtMessages } from "../i18n";
import { translateEquipment } from "../i18n";

interface Props {
  items: LayerToggleItem[];
  enabled: Set<LayerToggleId>;
  onToggle: (id: LayerToggleId) => void;
  t: EtMessages;
}

function Swatch(props: { item: LayerToggleItem }): React.ReactElement {
  const { item } = props;
  const icon = item.icon || equipmentIcon(item.label);
  if (icon) {
    return (
      <span className="et-swatch et-swatch-icon">
        <img src={icon} alt="" />
      </span>
    );
  }
  if (item.swatch === "circle") {
    return (
      <span
        className="et-swatch et-swatch-circle"
        style={{ background: item.color }}
      />
    );
  }
  if (item.swatch === "plus") {
    return (
      <span className="et-swatch et-swatch-plus" style={{ borderColor: item.color }}>
        <span style={{ color: item.color }}>+</span>
      </span>
    );
  }
  return (
    <span
      className="et-swatch et-swatch-line"
      style={{ background: item.color }}
    />
  );
}

function deviceLabel(item: LayerToggleItem, t: EtMessages): string {
  if (item.id === "device:transformer") return t.transformer;
  if (item.id === "device:substation") return t.substation;
  if (item.id === "device:external") return t.externalSource;
  return translateEquipment(item.label, t);
}

export default function LayersPanel(props: Props): React.ReactElement {
  const { items, enabled, onToggle, t } = props;
  const lines = items.filter((i) => i.kind === "line");
  const devices = items.filter((i) => i.kind === "device");

  const renderRows = (list: LayerToggleItem[], isDevice: boolean) =>
    list.map((item) => {
      const on = enabled.has(item.id);
      return (
        <div key={item.id} className="et-layers-row">
          <Swatch item={item} />
          <span className="et-layers-label">
            {isDevice ? deviceLabel(item, t) : item.label}
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={on}
            className={`et-toggle${on ? " is-on" : ""}`}
            onClick={() => onToggle(item.id)}
          >
            <span className="et-toggle-thumb" />
          </button>
        </div>
      );
    });

  return (
    <div className="et-layers-panel">
      <div className="et-layers-head">
        <span className="et-card-mark" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 3 3 8l9 5 9-5-9-5z" />
            <path d="M3 14l9 5 9-5M3 19l9 5 9-5" />
          </svg>
        </span>
        <div className="et-layers-title">{t.layers}</div>
      </div>
      <div className="et-layers-list">
        {devices.length ? (
          <>
            <div className="et-layers-group">{t.deviceLayers}</div>
            {renderRows(devices, true)}
          </>
        ) : null}
        {lines.length ? (
          <>
            <div className="et-layers-group">{t.lineLayers}</div>
            {renderRows(lines, false)}
          </>
        ) : null}
      </div>
    </div>
  );
}
