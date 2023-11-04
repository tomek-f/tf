'use client';

import { useState } from 'react';
// just use @tanstack/react-query provided by @trpc/* deps
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { loggerLink, unstable_httpBatchStreamLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { type AppRouter } from 'T3/server/api/root';

import { getUrl, transformer } from './shared';

export const api = createTRPCReact<AppRouter>();

export function TRPCReactProvider(props: {
    children: React.ReactNode;
    headers: Headers;
}) {
    const [queryClient] = useState(() => new QueryClient());

    const [trpcClient] = useState(() =>
        api.createClient({
            links: [
                loggerLink({
                    enabled: (op) =>
                        process.env.NODE_ENV === 'development' ||
                        (op.direction === 'down' && op.result instanceof Error),
                }),
                unstable_httpBatchStreamLink({
                    headers() {
                        const heads = new Map(props.headers);

                        heads.set('x-trpc-source', 'react');

                        return Object.fromEntries(heads);
                    },
                    url: getUrl(),
                }),
            ],
            transformer,
        }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <api.Provider client={trpcClient} queryClient={queryClient}>
                {props.children}
            </api.Provider>
        </QueryClientProvider>
    );
}
