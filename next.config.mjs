/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/:shortCode',
            destination: '/api/redirect?code=:shortCode',
          },
        ]
      },
};

export default nextConfig;
