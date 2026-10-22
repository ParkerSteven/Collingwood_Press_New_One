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
} from "lucide-react";
import { formats } from "@/lib/formats";
import { Fragment } from "react";
import FAQAccordion from "../sections/FAQAccordion";
import { publishingFAQs, resources } from "@/lib/data";
import FinalCTA from "../sections/FinalCTA";
import Link from "next/link";
import HeroSection from "../sections/HeroSection";
import ResourceCard from "../ui/Card";


const publishingRoadmap = [
    {
        number: "01",
        title: "Manuscript Preparation",
        tagline: "Editorial & Intake Sign-Off",
        description:
            "Your complete manuscript undergoes final file preparation, character styling verification, and intake audits. We resolve formatting conflicts, standardize heading structures, and certify a clean master document before any design work begins. For self-publishing for new authors, this phase eliminates the technical confusion that derails most first projects.",
        milestone: "Certified Clean Master Document",
        icon: FileText,
    },
    {
        number: "02",
        title: "Cover & Interior Design",
        tagline: "Visual & Tactile Artistry",
        description:
            "Our design team creates bespoke dust jacket artwork, selects genre-appropriate typography, and specifies tactile embellishments such as foil stamping, embossing, and soft-touch matte lamination. The interior layout is customized for your genre's visual conventions, not pulled from a generic template library.",
        milestone: "Jacket Mechanicals & Sample Interior Spreads",
        icon: Palette,
    },
    {
        number: "03",
        title: "Formatting & Typesetting",
        tagline: "Adobe InDesign Precision",
        description:
            "Every interior is hand-typeset in Adobe InDesign with meticulous attention to widows, orphans, and hyphen ladders. We produce print-ready PDF files calibrated for print-on-demand production alongside reflowable ePub3 files engineered for seamless rendering across all e-readers and tablets.",
        milestone: "Full Bound Galley Proof for Author Review",
        icon: Layers,
    },
    {
        number: "04",
        title: "Publishing Setup",
        tagline: "Identifiers & Legal Cataloguing",
        description:
            "We secure your dedicated Bowker ISBNs registered to your name, assign official EAN barcodes, file Library of Congress Control Numbers where applicable, and optimise BISAC subject keywords for retail discoverability. You are the publisher of record on every identifier. This is a core distinction of our self-publishing services: your name appears on the ISBN, not ours.",
        milestone: "Official Global Catalogue Filings",
        icon: Settings,
    },
    {
        number: "05",
        title: "Trade Distribution",
        tagline: "Global Wholesale Ingestion",
        description:
            "Your book is ingested into the Ingram Content Group distribution network, making it orderable across 40,000+ bookstores, Barnes & Noble retail locations, Amazon marketplaces, and university library systems. Our Amazon KDP publishing services configuration ensures your Kindle edition, paperback, and hardcover are all live and optimized from launch.",
        milestone: "Active Worldwide Bookseller Feed",
        icon: Globe,
    },
    {
        number: "06",
        title: "Launch & Release",
        tagline: "Publication Day Rollout",
        description:
            "A coordinated market debut with synchronized live retail pages, physical availability for ordering, author-discount copy shipments, and promotional activation. Your book arrives on shelves and screens ready to sell, not buried behind incomplete metadata or delayed listings.",
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
                            Your manuscript deserves more than a template upload
                            and an automated conversion. Our book publishing
                            services take every project from raw draft to
                            retail-ready hardcover, paperback, and eBook through
                            hands-on editorial development, custom InDesign
                            typesetting, original cover artwork, and worldwide
                            distribution via Amazon KDP, IngramSpark, and
                            Barnes &amp; Noble. Whether you are a first-time author
                            navigating the industry for the first time or a
                            seasoned writer launching your next title, we handle
                            the entire production pipeline while you retain
                            100% of your copyright and royalties. No rights
                            transfers. No royalty splits. Just professional
                            publishing built around the author who wrote the book.
                        </p>
                    }
                    buttons={[
                        {
                            text: "Submit Manuscript for Publishing",
                            href: "/contact-us#manuscript-review",
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
                                Publishing a book means nothing if readers cannot find it. Our book distribution services place your title across every major retail and library channel from day one. Through our partnership with the Ingram Content Group, your book enters a wholesale network that serves over 40,000 bookstores, academic institutions, and library systems worldwide. Simultaneously, we configure your listings on Amazon KDP, Barnes & Noble Press, Apple Books, Google Play Books, Kobo, Scribd, and OverDrive. Every listing is optimized with strategic BISAC categories, precise metadata, and search-friendly keywords so your title surfaces when readers browse your genre. This is not passive availability. It is active, strategic book publishing services distribution engineered for discoverability.
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


                    <Container className="flex flex-col gap-14 sm:gap-16">
                        <SectionHeading
                            eyebrow="The End-to-End Roadmap"
                            title={
                                <>
                                    From Manuscript to Published Book in{" "}
                                    <span className="italic text-[#E7665D]">
                                        Six Structured Phases
                                    </span>
                                </>
                            }
                            description="A professional book does not appear by accident. It moves through a defined production sequence where every phase has a clear deliverable and your explicit sign-off before the next begins. Our book publishing services follow a transparent, six-phase roadmap so you always know exactly where your project stands and what comes next."
                        />

                        {/* 6-Step Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {publishingRoadmap.map((step) => {
                                const Icon = step.icon;

                                const highlightedKeywords = [
                                    "self-publishing for new authors",
                                    "print-on-demand",
                                    "self-publishing services",
                                    "Amazon KDP publishing services",
                                ];

                                const keywordPattern = new RegExp(
                                    `(${highlightedKeywords.join("|")})`,
                                    "gi"
                                );

                                const descriptionParts = step.description.split(keywordPattern);

                                return (
                                    <div
                                        key={step.number}
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
                                                {`Phase ${step.number}: ${step.title} — ${step.tagline}`}
                                            </h3>

                                            <p className="text-sm text-ink-soft leading-relaxed mt-3">
                                                {descriptionParts.map((part, index) =>
                                                    highlightedKeywords.some(
                                                        (keyword) =>
                                                            keyword.toLowerCase() === part.toLowerCase()
                                                    ) ? (
                                                        <>
                                                            {part}
                                                        </>
                                                    ) : (
                                                        <Fragment key={index}>
                                                            {part}
                                                        </Fragment>
                                                    )
                                                )}
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
                                Publishing Solutions: Hardcover, Paperback &amp;{" "}
                                <span className="italic text-[#E7665D]">
                                    eBook Under One Roof
                                </span>
                            </>
                        }
                        description="Every title we acquire is prepared simultaneously across three formats, each purpose-built for its reading environment. Our book publishing packages do not force you to choose between physical and digital. You get all three, produced to the same exacting standard."
                    />

                    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-20">
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
                                                    Archival Smyth-sewn binding with rich linen cloth or
                                                    printed dust jacket, gold foil spine stamping, head
                                                    and tail bands, and optional custom endpapers. Built
                                                    for bookstore display, gift giving, and long-term
                                                    shelf presence. Whether you are publishing literary
                                                    fiction, a memoir, or a
                                                    children&apos;s book
                                                    , the hardcover edition establishes the authority of
                                                    your work.
                                                </>
                                            ),
                                        },
                                        {
                                            title: "French-Fold Trade Paperbacks",
                                            description: (
                                                <>
                                                    Premium 60lb or 70lb natural cream interior paper,
                                                    velvet soft-touch matte lamination, scoring on hinges,
                                                    and optional embossed spot UV lettering. This format
                                                    is the commercial backbone of most
                                                    indie publishing marketingServices
                                                    because it balances quality with an accessible retail
                                                    price that drives volume.
                                                </>
                                            ),
                                        },
                                        {
                                            title: "Mastered Reflowable ePubs & Kindle",
                                            description: (
                                                <>
                                                    Hand-coded valid ePub3 and Kindle formats tailored for
                                                    responsive font scaling, high-DPI tablets, dynamic
                                                    tables of contents, and cross-platform fidelity. Our
                                                    ebook publishing
                                                    process ensures your digital edition reads as polished
                                                    as the print version on every device, from a Kindle
                                                    Paperwhite to an iPad Pro.
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

                {/* Cover Design Spotlight Anchor Section */}

                <section
                    id="cover-design"
                    className="py-20 lg:py-24 bg-[#fdfbf7] border-b border-line"
                >
                    <Container className="flex flex-col gap-12">
                        <SectionHeading
                            eyebrow="Visual Literature"
                            title={
                                <>
                                    The Craft Behind Every Cover:{" "}
                                    <span className="italic text-[#E7665D]">
                                        Genre-Calibrated Visual Strategy
                                    </span>
                                </>
                            }
                            description="Your dust jacket is the first conversation your book holds with a reader. Our design team analyses current bestseller lists in your specific subgenre to balance familiar visual conventions with a distinctive artistic identity that stands apart on bookstore tables and thumbnail grids. Every cover is an original composition, not a stock-photo arrangement or a template swap."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
                            {/* Card 1: Tactile Embellishments */}
                            <div className="p-8 sm:p-9 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] hover:border-[#E7665D]/50 transition-all duration-300">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-5">
                                    <Palette size={22} />
                                </div>

                                <h3 className="font-serif text-xl font-bold text-ink">
                                    Tactile Embellishments &amp; Premium Finishes
                                </h3>

                                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                                    Real metallic gold foil stamping, spot UV varnish, custom
                                    blind debossing, and velvety soft-touch matte lamination.
                                    These finishes transform a printed cover into a physical
                                    experience that makes book collectors and bookstore buyers
                                    take notice. Premium production is standard across our{" "}
                                    <strong className="font-semibold text-ink">
                                        book publishing services
                                    </strong>
                                    , not an upsell.
                                </p>

                                <div className="mt-5 pt-4 border-t border-line/70 flex items-center gap-2 text-xs text-[#E7665D] font-medium">
                                    <CheckCircle2 size={14} />
                                    <span>
                                        Gold Foil &bull; Spot UV &bull; French-Folds
                                    </span>
                                </div>
                            </div>

                            {/* Card 2: Competitive Analysis */}
                            <div className="p-8 sm:p-9 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] hover:border-[#E7665D]/50 transition-all duration-300">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-5">
                                    <Globe size={22} />
                                </div>

                                <h3 className="font-serif text-xl font-bold text-ink">
                                    Competitive Analysis &amp; Reader Psychology
                                </h3>

                                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                                    We study the top-performing titles in your category,
                                    identify the visual patterns readers associate with
                                    quality in your genre, and design a cover that meets
                                    those expectations while establishing your unique visual
                                    identity. For{" "}
                                    <strong className="font-semibold text-ink">
                                        children&apos;s book publishers
                                    </strong>{" "}
                                    and authors in every genre, cover strategy is where sales
                                    potential is won or lost.
                                </p>

                                <div className="mt-5 pt-4 border-t border-line/70 flex items-center gap-2 text-xs text-[#E7665D] font-medium">
                                    <CheckCircle2 size={14} />
                                    <span>
                                        Competitive Analysis &bull; Reader Psychology
                                    </span>
                                </div>
                            </div>
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
                                    The Collingwood Press Publishing Advantage:{" "}
                                    <span className="italic text-[#E7665D]">
                                        Guarantees That Protect Your Work
                                    </span>
                                </>
                            }
                            description="Not every self-publishing company operates with the same standards. Here is what sets our model apart and why authors trust us with their manuscripts."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
                            {/* Card 1: Copyright & Royalties */}
                            <div className="p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col hover:border-[#E7665D]/50 transition-all duration-300">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4">
                                    <ShieldCheck size={20} />
                                </div>

                                <h3 className="font-serif text-lg font-bold text-ink leading-snug">
                                    100% Copyright &amp; Royalty Retention
                                </h3>

                                <p className="text-sm text-ink-soft mt-3 leading-relaxed">
                                    Your intellectual property stays exactly where it belongs:
                                    with you. Full copyright ownership. Full royalties. Zero
                                    exceptions. That guarantee is written into every publishing
                                    agreement we sign.
                                </p>
                            </div>

                            {/* Card 2: Publisher of Record */}
                            <div className="p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col hover:border-[#E7665D]/50 transition-all duration-300">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4">
                                    <BookOpenCheck size={20} />
                                </div>

                                <h3 className="font-serif text-lg font-bold text-ink leading-snug">
                                    You Are the Publisher of Record
                                </h3>

                                <p className="text-sm text-ink-soft mt-3 leading-relaxed">
                                    The ISBN is registered in your name. The retail accounts
                                    are opened in your name. Some services assign an ISBN from
                                    their own prefix and become the publisher on the record.
                                    We never do that.
                                </p>
                            </div>

                            {/* Card 3: Transparent Publishing Cost */}
                            <div className="p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col hover:border-[#E7665D]/50 transition-all duration-300">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4">
                                    <FileSpreadsheet size={20} />
                                </div>

                                <h3 className="font-serif text-lg font-bold text-ink leading-snug">
                                    Transparent Book Publishing Cost &amp; Custom Packages
                                </h3>

                                <p className="text-sm text-ink-soft mt-3 leading-relaxed">
                                    No hidden fees, no surprise invoices at production
                                    milestones. Our
                                    book publishing packages
                                    are scoped and priced before work begins. You approve the
                                    plan, the timeline, and the cost upfront. Every package is
                                    tailored to your manuscript&apos;s specific needs rather
                                    than forced into a one-size-fits-all tier.
                                </p>
                            </div>

                            {/* Card 4: Galley Proof Review */}
                            <div className="p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col hover:border-[#E7665D]/50 transition-all duration-300">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4">
                                    <FileText size={20} />
                                </div>

                                <h3 className="font-serif text-lg font-bold text-ink leading-snug">
                                    Galley Proof Review &amp; Author Sign-Off
                                </h3>

                                <p className="text-sm text-ink-soft mt-3 leading-relaxed">
                                    The finished galley proof is the final checkpoint before
                                    your book goes to retail. You read it, mark what needs
                                    changing, and we do not upload until you have signed it
                                    off. No book goes live without your explicit approval.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>


                {/* Author Checklist Anchor Section */}

                {/* Section 8: Author Resource Library */}
                <section
                    id="author-resources"
                    className="hero-gradient py-20 lg:py-28 text-white border-b border-white/10 relative overflow-hidden paper-grain"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="max-w-5xl mx-auto">
                            {/* Section Heading */}
                            <div className="text-center mb-12">
                                <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                                    Author Resource Library
                                </span>

                                <h2 className="mt-3 max-w-3xl mx-auto font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                                    Manuscript Preparation Templates &amp; Style Guides
                                </h2>

                                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                    Download industry-standard manuscript formatting templates
                                    and style guides crafted by our senior editorial directors.
                                    These resources help
                                    self-publishing for new Authors
                                    start on the right foundation and reduce revision cycles
                                    during production.
                                </p>
                            </div>

                            {/* Resource Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {resources.map((resource) => (
                                    <ResourceCard
                                        key={resource.id}
                                        icon={resource.icon}
                                        title={resource.title}
                                        description={resource.description}
                                        buttonText={resource.buttonText}
                                        href={resource.href}
                                    />
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>


                {/* SECTION 9: Production Readiness Checklist */}
                <section
                    id="publishing-checklist"
                    className="relative overflow-hidden bg-[#fdfbf7] py-20 lg:py-28 border-b border-line"
                >
                    {/* Subtle Background Decoration */}
                    <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#E7665D]/5 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#E7665D]/5 blur-3xl pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="max-w-5xl mx-auto">
                            {/* Section Heading */}
                            <div className="flex flex-col items-center text-center mb-12 lg:mb-14">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-px bg-[#E7665D]/60" />
                                    <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#E7665D] font-semibold">
                                        Production Readiness
                                    </span>
                                    <span className="w-8 h-px bg-[#E7665D]/60" />
                                </div>

                                <h2 className="mt-4 max-w-2xl mx-auto font-serif text-[2rem] sm:text-[2.4rem] lg:text-[2.7rem] font-bold text-ink leading-tight tracking-tight">
                                    The Collingwood Author{" "}
                                    <span className="text-[#E7665D]">
                                        Publishing Checklist
                                    </span>
                                </h2>

                                <p className="mt-4 text-sm sm:text-base text-ink-soft leading-relaxed max-w-2xl">
                                    Every milestone we shepherd on your behalf before a single
                                    carton of books ships from the bindery. This checklist
                                    represents the complete scope of professional
                                    book publishing services
                                    production.
                                </p>
                            </div>

                            {/* Checklist Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                                {[
                                    "Complete polished manuscript in Word or RTF format",
                                    "Working author bio, credentials, and high-resolution portrait",
                                    "Genre positioning and competitive title analysis",
                                    "Dedicated ISBN registration and barcode assignment",
                                    "Library of Congress Control Number (LCCN) filing",
                                    "BISAC subject categories and metadata search keywords",
                                    "Interior typesetting approval and physical proof review",
                                    "Final jacket mechanical proof and foil registration sign-off",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-4 rounded-xl border border-[#E7665D]/20 bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(231,102,93,0.06)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_30px_rgba(231,102,93,0.12)] transition-all duration-300"
                                    >
                                        {/* Check Icon */}
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] border border-[#E7665D]/25 text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-all duration-300">
                                            <CheckCircle2 size={20} />
                                        </div>

                                        {/* Checklist Content */}
                                        <p className="text-sm sm:text-[15px] font-medium text-ink-soft leading-relaxed group-hover:text-ink transition-colors">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-12 lg:mt-14 flex flex-col items-center text-center">
                                <Button
                                    href="/contact-us#manuscript-review"
                                    variant="primary"
                                    size="lg"
                                >
                                    <span>Begin Your Publishing Journey</span>
                                    <ArrowRight size={16} />
                                </Button>
                            </div>
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
                                <span className="w-8 h-px bg-[#E7665D]/60" />
                                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#E7665D] font-semibold">
                                    Complete Author Solutions
                                </span>
                                <span className="w-8 h-px bg-[#E7665D]/60" />
                            </div>

                            <h2 className="mt-4 max-w-2xl font-serif text-[2rem] sm:text-[2.4rem] lg:text-[2.7rem] font-bold text-ink leading-tight tracking-tight">
                                Related Author Services:{" "}
                                <span className="text-[#E7665D]">
                                    Editing, Marketing &amp; Audiobook Production
                                </span>
                            </h2>

                            <p className="mt-4 max-w-3xl text-sm sm:text-base text-ink-soft leading-relaxed">
                                Publishing is one stage of a larger process. Our
                                book publishing services
                                integrate seamlessly with every other service an author needs.
                                Whether your manuscript still requires editorial development
                                or your published book is ready for a marketing campaign, our
                                team coordinates every phase under one roof.
                            </p>
                        </div>

                        {/* Service Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
                            {/* Card 1: Editing */}
                            <div className="group flex flex-col justify-between rounded-xl border border-[#E7665D]/25 bg-white p-7 lg:p-8 shadow-[0_4px_24px_rgba(231,102,93,0.10)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_rgba(231,102,93,0.18)] transition-all duration-300">
                                <div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] border border-[#E7665D]/25 text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-all duration-300">
                                        <FileText size={22} />
                                    </div>

                                    <h3 className="mt-6 font-serif text-xl font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                        Book Editing &amp; Proofreading
                                    </h3>

                                    <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                                        Developmental editing, line editing, copy editing, and
                                        proofreading from senior editors with deep genre knowledge.
                                        Most manuscripts benefit from at least one editorial pass
                                        before entering production. Our editing services prepare
                                        your work for the publishing pipeline.
                                    </p>
                                </div>

                                <div className="mt-7 border-t border-line/70 pt-5">
                                    <Link
                                        href="/editing"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#E7665D] hover:text-ink transition-colors"
                                    >
                                        Learn more: Book Editing Services
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Card 2: Marketing */}
                            <div className="group flex flex-col justify-between rounded-xl border border-[#E7665D]/25 bg-white p-7 lg:p-8 shadow-[0_4px_24px_rgba(231,102,93,0.10)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_rgba(231,102,93,0.18)] transition-all duration-300">
                                <div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] border border-[#E7665D]/25 text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-all duration-300">
                                        <Rocket size={22} />
                                    </div>

                                    <h3 className="mt-6 font-serif text-xl font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                        Book Marketing &amp; Launch Strategy
                                    </h3>

                                    <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                                        Amazon advertising management, targeted reviewer outreach,
                                        media placement campaigns, and coordinated launch
                                        strategies built around your genre and audience. A
                                        published book without a marketing plan is a book waiting
                                        to be discovered by accident.
                                    </p>
                                </div>

                                <div className="mt-7 border-t border-line/70 pt-5">
                                    <Link
                                        href="/marketing"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#E7665D] hover:text-ink transition-colors"
                                    >
                                        Learn more: Book Marketing Services
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Card 3: Audiobook */}
                            <div className="group flex flex-col justify-between rounded-xl border border-[#E7665D]/25 bg-white p-7 lg:p-8 shadow-[0_4px_24px_rgba(231,102,93,0.10)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_rgba(231,102,93,0.18)] transition-all duration-300">
                                <div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] border border-[#E7665D]/25 text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-all duration-300">
                                        <BookOpenCheck size={22} />
                                    </div>

                                    <h3 className="mt-6 font-serif text-xl font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                        Audiobook Production &amp; Distribution
                                    </h3>

                                    <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                                        Voice actor casting, professional studio recording,
                                        audio mastering, and distribution to Audible, Apple Books,
                                        and Spotify. Reach the growing audience of listeners who
                                        consume books through audio.
                                    </p>
                                </div>

                                <div className="mt-7 border-t border-line/70 pt-5">
                                    <Link
                                        href="/audiobook"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#E7665D] hover:text-ink transition-colors"
                                    >
                                        Learn more: Audiobook Production Services
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <FAQAccordion
                    items={publishingFAQs}
                    eyebrow="Publishing FAQ"
                    title={
                        <>
                            Frequently Asked Questions About Our{" "}
                            <span className="italic text-[#E7665D]">
                                Book Publishing Services
                            </span>
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
                    buttonHref="/contact-us#manuscript-review"
                />
            </main>
            <Footer />
        </>
    );
}
