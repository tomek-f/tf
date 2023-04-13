import type { InferGetStaticPropsType, NextPage } from 'next';

import { supabase } from '../lib/initSupabase';

const CountriesStatic: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
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

export async function getStaticProps() {
  const countriesResponse = await supabase.from('countries').select('*');

  return {
    props: {
      countriesResponse,
    },
  };
}

export default CountriesStatic;
