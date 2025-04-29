const repoName = 'saifulkhan.github.io'; // repo nameyarn build
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Enable static export for Next.js 13+
  images: {
    unoptimized: true, // Allow static export with images
  },
  // No basePath or assetPrefix for user/organization GitHub Pages!
};
