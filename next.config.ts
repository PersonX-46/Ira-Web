const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },{
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ], // Allow images from the specified remote hosts
  },

  eslint: {
    // Warning: This allows production builds to successfully complete
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

