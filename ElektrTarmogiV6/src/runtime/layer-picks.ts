import { getAppStore, type UseDataSource } from "jimu-core";

export interface LayerPick {
  id: string;
  url: string;
  title: string;
  itemId: string;
  portalUrl: string;
}

function readVal(obj: any, key: string): any {
  if (!obj) return undefined;
  try {
    if (typeof obj.get === "function") return obj.get(key);
  } catch {
    /* ignore */
  }
  try {
    return obj[key];
  } catch {
    return undefined;
  }
}

function dsRecord(appDs: any, id: string): any {
  if (!appDs || !id) return null;
  try {
    if (typeof appDs.get === "function") return appDs.get(id);
  } catch {
    /* ignore */
  }
  try {
    return appDs[id];
  } catch {
    return null;
  }
}

function portalFromStore(): string {
  const state = getAppStore().getState() as any;
  return String(state?.portalUrl || state?.appConfig?.portalUrl || "").replace(
    /\/$/,
    "",
  );
}

/**
 * Reads layer URL / webmap item from appConfig only.
 * Does not instantiate Jimu DataSource (SubtypeGroupLayer schema walks
 * overflow the call stack in jimu-core).
 */
export function layerPicksFromUseDataSources(
  useDataSources: UseDataSource[],
): LayerPick[] {
  const state = getAppStore().getState() as any;
  const appDs = state?.appConfig?.dataSources;
  const fallbackPortal = portalFromStore();

  return useDataSources.map((uds) => {
    const id = String(uds?.dataSourceId || "");
    const rec = dsRecord(appDs, id);
    const rootId = String(
      uds?.rootDataSourceId ||
        uds?.mainDataSourceId ||
        readVal(rec, "parentDataSourceId") ||
        "",
    );

    let url = String(readVal(rec, "url") || "").replace(/\/$/, "");
    const layerId = readVal(rec, "layerId");
    if (url && layerId !== undefined && layerId !== null && layerId !== "") {
      if (!/\/\d+$/.test(url)) url = `${url}/${layerId}`;
    }

    let itemId = String(readVal(rec, "itemId") || "");
    let walkId = rootId;
    const seen = new Set<string>();
    while (!itemId && walkId && !seen.has(walkId)) {
      seen.add(walkId);
      const parent = dsRecord(appDs, walkId);
      itemId = String(readVal(parent, "itemId") || "");
      if (!url) {
        url = String(readVal(parent, "url") || "").replace(/\/$/, "");
      }
      walkId = String(readVal(parent, "parentDataSourceId") || "");
    }

    const title = String(
      readVal(rec, "sourceLabel") || readVal(rec, "label") || id,
    );

    return {
      id,
      url,
      title,
      itemId,
      portalUrl: String(
        readVal(rec, "portalUrl") || fallbackPortal,
      ).replace(/\/$/, ""),
    };
  });
}
