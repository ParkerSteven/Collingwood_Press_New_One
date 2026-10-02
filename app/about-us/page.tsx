"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectManagers, stats } from "@/lib/data";
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
    Check
} from "lucide-react";

const blogArticles = [
    {
        title: "Trade Publishing vs. Vanity Mills: A Candid Author's Guide",
        date: "August 2026",
        excerpt: "How to identify predatory automated self-publishing factories and protect your manuscript's intellectual property and financial future.",
    },
    {
        title: "The Typography of a Bestseller: Why InDesign Matters",
        date: "July 2026",
        excerpt: "An inside look at gutter margins, baseline grids, running headers, and why automated PDF template conversions ruin the reading experience.",
    },
    {
        title: "Navigating Advance Reading Copies (ARCs) for Maximum Impact",
        date: "June 2026",
        excerpt: "Strategic timing, reviewer outreach etiquette, and how verified reader reviews create organic Amazon and Goodreads momentum.",
    },
];

const partners = [
    { name: "Ingram Content Group", role: "Global Wholesale Booktrade Distribution" },
    { name: "IBPA (Independent Book Publishers Association)", role: "Trade Code of Ethics & Standards" },
    { name: "Better Business Bureau (BBB A+)", role: "Accredited Commercial Integrity" },
    { name: "Bowker Identifier Services", role: "Official Global ISBN & Barcode Registry" },
];

const coreValues = [
    {
        title: "Editorial Honesty",
        desc: "We challenge your manuscript where it needs discipline and champion it where it shines—never sycophantic praise or generic checks.",
        icon: Target,
    },
    {
        title: "Typographical Respect",
        desc: "Books are cultural artifacts. We honor classical typesetting, balanced gutters, and tactile embellishments worthy of private libraries.",
        icon: Compass,
    },
    {
        title: "Author Sovereignty",
        desc: "You retain 100% of your copyright, creative ownership, master files, and every dollar of net retail royalties without exception.",
        icon: ShieldCheck,
    },
    {
        title: "Human Partnership",
        desc: "Every author is assigned a named, seasoned trade editor with direct telephone consultation access at every phase of publication.",
        icon: HeartHandshake,
    },
];

export default function AboutUsPage() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">
                {/* Hero */}
                <section className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white">
                    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E7665D]/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                            <Eyebrow tone="coral" align="center">
                                Founded 2009 &bull; Subsidiary of Hambone Publishers LLC
                            </Eyebrow>

                            <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                                Dedicated to shepherding fine manuscripts into{" "}
                                <span className="italic text-[#E7665D] block sm:inline">shelf-ready literature.</span>
                            </h1>

                            <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                                The Collingwood Press was established on a simple, enduring premise: that independent authors deserve the exact same editorial caliber, typographical majesty, and global bookstore distribution once reserved only for major New York publishing houses.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                <Button href="#team" variant="primary" size="lg">
                                    <span>Meet Our Publishing Directors</span>
                                    <ArrowRight size={15} />
                                </Button>
                                <Button href="/contact-us" variant="outline-white" size="lg">
                                    <span>Contact Our Editorial Desk</span>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Key Milestones & Statistics Bar */}
                <section className="py-12 bg-white border-b border-line">
                    <Container>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {stats.map((item) => (
                                <div key={item.label} className="p-4 flex flex-col items-center">
                                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E7665D]">
                                        {item.value}
                                    </span>
                                    <span className="font-sans text-xs sm:text-sm font-semibold text-ink mt-1">
                                        {item.label}
                                    </span>
                                    <span className="font-sans text-[11px] text-ink-muted mt-0.5 max-w-[180px]">
                                        {item.subtext}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* The Heritage Story & Mission / Vision */}
                <section className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div className="flex flex-col gap-5">
                                <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#E7665D]">
                                    Our Heritage &amp; Ethos
                                </span>
                                <h2 className="font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-ink leading-tight">
                                    An editor&rsquo;s press built on human relationships
                                </h2>
                                <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                                    The commercial book industry has fractured into two extremes: indifferent legacy gatekeepers who reject 99% of manuscripts without reading past page three, and predatory vanity mills that automate PDF conversions with zero editorial oversight.
                                </p>
                                <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                                    The Collingwood Press, operating proudly as a subsidiary of Hambone Publishers LLC, bridges this chasm. We provide authors with a true publishing partner: an acquisitions editor who reads your draft line-by-line, discusses changes by phone, and protects your creative ownership unconditionally.
                                </p>
                            </div>

                            <div className="p-8 sm:p-10 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col gap-6">
                                <h3 className="font-serif text-xl font-bold text-ink">
                                    The Collingwood Press Commitments
                                </h3>
                                <div className="flex flex-col gap-4 text-xs sm:text-sm text-ink-soft">
                                    <div className="flex items-start gap-3">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold mt-0.5">
                                            ✓
                                        </span>
                                        <span><strong>100% Author Ownership:</strong> You retain complete creative copyright, film rights, and author royalties for all time.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold mt-0.5">
                                            ✓
                                        </span>
                                        <span><strong>Dedicated Direct Access:</strong> Every author is paired with a named, seasoned trade editor with direct telephone access.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold mt-0.5">
                                            ✓
                                        </span>
                                        <span><strong>Master Craftsmanship:</strong> Zero automated templates. Custom InDesign interiors, bespoke artwork, and archival proofs.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mission & Vision Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-14 pt-12 border-t border-line/70">
                            <div className="p-8 rounded-xl bg-white border border-[#E7665D]/25 shadow-sm">
                                <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-2">
                                    Our Mission
                                </span>
                                <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                                    Democratizing Trade-Caliber Literature
                                </h3>
                                <p className="text-sm text-ink-soft leading-relaxed">
                                    To provide discerning independent authors with the exact same high-level developmental editing, InDesign interior typography, bespoke jacket artistry, and global bookstore distribution once exclusively controlled by legacy publishers.
                                </p>
                            </div>

                            <div className="p-8 rounded-xl bg-white border border-[#E7665D]/25 shadow-sm">
                                <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-2">
                                    Our Vision
                                </span>
                                <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                                    Author Sovereignty &amp; Enduring Craft
                                </h3>
                                <p className="text-sm text-ink-soft leading-relaxed">
                                    A literary landscape where serious writers never have to sacrifice their copyright, royalty rights, or artistic voice to see their work printed in heirloom-grade physical editions and stocked in global libraries.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Core Values Section */}
                <section className="py-20 lg:py-28 bg-white border-b border-line">
                    <Container className="flex flex-col gap-14">
                        <SectionHeading
                            eyebrow="Foundational Principles"
                            title={
                                <>
                                    The values that guide{" "}
                                    <span className="italic text-[#E7665D]">every manuscript</span>
                                </>
                            }
                            description="We operate without corporate indifference or automated shortcuts. These four pillars anchor every author relationship."
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
                <section id="team" className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line">
                    <Container className="flex flex-col gap-14">
                        <SectionHeading
                            eyebrow="Publishing Leadership"
                            title={
                                <>
                                    Meet the senior directors{" "}
                                    <span className="italic text-[#E7665D]">guiding your title</span>
                                </>
                            }
                            description="Our directors bring decades of trade press, university press, and literary agency experience directly to your publishing journey."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {projectManagers.map((pm) => (
                                <div
                                    key={pm.name}
                                    className="rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] overflow-hidden flex flex-col justify-between hover:border-[#E7665D]/50 transition-all duration-300"
                                >
                                    <div>
                                        <div className="h-64 overflow-hidden relative">
                                            <img
                                                src={pm.avatar}
                                                alt={pm.name}
                                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                            <div className="absolute bottom-3 left-4 right-4 text-white">
                                                <span className="text-[10px] uppercase tracking-wider text-white/80 font-medium block">
                                                    {pm.experience}
                                                </span>
                                                <h3 className="font-serif text-lg font-bold">
                                                    {pm.name}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <span className="text-xs uppercase font-medium text-[#E7665D] block mb-2">
                                                {pm.title}
                                            </span>
                                            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                                                {pm.bio}
                                            </p>
                                            <div className="mt-4 p-3 rounded-md bg-[#fdf6f5] border-l-2 border-[#E7665D] text-xs font-serif italic text-ink/90">
                                                {pm.philosophy}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Partners Anchor Section */}
                <section id="partners" className="py-20 bg-white border-b border-line">
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            eyebrow="Industry Standing &amp; Accreditations"
                            title={
                                <>
                                    Collingwood Partners &amp;{" "}
                                    <span className="italic text-[#E7665D]">Trade Affiliations</span>
                                </>
                            }
                            description="We maintain strict operational standards verified by the industry's most reputable governing bodies and distributors."
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
                            {partners.map((p) => (
                                <div
                                    key={p.name}
                                    className="p-6 sm:p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between text-center items-center hover:border-[#E7665D]/50 transition-all duration-300"
                                >
                                    <Award size={26} className="text-[#E7665D] mb-3" />
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
                <section id="blog" className="py-20 lg:py-24 bg-[#fdfbf7] border-b border-line">
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            eyebrow="Author Educational Dispatches"
                            title={
                                <>
                                    From the The Collingwood Press{" "}
                                    <span className="italic text-[#E7665D]">Editorial Blog</span>
                                </>
                            }
                            description="In-depth analysis, craft guidance, and industry insights written by senior publishing editors."
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
                                        <Button href="/contact-us" variant="outline" size="sm" className="w-full">
                                            <span>Read Dispatch</span>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* AI & LLM Resources Anchor Section */}
                <section id="ai-resources" className="hero-gradient py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden paper-grain">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />
                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-10">
                                <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                                    Technology &amp; Authorship Ethics
                                </span>
                                <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                                    AI &amp; LLM Publishing Resources Policy
                                </h2>
                                <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                                    How The Collingwood Press protects human creative copyright while empowering authors with responsible, ethical research tools.
                                </p>
                            </div>

                            <div className="p-8 sm:p-9 rounded-xl border border-white/10 bg-white/[0.04] flex flex-col gap-5">
                                <div>
                                    <h3 className="font-serif text-lg font-bold text-[#F08A82]">
                                        1. Zero AI Ghostwriting or Automated Prose Substitution
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                                        The Collingwood Press strictly refuses to use automated LLM text generation in place of human trade editors or ghostwriters. Every manuscript line is drafted, refined, and typeset by real publishing professionals.
                                    </p>
                                </div>

                                <div className="border-t border-white/10 pt-4">
                                    <h3 className="font-serif text-lg font-bold text-[#F08A82]">
                                        2. Copyright Protection &amp; LLM Scraping Defense
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                                        We register and file official copyright notices, digital watermarks, and DRM configurations designed to shield your intellectual property from unauthorized ingestion by commercial artificial intelligence training sets.
                                    </p>
                                </div>

                                <div className="border-t border-white/10 pt-4">
                                    <h3 className="font-serif text-lg font-bold text-[#F08A82]">
                                        3. Ethical Research &amp; Market Discovery Assistance
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                                        We provide authors with guidance on using modern research tools ethically for historical fact verification, comparative title search, and metadata keyword analysis without compromising creative integrity.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 text-center">
                                <Button href="/contact-us" variant="primary" size="lg">
                                    <span>Inquire About Author Copyright Defense</span>
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
