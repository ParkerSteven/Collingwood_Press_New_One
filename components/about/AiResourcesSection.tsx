import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

type AiPolicyItem = {
    title: string;
    description: string;
};

interface AiResourcesSectionProps {
    aiPolicyData: AiPolicyItem[];
}

export default function AiResourcesSection({
    aiPolicyData,
}: AiResourcesSectionProps) {
    return (
        <section
            id="ai-resources"
            className="hero-gradient py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden paper-grain"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Section Heading */}
                    <AnimatedReveal
                        y={20}
                        duration={0.55}
                        amount={0.2}
                        className="text-center mb-10"
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                            Technology and Authorship Ethics
                        </span>

                        <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                            AI and LLM Publishing Resources Policy
                        </h2>

                        <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                            How The Collingwood Press handles artificial intelligence tools
                            in relation to the books we produce and the authors we work with.
                        </p>
                    </AnimatedReveal>

                    {/* AI Policy Items */}
                    <div className="p-8 sm:p-9 rounded-xl border border-white/10 bg-white/[0.04] flex flex-col gap-5">
                        {aiPolicyData.map((item, index) => (
                            <AnimatedReveal
                                key={`${index}-${item.title}`}
                                y={16}
                                duration={0.45}
                                delay={Math.min(index * 0.07, 0.28)}
                                amount={0.1}
                                className={index !== 0 ? "border-t border-white/10 pt-4" : ""}
                            >
                                <h3 className="font-serif text-lg font-bold text-[#F08A82]">
                                    {index + 1}. {item.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                                    {item.description}
                                </p>
                            </AnimatedReveal>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <AnimatedReveal
                        y={16}
                        duration={0.5}
                        amount={0.2}
                        className="mt-10 text-center"
                    >
                        <Button
                            href="/contact-us/#manuscript-review"
                            variant="primary"
                            size="lg"
                        >
                            <span>Inquire About Author Copyright Protection</span>
                            <ArrowRight size={15} />
                        </Button>
                    </AnimatedReveal>
                </div>
            </Container>
        </section>
    );
}
