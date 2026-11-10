
import type { MetadataRoute } from 'next';

interface BlogPost {
    slug: string;
    modified?: string;
    date: string;
}

const siteUrl = 'https://www.thecollingwoodpress.com';

const withTrailingSlash = (path: string): string => {
    const cleanPath = path.replace(/^\/+|\/+$/g, '');

    return cleanPath
        ? `${siteUrl}/${cleanPath}/`
        : `${siteUrl}/`;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    // 1. Static Pages
    const staticRoutes = [
        { path: '', priority: 1.0 },
        { path: '/about', priority: 0.8 },
        { path: '/contact', priority: 0.8 },
        { path: '/blogs', priority: 0.8 },
        { path: '/publishing', priority: 0.9 },
        { path: '/editing', priority: 0.9 },
        { path: '/ghostwriting', priority: 0.9 },
        { path: '/marketing', priority: 0.9 },
        { path: '/audiobook', priority: 0.9 },
        { path: '/privacy-policy', priority: 0.3 },
        { path: '/terms-and-conditions', priority: 0.3 },
        { path: '/ai-and-llm-resources', priority: 0.8 },
        { path: '/team/daniel-drapper', priority: 0.8 },
    ];

    const staticPages: MetadataRoute.Sitemap =
        staticRoutes.map(({ path, priority }) => ({
            url: withTrailingSlash(path),
            lastModified: now,
            changeFrequency: 'weekly',
            priority,
        }));

    // 2. Dynamic WordPress Blog Posts
    const blogPosts: MetadataRoute.Sitemap = [];

    try {
        const apiUrl =
            'https://collingwoodblogs.hambonepublishers.com/wp-json/wp/v2/posts';

        let page = 1;

        while (true) {
            const res = await fetch(
                `${apiUrl}?per_page=100&page=${page}&_fields=slug,modified,date`,
                {
                    next: { revalidate: 60 },
                }
            );

            if (!res.ok) {
                console.error('Sitemap fetch failed:', res.status);
                break;
            }

            const posts: BlogPost[] = await res.json();

            for (const post of posts) {
                if (!post.slug) continue;

                const modifiedDate = new Date(
                    post.modified || post.date
                );

                blogPosts.push({
                    url: withTrailingSlash(`/blogs/${post.slug}`),
                    lastModified: Number.isNaN(modifiedDate.getTime())
                        ? now
                        : modifiedDate,
                    changeFrequency: 'weekly',
                    priority: 0.7,
                });
            }

            if (posts.length < 100) break;

            page++;
        }
    } catch (error) {
        console.error('Sitemap fetch error:', error);
    }

    return [...staticPages, ...blogPosts];
}
