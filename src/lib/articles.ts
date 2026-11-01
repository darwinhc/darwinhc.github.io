import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'posts'> | CollectionEntry<'bisslog'>;

/** Path of an article, keeping the URLs the site already had. */
export function articlePath(entry: Article): string {
  if (entry.data.permalink) {
    const clean = entry.data.permalink.replace(/^\/+|\/+$/g, '');
    return `/${clean}/`;
  }
  const slug = entry.id.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return entry.collection === 'bisslog' ? `/bisslog/${slug}/` : `/posts/${slug}/`;
}

/** Titles without the decorative emoji some older posts start with. */
export function articleTitle(entry: Article): string {
  return entry.data.title.replace(/^[^\p{L}\p{N}]+/u, '').trim();
}

export async function allArticles(): Promise<Article[]> {
  const [posts, bisslog] = await Promise.all([getCollection('posts'), getCollection('bisslog')]);
  return [...posts, ...bisslog].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatMonth(date: Date): string {
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export function formatDay(date: Date): string {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
