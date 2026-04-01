import type { NextConfig } from "next";
import { GITHUB_PAGES_REPO } from "./lib/site.config";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(isProd
    ? {
        basePath: `/${GITHUB_PAGES_REPO}`,
        assetPrefix: `/${GITHUB_PAGES_REPO}/`,
      }
    : {}),
};

export default nextConfig;
