/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "framer-motion": "@/lib/framer-motion-shim"
    };

    return config;
  }
};

export default nextConfig;
