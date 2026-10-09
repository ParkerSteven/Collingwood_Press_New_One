
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  Globe2,
  BookOpen,
  Search,
  Megaphone,
  Send,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Store,
  Users,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const marketingServices = [
  {
    number: "01",
    icon: Globe2,
    eyebrow: "Retail Distribution",
    title: "Retail Visibility Across Amazon & Beyond",
    description:
      "We configure your metadata, categories and search keywords to improve discoverability on Amazon, IngramSpark, Barnes & Noble and other high-traffic retail channels, so readers searching your genre find your book.",
    features: [
      {
        icon: Search,
        label: "Metadata & Search Keywords",
      },
      {
        icon: Store,
        label: "Global Retail Channels",
      },
    ],
  },
  {
    number: "02",
    icon: BookOpen,
    eyebrow: "Pre-Launch Publicity",
    title: "Early Buzz Through ARCs & Media Outreach",
    description:
      "Pre-release attention can define a book's trajectory. We manage Advance Reader Copy distribution, coordinate outreach to reviewers and book bloggers, and pitch relevant media to build credibility before launch day.",
    features: [
      {
        icon: Send,
        label: "Advance Reader Copies",
      },
      {
        icon: Users,
        label: "Reviewers & Media Outreach",
      },
    ],
  },
  {
    number: "03",
    icon: Megaphone,
    eyebrow: "Launch & Growth",
    title: "Strategic Launch Campaigns & Bookstore Placement",
    description:
      "A launch is more than a date on a calendar. We plan pre-release activity, manage digital ad campaigns, pursue bookstore placement and sustain momentum long after your book goes live.",
    features: [
      {
        icon: Target,
        label: "Targeted Digital Campaigns",
      },
      {
        icon: BarChart3,
        label: "Long-Term Book Visibility",
      },
    ],
  },
];

export default function RelatedCarousel() {
  return (
    <section
      id="marketing-distribution"
      aria-labelledby="marketing-distribution-heading"
      className="relative overflow-hidden border-b border-white/10 bg-[#0D1527] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#E7665D]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#4D6FA8]/10 blur-3xl"
      />

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mb-14 max-w-4xl text-center lg:mb-16"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E7665D]" />

            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F08A82] sm:text-[11px]">
              Reach Readers Everywhere Your Book Belongs
            </span>

            <span className="h-px w-8 bg-[#E7665D]" />
          </div>

          {/* Heading */}
          <h2
            id="marketing-distribution-heading"
            className="font-serif text-[2rem] max-w-2xl mx-auto font-medium leading-[1.12] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.7rem]"
          >
            Book Marketing & Distribution{" "}
            <span className="italic text-[#F08A82]">
              That Gets You Discovered
            </span>
          </h2>

          {/* Intro */}
          <p className="mx-auto mt-6 max-w-2xl font-sans text-[0.96rem] leading-[1.85] text-slate-300 sm:text-[1rem]">
            Getting published is one milestone. Getting read
            is another. We build distribution plans, retail
            positioning and promotional campaigns designed
            to put your book in front of the readers most
            likely to buy it.
          </p>
        </motion.div>

        {/* Three Marketing Service Cards */}
        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-gradient-to-b from-[#19243B] to-[#111A2D] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_18px_42px_rgba(0,0,0,0.2)]"
              >
                {/* Top accent */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[2px] w-0 bg-[#E7665D] transition-all duration-500 group-hover:w-full"
                />

                {/* Visual Header */}
                <div className="relative flex min-h-[170px] items-center justify-center overflow-hidden border-b border-white/10 bg-[#172238] p-8 sm:min-h-[190px]">
                  <div
                    aria-hidden="true"
                    className="absolute h-44 w-44 rounded-full border border-[#E7665D]/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute h-32 w-32 rounded-full border border-white/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute h-20 w-20 rounded-full bg-[#E7665D]/10 blur-2xl"
                  />

                  <span className="absolute left-6 top-5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F08A82]">
                    {service.eyebrow}
                  </span>

                  <span className="absolute right-6 top-5 font-serif text-3xl italic text-white/15">
                    {service.number}
                  </span>

                  {/* Main service icon */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#E7665D]/35 bg-[#E7665D]/10 text-[#F08A82] shadow-[0_0_45px_rgba(231,102,93,0.12)] transition-transform duration-500 group-hover:scale-110">
                    <Icon
                      size={35}
                      strokeWidth={1.3}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="font-serif text-[1.3rem] font-medium leading-[1.2] text-white transition-colors group-hover:text-[#F08A82] sm:text-[1.5rem]">
                    {service.title}
                  </h3>

                  <div className="my-5 h-[2px] w-10 bg-[#E7665D]/70" />

                  <p className="font-sans text-[0.9rem] leading-[1.85] text-slate-300 sm:text-[0.94rem]">
                    {service.description}
                  </p>

                  {/* Supporting service details */}
                  <div className="mt-auto pt-8">
                    <div className="border-t border-white/10 pt-5">
                      <span className="mb-4 block font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Key Focus Areas
                      </span>

                      <div className="flex flex-col gap-3">
                        {service.features.map((feature) => {
                          const FeatureIcon = feature.icon;

                          return (
                            <div
                              key={feature.label}
                              className="flex items-center gap-3"
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-[#E7665D]/20 bg-[#E7665D]/10 text-[#F08A82]">
                                <FeatureIcon
                                  size={15}
                                  strokeWidth={1.6}
                                  aria-hidden="true"
                                />
                              </span>

                              <span className="font-sans text-xs text-slate-200">
                                {feature.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom trust indicators */}
        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {[
            "Retail Distribution",
            "ARC & Reviewer Outreach",
            "Strategic Book Launches",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 font-sans text-xs text-slate-400"
            >
              <CheckCircle2
                size={15}
                className="text-[#F08A82]"
                strokeWidth={1.7}
                aria-hidden="true"
              />
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
