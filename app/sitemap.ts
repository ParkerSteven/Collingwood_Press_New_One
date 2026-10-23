
import type { MetadataRoute } from 'next';
import { events, toSlug } from '../lib/data';
interface BlogPost {
    slug: string;
    modified?: string;
    date: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = 'https://www.thecollingwoodpress.com';
    const now = new Date();

    // 1. Static Pages
    const staticPages: MetadataRoute.Sitemap = [
        '',
        '/about',
        '/contact',
        '/blogs',
        '/publishing',
        '/editing',
        '/ghostwriting',
        '/marketing',
        '/book-fairs',
        '/audiobook',
        '/privacy-policy',
        '/terms-and-conditions',
        '/ai-and-llm-resources',
        '/team/daniel-drapper',
    ].map((route) => ({
        url: `${siteUrl}${route}/`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Blog Posts (Dynamic)
    let blogPosts: MetadataRoute.Sitemap = [];

    try {
        const res = await fetch(
            'https://collingwoodblogs.hambonepublishers.com/wp-json/wp/v2/posts?per_page=100&_embed',
            {
                next: { revalidate: 60 },
            }
        );

        if (res.ok) {
            const data: BlogPost[] = await res.json();

            blogPosts = data
                .filter((post) => post.slug)
                .map((post) => ({
                    url: `${siteUrl}/blogs/${post.slug}/`,
                    lastModified: new Date(post.modified || post.date),
                    changeFrequency: 'weekly' as const,
                    priority: 0.7,
                }));
        }
    } catch (error: unknown) {
        console.error('Sitemap post fetch error:', error);
    }

    // 3. Dynamic Events
    const eventPages: MetadataRoute.Sitemap = events.map((event: any) => ({
        url: `${siteUrl}/events/${toSlug(event.name)}/`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPosts, ...eventPages];
}
