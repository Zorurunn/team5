/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: "*" }] },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/client",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
