/**
 * Safe walks over ArcGIS layer graphs. SubtypeGroupLayer / GroupLayer often
 * expose a parent `layers` collection that includes the current layer; walking
 * that without a visited set overflows the call stack.
 */

export function collectionToArray(coll: any): any[] {
  if (!coll) return [];
  try {
    if (typeof coll.toArray === "function") return coll.toArray() || [];
    if (Array.isArray(coll)) return coll;
  } catch {
    return [];
  }
  return [];
}

/** Direct children only — never the parent map/group collection. */
export function childLayers(layer: any): any[] {
  if (!layer) return [];
  const pick = (name: "sublayers" | "layers"): any[] => {
    let coll: any;
    try {
      coll = layer[name];
    } catch {
      return [];
    }
    const arr = collectionToArray(coll);
    if (!arr.length) return [];
    if (arr.includes(layer)) return [];
    return arr.filter((child) => child && child !== layer);
  };
  const sub = pick("sublayers");
  if (sub.length) return sub;
  return pick("layers");
}

export function esriFieldList(layer: any): any[] {
  const fields = layer?.fields;
  if (!fields) return [];
  if (Array.isArray(fields) && fields.length) return fields;
  const fromColl = collectionToArray(fields);
  if (fromColl.length) return fromColl;
  return [];
}

export function fieldSourceLayer(layer: any, seen?: Set<any>): any {
  const visited = seen || new Set();
  if (!layer) return layer;
  const uid = layer.uid != null ? `uid:${layer.uid}` : null;
  if (visited.has(layer) || (uid && visited.has(uid))) return layer;
  visited.add(layer);
  if (uid) visited.add(uid);
  if (esriFieldList(layer).length) return layer;
  for (const child of childLayers(layer)) {
    const found = fieldSourceLayer(child, visited);
    if (found && esriFieldList(found).length) return found;
  }
  return layer;
}

export function walkLayerFields(layer: any, seen?: Set<any>): any[] {
  const visited = seen || new Set();
  if (!layer) return [];
  const uid = layer.uid != null ? `uid:${layer.uid}` : null;
  if (visited.has(layer) || (uid && visited.has(uid))) return [];
  visited.add(layer);
  if (uid) visited.add(uid);
  const fields = esriFieldList(layer);
  if (fields.length) return fields;
  for (const child of childLayers(layer)) {
    const found = walkLayerFields(child, visited);
    if (found.length) return found;
  }
  return [];
}

export function disablePopup(layer: any, seen?: Set<any>): void {
  const visited = seen || new Set();
  if (!layer) return;
  const uid = layer.uid != null ? `uid:${layer.uid}` : null;
  if (visited.has(layer) || (uid && visited.has(uid))) return;
  visited.add(layer);
  if (uid) visited.add(uid);
  try {
    layer.popupEnabled = false;
    if (layer.outFields) layer.outFields = ["*"];
  } catch {
    /* ignore */
  }
  for (const child of childLayers(layer)) disablePopup(child, visited);
}
