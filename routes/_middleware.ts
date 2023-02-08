import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 500,
  site: "behring",
  domains: ["behring.deco.site"],
});
