import type { Metadata } from 'next';
import { BlogListLoader } from 'NEXT_PG/components/BlogList/BlogListLoader';

export const metadata: Metadata = {
    description: 'turso blogs description',
    title: 'turso blogs',
};

const TursoBlogs = async () => {
    return (
        <>
            <p>turso blogs</p>
            <BlogListLoader />
        </>
    );
};

export default TursoBlogs;
