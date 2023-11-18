'use client';

// import { useEffect } from 'react';
import { useEffect, useState } from 'react';

import type { AllEpisodes } from '../../types/episodes';
import type { Nullable } from '../../types/misc';
import { gql } from '../../utils/gql';
import { gqlite } from '../../utils/gqlite';

const query = gql`
    query GetLearnWithJasonEpisodes($now: DateTime!) {
        allEpisode(
            limit: 10
            sort: { date: ASC }
            where: { date: { gte: $now } }
        ) {
            date
            title
            guest {
                name
                twitter
            }
            description
        }
    }
`;

const variables = {
    now: new Date().toISOString(),
};

// const controller = new AbortController();
// const { signal } = controller;

const useData = (url: string) => {
    const [data, setData] =
        useState<Nullable<{ data: { allEpisode: AllEpisodes } }[]>>(null);
    const [error, setError] = useState<Nullable<string>>(null);
    const [loading, setloading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await gqlite<
                    { data: { allEpisode: AllEpisodes } }[]
                >(url, {
                    // same request 2 times
                    body: [
                        { query, variables },
                        { query, variables },
                    ],
                    rawRequest: true,
                });

                setData(response);
            } catch (error_) {
                setError((error_ as Error).message);
            } finally {
                setloading(false);
            }
        })();
    }, [url]);

    return { data, error, loading };
};

const GraphQLClient = () => {
    let url: Nullable<string> = null;

    // or make it this page a server-side component; the logic in an additional component with 'use client';
    if (global.document) {
        document.title = 'GraphQL client';
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute('content', 'GraphQL client description');
    }

    url = 'https://www.learnwithjason.dev/graphql'; // proper
    // url = '/api/text'; // ERR_NET_NOT_OK (404)
    // url = 'https://www.learnwithjason1.dev/graphql'; // ERR_NET_FAILED_TO_FETCH
    // url = 'https://httpstat.us/400'; // ERR_NET_NOT_OK (400)

    const { data, error, loading } = useData(url);

    // useEffect(() => {
    //   setTimeout(() => controller.abort());
    // }, []);

    if (error) {
        return (
            <>
                <h1>GraphQL client</h1>
                <p>failed to load</p>
                <p>{error}</p>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </>
        );
    }

    if (loading) {
        return (
            <>
                <h1>GraphQL client</h1>
                <p>loading…</p>
            </>
        );
    }

    if (!data?.length) {
        return (
            <>
                <h1>GraphQL client</h1>
                <p>no data</p>
            </>
        );
    }

    return (
        <>
            <h1>GraphQL client</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default GraphQLClient;
