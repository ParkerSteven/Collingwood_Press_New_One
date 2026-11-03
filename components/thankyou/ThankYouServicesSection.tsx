
import Link from "next/link";
import {
    ArrowRight,
    PenLine,
    FilePenLine,
    BookOpen,
    Megaphone,
    Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

interface ServiceItem {
    title: string;
    href: string;
    icon: LucideIcon;
    description: string;
}

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

export default function ThankYouServicesSection() {
    return (
        <section
            id="thankyou-services"
            className="border-b border-line bg-white py-20 lg:py-24"
        >
            <Container className="flex flex-col gap-12">

                {/* Section Heading Animation */}
                <AnimatedReveal
                    y={20}
                    duration={0.6}
                    amount={0.15}
                    className="mx-auto max-w-2xl text-center"
                >
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
                </AnimatedReveal>

                {/* Services Cards */}
                <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <AnimatedReveal
                                key={service.title}
                                y={25}
                                duration={0.55}
                                delay={index * 0.08}
                                amount={0.15}
                                hoverY={-5}
                                className="h-full"
                            >
                                <Link
                                    href={service.href}
                                    className="group flex h-full flex-col items-center rounded-xl border border-[#E7665D]/25 bg-white p-6 text-center shadow-[0_4px_24px_0_rgba(231,102,93,0.10)] transition-[border-color,box-shadow] duration-300 hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.16)]"
                                >
                                    {/* Icon */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#E7665D]/25 bg-[#fdf6f5] text-[#E7665D] transition-colors duration-300 group-hover:bg-[#E7665D] group-hover:text-white">
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
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </div>
                                </Link>
                            </AnimatedReveal>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
