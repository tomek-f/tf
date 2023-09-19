import type { Metadata } from 'next';

import Form from './Form';

export const metadata: Metadata = {
    title: 'Zod form',
    description: 'Zod form description',
};

const Zod = () => {
    return <Form />;
};

export default Zod;
