'use client';

import HeadHelmet from '../components/HeadHelmet';
import { useStoreSelector } from '../hooks/store';
import useFormatMessage from '../hooks/useFormatMessage';

export default function Home() {
  const count = useStoreSelector(({ counter }) => counter.value);
  const formatMessage = useFormatMessage();

  return (
    <>
      <HeadHelmet description="home" title="home" />
      <p>Home</p>
      <p>count {count}</p>
      <div>{formatMessage('section.home')}</div>
      <div>{formatMessage('section.ratio')}</div>
      <div>{formatMessage('section.contact')}</div>
    </>
  );
}
