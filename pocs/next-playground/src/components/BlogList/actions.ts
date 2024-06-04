'use server';

import { revalidatePath } from 'next/cache';
import type { SomeObject } from 'src/types/misc';

import { turso2 } from '../../db/turso2';
import type { BlogItem } from './types';

// JSON shit is for: Warning: Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.

export async function postBlog(previousState: SomeObject, formData: FormData) {
    // console.log(formData, formData.get('body'), formData.get('title'));

    if (formData.get('body') && formData.get('title')) {
        await turso2.execute({
            args: {
                body: formData.get('body') as string,
                title: formData.get('title') as string,
            },
            sql: 'INSERT INTO blogs (title, body) VALUES ($title, $body)',
        });
    }

    revalidatePath('/turso-blogs');

    const { rows: updatedRows } = await turso2.execute('SELECT * FROM blogs');

    return structuredClone(updatedRows) as unknown as BlogItem[];
}

export type PostBlog = typeof postBlog;
