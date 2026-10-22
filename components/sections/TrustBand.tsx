
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Feather,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import ServiceCard from "../ui/ServicesCard";

const services = [
  {
    number: "01",
    image: "/CollingwoodPressIcons/Editing.png",
    title: "Book Editing Services",
    description:
      "Our book editing services cover every stage: developmental editing for structure and argument, line editing for voice, copy editing for consistency, and final proofreading.",
    link: "/editing/",
    cta: "Explore our editing services",
  },
  {
    number: "02",
    image: "/CollingwoodPressIcons/Ghostwriting.png",
    title: "Ghostwriting Services",
    description:
      "Our ghostwriting services match you with a professional writer who interviews you, captures your voice and delivers a complete, publication-ready manuscript.",
    link: "/ghostwriting/",
    cta: "Explore our ghostwriting services",
  },
  {
    number: "03",
    image: "/CollingwoodPressIcons/Publishing.png",
    title: "Publishing Services",
    description:
      "Through our publishing services, you get the editorial precision, design quality and retail distribution of a traditional house, while you keep 100% of your copyright and royalties.",
    link: "/publishing/",
    cta: "Explore our book publishing services",
  },
  {
    number: "04",
    image: "/CollingwoodPressIcons/Marketing.png",
    title: "Book Marketing, PR & Launch Strategy",
    description:
      "Our professional book marketing services combine data-driven campaigns and targeted PR to maximize your visibility.",
    link: "/marketing/",
    cta: "Explore our marketing services",
  },
  {
    number: "05",
    image: "/CollingwoodPressIcons/Audiobook.png",
    title: "Audiobook Recording & Distribution",
    description:
      "Our audiobook production team edits, reviews, and masters the recordings before assisting with distribution and distributing the finished audiobook to Audible, Apple Books and other listening platforms.",
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
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              image={service?.image}
              title={service.title}
              description={service.description}
              link={service.link}
              cta={service.cta}
              index={index}
            />
          ))}
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
