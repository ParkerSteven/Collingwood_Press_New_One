"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type ReactNode,
    type MouseEvent,
} from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogCarouselProps {
    children: ReactNode;
    totalItems: number;
}

export default function BlogCarousel({
    children,
    totalItems,
}: BlogCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const dragRef = useRef({
        active: false,
        startX: 0,
        scrollLeft: 0,
        moved: false,
    });

    const getPerView = useCallback(() => {
        if (window.innerWidth >= 1024) return 5;
        if (window.innerWidth >= 640) return 2;
        return 1;
    }, []);

    const checkScrollState = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;

        const maxScroll = Math.max(
            0,
            el.scrollWidth - el.clientWidth
        );

        setCanScrollLeft(el.scrollLeft > 10);

        setCanScrollRight(
            el.scrollLeft < maxScroll - 10
        );

        const perView = getPerView();
        const pages = Math.max(
            1,
            Math.ceil(totalItems / perView)
        );

        setTotalPages(pages);

        if (maxScroll <= 0) {
            setCurrentPage(0);
            return;
        }

        const ratio = el.scrollLeft / maxScroll;

        const pageIndex = Math.min(
            pages - 1,
            Math.max(
                0,
                Math.round(ratio * (pages - 1))
            )
        );

        setCurrentPage(pageIndex);
    }, [getPerView, totalItems]);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const observer = new ResizeObserver(
            checkScrollState
        );

        observer.observe(el);

        window.addEventListener(
            "resize",
            checkScrollState
        );

        checkScrollState();

        return () => {
            observer.disconnect();

            window.removeEventListener(
                "resize",
                checkScrollState
            );
        };
    }, [checkScrollState]);

    const goToPage = (pageIndex: number) => {
        const el = scrollRef.current;
        if (!el) return;

        const perView = getPerView();
        const targetCardIndex = pageIndex * perView;

        const cards = el.querySelectorAll<HTMLElement>(
            "[data-blog-card]"
        );

        const targetCard =
            cards[Math.min(targetCardIndex, cards.length - 1)];

        if (targetCard) {
            const maxScroll = Math.max(
                0,
                el.scrollWidth - el.clientWidth
            );

            const targetLeft =
                targetCard.offsetLeft -
                el.offsetLeft;

            el.scrollTo({
                left: Math.min(
                    maxScroll,
                    Math.max(0, targetLeft)
                ),
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

    const handleMouseDown = (
        e: MouseEvent<HTMLDivElement>
    ) => {
        if (e.button !== 0) return;

        const el = scrollRef.current;
        if (!el) return;

        dragRef.current = {
            active: true,
            startX: e.pageX,
            scrollLeft: el.scrollLeft,
            moved: false,
        };
    };

    const handleMouseMove = (
        e: MouseEvent<HTMLDivElement>
    ) => {
        const el = scrollRef.current;

        if (!el || !dragRef.current.active) return;

        const walk =
            (e.pageX - dragRef.current.startX) * 1.3;

        if (Math.abs(walk) > 5) {
            dragRef.current.moved = true;
        }

        if (dragRef.current.moved) {
            e.preventDefault();

            el.scrollLeft =
                dragRef.current.scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        dragRef.current.active = false;
        checkScrollState();
    };

    const handleClickCapture = (
        e: MouseEvent<HTMLDivElement>
    ) => {
        if (dragRef.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            dragRef.current.moved = false;
        }
    };

    return (
        <>
            {/* Carousel Track */}
            <div className="relative">
                {/* Desktop Previous Button */}
                <button
                    type="button"
                    onClick={handlePrev}
                    disabled={!canScrollLeft}
                    aria-label="Previous blog articles"
                    className="absolute -left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7665D]/30 bg-white text-ink shadow-[0_4px_24px_rgba(17,26,48,0.12)] transition-all duration-300 hover:scale-105 hover:border-[#E7665D] hover:bg-[#E7665D] hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 md:flex lg:-left-6"
                >
                    <ChevronLeft size={22} aria-hidden="true" />
                </button>

                {/* Desktop Next Button */}
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canScrollRight}
                    aria-label="Next blog articles"
                    className="absolute -right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7665D]/30 bg-white text-ink shadow-[0_4px_24px_rgba(17,26,48,0.12)] transition-all duration-300 hover:scale-105 hover:border-[#E7665D] hover:bg-[#E7665D] hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 md:flex lg:-right-6"
                >
                    <ChevronRight size={22} aria-hidden="true" />
                </button>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    id="blog-carousel-track"
                    role="region"
                    aria-label="Blog articles carousel"
                    tabIndex={0}
                    onScroll={checkScrollState}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onClickCapture={handleClickCapture}
                    onDragStart={(e) => e.preventDefault()}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowRight") {
                            e.preventDefault();
                            handleNext();
                        } else if (e.key === "ArrowLeft") {
                            e.preventDefault();
                            handlePrev();
                        }
                    }}
                    className="flex cursor-grab select-none snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7665D] lg:gap-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {children}
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-line/50 pt-7 sm:mt-12 sm:flex-row">
                {/* Page Counter */}
                <div className="flex items-center gap-2.5 font-sans text-xs uppercase tracking-wider text-ink-muted">
                    <span className="font-serif text-base font-semibold text-ink">
                        {String(currentPage + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-6 bg-[#E7665D]/40" />

                    <span>
                        {String(totalPages).padStart(2, "0")}
                    </span>
                </div>

                {/* Pagination Dots */}
                <div
                    role="group"
                    aria-label="Carousel pagination"
                    className="flex items-center gap-2"
                >
                    {Array.from({ length: totalPages }).map(
                        (_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`Go to carousel page ${index + 1}`}
                                aria-current={
                                    currentPage === index ? "true" : undefined
                                }
                                onClick={() => goToPage(index)}
                                className={`rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#E7665D] ${currentPage === index
                                        ? "h-2.5 w-8 bg-[#E7665D] shadow-[0_2px_8px_rgba(231,102,93,0.35)]"
                                        : "h-2.5 w-2.5 bg-[#E7665D]/25 hover:bg-[#E7665D]/50"
                                    }`}
                            />
                        )
                    )}
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={handlePrev}
                        disabled={!canScrollLeft}
                        aria-label="Previous articles"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7665D]/30 bg-white text-ink shadow-sm transition-all duration-300 hover:border-[#E7665D] hover:bg-[#E7665D] hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <ChevronLeft size={18} aria-hidden="true" />
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={!canScrollRight}
                        aria-label="Next articles"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7665D]/30 bg-white text-ink shadow-sm transition-all duration-300 hover:border-[#E7665D] hover:bg-[#E7665D] hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <ChevronRight size={18} aria-hidden="true" />
                    </button>
                </div>
            </div>
        </>
    );
}