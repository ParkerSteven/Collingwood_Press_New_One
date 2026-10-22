
"use client";

import { motion } from "framer-motion";
import {
  BookOpenText,
  LayoutTemplate,
  ShieldCheck,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    number: "01",
    icon: BookOpenText,
    title: "Dedicated Senior Editor",
    description:
      "A senior editor reviews your manuscript from start to finish.",
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "Custom InDesign Typography",
    description:
      "Professional interior formatting that looks print-ready.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "100% Rights & Royalty Guarantee",
    description:
      "You keep full rights and higher royalties.",
  },
  {
    number: "04",
    icon: MessagesSquare,
    title: "Direct Access to Publishing Directors",
    description:
      "Work directly with the team handling your book.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative overflow-hidden border-b border-line bg-white py-20 lg:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* LEFT SIDE - Heading & Description */}
          <div className="lg:sticky lg:top-28 lg:col-span-6">
            <div className="text-left">

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#E7665D]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E7665D]">
                  Author-First Publishing, Built Around Your Rights
                </span>
              </div>

              {/* Heading */}
              <h2
                id="why-choose-us-heading"
                className="mb-6 font-serif text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.4rem] pt-2"
              >
                Why Authors Choose{" "}
                <span className="italic text-[#E7665D]">
                  The Collingwood Press
                </span>
              </h2>

              {/* Description */}
              <p className="max-w-lg text-left font-sans text-[0.9rem] pt-2 leading-[1.9] text-ink-soft">
                The traditional publishing model forces a trade:
                professional quality in exchange for your rights, your
                earnings, and often your creative control. We rejected
                that trade from day one. The Collingwood Press brings
                major-house editorial standards to every project and
                leaves you in full control of your work.
              </p>

            </div>
          </div>

          {/* RIGHT SIDE - Benefits Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-line bg-[#FCFAF7] p-4 transition-all duration-300 hover:border-[#E7665D]/40 hover:bg-white hover:shadow-[0_12px_36px_rgba(17,26,48,0.07)] lg:p-8"
                >
                  {/* Top edge accent */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#E7665D] transition-all duration-500 group-hover:w-full" />

                  {/* Icon and number */}
                  <div className="mb-3 gap-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#E7665D]/20 bg-[#E7665D]/10 text-[#E7665D]">
                      <Icon
                        size={23}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />

                    </div>
                    <h3 className="mb-3 font-serif text-[1rem] font-medium leading-[1.25] tracking-tight text-ink lg:text-[1rem]">
                      {benefit.title}
                    </h3>

                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col">

                    <p className="font-sans text-[0.8rem] leading-[1.8] text-ink-soft xl:text-[0.85rem]">
                      {benefit.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>

  );
}
