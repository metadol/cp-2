/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['cp-site-assets.s3.us-east-1.amazonaws.com'],
    },
};

export default nextConfig;