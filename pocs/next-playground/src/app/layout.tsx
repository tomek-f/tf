import '../styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import config from '../config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'next-playground',
    description: 'next-playground description',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html className="dark" lang={config.language.split('-')[0]}>
            <link
                href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👷🏼</text></svg>"
                rel="icon"
            />
            <body
                className={`${inter.className} min-h-screen bg-emerald-200 p-8 text-base font-light text-black dark:bg-purple-950 dark:text-white`}
            >
                <Layout>
                    <Content>
                        <Header />
                        <div className="max-w-full">{props?.children}</div>
                        <Footer />
                    </Content>
                </Layout>
            </body>
        </html>
    );
}
