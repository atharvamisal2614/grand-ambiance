/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'lib'], // Adjust this as per your project structure
  },
};

export default nextConfig;
