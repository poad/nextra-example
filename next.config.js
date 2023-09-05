const withNextra = require('nextra');
const nextra = withNextra('nextra-theme-docs', './theme.config.js');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = analyzer(nextra(nextConfig));
