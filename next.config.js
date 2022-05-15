/** @type {import('next').NextConfig} */
const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(withNextra({
    webpack5: true,
    reactStrictMode: true,
    esmExternals: true,
    swcLoader: true,
    swcMinify: true,
    esmExternals: true,
    experimental: {
        modern: true,
    }
}
));
