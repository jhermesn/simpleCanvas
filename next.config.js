/** @type {import('next').NextConfig} */

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
  distDir: "docs",
  basePath: "/simpleCanvas",
    assetPrefix: "/simpleCanvas/",
}

export default nextConfig
