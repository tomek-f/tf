import type { Metadata } from 'next';

export const metadata: Metadata = {
    description: 'not found description',
    title: 'not found',
};

export default function NotFound() {
    return (
        <>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
        </>
    );
}
