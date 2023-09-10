// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { countRouter } from "./count";

export const appRouter = t.router({
  count: countRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
