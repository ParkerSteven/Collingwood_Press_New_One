
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Mail, Headphones, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

const PopupForm = dynamic(() => import("@/components/forms/popupform"), {
    ssr: false,
});

const contactOptions = [
    {
        icon: Mail,
        title: "General Inquiries",
        description:
            "Questions about our services, process, or anything else? We're here to help.",
        buttonText: "Contact Us",
        href: "#publishing-form",
    },
    {
        icon: Headphones,
        title: "Audiobook Quote",
        description:
            "Get a personalized quote for your audiobook project fast and easy.",
        buttonText: "Get a Quote",
        href: "/audiobook",
        isPopup: true,
    },
    {
        icon: BookOpen,
        title: "Submit Manuscript",
        description:
            "Ready to publish? Send us your manuscript and we'll review it promptly.",
        buttonText: "Submit Manuscript",
        href: "#publishing-form",
    },
];

export default function ContactOptionsSection() {
    const [isAudiobookPopupOpen, setIsAudiobookPopupOpen] = useState(false);

    return (
        <section className="border-b border-line bg-[#fdfbf7] py-16 sm:py-20 lg:py-24">
            <Container>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                    {contactOptions.map((option, index) => {
                        const Icon = option.icon;

                        return (
                            <AnimatedReveal
                                key={option.title}
                                as="article"
                                y={25}
                                duration={0.55}
                                delay={index * 0.1}
                                amount={0.15}
                                hoverY={-5}
                                className="group flex flex-col items-center rounded-xl border border-[#E7665D]/25 bg-white p-7 text-center shadow-[0_4px_24px_rgba(231,102,93,0.10)] transition-[border-color,box-shadow] duration-300 hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_rgba(231,102,93,0.16)] sm:p-8"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#E7665D]/20 bg-[#fdf6f5] text-[#E7665D] transition-colors duration-300 group-hover:bg-[#E7665D] group-hover:text-white">
                                    <Icon size={22} />
                                </div>

                                <h2 className="font-serif text-xl font-bold text-ink">
                                    {option.title}
                                </h2>

                                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink-soft">
                                    {option.description}
                                </p>

                                {option.isPopup || option.title === "Audiobook Quote" ? (
                                    <button
                                        type="button"
                                        onClick={() => setIsAudiobookPopupOpen(true)}
                                        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#E7665D] px-5 py-3 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#D8574E] cursor-pointer"
                                    >
                                        {option.buttonText}
                                        <ArrowRight size={15} />
                                    </button>
                                ) : (
                                    <Link
                                        href={option.href}
                                        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#E7665D] px-5 py-3 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#D8574E]"
                                    >
                                        {option.buttonText}
                                        <ArrowRight size={15} />
                                    </Link>
                                )}
                            </AnimatedReveal>
                        );
                    })}
                </div>
            </Container>

            {/* Audiobook Quote Popup Form - dynamically mounted on demand */}
            {isAudiobookPopupOpen && (
                <PopupForm
                    isOpen={isAudiobookPopupOpen}
                    onClose={() => setIsAudiobookPopupOpen(false)}
                    source="Contact Page - Audiobook Quote"
                />
            )}
        </section>
    );
}
