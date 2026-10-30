"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQItem } from "../sections/FAQAccordion";

interface FAQAccordionItemsProps {
    items: FAQItem[];
}

export default function FAQAccordionItems({
    items,
}: FAQAccordionItemsProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(
        null
    );

    const instanceId = useId();

    const toggle = (index: number) => {
        setOpenIndex((prev) =>
            prev === index ? null : index
        );
    };

    return (
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-sm border border-[#E7665D]/20 bg-white shadow-[0_5px_28px_rgba(17,26,48,0.04)]">
            {items.map((faq, index) => {
                const isOpen = openIndex === index;

                const number = String(index + 1).padStart(
                    2,
                    "0"
                );

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
                        <h3>
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
                                        <Minus
                                            size={17}
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Plus
                                            size={17}
                                            aria-hidden="true"
                                        />
                                    )}
                                </span>
                            </button>
                        </h3>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={triggerId}
                                    initial={{
                                        height: 0,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1,
                                    }}
                                    exit={{
                                        height: 0,
                                        opacity: 0,
                                    }}
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
    );
}