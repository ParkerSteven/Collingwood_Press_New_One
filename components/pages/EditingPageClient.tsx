"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
    FileCheck2,
    BookOpen,
    CheckCircle2,
    Search,
    Layers,
    ArrowRight,
    ShieldCheck,
    MessageSquareQuote,
    ClipboardCheck,
    PenTool,
    CheckCheck,
    Clock,
    PhoneCall
} from "lucide-react";
import FAQAccordion from "../sections/FAQAccordion";
import { editingFAQs } from "@/lib/data";
import FinalCTA from "../sections/FinalCTA";
import HeroSection from "../sections/HeroSection";

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
            "The last check before your book is printed or uploaded. It catches the typos, spelling slips, punctuation inconsistencies and formatting problems that earlier rounds missed. Best for: manuscripts that are finished and ready for production.",
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
            "Sentence-level accuracy: grammar, punctuation, spelling, syntax and consistency, checked against the Chicago Manual of Style. Timeline slips, character name mismatches and factual questions are flagged for you to resolve. Best for: books with solid structure that need precision.",
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
            "Voice Line editing improves flow and pacing, sharpens word choice, cuts repetition and keeps the tone steady from chapter to chapter, while your natural voice stays yours. The aim is better writing, not just correct writing. Best for: structurally sound manuscripts that need stronger prose.",
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
            "Developmental editing looks at the whole book: pacing, chapter order, character arcs, themes and genre expectations. For nonfiction, it covers argument structure, evidence placement and how the reader moves through the book. It is the deepest level, and it makes the biggest changes. Best for: first drafts, and books where the story or argument isn't working yet.",
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


const editingSteps = [
    {
        id: 1,
        title: "Send Your Manuscript",
        description:
            "Upload your manuscript in Word (.doc or .docx). Google Docs and RTF files are accepted too. Want to test the fit first? Ask for a free sample edit.",
        link: {
            text: "manuscript",
            href: "/blogs/prepare-a-manuscript-for-an-editor",
        },
    },
    {
        id: 2,
        title: "Get a Fixed-Price Quote",
        description:
            "An editor reads your opening pages, confirms the level of work and sends a quote with the scope, price and timeline.",
        needsVerification: true,
    },
    {
        id: 3,
        title: "Your Editor Gets to Work",
        description:
            "Your assigned editor works through your manuscript in Microsoft Word, at the level you chose.",
    },
    {
        id: 4,
        title: "Review Every Change",
        description:
            "You receive the edited manuscript with everything that goes with it, then accept or reject each change.",
    },
];

export default function EditingPageClient() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">

                {/* SECTION 1: HERO - BOOK EDITING SERVICES */}
                <HeroSection
                    className="editing-hero-gradient"
                    eyebrow="Professional Editorial Services"
                    title="Professional"
                    highlightText="Book Editing Services"
                    description={
                        <p>
                            Finished your manuscript but worried it needs more than a spell check before readers see it? At The Collingwood Press, our book editing services work at four levels, from proofreading and copy editing to line editing and developmental editing, so your book gets the ones it needs. Your assigned expert editor starts with your opening pages, recommends where to begin, and stays with you from first read to final delivery.
                        </p>
                    }
                    firstButtonText="Get a Editing Quote"
                    secondButtonText="Schedule a Consultation"
                    guarantees={[
                        {
                            text: "Experienced Trade Press Editors",
                            icon: CheckCircle2,
                        },
                        {
                            text: "Chicago Manual of Style current edition",
                            icon: ShieldCheck,
                        },
                        {
                            text: "Track Changes & Direct Phone Consultations",
                            icon: FileCheck2,
                        },
                    ]}
                />

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
                                    The Collingwood Press provides editing services for independent and self-published authors, whether you are finishing a first draft or preparing the next book in a series. We edit fiction, nonfiction and children&apos;s books, including picture books, chapter books and middle grade, always shaped around the readers each book is written for.
                                </>
                            }
                        />
                    </Container>
                </section>

                {/* SECTION 3: FOUR LEVELS OF BOOK EDITING */}


                <section
                    id="tiers"
                    className="relative overflow-hidden border-b border-[#E8E3DD] bg-[#F8F7F3] py-12 sm:py-16 lg:py-28"
                >
                    {/* Subtle Grid Background */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-50"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(120,110,100,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,110,100,0.07) 1px, transparent 1px)",
                            backgroundSize: "34px 34px",
                        }}
                    />

                    <Container className="relative z-10 w-full min-w-0">

                        {/* Section Heading */}
                        <div className="mb-9 grid grid-cols-1 items-end gap-5 sm:mb-12 sm:gap-7 lg:mb-16 lg:grid-cols-2 lg:gap-16">
                            <div className="min-w-0">
                                <div className="mb-4 flex items-center gap-2 sm:mb-5 relative md:top-10">
                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D5645C] sm:text-[11px]">
                                        Choose the Right Service
                                    </span>
                                </div>

                                <h2 className="max-w-2xl font-serif text-[clamp(1.85rem,7vw,3.3rem)] font-bold leading-[1.12] tracking-tight text-[#202629] relative md:top-10">
                                    Four Levels of Editing,{" "}
                                    <span className="block text-[#D5645C]">
                                        and the One Your Manuscript Needs
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-xl text-[13px] leading-6 text-[#596064] sm:text-base sm:leading-7 lg:ml-auto">
                                Editing is four separate services, each working on a different
                                layer of your manuscript. Here is what each covers, who it
                                suits and what it costs.
                            </p>
                        </div>

                        {/* Responsive Staircase Cards */}
                        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:items-end xl:gap-4">
                            {editorialTiers.map((item, index) => {
                                const isFeatured = index === 3;

                                const colors = [
                                    {
                                        border: "#D8A243",
                                        accent: "#A97821",
                                        background: "#FFFFFF",
                                    },
                                    {
                                        border: "#E7665D",
                                        accent: "#C75148",
                                        background: "#FFFFFF",
                                    },
                                    {
                                        border: "#B53D35",
                                        accent: "#B53D35",
                                        background: "#FFF2ED",
                                    },
                                    {
                                        border: "#4A96B3",
                                        accent: "#FFAAA2",
                                        background: "#101A30",
                                    },
                                ];

                                const theme = colors[index] ?? colors[1];

                                return (
                                    <div
                                        key={item.name}
                                        className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-[#E5E0DB] border-t-[3px] p-5 shadow-[0_6px_20px_rgba(30,30,30,0.06)] transition-all duration-300 hover:border-[#E7665D]/40 hover:shadow-[0_16px_35px_rgba(30,30,30,0.12)] sm:p-6 xl:h-auto ${index === 0
                                            ? "xl:min-h-[510px]"
                                            : index === 1
                                                ? "xl:min-h-[555px]"
                                                : index === 2
                                                    ? "xl:min-h-[600px]"
                                                    : "xl:min-h-[650px]"
                                            } ${isFeatured
                                                ? "border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#172B4D] to-[#294D78] text-white shadow-[0_16px_35px_rgba(16,26,48,0.2)]"
                                                : ""
                                            }`}
                                        style={
                                            !isFeatured
                                                ? {
                                                    backgroundColor: theme.background,
                                                    borderTopColor: theme.border,
                                                }
                                                : {
                                                    borderTopColor: theme.border,
                                                }
                                        }
                                    >

                                        {/* Card Header */}
                                        <div className="mb-5 flex items-start justify-between gap-3 sm:mb-6">
                                            <div
                                                className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12 ${isFeatured
                                                    ? "bg-white/10 text-[#FFAAA2]"
                                                    : "bg-[#F9EBE7] text-[#B53D35]"
                                                    }`}
                                            >
                                                <span className="font-sans text-sm font-semibold">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            <span
                                                className={`max-w-[130px] text-right font-mono text-[9px] font-semibold uppercase leading-4 tracking-[0.1em] ${isFeatured
                                                    ? "text-[#A8DFE2]"
                                                    : "text-[#94682A]"
                                                    }`}
                                            >
                                                {item.badge}
                                            </span>
                                        </div>

                                        {/* Service Title */}
                                        <h3
                                            className={`font-serif text-[1.3rem] font-bold leading-tight sm:text-[1.4rem] ${isFeatured ? "text-white" : "text-[#202629]"
                                                }`}
                                        >
                                            {item.name}
                                        </h3>

                                        {/* Tagline */}
                                        <p
                                            className={`mt-2 text-xs font-semibold leading-5 ${isFeatured
                                                ? "text-[#B5DCE0]"
                                                : "text-[#B53D35]"
                                                }`}
                                        >
                                            {item.tagline}
                                        </p>

                                        {/* Description */}
                                        <div
                                            className={`mt-4 break-words text-[13px] leading-[1.75] sm:mt-5 ${isFeatured
                                                ? "text-slate-200"
                                                : "text-[#565B5E]"
                                                }`}
                                        >
                                            {item.description}
                                        </div>

                                        {/* Best For */}
                                        <div className="mt-5 sm:mt-6">
                                            <div
                                                className={`border-l-2 pl-3 ${isFeatured
                                                    ? "border-[#7CD0D5]"
                                                    : "border-[#E7665D]"
                                                    }`}
                                            >
                                                <span
                                                    className={`block font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${isFeatured
                                                        ? "text-[#B5DCE0]"
                                                        : "text-[#94682A]"
                                                        }`}
                                                >
                                                    Best For
                                                </span>

                                                <p
                                                    className={`mt-1 break-words text-xs leading-[1.7] ${isFeatured
                                                        ? "text-slate-200"
                                                        : "text-[#33383A]"
                                                        }`}
                                                >
                                                    {item.bestFor}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Pricing Footer */}
                                        <div
                                            className={`mt-auto border-t border-dashed pt-5 ${isFeatured
                                                ? "border-white/20"
                                                : "border-[#DED8D2]"
                                                }`}
                                        >
                                            <span
                                                className={`block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] ${isFeatured
                                                    ? "text-slate-300"
                                                    : "text-[#77716D]"
                                                    }`}
                                            >
                                                From
                                            </span>

                                            <div className="mt-1 flex flex-wrap items-baseline gap-2">
                                                <span
                                                    className={`font-serif text-[1.7rem] font-bold leading-tight sm:text-3xl ${isFeatured ? "text-white" : "text-[#202629]"
                                                        }`}
                                                >
                                                    {item.startingPrice}
                                                </span>
                                            </div>

                                            {/* Turnaround */}
                                            <div className="mt-5">
                                                <span
                                                    className={`block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] ${isFeatured
                                                        ? "text-slate-300"
                                                        : "text-[#77716D]"
                                                        }`}
                                                >
                                                    Turnaround
                                                </span>

                                                <span
                                                    className={`mt-1 block text-xs font-semibold ${isFeatured
                                                        ? "text-white"
                                                        : "text-[#202629]"
                                                        }`}
                                                >
                                                    {item.turnaround}
                                                </span>
                                            </div>

                                            {/* Progress Indicator */}
                                            <div className="mt-3 flex h-1.5 gap-[3px]">
                                                {Array.from({ length: 8 }).map(
                                                    (_, barIndex) => (
                                                        <span
                                                            key={barIndex}
                                                            className="h-full flex-1 rounded-sm"
                                                            style={{
                                                                backgroundColor:
                                                                    barIndex < (index + 1) * 2
                                                                        ? isFeatured
                                                                            ? "#65B5BD"
                                                                            : theme.border
                                                                        : isFeatured
                                                                            ? "rgba(255,255,255,0.15)"
                                                                            : "#E6E4E1",
                                                            }}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-8 flex w-full flex-col items-stretch gap-5 rounded-lg border border-[#E3DDD7] border-l-4 border-l-[#E7665D] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                            <div className="min-w-0 flex-1">
                                <h3 className="font-serif text-lg font-bold leading-snug text-[#202629] sm:text-xl">
                                    Not sure which service you need?
                                </h3>

                                <p className="mt-2 text-[13px] leading-relaxed text-[#646769] sm:text-sm">
                                    Get a personalized editing recommendation for your manuscript.
                                </p>
                            </div>

                            <div className="w-full sm:w-auto sm:shrink-0">
                                <Button
                                    href="/contact-us#manuscript-review"
                                    variant="primary"
                                    size="lg"
                                >
                                    <span>Get a Quote</span>
                                    <ArrowRight size={15} />
                                </Button>
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

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {editingSteps.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#172B4D] to-[#294D78] p-7 shadow-[0_12px_38px_rgba(16,26,48,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_22px_55px_rgba(25,55,100,0.35)] sm:p-8"
                                >

                                    {/* Step Title */}
                                    <h3 className="mb-4 text-base font-semibold leading-snug text-white sm:text-xl">
                                        {item.title}
                                    </h3>

                                    {/* Step Description */}
                                    <p className="text-sm leading-relaxed text-slate-200 sm:text-[14px]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* SECTION 6: WHAT YOU RECEIVE */}

                <section
                    id="editing-deliverables"
                    className="relative overflow-hidden bg-[#F8F9FC] py-14 lg:py-20"
                >
                    <Container className="flex flex-col gap-8 lg:gap-8">

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

                        {/* Editorial Deliverables - Clean Checklist Layout */}
                        <div className="relative rounded-2xl px-5 py-9 sm:px-10 sm:py-12">

                            {/* Deliverables Bullet List */}
                            <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
                                {[
                                    {
                                        title: "Marked-up Manuscript",
                                        icon: FileCheck2,
                                        badge: "Tracked Changes",
                                        description:
                                            "Every edit appears in tracked changes, so nothing is changed silently.",
                                    },
                                    {
                                        title: "Margin Comments",
                                        icon: MessageSquareQuote,
                                        badge: "Editorial Feedback",
                                        description:
                                            "Notes explaining the reasoning behind significant edits, so you understand each change and learn from it.",
                                    },
                                    {
                                        title: "Custom Style Sheet",
                                        icon: ClipboardCheck,
                                        badge: "Consistency",
                                        description:
                                            "A record of the terminology, capitalization, hyphenation and spelling decisions made for your book.",
                                    },
                                    {
                                        title: "Chicago Manual of Style Compliance",
                                        icon: BookOpen,
                                        badge: "Editorial Standards",
                                        description:
                                            "Our default standard, current edition. APA, AP or MLA on request.",
                                    },
                                    {
                                        title: "Direct Editor Communication",
                                        icon: PhoneCall,
                                        badge: "Personal Support",
                                        description:
                                            "You talk to your assigned editor by phone and email about any editorial question, with no support queue in between.",
                                    },
                                    {
                                        title: "One Round of Follow-up",
                                        icon: CheckCheck,
                                        badge: "Post-Delivery",
                                        description:
                                            "After delivery, one round for questions, clarifications or a brief additional review.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="group flex items-start gap-4 border-t border-[#E6DED7] py-7 transition-colors duration-300"
                                    >
                                        {/* Bullet Icon */}
                                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FCEAE7] text-[#E7665D] transition-colors duration-300 group-hover:bg-[#E7665D] group-hover:text-white">
                                            <CheckCircle2 size={17} strokeWidth={2} />
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#E7665D]">
                                                {item.badge}
                                            </span>

                                            <h4 className="mt-2 font-serif text-base font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-[#E7665D] sm:text-[1.2rem]">
                                                {item.title}
                                            </h4>

                                            <p className="mt-2 text-sm leading-7 text-ink-soft sm:text-[14px] max-w-xl">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Free Sample Edit CTA */}

                        <div className="relative overflow-hidden rounded-2xl border border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#172B4D] to-[#294D78] p-6 shadow-[0_12px_38px_rgba(16,26,48,0.18)] sm:p-10 lg:p-8">

                            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

                                {/* CTA Content */}
                                <div className="max-w-2xl">
                                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFAAA2]">
                                        Complimentary Editorial Evaluation
                                    </span>

                                    <h3 className="mt-3 font-serif text-xl font-bold leading-tight text-white sm:text-[1.4rem]">
                                        See Our Editing Approach Before You Commit
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-[14px]">
                                        Send your first 1,000 words and see how we work before you decide. It comes back with tracked changes and a brief diagnostic summary.
                                    </p>

                                    {/* Benefits */}
                                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-[#FFAAA2]" />
                                            <span>48-Hour Turnaround</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <CheckCircle2
                                                size={16}
                                                className="text-[#FFAAA2]"
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
                                        size="md"
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
