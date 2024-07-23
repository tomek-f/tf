import type { Metadata } from 'next';

import { Block } from '../../components/Block';

export const metadata: Metadata = {
    description: 'Contact description',
    title: 'Contact | Internety Tomasz Fijoł',
};

export default function Contact() {
    return (
        <Block className="custom-html">
            <p>Data</p>
            <ul>
                <li>nip: 8111641723</li>
                <li>regon: 369009950</li>
                <li>gmail: tomekfijol</li>
            </ul>
        </Block>
    );
}
