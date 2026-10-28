
"use client";

import { useId, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, HelpCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const instanceId = useId();

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section
            id={sectionId}
            aria-labelledby={`${instanceId}-heading`}
            className="border-b border-line bg-white py-20 lg:py-28"
        >
            <Container>
                {/* FAQ Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
                >
                    <div className="mb-5 flex items-center justify-center gap-3">
                        {/* <span className="h-px w-8 bg-[#E7665D]" /> */}

                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
                            {eyebrow}
                        </span>

                        {/* <span className="h-px w-8 bg-[#E7665D]" /> */}
                    </div>

                    <h2
                        id={`${instanceId}-heading`}
                        className="font-serif mx-auto max-w-2xl text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
                    >
                        {title}
                    </h2>

                    {description && (
                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                            {description}
                        </p>
                    )}
                </motion.div>

                {/* Accordion */}
                <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-sm border border-[#E7665D]/20 bg-white shadow-[0_5px_28px_rgba(17,26,48,0.04)]">
                    {items.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const number = String(index + 1).padStart(2, "0");

                        const triggerId = `${instanceId}-trigger-${index}`;
                        const panelId = `${instanceId}-panel-${index}`;

                        return (
                            <div
                                key={index}
                                className={`group border-b border-line/80 last:border-b-0 transition-colors ${isOpen
                                    ? "bg-[#FCFAF7]"
                                    : "hover:bg-[#FCFAF7]"
                                    }`}
                            >
                                <h4>
                                    <button
                                        type="button"
                                        onClick={() => toggle(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        id={triggerId}
                                        className="flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-5 text-left sm:items-center sm:px-8 sm:py-6"
                                    >
                                        <span className="flex flex-1 items-start gap-4 sm:gap-6">
                                            <span className="shrink-0 font-serif text-[1.3rem] text-[#E7665D]/60 sm:text-[1.5rem]">
                                                {number}
                                            </span>

                                            <span
                                                className={`font-sans text-[0.98rem] font-normal leading-snug transition-colors sm:text-[1.08rem] ${isOpen
                                                    ? "text-[#E7665D] font-medium"
                                                    : "text-ink/85"
                                                    }`}
                                            >
                                                {faq.question}
                                            </span>
                                        </span>

                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border transition-colors ${isOpen
                                                ? "border-[#E7665D] bg-[#E7665D] text-white"
                                                : "border-[#E7665D]/25 bg-white text-[#E7665D]"
                                                }`}
                                        >
                                            {isOpen ? (
                                                <Minus size={17} aria-hidden="true" />
                                            ) : (
                                                <Plus size={17} aria-hidden="true" />
                                            )}
                                        </span>
                                    </button>
                                </h4>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={triggerId}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.28,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-7 pl-[3.9rem] pr-7 sm:pl-[5.5rem] sm:pr-14">
                                                <div className="mb-4 h-[2px] w-10 bg-[#E7665D]/50" />

                                                <div className="font-sans text-[0.91rem] leading-[1.9] text-ink-muted sm:text-[0.97rem]">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* Support CTA */}
                <div className="mx-auto mt-9 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-sm border border-[#E7665D]/20 bg-[#FCFAF7] p-6 sm:flex-row sm:px-8">
                    <div className="flex items-start gap-3">
                        <HelpCircle
                            size={22}
                            className="mt-0.5 shrink-0 text-[#E7665D]"
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

                    <Button
                        href="/contact-us/#manuscript-reviewave questions"
                        variant="primary"
                        size="md"
                    >
                        <span>Speak With Our Team</span>
                        <ArrowRight size={15} aria-hidden="true" />
                    </Button>
                </div>
            </Container>
        </section>
    );
}
