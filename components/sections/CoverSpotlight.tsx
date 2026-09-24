"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import BookCover from "@/components/ui/BookCover";
import { Sparkles, Palette, ArrowRight, Award } from "lucide-react";

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
          className="mx-auto w-full max-w-4xl rounded-sm border border-[#E7665D]/25 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]"
        >
          {/* Gallery Header Plaque */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-line/80 gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#E7665D]/10 text-[#E7665D] text-xs border border-[#E7665D]/20">
                <Award size={14} />
              </span>
              <div>
                <span className="font-serif text-[15px] font-medium text-ink">
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

          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 lg:gap-12 items-center">
            {/* Book Cover Showcase with enhanced depth */}
            <div className="mx-auto w-52 sm:w-60 drop-shadow-[0_20px_30px_rgba(24,21,17,0.22)] transition-transform duration-300 hover:scale-[1.03]">
              <BookCover
                title="The Last King"
                subtitle="A Chronicle of Crown &amp; Blood"
                author="John Terrell"
                genre="Historical Thriller"
                bg="#191B24"
                accent="#F08A82"
                artTheme="geometric"
                elevation={true}
              />
            </div>

            {/* Author Pull Quote & Case Study */}
            <div className="flex flex-col gap-6">
              {/* Author Citation with Portrait */}
              <div className="flex items-center gap-3.5">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80"
                  alt="Author John Terrell"
                  className="w-12 h-12 rounded-full object-cover border border-line shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-[1.18rem] font-medium text-ink">
                    John Terrell
                  </h4>
                  <p className="font-sans text-xs text-ink-muted">
                    Author of <span className="italic font-serif">The Last King</span> &bull; 1st Edition
                  </p>
                </div>
              </div>

              {/* Pull Quote */}
              <blockquote className="font-serif italic text-[1.25rem] sm:text-[1.38rem] leading-snug text-ink text-balance border-l-2 border-[#E7665D] pl-5 my-0.5">
                &ldquo;Our book covers are a piece of art that you can show your friends. The final
                design exceeded our wildest dreams—the embossed foil lettering and the cinematic mood
                drew readers the moment we unveiled the proofs.&rdquo;
              </blockquote>

              {/* Design Breakdown Pills */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs font-sans text-ink-soft">
                <div className="p-3 rounded-sm bg-[#fdf6f5] border border-[#E7665D]/20">
                  <span className="text-[10px] uppercase tracking-wider text-ink-muted font-semibold block">
                    Typography Specimen
                  </span>
                  <span className="font-serif font-medium text-ink mt-1 block">
                    Classical Cormorant &amp; Trajan
                  </span>
                </div>
                <div className="p-3 rounded-sm bg-[#fdf6f5] border border-[#E7665D]/20">
                  <span className="text-[10px] uppercase tracking-wider text-ink-muted font-semibold block">
                    Finishing Treatment
                  </span>
                  <span className="font-serif font-medium text-ink mt-1 block">
                    Soft-Touch Matte + Gold Foil
                  </span>
                </div>
              </div>

              {/* Solid Button */}
              <div className="pt-2">
                <Button href="/contact-us#manuscript-review" variant="primary" size="md">
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