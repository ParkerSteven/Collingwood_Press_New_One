
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ServiceCardProps {
    number: string | number;
    image: any;
    title: string;
    description: string;
    link: string;
    cta: string;
    index: number;
}

export default function ServiceCard({
    number,
    image,
    title,
    description,
    link,
    cta,
    index,
}: ServiceCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.55,
                delay: Math.min(index * 0.08, 0.32),
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-[#172138] to-[#101A2E] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)] sm:p-6 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
        >
            {/* Coral top border */}
            <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[2px] w-0 bg-[#E7665D] transition-all duration-500 group-hover:w-full"
            />

            {/* Custom Image */}
            <div className="mb-8 flex items-start justify-between">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md">
                    <Image
                        src={image}
                        alt={`${title} icon`}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Service content */}
            <div className="flex flex-1 flex-col">
                <h3 className="max-w-md font-serif text-[1rem] font-medium leading-[1.2] text-white transition-colors duration-300 group-hover:text-[#F08A82] sm:text-[1.3rem]">
                    {title}
                </h3>

                <div className="my-5 h-px w-12 bg-[#E7665D]/60" />

                <p className="font-sans text-[0.77rem] leading-[1.85] text-slate-300 sm:text-[0.83rem]">
                    {description}
                </p>
            </div>

            {/* CTA */}
            <div className="mt-9 border-t border-white/10 pt-5">
                <Link
                    href={link}
                    className="group/link inline-flex items-center gap-2 font-sans text-[0.82rem] font-semibold text-[#F08A82] transition-colors hover:text-white"
                    aria-label={cta}
                >
                    <span>{cta}</span>

                    <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                </Link>
            </div>
        </motion.article>
    );
}
