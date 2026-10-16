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
import FAQAccordion from "./FAQAccordion";
import { editingFAQs } from "@/lib/data";
import FinalCTA from "./FinalCTA";

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
        name: "Proofreading",
        tagline: "The Final Pass Before Publication",
        description:
            "Proofreading is the final pass before publication. It catches typographical errors, spelling mistakes, punctuation inconsistencies, and formatting problems that survive every prior round of editing. This service is for manuscripts that have already been through substantive editing and are ready for production. You receive a clean, corrected manuscript with all changes tracked.",
        focus: [
            "Typographical errors and spelling mistakes",
            "Punctuation and formatting consistency",
            "Final manuscript quality checks",
            "Clean, corrected manuscript with tracked changes",
        ],
        bestFor:
            "Manuscripts that are structurally and stylistically complete.",
        startingPrice: "$0.01 per word",
        turnaround: "1 to 2 weeks",
        badge: "Final Quality Check",
    },
    {
        tier: "Tier 02",
        name: "Copy Editing",
        tagline: "Grammar, Clarity, and Consistency",
        description:
            "Copy editing enforces grammar, punctuation, spelling, syntax, and internal consistency at the sentence level. We follow the Chicago Manual of Style as the default standard. Your editor builds a custom style sheet for your manuscript that documents all terminology decisions, capitalization rules, and hyphenation choices. Timeline errors, character name inconsistencies, and factual questions are flagged. You receive a marked-up manuscript with tracked changes and a style sheet that follows the book into production.",
        focus: [
            "Grammar, punctuation, spelling, and syntax",
            "Chicago Manual of Style compliance",
            "Timeline, character names, and factual consistency",
            "Custom style sheet and tracked changes",
        ],
        bestFor:
            "Manuscripts with a solid structure that need grammatical precision and clarity and consistency.",
        startingPrice: "$0.02 per word",
        turnaround: "2 to 4 weeks",
        badge: "Editorial Precision",
    },
    {
        tier: "Tier 03",
        name: "Line Editing",
        tagline: "Stronger Prose and Author Voice",
        description:
            "Line editing works at the sentence and paragraph level to improve flow and pacing, sharpen word choice, reduce repetition, and strengthen your voice. It is not about fixing errors. It is about making good writing better. Your editor tightens prose, eliminates passive constructions, and ensures tonal consistency across chapters while preserving the way you naturally write. You receive editorial comments and tracked changes throughout the manuscript.",
        focus: [
            "Sentence flow, rhythm, and pacing",
            "Word choice and repetition reduction",
            "Author voice and tonal consistency",
            "Editorial comments and tracked changes",
        ],
        bestFor:
            "Manuscripts that are structurally sound but need stronger prose at the sentence level.",
        startingPrice: "$0.03 per word",
        turnaround: "3 to 5 weeks",
        badge: "Flow & Pacing",
    },
    {
        tier: "Tier 04",
        name: "Developmental Editing",
        tagline: "Structure, Story, and Manuscript Development",
        description:
            "Developmental editing addresses the structure of your book. Your editor evaluates narrative pacing, chapter organization, character arcs, thematic coherence, and genre expectations. For nonfiction, this includes argument structure, evidence placement, and reader progression. You receive a detailed editorial letter with specific, actionable recommendations plus inline comments throughout the manuscript. This is the most intensive level of manuscript editing and the one that produces the largest changes.",
        focus: [
            "Narrative pacing and chapter organization",
            "Character arcs, themes, and genre expectations",
            "Nonfiction argument structure and reader progression",
            "Detailed editorial letter and inline comments",
        ],
        bestFor:
            "First drafts, manuscripts with structural problems, and books where the story or argument is not yet working.",
        startingPrice: "$0.05 per word",
        turnaround: "4 to 8 weeks",
        badge: "Structural Editing",
    },
];


export default function EditingPageClient() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">

                {/* SECTION 1: HERO - BOOK EDITING SERVICES */}
                <section className="editing-hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white">
                    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E7665D]/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">

                            {/* Eyebrow */}
                            <Eyebrow tone="coral" align="center">
                                Professional Editorial Services
                            </Eyebrow>

                            {/* H1 Heading */}
                            <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                                Professional{" "}
                                <span className="italic text-[#E7665D]">
                                    Book Editing Services
                                </span>
                            </h1>

                            {/* Hero Description */}
                            <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                                A manuscript that loses readers in the first three
                                chapters usually has a fixable problem. The pacing
                                drags. The structure wanders. The sentences are
                                clear to the writer but confusing to everyone else.
                                These are editing problems, and they are the reason
                                most rejection letters exist. Our
                                book editing services cover four
                                levels of professional editing:
                                proofreading, copy editing, line editing, and
                                developmental editing. Each one targets a different
                                layer of the manuscript, and your editor recommends
                                exactly which levels your book needs after reading
                                the opening pages. You receive a{" "}
                                marked-up manuscript with{" "}
                                tracked changes, margin notes,
                                and a custom style sheet. No automated tools.
                                No anonymous freelancers. One assigned{" "}
                                book editor who works with you
                                by phone and email through every round of revision.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                <Button
                                    href="/contact-us#manuscript-review"
                                    variant="primary"
                                    size="lg"
                                >
                                    <span>Get a Quote</span>
                                    <ArrowRight size={15} />
                                </Button>

                                <Button
                                    href="/contact-us#manuscript-review"
                                    variant="outline-white"
                                    size="lg"
                                >
                                    <span>Request a Free Sample Edit</span>
                                </Button>
                            </div>

                            {/* Existing Trust Badges */}
                            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/75">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={14}
                                        className="text-[#E7665D]"
                                    />
                                    <span>Experienced Trade Press Editors</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <ShieldCheck
                                        size={14}
                                        className="text-[#E7665D]"
                                    />
                                    <span>Chicago Manual of Style 17th Edition</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <FileCheck2
                                        size={14}
                                        className="text-[#E7665D]"
                                    />
                                    <span>
                                        Track Changes &amp; Direct Phone Consultations
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>


                {/* REQUIRED NEW SECTION: Our Editing Process */}

                {/* SECTION 2: EDITING FOR SELF-PUBLISHED AUTHORS */}
                <section
                    id="process"
                    className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
                >
                    <Container className="flex flex-col gap-14 sm:gap-16">
                        <SectionHeading
                            eyebrow="Built for Independent Authors"
                            title={
                                <>
                                    Expert{" "}
                                    <span className="italic text-[#E7665D]">
                                        Book Editing Services
                                    </span>{" "}
                                    for Self-Published Authors
                                </>
                            }
                            description={
                                <>
                                    If you are publishing independently, there is no
                                    acquisitions editor at a publishing house catching
                                    the problems before your book goes to market.
                                    That responsibility falls on you, and it is the
                                    single most important investment you can make
                                    in your book&apos;s success. Our{" "}

                                    book editing services for self-published authors
                                    {" "}
                                    follow the same standards used by traditional
                                    trade publishers. We edit for{" "}
                                    first-time authors,{" "}
                                    indie authors with multiple titles,
                                    and writers moving from traditional to self-publishing
                                    who need the same editorial rigor they are used to.
                                    We also offer{" "}
                                    children&apos;s book editing{" "}
                                    for picture books, chapter books, and middle grade,
                                    with editors who understand the specific pacing,
                                    vocabulary, and structural conventions those
                                    formats require.
                                </>
                            }
                        />
                    </Container>
                </section>



                {/* SECTION 3: FOUR LEVELS OF BOOK EDITING */}
                <section
                    id="tiers"
                    className="py-20 lg:py-28 bg-white border-b border-line"
                >
                    <Container className="flex flex-col gap-14">

                        {/* Section Heading */}
                        <SectionHeading
                            eyebrow="Choose the Right Service"
                            title={
                                <>
                                    Choose the Right{" "}
                                    <span className="italic text-[#E7665D]">
                                        Book Editing Service
                                    </span>
                                </>
                            }
                            description="Editing is not one thing. It is four distinct services, each addressing a different layer of your manuscript. Most books need at least two. Your editor will tell you which ones your manuscript requires after the initial review. Here is what each service covers, who it is for, and what it costs."
                        />

                        {/* Four Editorial Service Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {editorialTiers.map((item) => (
                                <div
                                    key={item.name}
                                    className="p-8 sm:p-10 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300"
                                >
                                    <div>
                                        {/* Tier Number and Badge */}
                                        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-line">
                                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                                {item.tier}
                                            </span>

                                            <span className="font-sans text-[11px] text-ink-muted bg-[#fdf6f5] px-2.5 py-1 rounded-md border border-[#E7665D]/20 font-medium">
                                                {item.badge}
                                            </span>
                                        </div>

                                        {/* H3 Service Title */}
                                        <h3 className="font-serif text-[1.38rem] font-bold text-ink leading-snug">
                                            {item.name}
                                        </h3>

                                        <span className="text-xs text-ink-muted italic block mt-1">
                                            {item.tagline}
                                        </span>

                                        {/* Full SEO Description */}
                                        <div className="mt-3.5 text-sm text-ink-soft leading-relaxed">
                                            {item.description}
                                        </div>

                                        {/* Best For */}
                                        <div className="mt-6 pt-5 border-t border-line/70">
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#E7665D] block mb-3">
                                                Best For
                                            </span>

                                            <div className="flex items-start gap-2.5 text-xs text-ink-soft">
                                                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E7665D]/15 text-[#E7665D] text-[10px] mt-0.5 font-bold">
                                                    ✓
                                                </span>

                                                <span className="leading-relaxed">
                                                    {item.bestFor}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pricing and Turnaround */}
                                    <div className="mt-6 pt-5 border-t border-line/70">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div>
                                                <span className="text-[10px] uppercase tracking-wider text-ink-muted block font-semibold">
                                                    Starting At
                                                </span>

                                                <span className="font-serif text-xl font-bold text-[#E7665D] mt-1 block">
                                                    {item.startingPrice}
                                                </span>
                                            </div>

                                            <div className="sm:text-right">
                                                <span className="text-[10px] uppercase tracking-wider text-ink-muted block font-semibold">
                                                    Turnaround
                                                </span>

                                                <span className="text-sm font-semibold text-ink mt-1 block">
                                                    {item.turnaround}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="p-6 sm:p-8 rounded-xl border border-[#E7665D]/20 bg-[#fdf6f5] shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#E7665D] border border-[#E7665D]/30">
                                    <Search size={20} />
                                </div>

                                <div>
                                    <h3 className="font-serif text-lg font-bold text-ink">
                                        Not sure which service you need?
                                    </h3>

                                    <p className="text-xs sm:text-sm text-ink-soft mt-1 leading-relaxed">
                                        Get a personalized editing recommendation
                                        for your manuscript.
                                    </p>
                                </div>
                            </div>

                            <Button
                                href="/contact-us#manuscript-review"
                                variant="primary"
                                size="lg"
                            >
                                <span>Get a Quote</span>
                                <ArrowRight size={15} />
                            </Button>
                        </div>
                    </Container>
                </section>


                {/* Sample Edit Callout */}

                {/* SECTION 4: HOW TO CHOOSE THE RIGHT EDITING SERVICE */}
                <section className="hero-gradient py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden paper-grain">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">

                            {/* Eyebrow */}
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                                Practical Guidance
                            </span>

                            {/* H2 Heading */}
                            <h2 className="mt-3 max-w-2xl font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                                How to Choose the Right <br />{" "}
                                <span className="italic text-[#F08A82]">
                                    Editing Service
                                </span>
                            </h2>

                            {/* Content */}
                            <div className="mt-5 flex flex-col gap-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                                <p>
                                    If you are not sure which type of editing your
                                    manuscript needs, start with this: read five
                                    pages from the middle of your book out loud.
                                    If the sentences feel awkward, wordy, or
                                    repetitive, you probably need{" "}
                                    line editing
                                    . If the grammar and punctuation feel inconsistent
                                    but the writing reads well, you need{" "}
                                    copy editing
                                    . If you are unsure whether the chapters are in
                                    the right order, or whether the story holds
                                    together, you need{" "}
                                    developmental editing
                                    . If the book has already been through substantive
                                    editing and just needs a final check, you need{" "}
                                    proofreading
                                    .
                                </p>

                                <p>
                                    Most manuscripts benefit from more than one
                                    level. A common combination is developmental
                                    editing followed by a copy edit and proofread.
                                    We will tell you what we recommend after reading
                                    your opening pages, and you decide how to proceed.
                                </p>

                                <p>
                                    The{" "}
                                    difference between line editing and
                                    developmental editing{" "}
                                    is scope. Developmental editing restructures
                                    the book. Line editing polishes the prose.
                                    One works on the blueprint; the other works
                                    on the finish. If both need attention,
                                    developmental comes first.
                                </p>
                            </div>


                        </div>
                    </Container>
                </section>

                {/* SECTION 5: HOW OUR BOOK EDITING PROCESS WORKS */}
                <section
                    id="editing-process"
                    className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
                >
                    <Container className="flex flex-col gap-14 sm:gap-16">

                        {/* Section Heading */}
                        <SectionHeading
                            eyebrow="Clear Steps from Submission to Delivery"
                            title={
                                <>
                                    How Our{" "}
                                    <span className="italic text-[#E7665D]">
                                        Book Editing Process
                                    </span>{" "}
                                    Works
                                </>
                            }
                            description="Every engagement follows the same sequence, regardless of which editing level you choose."
                        />

                        {/* Four-Step Editorial Process */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

                            {/* STEP 01 */}
                            <div className="group relative rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-line/70">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25 group-hover:bg-[#E7665D] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                            <FileCheck2 size={20} />
                                        </div>
                                        <span className="font-serif text-2xl font-normal text-ink-muted/40 group-hover:text-[#E7665D] transition-colors">
                                            01
                                        </span>
                                    </div>

                                    <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-1">
                                        Step 01
                                    </span>

                                    <h3 className="font-serif text-[1.28rem] font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                        1. Submit Your Manuscript
                                    </h3>

                                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                                        Send us your manuscript in Word (.doc or
                                        .docx). We also accept Google Docs and RTF.
                                        If you want to test the fit before committing,
                                        request a free sample edit of your first
                                        1,000 words.
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-line/70">
                                    <span className="text-[10px] uppercase tracking-wider text-ink-muted block font-semibold">
                                        Key Deliverable
                                    </span>
                                    <span className="text-xs font-semibold text-ink mt-0.5 block">
                                        Manuscript Submission &amp; Sample Edit Request
                                    </span>
                                </div>
                            </div>

                            {/* STEP 02 */}
                            <div className="group relative rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-line/70">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25 group-hover:bg-[#E7665D] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                            <Search size={20} />
                                        </div>
                                        <span className="font-serif text-2xl font-normal text-ink-muted/40 group-hover:text-[#E7665D] transition-colors">
                                            02
                                        </span>
                                    </div>

                                    <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-1">
                                        Step 02
                                    </span>

                                    <h3 className="font-serif text-[1.28rem] font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                        2. Review and Quote
                                    </h3>

                                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                                        A senior editor reads your opening pages,
                                        assesses the level of work required, and
                                        sends you a quote with a clear scope,
                                        fixed price, and delivery timeline.
                                        No surprises. The price we quote is
                                        the price you pay.
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-line/70">
                                    <span className="text-[10px] uppercase tracking-wider text-ink-muted block font-semibold">
                                        Key Deliverable
                                    </span>
                                    <span className="text-xs font-semibold text-ink mt-0.5 block">
                                        Fixed-Price Quote &amp; Editorial Scope
                                    </span>
                                </div>
                            </div>

                            {/* STEP 03 */}
                            <div className="group relative rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-line/70">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25 group-hover:bg-[#E7665D] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                            <PenTool size={20} />
                                        </div>
                                        <span className="font-serif text-2xl font-normal text-ink-muted/40 group-hover:text-[#E7665D] transition-colors">
                                            03
                                        </span>
                                    </div>

                                    <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-1">
                                        Step 03
                                    </span>

                                    <h3 className="font-serif text-[1.28rem] font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                        3. Editing
                                    </h3>

                                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                                        Your assigned editor works through the
                                        manuscript using tracked changes{" "}
                                        and margin comments in Microsoft Word.
                                        For developmental editing,
                                        you also receive a standalone{" "}
                                        editorial letter outlining
                                        structural recommendations. You can reach
                                        your editor by phone or email at any
                                        point during the process.
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-line/70">
                                    <span className="text-[10px] uppercase tracking-wider text-ink-muted block font-semibold">
                                        Key Deliverable
                                    </span>
                                    <span className="text-xs font-semibold text-ink mt-0.5 block">
                                        Tracked Changes &amp; Editorial Recommendations
                                    </span>
                                </div>
                            </div>

                            {/* STEP 04 */}
                            <div className="group relative rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-line/70">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25 group-hover:bg-[#E7665D] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                            <ClipboardCheck size={20} />
                                        </div>
                                        <span className="font-serif text-2xl font-normal text-ink-muted/40 group-hover:text-[#E7665D] transition-colors">
                                            04
                                        </span>
                                    </div>

                                    <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-1">
                                        Step 04
                                    </span>

                                    <h3 className="font-serif text-[1.28rem] font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                        4. Delivery and Revision
                                    </h3>

                                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                                        You receive the completed{" "}
                                        marked-up manuscript,
                                        the custom style sheet, and any
                                        supplementary documents. You review
                                        the edits, accept or reject individual
                                        changes, and come back with questions.
                                        One round of follow-up correspondence
                                        is included in every engagement.
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-line/70">
                                    <span className="text-[10px] uppercase tracking-wider text-ink-muted block font-semibold">
                                        Key Deliverable
                                    </span>
                                    <span className="text-xs font-semibold text-ink mt-0.5 block">
                                        Edited Manuscript &amp; Custom Style Sheet
                                    </span>
                                </div>
                            </div>
                        </div>


                    </Container>
                </section>



                {/* SECTION 6: WHAT YOU RECEIVE */}
                <section
                    id="editing-deliverables"
                    className="py-20 lg:py-28 bg-white border-b border-line"
                >
                    <Container className="flex flex-col gap-14 sm:gap-16">

                        {/* Section Heading */}
                        <SectionHeading
                            eyebrow="Deliverables and Standards"
                            title={
                                <>
                                    What&apos;s Included in{" "}
                                    <span className="italic text-[#E7665D]">
                                        Book Editing Services
                                    </span>
                                </>
                            }
                            description="Every editing engagement includes the following, regardless of which service level you choose."
                        />

                        {/* Editing Deliverables Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {[
                                {
                                    title: "Marked-up Manuscript",
                                    icon: FileCheck2,
                                    badge: "Tracked Changes",
                                    description:
                                        "Marked-up manuscript with all edits visible in tracked changes. Nothing is changed silently.",
                                },
                                {
                                    title: "Margin Comments",
                                    icon: MessageSquareQuote,
                                    badge: "Editorial Feedback",
                                    description:
                                        "Margin comments explaining the reasoning behind significant edits, so you understand the changes and learn from them.",
                                },
                                {
                                    title: "Custom Style Sheet",
                                    icon: ClipboardCheck,
                                    badge: "Consistency",
                                    description:
                                        "Custom style sheet documenting terminology, capitalization, hyphenation, and spelling decisions specific to your book.",
                                },
                                {
                                    title: "Chicago Manual of Style Compliance",
                                    icon: BookOpen,
                                    badge: "Editorial Standards",
                                    description:
                                        "Chicago Manual of Style compliance (17th Edition) as the default standard. APA, AP, or MLA available on request.",
                                },
                                {
                                    title: "Direct Editor Communication",
                                    icon: PhoneCall,
                                    badge: "Personal Support",
                                    description:
                                        "Direct communication with your assigned editor by phone and email. You are never routed through a project manager or a support queue.",
                                },
                                {
                                    title: "One Round of Follow-up",
                                    icon: CheckCheck,
                                    badge: "Post-Delivery",
                                    description:
                                        "One round of follow-up included after delivery for questions, clarifications, or brief additional review.",
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group relative rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
                                    >
                                        {/* Card Header */}
                                        <div className="flex items-center justify-between gap-3 mb-5">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25 group-hover:bg-[#E7665D] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                                <Icon size={20} />
                                            </div>

                                            <span className="font-sans text-[10px] uppercase tracking-wider text-[#E7665D] font-semibold bg-[#fdf6f5] px-2.5 py-1 rounded border border-[#E7665D]/20 text-right">
                                                {item.badge}
                                            </span>
                                        </div>

                                        {/* H3 */}
                                        <h3 className="font-serif text-[1.25rem] font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                                            {item.description}
                                        </p>

                                        <div className="mt-auto pt-6">
                                            <div className="border-t border-line/60 pt-3 flex items-center gap-2 text-xs font-semibold text-[#E7665D]">
                                                <CheckCircle2 size={14} />
                                                <span>Included With Your Editing Service</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Developmental Editing Special Deliverable */}
                        <div className="rounded-xl border border-[#E7665D]/25 bg-[#fdf6f5] p-7 sm:p-10 shadow-[0_4px_24px_0_rgba(231,102,93,0.08)]">
                            <div className="flex flex-col md:flex-row items-start gap-6">

                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-[#E7665D] border border-[#E7665D]/30">
                                    <Layers size={26} />
                                </div>

                                <div className="flex-1">
                                    <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                        Additional Developmental Editing Deliverable
                                    </span>

                                    <h3 className="font-serif text-[1.5rem] sm:text-[1.7rem] font-bold text-ink mt-2 leading-tight">
                                        Detailed Editorial Letter
                                    </h3>

                                    <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">
                                        For developmental editing,
                                        you also receive a detailed{" "}
                                        editorial letter (typically
                                        5 to 15 pages) with specific, actionable
                                        recommendations on structure, pacing,
                                        character, and theme.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Free Sample Edit CTA */}
                        <div className="rounded-xl border border-[#E7665D]/25 bg-[#fdfbf7] p-8 sm:p-10 lg:p-12 shadow-sm">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                                <div className="flex-1 text-center lg:text-left">
                                    <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                        Complimentary Editorial Evaluation
                                    </span>

                                    <h3 className="mt-3 font-serif text-[1.7rem] sm:text-[1.7rem] font-bold text-ink leading-tight">
                                        See Our Editing Approach Before You Commit
                                    </h3>

                                    <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed max-w-2xl">
                                        For a complimentary look at our editorial
                                        approach, request a free sample edit of
                                        your first 1,000 words. We return it
                                        within 48 hours with tracked changes
                                        and a brief diagnostic summary.
                                        No purchase obligation.
                                    </p>

                                    <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-5 text-xs text-ink-muted">
                                        <div className="flex items-center gap-2">
                                            <Clock
                                                size={15}
                                                className="text-[#E7665D]"
                                            />
                                            <span>48-Hour Turnaround</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <CheckCircle2
                                                size={15}
                                                className="text-[#E7665D]"
                                            />
                                            <span>No Purchase Obligation</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="shrink-0">
                                    <Button
                                        href="/contact-us#manuscript-review"
                                        variant="primary"
                                        size="lg"
                                    >
                                        <span>Request a Free Sample Edit</span>
                                        <ArrowRight size={15} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <FAQAccordion
                    items={editingFAQs}
                    eyebrow="Editing FAQ"
                    title={
                        <>
                            Frequently Asked Questions{" "}

                        </>
                    }
                    sectionId="editing-faq"
                />


                

                {/* SECTION 8: CLOSING CTA - BOOK EDITING SERVICES */}
                <FinalCTA
                    eyebrow="Start Your Edit"
                    title={
                        <>
                            Your Manuscript Is Ready{" "}<br />
                            <span className="block italic font-normal text-[#F08A82] sm:inline">
                                for a Professional Editor.
                            </span>
                        </>
                    }
                    description={
                        <>
                            Send us your manuscript or your first 1,000 words.
                            A senior editor will review the opening pages,
                            tell you which editing levels your book needs,
                            and provide a quote with a fixed price and a
                            clear timeline. The sample edit is free.
                            The quote is free. The conversation starts
                            when you are ready.
                        </>
                    }
                    buttonText="Get a Quote for Your Manuscript"
                    buttonHref="/contact-us#manuscript-review"
                />



            </main>
            <Footer />
        </>
    );
}
