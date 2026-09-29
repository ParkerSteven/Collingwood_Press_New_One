"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Feather, Shield, Check, ArrowRight, Users, Layers, ShieldCheck, PhoneCall } from "lucide-react";

export default function TrustBand() {
  const manifestoPillars = [
    {
      icon: Users,
      title: "Dedicated Human Trade Editor",
      description: "A seasoned editor reads every sentence with care. Never automated, outsourced, or rushed.",
      badge: "Editorial Integrity",
    },
    {
      icon: Layers,
      title: "Master InDesign Typography",
      description: "Handcrafted interior typesetting with balanced gutter margins and classical book architecture.",
      badge: "Print Perfection",
    },
    {
      icon: ShieldCheck,
      title: "100% Rights & Royalties",
      description: "You keep all intellectual property, master files, and every single dollar of retail earnings.",
      badge: "Zero Deductions",
    },
    {
      icon: PhoneCall,
      title: "Direct Director Phone Line",
      description: "Speak directly with your assigned project director by phone whenever you need guidance.",
      badge: "No Support Tickets",
    },
  ];

  return (
    <section className="bg-[#0D1527] py-20 sm:py-28 border-b border-white/10 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E7665D]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl border border-white/10 bg-gradient-to-b from-[#131C31] to-[#0A1020] p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden"
        >
          {/* Subtle publisher emblem watermark */}
          <div className="absolute right-6 -bottom-10 pointer-events-none opacity-[0.03] text-white select-none">
            <Feather size={320} strokeWidth={0.75} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col gap-7">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-px bg-[#E7665D]" />
                <span className="font-sans text-[11px] uppercase tracking-[0.22em] font-semibold text-[#F08A82]">
                  The Collingwood Press Publishing Manifesto
                </span>
              </div>

              <h2 className="font-serif text-[1.85rem] sm:text-[2.4rem] lg:text-[2.6rem] font-medium leading-[1.12] text-white text-balance">
                The internet is full of promises.{" "}
                <span className="italic font-normal text-[#F08A82] block sm:inline">
                  Not all of them are real.
                </span>
              </h2>

              <p className="text-[1rem] sm:text-[1.05rem] leading-relaxed text-slate-300 font-sans max-w-2xl">
                The publishing world is flooded with vanity mills running automated template conversions.
                We operate on an uncompromising craft standard: <strong className="text-white font-medium">real human editors, bespoke typography, and complete author ownership.</strong>
              </p>

              {/* Crispy Pictorial Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {manifestoPillars.map((pillar) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="group flex flex-col gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] p-4 sm:p-5 hover:border-[#E7665D]/40 hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#E7665D]/15 text-[#F08A82] border border-[#E7665D]/30 group-hover:scale-105 transition-transform">
                          <PillarIcon size={18} strokeWidth={1.75} />
                        </div>
                        <span className="font-sans text-[10px] uppercase tracking-wider text-[#F08A82] font-semibold bg-[#E7665D]/10 px-2 py-0.5 rounded border border-[#E7665D]/20">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="font-serif text-[1.12rem] font-medium text-white group-hover:text-[#F08A82] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="font-sans text-[0.84rem] leading-relaxed text-slate-300/85">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Action & Publisher Seal Card */}
            <div className="flex flex-col items-center justify-center text-center p-8 sm:p-10 bg-gradient-to-b from-[#10192e] to-[#0a1020] rounded-xl border border-white/15 ring-1 ring-white/5 shadow-2xl relative">
              <div className="relative mb-5">
                <div className="absolute inset-0 rounded-full bg-[#E7665D]/20 blur-xl" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#E7665D]/50 bg-[#E7665D]/15 text-[#F08A82] shadow-inner">
                  <Shield size={28} strokeWidth={1.5} />
                </div>
              </div>

              <span className="font-serif text-[1.4rem] font-medium text-white">
                The Author First Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.18em] text-[#F08A82] mt-1.5 font-semibold bg-[#E7665D]/10 px-3 py-1 rounded-full border border-[#E7665D]/25">
                <Check size={12} strokeWidth={2.5} />
                IBPA Verified Trade Standards
              </span>

              <p className="font-sans text-[0.85rem] text-slate-300 leading-relaxed mt-4 max-w-xs">
                Every title published under The Collingwood Press imprint adheres strictly to independent trade
                publishing criteria with 100% author copyright protection.
              </p>

              <div className="w-full h-px bg-white/10 my-6" />

              <div className="w-full flex flex-col gap-3">
                <Button href="/about-us" variant="primary" size="md" className="w-full justify-center">
                  <span>Discover Our Standards</span>
                  <ArrowRight size={14} />
                </Button>
                <span className="text-[11px] text-slate-400 font-sans">
                  Zero hidden royalties &bull; Transparent contracts
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
