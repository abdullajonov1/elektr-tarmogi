import { React } from "jimu-core";
import type { AttributePopupData } from "../un-query";
import type { EtMessages } from "../i18n";
import { translateEquipment, translateStatus } from "../i18n";

interface Props {
  data: AttributePopupData | null;
  onClose: () => void;
  t: EtMessages;
}

function Row(props: {
  label: string;
  value: React.ReactNode;
  badge?: boolean;
}): React.ReactElement {
  return (
    <div className="et-popup-row">
      <span className="et-popup-key">{props.label}</span>
      {props.badge ? (
        <span className="et-status-pill">{props.value}</span>
      ) : (
        <span className="et-popup-val">{props.value}</span>
      )}
    </div>
  );
}

export default function AttributePopup(props: Props): React.ReactElement | null {
  const { data, onClose, t } = props;
  if (!data) return null;

  return (
    <div className="et-popup" role="dialog" aria-label={t.attributeInfo}>
      <div className="et-popup-header">
        <span>{t.attributeInfo}</span>
        <button
          type="button"
          className="et-popup-close"
          onClick={onClose}
          aria-label={t.close}
        >
          ×
        </button>
      </div>
      <div className="et-popup-body">
        <Row label={t.name} value={data.nomi} />
        <Row label={t.type} value={translateEquipment(data.turi, t)} />
        <Row label={t.voltage} value={data.kuchlanish} />
        <Row label={t.power} value={data.quvvati} />
        <Row label={t.status} value={translateStatus(data.holati, t)} badge />
        <Row label={t.connectedLines} value={String(data.connectedLines)} />
      </div>
    </div>
  );
}
