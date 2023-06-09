'use client';

import Button from '../../components/Button';
import HeadHelmet from '../../components/HeadHelmet';
import { useStoreSelector } from '../../hooks/store';
import useFormatMessage from '../../hooks/useFormatMessage';
import counterActions from '../../models/counter/counterActions';

const Home = () => {
  const count = useStoreSelector(({ counter }) => counter.value);
  const formatMessage = useFormatMessage();

  return (
    <>
      <HeadHelmet description="rtk" title="rtk" />
      <p>rtk</p>
      <p>count {count}</p>
      <div>{formatMessage('home.links')}</div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Button onClick={counterActions.decrement}>counterActions.decrement</Button>
        <Button onClick={counterActions.increment}>counterActions.increment</Button>
        <Button onClick={() => counterActions.incrementByAmount(5)}>
          counterActions.incrementByAmount + 5
        </Button>
        <Button onClick={() => counterActions.incrementAsync(10)}>
          counterActions.incrementAsync + 10 (3 seconds delay)
        </Button>
      </div>
    </>
  );
};

export default Home;
