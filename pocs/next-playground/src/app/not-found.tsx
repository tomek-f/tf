import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'not found',
    description: 'not found description',
};

export default function NotFound() {
    return (
        <>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
        </>
    );
}
