/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://example.com",
      "example.com",
      "https://img.freepik.com",
      "img.freepik.com",
      "fps.cdnpk.net",
    ],
  },
};

export default nextConfig;
