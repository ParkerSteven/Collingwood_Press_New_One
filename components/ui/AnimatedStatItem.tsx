"use client";

import { StatItem } from "@/lib/data";
import { motion } from "framer-motion";

interface AnimatedStatItemProps {
    stat: StatItem;
    index: number;
}

export default function AnimatedStatItem({
    stat,
    index,
}: AnimatedStatItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
            }}
            className="flex flex-col items-center text-center px-4 sm:px-6 lg:border-r lg:border-white/10 lg:last:border-r-0"
        >
            <span className="font-sans text-[1.8rem] sm:text-[2rem] font-semibold leading-none text-[#D8574E] tracking-tight">
                {stat.value}
            </span>

            <span className="mt-3 font-sans text-[8px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-[#666] leading-snug">
                {stat.label}
            </span>
        </motion.div>
    );
}