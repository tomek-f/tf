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
      {allPostsData.map(({ id, date, title }) => (
        <div key={id}>
          <>
            <code>{date.toString()}</code>{' '}
            <NavLink className="font-bold" href={`posts/${id}`}>
              {title}
            </NavLink>
          </>
        </div>
      ))}
    </div>
  );
};

export default Posts;
