'use client';

// Error components must be Client Components
import { useEffect } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    description: 'error description',
    title: 'error',
};

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                type="button"
            >
                Try again
            </button>
        </>
    );
}
