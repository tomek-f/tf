import fs from 'node:fs';
import path from 'node:path';

interface PostData {
    content: string;
    date: Date;
    id: string;
    title: string;
}

const postsDirectory = path.join(process.cwd(), 'src', 'posts-json');

export async function getPostData(id: string) {
    const postPath = path.join(postsDirectory, `${id}.json`);
    const fileContents = fs.readFileSync(postPath, 'utf8');
    const data = JSON.parse(fileContents) as PostData;

    return data;
}

export async function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            const id = fileName.replace(/\.json$/, '');
            const data = await getPostData(id);

            return data;
        }),
    );

    return allPostsData.sort(({ date: a }: PostData, { date: b }: PostData) => {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }

        return 0;
    });
}
