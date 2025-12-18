/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TypeScript xatolarini tekshirmasdan Build qilishga ruxsat berish
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint xatolarini ham build paytida o'tkazib yuborish
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;