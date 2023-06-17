import type { NextPage } from 'next';
import Head from 'next/head';

import { useStoreSelector } from '../hooks/store';

const Home: NextPage = () => {
  const count = useStoreSelector(({ counter }) => counter.value);

  return (
    <>
      <Head>
        <meta content="home" name="description" />
      </Head>
      <p>Home</p>
      <p>count {count}</p>
    </>
  );
};

export default Home;
