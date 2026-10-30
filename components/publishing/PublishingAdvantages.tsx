
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { publishingFeatures } from "@/lib/publishingData";

export default function PublishingAdvantages() {
    return (
        <section
            id="publishing-advantage"
            className="relative isolate overflow-hidden border-b border-line bg-[#FCFBF9] py-20 lg:py-28"
        >
            {/* Subtle Background Accent */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#E7665D]/[0.035] blur-[110px]"
            />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-10 xl:gap-8">

                    {/* LEFT - Editorial Content */}
                    <div className="min-w-0 lg:col-span-2">
                        <div className="max-w-lg">

                            {/* Eyebrow */}
                            <AnimatedReveal
                                y={12}
                                duration={0.5}
                                amount={0.2}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#E7665D]" />

                                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#E7665D]">
                                        The Collingwood Difference
                                    </span>
                                </div>
                            </AnimatedReveal>

                            {/* Main Heading */}
                            <AnimatedReveal
                                y={20}
                                duration={0.6}
                                delay={0.1}
                                amount={0.2}
                            >
                                <h2 className="mt-6 w-full font-serif text-[1.9rem] font-bold leading-[1.13] tracking-tight text-ink sm:text-[2.4rem] lg:text-[2.4rem] xl:text-[2.4rem]">
                                    The Collingwood Press{" "}
                                    <span className="block text-[#E7665D]">
                                        Publishing Advantage
                                    </span>
                                </h2>
                            </AnimatedReveal>

                            {/* Description */}
                            <AnimatedReveal
                                y={16}
                                duration={0.55}
                                delay={0.2}
                                amount={0.2}
                            >
                                <p className="mt-6 max-w-lg font-sans text-sm leading-[1.9] text-ink-soft sm:text-base">
                                    Not every self-publishing company operates
                                    with the same standards. Here is what sets
                                    our model apart and why authors trust us
                                    with their manuscripts.
                                </p>
                            </AnimatedReveal>


                        </div>
                    </div>

                    <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:gap-4 xl:gap-5">
                        {publishingFeatures.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <AnimatedReveal
                                    key={feature.id}
                                    as="article"
                                    y={24}
                                    duration={0.55}
                                    delay={(index % 2) * 0.12}
                                    amount={0.15}
                                    hoverY={-4}
                                    className="
                group flex h-full min-w-0 flex-col
                rounded-xl border border-[#E7665D]/20
                bg-white p-5 xl:p-6
                shadow-[0_4px_20px_rgba(16,26,48,0.04)]
                transition-[border-color,box-shadow] duration-300
                hover:border-[#E7665D]/50
                hover:shadow-[0_12px_30px_rgba(231,102,93,0.12)]
            "
                                >
                                    {/* Icon + Heading in Same Row */}
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl border border-[#E7665D]/20
                        bg-[#FFF5F2] text-[#E7665D]
                        transition-colors duration-300
                        group-hover:bg-[#E7665D]
                        group-hover:text-white
                    "
                                        >
                                            <Icon size={21} strokeWidth={1.8} />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <span className="block font-sans text-[9px] font-bold uppercase tracking-[0.12em] text-[#E7665D]">
                                                Advantage {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <h3 className="mt-1 font-serif text-[1rem] font-bold leading-snug text-ink sm:text-[1.05rem]">
                                                {feature.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description Below */}
                                    <p className="mt-4 text-sm leading-[1.75] text-ink-soft">
                                        {feature.description}
                                    </p>
                                </AnimatedReveal>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
