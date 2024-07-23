import type { Metadata } from 'next';

import Form from './Form';

export const metadata: Metadata = {
    description: 'Zod form description',
    title: 'Zod form',
};

const Zod = () => {
    return <Form />;
};

export default Zod;
