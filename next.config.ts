import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'https://www.bunnystore.lk',
          },
        ],
        destination: 'https://www.bunnystore.lk/shop',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
