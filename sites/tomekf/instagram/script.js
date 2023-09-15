// eslint-disable-next-line prettier/prettier
import p_1 from './p_1.json' assert { type: 'json' };
// eslint-disable-next-line prettier/prettier
import posts from './posts.json' assert { type: 'json' };

import { writeFileSync } from 'fs';

const data = posts.map((post, idx) => ({ ...post, title: p_1[idx].title }));

writeFileSync('./posts_2.json', JSON.stringify(data));
