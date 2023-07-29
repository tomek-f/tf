import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home',
  description: 'home',
};

export default function Home() {
  return (
    <>
      <p>home</p>
      <div>section.home</div>
      <div>section.ratio</div>
      <div>section.contact</div>
    </>
  );
}
