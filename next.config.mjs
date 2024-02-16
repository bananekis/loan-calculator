/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  },
};

export default nextConfig;
