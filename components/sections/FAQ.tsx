"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 border-b border-[#f2b4b1]">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Publishing Guidance &amp; Clarifications"
          title={
            <>
              Questions authors ask{" "}
              <span className="italic text-[#E7665D]">before entering print</span>
            </>
          }
          description="Publishing should be governed by transparency and mutual respect. Here are candid answers to our authors' most frequent inquiries."
        />

        {/* Clean Editorial Accordion Rows */}
        <div className="mx-auto w-full max-w-4xl border-t border-line/80 divide-y divide-line/80">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const numberFormatted = String(i + 1).padStart(2, "0");

            return (
              <div
                key={faq.question}
                className="group transition-colors duration-200"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start sm:items-center justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1 pr-2">
                    <span className="font-serif text-lg sm:text-xl font-normal text-ink-muted/50 group-hover:text-[#E7665D] transition-colors shrink-0">
                      {numberFormatted}
                    </span>
                    <span className={`font-serif text-[1.12rem] sm:text-[1.28rem] font-medium leading-snug transition-colors ${isOpen ? "text-[#E7665D]" : "text-ink group-hover:text-ink-soft"
                      }`}>
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border transition-all duration-200 ${isOpen
                      ? "border-[#E7665D] bg-[#E7665D] text-white"
                      : "border-[#E7665D]/25 bg-white text-ink-muted group-hover:border-[#E7665D]/50 group-hover:text-ink"
                      }`}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-8 sm:pl-12 pr-4 pb-6 pt-1 text-[0.95rem] leading-relaxed text-ink-muted font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center pt-2">
          <span className="font-sans text-sm text-ink-muted">
            Have a question specific to your manuscript genre or timeline?
          </span>
          <Button href="/contact-us#manuscript-review" variant="outline" size="md">
            <span>Speak Directly with an Acquisitions Editor</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}