/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "encrypted-tbn0.gstatic.com",
      "images.pexels.com",
      "static1.squarespace.com",
      "m.media-amazon.com",
      "hips.hearstapps.com",
      "www.google.com",
      "islamic-relief.org.my",
    ],
  },
};

module.exports = nextConfig;
