/* eslint-disable react/no-danger, react/jsx-no-useless-fragment */
import type { InferGetStaticPropsType, NextPage } from 'next';

import NavLink from '../../components/NavLink';
import { getSortedPostsData } from '../../lib/TODO-posts-md';

const Posts: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allPostsData }) => {
  return (
    <div className="grid gap-4">
      {allPostsData.map(({ id, date, title, content }) => (
        <div key={id}>
          <>
            <NavLink href={`posts/${id}`}>{title}</NavLink>
            <br />
            <code>{`${id} ${date}`}</code>
            <div className="max-w-full" dangerouslySetInnerHTML={{ __html: content }} />
          </>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default Posts;
