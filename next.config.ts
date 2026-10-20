import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  // GitHub Pages solo sirve archivos estáticos: `npm run build` genera la carpeta out/.
  output: "export",
  // En Pages el sitio vive en /infra-ticket-ai; el workflow de despliegue define esta variable.
  basePath: process.env.PAGES_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
