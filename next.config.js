/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    fullName: "Luís Filipe Gonçalves",
    role: "Software Engineer",
    twitterProfile: "https://twitter.com/luisfigoncalves",
    githubProfile: "https://github.com/luisfilipegoncalves",
    linkedinProfile: "https://www.linkedin.com/in/luisfigoncalves",
  }
}

module.exports = nextConfig
