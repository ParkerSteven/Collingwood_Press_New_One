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
    Clock,
    MessageSquareQuote,
    ArrowRight,
    Users,
    Compass,
    Check,
    PhoneCall,
    Award
} from "lucide-react";

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

export default function GhostwritingPage() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">
                {/* Hero Section */}
                <section className="ghost-hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white">
                    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E7665D]/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                            <Eyebrow tone="coral" align="center">
                                Bespoke Trade Collaboration &bull; Strict Non-Disclosure
                            </Eyebrow>

                            <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                                You have the story.{" "}
                                <span className="italic text-[#E7665D] block sm:inline">We provide the pen.</span>
                            </h1>

                            <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                                Partner with seasoned trade ghostwriters who capture your authentic voice, shepherd your ideas into compelling prose, and craft a book that commands respect in the marketplace.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                                    <span>Schedule a Confidential Consultation</span>
                                    <ArrowRight size={15} />
                                </Button>
                                <Button href="#process" variant="outline-white" size="lg">
                                    <span>Explore Collaboration Process</span>
                                </Button>
                            </div>

                            {/* Guarantees */}
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

                {/* Specialized Genres */}
                <section className="py-20 lg:py-28 bg-white border-b border-line">
                    <Container className="flex flex-col gap-12 sm:gap-14">
                        <SectionHeading
                            eyebrow="Specialized Literary Domains"
                            title={
                                <>
                                    Ghostwriting crafted for{" "}
                                    <span className="italic text-[#E7665D]">high-impact genres</span>
                                </>
                            }
                            description="Our guild of ghostwriters includes published novelists, former major press editors, and award-winning journalists selected specifically for your genre."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {specialties.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.title}
                                        className="p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] flex flex-col justify-between transition-all duration-300"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 shadow-sm">
                                                    <Icon size={20} />
                                                </span>
                                                <span className="font-sans text-[10px] uppercase tracking-wider text-[#E7665D] font-semibold bg-[#fdf6f5] px-2.5 py-0.5 rounded border border-[#E7665D]/20">
                                                    {item.badge}
                                                </span>
                                            </div>

                                            <h3 className="font-serif text-[1.24rem] font-bold text-ink leading-snug">
                                                {item.title}
                                            </h3>
                                            <span className="text-xs text-ink-muted italic block mt-0.5 mb-2.5">
                                                {item.tagline}
                                            </span>

                                            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                                                {item.desc}
                                            </p>

                                            <div className="mt-5 pt-4 border-t border-line/70">
                                                <span className="text-[10px] uppercase tracking-wider text-ink-muted block font-semibold mb-2">
                                                    Key Craft Focus
                                                </span>
                                                <ul className="flex flex-col gap-2 text-xs text-ink-soft">
                                                    {item.highlights.map((h) => (
                                                        <li key={h} className="flex items-start gap-2">
                                                            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#E7665D]/15 text-[#E7665D] text-[9px] mt-0.5 font-bold">
                                                                ✓
                                                            </span>
                                                            <span className="leading-snug">{h}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                {/* Step-by-Step Collaborative Process */}
                <section id="process" className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line">
                    <Container className="flex flex-col gap-14 sm:gap-16">
                        <SectionHeading
                            eyebrow="The Ghostwriting Methodology"
                            title={
                                <>
                                    How we shepherd your vision{" "}
                                    <span className="italic text-[#E7665D]">from notes to finished manuscript</span>
                                </>
                            }
                            description="A structured, collaborative framework designed to respect your time while guaranteeing uncompromising literary depth."
                        />

                        <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
                            {ghostwritingSteps.map((s) => (
                                <div
                                    key={s.step}
                                    className="group p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300"
                                >
                                    <div className="flex flex-col gap-2 max-w-xl">
                                        <div className="flex items-center gap-3">
                                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                                {s.step}
                                            </span>
                                            <span className="text-xs text-ink-muted bg-[#fdf6f5] px-2 py-0.5 rounded border border-[#E7665D]/15 font-sans">
                                                {s.duration}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-[1.32rem] font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                            {s.title}
                                        </h3>

                                        <p className="text-sm text-ink-soft leading-relaxed mt-0.5">
                                            {s.description}
                                        </p>
                                    </div>

                                    <div className="shrink-0 p-4 rounded-lg bg-[#fdf6f5] border border-[#E7665D]/20 text-xs font-sans min-w-[200px]">
                                        <span className="text-[10px] uppercase tracking-wider text-ink-muted block font-semibold">
                                            Milestone Deliverable
                                        </span>
                                        <span className="font-semibold text-ink mt-1 block">
                                            {s.deliverable}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Testimonial Feature Card */}
                <section className="hero-gradient py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden paper-grain">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />
                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E7665D]/15 text-[#F08A82] mb-6 border border-[#E7665D]/30 shadow-[0_0_20px_rgba(231,102,93,0.2)]">
                                <MessageSquareQuote size={24} />
                            </span>
                            <blockquote className="font-serif italic text-[1.3rem] sm:text-[1.65rem] leading-snug text-slate-100 text-balance">
                                &ldquo;Working with Collingwood&rsquo;s ghostwriting director felt like having an artistic mirror that knew what I wanted to say before I could articulate it. They captured my humor, my voice, and my vision with astonishing precision.&rdquo;
                            </blockquote>
                            <div className="mt-6 flex flex-col items-center">
                                <span className="font-serif text-[1.15rem] font-bold text-white">
                                    Julian Vance
                                </span>
                                <span className="text-xs text-[#F08A82] font-sans tracking-wide mt-1 font-medium bg-white/[0.06] px-3 py-1 rounded-full border border-white/10">
                                    Author of <span className="italic">Beyond the Horizon</span> &bull; 40,000+ copies sold
                                </span>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Final CTA Banner */}
                <section className="py-20 lg:py-28 bg-white">
                    <Container>
                        <div className="p-8 sm:p-12 lg:p-14 rounded-xl border border-[#E7665D]/25 bg-white text-center max-w-3xl mx-auto flex flex-col items-center shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]">
                            <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#E7665D]">
                                Confidential Project Inquiries
                            </span>
                            <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-ink leading-tight">
                                Ready to bring your book to life?
                            </h2>
                            <p className="mt-3 text-sm sm:text-base text-ink-soft max-w-lg leading-relaxed">
                                Connect directly with our Senior Editorial Director under strict confidentiality. We review your goals and match you with the perfect guild collaborator.
                            </p>

                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-ink-muted font-sans w-full max-w-lg">
                                <div className="flex items-center justify-center gap-1.5">
                                    <Check size={14} className="text-[#E7665D]" />
                                    <span>Mutual NDA Upfront</span>
                                </div>
                                <div className="flex items-center justify-center gap-1.5">
                                    <Check size={14} className="text-[#E7665D]" />
                                    <span>Phone Strategy Session</span>
                                </div>
                                <div className="flex items-center justify-center gap-1.5">
                                    <Check size={14} className="text-[#E7665D]" />
                                    <span>Transparent Milestone Pricing</span>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                                    <span>Inquire About Ghostwriting Services</span>
                                    <ArrowRight size={15} />
                                </Button>
                                <a
                                    href="tel:+19362233644"
                                    className="text-xs font-semibold text-ink-soft hover:text-[#E7665D] transition-colors flex items-center gap-1.5"
                                >
                                    <PhoneCall size={14} />
                                    <span>Or call +1 (936) 223-3644</span>
                                </a>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
