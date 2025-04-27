import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "https://qr-nextjs-redirect-virid.vercel.app",
        },
      ],
      destination: "https://nextjs-redirect-virid.vercel.app/:path*?source=qr-code",
      permanent: true,
    },
  ],
};

export default nextConfig;
