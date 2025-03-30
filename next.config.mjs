/**@type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/**'
            }
        ],
        formats: ['image/avif', 'image/webp'], // Enable modern image formats
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
        ];
    },
    experimental: {
        optimizeCss: true, // Optimize CSS
    },
};

export default nextConfig;
