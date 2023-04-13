/** @type {import('next').NextConfig} */
const hostnames = [
  'placeimg.com',  
  'api.lorem.space',
  'placeimh.com',
  'picsum.photos',
  'upcdn.io',
  'www.elgrafico.com.ar',
  'api.escuelajs.co',
  'educacion30.b-cdn.net',
  'img.freepik.com',
  'media.licdn.com',
  'picsum.photos',
  'placeimg.com',
  'images.pexels.com'
]

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: hostnames.map(host => ({
      protocol: 'https',
      hostname: host
    }))
  }
}

module.exports = nextConfig