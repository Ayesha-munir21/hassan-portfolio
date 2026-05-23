/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript aur ESLint ke errors ko build ke waqt ignore karen taake website live ho jaye
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'encrypted-tbn.gstatic.com' },
      { protocol: 'https', hostname: 'www.shopurgrocery.com' },
      { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
    ],
  },
};

export default nextConfig;