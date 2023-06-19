'use client';

import HeadHelmet from '../../components/HeadHelmet';
import { useStoreSelector } from '../../hooks/store';

const Test2 = () => {
  const count = useStoreSelector(({ counter }) => counter.value);

  return (
    <>
      <HeadHelmet description="test 1" title="test 1" />
      <p>test 2</p>
      <p>count {count}</p>
    </>
  );
};

export default Test2;
