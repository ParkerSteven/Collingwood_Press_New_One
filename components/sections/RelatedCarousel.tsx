"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import BookCover from "@/components/ui/BookCover";
import { ChevronLeft, ChevronRight } from "lucide-react";


const booksData = [
  // NEW 3
  {
    id: 1,
    title: "GODFIDENCE",
    author: "By Veronica Graham R.N., BSN",
    genre: "Literary Fiction",
    blurb:
      "This is the powerful, transparent story of Veronica Graham — the girl doctors said wouldn’t live past the age of 12. Through trauma, abuse, rejection, and unimaginable odds, she didn’t just survive — she soared. A soul-stirring journey of faith, resilience, and divine empowerment, this book is your spiritual roadmap mapped with tears, sealed with truth, and ignited by hope.",
    frontSrc: "/assets/images/bookmockups/B1F.jpg",
    backSrc: "/assets/images/bookmockups/B1B.jpg",
    coverColor: "#E8E2D7",
  },

  {
    id: 6,
    title: "Fate of the Silver Wolf",
    author: "By Sonya E. Maestler",
    genre: "Children's / Picture Book",
    blurb:
      "Fate of the Silver Wolf follows seventeen-year-old Aylin, an outsider in a strict werewolf pack where tradition rules and bloodlines matter. Torn between love, secrets of her origin, and a terrifying darkness, Aylin must discover the truth about her bloodline and a power that could reshape the fate of the pack. Perfect for fans of paranormal romance, shifter fantasy, and coming-of-age supernatural adventures.",
    frontSrc: "/assets/images/bookmockups/B2F.jpg",
    backSrc: "/assets/images/bookmockups/B2B.jpg",
    coverColor: "#F3E9D8",
  },
  {
    id: 4,
    title: "The Liberation of Sue Moody",
    author: "By Gail Gelburd",
    genre: "Historical Fiction",
    blurb:
      "The story of journalist Sue Moody is one about survival of war, bombings, starvation, Nazi Germany, abandonment, and of simply trying to be a woman with a career in the early twentieth century. Inspired by thousands of letters, journals, and manuscripts found in an abandoned house, Gelburd has created a compelling first-person narrative of resilience and courage across continents and decades.",
    frontSrc: "/assets/images/bookmockups/B3F.jpg",
    backSrc: "/assets/images/bookmockups/B3B.jpg",
    coverColor: "#DDE6F3",
  },
  {
    id: 5,
    title: "Drag Racing",
    author: "By Mark L. Brothers",
    genre: "Speculative Fiction",
    blurb:
      "From South Florida’s rebellious 1950s streets to the thundering drag strips of Kentucky, David Heath’s life has been one wild, high-octane ride. A fearless racer, paratrooper, and self-taught mechanic who later became a neurosurgeon, his story is a powerful blend of adrenaline, resilience, and redemption. Strap in for a ride that’s as thrilling as it is inspiring.",
    frontSrc: "/assets/images/bookmockups/B4F.jpg",
    backSrc: "/assets/images/bookmockups/B4B.jpg",
    coverColor: "#E7D9E9",
  },

  // Existing
  {
    id: 2,
    title: "Shattered",
    author: "by Emily Henry",
    genre: "Sci-fi / Dystopian",
    blurb:
      "Shattered is a dystopian story set 100 years in the future where the revolution of technology led to the collapse of the Earth, forcing people to rely on technology to sustain themselves. In this society, two men band together to save the life of an innocent child through unconventional means — seeking to give this child a new heart.",
    frontSrc: "/assets/images/bookmockups/B5F.jpg",
    backSrc: "/assets/images/bookmockups/B5B.jpg",
    coverColor: "#F6D7DA",
  },
  {
    id: 3,
    title: "Serious Roommate Problems",
    author: "By Paul Arala",
    genre: "Romance",
    blurb:
      "When Pete’s wife Holly walks out on their marriage, he packs his bags and takes the first bus to Brooklyn, New York. What follows is a wild tale of dangerous roommates, unexpected love, and ridiculous adventures. This is the final novel in the two-part Roommate Problems series, following Pete and Holly’s journey from New York to Portland, Oregon.",
    frontSrc: "/assets/images/bookmockups/B6F.jpg",
    backSrc: "/assets/images/bookmockups/B6B.jpg",
    coverColor: "#D7E7F6",
  },
];


export default function RelatedCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate active card index
    const cardWidth = 210; // width + gap
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, idx), booksData.length - 1));
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => scroller.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollerRef.current) return;
    const container = scrollerRef.current;
    const card = container.querySelector<HTMLElement>(".book-carousel-card");
    const step = card ? card.offsetWidth + 24 : 220;
    
    container.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollerRef.current) return;
    const container = scrollerRef.current;
    const card = container.querySelector<HTMLElement>(".book-carousel-card");
    const step = card ? card.offsetWidth + 24 : 220;
    container.scrollTo({
      left: index * step,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#0D1527] py-20 sm:py-24 lg:py-28 border-b border-white/10 text-white overflow-hidden relative">
      <Container className="flex flex-col gap-12">
        {/* Header Row with Eyebrow, Title, and Scroll Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-px bg-[#E7665D]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#F08A82]">
                Trade Catalog &bull; Recent Releases
              </span>
            </div>
            <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.75rem] font-medium text-white tracking-tight">
              Recently published,{" "}
              <span className="italic text-[#F08A82] font-normal">recently loved</span>
            </h2>
            <p className="mt-2 text-[0.92rem] text-slate-400 font-sans max-w-xl leading-relaxed">
              Distinguished titles crafted with bespoke interior typography, custom cover finishes, and distributed globally across retail bookshops.
            </p>
          </div>

          {/* Left / Right Carousel Navigation Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll carousel left"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 bg-white/5 text-white shadow-subtle hover:bg-[#E7665D] hover:border-[#E7665D] transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll carousel right"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 bg-white/5 text-white shadow-subtle hover:bg-[#E7665D] hover:border-[#E7665D] transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bookshelf Presentation Track */}
        <div className="relative w-full">
          {/* Subtle gradient side edge masks for cinematic entry */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 z-10 bg-gradient-to-r from-[#0D1527] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-20 z-10 bg-gradient-to-l from-[#0D1527] to-transparent" />

          <div
            ref={scrollerRef}
            className="flex items-end gap-8 sm:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-8 pb-12 px-4 sm:px-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {booksData.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="book-carousel-card w-52 sm:w-60 shrink-0 snap-center group flex flex-col items-center text-center cursor-pointer"
                onClick={() => scrollToIndex(i)}
              >
                {/* Book Cover with 3D shadow and hover lift */}
                <div className="w-full flex justify-center drop-shadow-[0_16px_28px_rgba(0,0,0,0.55)] group-hover:drop-shadow-[0_26px_38px_rgba(0,0,0,0.7)] group-hover:-translate-y-3 transition-all duration-300">
                  <div className="w-48 sm:w-56">
                    <BookCover
                      title={book.title}
                      author={book.author}
                      genre={book.genre}
                      bg={book.coverColor}
                      frontSrc={book.frontSrc}
                      elevation={true}
                    />
                  </div>
                </div>

                {/* Centered Book Metadata */}
                <div className="mt-5 flex flex-col items-center text-center w-full px-2">
                  <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#F08A82] font-semibold block">
                    {book.genre}
                  </span>
                  <p className="font-serif text-[1.12rem] sm:text-[1.2rem] font-medium text-white group-hover:text-[#F08A82] transition-colors mt-1 max-w-full line-clamp-1">
                    {book.title}
                  </p>
                  <p className="font-sans text-xs text-slate-300/90 mt-0.5 line-clamp-1">
                    {book.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bookshelf Line Underneath */}
          <div className="w-full h-px bg-white/10 relative -mt-6">
            <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E7665D]/30 to-transparent" />
          </div>

          {/* Carousel Pagination Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {booksData.map((book, i) => (
              <button
                key={`dot-${book.title}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Jump to book ${book.title}`}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === i
                    ? "w-8 bg-[#E7665D]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
