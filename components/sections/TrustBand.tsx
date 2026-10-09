
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Feather,
  BookOpenText,
  PenLine,
  BookMarked,
  Megaphone,
  Headphones,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

const services = [
  {
    number: "01",
    icon: BookOpenText,
    title: "Book Editing & Proofreading Services",
    description:
      "Our book editing services cover every level of refinement your manuscript needs: developmental editing that strengthens structure and argument, line editing that tightens prose and voice, copyediting that addresses all inconsistencies, and proofreading that removes the final errors before your book goes to production.",
    link: "/editing/",
    cta: "Explore our editing services",
  },
  {
    number: "02",
    icon: PenLine,
    title: "Ghostwriting Services",
    description:
      "Have a story, a business philosophy or a memoir worth telling, but need a skilled hand to write it? Our ghostwriting services match you with a professional writer who interviews you, captures your voice and delivers a complete, publication-ready manuscript. Your name on the cover. Your story, told your way.",
    link: "/ghostwriting/",
    cta: "Explore our ghostwriting services",
  },
  {
    number: "03",
    icon: BookMarked,
    title: "Publishing Guidance",
    description:
      "Through our publishing services, you get the editorial precision, design quality and retail distribution of a traditional house, while you keep 100% of your copyright and royalties. You stay the publisher. We do the production work. Whether it’s a novel, memoir, business book, or children’s book, every project receives the same high level of editorial care, bespoke cover art, and custom interior layout.",
    link: "/publishing/",
    cta: "Explore our book publishing services",
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Book Marketing, PR & Launch Strategy",
    description:
      "A great book needs a clear strategy to reach the right audience. Our professional book marketing services combine data-driven campaigns and targeted PR to maximize your visibility. We manage genre-targeted Amazon advertising, outreach to reviewers and niche publications, and media campaigns tailored to your book.",
    link: "/marketing/",
    cta: "Explore our marketing services",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Audiobook Recording & Distribution",
    description:
      "We review the manuscript, cast a professional audiobook narrator, and record in a studio. One voice or several, matched to the characters. No AI narration. Our audiobook production team edits, reviews, and masters the recordings before assisting with distribution and distributing the finished audiobook to Audible, Apple Books and other listening platforms.",
    link: "/audiobook/",
    cta: "Explore our audiobook services",
  },
];

export default function TrustBand() {
  return (
    <section
      id="publishing-services"
      aria-labelledby="publishing-services-heading"
      className="relative overflow-hidden border-b border-white/10 bg-[#0D1527] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#E7665D]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#4167A5]/10 blur-3xl"
      />

      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E7665D]" />

            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F08A82] sm:text-[11px]">
              Everything Your Book Needs, Handled by One Team
            </span>

            <span className="h-px w-8 bg-[#E7665D]" />
          </div>

          <h2
            id="publishing-services-heading"
            className="font-serif text-[2rem] max-w-3xl font-medium leading-[1.12] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.7rem]"
          >
            Complete Book Publishing Services{" "}
            <span className="italic text-[#F08A82]">
              Under One Roof
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-[0.95rem] leading-[1.85] text-slate-300 sm:text-[1rem]">
            Publishing a book involves dozens of moving parts,
            and no author should have to juggle them alone.
            Our book publishing services
            bring editing, design, production, distribution and
            promotion together under one coordinated team,
            so nothing falls through the cracks.
          </p>
        </motion.div>

        {/* Five service cards */}
        <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.08, 0.32),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-[#172138] to-[#101A2E] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)] sm:p-8 ${index < 3
                  ? "lg:col-span-2"
                  : "lg:col-span-3"
                  }`}
              >
                {/* Coral top border on hover */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[2px] w-0 bg-[#E7665D] transition-all duration-500 group-hover:w-full"
                />

                {/* Card header */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-13 w-13 items-center justify-center rounded-md border border-[#E7665D]/25 bg-[#E7665D]/10 p-3 text-[#F08A82]">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-serif text-[2.5rem] italic leading-none text-white/10">
                    {service.number}
                  </span>
                </div>

                {/* Service text */}
                <div className="flex flex-1 flex-col">
                  <h3 className="max-w-md font-serif text-[1.3rem] font-medium leading-[1.2] text-white transition-colors duration-300 group-hover:text-[#F08A82] sm:text-[1.4rem]">
                    {service.title}
                  </h3>

                  <div className="my-5 h-px w-12 bg-[#E7665D]/60" />

                  <p className="font-sans text-[0.77rem] leading-[1.85] text-slate-300 sm:text-[0.83rem]">
                    {service.description}
                  </p>
                </div>

                {/* Service link */}
                <div className="mt-9 border-t border-white/10 pt-5">
                  <Link
                    href={service.link}
                    className="group/link inline-flex items-center gap-2 font-sans text-[0.82rem] font-semibold text-[#F08A82] transition-colors hover:text-white"
                    aria-label={service.cta}
                  >
                    <span>{service.cta}</span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mt-10 flex flex-col gap-5 rounded-md border border-white/10 bg-white/[0.035] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-9"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#E7665D]/25 bg-[#E7665D]/10 text-[#F08A82]">
              <Feather size={21} strokeWidth={1.5} />
            </div>

            <div>
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F08A82]">
                The Collingwood Press
              </span>

              <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                One dedicated team. Every stage of your book.
              </p>
            </div>
          </div>

          <Link
            href="/publishing/"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-[#E7665D] px-5 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#d9574e]"
          >
            Explore Publishing Services
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
