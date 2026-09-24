"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { formattingServices } from "@/lib/data";
import { BookOpen, Layers, PenTool, CheckCircle2, ArrowRight } from "lucide-react";

const icons = [BookOpen, Layers, PenTool, CheckCircle2];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-14 lg:py-20">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Interior Architecture &amp; Binding"
          title={
            <>
              Your manuscript is finished.{" "}
              <span className="italic text-[#E7665D]">Now we prepare it for the shelf.</span>
            </>
          }
          description="Whether you have an unformatted Word document or a complex manuscript requiring dual-column indices and footnoting, our master typographers engineer your pages for world-class readability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formattingServices.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col justify-between rounded-sm border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] hover:border-[#E7665D]/50 hover:shadow-[0_6px_32px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-4 border-b border-line/70">
                    <span className="font-serif text-2xl sm:text-3xl font-normal text-ink-muted/50 group-hover:text-[#E7665D] transition-colors">
                      {service.step}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#fdf6f5] text-ink-soft border border-[#E7665D]/20 group-hover:border-[#E7665D]/40 group-hover:text-[#E7665D] transition-colors">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.2rem] font-medium text-ink leading-snug mt-1 group-hover:text-ink transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[0.91rem] leading-relaxed text-ink-muted font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-line/60">
                  <span className="inline-flex items-center gap-2 font-sans text-xs text-ink-soft">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7665D]" />
                    {service.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button href="/publishing" variant="outline" size="lg">
            <span>Explore Publishing Formats</span>
          </Button>
          <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
            <span>Submit Manuscript for Formatting</span>
            <ArrowRight size={14} />
          </Button>
        </div>
      </Container>
    </section>
  );
}