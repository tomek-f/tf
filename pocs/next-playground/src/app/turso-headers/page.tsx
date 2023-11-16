import type { Metadata } from 'next';
import { headers } from 'next/headers';

import turso from '../turso';

interface Row {
    id: number;
    language: string;
    name: string;
    stars: number;
    url: string;
}

export const metadata: Metadata = {
    description: 'turso headers description',
    title: 'turso headers',
};

const TursoHeaders = async () => {
    const response = await turso.execute('SELECT * FROM frameworks');

    console.log(response.columns);
    console.log(response.columnTypes);
    console.log(headers().get('user-agent'));

    return (
        <>
            <p>turso headers</p>
            {(response.rows as unknown as Row[]).map((row) => (
                <div className="mt-4" key={row.id}>
                    <div>{row.name}</div>
                    <div>{row.language}</div>
                    <div>{row.stars}</div>
                    <div>{row.url}</div>
                </div>
            ))}
        </>
    );
};

export default TursoHeaders;
