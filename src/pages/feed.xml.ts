import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { allArticles, articlePath, articleTitle } from '../lib/articles';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const articles = await allArticles();
  return rss({
    title: `${site.name} — writing`,
    description: 'Backend architecture, real-time systems and the bisslog library.',
    site: context.site ?? 'https://darwinhc.github.io',
    items: articles.map((entry) => ({
      title: articleTitle(entry),
      pubDate: entry.data.date,
      link: articlePath(entry),
      description: entry.data.description,
    })),
  });
}
