import type { Metadata } from 'next';

import { Box } from '../components/Box';

export const metadata: Metadata = {
    description: 'home description',
    title: 'Internety Tomasz Fijoł',
};

export default function Home() {
    return (
        <Box>
            <p>Hello world!</p>
        </Box>
    );
}
