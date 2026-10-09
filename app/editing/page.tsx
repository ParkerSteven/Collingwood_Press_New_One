"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import {
    FileCheck2,
    Sparkles,
    BookOpen,
    CheckCircle2,
    Search,
    Layers,
    ArrowRight,
    ShieldCheck,
    Check,
    MessageSquareQuote,
    ClipboardCheck,
    PenTool,
    CheckCheck,
    Clock,
    PhoneCall
} from "lucide-react";
import { motion } from "framer-motion";

const editingProcessSteps = [
    {
        step: "Step 01",
        number: "01",
        title: "Manuscript Review",
        tagline: "Diagnostic Appraisal",
        description: "A senior trade editor completes a thorough initial evaluation of your complete manuscript, assessing genre positioning, narrative scope, and identifying exact editorial priorities.",
        deliverable: "Editorial Diagnostic Brief",
        icon: Search,
    },
    {
        step: "Step 02",
        number: "02",
        title: "Developmental / Structural Editing",
        tagline: "Macro Architecture",
        description: "We evaluate the big picture: narrative pacing, thematic tension, chapter transitions, character consistency, and structural symmetry to ensure your story grips readers.",
        deliverable: "Comprehensive Revision Roadmap",
        icon: Layers,
    },
    {
        step: "Step 03",
        number: "03",
        title: "Line Editing & Proofreading",
        tagline: "Micro Precision & Style",
        description: "Working sentence-by-sentence, we polish rhythm, cadence, and vocabulary while strictly enforcing the Chicago Manual of Style (CMOS 17) for grammatical perfection.",
        deliverable: "Inline Tracked Changes & Notes",
        icon: PenTool,
    },
    {
        step: "Step 04",
        number: "04",
        title: "Final Quality Review",
        tagline: "Production Readiness",
        description: "A fresh pair of senior editorial eyes conducts an exhaustive quality sweep to verify style sheet adherence, timeline accuracy, and zero-tolerance typographical clean-up.",
        deliverable: "Publication-Ready Master File",
        icon: ClipboardCheck,
    },
];

const editorialTiers = [
    {
        tier: "Tier 01",
        name: "Developmental & Structural Editing",
        tagline: "The Big-Picture Architecture",
        description: "Our senior trade editors analyze narrative pacing, structural symmetry, thematic depth, character motivation, and genre conventions to ensure your book holds reader attention effortlessly.",
        focus: [
            "Narrative pacing and tension curves",
            "Plot hole detection & thematic resolution",
            "Character arc consistency and dialogue authenticity",
            "Chapter transitions & hook effectiveness",
        ],
        badge: "Architectural Surgery",
    },
    {
        tier: "Tier 02",
        name: "Line & Stylistic Editing",
        tagline: "The Poetry and Rhythm of Your Prose",
        description: "Working at the paragraph and sentence level, we polish cadence, elevate vocabulary, eliminate repetition, and sharpen imagery while protecting your signature authorial voice.",
        focus: [
            "Sentence cadence, rhythm, and lyrical flow",
            "Word choice refinement & passive voice reduction",
            "Dialogue naturalness and emotional resonance",
            "Tonal consistency across all chapters",
        ],
        badge: "Voice & Cadence",
    },
    {
        tier: "Tier 03",
        name: "Comprehensive Copyediting",
        tagline: "Trade-Grade Grammatical Rigor",
        description: "Strict adherence to the Chicago Manual of Style (17th Edition) and Merriam-Webster's Collegiate Dictionary. We scrutinize spelling, hyphenation, continuity, and factual references.",
        focus: [
            "Full Chicago Manual of Style (CMOS 17) compliance",
            "Grammar, punctuation, and syntax precision",
            "Timeline, character detail & fact-checking",
            "Comprehensive custom project style sheet",
        ],
        badge: "CMOS 17 Compliance",
    },
    {
        tier: "Tier 04",
        name: "Cold Galley Proofreading",
        tagline: "The Final Defense Before Print",
        description: "Performed on typeset galley proofs by fresh eyes who have never read the manuscript. We eliminate typographical slips, hyphen ladders, bad page breaks, and orphan lines.",
        focus: [
            "Fresh-eyes pass on typeset PDF proofs",
            "Widows, orphans, and awkward hyphenation ladders",
            "Running headers, pagination, and TOC verification",
            "Zero-tolerance error sweep before print run",
        ],
        badge: "Galley Verification",
    },
];

export default function EditingPage() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">
                {/* Hero Section */}
                <section className="editing-hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white">
                    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E7665D]/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                            <Eyebrow tone="coral" align="center">
                                Trade Publishing Standards &bull; Chicago Manual of Style
                            </Eyebrow>

                            <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                                Every line sharpened.{" "}
                                <span className="italic text-[#E7665D] block sm:inline">Every voice preserved.</span>
                            </h1>

                            <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                                Real trade publishing requires more than automated spelling checks. Our senior editors read your prose with literary sensitivity, challenging your manuscript where it needs discipline and honoring it where it shines.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                                    <span>Claim a Free 1,000-Word Sample Edit</span>
                                    <ArrowRight size={15} />
                                </Button>
                                <Button href="#process" variant="outline-white" size="lg">
                                    <span>View Our Editing Process</span>
                                </Button>
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/75">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-[#E7665D]" />
                                    <span>Experienced Trade Press Editors</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-[#E7665D]" />
                                    <span>Chicago Manual of Style 17th Edition</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileCheck2 size={14} className="text-[#E7665D]" />
                                    <span>Track Changes &amp; Direct Phone Consultations</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* REQUIRED NEW SECTION: Our Editing Process */}
                <section id="process" className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line">
                    <Container className="flex flex-col gap-14 sm:gap-16">
                        <SectionHeading
                            eyebrow="Chronological Manuscript Journey"
                            title={
                                <>
                                    Our four-step{" "}
                                    <span className="italic text-[#E7665D]">editorial process</span>
                                </>
                            }
                            description="Every manuscript follows a disciplined, transparent editorial sequence engineered to elevate readability without compromising your authentic authorial voice."
                        />

                        {/* 4-Step Process Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                            {editingProcessSteps.map((step, idx) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={step.title}
                                        className="group relative rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            {/* Top Step Header */}
                                            <div className="flex items-center justify-between pb-4 mb-5 border-b border-line/70">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25 group-hover:bg-[#E7665D] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                                    <Icon size={20} />
                                                </div>
                                                <span className="font-serif text-2xl font-normal text-ink-muted/40 group-hover:text-[#E7665D] transition-colors">
                                                    {step.number}
                                                </span>
                                            </div>

                                            <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-1">
                                                {step.step}
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
                                                Key Deliverable
                                            </span>
                                            <span className="text-xs font-semibold text-ink mt-0.5 block">
                                                {step.deliverable}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Process Reassurance Footnote */}
                        <div className="p-6 rounded-lg border border-[#E7665D]/20 bg-white shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30">
                                    <PhoneCall size={16} />
                                </div>
                                <span className="text-xs sm:text-sm text-ink-soft font-sans">
                                    <strong>Collaborative Milestone Calls:</strong> You speak directly with your assigned trade editor at every stage of the revision process.
                                </span>
                            </div>
                            <Button href="/contact-us#manuscript-review" variant="outline" size="sm" className="shrink-0">
                                <span>Speak with an Editor</span>
                            </Button>
                        </div>
                    </Container>
                </section>

                {/* The 4 Editorial Tiers */}
                <section id="tiers" className="py-20 lg:py-28 bg-white border-b border-line">
                    <Container className="flex flex-col gap-14">
                        <SectionHeading
                            eyebrow="Comprehensive Editorial Rigor"
                            title={
                                <>
                                    Four distinct levels of{" "}
                                    <span className="italic text-[#E7665D]">editorial craftsmanship</span>
                                </>
                            }
                            description="From high-level architectural surgery to final word-by-word proofing, each tier fulfills a vital role in taking your manuscript from raw draft to trade-grade volume."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {editorialTiers.map((item) => (
                                <div
                                    key={item.name}
                                    className="p-8 sm:p-10 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300"
                                >
                                    <div>
                                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-line">
                                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                                {item.tier}
                                            </span>
                                            <span className="font-sans text-[11px] text-ink-muted bg-[#fdf6f5] px-2.5 py-1 rounded-md border border-[#E7665D]/20 font-medium">
                                                {item.badge}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-[1.38rem] font-bold text-ink leading-snug">
                                            {item.name}
                                        </h3>
                                        <span className="text-xs text-ink-muted italic block mt-1">
                                            {item.tagline}
                                        </span>

                                        <p className="mt-3.5 text-sm text-ink-soft leading-relaxed">
                                            {item.description}
                                        </p>

                                        <div className="mt-6 pt-5 border-t border-line/70">
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#E7665D] block mb-3">
                                                Included Focus Areas
                                            </span>
                                            <ul className="flex flex-col gap-2.5 text-xs text-ink-soft">
                                                {item.focus.map((pt) => (
                                                    <li key={pt} className="flex items-start gap-2.5">
                                                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E7665D]/15 text-[#E7665D] text-[10px] mt-0.5 font-bold">
                                                            ✓
                                                        </span>
                                                        <span className="leading-snug">{pt}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Sample Edit Callout */}
                <section className="hero-gradient py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden paper-grain">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />
                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                                Risk-Free Sample Evaluation
                            </span>
                            <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                                Experience our editorial hand before committing
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                                Send us your first 1,000 words. Within 48 hours, a senior trade editor returns your pages marked with inline tracked changes, constructive marginalia, and a diagnostic summary.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                                    <span>Submit Sample for Free Edit</span>
                                    <ArrowRight size={15} />
                                </Button>
                                <Button href="/contact-us" variant="outline-white" size="lg">
                                    <span>Inquire with Questions</span>
                                </Button>
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/75 w-full max-w-2xl">
                                <div className="flex items-center justify-center gap-2">
                                    <Clock size={14} className="text-[#E7665D]" />
                                    <span>48-Hour Turnaround</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <CheckCheck size={14} className="text-[#E7665D]" />
                                    <span>No Purchase Obligation</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <ShieldCheck size={14} className="text-[#E7665D]" />
                                    <span>Strict NDA Protected</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
