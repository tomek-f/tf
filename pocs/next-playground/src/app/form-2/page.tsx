'use client';

import type { MouseEventHandler } from 'react';

import { test4 } from './actions';

export default function Page() {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const test5: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        test4(event.currentTarget.type);
    };

    return (
        <>
            <button onClick={() => test4(222)} type="submit">
                Submit 3
            </button>
            <button onClick={test5} type="submit">
                Submit 4
            </button>
        </>
    );
}
