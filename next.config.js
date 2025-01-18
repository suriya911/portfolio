/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode and SWC minification for performance and code quality
  reactStrictMode: true,
  swcMinify: true,

  // Custom Webpack configuration
  webpack(config) {
    // Add rule for handling .svg files with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i, // Match SVG files
      issuer: /\.[jt]sx?$/, // Apply to files importing SVGs (JSX/TSX files)
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // SVGR options (customize as needed)
            prettier: true,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      // Disable specific optimizations if needed
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },

  // Optionally ignore ESLint during builds
  eslint: {
    ignoreDuringBuilds: true, // Temporary measure; fix linting issues in your codebase
  },
};

module.exports = nextConfig;
