import type { NextPage } from 'next';
import Head from 'next/head';

import Button from '../components/Button';
import { useStoreSelector } from '../hooks/store';
import counterActions from '../models/counter/counterActions';

const Home: NextPage = () => {
  const count = useStoreSelector(({ counter }) => counter.value);

  return (
    <>
      <Head>
        <meta content="rtk" name="description" />
      </Head>
      <p>rtk</p>
      <p>count {count}</p>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Button onClick={counterActions.decrement}>counterActions.decrement</Button>
        <Button onClick={counterActions.increment}>counterActions.increment</Button>
        <Button onClick={() => counterActions.incrementByAmount(5)}>
          counterActions.incrementByAmount + 5
        </Button>
        <Button onClick={() => counterActions.incrementAsync(10)}>
          counterActions.incrementAsync + 10
        </Button>
      </div>
    </>
  );
};

export default Home;
