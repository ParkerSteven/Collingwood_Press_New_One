import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import AnimatedReveal from "@/components/ui/AnimatedReveal";
import BlogCarousel from "../ui/BlogCarousel";

const blogPosts = [
    {
        number: "01",
        image: "/book-editor.png",
        imageAlt: "Book publishing costs and budgeting",
        title: "Book editing guide 2026: stages, costs, and how to hire",
        description:
            "Learn the 5 book editing stages in order, what each costs in 2026, and how to hire the right editor, with checklists for novels, memoirs, and nonfiction.",
        href: "https://www.thecollingwoodpress.com/blogs/book-editing-guide/",
    },
    {
        number: "02",
        image: "/blog-2.png",
        imageAlt: "Professional book marketing strategies",
        title: "How to Publish a Book in 2026: Complete Process & Costs",
        description:
            "Learn how to publish a book in 2026 with real costs, timelines, and publishing paths.",
        href: "https://www.thecollingwoodpress.com/blogs/how-to-publish-a-book-complete-guide/",
    },
    {
        number: "03",
        image: "/third-blog.png",
        imageAlt: "Professional manuscript editing process",
        title: "Book Marketing in 2026: Costs & Strategies to Sell Books",
        description:
            "Plan, budget and launch with a proven book marketing process. Costs, timelines, checklists and strategies for self-published and traditionally published authors.",
        href: "https://www.thecollingwoodpress.com/blogs/book-marketing-guide/",
    },
    {
        number: "04",
        image: "/fourth-blog.png",
        imageAlt: "Book publishing costs and budgeting",
        title: "Book Ghostwriting Guide 2026: Cost, Process & Publishing",
        description:
            "Book ghostwriting guide 2026 covering costs, timelines, contracts, and publishing steps before hiring a professional ghostwriter.",
        href: "https://www.thecollingwoodpress.com/blogs/book-ghostwriting-guide/",
    },
    {
        number: "05",
        image: "/fifthBlog.png",
        imageAlt: "Professional book marketing strategies",
        title: "How Long Does It Take to Publish a Book? 2026 Timeline",
        description:
            "How Long Does It Take to Publish a Book? Check 2026 timelines for self-publishing, traditional publishing, Amazon KDP, and every major step.",
        href: "https://www.thecollingwoodpress.com/blogs/how-long-does-it-take-to-publish-a-book/",
    },
    {
        number: "06",
        image: "/sixBlog.png",
        imageAlt: "Professional manuscript editing process",
        title: "Self Publishing Checklist 2026: 46 Steps to Launch Your Book",
        description:
            "A complete self publishing checklist for 2026. Follow 46 steps and publish your book on Amazon KDP and beyond.",
        href: "https://www.thecollingwoodpress.com/blogs/self-publishing-checklist/",
    },
];

export default function HomeBlogs() {
    return (
        <section
            id="publishing-insights"
            aria-labelledby="publishing-insights-heading"
            className="relative overflow-hidden border-b border-line bg-[#FCFAF7] py-20 lg:py-28"
        >
            <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16">
                {/* Blog Heading */}
                <AnimatedReveal
                    y={20}
                    duration={0.55}
                    className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
                >
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
                            From The Collingwood Press
                        </span>
                    </div>

                    <h2
                        id="publishing-insights-heading"
                        className="font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
                    >
                        Publishing Insights{" "}
                        <span className="italic text-[#E7665D]">
                            &amp; Industry Guides
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl font-sans text-[0.96rem] leading-[1.85] text-ink-muted sm:text-[1.04rem]">
                        The publishing landscape shifts quickly. Stay ahead with
                        practical guides and honest perspectives from our
                        editorial team.
                    </p>
                </AnimatedReveal>

                {/* Carousel */}
                <AnimatedReveal y={24} duration={0.6}>
                    <BlogCarousel totalItems={blogPosts.length}>
                        {blogPosts.map((post) => (
                            <Link
                                key={post.number}
                                href={post.href}
                                data-blog-card
                                draggable={false}
                                className="group block w-full shrink-0 snap-start min-w-0 sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-80px)/5)]"
                            >
                                <article className="flex h-full flex-col overflow-hidden rounded-sm border border-[#E7665D]/20 bg-white shadow-[0_5px_24px_rgba(17,26,48,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#E7665D]/50 group-hover:shadow-[0_12px_32px_rgba(231,102,93,0.15)]">
                                    {/* Blog Image */}
                                    <div className="w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.imageAlt}
                                            width={800}
                                            height={550}
                                            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 20vw"
                                            className="w-full h-auto md:h-[260px] md:object-cover object-center"
                                        />
                                    </div>

                                    {/* Blog Content */}
                                    <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-5 xl:p-6">
                                        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E7665D]">
                                            Publishing Insights
                                        </span>

                                        <h3 className="mt-3 font-serif text-[1.2rem] font-medium leading-[1.25] text-ink transition-colors duration-300 group-hover:text-[#E7665D] lg:text-[1.08rem] xl:text-[1.25rem]">
                                            {post.title}
                                        </h3>

                                        <p className="mt-3 font-sans text-[0.85rem] leading-[1.65] text-ink-muted">
                                            {post.description}
                                        </p>

                                        <div className="mt-auto pt-6">
                                            <div className="border-t border-line/80 pt-5">
                                                <span className="inline-flex items-center gap-2 font-sans text-xs xl:text-sm font-semibold text-[#E7665D] transition-all duration-300 group-hover:gap-3">
                                                    Read the guide
                                                    <ArrowUpRight
                                                        size={17}
                                                        aria-hidden="true"
                                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </BlogCarousel>
                </AnimatedReveal>
            </div>
        </section>
    );
}