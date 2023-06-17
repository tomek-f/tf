import type { NextPage } from 'next';
import Head from 'next/head';

import { useStoreSelector } from '../hooks/store';

const Test2: NextPage = () => {
  const count = useStoreSelector(({ counter }) => counter.value);

  return (
    <>
      <Head>
        <meta content="test 2" name="description" />
      </Head>
      <p>test 2</p>
      <p>count {count}</p>
    </>
  );
};

export default Test2;
