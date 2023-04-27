import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import fetcher from '../lib/fetcher';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Maelstrom</title>
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>▲</text></svg>"
          rel="icon"
        />
        <meta content="Default desc" name="description" />
      </Head>
      <Layout>
        <SWRConfig
          value={{
            fetcher,
            onError: (error, key) => {
              console.warn({ error, key }, error.status, error.response);
            },
            shouldRetryOnError: false,
          }}
        >
          <Content>
            <Header />
            <div className="prose max-w-full">
              <Component {...pageProps} />
            </div>
            <Footer />
          </Content>
        </SWRConfig>
      </Layout>
    </>
  );
};

// export { reportWebVitals } from 'next-axiom';

export default App;
