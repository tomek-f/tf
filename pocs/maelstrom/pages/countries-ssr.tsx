import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next';

import { supabase } from '../lib/initSupabase';

const CountriesSSR: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  countriesResponse,
}) => {
  if (countriesResponse.error) {
    return (
      <>
        <h1>Countries error</h1>
        <pre>{JSON.stringify(countriesResponse.error, null, 2)}</pre>
      </>
    );
  }

  return (
    <>
      <h1>Countries data</h1>
      <pre>{JSON.stringify(countriesResponse.data, null, 2)}</pre>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const countriesResponse = await supabase.from('countries').select('*');

  return {
    props: {
      countriesResponse,
    },
  };
}

export default CountriesSSR;
