import { getPostData } from '../../../lib/posts-md';

const PostMD = async ({ params: { slug } }: { params: { slug: string } }) => {
  const postData = await getPostData(slug);

  return (
    <>
      <h1 className="font-bold">{postData.title}</h1>
      {postData.id} {postData.date}
      <br />
      {/* eslint-disable-next-line react/no-danger */}
      <span dangerouslySetInnerHTML={{ __html: postData.content }} />
    </>
  );
};

export default PostMD;
