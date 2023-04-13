import type { NextPage } from 'next';
import useSWR from 'swr';

import { supabase } from '../lib/initSupabase';
import supabaseSWRWrapper from '../lib/supabaseSWRWrapper';

// const fetcher = async () => {
//   const countriesResponse = await supabase.from('countries').select('*');

//   console.log(countriesResponse);

//   if (countriesResponse.error) {
//     throw new Error(countriesResponse.error.message);
//   }

//   return countriesResponse.data;
// };

const CountriesClient: NextPage = () => {
  // const { data, error, isLoading } = useSWR<Country[], SomeError>('hack', fetcher);
  // const { data, error, isLoading } = useSWR<Country[], SomeError>(
  const { data, error, isLoading } = useSWR(
    'countries',
    supabaseSWRWrapper(async () => supabase.from('countries').select('*')),
  );

  console.log({ data, error, isLoading });

  if (error) {
    return (
      <>
        <h1>Countries</h1>
        <p>failed to load</p>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <h1>Countries</h1>
        <p>loading…</p>
      </>
    );
  }

  if (!data?.length) {
    return (
      <>
        <h1>Countries</h1>
        <p>no data</p>
      </>
    );
  }

  return (
    <>
      <h1>Countries</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default CountriesClient;
