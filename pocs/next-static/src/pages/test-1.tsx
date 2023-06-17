import type { NextPage } from 'next';
import Head from 'next/head';

import { useStoreSelector } from '../hooks/store';

const Test1: NextPage = () => {
  const count = useStoreSelector(({ counter }) => counter.value);

  return (
    <>
      <Head>
        <meta content="test 1" name="description" />
      </Head>
      <p>test 1</p>
      <p>count {count}</p>
    </>
  );
};

export default Test1;
