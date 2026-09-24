"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { stats } from "@/lib/data";

export default function StatBar() {
  return (
    <section className="bg-white border-y border-white/10 py-12 lg:py-14 text-white relative">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center px-4 sm:px-6 lg:border-r lg:border-white/10 lg:last:border-r-0"
            >
              <span className="font-serif text-[2.75rem] sm:text-[3.25rem] font-normal leading-none text-[#D8574E] tracking-tight">
                {stat.value}
              </span>
              <span className="mt-3 font-sans text-[11px] sm:text-[11.5px] font-semibold tracking-[0.18em] uppercase text-[#666] leading-snug">
                {stat.label}
              </span>
              <span className="mt-1.5 max-w-[13rem] text-[0.8rem] text-[#666] leading-relaxed font-sans">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
