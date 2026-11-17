import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole site prerenders, so it can be hosted on any
  // static host (DigitalOcean static site, Vercel, S3) with no Node server.
  output: "export",
  // Directory-style URLs (/about/index.html) so clean URLs work on every host,
  // not just the ones that guess ".html" for you.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
