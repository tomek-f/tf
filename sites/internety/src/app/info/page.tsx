import type { Metadata } from 'next';

import { Block } from '../../components/Block';

export const metadata: Metadata = {
    description: 'Info description',
    title: 'Info | Internety Tomasz Fijoł',
};

export default function Info() {
    return (
        <Block className="custom-html">
            <p>Links</p>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/tomasz-fijo%C5%82/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.npmjs.com/~tomekf"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        npm
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/tomek-f"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        github
                    </a>
                </li>
            </ul>
        </Block>
    );
}
