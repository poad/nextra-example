/** @type {import('next').NextConfig} */
import withNextra from 'nextra';
const nextra = withNextra('nextra-theme-docs', './theme.config.js');
import withBundleAnalyzer from '@next/bundle-analyzer';
const analyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const config = analyzer(nextra({
    webpack5: true,
    reactStrictMode: true,
    esmExternals: true,
    swcLoader: true,
    swcMinify: true,
    esmExternals: true,
    experimental: {
        modern: true,
    }
}));

export default config;
