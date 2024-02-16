/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  },
};

export default nextConfig;
