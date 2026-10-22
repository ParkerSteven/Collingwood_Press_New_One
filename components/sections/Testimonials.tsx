"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { benefits } from "@/lib/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative overflow-hidden border-b border-line bg-white py-20 lg:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* LEFT SIDE - Heading & Description */}
          <div className="lg:sticky lg:top-28 lg:col-span-6">
            <div className="text-left">

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E7665D]">
                  Author-First Publishing, Built Around Your Rights
                </span>
              </div>

              {/* Heading */}
              <h2
                id="why-choose-us-heading"
                className="mb-6 font-serif text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.4rem] pt-2"
              >
                Why Authors Choose{" "}
                <span className="italic text-[#E7665D]">
                  The Collingwood Press
                </span>
              </h2>

              {/* Description */}
              <p className="max-w-lg text-left font-sans text-[0.9rem] pt-2 leading-[1.9] text-ink-soft">
                The traditional publishing model forces a trade: professional quality in exchange for your rights, your earnings, and often your creative control. We rejected that trade from day one.
              </p>
              <p className="max-w-lg text-left font-sans text-[0.9rem] pt-4 leading-[1.9] text-ink-soft">
                The Collingwood Press brings major-house editorial standards to every project while leaving you in full control of your work. You work with the same small team from the first manuscript review through final distribution, with no handoffs and no rotating freelancers.
              </p>

            </div>
          </div>

          {/* RIGHT SIDE - Benefits Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
            {benefits.map((benefit, index) => (
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
                className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-line bg-[#FCFAF7] p-4 transition-all duration-300 hover:border-[#E7665D]/40 hover:bg-white hover:shadow-[0_12px_36px_rgba(17,26,48,0.07)] lg:p-6"
              >
                {/* Top edge accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#E7665D] transition-all duration-500 group-hover:w-full" />

                {/* Image and Title */}
                <div className="mb-3 flex items-center sm:items-start gap-2">

                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={56}
                      height={50}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="font-serif text-[1rem] font-medium leading-[1.25] tracking-tight text-ink">
                    {benefit.title}
                  </h3>

                </div>

                {/* Description */}
                <div className="flex flex-1 flex-col">
                  <p className="font-sans text-[0.8rem] leading-[1.8] text-ink-soft xl:text-[0.85rem]">
                    {benefit.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>

  );
}
