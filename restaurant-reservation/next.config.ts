/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Isso injeta a variável privada no lado do cliente com o nome que você já usa!
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;