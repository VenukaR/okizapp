/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://okiz.app',
  generateRobotsText: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/_next/*'],
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
      }
    ],
    additionalSitemaps: [
      'https://okiz.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on page type
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/students' || path === '/shops') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};