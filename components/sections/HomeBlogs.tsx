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

import Container from "@/components/ui/Container";

const blogPosts = [
    {
        number: "01",
        image: "/book-editor.png",
        imageAlt: "Book publishing costs and budgeting",
        title: "How Much Does a Book Editor Cost? (2026 Rates by Editing Type)",
        description:
            "How much does it cost to publish a book? Traditional publishing costs $0 out of pocket. Self-publishing usually costs 2,000-6,000 for a professional book. Hybrid publishing runs 5,000-25,000 or more. Costs depend on editing, cover design, formatting, and marketing. ",
        href: "https://parkerpublishers.com/how-much-does-a-book-editor-cost/",
    },
    {
        number: "02",
        image: "/blog-2.png",
        imageAlt: "Professional book marketing strategies",
        title: "How Much Does It Cost to Publish a Book? 0-6K Budget + Avoid Overpaying",
        description:
            "How much does it cost to publish a book? Traditional publishing costs $0 out of pocket. Self-publishing usually costs 2,000-6,000 for a professional book. Hybrid publishing runs 5,000-25,000 or more. Costs depend on editing, cover design, formatting, and marketing. ",
        href: "https://parkerpublishers.com/how-much-does-it-cost-to-publish-a-book/",
    },
    {
        number: "03",
        image: "/blog-2.png",
        imageAlt: "Professional manuscript editing process",
        title: "How to Self-Publish a Book: A Simple Guide",
        description:
            "Self-publishing has become a powerful choice for writers who prefer to be the bosses of their work and want to get it to their audience as soon as possible.This guide explains how to self-publish a book in a clear way, from finishing the draft to selling it online.",
        href: "https://parkerpublishers.com/how-to-self-publish-a-book-a-simple-guide/",
    },
    {
        number: "04",
        image: "/hybridCompanies.png",
        imageAlt: "Book publishing costs and budgeting",
        title: "10 Best Hybrid Publishing Companies in 2026 (Submission Links + Costs)",
        description:
            "The best hybrid publishing companies in 2026 help authors combine professional publishing support with greater creative control than traditional publishing. Parker Publishers stands out for authors seeking personalized guidance and a more hands-on publishing experience.",
        href: "https://parkerpublishers.com/hybrid-publishing-companies/",
    },
    {
        number: "05",
        image: "/advertise-book.png",
        imageAlt: "Professional book marketing strategies",
        title: "How to Advertise My Book In 2026: 13 Ways to Get More Readers",
        description:
            "Authors have a strong book idea, but they struggle when it is time to turn that idea into a complete manuscript. Learning how to write an outline for a book helps writers organize scattered thoughts, create a clear direction, and understand what needs to happen before they start writing chapter one.",
        href: "https://parkerpublishers.com/how-to-write-an-outline-for-a-book/",
    },
    {
        number: "06",
        image: "/blog-2.png",
        imageAlt: "Professional manuscript editing process",
        title: "How To Write an Outline for A Book: 8-Steps Framework + Free Template",
        description:
            "Authors have a strong book idea, but they struggle when it is time to turn that idea into a complete manuscript. Learning how to write an outline for a book helps writers organize scattered thoughts, create a clear direction, and understand what needs to happen before they start writing chapter one.",
        href: "https://parkerpublishers.com/how-to-write-an-outline-for-a-book/",
    },
];

export default function HomeBlogs() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(2);
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Mouse drag support
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftPos, setScrollLeftPos] = useState(0);
    const hasMoved = useRef(false);

    const getPerView = () => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth >= 1024) return 3;
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
            <Container>
                {/* Blog Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
                >
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-[#E7665D]" />

                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
                            From The Collingwood Press
                        </span>

                        <span className="h-px w-8 bg-[#E7665D]" />
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
                            className={`flex gap-6 lg:gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 -my-4 px-1 select-none focus:outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:none ${isDragging ? "cursor-grabbing" : "cursor-grab"
                                }`}
                        >
                            {blogPosts.map((post) => (
                                <div
                                    key={post.number}
                                    data-blog-card
                                    className="w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-56px)/3)] shrink-0 snap-start flex flex-col"
                                >
                                    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#E7665D]/20 bg-white shadow-[0_5px_24px_rgba(17,26,48,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_12px_32px_rgba(231,102,93,0.1)]">
                                        {/* Article Image Header */}
                                        <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden border-b border-[#E7665D]/10 bg-[#172238]">
                                            <Image
                                                src={post.image}
                                                alt={post.imageAlt}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#101A30]/75 via-[#101A30]/15 to-[#101A30]/20" />

                                            {/* Article Number */}
                                            <span className="absolute bottom-4 right-5 z-10 font-serif text-3xl italic text-white/70">
                                                {post.number}
                                            </span>
                                        </div>

                                        {/* Article Content */}
                                        <div className="flex flex-1 flex-col p-7 sm:p-8">
                                            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E7665D]">
                                                Publishing Insights
                                            </span>

                                            <h3 className="mt-3 font-serif text-[1.3rem] font-medium leading-[1.22] text-ink sm:text-[1.5rem]">
                                                {post.title}
                                            </h3>

                                            <p className="mt-4 font-sans text-[0.9rem] leading-[1.85] text-ink-muted">
                                                {post.description}
                                            </p>

                                            {/* Article Link */}
                                            <div className="mt-auto pt-8">
                                                <div className="border-t border-line/80 pt-5">
                                                    {post.href ? (
                                                        <Link
                                                            target="_blank"
                                                            href={post.href}
                                                            onClick={(e) => {
                                                                if (hasMoved.current) {
                                                                    e.preventDefault();
                                                                }
                                                            }}
                                                            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#E7665D] transition-colors hover:text-ink"
                                                        >
                                                            Read the guide
                                                            <ArrowUpRight
                                                                size={17}
                                                                aria-hidden="true"
                                                            />
                                                        </Link>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#E7665D]">
                                                            Read the guide
                                                            <ArrowUpRight
                                                                size={17}
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
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
                            <span className="ml-2 hidden text-[11px] normal-case text-ink-muted/80 md:inline">
                                ({blogPosts.length} Editorial Guides)
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
            </Container>
        </section>
    );
}