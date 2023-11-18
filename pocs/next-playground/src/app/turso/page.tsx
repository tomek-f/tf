import type { Metadata } from 'next';

import { turso1 } from '../../db/turso1';

export const revalidate = 300; // 5 minutes

interface Row {
    id: number;
    language: string;
    name: string;
    stars: number;
    url: string;
}

export const metadata: Metadata = {
    description: 'turso description',
    title: 'turso',
};

const Turso = async () => {
    const response = await turso1.execute('SELECT * FROM frameworks');

    console.log(response.columns);
    console.log(response.columnTypes);

    return (
        <>
            <p>turso</p>
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

export default Turso;
