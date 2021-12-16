const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra({
    webpack5: true,
    reactStrictMode: false,
    esmExternals: true,
})