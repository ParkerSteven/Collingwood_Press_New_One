"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { AboutStats, aiPolicyData, projectManagers, stats } from "@/lib/data";
import {
    Building2,
    ShieldCheck,
    Award,
    Users,
    BookOpen,
    Cpu,
    ExternalLink,
    ArrowRight,
    Sparkles,
    PhoneCall,
    Target,
    Compass,
    HeartHandshake,
    CheckCircle2,
    Check,
    MessageCircle
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import StatBar from "@/components/sections/StatBar";
import MarketingServices from "@/components/sections/MarketingServices";

export const blogArticles = [
    {
        title: "Trade Publishing vs. Vanity Presses: What Authors Need to Know",
        excerpt:
            "How to tell the difference between a publishing partner that invests in your book and a service that processes files for a fee. What to look for in contracts, pricing models, and production standards.",
        date: "August 2026",
        href: "#",
    },
    {
        title: "Why Interior Typesetting Matters More Than Most Authors Realize",
        excerpt:
            "Margins, baseline grids, running headers, and why automated PDF conversions produce books that look unprofessional on the shelf. A practical look at what proper InDesign typesetting delivers.",
        date: "July 2026",
        href: "#",
    },
    {
        title: "Using Advance Reading Copies (ARCs) to Build Early Momentum",
        excerpt:
            "When to send ARCs, who to send them to, and how verified reader reviews on Amazon and Goodreads create the organic visibility that paid advertising alone cannot produce.",
        date: "June 2026",
        href: "#",
    },
];

export const partners = [
    {
        name: "Ingram Content Group",
        role: "Global wholesale book distribution. Ingram places our titles in 40,000+ bookstores, library systems, and academic institutions worldwide.",
    },
    {
        name: "IBPA (Independent Book Publishers Association)",
        role: "Trade membership and adherence to the IBPA Code of Ethics, the industry standard for independent publisher conduct.",
    },
    {
        name: "Better Business Bureau (BBB A+)",
        role: "Accredited business with an A+ rating for commercial integrity and complaint resolution.",
    },
    {
        name: "Bowker Identifier Services",
        role: "Official ISBN registration and barcode assignment. All ISBNs are registered in the author's name.",
    },
];

export const coreValues = [
    {
        icon: BookOpen,
        title: "Editorial Honesty",
        desc: "Your editor tells you what the manuscript needs, not what you want to hear. Good editing means challenging the work where it falls short and supporting it where it succeeds. We do not offer generic approval or surface-level checks.",
    },
    {
        icon: Award,
        title: "Production Quality",
        desc: "Books are physical and digital products that readers judge on appearance, feel, and readability. We typeset interiors in InDesign, design covers as original compositions, and review printed proofs before a book reaches retail. Templates and automated conversions are not part of our process.",
    },
    {
        icon: ShieldCheck,
        title: "Author Ownership",
        desc: "You retain 100% of your copyright, your master files, and every dollar of net royalties. The ISBN is registered in your name. The retail accounts belong to you. We never take a share of your sales or assign rights to ourselves.",
    },
    {
        icon: MessageCircle,
        title: "Direct Communication",
        desc: "Every author works with a named editor who is available by phone and email throughout the project. You are never handed off to a support team or routed through an automated system. Your editor knows your book because they read it.",
    },
];

export default function AboutUsPage() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">
                {/* Hero */}

                <HeroSection
                    className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white"
                    eyebrow="Founded in 2009. Subsidiary of Hambone Publishers LLC."
                    title="A Book Publishing Company"
                    highlightText="Built Around the Author"
                    description={
                        <p>
                            The Collingwood Press was founded on a straightforward
                            idea: independent authors should have access to the
                            same editorial standards, production quality, and
                            global distribution that traditional publishing houses
                            provide, without giving up their copyright or their
                            royalties. We are a full-service{" "}
                            book publishing company that handles
                            ghostwriting, editing, design, publishing, marketing,
                            and audiobook production under one roof. You keep
                            ownership of your work. We do the production.
                        </p>
                    }
                    buttons={[
                        {
                            text: "Meet Our Publishing Directors",
                            href: "#team",
                            variant: "primary",
                            showArrow: true,
                        },
                        {
                            text: "Contact Our Editorial Desk",
                            href: "/contact-us",
                            variant: "outline-white",
                        },
                    ]}
                    guarantees={[]}
                />

                {/* Key Milestones & Statistics Bar */}
                <StatBar stats={AboutStats} />



                {/* Who We Are - Heritage & Ethos */}
                <section className="py-20 lg:py-14 bg-[#fdfbf7] border-b border-line">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div className="flex flex-col gap-5">
                                <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#E7665D]">
                                    Our Heritage and Ethos
                                </span>

                                <h2 className="font-serif text-[2rem] font-bold text-ink leading-tight">
                                    An Independent Press Built on Direct Author Relationships
                                </h2>

                                <p className="text-sm  text-ink-soft leading-relaxed font-sans">
                                    The publishing industry gives authors two options, and
                                    neither one works well. Traditional houses reject the
                                    vast majority of submissions without reading past the
                                    first few pages. Vanity presses accept everything,
                                    charge upfront fees, and deliver automated output with
                                    no editorial involvement. Neither model serves the
                                    author who has a serious manuscript and wants
                                    professional results.
                                </p>

                                <p className="text-sm text-ink-soft leading-relaxed font-sans">
                                    The Collingwood Press, a subsidiary of Hambone
                                    Publishers LLC, operates as a third option. We pair
                                    every author with a named editor who reads the
                                    manuscript, provides candid feedback by phone, and
                                    manages the project through production and
                                    distribution. We do not use automated formatting
                                    tools. We do not assign your book to a queue. You
                                    work with real people who understand publishing.
                                </p>
                            </div>

                            {/* What We Commit To */}
                            <div className="p-8 sm:p-10 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col gap-6">
                                <h3 className="font-serif text-xl font-bold text-ink">
                                    What We Commit To
                                </h3>

                                <div className="flex flex-col gap-4 text-xs sm:text-sm text-ink-soft">
                                    <div className="flex items-start gap-3">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold mt-0.5">
                                            ✓
                                        </span>
                                        <span>
                                            <strong>100% Author Ownership.</strong>{" "}
                                            You retain full copyright, film rights, and
                                            royalties. That is written into every agreement.
                                        </span>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold mt-0.5">
                                            ✓
                                        </span>
                                        <span>
                                            <strong>Direct Editor Access.</strong>{" "}
                                            Every author is paired with a senior trade
                                            editor. You speak with them by phone. No ticket
                                            systems, no chatbots.
                                        </span>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold mt-0.5">
                                            ✓
                                        </span>
                                        <span>
                                            <strong>Production Standards.</strong>{" "}
                                            Custom InDesign interiors, original cover
                                            artwork, and physical proof review before
                                            any book goes to retail.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mission & Vision Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-14 pt-12 border-t border-line/70">
                            {/* Mission */}
                            <div className="p-8 rounded-xl bg-white border border-[#E7665D]/25 shadow-sm">
                                <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-2">
                                    Our Mission
                                </span>

                                <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                                    Our Mission
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    To give independent authors access to the same
                                    quality of editing, design, and distribution that
                                    the largest publishing houses deliver, without
                                    requiring them to surrender their rights, their
                                    royalties, or their creative direction.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="p-8 rounded-xl bg-white border border-[#E7665D]/25 shadow-sm">
                                <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-2">
                                    Our Vision
                                </span>

                                <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                                    Our Vision
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    A publishing industry where the quality of the
                                    finished book depends on the standards of the
                                    people who made it, not on whether the author
                                    signed with a major house or published
                                    independently.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>



                {/* Core Values Section */}
                <section className="py-20 bg-white border-b border-line">
                    <Container className="flex flex-col gap-14">
                        <SectionHeading
                            eyebrow="How We Work"
                            title={
                                <>
                                    The Values That Guide{" "}
                                    <span className="italic text-[#E7665D]">
                                        Every Project
                                    </span>
                                </>
                            }
                            description="We operate without shortcuts and without indifference. These four principles hold across every manuscript, every author, and every project stage."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
                            {coreValues.map((val) => {
                                const Icon = val.icon;

                                return (
                                    <div
                                        key={val.title}
                                        className="p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] flex flex-col justify-between transition-all duration-300"
                                    >
                                        <div>
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-5">
                                                <Icon size={20} />
                                            </div>

                                            <h4 className="font-serif text-[1.2rem] font-bold text-ink">
                                                {val.title}
                                            </h4>

                                            <p className="mt-2.5 text-xs sm:text-sm text-ink-soft leading-relaxed">
                                                {val.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                {/* Team Anchor Section */}
                <MarketingServices />


                {/* Partners Anchor Section */}
                <section id="partners" className="py-20 bg-white border-b border-line">
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            eyebrow="Trade Affiliations"
                            title={
                                <>
                                    Partners and{" "}
                                    <span className="italic text-[#E7665D]">
                                        Trade Affiliations
                                    </span>
                                </>
                            }
                            description="We maintain verified operational standards through the publishing industry's primary governing bodies and distribution networks."
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
                            {partners.map((p) => (
                                <div
                                    key={p.name}
                                    className="p-6 sm:p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between text-center items-center hover:border-[#E7665D]/50 transition-all duration-300"
                                >
                                    <Award
                                        size={26}
                                        className="text-[#E7665D] mb-3"
                                    />

                                    <h4 className="font-serif text-base font-bold text-ink">
                                        {p.name}
                                    </h4>

                                    <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                                        {p.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>



                {/* Blog Anchor Section */}
                <section
                    id="blog"
                    className="py-20 lg:py-24 bg-[#fdfbf7] border-b border-line"
                >
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            eyebrow="Author Educational Dispatches"
                            title={
                                <>
                                    From the Collingwood Press{" "}
                                    <span className="italic text-[#E7665D]">
                                        Editorial Blog
                                    </span>
                                </>
                            }
                            description="Practical publishing guidance and industry analysis written by our senior editors."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
                            {blogArticles.map((art) => (
                                <div
                                    key={art.title}
                                    className="p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 transition-all duration-300"
                                >
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-[#E7665D] font-semibold block mb-2">
                                            {art.date}
                                        </span>

                                        <h4 className="font-serif text-lg font-bold text-ink leading-snug">
                                            {art.title}
                                        </h4>

                                        <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mt-2.5">
                                            {art.excerpt}
                                        </p>
                                    </div>

                                    <div className="mt-5 pt-3 border-t border-line">
                                        <Button
                                            href={art.href}
                                            variant="outline"
                                            size="sm"
                                            className="w-full"
                                        >
                                            <span>Read More</span>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>


                <section
                    id="ai-resources"
                    className="hero-gradient py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden paper-grain"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto">
                            {/* Section Heading */}
                            <div className="text-center mb-10">
                                <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                                    Technology and Authorship Ethics
                                </span>

                                <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                                    AI and LLM Publishing Resources Policy
                                </h2>

                                <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                                    How The Collingwood Press handles artificial intelligence
                                    tools in relation to the books we produce and the authors
                                    we work with.
                                </p>
                            </div>

                            {/* AI Policy Items */}
                            <div className="p-8 sm:p-9 rounded-xl border border-white/10 bg-white/[0.04] flex flex-col gap-5">
                                {aiPolicyData.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className={
                                            index !== 0
                                                ? "border-t border-white/10 pt-4"
                                                : ""
                                        }
                                    >
                                        <h3 className="font-serif text-lg font-bold text-[#F08A82]">
                                            {index + 1}. {item.title}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="mt-10 text-center">
                                <Button
                                    href="/contact-us"
                                    variant="primary"
                                    size="lg"
                                >
                                    <span>Inquire About Author Copyright Protection</span>
                                    <ArrowRight size={15} />
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
