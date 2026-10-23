import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { decodeHTMLEntities } from '@/lib/util';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';

type BlogSearchParams = {
    page?: string | string[];
};

type BlogsPageProps = {
    searchParams?: BlogSearchParams | Promise<BlogSearchParams>;
};

type WordPressTerm = {
    id?: number;
    name?: string;
    slug?: string;
};

type WordPressPost = {
    id: number;
    slug: string;
    date: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content?: { rendered: string };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url?: string }>;
        'wp:term'?: WordPressTerm[][];
    };
};

type PostsPageResult =
    | { ok: true; posts: WordPressPost[]; totalPages: number }
    | { ok: false; status: number; isInvalidPageNumber?: boolean; totalPages?: number };

export const revalidate = 60;

/**
 * Safely parses and validates the `page` query parameter.
 * Defaults to 1 for missing, negative, non-numeric, or invalid values.
 */
async function parseCurrentPage(
    searchParams?: BlogSearchParams | Promise<BlogSearchParams>
): Promise<number> {
    const resolved = searchParams ? await Promise.resolve(searchParams) : undefined;
    const rawPage = Array.isArray(resolved?.page)
        ? resolved.page[0]
        : resolved?.page;

    if (!rawPage || typeof rawPage !== 'string') {
        return 1;
    }

    const trimmed = rawPage.trim();
    if (!/^\d+$/.test(trimmed)) {
        return 1;
    }

    const parsed = Number.parseInt(trimmed, 10);
    return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;
}

export async function generateMetadata({ searchParams }: BlogsPageProps): Promise<Metadata> {
    const currentPage = await parseCurrentPage(searchParams);
    const canonicalUrl = currentPage > 1
        ? `https://www.thecollingwoodpress.com/blogs/?page=${currentPage}`
        : 'https://www.thecollingwoodpress.com/blogs/';

    return {
        alternates: {
            canonical: canonicalUrl,
        },
        title: currentPage > 1
            ? `The Publishing Blueprint (Page ${currentPage}) | The Collingwood Press Blog`
            : 'The Publishing Blueprint | The Collingwood Press Blog',
        description: 'Mastering the art of modern publishing. Expert strategies, industry trends, and exclusive stories to elevate your book.',
    };
}

const POSTS_PER_PAGE = 10;
const WP_POSTS_ENDPOINT = 'https://collingwoodblogs.hambonepublishers.com/wp-json/wp/v2/posts';
const WP_REQUEST_HEADERS = {
    Accept: 'application/json',
    'User-Agent': 'CollingwoodPressBlogFetcher/1.0',
};

function buildBlogPageHref(page: number): string {
    if (page <= 1) {
        return '/blogs';
    }

    return `/blogs?page=${page}`;
}

function getVisiblePages(currentPage: number, totalPages: number): (number | 'ellipsis')[] {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | 'ellipsis')[] = [];
    pages.push(1);

    if (currentPage > 3) {
        pages.push('ellipsis');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (currentPage < totalPages - 2) {
        pages.push('ellipsis');
    }

    pages.push(totalPages);
    return pages;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
    let currentPage = await parseCurrentPage(searchParams);

    let posts: WordPressPost[] = [];
    let totalPages = 1;
    let fetchError = false;

    try {
        const fetchPostsPage = async (page: number): Promise<PostsPageResult> => {
            const params = new URLSearchParams({
                _embed: '1',
                page: String(page),
                per_page: String(POSTS_PER_PAGE),
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

                    // Retry on transient server errors
                    if ((res.status >= 500 || RETRYABLE.includes(res.status)) && attempt < MAX_RETRIES) {
                        console.warn(`WP API returned ${res.status} on attempt ${attempt}, retrying...`);
                        await new Promise((r) => setTimeout(r, 500 * attempt));
                        continue;
                    }

                    if (!res.ok) {
                        const body = await res.text();
                        let isInvalidPage = false;
                        try {
                            const parsed = JSON.parse(body);
                            if (parsed?.code === 'rest_post_invalid_page_number') {
                                isInvalidPage = true;
                            }
                        } catch {
                            // not JSON
                        }

                        const totalPagesHeader = res.headers.get('X-WP-TotalPages');
                        const headerTotal = Number.parseInt(totalPagesHeader || '1', 10) || 1;

                        if (isInvalidPage) {
                            return {
                                ok: false,
                                status: res.status,
                                isInvalidPageNumber: true,
                                totalPages: headerTotal,
                            };
                        }

                        console.error('WordPress API failed:', {
                            status: res.status,
                            url: fetchUrl,
                            response: body.slice(0, 500),
                        });

                        return { ok: false, status: res.status, totalPages: headerTotal };
                    }

                    const contentType = res.headers.get('content-type') || '';

                    if (!contentType.toLowerCase().includes('application/json')) {
                        const responseBody = await res.text();

                        console.error('WORDPRESS API INVALID RESPONSE', {
                            status: res.status,
                            contentType,
                            url: fetchUrl,
                            bodyPreview: responseBody.slice(0, 500),
                        });

                        if (attempt < MAX_RETRIES) {
                            await new Promise((r) => setTimeout(r, 1000 * attempt));
                            continue;
                        }

                        return { ok: false, status: res.status };
                    }

                    const totalPagesHeader = res.headers.get('X-WP-TotalPages');
                    const parsedPosts = await res.json();

                    return {
                        ok: true,
                        posts: Array.isArray(parsedPosts) ? (parsedPosts as WordPressPost[]) : [],
                        totalPages: Number.parseInt(totalPagesHeader || '1', 10) || 1,
                    };
                } catch (retryError) {
                    if (attempt < MAX_RETRIES) {
                        console.warn(
                            `WP API fetch error on attempt ${attempt}: ${retryError instanceof Error ? retryError.message : String(retryError)
                            }, retrying...`
                        );
                        await new Promise((r) => setTimeout(r, 500 * attempt));
                        continue;
                    }
                    throw retryError;
                }
            }
            return { ok: false, status: 0 };
        };

        let response = await fetchPostsPage(currentPage);

        // If the requested page exceeds total available pages, gracefully fall back to page 1
        if (!response.ok && response.isInvalidPageNumber && currentPage > 1) {
            currentPage = 1;
            response = await fetchPostsPage(1);
        }

        if (response.ok) {
            posts = response.posts;
            totalPages = response.totalPages;
            currentPage = Math.min(currentPage, totalPages);
        } else {
            fetchError = true;
        }
    } catch (error) {
        console.error('Failed to fetch WP API after all retries:', error);
        fetchError = true;
    }

    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Prefer WordPress featured media; fall back to the first image in post content.
    const getImageUrl = (post: WordPressPost): string => {
        const featured = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        const contentImage = post.content?.rendered?.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
        return featured || contentImage || 'https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=1200&auto=format&fit=crop';
    };

    const plainText = (html: string): string =>
        decodeHTMLEntities(html.replace(/<[^>]*>/g, '').trim());

    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
        <>
            <UtilityBar />
            <Header />
            <main className="min-h-screen bg-[#faf8f5] text-[#18233a]">
                <HeroSection
                    className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white"
                    eyebrow="The Collingwood Press Journal"
                    title="Stories, Ideas &"
                    highlightText="Publishing Insights."
                    description={
                        <p>
                            Expert advice, author success stories, and practical
                            guidance to help you write, publish, and share your
                            story with the world.
                        </p>
                    }
                    buttons={[
                        {
                            text: 'Explore Articles',
                            href: '#latest-articles',
                        },
                    ]}
                    guarantees={[]}
                />

                <section id="latest-articles" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
                    <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#dededb] pb-7 sm:flex-row sm:items-end">
                        <div>
                            <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.19em] text-[#e76860]">
                                <span className="h-px w-7 bg-[#e76860]" /> From Our Journal
                            </div>
                            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#18233a] sm:text-4xl">
                                {currentPage === 1 ? 'Latest Publishing Articles' : `Publishing Articles – Page ${currentPage}`}
                            </h2>
                            <p className="mt-3 text-sm leading-7 text-[#697180]">
                                Insights and inspiration for every chapter of your author journey.
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#e8e0dc] bg-white px-4 py-2 text-xs font-semibold text-[#646b77] sm:self-auto">
                            <BookOpen className="h-4 w-4 text-[#e76860]" /> Page {currentPage} of {totalPages}
                        </div>
                    </div>

                    {fetchError && (
                        <div className="rounded-lg border border-[#f0c6c1] bg-[#fff6f4] px-8 py-16 text-center">
                            <h3 className="font-serif text-2xl font-bold">Unable to Load Blogs</h3>
                            <p className="mt-3 text-sm text-[#697180]">Please try again in a little while.</p>
                        </div>
                    )}

                    {!fetchError && posts.length === 0 && (
                        <div className="rounded-lg border border-[#e8e0dc] bg-white px-8 py-20 text-center">
                            <BookOpen className="mx-auto h-8 w-8 text-[#e76860]" />
                            <h3 className="mt-5 font-serif text-2xl font-bold">No articles found</h3>
                            <p className="mt-3 text-sm text-[#697180]">Check back soon for new publishing insights.</p>
                        </div>
                    )}

                    {!fetchError && featuredPost && (
                        <div className="mb-14 overflow-hidden rounded-lg border border-[#ebe4df] bg-white shadow-[0_14px_45px_rgba(17,24,39,0.055)]">
                            <Link href={`/blogs/${featuredPost.slug}/`} className="group grid md:grid-cols-2">
                                <div className="relative h-[220px] sm:h-[260px] md:h-auto overflow-hidden ">
                                    <img
                                        src={getImageUrl(featuredPost)}
                                        alt={plainText(featuredPost.title.rendered)}
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
                                    />

                                    <span className="absolute left-5 top-5 z-10 rounded-sm bg-[#eb6c63] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                                        Featured Story
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-14">
                                    <span className="mb-5 flex items-center gap-2 text-xs font-medium text-[#7d8490]">
                                        <CalendarDays className="h-4 w-4 text-[#eb6c63]" /> {formatDate(featuredPost.date)}
                                    </span>
                                    <h3 className="font-serif text-3xl font-bold leading-tight text-[#172238] transition-colors group-hover:text-[#d85b53] sm:text-4xl">
                                        {plainText(featuredPost.title.rendered)}
                                    </h3>
                                    <p className="mt-5 line-clamp-4 text-sm leading-8 text-[#717784] sm:text-base">
                                        {plainText(featuredPost.excerpt.rendered)}
                                    </p>
                                    <span className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-[#e26860]">
                                        Read Full Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    )}

                    {!fetchError && otherPosts.length > 0 && (
                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                            {otherPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blogs/${post.slug}/`}
                                    className="group flex h-full flex-col overflow-hidden rounded-md border border-[#eae4df] bg-white shadow-[0_6px_20px_rgba(17,24,39,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(17,24,39,0.1)]"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#eeece8]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={getImageUrl(post)}
                                            alt={plainText(post.title.rendered)}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#eb6c63] transition-all duration-500 group-hover:w-full" />
                                    </div>
                                    <div className="flex flex-1 flex-col p-7">
                                        <span className="mb-4 flex items-center gap-2 text-xs text-[#838995]">
                                            <CalendarDays className="h-4 w-4 text-[#e96961]" /> {formatDate(post.date)}
                                        </span>
                                        <h3 className="line-clamp-3 font-serif text-[23px] font-bold leading-[1.32] text-[#172238] transition-colors group-hover:text-[#d85b53]">
                                            {plainText(post.title.rendered)}
                                        </h3>
                                        <p className="mt-4 line-clamp-3 flex-1 text-sm leading-7 text-[#737a85]">
                                            {plainText(post.excerpt.rendered)}
                                        </p>
                                        <span className="mt-7 inline-flex items-center gap-2 border-t border-[#eee9e6] pt-5 text-[11px] font-bold uppercase tracking-widest text-[#e26860]">
                                            Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {!fetchError && posts.length > 0 && totalPages > 1 && (
                        <nav aria-label="Blog pagination" className="mt-14 flex flex-wrap items-center justify-center gap-2">
                            {/* Previous Page Button */}
                            <Link
                                href={buildBlogPageHref(Math.max(1, currentPage - 1))}
                                aria-disabled={currentPage === 1}
                                tabIndex={currentPage === 1 ? -1 : undefined}
                                className={`inline-flex h-11 items-center gap-1 rounded-sm border px-4 text-xs font-bold transition-colors ${currentPage === 1
                                    ? 'pointer-events-none border-[#e4e0dd] text-[#b3b5b8]'
                                    : 'border-[#ded8d3] bg-white text-[#172238] hover:border-[#eb6c63] hover:text-[#eb6c63]'
                                    }`}
                            >
                                <ChevronLeft className="h-4 w-4" /> Previous
                            </Link>

                            {/* Page Number Buttons */}
                            {getVisiblePages(currentPage, totalPages).map((pageItem, idx) => {
                                if (pageItem === 'ellipsis') {
                                    return (
                                        <span
                                            key={`ellipsis-${idx}`}
                                            className="inline-flex h-11 min-w-11 items-center justify-center px-2 text-xs font-bold text-[#8d929b]"
                                        >
                                            …
                                        </span>
                                    );
                                }

                                const pageNumber = pageItem as number;
                                const isCurrent = pageNumber === currentPage;

                                return (
                                    <Link
                                        key={pageNumber}
                                        href={buildBlogPageHref(pageNumber)}
                                        aria-current={isCurrent ? 'page' : undefined}
                                        className={`inline-flex h-11 min-w-11 items-center justify-center rounded-sm border px-3 text-xs font-bold transition-colors ${isCurrent
                                            ? 'border-[#eb6c63] bg-[#eb6c63] text-white shadow-sm'
                                            : 'border-[#ded8d3] bg-white text-[#172238] hover:border-[#eb6c63] hover:text-[#eb6c63]'
                                            }`}
                                    >
                                        {pageNumber}
                                    </Link>
                                );
                            })}

                            {/* Next Page Button */}
                            <Link
                                href={buildBlogPageHref(Math.min(totalPages, currentPage + 1))}
                                aria-disabled={currentPage === totalPages}
                                tabIndex={currentPage === totalPages ? -1 : undefined}
                                className={`inline-flex h-11 items-center gap-1 rounded-sm border px-4 text-xs font-bold transition-colors ${currentPage === totalPages
                                    ? 'pointer-events-none border-[#e4e0dd] text-[#b3b5b8]'
                                    : 'border-[#ded8d3] bg-white text-[#172238] hover:border-[#eb6c63] hover:text-[#eb6c63]'
                                    }`}
                            >
                                Next <ChevronRight className="h-4 w-4" />
                            </Link>
                        </nav>
                    )}
                </section>

                <section className="relative overflow-hidden bg-[#10182b] px-5 py-16 text-center text-white sm:px-8 sm:py-20">
                    <div className="relative mx-auto max-w-2xl">
                        <p className="text-[11px] font-bold uppercase tracking-[0.23em] text-[#ef8279]">Your Story Matters</p>
                        <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">Ready to Publish Your Book?</h2>
                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#c4ccda]">
                            Turn your manuscript into a published book with a team that understands your vision.
                        </p>
                        <Link
                            href="/contact-us"
                            className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#eb6c63] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#d85850]"
                        >
                            Let&apos;s Talk About Your Book <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
