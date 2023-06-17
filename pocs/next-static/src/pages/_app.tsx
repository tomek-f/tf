import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ProviderRedux } from 'react-redux';

import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { store } from '../store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>next-static</title>
        <link
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💀</text></svg>"
          rel="icon"
        />
        <meta content="Default desc" name="description" />
      </Head>
      <ProviderRedux store={store}>
        <Layout>
          <Content>
            <Header />
            <div className="max-w-full">
              <Component {...pageProps} />
            </div>
            <Footer />
          </Content>
        </Layout>
      </ProviderRedux>
    </>
  );
};

// export { reportWebVitals } from 'next-axiom';

export default App;
