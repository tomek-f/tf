import type { Metadata } from 'next';

import { NavLink } from '../../components/NavLink';
import { getSortedPostsData } from '../../lib/posts-json';

export const metadata: Metadata = {
    description: 'Posts description',
    title: 'Posts',
};

const Posts = async () => {
    const allPostsData = await getSortedPostsData();

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
