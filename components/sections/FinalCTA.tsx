"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="hero-gradient py-24 sm:py-28 lg:py-32 border-b border-white/10 text-white relative overflow-hidden">
      {/* Background ambient editorial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E7665D]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center max-w-3xl"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-px bg-[#E7665D]/60" />
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] font-semibold text-[#F08A82]">
              Begin Your Publication Journey
            </span>
            <span className="w-8 h-px bg-[#E7665D]/60" />
          </div>

          {/* Headline */}
          <h2 className="mt-5 font-serif text-[2.5rem] sm:text-[3rem] lg:text-[3.3rem] font-medium leading-[1.06] text-white tracking-tight text-balance">
            Your manuscript is ready.{" "}
            <span className="italic text-[#F08A82] block sm:inline font-normal">
              Let&rsquo;s make it a book.
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="mt-6 font-sans text-[1.05rem] sm:text-[1.12rem] leading-relaxed text-slate-300 max-w-2xl">
            Your manuscript represents years of imagination, discipline, and emotional investment.
            Entrust it to an independent press that honors the heritage of traditional bookmaking.
          </p>

          {/* Prominent Primary CTA */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
            <Button
              href="/contact-us#manuscript-review"
              variant="primary"
              size="lg"
              className="px-8 py-4 text-[1rem] shadow-lg hover:shadow-xl"
            >
              <span>Submit Manuscript for Free Editorial Review</span>
              <ArrowRight size={16} />
            </Button>
          </div>

          <p className="mt-4 font-sans text-xs text-slate-400">
            Zero submission fee &bull; 5–7 day turnaround &bull; 100% intellectual property protected
          </p>

          {/* Editorial Direct Line & Press Headquarters Ribbon */}
          <div className="mt-14 pt-10 border-t border-white/10 w-full max-w-2xl flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-sans text-slate-300">
            <a
              href="tel:+19362233644"
              className="flex items-center gap-2 hover:text-[#F08A82] transition-colors"
            >
              <Phone size={14} className="text-[#F08A82]" />
              <span>+1 (936) 223-3644</span>
            </a>

            <span className="hidden sm:inline-block w-px h-3.5 bg-white/20" />

            <a
              href="mailto:info@thecollingwoodpress.com"
              className="flex items-center gap-2 hover:text-[#F08A82] transition-colors"
            >
              <Mail size={14} className="text-[#F08A82]" />
              <span>info@thecollingwoodpress.com</span>
            </a>

            <span className="hidden sm:inline-block w-px h-3.5 bg-white/20" />

            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={14} className="text-slate-400" />
              <span>Ontario, California, United States</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
