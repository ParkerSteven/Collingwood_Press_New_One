import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    CalendarDays,
    Clock,
    User,
    ArrowRight,
    ArrowLeft,
    ChevronRight,
    BookOpen,
    CheckCircle2,
    Sparkles,
    PhoneCall,
    Share2,
} from 'lucide-react';

import { decodeHTMLEntities } from '@/lib/util';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import BlogShareButtons from '@/components/site/BlogShareButtons';

export const revalidate = 60;

type WordPressTerm = {
    id?: number;
    name?: string;
    slug?: string;
};

type WordPressAuthor = {
    id?: number;
    name?: string;
    description?: string;
    avatar_urls?: Record<string, string>;
};

type WordPressPost = {
    id: number;
    slug: string;
    date: string;
    modified?: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    _embedded?: {
        author?: WordPressAuthor[];
        'wp:featuredmedia'?: Array<{
            source_url?: string;
            alt_text?: string;
        }>;
        'wp:term'?: WordPressTerm[][];
    };
};

type BlogSlugPageProps = {
    params: { slug: string } | Promise<{ slug: string }>;
};

const WP_POSTS_ENDPOINT = 'https://collingwoodblogs.hambonepublishers.com/wp-json/wp/v2/posts';
const WP_REQUEST_HEADERS = {
    Accept: 'application/json',
    'User-Agent': 'CollingwoodPressBlogFetcher/1.0',
};

async function fetchPostBySlug(slug: string): Promise<WordPressPost | null> {
    const params = new URLSearchParams({
        slug: encodeURIComponent(slug),
        _embed: '1',
    });

    const MAX_RETRIES = 3;
    const TIMEOUT_MS = 10000;
    const RETRYABLE = [429, 403, 502, 503, 504, 522, 524];

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
            const fetchUrl = `${WP_POSTS_ENDPOINT}?${params.toString()}`;

            const res = await fetch(fetchUrl, {
                headers: WP_REQUEST_HEADERS,
                signal: controller.signal,
                next: { revalidate: 60 },
            });

            clearTimeout(timeoutId);

            if ((res.status >= 500 || RETRYABLE.includes(res.status)) && attempt < MAX_RETRIES) {
                await new Promise((r) => setTimeout(r, 500 * attempt));
                continue;
            }

            if (!res.ok) {
                return null;
            }

            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                return data[0] as WordPressPost;
            }

            return null;
        } catch (err) {
            if (attempt < MAX_RETRIES) {
                await new Promise((r) => setTimeout(r, 500 * attempt));
                continue;
            }
            console.error('Failed to fetch WordPress post:', err);
            return null;
        }
    }

    return null;
}

async function fetchRecentPosts(excludeSlug: string): Promise<WordPressPost[]> {
    try {
        const params = new URLSearchParams({
            per_page: '4',
            _embed: '1',
        });
        const res = await fetch(`${WP_POSTS_ENDPOINT}?${params.toString()}`, {
            headers: WP_REQUEST_HEADERS,
            next: { revalidate: 120 },
        });

        if (!res.ok) return [];
        const posts = (await res.json()) as WordPressPost[];
        if (!Array.isArray(posts)) return [];
        return posts.filter((p) => p.slug !== excludeSlug).slice(0, 3);
    } catch {
        return [];
    }
}

const plainText = (html = ''): string =>
    decodeHTMLEntities(html.replace(/<[^>]*>/g, '').trim());

const formatDate = (dateString: string): string => {
    try {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    } catch {
        return dateString;
    }
};

const getReadingTime = (html = ''): number => {
    const text = html.replace(/<[^>]*>/g, ' ').trim();
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 225));
};

const getImageUrl = (post: WordPressPost): string => {
    const featured = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const contentImage = post.content?.rendered?.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
    return featured || contentImage || 'https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=1200&auto=format&fit=crop';
};

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
    const resolvedParams = await Promise.resolve(params);
    const post = await fetchPostBySlug(resolvedParams.slug);

    if (!post) {
        return {
            title: 'Article Not Found | The Collingwood Press',
            description: 'The requested article could not be found.',
        };
    }

    const title = plainText(post.title.rendered);
    const excerpt = plainText(post.excerpt.rendered) || `Read ${title} on The Collingwood Press Journal.`;
    const canonicalUrl = `https://www.thecollingwoodpress.com/blog/${post.slug}/`;
    const imageUrl = getImageUrl(post);

    return {
        title: `${title} | The Collingwood Press Journal`,
        description: excerpt.slice(0, 160),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description: excerpt.slice(0, 160),
            url: canonicalUrl,
            siteName: 'The Collingwood Press',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: 'article',
            publishedTime: post.date,
            modifiedTime: post.modified || post.date,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: excerpt.slice(0, 160),
            images: [imageUrl],
        },
    };
}

export default async function BlogPostPage({ params }: BlogSlugPageProps) {
    const resolvedParams = await Promise.resolve(params);
    const post = await fetchPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const recentPosts = await fetchRecentPosts(post.slug);
    const title = plainText(post.title.rendered);
    const formattedDate = formatDate(post.date);
    const readTimeMinutes = getReadingTime(post.content.rendered);
    const featuredImage = getImageUrl(post);
    const authorName = post._embedded?.author?.[0]?.name || 'The Collingwood Press Editorial Board';
    const canonicalUrl = `https://www.thecollingwoodpress.com/blog/${post.slug}/`;

    // Extract categories
    const categories = post._embedded?.['wp:term']?.[0]?.map((term) => term.name).filter(Boolean) || [];
    const primaryCategory = categories[0] || 'Publishing Insights';

    // JSON-LD structured data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: plainText(post.excerpt.rendered),
        image: [featuredImage],
        datePublished: post.date,
        dateModified: post.modified || post.date,
        author: {
            '@type': 'Organization',
            name: authorName,
            url: 'https://www.thecollingwoodpress.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'The Collingwood Press',
            url: 'https://www.thecollingwoodpress.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.thecollingwoodpress.com/Collingwood-Logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
        },
    };

    return (
        <>
            {/* JSON-LD for Search Engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <UtilityBar />
            <Header />

            <main className="min-h-screen bg-[#faf8f5] text-[#181511]">
                {/* Hero / Header Section */}
                <section className="relative overflow-hidden bg-[#0d1527] pt-12 pb-16 text-white sm:pt-16 sm:pb-24 border-b border-white/10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1d2b4f]/60 via-[#0d1527] to-[#070b14] pointer-events-none" />

                    <Container className="relative z-10 max-w-4xl">
                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/70">
                            <Link href="/" className="transition hover:text-white">
                                Home
                            </Link>
                            <ChevronRight className="h-3.5 w-3.5 text-white/40" />
                            <Link href="/blog" className="transition hover:text-white">
                                The Collingwood Press Journal
                            </Link>
                            <ChevronRight className="h-3.5 w-3.5 text-white/40" />
                            <span className="truncate max-w-[220px] sm:max-w-xs text-white/90 font-medium">
                                {title}
                            </span>
                        </nav>

                        {/* Category Badge */}
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E7665D]/30 bg-[#E7665D]/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#F08A82]">
                            <BookOpen className="h-3.5 w-3.5" />
                            {primaryCategory}
                        </div>

                        {/* Article Title */}
                        <h1 className="font-serif text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[42px]">
                            {title}
                        </h1>

                        {/* Post Meta */}
                        <div className="mt-7 flex flex-wrap items-center gap-y-4 gap-x-6 border-t border-white/15 pt-6 text-xs text-white/80">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-[#E7665D]" />
                                <span className="font-medium text-white">{authorName}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-[#E7665D]" />
                                <span>{formattedDate}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-[#E7665D]" />
                                <span>{readTimeMinutes} min read</span>
                            </div>

                            <div className="ml-auto">
                                <BlogShareButtons title={title} url={canonicalUrl} />
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Main Content Area */}
                <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                        {/* Article Body Column */}
                        <article className="lg:col-span-8">
                            {/* Featured Image */}
                            {featuredImage && (
                                <div className="mb-10 overflow-hidden rounded-xl border border-line bg-white shadow-card">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={featuredImage}
                                        alt={title}
                                        className="h-auto w-full max-h-[500px] object-cover"
                                        loading="eager"
                                    />
                                </div>
                            )}

                            {/* Rendered WordPress HTML Content */}
                            <div
                                className="blog-article-content rounded-xl border border-[#ebe4df] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(17,24,39,0.04)]"
                                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                            />

                            {/* Share Strip & Article Footer */}
                            <div className="mt-10 rounded-lg border border-[#e8e0dc] bg-white p-6 shadow-sm">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                                        <Share2 className="h-4 w-4 text-[#E7665D]" />
                                        <span>Found this valuable? Share with fellow writers:</span>
                                    </div>
                                    <BlogShareButtons title={title} url={canonicalUrl} />
                                </div>
                            </div>

                            {/* Author Bio Box */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-5 rounded-xl border border-[#e8e0dc] bg-[#fffefa] p-7 shadow-sm">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0d1527] text-white font-serif text-xl font-bold shadow-md">
                                    CP
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#E7665D]">
                                        Editorial Authority
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-ink">
                                        The Collingwood Press Editorial Team
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                                        The Collingwood Press is an author-first hybrid publishing house dedicated to bringing transformative fiction, non-fiction, and memoirs into the global literary marketplace. Authors retain 100% rights, creative ownership, and royalty earnings while working with seasoned editors, book designers, and marketing strategists.
                                    </p>
                                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#E7665D]">
                                        <Link href="/about-us" className="inline-flex items-center gap-1 hover:underline">
                                            Learn About Our Editorial Standards <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Back to Blog Button */}
                            <div className="mt-10">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 rounded-sm border border-line bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink transition hover:border-[#E7665D] hover:text-[#E7665D] shadow-subtle"
                                >
                                    <ArrowLeft className="h-4 w-4" /> Back to All Articles
                                </Link>
                            </div>
                        </article>

                        {/* Sidebar Column */}
                        <aside className="lg:col-span-4 space-y-8">
                            {/* Sticky Manuscript Consultation Card */}
                            <div className="sticky top-28 space-y-6">
                                <div className="rounded-xl border border-[#E7665D]/30 bg-gradient-to-b from-[#fffefe] to-[#fbf7f4] p-6 shadow-[0_10px_30px_rgba(231,102,93,0.08)]">
                                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E7665D]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E7665D]">
                                        <Sparkles className="h-3 w-3" /> Manuscript Review
                                    </div>

                                    <h3 className="mt-4 font-serif text-2xl font-bold text-ink leading-snug">
                                        Ready to Publish Your Book?
                                    </h3>

                                    <p className="mt-2.5 text-xs leading-relaxed text-ink-soft">
                                        Get a professional assessment of your manuscript from our senior editorial team. We review structure, market positioning, and publishing readiness with zero obligation.
                                    </p>

                                    <ul className="mt-5 space-y-2.5 text-xs text-ink-soft">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E7665D] mt-0.5" />
                                            <span>Keep 100% of your copyright and royalties</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E7665D] mt-0.5" />
                                            <span>Full editorial, cover design, and formatting</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E7665D] mt-0.5" />
                                            <span>Global distribution to Amazon, B&N, IngramSpark</span>
                                        </li>
                                    </ul>

                                    <div className="mt-6 pt-5 border-t border-line/60">
                                        <Button
                                            href="/contact-us"
                                            variant="primary"
                                            size="sm"
                                            className="w-full justify-center text-xs font-semibold py-3"
                                        >
                                            Get Free Manuscript Review <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                                        </Button>

                                        <div className="mt-3.5 flex items-center justify-center gap-2 text-[11px] text-ink-muted">
                                            <PhoneCall className="h-3 w-3 text-[#E7665D]" />
                                            <span>Direct Press Line: </span>
                                            <a href="tel:+19362233644" className="font-semibold text-ink hover:text-[#E7665D]">
                                                +1 (936) 223-3644
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Navigation / Category Info */}
                                <div className="rounded-xl border border-line bg-white p-6 shadow-card">
                                    <h4 className="font-serif text-lg font-bold text-ink border-b border-line pb-3">
                                        Publishing Resources
                                    </h4>
                                    <div className="mt-4 flex flex-col divide-y divide-line/60 text-xs">
                                        <Link href="/publishing" className="py-2.5 font-medium text-ink-soft hover:text-[#E7665D] transition flex items-center justify-between">
                                            <span>Book Publishing Services</span>
                                            <ChevronRight className="h-3.5 w-3.5 text-ink-muted" />
                                        </Link>
                                        <Link href="/editing" className="py-2.5 font-medium text-ink-soft hover:text-[#E7665D] transition flex items-center justify-between">
                                            <span>Developmental & Copy Editing</span>
                                            <ChevronRight className="h-3.5 w-3.5 text-ink-muted" />
                                        </Link>
                                        <Link href="/ghostwriting" className="py-2.5 font-medium text-ink-soft hover:text-[#E7665D] transition flex items-center justify-between">
                                            <span>Professional Ghostwriting</span>
                                            <ChevronRight className="h-3.5 w-3.5 text-ink-muted" />
                                        </Link>
                                        <Link href="/marketing" className="py-2.5 font-medium text-ink-soft hover:text-[#E7665D] transition flex items-center justify-between">
                                            <span>Book Launch & Marketing</span>
                                            <ChevronRight className="h-3.5 w-3.5 text-ink-muted" />
                                        </Link>
                                        <Link href="/audiobook" className="py-2.5 font-medium text-ink-soft hover:text-[#E7665D] transition flex items-center justify-between">
                                            <span>Audiobook Production</span>
                                            <ChevronRight className="h-3.5 w-3.5 text-ink-muted" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* Related Articles Section */}
                {recentPosts.length > 0 && (
                    <section className="border-t border-[#ded8d3] bg-[#f5f0e9]/50 py-16 sm:py-20">
                        <Container className="max-w-6xl">
                            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                                <div>
                                    <div className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#E7665D]">
                                        Continue Reading
                                    </div>
                                    <h2 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                        More Publishing Insights
                                    </h2>
                                </div>
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E7665D] hover:underline"
                                >
                                    View All Articles <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
                                {recentPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        href={`/blog/${relatedPost.slug}/`}
                                        className="group flex h-full flex-col overflow-hidden rounded-md border border-[#eae4df] bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden bg-[#eeece8]">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={getImageUrl(relatedPost)}
                                                alt={plainText(relatedPost.title.rendered)}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#E7665D] transition-all duration-500 group-hover:w-full" />
                                        </div>
                                        <div className="flex flex-1 flex-col p-6">
                                            <span className="mb-3 flex items-center gap-1.5 text-xs text-ink-muted">
                                                <CalendarDays className="h-3.5 w-3.5 text-[#E7665D]" />{' '}
                                                {formatDate(relatedPost.date)}
                                            </span>
                                            <h3 className="line-clamp-2 font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-[#E7665D]">
                                                {plainText(relatedPost.title.rendered)}
                                            </h3>
                                            <p className="mt-3 line-clamp-3 flex-1 text-xs leading-relaxed text-ink-soft">
                                                {plainText(relatedPost.excerpt.rendered)}
                                            </p>
                                            <span className="mt-5 inline-flex items-center gap-1.5 border-t border-line/60 pt-4 text-[11px] font-bold uppercase tracking-wider text-[#E7665D]">
                                                Read Article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Container>
                    </section>
                )}

                {/* Bottom Call to Action */}
                <section className="relative overflow-hidden bg-[#10182b] px-5 py-16 text-center text-white sm:px-8 sm:py-20">
                    <div className="relative mx-auto max-w-2xl">
                        <p className="text-[11px] font-bold uppercase tracking-[0.23em] text-[#ef8279]">
                            Your Author Journey Starts Here
                        </p>
                        <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
                            Ready to Turn Your Manuscript into a Published Book?
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#c4ccda]">
                            Speak with our publishing strategists about editing, cover design, global distribution, and marketing tailored to your book.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Button
                                href="/contact-us"
                                variant="primary"
                                size="md"
                                className="font-semibold px-7 py-3.5 text-xs uppercase tracking-wider"
                            >
                                Get My Free Manuscript Review <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                            <Link
                                href="/about-us"
                                className="inline-flex items-center gap-2 rounded-xs border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
                            >
                                Why Authors Choose Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
