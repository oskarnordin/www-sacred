const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/portfolio/about',
        destination: '/portfolio/tech-stack',
        permanent: true,
      },
    ];
  },
}
 
module.exports = nextConfig