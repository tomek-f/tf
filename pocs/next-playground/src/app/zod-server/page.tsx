import type { Metadata } from 'next';
import { z } from 'zod';

import { UserSchemaWithGeo } from '../../models/user';
import type { Nullable, SomeError } from '../../types/misc';

export const metadata: Metadata = {
    description: 'Zod server description',
    title: 'Zod server',
};

const UserResults = z.array(UserSchemaWithGeo);

type UserArray = z.infer<typeof UserResults>;

async function getData() {
    let url: Nullable<string> = null;

    url = 'https://jsonplaceholder.typicode.com/users'; // proper
    // url = '/api/text'; // ERR_NET_FAILED_TO_FETCH
    // url = 'https://jsonplaceholder.typicode1.com/users'; // ERR_NET_FAILED_TO_FETCH
    // url = 'https://httpstat.us/400'; // ERR_NET_NOT_OK (400)

    let data: Nullable<UserArray> = null;
    let error: Nullable<SomeError> = null;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            error = new Error('res not ok');

            return { data, error };
        }

        const usersJson = (await response.json()) as UserArray;

        data = UserResults.parse(usersJson);
    } catch (error_) {
        error = error_ as SomeError;
    }

    return { data, error };
}

const ZodServer = async () => {
    const { data, error } = await getData();

    if (error) {
        return (
            <>
                <h1>Zod server</h1>
                <p>failed to load</p>
                <p>{error.message}</p>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </>
        );
    }

    if (!data?.length) {
        return (
            <>
                <h1>Zod server</h1>
                <p>no data</p>
            </>
        );
    }

    return (
        <>
            <h1>Zod server</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default ZodServer;
