/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.media-amazon.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "**.themoviedb.org",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
