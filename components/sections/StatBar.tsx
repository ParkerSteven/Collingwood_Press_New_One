"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { stats } from "@/lib/data";

export default function StatBar() {
  return (
    <section className="bg-white border-y border-white/10 py-12 lg:py-14 text-white relative">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-5 lg:gap-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center px-4 sm:px-6 lg:border-r lg:border-white/10 lg:last:border-r-0"
            >
              <span className="font-sans text-[2.3rem] sm:text-[2.4rem] font-semibold italic leading-none text-[#D8574E] tracking-tight">
                {stat.value}
              </span>
              <span className="mt-3 font-sans text-[8px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-[#666] leading-snug">
                {stat.label}
              </span>
            
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
