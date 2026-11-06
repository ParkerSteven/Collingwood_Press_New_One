
"use client";

import { bookCovers } from "@/lib/data";
import { BookCard } from "../ui/BookCard";

interface BookCarouselProps {
    heading?: string;
    subheading?: string;
}

export default function BookCarousel({
    heading = "Explore the Books We've Proudly Published for Our Authors",
    subheading = "Books from authors we’ve worked with, published across different genres and styles.",
}: BookCarouselProps) {
    // Duplicate books for seamless infinite scrolling
    const carouselItems = [...bookCovers, ...bookCovers];

    return (
        <section className="relative overflow-hidden hero-gradient py-12 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <header className="mx-auto mb-7 max-w-3xl text-center sm:mb-10">
                    <h2 className="font-serif text-[clamp(1.65rem,5vw,2.5rem)] font-semibold leading-tight tracking-tight text-white">
                        Explore the Books We&apos;ve Proudly{" "}
                        <span className="text-[#D56057]">
                            Published for Our Authors
                        </span>
                    </h2>

                    {subheading && (
                        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                            {subheading}
                        </p>
                    )}
                </header>

                {/* Infinite Book Carousel */}
                <div className="relative w-full overflow-hidden">

                    <div className="flex w-max animate-book-marquee select-none hover:[animation-play-state:paused]">

                        {[0, 1].map((groupIndex) => (
                            <ul
                                key={groupIndex}
                                aria-hidden={groupIndex === 1}
                                className="flex shrink-0 items-stretch gap-3 pr-3 pb-4 sm:gap-4 sm:pr-4 lg:gap-6 lg:pr-6"
                            >
                                {carouselItems.map((book, index) => (
                                    <li
                                        key={`${groupIndex}-${book.title}-${index}`}
                                        className="w-[155px] shrink-0 sm:w-[185px] md:w-[195px] lg:w-[205px]"
                                    >
                                        {book.slug ? (
                                            <a
                                                href={book.slug}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                tabIndex={groupIndex === 1 ? -1 : 0}
                                                className="group block h-full"
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
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}
