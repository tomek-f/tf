import { type NextRequest } from 'next/server';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { env } from 'T3/env.js';
import { appRouter } from 'T3/server/api/root';
import { createTRPCContext } from 'T3/server/api/trpc';

const handler = (request: NextRequest) =>
    fetchRequestHandler({
        createContext: () => createTRPCContext({ req: request }),
        endpoint: '/api/trpc',
        onError:
            env.NODE_ENV === 'development'
                ? ({ path, error }) => {
                      console.error(
                          `❌ tRPC failed on ${path ?? '<no-path>'}: ${
                              error.message
                          }`,
                      );
                  }
                : undefined,
        req: request,
        router: appRouter,
    });

export { handler as GET, handler as POST };
