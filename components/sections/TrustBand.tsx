"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Feather, Shield, Check, ArrowRight } from "lucide-react";

export default function TrustBand() {
  return (
    <section className="bg-[#0D1527] py-20 sm:py-24 border-b border-white/10 text-white relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-sm border border-white/10 hero-gradient p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden"
        >
          {/* Subtle background publisher emblem watermark */}
          <div className="absolute right-6 -bottom-10 pointer-events-none opacity-[0.03] text-white select-none">
            <Feather size={280} strokeWidth={0.75} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.32fr_0.68fr] gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-6 h-px bg-[#E7665D]/60" />
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#F08A82]">
                  The The Collingwood Press Publishing Manifesto
                </span>
              </div>

              <h2 className="font-serif text-[1.5rem] sm:text-[2rem] lg:text-[2.2rem] font-medium leading-[1.08] text-white text-balance">
                The internet is full of promises.{" "}
                <span className="italic font-normal text-[#F08A82] block sm:inline">
                  Not all of them are real.
                </span>
              </h2>

              <div className="flex flex-col gap-4 text-[0.98rem] sm:text-[1.02rem] leading-relaxed text-slate-300 font-sans">
                <p>
                  The publishing industry has become saturated with vanity mills that charge authors
                  thousands of dollars for automated template conversions, outsourced proofreading,
                  and generic stock covers. Once your invoice clears, the promises evaporate.
                </p>

                <p className="text-slate-300/90">
                  The Collingwood Press was founded on a contrary principle: that every manuscript
                  deserves a seasoned, human trade editor who reads every paragraph, an interior
                  typographer who balances every gutter margin in InDesign, and an honest partnership
                  guided by direct telephone conversations rather than automated tickets.
                </p>
              </div>

              {/* Concise Trust Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3 border-t border-white/10">
                <div className="flex items-start gap-2.5 text-[0.88rem] text-slate-200 font-sans">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E7665D]/20 text-[#F08A82] text-[10px] font-bold mt-0.5 border border-[#E7665D]/40">
                    ✓
                  </span>
                  <span>Direct phone access to your project director</span>
                </div>
                <div className="flex items-start gap-2.5 text-[0.88rem] text-slate-200 font-sans">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E7665D]/20 text-[#F08A82] text-[10px] font-bold mt-0.5 border border-[#E7665D]/40">
                    ✓
                  </span>
                  <span>100% intellectual property ownership retained</span>
                </div>
                <div className="flex items-start gap-2.5 text-[0.88rem] text-slate-200 font-sans">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E7665D]/20 text-[#F08A82] text-[10px] font-bold mt-0.5 border border-[#E7665D]/40">
                    ✓
                  </span>
                  <span>No hidden royalties or back-end deductions</span>
                </div>
                <div className="flex items-start gap-2.5 text-[0.88rem] text-slate-200 font-sans">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E7665D]/20 text-[#F08A82] text-[10px] font-bold mt-0.5 border border-[#E7665D]/40">
                    ✓
                  </span>
                  <span>Physical proof copy approval before release</span>
                </div>
              </div>
            </div>

            {/* Right Action & Publisher Seal Card */}
            <div className="flex flex-col items-center justify-center text-center p-8 sm:p-9 bg-[#0b1222] rounded-sm border border-white/10 ring-1 ring-white/5 shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E7665D]/40 bg-[#E7665D]/10 text-[#F08A82] mb-4">
                <Shield size={24} strokeWidth={1.5} />
              </div>
              <span className="font-serif text-[1.3rem] font-medium text-white">
                The Author First Guarantee
              </span>
              <span className="font-sans text-[10.5px] uppercase tracking-[0.16em] text-[#F08A82] mt-1 font-semibold">
                IBPA Verified Trade Standards
              </span>
              <p className="font-sans text-[0.82rem] text-slate-400 leading-relaxed mt-3 max-w-xs">
                Every title published under the The Collingwood Press imprint adheres strictly to independent trade
                publishing criteria with full author copyright protection.
              </p>
              <div className="w-16 h-px bg-white/10 my-6" />
              <Button href="/about-us" variant="primary" size="md" className="w-full sm:w-auto">
                <span>Discover Our Standards</span>
                <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
