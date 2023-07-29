import type { Metadata } from 'next';
import { z } from 'zod';

import { UserSchemaWithGeo } from '../../models/User';
import type { Nullable, SomeError } from '../../types/misc';

export const metadata: Metadata = {
  title: 'GraphQL server',
  description: 'GraphQL server',
};

const UserResults = z.array(UserSchemaWithGeo);

type UserArray = z.infer<typeof UserResults>;

async function getData() {
  let url: Nullable<string> = null;

  url = 'https://jsonplaceholder.typicode.com/users'; // proper
  // url = '/api/text'; // ERR_NET_FAILED_TO_FETCH
  // url = 'https://jsonplaceholder.typicode1.com/users'; // ERR_NET_FAILED_TO_FETCH
  // url = 'https://httpstat.us/400'; // ERR_NET_NOT_OK (400)

  let data: Nullable<UserArray> = null;
  let error: Nullable<SomeError> = null;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      error = new Error('res not ok');

      return { data, error };
    }

    const usersJson = (await res.json()) as UserArray;

    data = UserResults.parse(usersJson);
  } catch (err) {
    error = err as SomeError;
  }

  return { data, error };
}

// TODO change title and description

const ZodServer = async () => {
  const { data, error } = await getData();

  if (error) {
    return (
      <>
        <h1>GraphQL</h1>
        <p>failed to load</p>
        <p>{error.message}</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </>
    );
  }

  if (!data?.length) {
    return (
      <>
        <h1>GraphQL</h1>
        <p>no data</p>
      </>
    );
  }

  return (
    <>
      <h1>GraphQL</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default ZodServer;
