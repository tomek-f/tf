'use client';

import '../styles/globals.css';

import { Inter } from 'next/font/google';
import { HelmetProvider } from 'react-helmet-async';
import { RawIntlProvider } from 'react-intl';

import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeadHelmet from '../components/HeadHelmet';
import Layout from '../components/Layout';
import config from '../config';
import getIntl from '../i18n/getIntl';
import intls from '../i18n/intls';
import { Providers } from '../redux/provider';

const inter = Inter({ subsets: ['latin'] });

async function getData() {
  const { default: unused, ...rest } = await import('../i18n/locales/en-US.json');

  return rest;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const messagestDefault = await getData();

  intls.add('en-US', messagestDefault);

  const intl = getIntl(config.language);

  return (
    <html className="dark" lang={config.language.split('-')[0]}>
      <link
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💀</text></svg>"
        rel="icon"
      />
      <body
        className={`${inter.className} font-light text-base bg-emerald-200 dark:bg-purple-950 text-black dark:text-white p-8 min-h-screen`}
      >
        <HelmetProvider>
          <HeadHelmet />
          <Providers>
            <RawIntlProvider value={intl}>
              <Layout>
                <Content>
                  <Header />
                  <div className="max-w-full">{children}</div>
                  <Footer />
                </Content>
              </Layout>
            </RawIntlProvider>
          </Providers>
        </HelmetProvider>
      </body>
    </html>
  );
}
