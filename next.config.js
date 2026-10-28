/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'seal-austin.bbb.org',
      },
      {
        protocol: 'https',
        hostname: 'collingwoodblogs.hambonepublishers.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/blogs/:slug*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;