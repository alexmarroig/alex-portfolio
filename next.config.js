import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["framer-motion"] = path.resolve("./lib/framer-motion-shim.tsx");
    return config;
  }
};

export default nextConfig;
