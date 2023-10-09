import type { Metadata } from 'next';

import type { AllEpisodes } from '../../types/episodes';
import type { Nullable, SomeError } from '../../types/misc';
import gql from '../../utils/gql';
import gqlite from '../../utils/gqlite';

export const metadata: Metadata = {
    title: 'GraphQL server',
    description: 'GraphQL server description',
};

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

async function getData() {
    let url: Nullable<string> = null;

    url = 'https://www.learnwithjason.dev/graphql'; // proper
    // url = '/api/text'; // ERR_NET_FAILED_TO_FETCH
    // // url = 'https://www.learnwithjason1.dev/graphql'; // ERR_NET_FAILED_TO_FETCH
    // // url = 'https://httpstat.us/400'; // ERR_NET_NOT_OK (400)

    let data: Nullable<{ data: { allEpisode: AllEpisodes } }[]> = null;
    let error: Nullable<SomeError> = null;

    try {
        data = await gqlite<{ data: { allEpisode: AllEpisodes } }[]>(url, {
            // same request 2 times
            rawRequest: true,
            body: [
                { query, variables },
                { query, variables },
            ],
        });
    } catch (error_) {
        error = error_ as SomeError;
    }

    return { data, error };
}

const GraphQLServer = async () => {
    const { data, error } = await getData();

    if (error) {
        return (
            <>
                <h1>GraphQL server</h1>
                <p>failed to load</p>
                <p>{error.message}</p>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </>
        );
    }

    if (!data?.length) {
        return (
            <>
                <h1>GraphQL server</h1>
                <p>no data</p>
            </>
        );
    }

    return (
        <>
            <h1>GraphQL server</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default GraphQLServer;
