import { createClient } from '@libsql/client';

export const turso1 = createClient({
    authToken: process.env.TURSO_TOKEN_1!,
    url: process.env.TURSO_URL_1!,
});
