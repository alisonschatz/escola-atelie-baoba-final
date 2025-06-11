/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'assets.zyrosite.com',
      'cursodecontacaodehistoria.com.br',
      'assets.isu.pub',
      'escolaexperimental.com.br',
      'escoladainteligencia.com.br'
    ]
  },
  trailingSlash: true,
  output: 'export'
}

module.exports = nextConfig