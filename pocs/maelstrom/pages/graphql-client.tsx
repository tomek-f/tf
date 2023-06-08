/* eslint-disable react/jsx-no-useless-fragment */
import type { NextPage } from 'next';

// import { useEffect } from 'react';
import useSWRGraphQL from '../hooks/useSWRGraphQL';
import type { SomeObj } from '../types/misc';
import gql from '../utils/gql';

const url = 'https://www.learnwithjason.dev/graphql';

// url = '/api/text';
// url = 'https://www.learnwithjason1.dev/graphql';
// url = 'https://httpstat.us/400';

const query = gql`
  query GetLearnWithJasonEpisodes($now: DateTime!) {
    allEpisode(limit: 10, sort: { date: ASC }, where: { date: { gte: $now } }) {
      date
      title
      guest {
        name
        twitter
      }
      description
    }
  }
`;

const variables = {
  now: new Date().toISOString(),
};

const controller = new AbortController();
const { signal } = controller;

const GraphQL: NextPage = () => {
  const { data, error, isLoading } = useSWRGraphQL<{ data: { allEpisode: SomeObj } }[]>([
    url,
    {
      rawRequest: true,
      body: [
        { query, variables },
        { query, variables },
      ],
      signal,
    },
  ]);

  // useEffect(() => {
  //   setTimeout(() => controller.abort());
  // }, []);

  console.log({ data, error });

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

  if (isLoading) {
    return (
      <>
        <h1>GraphQL</h1>
        <p>loading…</p>
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

export default GraphQL;
