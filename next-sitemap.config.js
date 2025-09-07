/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rezuanulislamfahim.me',
  generateRobotsText: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: ['https://rezuanulislamfahim.me/sitemap.xml'],
  },

  transform: async (config, path) => {
    // Define priority and change frequency for different paths
    const priorityMap = {
      '/': 1.0,
      '/about': 0.8,
      '/projects': 0.9,
      '/services': 0.8,
      '/contact': 0.7,
    }

    const changeFreqMap = {
      '/': 'weekly',
      '/about': 'monthly',
      '/projects': 'weekly',
      '/services': 'monthly',
      '/contact': 'monthly',
    }

    return {
      loc: path,
      changefreq: changeFreqMap[path] || 'monthly',
      priority: priorityMap[path] || 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
