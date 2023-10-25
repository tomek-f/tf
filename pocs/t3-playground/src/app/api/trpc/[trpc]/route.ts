import { type NextRequest } from 'next/server';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { env } from 'T3/env.js';
import { appRouter } from 'T3/server/api/root';
import { createTRPCContext } from 'T3/server/api/trpc';

const handler = (request: NextRequest) =>
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req: request,
        router: appRouter,
        createContext: () => createTRPCContext({ req: request }),
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
    });

export { handler as GET, handler as POST };
