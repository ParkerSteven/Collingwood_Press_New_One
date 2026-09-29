"use client";

import { motion } from "framer-motion";
import { Check, Globe2, Megaphone, Store, ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { marketingServices } from "@/lib/data";

const icons = [Globe2, Megaphone, Store];

export default function MarketingServices() {
  return (
    <section id="marketing" className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Author Reach &amp; Sales Strategy"
          title={
            <>
              Your book is in print.{" "}
              <span className="italic text-[#E7665D]">Now we place it in readers&rsquo; hands.</span>
            </>
          }
          description="Publication day is not the finish line—it is day one of your book's public life. Our marketing team crafts customized campaigns tailored to the commercial realities of your genre."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8">
          {marketingServices.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative flex flex-col justify-between rounded-xl border border-[#E7665D]/25 bg-white p-8 sm:p-9 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex flex-col">
                  {/* Icon + Number + Badge */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-line/70">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25 shadow-sm group-hover:bg-[#E7665D] group-hover:text-white group-hover:border-[#E7665D] group-hover:scale-105 transition-all duration-300">
                        <Icon size={24} strokeWidth={1.75} />
                      </div>
                      <span className="font-serif text-2xl font-normal text-ink-muted/40 group-hover:text-[#E7665D] transition-colors">
                        0{i + 1}
                      </span>
                    </div>
                    <span className="font-sans text-[10.5px] uppercase tracking-[0.16em] text-ink-muted font-semibold bg-[#fdf6f5] px-2.5 py-1 rounded-md border border-[#E7665D]/20">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[1.4rem] font-medium text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 font-sans text-[0.88rem] leading-relaxed text-ink-muted">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-line/70 my-6" />

                  {/* Points */}
                  <ul className="flex flex-col gap-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[0.88rem] font-sans text-ink-soft"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E7665D]/15 text-[#E7665D] text-[10px] mt-0.5 font-bold">
                          ✓
                        </span>
                        <span className="leading-snug pt-px">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}