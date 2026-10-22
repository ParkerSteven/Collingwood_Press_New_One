
"use client";

import { Suspense, type ReactElement } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
    ArrowRight,
    CheckCircle2,
    MessageCircle,
    PenLine,
    FilePenLine,
    BookOpen,
    Megaphone,
    Headphones,
    Home,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import MarketingServices from "../sections/MarketingServices";
// import { openAIChat } from "@/lib/chat";
import UtilityBar from "../layout/UtilityBar";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface ServiceItem {
    title: string;
    href: string;
    icon: LucideIcon;
    description: string;
}

// Services Data
const services: ServiceItem[] = [
    {
        title: "Ghostwriting",
        href: "/ghostwriting/",
        icon: PenLine,
        description: "Bring your story to life with professional writing.",
    },
    {
        title: "Editing",
        href: "/editing/",
        icon: FilePenLine,
        description: "Refine your manuscript with expert editorial care.",
    },
    {
        title: "Publishing",
        href: "/publishing/",
        icon: BookOpen,
        description: "Turn your manuscript into a professionally published book.",
    },
    {
        title: "Marketing",
        href: "/marketing/",
        icon: Megaphone,
        description: "Connect your book with the right readers.",
    },
    {
        title: "Audiobook",
        href: "/audiobook/",
        icon: Headphones,
        description: "Give your story a voice with audiobook production.",
    },
];

function ThankyouContent(): ReactElement {
    const searchParams = useSearchParams();

    const rawName = searchParams.get("name") || "";

    const displayName = rawName
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map(
            (part: string) =>
                part.charAt(0).toUpperCase() +
                part.slice(1).toLowerCase()
        )
        .join(" ");

    // Open AI chat or Brevo chat
    // const handleOpenChat = (): void => {
    //     openAIChat();
    // };

    return (
        <>
            <UtilityBar />
            <Header />
            <main className="min-h-screen bg-white text-ink">
                {/* =====================================
          THANK YOU HERO SECTION
      ===================================== */}
                <section className="hero-gradient relative overflow-hidden paper-grain border-b border-white/10 py-20 text-white sm:py-24 lg:py-28">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7665D]/10 blur-[110px]" />

                    <Container className="relative z-10">
                        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                            {/* Success Icon */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#E7665D]/40 bg-[#E7665D]/10 text-[#F08A82]">
                                <CheckCircle2 size={32} strokeWidth={1.8} />
                            </div>

                            {/* Eyebrow */}
                            <span className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F08A82]">
                                Your Submission Has Been Received
                            </span>

                            {/* Heading */}
                            <h1 className="mt-5 font-serif text-[2.8rem] font-bold leading-tight text-white sm:text-[2.8rem] lg:text-[3.2rem]">
                                Thank{" "}
                                <span className="italic text-[#E7665D]">
                                    You{displayName ? "," : "!"}
                                </span>

                                {displayName && (
                                    <span className="mt-2 block break-words text-white">
                                        {displayName}!
                                    </span>
                                )}
                            </h1>

                            {/* Description */}
                            <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-relaxed text-slate-300 sm:text-base">
                                Thank you for choosing{" "}
                                <strong className="font-semibold text-white">
                                    The Collingwood Press.
                                </strong>{" "}
                                Every great book begins with a story worth sharing.
                                We&apos;re excited to help you take the next step
                                toward bringing yours to readers around the world.
                            </p>

                            {/* Buttons */}
                            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                                {/* <button
                                    type="button"
                                    onClick={handleOpenChat}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E7665D] px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_4px_14px_rgba(231,102,93,0.25)] transition-all duration-300 hover:bg-[#D8574E]"
                                >
                                    <MessageCircle size={17} />
                                    In a Hurry? Talk to Us
                                    <ArrowRight size={15} />
                                </button> */}

                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/[0.05] px-7 py-3.5 font-sans text-sm font-semibold text-white transition-all duration-300 hover:border-[#E7665D] hover:bg-white/10"
                                >
                                    <Home size={16} />
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* =====================================
          CONFIRMATION SECTION
      ===================================== */}
                <section className="border-b border-line bg-[#fdfbf7] py-12 sm:py-16">
                    <Container>
                        <div className="mx-auto max-w-3xl rounded-xl border border-[#E7665D]/25 bg-white p-7 text-center shadow-[0_4px_24px_0_rgba(231,102,93,0.10)] sm:p-10">
                            <CheckCircle2
                                size={29}
                                className="mx-auto text-[#E7665D]"
                            />

                            <h2 className="mt-4 font-serif text-2xl font-bold text-ink sm:text-3xl">
                                Your Publishing Journey Starts Here
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
                                Your inquiry has been submitted successfully.
                                Our publishing team will review the information
                                you provided and reach out to discuss the next
                                steps for your book.
                            </p>

                            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E7665D]/20 bg-[#fdf6f5] px-4 py-2">
                                <CheckCircle2
                                    size={14}
                                    className="text-[#E7665D]"
                                />

                                <span className="font-sans text-xs font-semibold text-ink">
                                    Thank You for Connecting With Us
                                </span>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* =====================================
          MARKETING PREFERENCES NOTICE
      ===================================== */}
                <section className="border-b border-line bg-white py-6">
                    <Container>
                        <p className="mx-auto max-w-3xl text-center font-sans text-xs leading-relaxed text-ink-muted">
                            If you opted in to marketing communications,
                            you can manage your preferences at any time
                            by visiting{" "}
                            <Link
                                href="/privacy-choices/"
                                className="font-semibold text-[#E7665D] underline transition-colors hover:text-[#D8574E]"
                            >
                                Your Privacy Choices
                            </Link>
                            .
                        </p>
                    </Container>
                </section>

                {/* =====================================
          SERVICES SECTION
      ===================================== */}
                <section
                    id="thankyou-services"
                    className="border-b border-line bg-white py-20 lg:py-24"
                >
                    <Container className="flex flex-col gap-12">
                        {/* Section Heading */}
                        <div className="mx-auto max-w-2xl text-center">
                            <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#E7665D]">
                                Explore Our Publishing Services
                            </span>

                            <h2 className="mt-4 font-serif text-[2.2rem] font-bold leading-tight text-ink sm:text-[2.7rem]">
                                Everything Your Book{" "}
                                <span className="italic text-[#E7665D]">
                                    Deserves
                                </span>
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-ink-soft sm:text-base">
                                From your first draft to global distribution,
                                discover the professional services available
                                to support every stage of your publishing journey.
                            </p>
                        </div>

                        {/* Services Cards */}
                        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                            {services.map((service) => {
                                const Icon = service.icon;

                                return (
                                    <Link
                                        key={service.title}
                                        href={service.href}
                                        className="group flex flex-col items-center rounded-xl border border-[#E7665D]/25 bg-white p-6 text-center shadow-[0_4px_24px_0_rgba(231,102,93,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.16)]"
                                    >
                                        {/* Icon */}
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#E7665D]/25 bg-[#fdf6f5] text-[#E7665D] transition-all duration-300 group-hover:bg-[#E7665D] group-hover:text-white">
                                            <Icon size={21} strokeWidth={1.8} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-5 font-serif text-lg font-bold text-ink">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-3 flex-1 font-sans text-xs leading-relaxed text-ink-soft">
                                            {service.description}
                                        </p>

                                        {/* Arrow */}
                                        <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs font-semibold text-[#E7665D]">
                                            Learn More
                                            <ArrowRight
                                                size={14}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                {/* =====================================
          MARKETING SERVICES
      ===================================== */}
                <MarketingServices />
            </main>
            <Footer />
        </>

    );
}



// Required for useSearchParams() on statically rendered App Router pages.
export default function Thankyou(): ReactElement {
    return (
        <Suspense fallback={<main className="min-h-screen bg-white" />}>
            <ThankyouContent />
        </Suspense>
    );
}
