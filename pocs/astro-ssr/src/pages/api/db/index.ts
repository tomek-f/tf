import type { APIRoute } from 'astro';
import SQLite from 'better-sqlite3';

const __dirname = new URL('.', import.meta.url).pathname;
const database = new SQLite(`${__dirname}/data.sqlite`, {
    // verbose: console.log,
});

database.exec(`
    create table if not exists articles (
        id integer not null primary key autoincrement,
        title text,
        content text
    );
`);

export const GET: APIRoute = async (data) => {
    const stmt = database.prepare('select id, title, content from articles');
    const pretty = data.url.searchParams.get('pretty');
    const articles = stmt.all();

    return new Response(JSON.stringify(articles, null, pretty ? 2 : 0), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
};
