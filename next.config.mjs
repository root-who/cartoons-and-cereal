/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[{
      protocol: "https",
      hostname : "raw.githubusercontent.com",
      port: "",
      pathname: "/**"
    }]
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;