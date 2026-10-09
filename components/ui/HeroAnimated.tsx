"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6, delay: i * 0.09, ease: [0.22, 1,
                .36, 1]
        },
    }),
};

export default function HeroAnimated() {
    return (
        <>
            {/* Left Column */}
            <div className="max-w-5xl">
                <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
                    <Eyebrow tone="coral" align="left">
                        Your Story. Your Vision. Your Publishing Journey.
                    </Eyebrow>
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={1}
                    className="mt-6  font-serif text-[3rem] sm:text-[3rem] lg:text-[3.2rem] font-medium leading-[1.05] text-white tracking-tight text-balance"
                >
                    Trusted Book Publishing{" "}
                    <span className="text-[#E7665D] italic font-normal inline">
                        Company<br className="hidden sm:block" /> & Author
                    </span>{" "}
                    Services
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={2}
                    className="mt-6 text-[1.02rem] sm:text-[1.08rem] leading-relaxed text-[#ccccccad] font-sans font-normal max-w-2xl"
                >
                    You wrote the book. You should own every part of what comes next. The Collingwood Press is a full-service book publishing company built for authors who refuse to hand over their royalties, their rights, or their creative direction. Senior editors, original book design and worldwide distribution come with one non-negotiable promise: 100% of your copyright and royalties stay with you. From manuscript to marketplace, our author services elevate your work without ever taking ownership of it.
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={3}
                    className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                >
                    <Button href="#manuscript-review" variant="primary" size="md" className="shadow-sm hover:shadow-md">
                        <span>Get a Free Publishing Consultation</span>
                        <ArrowRight size={15} />
                    </Button>
                    <Button href="/about-us#team" variant="outline" size="md" className="text-white">
                        <span>Talk to a Senior Editor</span>
                    </Button>
                </motion.div>

                {/* Trust badges */}
                <div className="mt-10 w-full max-w-auto">
                    <div className="flex justify-center items-center gap-4">
                        <span className="h-px flex-1 bg-line" />
                        <span className="shrink-0 font-sans text-[10.5px] uppercase font-semibold text-ink-muted tracking-[0.2em]">
                            Accredited &amp; Member
                        </span>
                        <span className="h-px flex-1 bg-line" />
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
                        <Link
                            href="https://www.ibpa-online.org/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="flex h-11 items-center opacity-85 transition-opacity hover:opacity-100"
                        >
                            <Image
                                src="/ibpa-proud-memberFooter.png"
                                alt="The Collingwood Press IBPA Member"
                                width={140}
                                height={44}
                                className="block h-12 w-auto object-contain"
                            />
                        </Link>

                        <span className="hidden h-7 w-px bg-line sm:block" aria-hidden="true" />

                        <div className="flex h-11 items-center">
                            <Link
                                href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                <Image
                                    src="/blue-seal.png"
                                    alt="The Collingwood Press BBB Business Review"
                                    width={120}
                                    height={40}
                                    className="block h-auto max-h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Prominent Editorial 3D Books */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-[480px] lg:max-w-[520px] h-[460px] sm:h-[520px] lg:h-[550px] flex items-center justify-center"
            >
                {/* Soft ambient backlight */}
                <div className="absolute inset-8 rounded-full pointer-events-none" />

                <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                        src="/assets/images/3DBooks New.png"
                        alt="The Collingwood Press published book volumes"
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 480px, 520px"
                        className="scale-[1.24] sm:scale-[1.3] lg:scale-[1.34] object-contain drop-shadow-[0_24px_40px_rgba(24,21,17,0.18)]"
                        priority
                    />
                </div>
            </motion.div>
        </>
    );
}