'use client';

// import { useEffect } from 'react';
import useSWRGraphQL from '../../hooks/useSWRGraphQL';
import type { Nullable, SomeObj } from '../../types/misc';
import gql from '../../utils/gql';

const query = gql`
    query GetLearnWithJasonEpisodes($now: DateTime!) {
        allEpisode(limit: 10, sort: { date: ASC }, where: { date: { gte: $now } }) {
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

const controller = new AbortController();
const { signal } = controller;

// TODO change title and description

const GraphQLClient = () => {
    let url: Nullable<string> = null;

    url = 'https://www.learnwithjason.dev/graphql'; // proper
    // url = '/api/text'; // ERR_NET_NOT_OK (404)
    // url = 'https://www.learnwithjason1.dev/graphql'; // ERR_NET_FAILED_TO_FETCH
    // url = 'https://httpstat.us/400'; // ERR_NET_NOT_OK (400)

    const { data, error, isLoading } = useSWRGraphQL<{ data: { allEpisode: SomeObj } }[]>([
        url,
        {
            // same request 2 times
            rawRequest: true,
            body: [
                { query, variables },
                { query, variables },
            ],
            signal,
        },
    ]);

    // useEffect(() => {
    //   setTimeout(() => controller.abort());
    // }, []);

    if (error) {
        return (
            <>
                <h1>GraphQL client</h1>
                <p>failed to load</p>
                <p>{error.message}</p>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </>
        );
    }

    if (isLoading) {
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
