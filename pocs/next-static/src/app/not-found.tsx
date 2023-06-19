'use client';

import HeadHelmet from '../components/HeadHelmet';

export default function NotFound() {
  return (
    <>
      <HeadHelmet description="not found" title="not found" />
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </>
  );
}
