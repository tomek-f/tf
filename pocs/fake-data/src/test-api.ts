import { hc } from 'hono/client';

// import { type AppType } from './server'; // this breaks tsx
import type { ApiHero, ApiPost } from './server';

const client = hc<ApiPost | ApiHero>('http://0.0.0.0:2137');

const post = await client.post.$get();
const postData = await post.json();

console.log(postData);

const hero = await client.hero.$get();
const heroData = await hero.json();

console.log(heroData);
