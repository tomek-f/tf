import type { APIRoute } from 'astro';
import SQLite from 'better-sqlite3';

// const __dirname = new URL('.', import.meta.url).pathname;
// const database = new SQLite(`${__dirname}/data.sqlite`, {
//     // verbose: console.log,
// });
const database = new SQLite(':memory:');

// CREATE TABLE IF NOT EXISTS articles
database.exec(`
    CREATE TABLE articles (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        content TEXT
    );
    INSERT INTO articles(title, content)
    VALUES
        ('Article 1', 'Article 1 content'),
        ('Article 2', 'Article 2 content'),
        ('Article 3', 'Article 3 content');
`);

export const GET: APIRoute = async ({ url }) => {
    const stmt = database.prepare('SELECT id, title, content FROM articles');
    const pretty = url.searchParams.get('pretty');
    const articles = stmt.all();

    return new Response(JSON.stringify(articles, null, pretty ? 2 : 0), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
};
