'use client';

import '../styles/globals.css';

import { Inter } from 'next/font/google';
import { HelmetProvider } from 'react-helmet-async';

import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeadHelmet from '../components/HeadHelmet';
import Layout from '../components/Layout';
import { Providers } from '../redux/provider';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'next-static',
//   description: 'next-static',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💀</text></svg>"
        rel="icon"
      />
      <body
        className={`${inter.className} font-light text-base bg-emerald-200 dark:bg-purple-950 text-black dark:text-white p-8 min-h-screen`}
      >
        <HelmetProvider>
          <HeadHelmet />
          <Layout>
            <Content>
              <Header />
              <Providers>
                <div className="max-w-full">{children}</div>
              </Providers>
              <Footer />
            </Content>
          </Layout>
        </HelmetProvider>
      </body>
    </html>
  );
}
