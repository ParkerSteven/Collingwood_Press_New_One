"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ComponentProps } from "react";
import { benefits } from "@/lib/data";

type Benefit = (typeof benefits)[number];

interface AnimatedBenefitCardProps {
    benefit: Benefit;
    index: number;
}

export default function AnimatedBenefitCard({
    benefit,
    index,
}: AnimatedBenefitCardProps) {
    return (
        <motion.article
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
    );
}