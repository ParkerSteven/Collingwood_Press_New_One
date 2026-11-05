import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export interface CoreValue {
    title: string;
    desc: string;
    icon: LucideIcon;
}

interface CoreValuesSectionProps {
    coreValues: CoreValue[];
}

export default function CoreValuesSection({ coreValues }: CoreValuesSectionProps) {
    return (
        <section className="py-20 bg-white border-b border-line">
            <Container className="flex flex-col gap-14">
                <AnimatedReveal y={20} duration={0.6} amount={0.15}>
                    <SectionHeading
                        eyebrow="How We Work"
                        title={
                            <>
                                The Values That Guide{" "}
                                <span className="italic text-[#E7665D]">Every Project</span>
                            </>
                        }
                        description="We operate without shortcuts and without indifference. These four principles hold across every manuscript, every author, and every project stage."
                    />
                </AnimatedReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
                    {coreValues.map((val, index) => {
                        const Icon = val.icon;
                        return (
                            <AnimatedReveal
                                key={val.title}
                                as="article"
                                y={24}
                                duration={0.5}
                                delay={index * 0.08}
                                amount={0.12}
                                hoverY={-5}
                                className="p-5 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] flex flex-col justify-between transition-[border-color,box-shadow] duration-300"
                            >
                                <div>
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-5">
                                        <Icon size={20} />
                                    </div>

                                    <h4 className="font-serif text-[1rem] font-bold text-ink">
                                        {val.title}
                                    </h4>

                                    <p className="mt-2.5 text-xs sm:text-sm text-ink-soft leading-relaxed">
                                        {val.desc}
                                    </p>
                                </div>
                            </AnimatedReveal>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
