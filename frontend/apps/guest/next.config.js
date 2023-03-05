const withTM = require('next-transpile-modules')(['@anidge/global'])

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  pageExtensions: ['page.tsx', 'page.ts'],
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
