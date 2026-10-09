
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Plus,
  Minus,
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Megaphone,
  PenLine,
  HelpCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const faqs = [
  {
    question: "Do I keep 100% of my royalties and copyright?",
    answer:
      "Yes. On our publishing packages, you keep full ownership of your copyright and 100% of your royalties. Your book stays yours before, during and after publication. The ISBN is registered in your name, and the KDP and IngramSpark accounts are opened in your name.",
  },
  {
    question: "How long does the publishing process take?",
    answer:
      "Most projects move from manuscript to published book in 3 to 6 months, depending on the scope of editorial, design and production work.",
  },
  {
    question:
      "What is the difference between hybrid, traditional and self-publishing?",
    answer:
      "Traditional publishing is publisher-funded, but the house keeps most of the royalties and most of the creative control. Hybrid publishing is also author-funded, and the publisher usually stays on the contract and often keeps a share of the royalties. Self-publishing leaves you as the publisher. You keep the copyright and the royalties, and you hire the team. The Collingwood Press is an assisted self-publishing company. You stay the publisher. We handle the editing, design and distribution.",
  },
  {
    question: "How much does it cost to publish a book?",
    answer:
      "In 2026, a typical professional self-published book runs about $2,940 to $5,660, based on Reedsy’s review of more than 230,000 freelancer quotes. Editing is the largest cost. A custom cover most often falls between $625 and $1,250. Illustration, ghostwriting and ads sit outside that range. With The Collingwood Press, the price depends on the services you choose. You fund the work, and you keep the copyright and 100% royalties. Request a free consultation for an itemized quote.",
  },
  {
    question: "Where will my book be available?",
    answer:
      "Your book can be distributed through Amazon, IngramSpark, Barnes & Noble, Apple Books and other major retail and library channels, depending on your publishing setup.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide end-to-end book publishing services: editing, ghostwriting, cover and interior design, formatting, distribution, audiobook production and marketing. Every author's path is different, so we build a plan around your needs.",
  },
  {
    question: "How do I publish a children's book?",
    answer:
      "Publishing a children's book follows the same path as any other title. You stay the publisher, and we handle the editing, cover, interior and distribution. A picture book or early reader also needs an age range, a reading level and, when the story calls for it, an illustrator from our artist network. You approve the galley proof before it goes to retail, and you keep the copyright and royalties. Send the manuscript or opening pages for a senior-editor review, usually within 5 to 7 days.",
  },
  {
    question: "Can I self-publish a children's book with you?",
    answer:
      "Yes. Children's book publishing here is a self-publishing service, not a rights deal. You can come to us with a finished manuscript, or with a story you want help writing. We match the editorial work, illustration and production to the book, then set up distribution.",
  },
];

const blogPosts = [
  {
    number: "01",
    icon: BookOpenText,
    category: "Publishing Costs",
    title: "The Real Cost of Publishing a Book, Broken Down",
    description:
      "An honest look at what professional editing, cover design, interior layout, printing and distribution cost, with advice on budgeting wisely.",
    href: "", // Add actual published guide URL
  },
  {
    number: "02",
    icon: Megaphone,
    category: "Book Marketing",
    title: "Book Marketing Strategies That Actually Move Copies",
    description:
      "Proven ways to build an audience, earn reviews, run ad campaigns and keep sales moving months after release.",
    href: "", // Add actual published guide URL
  },
  {
    number: "03",
    icon: PenLine,
    category: "Editorial Guidance",
    title: "A First-Time Author's Guide to the Editing Process",
    description:
      "How developmental editing, line editing, copy editing and proofreading differ, and which stages your manuscript actually needs.",
    href: "", // Add actual published guide URL
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    null
  );

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* SECTION 11 — FAQ */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="border-b border-line bg-white py-20 lg:py-28"
      >
        <Container>
          {/* FAQ Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#E7665D]" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
                What Authors Want to Know
              </span>
              <span className="h-px w-8 bg-[#E7665D]" />
            </div>

            <h2
              id="faq-heading"
              className="font-serif mx-auto max-w-2xl text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
            >
              Book Publishing FAQs:{" "}
              <span className="italic text-[#E7665D]">
                What Authors Ask Before They Start
              </span>
            </h2>
          </motion.div>

          {/* Accordion */}
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-sm border border-[#E7665D]/20 bg-white shadow-[0_5px_28px_rgba(17,26,48,0.04)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const number = String(index + 1).padStart(
                2,
                "0"
              );

              return (
                <div
                  key={faq.question}
                  className={`group border-b border-line/80 last:border-b-0 transition-colors ${isOpen ? "bg-[#FCFAF7]" : "hover:bg-[#FCFAF7]"
                    }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      className="flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-5 text-left sm:items-center sm:px-8 sm:py-6"
                    >
                      <span className="flex flex-1 items-start gap-4 sm:gap-6">
                        <span className="shrink-0 font-serif text-[1.3rem] text-[#E7665D]/60 sm:text-[1.5rem]">
                          {number}
                        </span>

                        <span
                          className={`font-sans text-[0.98rem] font-normal leading-snug transition-colors sm:text-[1.08rem] ${isOpen
                            ? "text-[#E7665D] font-medium"
                            : "text-ink/85"
                            }`}
                        >
                          {faq.question}
                        </span>
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border transition-colors ${isOpen
                          ? "border-[#E7665D] bg-[#E7665D] text-white"
                          : "border-[#E7665D]/25 bg-white text-[#E7665D]"
                          }`}
                      >
                        {isOpen ? (
                          <Minus size={17} aria-hidden="true" />
                        ) : (
                          <Plus size={17} aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-7 pl-[3.9rem] pr-7 sm:pl-[5.5rem] sm:pr-14">
                          <div className="mb-4 h-[2px] w-10 bg-[#E7665D]/50" />
                          <p className="font-sans text-[0.91rem] leading-[1.9] text-ink-muted sm:text-[0.97rem]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Support CTA */}
          <div className="mx-auto mt-9 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-sm border border-[#E7665D]/20 bg-[#FCFAF7] p-6 sm:flex-row sm:px-8">
            <div className="flex items-start gap-3">
              <HelpCircle
                size={22}
                className="mt-0.5 shrink-0 text-[#E7665D]"
              />

              <div>
                <h3 className="font-serif text-xl font-medium text-ink">
                  Still have questions?
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-ink-muted">
                  Get guidance specific to your manuscript
                  and publishing goals.
                </p>
              </div>
            </div>

            <Button
              href="/contact-us#manuscript-review"
              variant="primary"
              size="md"
            >
              <span>Speak With Our Team</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      {/* SECTION 12 — BLOG HIGHLIGHTS */}
      <section
        id="publishing-insights"
        aria-labelledby="publishing-insights-heading"
        className="relative overflow-hidden border-b border-line bg-[#FCFAF7] py-20 lg:py-28"
      >
        <Container>
          {/* Blog Heading */}
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
                From The Collingwood Press
              </span>

              <span className="h-px w-8 bg-[#E7665D]" />
            </div>

            <h2
              id="publishing-insights-heading"
              className="font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
            >
              Publishing Insights{" "}
              <span className="italic text-[#E7665D]">
                & Industry Guides
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-sans text-[0.96rem] leading-[1.85] text-ink-muted sm:text-[1.04rem]">
              The publishing landscape shifts quickly. Stay
              ahead with practical guides and honest
              perspectives from our editorial team.
            </p>
          </motion.div>

          {/* Blog cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {blogPosts.map((post, index) => {
              const Icon = post.icon;

              return (
                <motion.article
                  key={post.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#E7665D]/20 bg-white shadow-[0_5px_24px_rgba(17,26,48,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_12px_32px_rgba(231,102,93,0.1)]"
                >
                  {/* Article visual header */}
                  <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-[#E7665D]/10 bg-gradient-to-br from-[#172238] to-[#263650]">
                    <div className="absolute h-36 w-36 rounded-full border border-white/10" />
                    <div className="absolute h-24 w-24 rounded-full border border-[#E7665D]/20" />

                    <Icon
                      size={49}
                      strokeWidth={1.1}
                      aria-hidden="true"
                      className="relative z-10 text-[#F08A82]"
                    />

                    <span className="absolute left-5 top-5 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70">
                      {post.category}
                    </span>

                    <span className="absolute bottom-4 right-5 font-serif text-3xl italic text-white/20">
                      {post.number}
                    </span>
                  </div>

                  {/* Article content */}
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E7665D]">
                      Publishing Insights
                    </span>

                    <h3 className="mt-3 font-serif text-[1.3rem] font-medium leading-[1.22] text-ink sm:text-[1.5rem]">
                      {post.title}
                    </h3>

                    <p className="mt-4 font-sans text-[0.9rem] leading-[1.85] text-ink-muted">
                      {post.description}
                    </p>

                    {/* Article link */}
                    <div className="mt-auto pt-8">
                      <div className="border-t border-line/80 pt-5">
                        {post.href ? (
                          <Link
                            href={post.href}
                            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#E7665D] transition-colors hover:text-ink"
                          >
                            Read the guide
                            <ArrowUpRight
                              size={17}
                              aria-hidden="true"
                            />
                          </Link>
                        ) : (
                          <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#E7665D]">
                            Read the guide
                            <ArrowUpRight
                              size={17}
                              aria-hidden="true"
                            />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
