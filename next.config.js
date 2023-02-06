/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SHOW_AGENDA: process.env.SHOW_AGENDA
  }
};

module.exports = nextConfig;
