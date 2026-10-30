
import type { ReactNode } from "react";
import { ArrowRight, HelpCircle } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import FAQAccordionItems from "../ui/FAQAccordionItems";

export type FAQItem = {
    question: string;
    answer: ReactNode;
};

type FAQAccordionProps = {
    items: FAQItem[];
    eyebrow?: string;
    title: ReactNode;
    description?: string;
    sectionId?: string;
};

export default function FAQAccordion({
    items,
    eyebrow = "Publishing FAQ",
    title,
    description,
    sectionId = "faq",
}: FAQAccordionProps) {
    const headingId = `${sectionId}-heading`;

    return (
        <section
            id={sectionId}
            aria-labelledby={headingId}
            className="border-b border-line bg-white py-20 lg:py-28"
        >
            <Container>
                {/* FAQ Heading */}
                <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">

                    {/* Animated Eyebrow */}
                    <AnimatedReveal
                        y={15}
                        duration={0.5}
                        delay={0}
                        amount={0.2}
                    >
                        <div className="mb-5 flex items-center justify-center gap-3">
                            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
                                {eyebrow}
                            </span>
                        </div>
                    </AnimatedReveal>

                    {/* Animated Heading */}
                    <AnimatedReveal
                        y={22}
                        duration={0.65}
                        delay={0.1}
                        amount={0.2}
                    >
                        <h2
                            id={headingId}
                            className="font-serif mx-auto max-w-2xl text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
                        >
                            {title}
                        </h2>
                    </AnimatedReveal>

                    {/* Animated Description */}
                    {description && (
                        <AnimatedReveal
                            y={18}
                            duration={0.55}
                            delay={0.2}
                            amount={0.2}
                        >
                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                                {description}
                            </p>
                        </AnimatedReveal>
                    )}
                </div>

                {/* Interactive Accordion Animation */}
                <AnimatedReveal
                    y={25}
                    duration={0.65}
                    delay={0.1}
                    amount={0.1}
                    className="w-full"
                >
                    <FAQAccordionItems items={items} />
                </AnimatedReveal>

                {/* Animated Support CTA */}
                <AnimatedReveal
                    y={24}
                    duration={0.6}
                    delay={0.1}
                    amount={0.15}
                    className="mx-auto mt-9 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-sm border border-[#E7665D]/20 bg-[#FCFAF7] p-6 sm:flex-row sm:px-8"
                >
                    {/* CTA Content */}
                    <div className="flex items-start gap-3">
                        <HelpCircle
                            size={22}
                            className="mt-0.5 shrink-0 text-[#E7665D]"
                            aria-hidden="true"
                        />

                        <div>
                            <h3 className="font-serif text-xl font-medium text-ink">
                                Still have questions?
                            </h3>

                            <p className="mt-1 font-sans text-sm leading-relaxed text-ink-muted">
                                Get guidance specific to your manuscript
                                and publishing goals.
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                        href="/contact-us/#manuscript-review"
                        variant="primary"
                        size="md"
                    >
                        <span>Speak With Our Team</span>
                        <ArrowRight size={15} aria-hidden="true" />
                    </Button>
                </AnimatedReveal>
            </Container>
        </section>
    );
}
