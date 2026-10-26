
'use client'
import React, { useState } from "react";
import {
    ArrowRight,
    Lock,
    ShieldCheck,
    CheckCircle2,
    type LucideIcon,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import PopupForm from "../forms/popupform";

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
    description?: React.ReactNode;
    firstButtonText?: string;
    secondButtonText?: string;
    buttons?: any,
    guarantees?: HeroGuarantee[];
    children?: React.ReactNode;
    titleSuffix?: string;
}

const defaultButtons: HeroButton[] = [
    {
        text: "Get a Ghostwriting Quote",
        href: "/contact-us#manuscript-review",
        variant: "primary",
        showArrow: true,
    },
    {
        text: "Schedule a Consultation",
        href: "/contact-us#manuscript-review",
        variant: "outline-white",
    },
];

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
        You have the expertise, the experience, or the story. What you need is someone who can turn it into a finished book. Our professional ghostwriting services pair you with an experienced writer who captures your voice and turns your material into a finished manuscript you are proud to put your name on.
        Whether you are starting from a rough idea or building on a partial draft, this is how you hire a ghostwriter and get a book that reads as if you wrote it yourself.
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
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <>


            <section className={`${defaultClassName} ${className}`}>
                {/* Background Effects */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E7665D]/10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl pointer-events-none" />

                <Container className="relative z-10">
                    <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

                        {/* Eyebrow */}
                        {eyebrow && (
                            <Eyebrow tone="coral" align="center">
                                {eyebrow}
                            </Eyebrow>
                        )}

                        {/* Heading */}
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

                        {/* Description */}
                        {description && (
                            <div
                                className="
      mx-auto
      mt-6
      w-full
      max-w-[880px]
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
                        )}

                        {/* CTA Buttons */}

                        <div
                            className="
            mt-7 sm:mt-8 lg:mt-9
            flex w-full flex-col
            items-stretch justify-center
            gap-3 sm:w-auto sm:flex-row
            sm:items-center sm:gap-4
          "
                        >
                            <Button
                                onClick={() => setIsPopupOpen(true)}
                                variant="primary"
                                size="md"
                                className="shadow-sm hover:shadow-md cursor-pointer"
                            >
                                <span>{firstButtonText}</span>
                                <ArrowRight size={15} />
                            </Button>
                            <Button
                                onClick={() => {
                                    if (typeof window !== 'undefined' && window.BrevoConversations) {
                                        // the API doesn't expose an "open" method – use openChat instead
                                        // passing `true` opens the widget immediately (argument is optional)
                                        window.BrevoConversations('openChat');
                                    } else {
                                        // fallback if the script hasn't injected yet; we don't have a /chat
                                        // route, so navigate to the homepage instead (or remove entirely)
                                        window.location.href = '/';
                                    }
                                }}
                                variant="outline"
                                size="md"
                                className="text-white cursor-pointer"
                            >
                                <span>{secondButtonText}</span>
                            </Button>
                        </div>


                        {/* Guarantees */}
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
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <Icon
                                                size={14}
                                                className="shrink-0 text-[#E7665D]"
                                            />

                                            <span>{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {children}
                    </div>
                </Container>
            </section>

            <PopupForm
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                source="Hero Section - Free Publishing Consultation"
            />

        </>


    );
}
