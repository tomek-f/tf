import NavLink from '../../components/NavLink';
import { getSortedPostsData } from '../../lib/posts-md';

async function getData() {
  const allPostsData = await getSortedPostsData();

  return allPostsData;
}

const Posts = async () => {
  const allPostsData = await getData();

  return (
    <div className="grid gap-4">
      {allPostsData.map(({ id, date, title, content }) => (
        <div key={id}>
          <>
            <NavLink className="font-bold" href={`posts/${id}`}>
              {title}
            </NavLink>
            <br />
            <code>{`${id} ${date}`}</code>
            {/* eslint-disable-next-line react/no-danger */}
            <div className="max-w-full" dangerouslySetInnerHTML={{ __html: content }} />
          </>
        </div>
      ))}
    </div>
  );
};

export default Posts;
