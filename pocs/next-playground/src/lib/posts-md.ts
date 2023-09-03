import fs from 'node:fs';
import path from 'node:path';

import matter, { type GrayMatterFile } from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface PostData {
  date: Date;
  id: string;
  title: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src', 'posts-md');

export async function getPostData(id: string) {
  const postPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(postPath, 'utf8');
  const matterResult = matter(fileContents) as GrayMatterFile<string>;
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();
  const data = matterResult.data as { date: Date; title: string };

  // prepare post data
  return {
    id,
    date: data.date,
    title: data.title,
    content: contentHtml,
  } satisfies PostData;
}

export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
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
