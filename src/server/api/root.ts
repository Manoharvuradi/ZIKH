import { createTRPCRouter } from "Y/server/api/trpc";
import { exampleRouter } from "Y/server/api/routers/example";
import { credentialUserRouter } from "./routers/credentialUser";
import { locationDataRouter } from "./routers/locationData";
import { crimeTipRouter } from "./routers/crimeTip";
import { seachByStateRouter } from "./routers/searchByState";
import { searchCityRouter } from "./routers/searchCity";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  credentialUser: credentialUserRouter,
  locationData: locationDataRouter,
  crimeTip: crimeTipRouter,
  searchByState: seachByStateRouter,
  searchCity: searchCityRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
