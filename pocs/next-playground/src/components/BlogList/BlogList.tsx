'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';

import type { PostBlog } from './actions';
import type { BlogItem } from './types';

export function BlogList({
    // onSubmit={postBlog} has to be passed due to some error https://github.com/libsql/libsql-client-ts/issues/128
    onSubmit,
    rows,
}: {
    onSubmit: PostBlog;
    rows: BlogItem[];
}) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [updatedRows, formAction] = useFormState(onSubmit, rows);

    return (
        <div>
            {updatedRows.map((row, index) => (
                <div className="mb-5" key={index}>
                    <div className="text-2xl font-semibold">{row.title}</div>
                    <div className="ml-5 mt-2 italic">{row.body}</div>
                </div>
            ))}
            <form
                action={formAction}
                onSubmit={() => {
                    setTitle('');
                    setBody('');
                }}
            >
                <div className="flex items-center gap-4">
                    <label htmlFor="title">Title:</label>
                    <input
                        className="w-full flex-grow text-black"
                        id="title"
                        name="title"
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                        type="text"
                        value={title}
                    />
                    <label htmlFor="body">Body:</label>
                    <input
                        className="w-full flex-grow text-black"
                        id="body"
                        name="body"
                        onChange={(event) => {
                            setBody(event.target.value);
                        }}
                        type="text"
                        value={body}
                    />
                    <button
                        className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
