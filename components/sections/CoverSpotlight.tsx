
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BookCover from "@/components/ui/BookCover";
import {
  Palette,
  BookOpen,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function CoverSpotlight() {
  return (
    <section
      id="cover-spotlight"
      aria-labelledby="cover-spotlight-heading"
      className="relative overflow-hidden border-b border-line bg-white py-20 lg:py-28"
    >
      <Container>
        {/* Section Heading */}
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
              Designed to Stand Apart on Any Shelf
            </span>

            <span className="h-px w-8 bg-[#E7665D]" />
          </div>

          <h2
            id="cover-spotlight-heading"
            className="font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
          >
            Book Cover Design & Interior Formatting{" "}
            <span className="italic text-[#E7665D]">
              Built to Stand Out
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-[0.97rem] leading-[1.85] text-ink-muted sm:text-[1rem]">
            Readers judge books by their covers, and booksellers
            judge them by production quality. We take both seriously.
          </p>
        </motion.div>

        {/* Two premium showcase cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1: Cover Design */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col overflow-hidden rounded-md border border-[#E7665D]/20 bg-[#FCFAF7] shadow-[0_5px_25px_rgba(17,26,48,0.04)] transition-all duration-300 hover:border-[#E7665D]/45 hover:shadow-[0_12px_36px_rgba(231,102,93,0.09)]"
          >
            {/* Cover showcase */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border-b border-[#E7665D]/15 bg-gradient-to-br from-[#151E33] via-[#263650] to-[#121A2B] p-8 sm:min-h-[360px]">
              <div className="pointer-events-none absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#E7665D]/10 blur-3xl" />

              <div className="pointer-events-none absolute -right-12 bottom-0 h-64 w-64 rounded-full bg-[#7398C8]/10 blur-3xl" />

              <span className="absolute left-6 top-6 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Original Cover Design
              </span>

              <div className="relative z-10 w-36 drop-shadow-[15px_22px_26px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-2deg] sm:w-44">
                <BookCover
                  title="The Last King"
                  subtitle="A Chronicle of Crown & Blood"
                  author="Josh Peter"
                  genre="Historical Thriller"
                  bg="#191B24"
                  accent="#F08A82"
                  artTheme="geometric"
                  elevation={true}
                  frontSrc="/assets/images/PublishedAuthors/Josh Peter/Book (4).png"
                />
              </div>

              <div className="absolute bottom-6 right-6 flex items-center gap-2 text-white/65">
                <Sparkles size={15} strokeWidth={1.5} />
                <span className="font-sans text-[10px] uppercase tracking-wider">
                  Bespoke Artwork
                </span>
              </div>
            </div>

            {/* Cover service content */}
            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#E7665D]/20 bg-[#FDF0ED] text-[#E7665D]">
                  <Palette size={21} strokeWidth={1.6} />
                </div>

                <span className="font-serif text-3xl italic text-[#E7665D]/30">
                  01
                </span>
              </div>

              <h3 className="font-serif text-[1.3rem] font-medium leading-tight text-ink sm:text-[1.5rem]">
                Original Book Cover Design
              </h3>

              <p className="mt-4 font-sans text-[0.92rem] leading-[1.75] text-ink-muted">
                Every book cover design
                is an original composition built to signal genre,
                tone and authority at first glance. For authors
                who want a physical product as compelling as the
                story inside, we offer premium finishes including
                foil stamping, embossing and premium paper stocks (if this describes the actual print options).
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Original Artwork",
                  "Foil Stamping",
                  "Embossing",
                  "Premium Paper",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-[#E7665D]/20 bg-white px-3 py-1.5 font-sans text-[11px] text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Button
                  href="/contact-us#manuscript-review"
                  variant="primary"
                  size="md"
                >
                  <span>Discuss Your Cover Design</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </motion.article>

          {/* Card 2: Interior Formatting */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group flex flex-col overflow-hidden rounded-md border border-[#E7665D]/20 bg-[#FCFAF7] shadow-[0_5px_25px_rgba(17,26,48,0.04)] transition-all duration-300 hover:border-[#E7665D]/45 hover:shadow-[0_12px_36px_rgba(231,102,93,0.09)]"
          >
            {/* Typesetting illustration */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border-b border-[#E7665D]/15 bg-[#EFE8DE] p-8 sm:min-h-[360px]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F7F1E8] via-[#EEE5D9] to-[#E5DBCC]" />

              <span className="absolute left-6 top-6 z-10 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8D7B68]">
                Editorial Page Architecture
              </span>

              {/* Stylized open-book spread */}
              <div className="relative z-10 flex h-[215px] w-full max-w-[370px] -rotate-3 overflow-hidden rounded-sm border border-[#C9BFB0] bg-[#FFFCF5] shadow-[8px_18px_30px_rgba(86,65,44,0.19)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-0 sm:h-[245px]">
                {/* Left page */}
                <div className="relative flex w-1/2 flex-col border-r border-[#DBD2C5] bg-gradient-to-r from-[#FFFCF7] to-[#F3EDE4] px-5 py-6 sm:px-7">
                  <span className="font-serif text-[7px] uppercase tracking-[0.17em] text-[#9A8875]">
                    Chapter One
                  </span>

                  <div className="mt-5 font-serif text-xl text-[#403830]">
                    I
                  </div>

                  <div className="mt-4 flex flex-col gap-[6px]">
                    {[100, 92, 96, 84, 100, 89, 94, 78].map(
                      (width, i) => (
                        <div
                          key={i}
                          className="h-[3px] rounded-full bg-[#A99B89]/50"
                          style={{ width: `${width}%` }}
                        />
                      )
                    )}
                  </div>

                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-serif text-[9px] text-[#9B8C79]">
                    12
                  </span>
                </div>

                {/* Right page */}
                <div className="relative flex w-1/2 flex-col bg-gradient-to-r from-[#F0E9DF] to-[#FFFCF7] px-5 py-6 sm:px-7">
                  <span className="text-right font-serif text-[7px] uppercase tracking-[0.17em] text-[#9A8875]">
                    The Beginning
                  </span>

                  <div className="mt-10 flex flex-col gap-[6px]">
                    {[
                      95, 100, 87, 98, 90, 100, 94, 84, 96, 73,
                    ].map((width, i) => (
                      <div
                        key={i}
                        className="h-[3px] rounded-full bg-[#A99B89]/50"
                        style={{ width: `${width}%` }}
                      />
                    ))}
                  </div>

                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-serif text-[9px] text-[#9B8C79]">
                    13
                  </span>
                </div>

                {/* Book center shadow */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8A7965]/15 to-transparent" />
              </div>

              <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 text-[#8D7B68]">
                <Layers size={15} strokeWidth={1.5} />
                <span className="font-sans text-[10px] uppercase tracking-wider">
                  Hand-Typeset Pages
                </span>
              </div>
            </div>

            {/* Interior service content */}
            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#E7665D]/20 bg-[#FDF0ED] text-[#E7665D]">
                  <BookOpen size={21} strokeWidth={1.6} />
                </div>

                <span className="font-serif text-3xl italic text-[#E7665D]/30">
                  02
                </span>
              </div>

              <h3 className="font-serif text-[1.3rem] font-medium leading-tight text-ink sm:text-[1.5rem]">
                Hand-Typeset Interior Formatting
              </h3>

              <p className="mt-4 font-sans text-[0.92rem] leading-[1.85] text-ink-muted">
                Interiors are set in Adobe InDesign with close
                attention to page architecture, reading flow
                and visual hierarchy, so your book holds its
                own beside any title on the shelf.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Adobe InDesign",
                  "Reading Flow",
                  "Page Architecture",
                  "Visual Hierarchy",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-[#E7665D]/20 bg-white px-3 py-1.5 font-sans text-[11px] text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Button
                  href="/contact-us#manuscript-review"
                  variant="outline"
                  size="md"
                >
                  <span>Discuss Interior Formatting</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Bottom supporting statement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 border-t border-line pt-8 text-center sm:flex-row sm:gap-8"
        >
          <span className="flex items-center gap-2 font-sans text-xs text-ink-muted">
            <CheckCircle2
              size={16}
              className="text-[#E7665D]"
            />
            Genre-Appropriate Design
          </span>

          <span className="flex items-center gap-2 font-sans text-xs text-ink-muted">
            <CheckCircle2
              size={16}
              className="text-[#E7665D]"
            />
            Custom Interior Layouts
          </span>

          <span className="flex items-center gap-2 font-sans text-xs text-ink-muted">
            <CheckCircle2
              size={16}
              className="text-[#E7665D]"
            />
            Premium Print Finishes
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
