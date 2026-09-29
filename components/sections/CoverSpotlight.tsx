"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import BookCover from "@/components/ui/BookCover";
import { Palette, ArrowRight, Award } from "lucide-react";

export default function CoverSpotlight() {
  return (
    <section id="cover-spotlight" className="bg-white py-14 lg:py-20">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Cover Design Spotlight"
          title={
            <>
              Every book deserves a cover that{" "}
              <span className="italic text-[#E7665D]">makes readers stop and stare</span>
            </>
          }
          description="In bookstores and online catalogs, your jacket design has precisely three seconds to convey genre, emotional tone, and literary pedigree. Here is an inside look at a recent bespoke commission."
        />

        {/* Gallery Exhibition Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65 }}
          className="mx-auto w-full max-w-4xl rounded-lg border border-[#E7665D]/25 bg-white p-5 shadow-[0_6px_32px_0_rgba(231,102,93,0.14),0_1px_4px_0_rgba(0,0,0,0.06)] sm:p-8 lg:p-10"
        >
          {/* Gallery Header Plaque */}
          <div className="mb-6 flex flex-col items-start justify-between gap-3 border-b border-line/80 pb-5 sm:mb-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#E7665D]/10 text-[#E7665D] text-xs border border-[#E7665D]/20">
                <Award size={14} />
              </span>
              <div>
                <span className="font-sans text-[15px] font-medium text-ink">
                  Exhibition Archive: Commission No. 842
                </span>
                <span className="font-sans text-[11px] text-ink-muted block mt-0.5">
                  Historical Thriller &bull; Hardcover Collector&rsquo;s Edition
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#fdf6f5] text-[11px] font-sans text-ink-soft border border-[#E7665D]/20">
                <Palette size={12} className="text-[#E7665D]" />
                <span>Custom Gold Foil Stamped</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-7 min-[480px]:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12">
            {/* Book Cover Showcase with enhanced depth */}
            <div className="mx-auto w-32 drop-shadow-[0_24px_36px_rgba(24,21,17,0.28)] transition-transform duration-300 hover:scale-[1.03] sm:w-36 lg:w-44">
              <BookCover
                title="The Last King"
                subtitle="A Chronicle of Crown &amp; Blood"
                author="Josh Peter"
                genre="Historical Thriller"
                bg="#191B24"
                accent="#F08A82"
                artTheme="geometric"
                elevation={true}
                frontSrc="/assets/images/PublishedAuthors/Josh Peter/Book (4).png"
              />
            </div>

            {/* Author Pull Quote & Case Study */}
            <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
              {/* Author Citation with Portrait */}
              <div className="flex flex-col items-center gap-3.5 text-center lg:flex-row lg:items-center lg:text-left">
                <Image
                  src="/assets/images/PublishedAuthors/Josh Peter/Chc 1.png"
                  alt="Author Josh Peter"
                  width={192}
                  height={192}
                  sizes="(max-width: 640px) 160px, 192px"
                  className="h-40 w-40 shrink-0 rounded-full border-2 border-[#E7665D]/30 object-cover shadow-sm sm:h-48 sm:w-48"
                />
                <div className="min-w-0">
                  <h4 className="font-sans text-[1.18rem] font-medium text-ink">
                    Josh Peter
                  </h4>
                  <p className="font-sans text-xs text-ink-muted">
                    Author of <span className="italic font-sans">The Last King</span> &bull; 1st Edition
                  </p>
                </div>
              </div>

              {/* Pull Quote */}
              <blockquote className="my-0.5 border-l-2 border-[#E7665D] pl-4 font-sans text-sm italic leading-snug text-ink text-balance sm:pl-5 sm:text-base">
                &ldquo;Our book covers are a piece of art that you can show your friends. The final
                design exceeded our wildest dreams—the embossed foil lettering and the cinematic mood
                drew readers the moment we unveiled the proofs.&rdquo;
              </blockquote>

              {/* Design Breakdown Pills */}
              <div className="grid grid-cols-1 gap-2 pt-1 font-sans text-xs text-ink-soft sm:grid-cols-2 sm:gap-3">
                <div className="p-3 rounded-sm bg-[#fdf6f5] border border-[#E7665D]/20">
                  <span className="text-[10px] uppercase tracking-wider text-ink-muted font-semibold block">
                    Typography Specimen
                  </span>
                  <span className="font-sans font-medium text-ink mt-1 block">
                    Classical Cormorant &amp; Trajan
                  </span>
                </div>
                <div className="p-3 rounded-sm bg-[#fdf6f5] border border-[#E7665D]/20">
                  <span className="text-[10px] uppercase tracking-wider text-ink-muted font-semibold block">
                    Finishing Treatment
                  </span>
                  <span className="font-sans font-medium text-ink mt-1 block">
                    Soft-Touch Matte + Gold Foil
                  </span>
                </div>
              </div>

              {/* Solid Button */}
              <div className="pt-2">
                <Button href="/contact-us#manuscript-review" variant="primary" size="md" className="max-w-full text-center text-xs sm:text-sm">
                  <span>Commission Your Book Cover Design</span>
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}