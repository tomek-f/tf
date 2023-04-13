import useSWR from 'swr';

import gqlite, { type GQLiteInit } from '../lib/gqlite';
import type { SomeError } from '../types/misc';

function useSWRGraphQL<T, E extends Error = SomeError>(
  graphQLTuple: [RequestInfo | URL, GQLiteInit],
) {
  return useSWR<T, E>(graphQLTuple, ([url, init]: [RequestInfo | URL, GQLiteInit]) =>
    gqlite<T, E>(url, init),
  );
}

export default useSWRGraphQL;
