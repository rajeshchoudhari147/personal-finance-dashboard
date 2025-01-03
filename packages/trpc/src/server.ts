import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

const t = initTRPC.create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

const appRouter = router({
  // Add your router definitions here
});

export type AppRouter = typeof appRouter;
export { appRouter };
