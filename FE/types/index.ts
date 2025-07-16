import type { paths } from "@/types/api";

export type Game =
  paths["/games"]["get"]["responses"]["200"]["content"]["*/*"][0];
export type Genre =
  paths["/genres"]["get"]["responses"]["200"]["content"]["*/*"][0];
