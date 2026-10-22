"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bookCovers } from "@/lib/data";

type Book = {
    title: string;
    author: string;
    image: string;
    href?: string;
};

interface BookCarouselProps {
    // books?: Book[];
    heading?: string;
    subheading?: string;
}

const AUTO_SLIDE_DELAY = 5000;

export default function BookCarousel({
    // books = bookCovers,
    heading = "Explore the Books We've Proudly  Published for Our Authors",
    subheading = "Books from authors we’ve worked with, published across different genres and styles.",
}: BookCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pausedRef = useRef(false);
    const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, dragged: false });
    const ignoreClickRef = useRef(false);
    const ignoreClickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const clearAutoSlide = useCallback(() => {
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const scroll = useCallback((direction: "left" | "right") => {
        const viewport = carouselRef.current;
        if (!viewport) return;

        const firstCard = viewport.querySelector<HTMLLIElement>("li");
        const track = firstCard?.parentElement;
        if (!firstCard || !track) return;

        const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
        const amount = firstCard.getBoundingClientRect().width + gap;
        const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
        if (maxScroll < 1) return;

        // Keep each advance to one card. Wrap only at the ends.
        const target = viewport.scrollLeft + (direction === "right" ? amount : -amount);
        if (direction === "right" && target > maxScroll + 1) {
            viewport.scrollTo({ left: 0, behavior: "smooth" });
        } else if (direction === "left" && target < -1) {
            viewport.scrollTo({ left: maxScroll, behavior: "smooth" });
        } else {
            viewport.scrollTo({ left: Math.max(0, Math.min(maxScroll, target)), behavior: "smooth" });
        }
    }, []);

    const resetAutoSlide = useCallback(() => {
        clearAutoSlide();
        if (pausedRef.current || bookCovers.length <= 1) return;
        timerRef.current = setTimeout(() => {
            if (!pausedRef.current && !dragRef.current.active && !document.hidden) {
                scroll("right");
            }
            resetAutoSlide();
        }, AUTO_SLIDE_DELAY);
    }, [bookCovers.length, clearAutoSlide, scroll]);

    useEffect(() => {
        resetAutoSlide();
        return () => clearAutoSlide();
    }, [resetAutoSlide, clearAutoSlide]);

    useEffect(() => {
        const onVisibilityChange = () => {
            if (document.hidden) clearAutoSlide();
            else resetAutoSlide();
        };
        document.addEventListener("visibilitychange", onVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", onVisibilityChange);
            if (ignoreClickTimeoutRef.current) clearTimeout(ignoreClickTimeoutRef.current);
        };
    }, [clearAutoSlide, resetAutoSlide]);

    const handleArrowClick = (direction: "left" | "right") => {
        scroll(direction);
        resetAutoSlide();
    };

    const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
        // Touch devices use native horizontal swipe; desktop users can mouse-drag.
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        const viewport = carouselRef.current;
        if (!viewport) return;
        dragRef.current = {
            active: true,
            startX: e.clientX,
            scrollLeft: viewport.scrollLeft,
            dragged: false,
        };
        setIsDragging(true);
        clearAutoSlide();
    };

    const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
        const viewport = carouselRef.current;
        if (!viewport || !dragRef.current.active) return;
        const distance = e.clientX - dragRef.current.startX;
        if (Math.abs(distance) > 5) dragRef.current.dragged = true;
        viewport.scrollLeft = dragRef.current.scrollLeft - distance;
    };

    const handlePointerUp = () => {
        if (!dragRef.current.active) return;
        if (dragRef.current.dragged) {
            ignoreClickRef.current = true;
            if (ignoreClickTimeoutRef.current) clearTimeout(ignoreClickTimeoutRef.current);
            ignoreClickTimeoutRef.current = setTimeout(() => {
                ignoreClickRef.current = false;
            }, 150);
        }
        dragRef.current.active = false;
        setIsDragging(false);
        resetAutoSlide();
    };

    return (
        <section className="relative overflow-hidden hero-gradient py-12 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
                <header className="mx-auto mb-7 max-w-3xl text-center sm:mb-10">
                    <h2 className="font-serif text-[clamp(1.65rem,5vw,2.5rem)] font-semibold leading-tight tracking-tight text-white">
                        Explore the Books We&apos;ve Proudly <span className="text-[#D56057]">
                            Published for Our Authors
                        </span>
                    </h2>
                    {subheading && (
                        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                            {subheading}
                        </p>
                    )}
                </header>

                <div
                    ref={carouselRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    onMouseEnter={() => {
                        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                            pausedRef.current = true;
                            clearAutoSlide();
                        }
                    }}
                    onMouseLeave={() => {
                        pausedRef.current = false;
                        resetAutoSlide();
                    }}
                    onFocusCapture={() => {
                        pausedRef.current = true;
                        clearAutoSlide();
                    }}
                    onBlurCapture={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                            pausedRef.current = false;
                            resetAutoSlide();
                        }
                    }}
                    onTouchStart={clearAutoSlide}
                    onTouchEnd={resetAutoSlide}
                    onTouchCancel={resetAutoSlide}
                    aria-label="Published books carousel"
                    className={`w-full min-w-0 overflow-x-auto overflow-y-hidden overscroll-x-contain touch-pan-x select-none snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing snap-none" : "cursor-grab"}`}
                >
                    <ul className="flex w-full gap-3 pb-4 sm:gap-4 lg:gap-6">
                        {bookCovers.map((book, i) => (
                            <li
                                key={`${book.title}-${i}`}
                                className="
    w-[calc((100%-12px)/2)]
    shrink-0
    sm:w-[calc((100%-32px)/3)]
    md:w-[calc((100%-48px)/4)]
    lg:w-[calc((100%-96px)/5)]
  "
                            >
                                {book.slug ? (
                                    <a
                                        href={book.slug}
                                        target="_blank"
                                        draggable={false}
                                        onClick={(e) => {
                                            if (ignoreClickRef.current) {
                                                e.preventDefault();
                                                ignoreClickRef.current = false;
                                            }
                                        }}
                                        className="group block h-full focus-visible:outline-none"
                                    >
                                        <BookCard book={book} />
                                    </a>
                                ) : (
                                    <div className="group h-full">
                                        <BookCard book={book} />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-5 flex items-center justify-center gap-4 sm:mt-7">
                    <button
                        type="button"
                        onClick={() => handleArrowClick("left")}
                        aria-label="Previous books"
                        disabled={bookCovers.length <= 1}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#E7665D] hover:bg-[#E7665D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
                    >
                        <ChevronLeft size={21} />
                    </button>
                    <button
                        type="button"
                        onClick={() => handleArrowClick("right")}
                        aria-label="Next books"
                        disabled={bookCovers.length <= 1}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#E7665D] hover:bg-[#E7665D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
                    >
                        <ChevronRight size={21} />
                    </button>
                </div>
            </div>
        </section>
    );
}

function BookCard({ book }: { book: Book }) {
    return (
        <>
            <div className="aspect-[2/3] w-full overflow-hidden rounded-sm bg-slate-800 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1.5 group-focus-visible:ring-2 group-focus-visible:ring-[#E7665D]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={book.image}
                    alt={`${book.title} by ${book.author}`}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover"
                />
            </div>
            <h3 className="mt-3 break-words text-sm font-semibold leading-snug text-white sm:mt-4 sm:text-base">
                {book.title}
            </h3>
            <p className="mt-1 break-words text-xs text-slate-400 sm:text-sm">{book.author}</p>
        </>
    );
}
