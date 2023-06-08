import type { NextPage } from 'next';
import Head from 'next/head';

import NavLink from '../components/NavLink';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta content="Home page desc" name="description" />
      </Head>
      <p>
        Get started by editing <code>pages/index.tsx</code>
      </p>
      <div className="flex flex-col md:flex-row w-full">
        <NavLink
          className="flex-grow h-20 grid place-items-center bg-base-200 rounded-md"
          href="/posts"
        >
          posts &rarr;
        </NavLink>
        <div className="divider md:divider-horizontal">OR</div>
        <NavLink
          className="flex-grow h-20 grid place-items-center bg-base-200 rounded-md"
          href="/countries"
        >
          countries &rarr;
        </NavLink>
      </div>
    </>
  );
};

export default Home;
