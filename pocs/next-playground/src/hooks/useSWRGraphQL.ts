import useSWR from 'swr';

import type { SomeError } from '../types/misc';
import gqlite, { type GQLiteInit } from '../utils/gqlite';

function useSWRGraphQL<T, E extends Error = SomeError>(
  graphQLTuple: [RequestInfo | URL, GQLiteInit],
) {
  return useSWR<T, E>(graphQLTuple, ([url, init]: [RequestInfo | URL, GQLiteInit]) =>
    gqlite<T, E>(url, init),
  );
}

export default useSWRGraphQL;
