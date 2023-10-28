// eslint-disable-next-line import/no-unresolved
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.string(),
        title: z.string(),
    }),
    type: 'content',
});

export const collections = {
    blog: blogCollection,
};
