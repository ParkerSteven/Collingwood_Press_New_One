
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { publishingSteps } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function ServicesGrid() {
  return (

    <section
      id="publishing-process"
      aria-labelledby="publishing-process-heading"
      className="relative overflow-hidden border-b border-line bg-[#FCFAF7] py-20 lg:py-28"
    >
      <Container>
        {/* Section heading - unchanged */}
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

        {/* Connected Publishing Process */}
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-3 lg:gap-y-24">
            {publishingSteps?.map((step, index) => {
              const Icon = step.icon;

              // Snake flow:
              // 1 -> 2 -> 3
              //           |
              // 6 <- 5 <- 4

              const positions = [
                "lg:col-start-1 lg:row-start-1",
                "lg:col-start-2 lg:row-start-1",
                "lg:col-start-3 lg:row-start-1",
                "lg:col-start-3 lg:row-start-2",
                "lg:col-start-2 lg:row-start-2",
                "lg:col-start-1 lg:row-start-2",
              ];

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 3) * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative flex h-full min-w-0 flex-col rounded-xl border border-[#E7665D]/20 bg-white px-6 pb-7 pt-12 shadow-[0_8px_30px_rgba(17,26,48,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_15px_40px_rgba(231,102,93,0.12)] sm:px-8 ${positions[index] ?? ""}`}
                >
                  {/* Floating Icon */}
                  <div className="absolute -top-7 left-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#FCFAF7] bg-[#E7665D] text-white shadow-lg">
                    <Icon
                      size={23}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Step Number */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#E7665D]">
                      Step {step.number}
                    </span>

                    <span className="font-serif text-4xl italic text-[#E7665D]/20">
                      {step.number}
                    </span>
                  </div>

                  {/* Original Content */}
                  <div className="flex flex-1 flex-col">
                    <h3 className="font-serif text-[1.3rem] font-medium leading-[1.22] text-ink">
                      {step.title}
                    </h3>

                    <p className="mt-4 font-sans text-[0.84rem] leading-[1.85] text-ink-muted">
                      {step.description}
                    </p>
                  </div>

                  {/* Original Footer */}
                  <div className="mt-7 flex items-center gap-2 border-t border-line/70 pt-5">
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

                  {/* Desktop Right Connectors: 1->2, 2->3 */}
                  {index < 2 && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-full top-1/2 hidden w-12 -translate-y-1/2 items-center lg:flex"
                    >
                      <div className="h-[2px] w-full bg-[#E7665D]/60" />
                      <div className="absolute right-0 h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-[#E7665D]" />
                    </div>
                  )}

                  {/* Desktop Down Connector: 3->4 */}
                  {index === 2 && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-full hidden h-24 -translate-x-1/2 flex-col items-center lg:flex"
                    >
                      <div className="h-full w-[2px] bg-[#E7665D]/60" />
                      <div className="absolute bottom-0 h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-[#E7665D]" />
                    </div>
                  )}
                  {/* Desktop Left Connectors: 4 → 5, 5 → 6 */}
                  {(index === 3 || index === 4) && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-full top-1/2 hidden w-12 -translate-y-1/2 items-center lg:flex"
                    >
                      {/* Connecting Line */}
                      <div className="h-[2px] w-full bg-[#E7665D]/60" />

                      {/* Left Pointing Arrow */}
                      <div className="absolute left-0 h-2.5 w-2.5 -rotate-45 border-l-2 border-t-2 border-[#E7665D]" />
                    </div>
                  )}

                  {/* Mobile / Tablet Vertical Connectors */}
                  {index < publishingSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-full flex h-16 -translate-x-1/2 flex-col items-center lg:hidden"
                    >
                      <div className="h-full w-[2px] bg-[#E7665D]/60" />
                      <div className="absolute bottom-0 h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-[#E7665D]" />
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>

  );
}
