import { createClient } from '@libsql/client';

const turso = createClient({
    authToken: process.env.TURSO_TOKEN_1,
    url: process.env.TURSO_URL_1 as string,
});

export default turso;
