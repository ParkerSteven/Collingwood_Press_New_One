"use client";
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
    Layers,
    Globe,
    ShieldCheck,
    ArrowRight,
    Palette,
    FileSpreadsheet,
    FileText,
    Settings,
    Rocket,
    CheckCircle2,
    BookOpenCheck,
    PenLine,
    Layers3,
    Globe2,
    Truck,
    Image as ImageIcon,
    Database,
    Megaphone,
} from "lucide-react";
import { formats } from "@/lib/formats";
import { Fragment } from "react";
import FAQAccordion from "../sections/FAQAccordion";
import { publishingFAQs, resources } from "@/lib/data";
import FinalCTA from "../sections/FinalCTA";
import Link from "next/link";
import HeroSection from "../sections/HeroSection";

const publishingRoadmap = [
    {
        number: "01",
        title: "Manuscript Preparation",
        tagline: "Editorial & Intake Sign-Off",
        description:
            "Your manuscript is reviewed, formatting issues are fixed, and a clean master document is prepared before design work begins.",
        milestone: "Certified Clean Master Document",
        icon: FileText,
    },
    {
        number: "02",
        title: "Cover & Interior Design",
        tagline: "Visual & Tactile Artistry",
        description:
            "Original cover artwork and a custom interior layout are created to match your genre and book type.",
        milestone: "Jacket Mechanicals & Sample Interior Spreads",
        icon: Palette,
    },
    {
        number: "03",
        title: "Formatting & Typesetting",
        tagline: "Adobe InDesign Precision",
        description:
            "The book is professionally typeset in Adobe InDesign. Print-ready and eBook files are prepared for review.",
        milestone: "Full Bound Galley Proof for Author Review",
        icon: Layers,
    },
    {
        number: "04",
        title: "Publishing Setup",
        tagline: "Identifiers & Legal Cataloguing",
        description:
            "ISBNs are registered in your name, barcodes are generated, and all cataloguing details (including BISAC categories and metadata) are completed. You remain the publisher of record.",
        milestone: "Official Global Catalogue Filings",
        icon: Settings,
    },
    {
        number: "05",
        title: "Trade Distribution",
        tagline: "Global Wholesale Ingestion",
        description:
            "Your book is distributed through Ingram and listed on Amazon KDP, Barnes & Noble, and other major platforms.",
        milestone: "Active Worldwide Bookseller Feed",
        icon: Globe,
    },
    {
        number: "06",
        title: "Launch & Release",
        tagline: "Publication Day Rollout",
        description:
            "Retail pages go live, physical and digital editions become available, and your book is ready for sale.",
        milestone: "Shelf-Ready Physical & Digital Book",
        icon: Rocket,
    },
];


const services = [
    {
        id: 1,
        icon: FileText,
        title: "Book Editing & Proofreading",
        description:
            "Developmental editing, copyediting, line editing, and proofreading to prepare your manuscript for publishing.",
        href: "/editing",
        linkText: "Learn more: Book Editing Services",
    },
    {
        id: 2,
        icon: Rocket,
        title: "Book Marketing & Launch Strategy",
        description:
            "Amazon ads, reviewer outreach, and launch campaigns to help your book reach the right readers.",
        href: "/marketing",
        linkText: "Learn more: Book Marketing Services",
    },
    {
        id: 3,
        icon: BookOpenCheck,
        title: "Audiobook Production & Distribution",
        description:
            "Professional narration, studio recording, and distribution to Audible, Apple Books, and other platforms.",
        href: "/audiobook",
        linkText: "Learn more: Audiobook Production Services",
    },
];

const publishingFeatures = [
    {
        id: 1,
        icon: ShieldCheck,
        title: "100% Copyright & Royalty Retention",
        description:
            "You keep full ownership of your book and 100% of the royalties. This is written into every agreement.",
    },
    {
        id: 2,
        icon: BookOpenCheck,
        title: "You Are the Publisher of Record",
        description:
            "ISBNs and retail accounts are registered in your name. We never list ourselves as the publisher.",
    },
    {
        id: 3,
        icon: FileSpreadsheet,
        title: "Transparent Pricing",
        description:
            "No hidden fees. You review and approve the plan, timeline, and cost before any work begins.",
    },
    {
        id: 4,
        icon: FileText,
        title: "Author Sign-Off",
        description:
            "No book goes live without your approval on the final galley proof.",
    },
];

const phaseIcons = [
    FileText,
    PenLine,
    Layers3,
    Globe2,
    Truck,
    Rocket,
];

const milestoneIcons = [
    FileText,
    ImageIcon,
    FileText,
    Database,
    Megaphone,
    Rocket,
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

export default function PublishingClient() {
    const list = [...retailers, ...retailers];
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">
                {/* Hero */}

                <HeroSection
                    className="publishing-hero-gradient"
                    eyebrow="Full-Service Independent Trade Publishing"
                    title="Professional Book Publishing Services for"
                    highlightText="First-Time Authors"
                    description={
                        <p>
                            You wrote the book. Now let’s publish it the right way. Our book publishing services turn your raw draft into a retail-ready hardcover, paperback, and eBook. We handle the full production process while you retain 100% of your copyright and royalties.
                        </p>
                    }
                    buttons={[
                        {
                            text: "Submit Manuscript for Publishing",
                            href: "/contact-us/#manuscript-reviewave questions",
                            variant: "primary",
                            showArrow: true,
                        },
                        {
                            text: "Explore The 6-Step Journey",
                            href: "#publishing-process",
                            variant: "outline-white",
                        },
                    ]}
                    guarantees={[
                        {
                            text: "Ingram Global Wholesale Distribution",
                            icon: CheckCircle2,
                        },
                        {
                            text: "100% Author Copyright & Royalties",
                            icon: ShieldCheck,
                        },
                        {
                            text: "Custom InDesign Craftsmanship",
                            icon: BookOpenCheck,
                        },
                    ]}
                />

                {/* REQUIRED NEW SECTION: From Manuscript to Published Book */}
                <section id="publishing-process" className="py-20 lg:py-20 bg-[#fdfbf7] border-b border-line">
                    <div className="relative mx-auto max-w-[1360px] px-6 lg:px-12 pt-6 pb-2">
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-px bg-[#E7665D]/60" />
                                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#E7665D] font-semibold">
                                    Distributed to Every Major Retailer
                                </span>
                                <span className="w-8 h-px bg-[#E7665D]/60" />
                            </div>
                            <h2 className="mt-3 max-w-5xl mx-auto font-serif text-[1.9rem] sm:text-[2.2rem] font-bold text-ink leading-[1.1] tracking-tight text-center">
                                Global Book Distribution: Amazon KDP,{" "}
                                <span className="text-[#E7665D]">
                                    IngramSpark, Barnes &amp; Noble &amp; Beyond
                                </span>
                            </h2>
                            <p className="mt-1 text-xs py-6 sm:text-sm text-ink-muted">
                                Your book is distributed across major retail and library channels worldwide. Through the Ingram Content Group, it becomes available to over 40,000 bookstores and libraries. Listings are also set up on Amazon KDP, Barnes & Noble, Apple Books, and other leading platforms, with optimized metadata for stronger discoverability.
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
                </section>


                <section className="relative isolate overflow-hidden bg-[#07152B] py-20 sm:py-24 lg:py-28">
                    {/* Background gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#071429] via-[#102440] to-[#1D3B63]" />

                    {/* Soft atmospheric glow */}
                    <div className="pointer-events-none absolute -right-40 -top-52 h-[650px] w-[650px] rounded-full bg-[#5277AB]/15 blur-[130px]" />

                    <div className="pointer-events-none absolute bottom-0 left-0 h-[450px] w-[550px] rounded-full bg-[#071225]/60 blur-[110px]" />

                    <Container className="relative z-10 !max-w-none w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 flex flex-col gap-12">
                        {/* Section Heading */}
                        <div className="relative z-10 mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">

                            <div className="mb-3 flex items-center gap-2">
                                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF746C]">
                                    Here&apos;s How We Work
                                </span>
                            </div>

                            <h2 className="max-w-[800px] font-serif text-[1.9rem] sm:text-[2rem] lg:text-[2.6rem] font-bold leading-[1.08] tracking-[-0.035em] text-white">
                                From Manuscript to
                                <br />
                                Published Book in{" "}
                                <span className="text-[#E7665D]">
                                    Six Phases
                                </span>
                            </h2>

                            <p className="mt-5 max-w-[630px] font-sans text-sm leading-[1.8] text-slate-300 sm:text-[15px]">
                                Our book publishing services follow a transparent,
                                six-phase roadmap so you always know exactly where
                                your project stands and what comes next.
                            </p>
                        </div>

                        {/* Six Phase Cards */}
                        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4 2xl:gap-5 md:mx-12">
                            {publishingRoadmap.map((step, index) => {
                                const Icon = phaseIcons[index] || FileText;
                                const MilestoneIcon = milestoneIcons[index] || FileText;

                                return (
                                    <div
                                        key={step.number}
                                        className="group relative flex h-full min-w-0 w-full flex-col rounded-xl border border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#172B4D] to-[#294D78] p-5 2xl:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/60 hover:shadow-[0_12px_35px_rgba(231,102,93,0.12)]"
                                    >
                                        {/* Phase number */}
                                        <span className="font-sans text-[21px] font-extrabold leading-none tracking-tight text-[#F07870]">
                                            {step.number}
                                        </span>

                                        {/* Phase icon */}
                                        <div className="mt-4 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#E7665D]/30 bg-[radial-gradient(circle_at_50%_35%,#405371_0%,#25314D_55%,#17223C_100%)] text-[#F07870] shadow-[inset_0_0_12px_rgba(231,102,93,0.14),0_0_15px_rgba(231,102,93,0.08)] transition-all duration-300 group-hover:scale-105">
                                            <Icon size={25} strokeWidth={1.8} />
                                        </div>

                                        {/* Content */}
                                        <div className="mt-4 flex-1">
                                            <h3 className="font-serif text-[17px] 2xl:text-[19px] font-bold leading-[1.3] tracking-tight text-white">
                                                {step.title}
                                            </h3>

                                            <p className="mt-3 font-sans text-[12px] 2xl:text-[13px] leading-[1.75] text-slate-300">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Deliverable */}
                                        <div className="mt-7 flex min-h-[82px] w-full items-center gap-3 rounded-lg border border-[#3B5984]/65 bg-gradient-to-br from-[#142744] to-[#1B3B65]/85 p-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7665D]/20 bg-[#E7665D]/10 text-[#F07870]">
                                                <MilestoneIcon size={19} strokeWidth={1.8} />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <span className="block font-sans text-[9px] font-bold uppercase tracking-[0.08em] text-[#F07870]">
                                                    Deliverable
                                                </span>

                                                <span className="mt-1 block break-words font-sans text-[11px] leading-[1.5] text-[#D3E3F8]">
                                                    {step.milestone}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Arrow between cards */}
                                        {index < publishingRoadmap.length - 1 && (
                                            <div className="absolute -right-[23px] top-[23%] z-20 hidden h-8 w-8 items-center justify-center rounded-full border border-[#E7665D]/70 bg-[#142541] text-[#F07870] shadow-[0_0_0_3px_#102440] xl:flex">
                                                <ArrowRight size={14} strokeWidth={1.8} />
                                            </div>
                                        )}
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
                                Publish Your Book In Paperback, {" "}
                                <span className="italic text-[#E7665D]">
                                    Hardcover &amp; eBook Formats
                                </span>
                            </>
                        }
                        description="Every book is published in three editions hardcover, paperback and ebook, each designed for its format and built to one publishing standard."
                    />

                    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-8">
                        {/* LEFT: Content */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col">
                                {formats.map((f, index) => {
                                    const Icon = f.icon;

                                    const updatedFormats = [
                                        {
                                            title: "Collector-Grade Hardcovers",
                                            description: (
                                                <>
                                                    Premium binding with dust jacket, built for bookstores, gifting, and long-term shelf presence.
                                                </>
                                            ),
                                        },
                                        {
                                            title: "French-Fold Trade Paperbacks",
                                            description: (
                                                <>
                                                    High-quality trade paperback with professional finishes, designed for wider retail reach.
                                                </>
                                            ),
                                        },
                                        {
                                            title: "Mastered Reflowable ePubs & Kindle",
                                            description: (
                                                <>
                                                    Clean, properly formatted files for Kindle and other devices that read well across platforms
                                                </>
                                            ),
                                        },
                                    ];

                                    const content = updatedFormats[index];

                                    if (!content) return null;

                                    return (
                                        <div
                                            key={content.title}
                                            className="flex items-start gap-5 py-6 border-t border-[#E7665D]/20 last:border-b"
                                        >
                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30">
                                                <Icon size={22} />
                                            </span>

                                            <div className="flex-1">
                                                <div className="flex items-center justify-between gap-3">
                                                    <h3 className="font-serif text-[1.2rem] font-bold text-ink">
                                                        {content.title}
                                                    </h3>

                                                    <span className="shrink-0 font-sans text-[10.5px] uppercase tracking-[0.16em] text-ink-muted font-semibold bg-[#fdf6f5] px-2.5 py-1 rounded-md border border-[#E7665D]/20">
                                                        {f.badge}
                                                    </span>
                                                </div>

                                                <p className="text-sm text-ink-soft leading-relaxed mt-3">
                                                    {content.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* RIGHT: Book Covers */}
                        <div className="relative flex items-center justify-center py-10">
                            <div className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-3xl bg-[#fdf6f5] border border-[#E7665D]/15 -z-10" />

                            <Image
                                src="/Publishing Mckp.png"
                                alt="Publishing Book Editions Mockup"
                                width={650}
                                height={650}
                                className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                                priority
                            />
                        </div>
                    </Container>
                </section>


                {/* The Collingwood Press Publishing Advantage */}
                <section
                    id="publishing-advantage"
                    className="py-20 bg-white border-b border-line"
                >
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            eyebrow="The Collingwood Difference"
                            title={
                                <>
                                    The Collingwood Press{" "}
                                    <span className="italic text-[#E7665D]">
                                        Publishing Advantage
                                    </span>
                                </>
                            }
                            description="Not every self-publishing company operates with the same standards. Here is what sets our model apart and why authors trust us with their manuscripts."
                        />


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
                            {publishingFeatures.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={feature.id}
                                        className="p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col hover:border-[#E7665D]/50 transition-all duration-300"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4">
                                            <Icon size={20} />
                                        </div>

                                        <h3 className="font-serif text-lg font-bold text-ink leading-snug">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm text-ink-soft mt-3 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                    </Container>
                </section>

                {/* SECTION 10: Related Author Services */}
                <section
                    id="related-author-services"
                    className="relative overflow-hidden bg-white py-20 lg:py-24 border-b border-line"
                >
                    {/* Subtle Background Decoration */}
                    <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#E7665D]/5 blur-3xl pointer-events-none" />

                    <Container className="relative z-10 flex flex-col gap-12">
                        {/* Section Heading */}
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center gap-3">
                                {/* <span className="w-8 h-px bg-[#E7665D]/60" /> */}
                                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#E7665D] font-semibold">
                                    Craft, Publish & Grow
                                </span>
                                {/* <span className="w-8 h-px bg-[#E7665D]/60" /> */}
                            </div>

                            <h2 className="mt-4 max-w-2xl font-serif text-[2rem] sm:text-[2.4rem] lg:text-[2.7rem] font-bold text-ink leading-tight tracking-tight">
                                Beyond Publishing<br />  {" "}
                                <span className="text-[#E7665D]">
                                    Complete Author Solutions
                                </span>
                            </h2>

                            <p className="mt-4 max-w-2xl text-sm sm:text-base text-ink-soft leading-relaxed">
                                Discover the complete range of publishing services designed to bring your book to life, reach more readers, and grow your author brand.
                            </p>
                        </div>

                        {/* Service Cards */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
                            {services.map((service) => {
                                const Icon = service.icon;

                                return (
                                    <div
                                        key={service.id}
                                        className="group flex flex-col justify-between rounded-xl border border-[#E7665D]/25 bg-white p-7 lg:p-8 shadow-[0_4px_24px_rgba(231,102,93,0.10)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_rgba(231,102,93,0.18)] transition-all duration-300"
                                    >
                                        <div>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] border border-[#E7665D]/25 text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-all duration-300">
                                                <Icon size={22} />
                                            </div>

                                            <h3 className="mt-6 font-serif text-xl font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="mt-7 border-t border-line/70 pt-5">
                                            <Link
                                                href={service.href}
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E7665D] hover:text-ink transition-colors"
                                            >
                                                {service.linkText}
                                                <ArrowRight
                                                    size={16}
                                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </Container>
                </section>
                <FAQAccordion
                    items={publishingFAQs}
                    eyebrow="Publishing FAQ"
                    title={
                        <>
                            Frequently Asked Questions

                        </>
                    }
                    sectionId="publishing-faq"
                />
                <FinalCTA
                    eyebrow="Start Publishing Today"
                    title={
                        <>
                            Your Manuscript Is Ready.{" "}
                            <span className="block italic font-normal text-[#F08A82] sm:inline">
                                Let Us Publish It.
                            </span>
                        </>
                    }
                    description={
                        <>
                            Send us your manuscript or your opening chapters. A senior
                            editor will review your work and provide a candid,
                            no-obligation assessment of where it stands and what it
                            needs. Whether you are weeks from publication or still
                            refining your first draft, our{" "}
                            <strong className="font-semibold text-white">
                                book publishing services
                            </strong>{" "}
                            team will map the clearest path from manuscript to
                            marketplace. The right publishing partner makes all the
                            difference, and we are ready to prove it.
                        </>
                    }
                    buttonText="Submit Manuscript for Free Editorial Review"
                    buttonHref="/contact-us/#manuscript-reviewave questions"
                />
            </main>
            <Footer />
        </>
    );
}
