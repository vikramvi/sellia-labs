require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
// next.js configuration
const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      core: '@headless/core',
    };
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ['@headless/core', 'reusecore'],
      },
    ],
    withOptimizedImages,
    withFonts,
    withCSS,
  ],
  nextConfig
);
