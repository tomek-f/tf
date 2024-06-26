import { turso2 } from '../../db/turso2';
import { postBlog } from './actions';
import { BlogList } from './BlogList';
import type { BlogItem } from './types';

// JSON shit is for: Warning: Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.

export async function BlogListLoader() {
    const { columns, columnTypes, rows } = await turso2.execute(
        'SELECT * FROM blogs',
    );

    console.log(columns);
    console.log(columnTypes);

    // onSubmit={postBlog} has to be passed due to some error https://github.com/libsql/libsql-client-ts/issues/128
    return (
        <BlogList
            onSubmit={postBlog}
            rows={structuredClone(rows) as unknown as BlogItem[]}
        />
    );
}
