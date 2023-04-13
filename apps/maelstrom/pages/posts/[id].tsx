/* eslint-disable react/no-danger */
import type { InferGetStaticPropsType, NextPage } from 'next';

import { getAllPostIds, getPostData } from '../../lib/posts-md';
import type { PostPathData } from '../../types/data';

const PostMD: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ postData }) => {
  // const PostMD: NextPage<Props> = ({ postData }: Props) => {
  return (
    <>
      <h1>{postData.title}</h1>
      {postData.id} {postData.date}
      <br />
      <span className="prose" dangerouslySetInnerHTML={{ __html: postData.content }} />
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: PostPathData) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default PostMD;
