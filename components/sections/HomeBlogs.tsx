"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowUpRight,
    BookOpenText,
    Megaphone,
    PenLine,
} from "lucide-react";

import Container from "@/components/ui/Container";

const blogPosts = [
    {
        number: "01",
        icon: BookOpenText,
        category: "Publishing Costs",
        title: "The Real Cost of Publishing a Book, Broken Down",
        description:
            "An honest look at what professional editing, cover design, interior layout, printing and distribution cost, with advice on budgeting wisely.",
        href: "", // Add actual published guide URL
    },
    {
        number: "02",
        icon: Megaphone,
        category: "Book Marketing",
        title: "Book Marketing Strategies That Actually Move Copies",
        description:
            "Proven ways to build an audience, earn reviews, run ad campaigns and keep sales moving months after release.",
        href: "", // Add actual published guide URL
    },
    {
        number: "03",
        icon: PenLine,
        category: "Editorial Guidance",
        title: "A First-Time Author's Guide to the Editing Process",
        description:
            "How developmental editing, line editing, copy editing and proofreading differ, and which stages your manuscript actually needs.",
        href: "", // Add actual published guide URL
    },
];


export default function HomeBlogs() {
    return (
        <section
            id="publishing-insights"
            aria-labelledby="publishing-insights-heading"
            className="relative overflow-hidden border-b border-line bg-[#FCFAF7] py-20 lg:py-28"
        >
            <Container>
                {/* Blog Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
                >
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-[#E7665D]" />

                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
                            From The Collingwood Press
                        </span>

                        <span className="h-px w-8 bg-[#E7665D]" />
                    </div>

                    <h2
                        id="publishing-insights-heading"
                        className="font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
                    >
                        Publishing Insights{" "}
                        <span className="italic text-[#E7665D]">
                            & Industry Guides
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl font-sans text-[0.96rem] leading-[1.85] text-ink-muted sm:text-[1.04rem]">
                        The publishing landscape shifts quickly. Stay
                        ahead with practical guides and honest
                        perspectives from our editorial team.
                    </p>
                </motion.div>

                {/* Blog cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {blogPosts.map((post, index) => {
                        const Icon = post.icon;

                        return (
                            <motion.article
                                key={post.number}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.1,
                                }}
                                className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#E7665D]/20 bg-white shadow-[0_5px_24px_rgba(17,26,48,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_12px_32px_rgba(231,102,93,0.1)]"
                            >
                                {/* Article visual header */}
                                <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-[#E7665D]/10 bg-gradient-to-br from-[#172238] to-[#263650]">
                                    <div className="absolute h-36 w-36 rounded-full border border-white/10" />
                                    <div className="absolute h-24 w-24 rounded-full border border-[#E7665D]/20" />

                                    <Icon
                                        size={49}
                                        strokeWidth={1.1}
                                        aria-hidden="true"
                                        className="relative z-10 text-[#F08A82]"
                                    />

                                    <span className="absolute left-5 top-5 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70">
                                        {post.category}
                                    </span>

                                    <span className="absolute bottom-4 right-5 font-serif text-3xl italic text-white/20">
                                        {post.number}
                                    </span>
                                </div>

                                {/* Article content */}
                                <div className="flex flex-1 flex-col p-7 sm:p-8">
                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E7665D]">
                                        Publishing Insights
                                    </span>

                                    <h3 className="mt-3 font-serif text-[1.3rem] font-medium leading-[1.22] text-ink sm:text-[1.5rem]">
                                        {post.title}
                                    </h3>

                                    <p className="mt-4 font-sans text-[0.9rem] leading-[1.85] text-ink-muted">
                                        {post.description}
                                    </p>

                                    {/* Article link */}
                                    <div className="mt-auto pt-8">
                                        <div className="border-t border-line/80 pt-5">
                                            {post.href ? (
                                                <Link
                                                    href={post.href}
                                                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#E7665D] transition-colors hover:text-ink"
                                                >
                                                    Read the guide
                                                    <ArrowUpRight
                                                        size={17}
                                                        aria-hidden="true"
                                                    />
                                                </Link>
                                            ) : (
                                                <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#E7665D]">
                                                    Read the guide
                                                    <ArrowUpRight
                                                        size={17}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}