import { type ImmutableObject } from "jimu-core";

export interface Config {
  /** Left panel header title. */
  title?: string;
  /** Optional override for UN_Electrik web map portal item. */
  webMapItemId?: string;
  portalUrl?: string;
}

export type IMConfig = ImmutableObject<Config>;

export const DEFAULT_TITLE = "HET Mirzo Ulug'bek";
export const DEFAULT_PORTAL_URL = "https://sgm.uzspace.uz/portal";
export const DEFAULT_WEBMAP_ITEM_ID = "12f4ad92bc51435b96a82b929954de4d";
