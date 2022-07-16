/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  nextConfig
})
