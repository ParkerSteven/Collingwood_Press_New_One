"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";


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
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(2);
    const [cardsPerPage, setCardsPerPage] = useState(5);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Mouse drag support
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftPos, setScrollLeftPos] = useState(0);
    const hasMoved = useRef(false);

    const getPerView = () => {
        if (typeof window === "undefined") return 5;
        if (window.innerWidth >= 1024) return 5;
        if (window.innerWidth >= 640) return 2;
        return 1;
    };

    const checkScrollState = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll <= 0) {
            setCurrentPage(0);
            return;
        }

        const perView = getPerView();
        const pages = Math.ceil(blogPosts.length / perView);
        const ratio = scrollLeft / maxScroll;
        const pageIdx = Math.min(
            pages - 1,
            Math.max(0, Math.round(ratio * (pages - 1)))
        );
        setCurrentPage(pageIdx);
    }, []);

    const updateMetrics = useCallback(() => {
        const perView = getPerView();
        setCardsPerPage(perView);
        const pages = Math.ceil(blogPosts.length / perView);
        setTotalPages(pages);
        checkScrollState();
    }, [checkScrollState]);

    useEffect(() => {
        updateMetrics();
        window.addEventListener("resize", updateMetrics);
        return () => window.removeEventListener("resize", updateMetrics);
    }, [updateMetrics]);

    const goToPage = (pageIndex: number) => {
        const el = scrollRef.current;
        if (!el) return;
        const perView = getPerView();
        const targetCardIdx = pageIndex * perView;
        const cards = el.querySelectorAll<HTMLElement>("[data-blog-card]");

        if (cards[targetCardIdx]) {
            const card = cards[targetCardIdx];
            card.scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest",
            });
        } else {
            const maxScroll = el.scrollWidth - el.clientWidth;
            const targetScroll = (pageIndex / Math.max(1, totalPages - 1)) * maxScroll;
            el.scrollTo({
                left: targetScroll,
                behavior: "smooth",
            });
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            goToPage(currentPage - 1);
        } else {
            goToPage(totalPages - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            goToPage(currentPage + 1);
        } else {
            goToPage(0);
        }
    };

    // Drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        hasMoved.current = false;
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeftPos(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.3;
        if (Math.abs(walk) > 5) {
            hasMoved.current = true;
        }
        scrollRef.current.scrollLeft = scrollLeftPos - walk;
    };

    const handleMouseUpOrLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            checkScrollState();
        }
    };

    return (
        <section
            id="publishing-insights"
            aria-labelledby="publishing-insights-heading"
            className="relative overflow-hidden border-b border-line bg-[#FCFAF7] py-20 lg:py-28"
        >
            <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16">
                {/* Blog Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
                >
                    <div className="mb-5 flex items-center justify-center gap-3">
                        {/* <span className="h-px w-8 bg-[#E7665D]" /> */}

                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
                            From The Collingwood Press
                        </span>

                        {/* <span className="h-px w-8 bg-[#E7665D]" /> */}
                    </div>

                    <h2
                        id="publishing-insights-heading"
                        className="font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
                    >
                        Publishing Insights{" "}
                        <span className="italic text-[#E7665D]">
                            & Industry Guides
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl font-sans text-[0.96rem] leading-[1.85] text-ink-muted sm:text-[1.04rem]">
                        The publishing landscape shifts quickly. Stay
                        ahead with practical guides and honest
                        perspectives from our editorial team.
                    </p>
                </motion.div>

                {/* Carousel Wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Carousel Track with Side Arrows */}
                    <div className="relative">
                        {/* Floating Side Arrow — Prev (Desktop / Tablet) */}
                        <button
                            id="blog-prev-btn"
                            type="button"
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            aria-label="Previous blog articles"
                            className="absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink border border-[#E7665D]/30 shadow-[0_4px_24px_rgba(17,26,48,0.12)] transition-all duration-300 hover:bg-[#E7665D] hover:text-white hover:border-[#E7665D] hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-ink disabled:hover:border-[#E7665D]/30"
                        >
                            <ChevronLeft size={22} aria-hidden="true" />
                        </button>

                        {/* Floating Side Arrow — Next (Desktop / Tablet) */}
                        <button
                            id="blog-next-btn"
                            type="button"
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                            aria-label="Next blog articles"
                            className="absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink border border-[#E7665D]/30 shadow-[0_4px_24px_rgba(17,26,48,0.12)] transition-all duration-300 hover:bg-[#E7665D] hover:text-white hover:border-[#E7665D] hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-ink disabled:hover:border-[#E7665D]/30"
                        >
                            <ChevronRight size={22} aria-hidden="true" />
                        </button>

                        {/* Blog Cards Carousel Track */}
                        <div
                            ref={scrollRef}
                            id="blog-carousel-track"
                            onScroll={checkScrollState}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUpOrLeave}
                            onMouseLeave={handleMouseUpOrLeave}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "ArrowRight") {
                                    e.preventDefault();
                                    handleNext();
                                } else if (e.key === "ArrowLeft") {
                                    e.preventDefault();
                                    handlePrev();
                                }
                            }}
                            className={`flex gap-4 lg:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 -my-4 px-1 select-none focus:outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:none ${isDragging ? "cursor-grabbing" : "cursor-grab"
                                }`}
                        >

                            {blogPosts.map((post) => (
                                <Link
                                    key={post.number}
                                    href={post.href}
                                    data-blog-card
                                    onClick={(e) => {
                                        if (hasMoved.current) {
                                            e.preventDefault();
                                        }
                                    }}
                                    className="group block w-full sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-80px)/5)] shrink-0 snap-start min-w-0"
                                >
                                    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-[#E7665D]/20 bg-white shadow-[0_5px_24px_rgba(17,26,48,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#E7665D]/50 group-hover:shadow-[0_12px_32px_rgba(231,102,93,0.15)]">

                                        <div className="w-full overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.imageAlt}
                                                width={800}
                                                height={550}
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

                                            {/* Read More - No nested Link */}
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

                        </div>
                    </div>

                    {/* Bottom Controls Bar: Indicator Dots & Mobile Buttons */}
                    <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-line/50 pt-7">
                        {/* Slide Counter */}
                        <div className="flex items-center gap-2.5 font-sans text-xs tracking-wider uppercase text-ink-muted">
                            <span className="font-serif text-base font-semibold text-ink">
                                0{currentPage + 1}
                            </span>
                            <span className="h-px w-6 bg-[#E7665D]/40" />
                            <span className="text-ink-muted">
                                0{totalPages}
                            </span>

                        </div>

                        {/* Interactive Dots */}
                        <div
                            role="tablist"
                            aria-label="Carousel pagination"
                            className="flex items-center gap-2"
                        >
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    key={idx}
                                    id={`blog-dot-${idx}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={currentPage === idx}
                                    aria-label={`Go to carousel slide page ${idx + 1}`}
                                    onClick={() => goToPage(idx)}
                                    className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7665D] ${currentPage === idx
                                        ? "h-2.5 w-8 bg-[#E7665D] shadow-[0_2px_8px_rgba(231,102,93,0.35)]"
                                        : "h-2.5 w-2.5 bg-[#E7665D]/25 hover:bg-[#E7665D]/50"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Prev / Next Navigation Buttons (Mobile & Desktop) */}
                        <div className="flex items-center gap-2">
                            <button
                                id="blog-bottom-prev-btn"
                                type="button"
                                onClick={handlePrev}
                                disabled={currentPage === 0}
                                aria-label="Previous articles"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7665D]/30 bg-white text-ink shadow-sm transition-all duration-300 hover:border-[#E7665D] hover:bg-[#E7665D] hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#E7665D]/30 disabled:hover:bg-white disabled:hover:text-ink disabled:active:scale-100"
                            >
                                <ChevronLeft size={18} aria-hidden="true" />
                            </button>

                            <button
                                id="blog-bottom-next-btn"
                                type="button"
                                onClick={handleNext}
                                disabled={currentPage === totalPages - 1}
                                aria-label="Next articles"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7665D]/30 bg-white text-ink shadow-sm transition-all duration-300 hover:border-[#E7665D] hover:bg-[#E7665D] hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#E7665D]/30 disabled:hover:bg-white disabled:hover:text-ink disabled:active:scale-100"
                            >
                                <ChevronRight size={18} aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}