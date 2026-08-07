/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'], minimumCacheTTL: 31536000 },
  experimental: { optimizePackageImports: ['lucide-react'] },
  async headers() {
    return [{ source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] }];
  },
};
export default nextConfig;
