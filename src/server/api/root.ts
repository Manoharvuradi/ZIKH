import { createTRPCRouter } from "Y/server/api/trpc";
import { exampleRouter } from "Y/server/api/routers/example";
import { credentialUserRouter } from "./routers/credentialUser";
import { locationDataRouter } from "./routers/locationData";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  credentialUser: credentialUserRouter,
  locationData: locationDataRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
