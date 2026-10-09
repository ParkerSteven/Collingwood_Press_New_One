
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
      "Every manuscript is assigned to a senior editor with deep genre knowledge and real publishing experience. No automated feedback loops. No constantly changing editorial team. One experienced professional guides your book from rough draft to finished product.",
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "Custom InDesign Typography",
    description:
      "Your book's interior is professionally typeset in Adobe InDesign, shaped around the pacing, tone and visual conventions of your genre. We do not pull from a template library. Every layout is built for your manuscript.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "100% Rights & Royalty Guarantee",
    description:
      "Your intellectual property stays exactly where it belongs: with you. Full copyright. Full royalties. That guarantee is written into every publishing agreement we sign.",
  },
  {
    number: "04",
    icon: MessagesSquare,
    title: "Direct Access to Publishing Directors",
    description:
      "You will never be sent to a call center or left waiting on a support ticket. Our publishing directors work with you directly and give clear answers and honest guidance at every stage.",
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
        {/* Section heading */}
        <div id="why-choose-us-heading">
          <SectionHeading
            eyebrow="Author-First Publishing, Built Around Your Rights"
            title={
              <>
                Why Authors Choose {" "}
                <span className="italic text-[#E7665D]">
                  The Collingwood Press
                </span>
              </>
            }
            description="The traditional publishing model forces a trade: professional quality in exchange for your rights, your earnings, and often your creative control. We rejected that trade from day one. The Collingwood Press brings major-house editorial standards to every project and leaves you in full control of your work."
          />
        </div>

        {/* Benefits grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
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
                className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-line bg-[#FCFAF7] p-7 transition-all duration-300 hover:border-[#E7665D]/40 hover:bg-white hover:shadow-[0_12px_36px_rgba(17,26,48,0.07)] sm:p-9 lg:p-10"
              >
                {/* Top edge accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#E7665D] transition-all duration-500 group-hover:w-full" />

                {/* Icon and number */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-[#E7665D]/20 bg-[#E7665D]/10 text-[#E7665D]">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-serif text-4xl italic leading-none text-[#E7665D]/30">
                    {benefit.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-4 max-w-[340px] font-serif text-[1.3rem] font-medium leading-[1.2] tracking-tight text-ink sm:text-[1.5rem]">
                    {benefit.title}
                  </h3>

                  <p className="font-sans text-[0.8rem] leading-[1.85] text-ink-soft sm:text-[0.85rem]">
                    {benefit.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
