import iconPodstansiya from "./assets/podstansiya.png";
import iconTransformator from "./assets/transformator.png";
import iconTashqiManba from "./assets/tashqi-manba.png";

export const EQUIPMENT_ICONS: Record<string, string> = {
  Podstansiya: iconPodstansiya,
  Transformator: iconTransformator,
  "Tashqi manba": iconTashqiManba,
};

export function equipmentIcon(label: string): string | undefined {
  const direct = EQUIPMENT_ICONS[label];
  if (direct) return direct;
  const n = String(label || "").toLowerCase();
  if (n.includes("transform")) return EQUIPMENT_ICONS.Transformator;
  if (n.includes("podstansiya") || n.includes("substation")) {
    return EQUIPMENT_ICONS.Podstansiya;
  }
  if (n.includes("tashqi") || n.includes("manba") || n.includes("external")) {
    return EQUIPMENT_ICONS["Tashqi manba"];
  }
  return undefined;
}
