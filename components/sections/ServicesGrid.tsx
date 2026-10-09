
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  FileSearch,
  ClipboardList,
  PenLine,
  Palette,
  PackageCheck,
  Megaphone,
  ArrowRight,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const publishingSteps = [
  {
    number: "01",
    title: "Free Manuscript Review",
    icon: FileSearch,
    description:
      "Send us your manuscript or opening chapters. A senior editor reads your work and gives you a candid assessment, typically within 5 to 7 days.",
    note: "Typically 5–7 days",
  },
  {
    number: "02",
    title: "Your Publishing Plan & Agreement",
    icon: ClipboardList,
    description:
      "We map the services, timeline and budget around your goals, and put the terms, including your rights, in writing before any work begins.",
    note: "Clear plans & transparent terms",
  },
  {
    number: "03",
    title: "Editing & Manuscript Refinement",
    icon: PenLine,
    description:
      "Your senior editor takes the manuscript through the editing stages it needs, from developmental and line editing to copy editing and final proofreading.",
    note: "Professional editorial refinement",
  },
  {
    number: "04",
    title: "Cover Design & Interior Typesetting",
    icon: Palette,
    description:
      "We design an original cover and hand-typeset your interior in Adobe InDesign. You review and approve proofs before anything goes to print.",
    note: "Original design & approved proofs",
  },
  {
    number: "05",
    title: "Production & Distribution Setup",
    icon: PackageCheck,
    description:
      "We prepare your final files and configure metadata, categories and keywords, then set up distribution to Amazon, IngramSpark, Barnes & Noble and other retail channels.",
    note: "Retail-ready production",
  },
  {
    number: "06",
    title: "Launch & Marketing",
    icon: Megaphone,
    description:
      "We run your launch with ARC distribution, reviewer and media outreach and advertising, and keep momentum going after release day.",
    note: "Launch support & ongoing visibility",
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="publishing-process"
      aria-labelledby="publishing-process-heading"
      className="relative overflow-hidden border-b border-line bg-[#FCFAF7] py-20 lg:py-28"
    >
      <Container>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E7665D]" />

            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
              From First Chapter to Finished Book
            </span>

            <span className="h-px w-8 bg-[#E7665D]" />
          </div>

          <h2
            id="publishing-process-heading"
            className="font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
          >
            Our Book Publishing Process:{" "}
            <span className="italic text-[#E7665D]">
              From Manuscript to Marketplace
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-[0.96rem] leading-[1.85] text-ink-muted sm:text-[1rem]">
            Publishing should never feel like guesswork. Here is
            how a project moves through our
            book publishing process
            , typically in 3 to 6 months depending on scope.
          </p>
        </motion.div>

        {/* Six-step process grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {publishingSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-[#E7665D]/20 bg-white p-7 shadow-[0_4px_20px_rgba(17,26,48,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_14px_35px_rgba(231,102,93,0.10)] sm:p-8"
              >
                {/* Top accent */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[2px] w-0 bg-[#E7665D] transition-all duration-500 group-hover:w-full"
                />

                {/* Step header */}
                <div className="mb-6 flex items-start justify-between border-b border-line/70 pb-6">
                  <div>
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
                      Step {step.number}
                    </span>

                    <div className="mt-2 font-serif text-[2.7rem] font-normal leading-none text-[#E7665D]/35">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#E7665D]/20 bg-[#FDF3F1] text-[#E7665D] transition-colors duration-300 group-hover:border-[#E7665D]/50">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Step content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="font-serif text-[1.3rem] font-medium leading-[1.22] text-ink sm:text-[1.3rem]">
                    {step.title}
                  </h3>

                  <p className="mt-4 font-sans text-[0.79rem] leading-[1.85] text-ink-muted sm:text-[0.84rem]">
                    {step.description}
                  </p>
                </div>

                {/* Card footer */}
                <div className="mt-8 flex items-center gap-2 border-t border-line/70 pt-5">
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#E7665D]"
                    aria-hidden="true"
                  />

                  <span className="font-sans text-[11px] font-medium text-ink-soft">
                    {step.note}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
