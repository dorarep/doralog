const fs = require("fs");
const RSS = require('rss');
const ssgConfig = require("../amdxg.config");
const pages = require("../gen/pages.json");
const tagmap = require("../gen/tagmap.json");

function generateFeed() {
  const feed = new RSS({
    title: ssgConfig.siteName,
    site_url: ssgConfig.host,
    feed_url: ssgConfig.host + '/feed.xml'
  });
  pages.map(page => {
    feed.item({
      title: page.title,
      guid: page.slug,
      url: ssgConfig.host + '/articles/' + page.slug,
      date: page.created,
      description: page.description,
      author: ssgConfig.author
    })
  });
  const rss = feed.xml({ indent: true });
  fs.writeFileSync('./public/feed.xml', rss)
}

function generateSiteMap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${ssgConfig.host}</loc></url>
        ${pages.map(({ slug }) => `<url><loc>${`${ssgConfig.host}/articles/${slug}`}</loc></url>`)}
        ${Object.keys(tagmap).map(tag => `<url><loc>${`${ssgConfig.host}/tags/${tag}`}</loc></url>`)}
    </urlset>
    `;
  fs.writeFileSync('./public/sitemap.xml', sitemap);
}

generateFeed();
generateSiteMap();
