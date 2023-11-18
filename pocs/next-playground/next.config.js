/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

console.log(process.env.TURSO_URL_2);

export default nextConfig;
