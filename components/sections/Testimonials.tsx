"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BookCover from "@/components/ui/BookCover";
import { testimonials } from "@/lib/data";
import { CheckCircle, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const featured = testimonials[selectedIdx] || testimonials[0];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-line">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Author Acclaim &amp; Case Studies"
          title={
            <>
              Because we turn first-draft uncertainty into{" "}
              <span className="italic text-[#E7665D]">shelf-ready literature</span>
            </>
          }
          description="Every author who enters our press shares the same quiet conviction: their story matters, and it deserves to be published with pride. Here is how our authors describe the partnership."
        />

        {/* Featured Testimonial Hero Card */}
        <motion.article
          key={featured.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="elative rounded-sm border border-[#E7665D]/25 bg-white p-7 sm:p-10 lg:p-12 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_0.55fr] gap-8 lg:gap-12 items-center">
            {/* Left: Pull Quote & Author Info */}
            <div className="flex flex-col justify-between h-full">
              <div>
                {/* Editorial Topline with Star Rating */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-line/70">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[11px] uppercase tracking-[0.18em] font-semibold text-[#E7665D]">
                      Featured Author Case Study
                    </span>
                    <span className="text-line-strong">&bull;</span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                      {featured.genre}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(featured.rating)].map((_, idx) => (
                      <Star key={idx} size={14} className="fill-[#E7665D] text-[#E7665D]" />
                    ))}
                    <span className="text-[11px] text-ink-muted font-sans ml-1 hidden sm:inline">Verified Author</span>
                  </div>
                </div>

                {/* Literary Quote */}
                <blockquote className="font-serif italic text-[1.35rem] sm:text-[1.65rem] lg:text-[1.75rem] leading-[1.25] text-ink">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Citation with larger portrait */}
              <div className="mt-8 pt-6 border-t border-line/70 flex items-center gap-4">
                <img
                  src={featured.avatar}
                  alt={`Author portrait of ${featured.name}`}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-line shadow-sm"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-[1.2rem] sm:text-[1.3rem] font-medium text-ink leading-tight">
                      {featured.name}
                    </h3>
                    <CheckCircle size={14} className="text-[#E7665D] shrink-0" />
                  </div>
                  <span className="font-sans text-xs text-ink-muted mt-0.5">
                    {featured.role} &bull; Author of <span className="italic font-serif text-ink">{featured.book}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Book Jacket Display */}
            <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-sm bg-paper-warm/70 border border-line/80 text-center">
              <div className="w-28 sm:w-32 drop-shadow-xl hover:scale-105 transition-transform duration-300">
                <BookCover
                  title={featured.jacketArt.title}
                  author={featured.jacketArt.author}
                  genre={featured.genre}
                  bg={featured.jacketArt.colorBg}
                  accent={featured.jacketArt.colorAccent}
                  artTheme={featured.jacketArt.artTheme}
                  elevation={true}
                />
              </div>

              <div className="mt-5 flex flex-col items-center">
                <span className="font-serif text-[1.05rem] font-medium text-ink">
                  {featured.book}
                </span>
                <span className="font-sans text-[11px] text-ink-muted mt-0.5">
                  {featured.jacketArt.subtitle || "Collingwood 1st Edition"}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#E7665D] font-semibold mt-2 px-2.5 py-0.5 rounded-sm bg-[#E7665D]/10 border border-[#E7665D]/20">
                  Cloth Hardcover &bull; Digital
                </span>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Supporting Testimonial Cards & Selector */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
              Select Author Narrative:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={t.name}
                  onClick={() => setSelectedIdx(idx)}
                  className={`text-left p-4 sm:p-5 rounded-sm border transition-all duration-200 cursor-pointer flex flex-col justify-between ${isSelected
                    ? "border-[#E7665D] bg-paper-card shadow-sm ring-1 ring-[#E7665D]/20"
                    : "border-line bg-paper-card/70 hover:bg-paper-card hover:border-line-strong"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-line"
                    />
                    <div className="overflow-hidden">
                      <p className={`font-serif text-[0.98rem] leading-tight truncate ${isSelected ? "text-[#E7665D] font-medium" : "text-ink"}`}>
                        {t.name}
                      </p>
                      <p className="font-sans text-[11px] text-ink-muted truncate mt-0.5">
                        {t.genre}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 font-serif italic text-xs text-ink-soft line-clamp-2 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-line/60 flex items-center justify-between">
                    <span className="font-sans text-[10px] text-ink-muted truncate">
                      {t.book}
                    </span>
                    <span className={`text-[10px] uppercase font-sans font-semibold tracking-wider ${isSelected ? "text-[#E7665D]" : "text-ink-muted"}`}>
                      {isSelected ? "Active" : "Read"} &rarr;
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
