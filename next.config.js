/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com", "rana-twitter-dev.s3.ap-south-1.amazonaws.com", "http://3.6.98.64:8000/graphql"]
  }
}

module.exports = nextConfig
