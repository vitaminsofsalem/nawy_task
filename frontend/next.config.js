/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'os.alipayobjects.com',
        port: '',
        pathname: '*',
      },
    ],
  },
};

module.exports = nextConfig;
