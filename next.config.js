/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

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
      // 1. Redirect truncated blog slug
      {
        source: '/blogs/dont-judge-a-book-by-its-co',
        destination: '/blogs/dont-judge-a-book-by-its-cover/',
        permanent: true,
      },
      {
        source: '/blog/dont-judge-a-book-by-its-co',
        destination: '/blogs/dont-judge-a-book-by-its-cover/',
        permanent: true,
      },

      // 2. Redirect outdated long blog slug
      {
        source: '/blogs/how-professional-book-edits-transforms-rough-drafts-into-bestsellers',
        destination: '/blogs/book-edits-turn-drafts-into-bestsellers/',
        permanent: true,
      },
      {
        source: '/blog/how-professional-book-edits-transforms-rough-drafts-into-bestsellers',
        destination: '/blogs/book-edits-turn-drafts-into-bestsellers/',
        permanent: true,
      },

      // 3. Redirect outdated audiobook service routes
      {
        source: '/audiobook-services',
        destination: '/audiobook/',
        permanent: true,
      },
      {
        source: '/blogs/audiobook-services',
        destination: '/audiobook/',
        permanent: true,
      },
      {
        source: '/blog/audiobook-services',
        destination: '/audiobook/',
        permanent: true,
      },

      // 4. Existing generic blog redirects
      {
        source: '/blog',
        destination: '/blogs/',
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