"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import {
    Book,
    Layers,
    Sparkles,
    Globe,
    Download,
    CheckSquare,
    ShieldCheck,
    ArrowRight,
    Palette,
    FileSpreadsheet,
    FileText,
    Settings,
    Rocket,
    CheckCircle2,
    BookOpenCheck,
    Printer
} from "lucide-react";
import { formats } from "@/lib/formats";

const publishingRoadmap = [
    {
        number: "01",
        title: "Manuscript Preparation",
        tagline: "Editorial & Intake Sign-Off",
        description: "Your complete manuscript undergoes final file preparation, character styling verification, and intake audits to ensure zero formatting conflicts prior to layout.",
        milestone: "Certified Clean Master Document",
        icon: FileText,
    },
    {
        number: "02",
        title: "Cover & Interior Design",
        tagline: "Visual & Tactile Artistry",
        description: "Bespoke dust jacket artwork, typography, and tactile embellishments (foil stamping, emboss, soft-touch matte) paired with customized classical interior layout.",
        milestone: "Jacket Mechanicals & Sample Spreads",
        icon: Palette,
    },
    {
        number: "03",
        title: "Formatting & Typesetting",
        tagline: "Adobe InDesign Precision",
        description: "Handcrafted interior pagination eliminating widows, orphans, and hyphen ladders. We build print-ready PDFs and reflowable ePub3 files for all e-readers.",
        milestone: "Full Bound Galley Proof",
        icon: Layers,
    },
    {
        number: "04",
        title: "Publishing Setup",
        tagline: "Identifiers & Legal Cataloging",
        description: "We secure your dedicated Bowker ISBNs, assign official EAN barcodes, file Library of Congress Control Numbers (LCCN), and optimize BISAC search keywords.",
        milestone: "Official Global Catalog Filings",
        icon: Settings,
    },
    {
        number: "05",
        title: "Trade Distribution",
        tagline: "Global Wholesale Ingestion",
        description: "Ingestion into the Ingram Content Group distribution network, making your book orderable across 40,000+ bookstores, Barnes & Noble, Amazon, and university libraries.",
        milestone: "Active Worldwide Bookseller Feed",
        icon: Globe,
    },
    {
        number: "06",
        title: "Launch & Release",
        tagline: "Publication Day Rollout",
        description: "Synchronized market debut with synchronized live retail pages, physical availability for ordering, author discount author copy shipments, and promotional activation.",
        milestone: "Shelf-Ready Physical & Digital Book",
        icon: Rocket,
    },
];


const checklistItems = [
    "Complete polished manuscript in Word or RTF format",
    "Working author bio, credentials, and high-resolution portrait",
    "Genre positioning & competitive title analysis",
    "Dedicated ISBN registration & Barcode assignment",
    "Library of Congress Control Number (LCCN) filing",
    "BISAC subject categories & metadata search keywords",
    "Interior typesetting approval & physical proof review",
    "Final jacket mechanical proof & foil registration sign-off",
];

const retailers: { name: string; slug?: string; img: string; color: string }[] = [
    { name: "Amazon", img: "/amazon.png", color: "FF9900" },
    { name: "Barnes & Noble", img: "/b&n.svg", color: "00704A" },
    { name: "Apple Books", img: "/applebook.webp", color: "000000" },
    { name: "Google Play Books", img: "/google-play-books.png", color: "4285F4" },
    { name: "Kobo", img: "/kobo.png", color: "F68B1E" },
    { name: "Goodreads", img: "/goodreads.svg", color: "553B08" },
    { name: "Scribd", img: "/scribd.svg", color: "1E7B85" },
    { name: "IngramSpark", img: "/ingramSpark.png", color: "1F3A2E" },
    { name: "OverDrive", img: "/overdrive.svg", color: "0D65A6" },
    { name: "Books-A-Million", img: "/bam.png", color: "C8102E" },
    { name: "Lulu", img: "/lulu.svg", color: "E63946" },
    { name: "Smashwords", img: "/sw.png", color: "F5A623" },
];

export default function PublishingPage() {
    const list = [...retailers, ...retailers];
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
                                Full-Service Independent Trade Publishing
                            </Eyebrow>

                            <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                                From manuscript draft to{" "}
                                <span className="italic text-[#E7665D] block sm:inline">world-class physical book.</span>
                            </h1>

                            <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                                We reject automated converters and generic templates. Every Collingwood edition is custom-typeset in Adobe InDesign, dressed in bespoke jacket artwork, and distributed worldwide through the premier bookseller networks.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                                    <span>Submit Manuscript for Publishing</span>
                                    <ArrowRight size={15} />
                                </Button>
                                <Button href="#publishing-process" variant="outline-white" size="lg">
                                    <span>Explore The 6-Step Journey</span>
                                </Button>
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/75">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-[#E7665D]" />
                                    <span>Ingram Global Wholesale Distribution</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-[#E7665D]" />
                                    <span>100% Author Copyright &amp; Royalties</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpenCheck size={14} className="text-[#E7665D]" />
                                    <span>Custom InDesign Craftsmanship</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* REQUIRED NEW SECTION: From Manuscript to Published Book */}
                <section id="publishing-process" className="py-20 lg:py-20 bg-[#fdfbf7] border-b border-line">
                    <div className="relative mx-auto max-w-[1360px] px-6 lg:px-12 pt-6 pb-2">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-px bg-[#E7665D]/60" />
                                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#E7665D] font-semibold">
                                    Global Distribution Channels
                                </span>
                                <span className="w-8 h-px bg-[#E7665D]/60" />
                            </div>
                            <h2 className="mt-3 font-serif text-[1.9rem] sm:text-[2.2rem] font-bold text-ink tracking-tight">
                                Distributed to Every <span className="italic text-[#E7665D]">Major Retailer</span>
                            </h2>
                            <p className="mt-1 text-xs sm:text-sm text-ink-muted">
                                Hover over any card to view the partner mark
                            </p>
                        </div>
                    </div>

                    <div className="relative pt-4 pb-12 lg:mb-20  [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] overflow-hidden">
                        <div className="carousel-track flex gap-4 w-max px-6 animate-marquee">
                            {list.map((r, i) => (
                                <div
                                    key={`${r.name}-${i}`}
                                    className="flip-card w-[200px] h-[92px] flex-none cursor-pointer"
                                    tabIndex={0}
                                >
                                    <div className="flip-inner shadow-sm hover:shadow-md transition-shadow">
                                        {/* Front — name only */}
                                        <div className="flip-face bg-paper/95 border border-line hover:border-[#E7665D] transition-colors">
                                            <span className="font-serif text-[16px] tracking-wide text-ink text-center px-3 font-semibold">
                                                {r.name}
                                            </span>
                                        </div>
                                        {/* Back — colored brand logo */}
                                        <div className="flip-face flip-back bg-white border border-[#E7665D]/30 px-4">
                                            {r.img ? (
                                                <Image
                                                    src={r.img}
                                                    alt={r.name}
                                                    width={150}
                                                    height={42}
                                                    className="max-h-[42px] max-w-[150px] w-auto h-auto object-contain"
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Container className="flex flex-col gap-14 sm:gap-16">
                        <SectionHeading
                            eyebrow="The End-to-End Roadmap"
                            title={
                                <>
                                    From Manuscript to{" "}
                                    <span className="italic text-[#E7665D]">Published Book</span>
                                </>
                            }
                            description="A clear, structured six-step trajectory that carries your story from raw draft to physical bookshelves worldwide with complete transparency."
                        />

                        {/* 6-Step Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {publishingRoadmap.map((step) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={step.title}
                                        className="group relative rounded-xl border border-[#E7665D]/25 bg-white p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-line/70">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25 group-hover:bg-[#E7665D] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                                    <Icon size={20} />
                                                </div>
                                                <span className="font-serif text-2xl font-normal text-ink-muted/40 group-hover:text-[#E7665D] transition-colors">
                                                    {step.number}
                                                </span>
                                            </div>

                                            <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-1">
                                                Phase {step.number}
                                            </span>

                                            <h3 className="font-serif text-[1.28rem] font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                                {step.title}
                                            </h3>

                                            <span className="text-[11px] text-ink-muted italic block mt-1 mb-3">
                                                {step.tagline}
                                            </span>

                                            <p className="text-sm text-ink-soft leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-line/70">
                                            <span className="text-[10px] uppercase tracking-wider text-ink-muted block font-semibold">
                                                Milestone Deliverable
                                            </span>
                                            <span className="text-xs font-semibold text-ink mt-0.5 block">
                                                {step.milestone}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                {/* Formats Section */}
                <section className="py-20 lg:py-24 bg-white border-b border-line">
                    <SectionHeading
                        eyebrow="Three Coordinated Editions"
                        title={
                            <>
                                Crafted for every reading environment,{" "}
                                <span className="italic text-[#E7665D]">compromised on none</span>
                            </>
                        }
                        description="Every acquired title is prepared simultaneously across hardcover, paperback, and reflowable digital formats."
                    />
                    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-20">
                        {/* LEFT: Content */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col">
                                {formats.map((f) => {
                                    const Icon = f.icon;
                                    return (
                                        <div
                                            key={f.title}
                                            className="flex items-start gap-5 py-6 border-t border-[#E7665D]/20 last:border-b"
                                        >
                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30">
                                                <Icon size={22} />
                                            </span>

                                            <div className="flex-1">
                                                <div className="flex items-center justify-between gap-3">
                                                    <h3 className="font-serif text-[1.2rem] font-bold text-ink">
                                                        {f.title}
                                                    </h3>
                                                    <span className="shrink-0 font-sans text-[10.5px] uppercase tracking-[0.16em] text-ink-muted font-semibold bg-[#fdf6f5] px-2.5 py-1 rounded-md border border-[#E7665D]/20">
                                                        {f.badge}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-ink-muted italic block mt-0.5 mb-2">
                                                    {f.tagline}
                                                </span>
                                                <p className="text-sm text-ink-soft leading-relaxed">
                                                    {f.specs}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* RIGHT: Dummy book covers */}
                        <div className="relative flex items-center justify-center py-10">
                            {/* soft backdrop */}
                            <div className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-3xl bg-[#fdf6f5] border border-[#E7665D]/15 -z-10" />

                            {/* back book */}
                            <div className="absolute w-[200px] sm:w-[240px] aspect-[2/3] -translate-x-24 sm:-translate-x-32 rotate-[-8deg] rounded-r-md rounded-l-sm bg-gradient-to-br from-[#2b2b3a] to-[#14141c] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.35)] flex flex-col justify-between p-5 opacity-90">
                                <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">A Novel</span>
                                <div>
                                    <p className="font-serif text-lg font-bold text-white leading-tight">
                                        The Quiet Hours
                                    </p>
                                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/60">
                                        Maya Hartwell
                                    </p>
                                </div>
                            </div>

                            {/* front book */}
                            <div className="relative w-[240px] sm:w-[290px] aspect-[2/3] rotate-[3deg] rounded-r-lg rounded-l-sm bg-gradient-to-br from-[#E7665D] via-[#d9564d] to-[#b8433b] shadow-[0_30px_60px_-12px_rgba(231,102,93,0.55),0_8px_20px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col justify-between p-7 sm:p-8">
                                {/* spine */}
                                <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-r from-black/30 to-transparent" />
                                <div className="absolute left-3 top-0 h-full w-px bg-white/20" />
                                {/* decorative circle */}
                                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/25" />
                                <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full border border-white/20" />

                                <span className="relative text-[10px] uppercase tracking-[0.25em] text-white/80 font-semibold">
                                    Bestselling Edition
                                </span>

                                <div className="relative">
                                    <div className="h-px w-10 bg-white/70 mb-4" />
                                    <h4 className="font-serif text-[1.9rem] sm:text-[2.2rem] font-bold text-white leading-[1.05]">
                                        Where the
                                        <br />
                                        <span className="italic font-normal">Light Falls</span>
                                    </h4>
                                    <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white/85 font-semibold">
                                        Elena Marlowe
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                {/* Cover Design Spotlight Anchor Section */}
                <section id="cover-design" className="py-20 lg:py-24 bg-[#fdfbf7] border-b border-line">
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            eyebrow="Visual Literature"
                            title={
                                <>
                                    Bespoke Cover Design &amp;{" "}
                                    <span className="italic text-[#E7665D]">Tactile Luxury Finishes</span>
                                </>
                            }
                            description="Your dust jacket is the first conversation your book holds with a reader. We craft unforgettable typographic lockups and exquisite tactile embellishments."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
                            <div className="p-8 sm:p-9 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] hover:border-[#E7665D]/50 transition-all duration-300">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-5">
                                    <Palette size={22} />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-ink">
                                    Tactile Embellishments
                                </h3>
                                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                                    Real metallic gold foil stamping, spot UV varnish, custom blind debossing, and velvety soft-touch matte lamination that makes book collectors reluctant to put your volume down.
                                </p>
                                <div className="mt-5 pt-4 border-t border-line/70 flex items-center gap-2 text-xs text-[#E7665D] font-medium">
                                    <CheckCircle2 size={14} />
                                    <span>Gold Foil &bull; Spot UV &bull; French-Folds</span>
                                </div>
                            </div>

                            <div className="p-8 sm:p-9 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] hover:border-[#E7665D]/50 transition-all duration-300">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-5">
                                    <Globe size={22} />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-ink">
                                    Genre-Calibrated Visual Strategy
                                </h3>
                                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                                    We analyze current bestseller lists in your specific subgenre to balance familiar visual conventions with a distinctive artistic identity that stands out on bookstore tables.
                                </p>
                                <div className="mt-5 pt-4 border-t border-line/70 flex items-center gap-2 text-xs text-[#E7665D] font-medium">
                                    <CheckCircle2 size={14} />
                                    <span>Competitive Analysis &bull; Reader Psychology</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Templates & Checklist Anchor Sections */}
                <section id="templates" className="py-20 bg-white border-b border-line">
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            eyebrow="Author Resource Library"
                            title={
                                <>
                                    Manuscript Preparation{" "}
                                    <span className="italic text-[#E7665D]">Templates &amp; Guidelines</span>
                                </>
                            }
                            description="Download industry-standard manuscript formatting templates and style guides crafted by our senior editorial directors."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
                            <div className="p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 transition-all duration-300">
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4">
                                        <FileSpreadsheet size={20} />
                                    </div>
                                    <h4 className="font-serif text-lg font-bold text-ink leading-snug">
                                        Standard Trade Word Template (.docx)
                                    </h4>
                                    <p className="text-xs text-ink-soft mt-2 leading-relaxed">
                                        Standard 1-inch margins, Times / Garamond 12pt, styled headings, and clean page breaks.
                                    </p>
                                </div>
                                <Button href="/contact-us#manuscript-review" variant="outline" size="sm" className="mt-5 w-full">
                                    <span>Request Template</span>
                                </Button>
                            </div>

                            <div className="p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 transition-all duration-300">
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4">
                                        <FileSpreadsheet size={20} />
                                    </div>
                                    <h4 className="font-serif text-lg font-bold text-ink leading-snug">
                                        Memoir Chapter Outline Kit (.pdf)
                                    </h4>
                                    <p className="text-xs text-ink-soft mt-2 leading-relaxed">
                                        Pacing worksheets and emotional arc mapping for autobiographical storytelling.
                                    </p>
                                </div>
                                <Button href="/contact-us#manuscript-review" variant="outline" size="sm" className="mt-5 w-full">
                                    <span>Request Kit</span>
                                </Button>
                            </div>

                            <div className="p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 transition-all duration-300">
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4">
                                        <FileSpreadsheet size={20} />
                                    </div>
                                    <h4 className="font-serif text-lg font-bold text-ink leading-snug">
                                        BISAC Subject Code Reference
                                    </h4>
                                    <p className="text-xs text-ink-soft mt-2 leading-relaxed">
                                        Strategic categorization guide to optimize bookstore discoverability.
                                    </p>
                                </div>
                                <Button href="/contact-us#manuscript-review" variant="outline" size="sm" className="mt-5 w-full">
                                    <span>Request Guide</span>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Author Checklist Anchor Section */}
                <section id="checklist" className="hero-gradient py-20 lg:py-28 text-white border-b border-white/10 relative overflow-hidden paper-grain">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />
                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                                    Production Readiness
                                </span>
                                <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                                    The Collingwood Author Publishing Checklist
                                </h2>
                                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                                    Every milestone we shepherd on your behalf before a single carton of books ships from the bindery.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {checklistItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-lg border border-white/10 bg-white/[0.04] flex items-center gap-3.5 hover:border-[#E7665D]/40 transition-colors"
                                    >
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold">
                                            ✓
                                        </span>
                                        <span className="text-xs sm:text-sm text-slate-200 font-sans">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                                    <span>Begin Your Publishing Journey</span>
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
