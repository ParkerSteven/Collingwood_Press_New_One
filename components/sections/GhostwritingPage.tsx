"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import {
    PenTool,
    ShieldCheck,
    Lock,
    FileText,
    Sparkles,
    BookOpen,
    CheckCircle2,
    MessageSquareQuote,
    ArrowRight,
    Check,
    PhoneCall,
    Feather,
    Lightbulb,
    BriefcaseBusiness,
    FileCheck2,
    RefreshCw,
    PenLine,
    ListTree,
    MessageSquare,
    Bot,
    Search,
    Clock3,
    UserCheck,

} from "lucide-react";
import FAQAccordion from "./FAQAccordion";
import { ghostwritingFAQs } from "@/lib/data";
import FinalCTA from "./FinalCTA";

const ghostwritingSteps = [
    {
        step: "Phase 01",
        number: "01",
        title: "Deep Voice Discovery & Intake",
        description: "Through recorded conversations, personal notes, and extensive archival reviews, your dedicated ghostwriter immerses themselves in your tone, cadence, vocabulary, and worldview to ensure your authentic voice powers every sentence.",
        deliverable: "Custom Voice Profile & Narrative Archetype",
        duration: "Weeks 1–2",
    },
    {
        step: "Phase 02",
        number: "02",
        title: "The Master Narrative Blueprint",
        description: "We construct a comprehensive chapter-by-chapter outline, structural tension arc, and thematic beats. You review, challenge, and approve the roadmap before a single sentence of manuscript prose is drafted.",
        deliverable: "Full Outline & Synopsis Document",
        duration: "Weeks 3–4",
    },
    {
        step: "Phase 03",
        number: "03",
        title: "Iterative Chapter Delivery Cycles",
        description: "Chapters are drafted in predictable rolling batches. You receive fresh pages every two weeks for candid review and refinement calls, keeping you in complete creative control from inception to completion.",
        deliverable: "Rolling Batches with Annotation Reviews",
        duration: "Weeks 5–16",
    },
    {
        step: "Phase 04",
        number: "04",
        title: "Editorial Polish & Tone Harmonization",
        description: "Our senior developmental editors review the complete manuscript alongside your ghostwriter to eliminate pacing lags, polish transitions, and certify commercial trade readability.",
        deliverable: "Clean, Fully Polished Complete Draft",
        duration: "Weeks 17–19",
    },
    {
        step: "Phase 05",
        number: "05",
        title: "Seamless Transition to Production",
        description: "Once your final approval is sealed, your manuscript seamlessly transitions into interior InDesign typesetting, custom cover design, and international distribution.",
        deliverable: "Typeset-Ready Trade Manuscript",
        duration: "Week 20",
    },
];

const specialties = [
    {
        title: "Memoirs & Autobiography",
        tagline: "Personal Legacy & Life Journeys",
        desc: "Transform your life lessons, triumphs, and trials into narrative literature that moves readers and endures for generations.",
        icon: BookOpen,
        badge: "Memoir",
        highlights: [
            "In-depth oral history interviews",
            "Emotional arc & pacing balance",
            "Family archives & photo curation",
        ],
    },
    {
        title: "Executive & Thought Leadership",
        tagline: "Proprietary Ideas & Industry Authority",
        desc: "Position your proprietary business frameworks, industry insights, and leadership philosophy as standard-setting literature.",
        icon: Sparkles,
        badge: "Leadership",
        highlights: [
            "Framework & case-study synthesis",
            "C-suite & founder voice matching",
            "Keynote & speaking alignment",
        ],
    },
    {
        title: "Narrative & Investigative Nonfiction",
        tagline: "Fact-Based Literary Storytelling",
        desc: "Rigorous research, human interest storytelling, and historical context woven into compelling page-turning prose.",
        icon: FileText,
        badge: "Nonfiction",
        highlights: [
            "Deep journalistic fact-checking",
            "Primary source document review",
            "High-tension chapter hooks",
        ],
    },
    {
        title: "Commercial & Literary Fiction",
        tagline: "Worldbuilding & Narrative Tension",
        desc: "Bring your high-concept premise, vivid worlds, and unforgettable characters to life with seasoned novelists.",
        icon: PenTool,
        badge: "Fiction",
        highlights: [
            "Multi-dimensional character arcs",
            "Bespoke worldbuilding bibles",
            "Commercial pacing & plot twists",
        ],
    },
];

export default function GhostwritingClientPage() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">

                {/* SECTION 1: HERO */}
                <section className="ghost-hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white">
                    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E7665D]/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">

                            {/* Eyebrow */}
                            <Eyebrow tone="coral" align="center">
                                Confidential Collaborative Ghostwriting
                            </Eyebrow>

                            {/* H1 Heading */}
                            <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                                Professional{" "}
                                <span className="italic text-[#E7665D] block sm:inline">
                                    Ghostwriting Services
                                </span>
                            </h1>

                            {/* Hero Description */}
                            <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                                You have the expertise, the experience, or the story.
                                What you need is someone who can turn it into a finished
                                book. Our
                                professional ghostwriting services
                                pair you with an experienced writer who captures your
                                voice, follows your direction, and delivers a complete{" "}
                                manuscript
                                you are proud to put your name on. You stay involved
                                in the direction and{" "}
                                revisions
                                at every stage. We handle the writing. The process is
                                fully confidential, and you retain all{" "}
                                rights
                                to the finished work. Whether you are starting from
                                a rough idea or building on a partial draft, this
                                is how you
                                hire a ghostwriter
                                and get a book that reads like you wrote it yourself.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                <Button
                                    href="/contact-us#manuscript-review"
                                    variant="primary"
                                    size="lg"
                                >
                                    <span>Get a Ghostwriting Quote</span>
                                    <ArrowRight size={15} />
                                </Button>

                                <Button
                                    href="/contact-us"
                                    variant="outline-white"
                                    size="lg"
                                >
                                    <span>Schedule a Consultation</span>
                                </Button>
                            </div>

                            {/* Existing Guarantees — Unchanged */}
                            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/75">
                                <div className="flex items-center gap-2">
                                    <Lock size={14} className="text-[#E7665D]" />
                                    <span>100% Strict NDA Protection</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-[#E7665D]" />
                                    <span>100% Author Copyright &amp; Royalties</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-[#E7665D]" />
                                    <span>Matched with Vetted Trade Authors</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* SECTION 2: WHO THIS IS FOR */}
                <section className="py-20 lg:py-28 bg-white border-b border-line">
                    <Container className="flex flex-col gap-12 sm:gap-14">

                        {/* Updated Section Heading */}
                        <div className="flex flex-col items-center text-center">
                            <SectionHeading
                                eyebrow="Who We Write For"
                                title={
                                    <>
                                        Ghostwriting Services for Authors{" "}
                                        <span className="italic text-[#E7665D]">
                                            Who Need the Book Written
                                        </span>
                                    </>
                                }
                            />

                            {/* Updated Description */}
                            <div className="mt-6 max-w-3xl mx-auto flex flex-col gap-5 text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                                <p>
                                    Most of our clients are not full-time writers. They are
                                    professionals, executives, consultants, entrepreneurs,
                                    and subject-matter experts who have a book in them but
                                    do not have the time, the writing background, or the
                                    patience to draft 60,000 words from scratch. Some are
                                    first-time authors who know their story but need a
                                    skilled writer to shape it. Others are public figures
                                    who want a book that matches the credibility they have
                                    already built in their field.
                                </p>

                                <p>
                                    Our
                                    book ghostwriting services
                                    work for anyone who wants a professionally written
                                    manuscript without doing the full draft themselves.
                                    You provide the ideas, the direction, and the feedback.
                                    We do the writing.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* SECTION 3: GHOSTWRITING SERVICES BY GENRE */}
                <section
                    id="ghostwriting-genres"
                    className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
                >
                    <Container className="flex flex-col gap-14 sm:gap-16">

                        {/* Section Heading */}
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                Genre-Specific Expertise
                            </span>

                            <h2 className="mt-4 font-serif text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                                Ghostwriting Services{" "}
                                <span className="italic text-[#E7665D]">
                                    by Genre
                                </span>
                            </h2>

                            <p className="mt-5 text-sm sm:text-base text-ink-muted leading-relaxed">
                                Different genres require different skills. A memoir depends on
                                emotional honesty and narrative pacing. A business book needs
                                clear argument structure and credibility. We match you with
                                a ghostwriter whose experience fits your specific project.
                            </p>
                        </div>

                        {/* Genre Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Memoir and Autobiography */}
                            <div className="group p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <BookOpen size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        01
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.3rem] font-bold text-ink leading-snug mb-4 group-hover:text-[#E7665D] transition-colors">
                                    Memoir and Autobiography
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Your life story told in your voice, structured for readers
                                    who were not there. Our
                                    memoir ghostwriter
                                    team works from interviews, notes, and personal material
                                    to build a narrative that is honest, well-paced, and
                                    emotionally grounded.
                                    Memoir writing services
                                    include timeline structuring, character development
                                    for real people, and sensitivity review for personal content.
                                </p>
                            </div>

                            {/* Business and Leadership */}
                            <div className="group p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <BriefcaseBusiness size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        02
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.3rem] font-bold text-ink leading-snug mb-4 group-hover:text-[#E7665D] transition-colors">
                                    Business and Leadership
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    A book that positions you as a credible authority in your
                                    field. Our
                                    business book ghostwriter
                                    team handles argument structure, case study integration,
                                    and practical frameworks that give readers something
                                    they can apply. The tone matches your professional voice,
                                    not a generic business template.
                                </p>
                            </div>

                            {/* Nonfiction */}
                            <div className="group p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <FileText size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        03
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.3rem] font-bold text-ink leading-snug mb-4 group-hover:text-[#E7665D] transition-colors">
                                    Nonfiction
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    History, science, health, education, current affairs,
                                    and specialized expertise. Our
                                    nonfiction ghostwriter
                                    team handles research-heavy projects that require
                                    accuracy, clear explanation, and strong organizational
                                    structure.
                                </p>
                            </div>

                            {/* Fiction */}
                            <div className="group p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <Feather size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        04
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.3rem] font-bold text-ink leading-snug mb-4 group-hover:text-[#E7665D] transition-colors">
                                    Fiction
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Novels, short story collections, and genre fiction across
                                    literary, thriller, romance, science fiction, and fantasy.
                                    Our
                                    fiction ghostwriting services
                                    cover plotting, character development, dialogue, and
                                    world-building. You provide the premise and creative
                                    direction. The ghostwriter builds the manuscript.
                                </p>
                            </div>

                            {/* Self-Help and Personal Development */}
                            <div className="group p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 md:col-span-2 lg:col-span-2">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <Lightbulb size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        05
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.3rem] font-bold text-ink leading-snug mb-4 group-hover:text-[#E7665D] transition-colors">
                                    Self-Help and Personal Development
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Books that teach, guide, or motivate based on your
                                    personal system, methodology, or experience. Our
                                    self-help book ghostwriter
                                    team structures your ideas into a framework that readers
                                    can follow and apply, with exercises, action steps, and
                                    practical takeaways built into the manuscript.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>



                {/* SECTION 4: HOW OUR GHOSTWRITING PROCESS WORKS */}
                <section
                    id="process"
                    className="hero-gradient py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden paper-grain"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="flex flex-col items-center text-center">

                            {/* Eyebrow */}
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                                Staged Drafts with Author Approval
                            </span>

                            {/* H2 Heading */}
                            <h2 className="mt-4 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                                How Our{" "}
                                <span className="italic text-[#E7665D]">
                                    Ghostwriting Process
                                </span>{" "}
                                Works
                            </h2>

                            {/* Intro Description */}
                            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                                Every project follows a staged process designed to keep you
                                in control of the direction without requiring you to do the
                                writing. You review and approve key stages before the next
                                one begins.
                            </p>

                            {/* Process Cards */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">

                                {/* Step 1 */}
                                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                                            <MessageSquare size={22} />
                                        </span>
                                        <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                                            Step 01
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                                        1. Consultation
                                    </h3>

                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        We discuss the scope of the project: the subject, the
                                        intended audience, the approximate length, your timeline,
                                        and how involved you want to be in the process. This
                                        conversation shapes the project plan and determines the
                                        right ghostwriter match for your book.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                                            <ListTree size={22} />
                                        </span>
                                        <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                                            Step 02
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                                        2. Outline and Structure
                                    </h3>

                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Your ghostwriter develops a detailed
                                        outline
                                        covering chapter structure, key themes, and narrative
                                        arc. You review and approve the direction before any
                                        drafting begins. This is the blueprint the entire
                                        manuscript is built from, and nothing moves forward
                                        without your sign-off.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                                            <PenLine size={22} />
                                        </span>
                                        <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                                            Step 03
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                                        3. Writing
                                    </h3>

                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        The manuscript is written in
                                        staged drafts
                                        . You receive chapters or sections at defined intervals,
                                        review them, and provide
                                        direct feedback
                                        before the next batch is written. This prevents the
                                        project from drifting off course and gives you ongoing
                                        control of the
                                        author voice
                                        and content.
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                                            <RefreshCw size={22} />
                                        </span>
                                        <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                                            Step 04
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                                        4. Revisions
                                    </h3>

                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        After the full draft is complete, you review the
                                        manuscript and submit notes. Your ghostwriter
                                        incorporates your
                                        Revisions
                                        across an agreed number of rounds. The goal is a
                                        manuscript that reads exactly the way you want it to.
                                    </p>
                                </div>

                                {/* Step 5 */}
                                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                                            <FileCheck2 size={22} />
                                        </span>
                                        <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                                            Step 05
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                                        5. Final Delivery
                                    </h3>

                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        You receive the completed
                                        manuscript
                                        as a clean Word file, ready for editing and production.
                                        The file belongs to you. Your ghostwriter&apos;s
                                        involvement ends at delivery unless you arrange
                                        additional support.
                                    </p>
                                </div>

                                {/* Step 6 */}
                                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                                            <BookOpen size={22} />
                                        </span>
                                        <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                                            Step 06
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                                        6. Next Step: Publishing Path
                                    </h3>

                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Once the manuscript is finished, the natural next
                                        question is how to publish it. We can discuss the
                                        options available to you, whether that is traditional
                                        submission,
                                        hybrid publishing
                                        , or
                                        self-publishing
                                        , and what support is available for editing, cover
                                        design, formatting, and distribution. This is not a
                                        separate sales conversation. It is the practical next
                                        step so your finished manuscript does not sit in a
                                        folder.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-10 flex justify-center">
                                <Button
                                    href="/contact-us#manuscript-review"
                                    variant="primary"
                                    size="lg"
                                >
                                    <span>See How This Works for Your Book</span>
                                    <ArrowRight size={15} />
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>



                {/* SECTION 5: WHAT'S INCLUDED */}
                <section
                    id="ghostwriting-deliverables"
                    className="py-20 lg:py-28 bg-white border-b border-line"
                >
                    <Container>
                        {/* Section Heading */}
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                Deliverables
                            </span>

                            <h2 className="mt-4 max-w-xl font-serif text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                                What&apos;s Included in{" "}
                                <span className="italic text-[#E7665D]">
                                    Ghostwriting Services
                                </span>
                            </h2>

                            <p className="mt-5 text-sm sm:text-base text-ink-muted leading-relaxed">
                                Every
                                ghostwriting services
                                engagement includes the following.
                            </p>
                        </div>

                        {/* Deliverables Grid */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* Deliverable 1 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <ListTree size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        01
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Collaborative Outline
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Collaborative outline
                                    developed with your input and approved before writing begins.
                                </p>
                            </div>

                            {/* Deliverable 2 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <FileText size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        02
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Full Manuscript
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Full manuscript
                                    written in staged drafts with defined review points.
                                </p>
                            </div>

                            {/* Deliverable 3 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <MessageSquare size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        03
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Staged Feedback
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Staged feedback
                                    at chapter or section intervals so you can course-correct
                                    during writing, not after.
                                </p>
                            </div>

                            {/* Deliverable 4 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <RefreshCw size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        04
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Agreed Revision Rounds
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Agreed revision rounds
                                    after the full draft is delivered.
                                </p>
                            </div>

                            {/* Deliverable 5 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <PenLine size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        05
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Consistent Voice
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Consistent voice
                                    that sounds like you, not like a ghostwriter.
                                </p>
                            </div>

                            {/* Deliverable 6 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <FileCheck2 size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        06
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Final Clean File
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Final clean file
                                    in Word format, ready for editing and production.
                                </p>
                            </div>
                        </div>

                        {/* Final Service Note */}
                        <div className="mt-12 max-w-4xl mx-auto rounded-xl border border-[#E7665D]/25 bg-[#fdfbf7] px-6 py-7 sm:px-10 text-center">
                            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                                Editing, cover design, and typesetting are separate services.
                                The ghostwriting deliverable is the manuscript itself.
                                What you receive is defined and agreed before work begins.
                            </p>
                        </div>
                    </Container>
                </section>



                {/* SECTION 6: HOW COLLABORATION WORKS DIFFERENTLY */}
                <section
                    id="ghostwriting-collaboration"
                    className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
                >
                    <Container>
                        {/* Section Heading */}
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                Your Book, Your Direction
                            </span>

                            <h2 className="mt-4 font-serif text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                                How Collaboration{" "}
                                <span className="italic text-[#E7665D]">
                                    Works Differently
                                </span>
                            </h2>

                            <p className="mt-5 text-sm sm:text-base text-ink-muted leading-relaxed">
                                Ghostwriting is not a situation where you hand over an idea
                                and receive a finished book months later with no input in
                                between. Our process is built around defined approval
                                stages so you stay in control without needing to manage
                                the day-to-day writing.
                            </p>
                        </div>

                        {/* Collaboration Cards */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Card 1 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <ListTree size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        01
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Outline Approval Before Writing Starts
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    You sign off on the structure and direction before a
                                    single chapter is drafted.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <MessageSquare size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        02
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Staged Drafts with Direct Feedback
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    You read chapters as they are written and tell the
                                    ghostwriter what is working and what needs to change.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <RefreshCw size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        03
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Clear Revision Rounds
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    The number of revision rounds is agreed upfront.
                                    You know exactly how many passes you get.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <ShieldCheck size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        04
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    You Retain Rights
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    The finished manuscript belongs to you.
                                    Full copyright ownership.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 md:col-span-2 lg:col-span-2">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <Lock size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        05
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Confidentiality
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    The ghostwriter&apos;s involvement is protected by
                                    a non-disclosure agreement. Project details stay private.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>


                {/* SECTION 7: WHY HUMAN GHOSTWRITING STILL MATTERS */}
                <section
                    id="human-ghostwriting"
                    className="py-20 lg:py-28 bg-white border-b border-line"
                >
                    <Container>
                        {/* Section Heading */}
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                Human Writing vs. AI Tools
                            </span>

                            <h2 className="mt-4 font-serif max-w-xl text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                                Why Human Ghostwriting{" "}
                                <span className="italic text-[#E7665D]">
                                    Still Matters
                                </span>
                            </h2>
                        </div>

                        {/* Content Cards */}
                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">

                            {/* First Paragraph */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-[#fdfbf7] p-7 sm:p-9 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="mb-6">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <Bot size={24} />
                                    </span>
                                </div>

                                <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                                    AI writing tools can generate text quickly. They cannot
                                    capture your personal voice, handle the judgment calls
                                    that shape a book&apos;s argument, or maintain emotional
                                    consistency across 60,000 words. A memoir that reads
                                    like it was generated by software does not sound like
                                    the person it is supposed to be about. A business book
                                    that strings together generic paragraphs does not build
                                    the credibility the author needs.
                                </p>
                            </div>

                            {/* Second Paragraph */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-[#fdfbf7] p-7 sm:p-9 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="mb-6">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <PenLine size={24} />
                                    </span>
                                </div>

                                <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                                    A human ghostwriter interviews you, understands your
                                    perspective, makes structural decisions based on
                                    experience, and responds to your feedback in ways that
                                    improve the manuscript. The result is a book that
                                    sounds like it was written by someone who knows your
                                    subject, because it was written by someone who spent
                                    months learning it from you. That is the difference
                                    between
                                    collaborative writing
                                    and automated text generation.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>


                {/* SECTION 8: PRICING AND COST FACTORS */}
                <section
                    id="ghostwriting-pricing"
                    className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
                >
                    <Container>
                        {/* Section Heading */}
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                Transparent Pricing
                            </span>

                            <h2 className="mt-4 font-serif max-w-xl text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                                How Much Do{" "}
                                <span className="italic text-[#E7665D]">
                                    Ghostwriting Services Cost?
                                </span>
                            </h2>

                            <p className="mt-5 text-sm sm:text-base text-ink-muted leading-relaxed">
                                Ghostwriting Consistent
                                depends on several factors that vary from project to project.
                                We do not publish a fixed rate because no two books require
                                the same amount of work.
                            </p>
                        </div>

                        {/* Pricing Factors Grid */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* Factor 1 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <FileText size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        01
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Manuscript Length
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    A 30,000-word business book costs less than a
                                    90,000-word novel.
                                </p>
                            </div>

                            {/* Factor 2 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <BookOpen size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        02
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Genre and Complexity
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Research-heavy nonfiction and multi-character fiction
                                    require more time than a straightforward personal narrative.
                                </p>
                            </div>

                            {/* Factor 3 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <Search size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        03
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Research Requirements
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Projects that need interviews, source material review,
                                    or technical accuracy verification take longer.
                                </p>
                            </div>

                            {/* Factor 4 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <Clock3 size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        04
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Timeline
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Accelerated schedules require additional resources
                                    and cost more.
                                </p>
                            </div>

                            {/* Factor 5 */}
                            <div className="group rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 md:col-span-2 lg:col-span-2">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25">
                                        <UserCheck size={22} />
                                    </span>
                                    <span className="font-serif text-2xl text-ink-muted/30">
                                        05
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                                    Ghostwriter Experience
                                </h3>

                                <p className="text-sm text-ink-soft leading-relaxed">
                                    Writers with deeper genre specialization or published
                                    credentials command higher rates.
                                </p>
                            </div>
                        </div>

                        {/* Pricing Information */}
                        <div className="mt-12 max-w-4xl mx-auto rounded-xl border border-[#E7665D]/25 bg-white px-6 py-8 sm:px-10 text-center">
                            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                                Every author receives a clear quote after the initial
                                consultation. The quote includes the scope of work,
                                the number of revision rounds, the delivery timeline,
                                and the total cost. There are no surprise fees during
                                the project.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-9 flex justify-center">
                            <Button
                                href="/contact-us#manuscript-review"
                                variant="primary"
                                size="lg"
                            >
                                <span>Get a Custom Ghostwriting Quote</span>
                                <ArrowRight size={15} />
                            </Button>
                        </div>
                    </Container>
                </section>

                {/* SECTION 9: INVOLVEMENT, RIGHTS, AND CONFIDENTIALITY */}
                <section
                    id="ghostwriting-rights-confidentiality"
                    className="py-20 lg:py-28 bg-white border-b border-line"
                >
                    <Container>
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                Ownership and Privacy
                            </span>

                            <h2 className="mt-4 font-serif text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                                How Involvement, Rights,{" "}
                                <span className="italic text-[#E7665D]">
                                    and Confidentiality Work
                                </span>
                            </h2>
                        </div>

                        <div className="mt-12 max-w-4xl mx-auto flex flex-col gap-6">
                            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                                You provide direction and feedback. The ghostwriter
                                handles the writing. Most authors review at key stages
                                rather than participating in every sentence. The level
                                of involvement is up to you.
                            </p>

                            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                                You retain full
                                rights
                                to the finished
                                manuscript
                                . Copyright belongs to you. The ghostwriter assigns
                                all rights upon delivery. Your name goes on the book.
                            </p>

                            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                                Every project is protected by a non-disclosure agreement.
                                The ghostwriter&apos;s involvement, the content of the
                                manuscript, and the details of your project stay confidential.{" "}
                                Confidentiality
                                is standard, not an add-on.
                            </p>
                        </div>
                    </Container>
                </section>


                <FAQAccordion
                    items={ghostwritingFAQs}
                    eyebrow="Ghostwriting FAQ"
                    title={
                        <>
                            Frequently Asked Questions{" "}
                        </>
                    }
                    sectionId="editing-faq"
                />




                {/* SECTION 11: CLOSING CTA - GHOSTWRITING SERVICES */}
                <FinalCTA
                    eyebrow="Start Your Book"
                    title={
                        <>
                            Ready to Hire a Ghostwriter{" "}
                            <span className="block italic font-normal text-[#F08A82] sm:inline">
                                for Your Book?
                            </span>
                        </>
                    }
                    description={
                        <>
                            Tell us about your project. A consultation call will cover
                            your subject, your goals, your timeline, and how involved
                            you want to be in the writing process. From there, we
                            will recommend the right ghostwriter, scope the project,
                            and provide a clear quote. The conversation is free and
                            confidential.
                        </>
                    }
                    buttonText="Get a Ghostwriting Quote"
                    buttonHref="/contact-us#manuscript-review"
                />


            </main>
            <Footer />
        </>
    );
}
