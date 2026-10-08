
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  Quote,
  BookOpenText,
  CheckCircle2,
} from "lucide-react";

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  book: string;
  genre?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "01",
    quote: "[INSERT real quote]",
    author: "[INSERT Author Name]",
    book: "[INSERT Book Title]",
    genre: "",
  },
  {
    id: "02",
    quote: "[INSERT real quote, ideally from a different genre]",
    author: "[INSERT Author Name]",
    book: "[INSERT Book Title]",
    genre: "",
  },
  {
    id: "03",
    quote: "[INSERT real quote]",
    author: "[INSERT Author Name]",
    book: "[INSERT Book Title]",
    genre: "",
  },
];

export default function ManuscriptCTA() {
  return (
    <section
      id="author-testimonials"
      aria-labelledby="author-testimonials-heading"
      className="relative overflow-hidden border-b border-line bg-white py-20 lg:py-28"
    >
      <Container>
        {/* Section heading */}
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
              Hear It From Our Authors
            </span>

            <span className="h-px w-8 bg-[#E7665D]" />
          </div>

          <h2
            id="author-testimonials-heading"
            className="font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.7rem] lg:text-[2.9rem]"
          >
            What Authors Say About{" "}
            <span className="italic text-[#E7665D]">
              Publishing With Us
            </span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-md border border-[#E7665D]/20 bg-[#FCFAF7] p-7 shadow-[0_5px_24px_rgba(17,26,48,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_14px_38px_rgba(231,102,93,0.10)] sm:p-9"
            >
              {/* Accent top line */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[2px] w-0 bg-[#E7665D] transition-all duration-500 group-hover:w-full"
              />

              {/* Quote icon */}
              <div className="mb-7 flex items-start justify-between">
                <div className="flex h-13 w-13 items-center justify-center rounded-sm border border-[#E7665D]/20 bg-[#FDF0ED] p-3 text-[#E7665D]">
                  <Quote
                    size={25}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <span className="font-serif text-3xl italic text-[#E7665D]/30">
                  {testimonial.id}
                </span>
              </div>

              {/* Author quotation */}
              <blockquote className="flex-1">
                <p className="font-serif text-[1.3rem] italic leading-[1.55] text-ink sm:text-[1.45rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author information */}
              <div className="mt-9 border-t border-line/80 pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E7665D]/20 bg-white text-[#E7665D]">
                    <BookOpenText
                      size={20}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-sans text-[1rem] font-semibold leading-snug text-ink">
                      {testimonial.author}
                    </h3>

                    <p className="mt-1 font-sans text-xs leading-relaxed text-ink-muted">
                      Author of{" "}
                      <span className="italic text-ink">
                        {testimonial.book}
                      </span>
                    </p>

                    {testimonial.genre && (
                      <span className="mt-2 block font-sans text-[10px] uppercase tracking-[0.13em] text-[#E7665D]">
                        {testimonial.genre}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
