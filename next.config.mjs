/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
