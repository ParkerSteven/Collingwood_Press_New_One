
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { deliverablesData } from "@/lib/ghostwritingData";
import { Check } from "lucide-react";

export default function GhostwritingDeliverables() {
    const leftItems = deliverablesData.slice(0, 3);
    const rightItems = deliverablesData.slice(3);

    const cardClassName =
        "group flex w-full min-w-0 min-h-[110px] h-full items-center gap-4 rounded-xl border border-[#E7665D]/45 bg-white p-5 shadow-[0_4px_18px_rgba(231,102,93,0.12),0_2px_6px_rgba(0,0,0,0.04)] hover:border-[#E7665D]/80 hover:shadow-[0_10px_30px_rgba(231,102,93,0.20),0_4px_12px_rgba(0,0,0,0.06)] transition-[border-color,box-shadow] duration-300";

    return (
        <section
            id="ghostwriting-deliverables"
            className="py-20 lg:py-20 bg-[#fdfbf7] border-b border-line"
        >
            <Container>

                {/* Section Heading */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Animated Eyebrow */}
                    <AnimatedReveal
                        y={15}
                        duration={0.5}
                        delay={0}
                        amount={0.2}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                            Deliverables
                        </span>
                    </AnimatedReveal>

                    {/* Animated Heading */}
                    <AnimatedReveal
                        y={22}
                        duration={0.65}
                        delay={0.1}
                        amount={0.2}
                    >
                        <h2 className="mt-4 font-serif max-w-xl text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                            What&apos;s Included in{" "}
                            <span className="text-[#E7665D]">
                                Ghostwriting Services
                            </span>
                        </h2>
                    </AnimatedReveal>
                </div>

                {/* Deliverables Checklist */}
                <div className="max-w-4xl mx-auto rounded-2xl p-6 sm:p-10 lg:p-12">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-8">

                        {/* Left Column */}
                        <div className="flex flex-col gap-6">
                            {leftItems.map((item, index) => (
                                <AnimatedReveal
                                    key={item.id}
                                    y={24}
                                    duration={0.55}
                                    delay={index * 0.1}
                                    amount={0.15}
                                    hoverY={-5}
                                    className={cardClassName}
                                >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white">
                                        <Check
                                            size={16}
                                            strokeWidth={2.5}
                                        />
                                    </span>

                                    <p className="text-[15px] sm:text-base font-medium text-ink leading-relaxed">
                                        {item.description}
                                    </p>
                                </AnimatedReveal>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-6">
                            {rightItems.map((item, index) => (
                                <AnimatedReveal
                                    key={item.id}
                                    y={24}
                                    duration={0.55}
                                    delay={index * 0.1 + 0.1}
                                    amount={0.15}
                                    hoverY={-5}
                                    className={cardClassName}
                                >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white">
                                        <Check
                                            size={16}
                                            strokeWidth={2.5}
                                        />
                                    </span>

                                    <p className="text-[15px] sm:text-base font-medium text-ink leading-relaxed">
                                        {item.description}
                                    </p>
                                </AnimatedReveal>
                            ))}
                        </div>

                    </div>

                    {/* Animated Bottom Note */}
                    <AnimatedReveal
                        y={18}
                        duration={0.55}
                        delay={0.1}
                        amount={0.2}
                        className="mt-12 pt-7 border-t border-[#E7665D]/30 text-center"
                    >
                        <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                            Editing, cover design, and typesetting are separate
                            services. The scope is defined and agreed before
                            work begins.
                        </p>
                    </AnimatedReveal>

                </div>
            </Container>
        </section>
    );
}
