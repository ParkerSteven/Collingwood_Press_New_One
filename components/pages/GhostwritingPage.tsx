"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
    ArrowRight,
    Check,

} from "lucide-react";
import FAQAccordion from "../sections/FAQAccordion";
import { ghostwritingFAQs } from "@/lib/data";
import FinalCTA from "../sections/FinalCTA";
import HeroSection from "../sections/HeroSection";
import Image from "next/image";


export const servicesData = [
    {
        id: 1,
        number: "01",
        image: "/ghostwritingpageIcon/Memoir and Autobiography.jpg",
        title: "Memoir and Autobiography",
        description:
            "Your life story in your voice, built from interviews, notes, and personal material. Our memoir writing services include timeline structuring, character development for real people, and sensitivity review.",
    },
    {
        id: 2,
        number: "02",
        image: "/ghostwritingpageIcon/Business and Leadership.jpg",
        title: "Business and Leadership",
        description:
            "A business book ghostwriter shapes your argument, case studies, and methods into frameworks readers can apply, in your professional voice.",
    },
    {
        id: 3,
        number: "03",
        image: "/ghostwritingpageIcon/Nonfiction.jpg",
        title: "Nonfiction",
        description:
            "History, science, health, education, current affairs, and specialist subjects. A nonfiction ghostwriter handles research heavy projects that need accuracy and clear explanation.",
    },
    {
        id: 4,
        number: "04",
        image: "/ghostwritingpageIcon/Fiction.jpg",
        title: "Fiction",
        description:
            "Literary, thriller, romance, science fiction, and fantasy novels, plus short story collections. Our fiction ghostwriting services cover plotting, character, dialogue, and world building from your premise.",
    },
    {
        id: 5,
        number: "05",
        image: '/ghostwritingpageIcon/Self-Help and Personal Development.jpg',
        title: "Self-Help and Personal Development",
        description:
            "A self-help book ghostwriter turns your system or method into a framework readers can follow, with exercises and action steps built in.",
        className: "md:col-span-2 lg:col-span-2",
    },
];



export const stepsData = [
    {
        id: 1,
        step: "Step 01",
        image: "/ghostwritingpageIcon/Consultation.jpg",
        title: "1. Consultation",
        description:
            "We talk through the subject, audience, length, timeline, and how involved you want to be. This sets the plan and the ghostwriter match.",
    },
    {
        id: 2,
        step: "Step 02",
        image: "/ghostwritingpageIcon/Outline and Structure.jpg",
        title: "2. Outline and Structure",
        description:
            "Your ghostwriter drafts an outline of chapters, key themes, and narrative arc. Drafting starts only after you sign off.",
    },
    {
        id: 3,
        step: "Step 03",
        image: "/ghostwritingpageIcon/Writing.jpg",
        title: "3. Writing",
        description:
            "The manuscript is written in staged drafts. You review chapters or sections at set intervals and give feedback before the next batch, so problems get fixed early.",
    },
    {
        id: 4,
        step: "Step 04",
        image: "/ghostwritingpageIcon/Revisions.jpg",
        title: "4. Revisions",
        description:
            "You send notes on the full draft, and your ghostwriter revises across an agreed number of rounds.",
    },
    {
        id: 5,
        step: "Step 05",
        image: "/ghostwritingpageIcon/Final Delivery.jpg",
        title: "5. Final Delivery",
        description:
            "You get a clean Word file, ready for editing and production. The ghostwriter's work ends here unless you arrange more support.",
    },
    {
        id: 6,
        step: "Step 06",
        image: "/ghostwritingpageIcon/Next Step Publishing Path.jpg",
        title: "6. Publishing Path",
        description:
            "We can then talk through traditional submission, hybrid publishing, or self-publishing, and the editing, cover design, formatting, and distribution support available.",
    },
];


const deliverablesData = [
    {
        id: 1,
        description:
            "A collaborative outline, approved before writing begins",
    },
    {
        id: 2,
        description:
            "A full manuscript, written in staged drafts",
    },
    {
        id: 3,
        description:
            "Feedback points at chapter or section intervals",
    },
    {
        id: 4,
        description:
            "An agreed number of revision rounds after the full draft",
    },
    {
        id: 5,
        description:
            "A consistent voice that sounds like you",
    },
    {
        id: 6,
        description:
            "A final clean file in Word format",
    },
];


const humanGhostwritingData = [
    {
        id: 1,
        image: "/ghostwritingpageIcon/AI writing.jpg",
        description:
            "AI tools can produce text fast. They cannot capture your voice, make the judgment calls behind a book's argument, or hold an emotional tone across a full-length book. A memoir that reads like software does not sound like its subject.",
    },
    {
        id: 2,
        image: "/ghostwritingpageIcon/Human Writer.jpg",
        description:
            "A human ghostwriter interviews you, learns your perspective, and responds to your feedback. The book sounds like it was written by someone who knows your subject, because it was written by someone who spent months learning it from you.",
    },
];


export const pricingFactorsData = [
    {
        id: 1,
        number: "01",
        title: "Manuscript Length",
        description:
            "A 30,000-word business book costs less than a 90,000-word novel.",
    },
    {
        id: 2,
        number: "02",
        title: "Genre and Complexity",
        description:
            "Research-heavy nonfiction and multi-character fiction require more time than a straightforward personal narrative.",
    },
    {
        id: 3,
        number: "03",
        title: "Research Requirements",
        description:
            "Projects that need interviews, source material review, or technical accuracy verification take longer.",
    },
    {
        id: 4,
        number: "04",
        title: "Timeline",
        description:
            "Accelerated schedules require additional resources and cost more.",
    },
    {
        id: 5,
        number: "05",
        title: "Ghostwriter Experience",
        description:
            "Writers with deeper genre specialization or published credentials command higher rates.",
    },
];


export default function GhostwritingClientPage() {
    const leftItems = deliverablesData.slice(0, 3);
    const rightItems = deliverablesData.slice(3);
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">

                {/* SECTION 1: HERO */}
                <HeroSection
                    className="relative ghost-hero-gradient overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white"
                />

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
                                    Not all of our clients are full-time writers. They are executives, consultants, entrepreneurs, and subject-matter experts with a book in them but no time or writing background to draft 60,000 words. Some are first-time authors who know their story. Others are public figures who want a book that matches the credibility they have built.
                                </p>

                                <p>
                                    Our book ghostwriting services suit anyone who wants a professionally written manuscript without drafting it themselves.
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

                            <p className="mt-5 text-sm max-w-xl sm:text-base text-ink-muted leading-relaxed">
                                Each genre needs different skills, so we match you with a ghostwriter whose experience fits your project.
                            </p>
                        </div>

                        {/* Genre Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {servicesData.map((item) => (
                                <div
                                    key={item.id}
                                    className={`group p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 ${item.className || ""}`}
                                >
                                    {/* Image & Number */}
                                    <div className="flex items-center gap-4 mb-5">
                                        <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#fdf6f5] overflow-hidden">
                                            {item.image && (
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={52}
                                                    height={52}
                                                    className="h-full w-full object-contain p-1"
                                                />
                                            )}
                                        </span>


                                        {/* Title */}
                                        <h3 className="font-serif text-[1.1rem] sm:text-[1.3rem] font-bold text-ink leading-snug  group-hover:text-[#E7665D] transition-colors">
                                            {item.title}
                                        </h3>

                                    </div>


                                    {/* Description */}
                                    <p className="text-sm text-ink-soft leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>



                {/* SECTION 4: HOW OUR GHOSTWRITING PROCESS WORKS */}

                <section
                    id="process"
                    className="relative isolate overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#071429] via-[#0C1D36] to-[#162D4D] py-20 text-white lg:py-24 paper-grain"
                >
                    {/* Soft background glow */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7665D]/[0.05] blur-[110px]" />

                    <Container className="relative z-10">
                        <div className="flex flex-col items-center text-center">

                            {/* Eyebrow */}
                            <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#F08A82]">
                                Staged Drafts with Author Approval
                            </span>

                            {/* Heading */}
                            <h2 className="mt-4 font-serif text-[2.2rem] font-bold leading-tight text-white sm:text-[2.6rem]">
                                How Our{" "}
                                <span className="italic text-[#E7665D]">
                                    Ghostwriting Process
                                </span>{" "}
                                Works
                            </h2>

                            {/* Description */}
                            <p className="mt-5 max-w-3xl font-sans text-sm leading-relaxed text-slate-300 sm:text-base">
                                Every project follows a staged process designed to keep you
                                in control of the direction without requiring you to do the
                                writing. You review and approve key stages before the next
                                one begins.
                            </p>

                            {/* Process Cards */}
                            <div className="mt-12 grid w-full grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
                                {stepsData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group relative flex h-full flex-col rounded-xl border border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#142541] to-[#1B3657] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.20)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_12px_35px_rgba(231,102,93,0.12)]"
                                    >
                                        {/* Image & Title */}
                                        <div className="mb-5 flex items-center gap-4">
                                            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#E7665D]/30 bg-[#243551] transition-all duration-300 group-hover:border-[#E7665D]/60">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={48}
                                                    height={48}
                                                    className="h-full w-full object-contain"
                                                />
                                            </span>

                                            <h3 className="font-serif text-[1.1rem] font-bold leading-snug text-white sm:text-[1.3rem]">
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="font-sans text-sm leading-[1.8] text-slate-300">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex justify-center">
                                <Button
                                    href="/contact-us/#manuscript-review"
                                    variant="primary"
                                    size="md"
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
                    className="py-20 lg:py-20 bg-[#fdfbf7] border-b border-line"
                >
                    <Container>
                        {/* Section Heading */}
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                Deliverables
                            </span>

                            <h2 className="mt-4 font-serif max-w-xl text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                                What&apos;s Included in{" "}
                                <span className="text-[#E7665D]">
                                    Ghostwriting Services
                                </span>
                            </h2>
                        </div>


                        {/* Deliverables Checklist */}

                        <div className=" max-w-4xl mx-auto rounded-2xl p-6 sm:p-10 lg:p-12">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-8">

                                {/* Left Column */}
                                <div className="flex flex-col gap-6">
                                    {leftItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="group flex w-full min-w-0 min-h-[110px] h-full items-center gap-4 rounded-xl border border-[#E7665D]/45 bg-white p-5 shadow-[0_4px_18px_rgba(231,102,93,0.12),0_2px_6px_rgba(0,0,0,0.04)] hover:border-[#E7665D]/80 hover:shadow-[0_10px_30px_rgba(231,102,93,0.20),0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
                                        >
                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white">
                                                <Check size={16} strokeWidth={2.5} />
                                            </span>

                                            <p className="text-[15px] sm:text-base font-medium text-ink leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col gap-6">
                                    {rightItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="group flex w-full min-w-0 min-h-[110px] h-full items-center gap-4 rounded-xl border border-[#E7665D]/45 bg-white p-5 shadow-[0_4px_18px_rgba(231,102,93,0.12),0_2px_6px_rgba(0,0,0,0.04)] hover:border-[#E7665D]/80 hover:shadow-[0_10px_30px_rgba(231,102,93,0.20),0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
                                        >
                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white">
                                                <Check size={16} strokeWidth={2.5} />
                                            </span>

                                            <p className="text-[15px] sm:text-base font-medium text-ink leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Note */}
                            <div className="mt-12 pt-7 border-t border-[#E7665D]/30 text-center">
                                <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                                    Editing, cover design, and typesetting are separate services.
                                    The scope is defined and agreed before work begins.
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
                            {humanGhostwritingData.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#172B4D] to-[#294D78] p-7 shadow-[0_12px_38px_rgba(16,26,48,0.18)] transition-all duration-500 hover:border-[#E7665D]/50 hover:shadow-[0_22px_55px_rgba(25,55,100,0.35)] sm:p-9"
                                >
                                    {/* Image */}
                                    <div className="mb-6">
                                        <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/20 bg-white/10 group-hover:border-[#E7665D]/50 transition-all duration-300">
                                            <Image
                                                src={item.image}
                                                alt={item.id === 1 ? "AI Writing" : "Human Writer"}
                                                width={56}
                                                height={56}
                                                className="h-full w-full object-cover"
                                            />
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>


                {/* SECTION 8: PRICING AND COST FACTORS */}
                <section
                    id="ghostwriting-pricing"
                    className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
                >
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

                            {/* Left Side Content */}
                            <div className="flex flex-col items-start text-left">

                                <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                    Transparent Pricing
                                </span>

                                <h2 className="mt-5 max-w-2xl font-serif text-[2.3rem] sm:text-[2.8rem] lg:text-[2.8rem] font-bold leading-[1.13] text-ink">
                                    How Much Do{" "}
                                    <span className="italic text-[#E7665D]">
                                        Ghostwriting Services Cost?
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-lg text-sm sm:text-base text-ink-soft leading-[1.9]">
                                    We do not publish a fixed rate because no two books
                                    need the same work. Five factors determine the price
                                    of your ghostwriting project.
                                </p>

                                <p className="mt-5 max-w-lg text-sm sm:text-base text-ink-soft leading-[1.9]">
                                    Every author receives a clear quote after the initial
                                    consultation. Your quote covers the scope of work,
                                    revision rounds, delivery timeline, and total cost.
                                    There are no surprise fees during the project.
                                </p>

                                {/* CTA Button */}
                                <div className="mt-8">
                                    <Button
                                        href="/contact-us"
                                        variant="primary"
                                        size="md"
                                    >
                                        <span>Get a Custom Ghostwriting Quote</span>
                                        <ArrowRight size={16} />
                                    </Button>
                                </div>

                            </div>

                            {/* Right Side Pricing Card */}
                            <div className="relative">

                                <div className="relative overflow-hidden rounded-2xl border border-[#E7665D]/20 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(16,26,48,0.10),0_4px_12px_rgba(231,102,93,0.05)]">

                                    {/* Top Accent */}
                                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E7665D] via-[#F08A82] to-[#E7665D]" />

                                    {/* Card Heading */}
                                    <div className="mb-6">
                                        <h3 className="font-serif text-[1.5rem] sm:text-[1.7rem] font-bold text-ink">
                                            What Sets the{" "}
                                            <span className="text-[#E7665D]">
                                                Price
                                            </span>
                                        </h3>

                                        <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                                            Five key factors influence your project quote.
                                        </p>
                                    </div>

                                    {/* Pricing Factors */}
                                    <div className="divide-y divide-[#E7665D]/15">

                                        {pricingFactorsData.map((item) => (
                                            <div
                                                key={item.id}
                                                className="group flex items-start gap-5 py-5 first:pt-2 last:pb-0"
                                            >

                                                {/* Number */}
                                                <span className="shrink-0 min-w-[36px] font-sans text-[1rem] pt-2 font-semibold text-[#E7665D] transition-transform duration-300 group-hover:translate-x-1">
                                                    {item.number}
                                                </span>

                                                {/* Factor Content */}
                                                <div className="flex-1">
                                                    <h4 className="font-serif text-[1.05rem] sm:text-[1.1rem] font-bold text-ink group-hover:text-[#E7665D] transition-colors duration-300">
                                                        {item.title}
                                                    </h4>

                                                    <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>

                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
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
                    buttonHref="/contact-us/#manuscript-reviewave questions"
                />
            </main>
            <Footer />
        </>
    );
}
