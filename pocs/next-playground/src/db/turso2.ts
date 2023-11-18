import { createClient } from '@libsql/client';

export const turso2 = createClient({
    authToken: process.env.TURSO_TOKEN_2,
    url: process.env.TURSO_URL_2 as string,
});
