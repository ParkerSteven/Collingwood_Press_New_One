import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function HeritageEthosSection() {
    return (
        <section className="py-20 lg:py-14 bg-[#fdfbf7] border-b border-line">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <AnimatedReveal className="flex flex-col gap-5" y={24} duration={0.6} amount={0.15}>
                        <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#E7665D]">
                            Our Heritage and Ethos
                        </span>

                        <h2 className="font-serif text-[2rem] font-bold text-ink leading-tight">
                            An Independent Press Built on Direct Author Relationships
                        </h2>

                        <p className="text-sm text-ink-soft leading-relaxed font-sans">
                            The publishing industry gives authors two options, and neither one
                            works well. Traditional houses reject the vast majority of
                            submissions without reading past the first few pages. Vanity
                            presses accept everything, charge upfront fees, and deliver
                            automated output with no editorial involvement. Neither model
                            serves the author who has a serious manuscript and wants
                            professional results.
                        </p>

                        <p className="text-sm text-ink-soft leading-relaxed font-sans">
                            The Collingwood Press, a subsidiary of Hambone Publishers LLC,
                            operates as a third option. We pair every author with a named
                            editor who reads the manuscript, provides candid feedback by
                            phone, and manages the project through production and
                            distribution. We do not use automated formatting tools. We do
                            not assign your book to a queue. You work with real people who
                            understand publishing.
                        </p>
                    </AnimatedReveal>

                    {/* What We Commit To */}
                    <AnimatedReveal
                        y={24}
                        duration={0.6}
                        delay={0.12}
                        amount={0.15}
                        className="p-8 sm:p-10 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col gap-6"
                    >
                        <h3 className="font-serif text-xl font-bold text-ink">
                            What We Commit To
                        </h3>

                        <div className="flex flex-col gap-4 text-xs sm:text-sm text-ink-soft">
                            <div className="flex items-start gap-3">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold mt-0.5">
                                    ✓
                                </span>
                                <span>
                                    <strong>100% Author Ownership.</strong>{" "}
                                    You retain full copyright, film rights, and royalties. That
                                    is written into every agreement.
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold mt-0.5">
                                    ✓
                                </span>
                                <span>
                                    <strong>Direct Editor Access.</strong>{" "}
                                    Every author is paired with a senior trade editor. You speak
                                    with them by phone. No ticket systems, no chatbots.
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold mt-0.5">
                                    ✓
                                </span>
                                <span>
                                    <strong>Production Standards.</strong>{" "}
                                    Custom InDesign interiors, original cover artwork, and
                                    physical proof review before any book goes to retail.
                                </span>
                            </div>
                        </div>
                    </AnimatedReveal>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-14 pt-12 border-t border-line/70">
                    <AnimatedReveal
                        as="article"
                        y={24}
                        duration={0.55}
                        amount={0.15}
                        hoverY={-5}
                        className="p-8 rounded-xl bg-white border border-[#E7665D]/25 shadow-sm"
                    >
                        <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-2">
                            Our Mission
                        </span>

                        <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                            Our Mission
                        </h3>

                        <p className="text-sm text-ink-soft leading-relaxed">
                            To give independent authors access to the same quality of
                            editing, design, and distribution that the largest publishing
                            houses deliver, without requiring them to surrender their
                            rights, their royalties, or their creative direction.
                        </p>
                    </AnimatedReveal>

                    <AnimatedReveal
                        as="article"
                        y={24}
                        duration={0.55}
                        delay={0.12}
                        amount={0.15}
                        hoverY={-5}
                        className="p-8 rounded-xl bg-white border border-[#E7665D]/25 shadow-sm"
                    >
                        <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-2">
                            Our Vision
                        </span>

                        <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                            Our Vision
                        </h3>

                        <p className="text-sm text-ink-soft leading-relaxed">
                            A publishing industry where the quality of the finished book
                            depends on the standards of the people who made it, not on
                            whether the author signed with a major house or published
                            independently.
                        </p>
                    </AnimatedReveal>
                </div>
            </Container>
        </section>
    );
}
