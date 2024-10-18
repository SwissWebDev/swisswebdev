const siteUrl = "https://swisswebdev.ch";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/live-demo/online-shop/*" },
      { userAgent: "*", allow: "/" },
    ],
  },
  exclude: ["public/robots.txt", "public/sitemap.xml"],
};
