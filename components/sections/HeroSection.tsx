
import type { ReactNode } from "react";
import {
    Lock,
    ShieldCheck,
    CheckCircle2,
    type LucideIcon,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import HeroSectionClient from "../ui/HeroSectionClient";

const defaultClassName =
    "relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white";

type HeroButton = {
    text: string;
    href: string;
    variant?: "primary" | "outline-white";
    showArrow?: boolean;
};

type HeroGuarantee = {
    text: string;
    icon: LucideIcon;
};

interface HeroSectionProps {
    className?: string;
    eyebrow?: string;
    title?: string;
    highlightText?: string;
    description?: ReactNode;
    firstButtonText?: string;
    secondButtonText?: string;
    buttons?: HeroButton[];
    guarantees?: HeroGuarantee[];
    children?: ReactNode;
    titleSuffix?: string;
}

const defaultGuarantees: HeroGuarantee[] = [
    {
        text: "100% Strict NDA Protection",
        icon: Lock,
    },
    {
        text: "100% Author Copyright & Royalties",
        icon: ShieldCheck,
    },
    {
        text: "Matched with Vetted Trade Authors",
        icon: CheckCircle2,
    },
];

const defaultDescription = (
    <>
        You have the expertise, experience, or story. Our
        professional ghostwriting services pair you with a writer
        who captures your voice and delivers a finished manuscript
        you are proud to put your name on. Hire a ghostwriter at
        The Collingwood Press and get a book that reads as if you
        wrote it yourself.
    </>
);

export default function HeroSection({
    className = "",
    eyebrow = "Confidential Collaborative Ghostwriting",
    title = "Professional",
    highlightText = "Ghostwriting Services",
    description = defaultDescription,
    firstButtonText = "Get a Ghostwriting Quote",
    secondButtonText = "Schedule a Consultation",
    guarantees = defaultGuarantees,
    titleSuffix = "",
    children,
}: HeroSectionProps) {
    return (
        <section className={`${defaultClassName} ${className}`}>
            {/* Background Effects */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E7665D]/10 blur-3xl pointer-events-none" />

            <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl pointer-events-none" />

            <Container className="relative z-10">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

                    {/* Eyebrow Animation */}
                    {eyebrow && (
                        <AnimatedReveal
                            y={14}
                            duration={0.5}
                            delay={0}
                        >
                            <Eyebrow tone="coral" align="center">
                                {eyebrow}
                            </Eyebrow>
                        </AnimatedReveal>
                    )}

                    {/* Heading Animation */}
                    <AnimatedReveal
                        y={20}
                        duration={0.65}
                        delay={0.1}
                        className="w-full"
                    >
                        <h1
                            className="
                                mx-auto
                                mt-5 sm:mt-6
                                max-w-[650px]
                                font-serif
                                text-[2.25rem]
                                sm:text-[2.4rem]
                                md:text-[2.8rem]
                                lg:text-[3.2rem]
                                font-bold
                                leading-[1.12]
                                tracking-tight
                                text-white
                                text-balance
                            "
                        >
                            {title}{" "}

                            {highlightText && (
                                <span className="block text-[#E7665D] italic sm:inline">
                                    {highlightText}
                                </span>
                            )}

                            {titleSuffix && <> {titleSuffix}</>}
                        </h1>
                    </AnimatedReveal>

                    {/* Description Animation */}
                    {description && (
                        <AnimatedReveal
                            y={18}
                            duration={0.6}
                            delay={0.2}
                            className="w-full"
                        >
                            <div
                                className="
                                    mx-auto
                                    mt-6
                                    w-full
                                    max-w-[600px]
                                    text-center
                                    font-sans
                                    text-[15px]
                                    sm:text-[16px]
                                    lg:text-[17px]
                                    leading-[1.8]
                                    sm:leading-[1.75]
                                    tracking-normal
                                    text-slate-300
                                    [&_p]:m-0
                                    [&_p]:text-balance
                                "
                            >
                                {description}
                            </div>
                        </AnimatedReveal>
                    )}

                    {/* Interactive CTA Buttons */}
                    <AnimatedReveal
                        y={20}
                        duration={0.55}
                        delay={0.3}
                        className="w-full sm:w-auto"
                    >
                        <HeroSectionClient
                            firstButtonText={firstButtonText}
                            secondButtonText={secondButtonText}
                        />
                    </AnimatedReveal>

                    {/* Guarantees Animation */}
                    {guarantees.length > 0 && (
                        <div
                            className="
                                mt-9 sm:mt-10
                                w-full
                                max-w-5xl
                                border-t border-white/10
                                pt-6
                                flex flex-wrap
                                items-center justify-center
                                gap-x-7 gap-y-4
                                text-xs
                                text-white/75
                            "
                        >
                            {guarantees.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <AnimatedReveal
                                        key={index}
                                        y={12}
                                        duration={0.45}
                                        delay={0.35 + index * 0.1}
                                        amount={0.1}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Icon
                                                size={14}
                                                className="shrink-0 text-[#E7665D]"
                                            />

                                            <span>{item.text}</span>
                                        </div>
                                    </AnimatedReveal>
                                );
                            })}
                        </div>
                    )}

                    {children}
                </div>
            </Container>
        </section>
    );
}
