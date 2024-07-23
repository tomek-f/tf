import '../styles/globals.css';

import type { Metadata } from 'next';

import { Content } from '../components/Content';
// import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { config } from '../config';
import { nunitoSans } from './fonts';

export const metadata: Metadata = {
    description: 'next-playground description',
    title: 'next-playground',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html
            className="dark min-h-screen min-w-[360px] p-6 md:p-8"
            lang={config.language.split('-')[0]}
        >
            <meta content={`${process.env.NODE_ENV}`} name="debug_NODE_ENV" />
            <meta
                content={`${process.env.IS_NON_PRODUCTION === 'true'}`}
                name="debug_IS_NON_PRODUCTION"
            />
            <meta
                content={`${process.env.IS_PRODUCTION === 'true'}`}
                name="debug_IS_PRODUCTION"
            />
            <meta
                content={`${process.env.IS_PREVIEW === 'true'}`}
                name="debug_IS_PREVIEW"
            />
            <meta
                content={`${process.env.IS_DEVELOPMENT === 'true'}`}
                name="debug_IS_DEVELOPMENT"
            />
            <link
                href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
                rel="icon"
            />
            <body
                className={`${nunitoSans.className} bg-slate-900 text-base font-light text-gray-100 dark:bg-slate-900 dark:text-gray-100`}
            >
                <Layout>
                    <Content>
                        <Header />
                        <div className="max-w-full">{props?.children}</div>
                        {/* <Footer /> */}
                    </Content>
                </Layout>
            </body>
        </html>
    );
}
