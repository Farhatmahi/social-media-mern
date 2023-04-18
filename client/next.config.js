/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "encrypted-tbn0.gstatic.com",
      "images.pexels.com",
      "static1.squarespace.com",
      "m.media-amazon.com"
    ],
  },
};

module.exports = nextConfig;
