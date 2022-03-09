/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REVUE_API_KEY: process.env.REVUE_API_KEY,
    NEXT_PUBLIC_RECAPTCHA_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    SCORE: process.env.SCORE
  }
}

module.exports = nextConfig
