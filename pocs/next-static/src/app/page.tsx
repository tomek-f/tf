'use client';

import HeadHelmet from '../components/HeadHelmet';
import { useStoreSelector } from '../hooks/store';

export default function Home() {
  const count = useStoreSelector(({ counter }) => counter.value);

  return (
    <>
      <HeadHelmet description="home" title="home" />
      <p>Home</p>
      <p>count {count}</p>
    </>
  );
}
