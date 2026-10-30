
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { ArrowRight } from "lucide-react";
import { pricingFactorsData } from "@/lib/ghostwritingData";

export default function GhostwritingPricing() {
    return (
        <section
            id="ghostwriting-pricing"
            className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

                    {/* Left Side Content */}
                    <div className="flex flex-col items-start text-left">

                        {/* Animated Eyebrow */}
                        <AnimatedReveal
                            y={15}
                            duration={0.5}
                            delay={0}
                            amount={0.2}
                        >
                            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                Transparent Pricing
                            </span>
                        </AnimatedReveal>

                        {/* Animated Heading */}
                        <AnimatedReveal
                            y={22}
                            duration={0.65}
                            delay={0.1}
                            amount={0.2}
                        >
                            <h2 className="mt-5 max-w-2xl font-serif text-[2.3rem] sm:text-[2.8rem] lg:text-[2.8rem] font-bold leading-[1.13] text-ink">
                                How Much Do{" "}
                                <span className="italic text-[#E7665D]">
                                    Ghostwriting Services Cost?
                                </span>
                            </h2>
                        </AnimatedReveal>

                        {/* Animated First Paragraph */}
                        <AnimatedReveal
                            y={18}
                            duration={0.55}
                            delay={0.2}
                            amount={0.2}
                        >
                            <p className="mt-6 max-w-lg text-sm sm:text-base text-ink-soft leading-[1.9]">
                                We do not publish a fixed rate because no two books
                                need the same work. Five factors determine the price
                                of your ghostwriting project.
                            </p>
                        </AnimatedReveal>

                        {/* Animated Second Paragraph */}
                        <AnimatedReveal
                            y={18}
                            duration={0.55}
                            delay={0.3}
                            amount={0.2}
                        >
                            <p className="mt-5 max-w-lg text-sm sm:text-base text-ink-soft leading-[1.9]">
                                Every author receives a clear quote after the initial
                                consultation. Your quote covers the scope of work,
                                revision rounds, delivery timeline, and total cost.
                                There are no surprise fees during the project.
                            </p>
                        </AnimatedReveal>

                        {/* Animated CTA Button */}
                        <AnimatedReveal
                            y={20}
                            duration={0.55}
                            delay={0.4}
                            amount={0.2}
                            className="mt-8"
                        >
                            <Button
                                href="/contact-us"
                                variant="primary"
                                size="md"
                            >
                                <span>Get a Custom Ghostwriting Quote</span>
                                <ArrowRight size={16} />
                            </Button>
                        </AnimatedReveal>
                    </div>

                    {/* Right Side Pricing Card */}
                    <div className="relative">
                        <AnimatedReveal
                            y={28}
                            duration={0.65}
                            delay={0.15}
                            amount={0.1}
                            className="relative overflow-hidden rounded-2xl border border-[#E7665D]/20 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(16,26,48,0.10),0_4px_12px_rgba(231,102,93,0.05)]"
                        >
                            {/* Top Accent */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E7665D] via-[#F08A82] to-[#E7665D]" />

                            {/* Card Heading */}
                            <div className="mb-6">
                                <h3 className="font-serif text-[1.5rem] sm:text-[1.7rem] font-bold text-ink">
                                    What Sets the{" "}
                                    <span className="text-[#E7665D]">
                                        Price
                                    </span>
                                </h3>

                                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                                    Five key factors influence your project quote.
                                </p>
                            </div>

                            {/* Animated Pricing Factors */}
                            <div className="divide-y divide-[#E7665D]/15">
                                {pricingFactorsData.map((item, index) => (
                                    <AnimatedReveal
                                        key={item.id}
                                        y={16}
                                        duration={0.45}
                                        delay={index * 0.08}
                                        amount={0.1}
                                        className="group flex items-start gap-5 py-5 first:pt-2 last:pb-0"
                                    >
                                        {/* Number */}
                                        <span className="shrink-0 min-w-[36px] font-sans text-[1rem] pt-2 font-semibold text-[#E7665D] transition-transform duration-300 group-hover:translate-x-1">
                                            {item.number}
                                        </span>

                                        {/* Factor Content */}
                                        <div className="flex-1">
                                            <h4 className="font-serif text-[1.05rem] sm:text-[1.1rem] font-bold text-ink group-hover:text-[#E7665D] transition-colors duration-300">
                                                {item.title}
                                            </h4>

                                            <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </AnimatedReveal>
                                ))}
                            </div>
                        </AnimatedReveal>
                    </div>

                </div>
            </Container>
        </section>
    );
}
