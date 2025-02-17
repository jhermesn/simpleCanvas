/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repositoryName = "simpleCanvas";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? `/${repositoryName}` : "",
  assetPrefix: isProd ? `/${repositoryName}/` : "",
}

export default nextConfig
