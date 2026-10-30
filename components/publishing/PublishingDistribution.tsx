
import Image from "next/image";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { retailers } from "@/lib/publishingData";

export default function PublishingDistribution() {
    return (
        <section
            id="publishing-process"
            className="py-20 lg:py-20 bg-[#fdfbf7] border-b border-line"
        >
            {/* Section Heading */}
            <div className="relative mx-auto max-w-[1360px] px-6 lg:px-12 pt-6 pb-2">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Animated Eyebrow */}
                    <AnimatedReveal
                        y={15}
                        duration={0.5}
                        delay={0}
                        amount={0.2}
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-px bg-[#E7665D]/60" />

                            <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#E7665D] font-semibold">
                                Distributed to Every Major Retailer
                            </span>

                            <span className="w-8 h-px bg-[#E7665D]/60" />
                        </div>
                    </AnimatedReveal>

                    {/* Animated Heading */}
                    <AnimatedReveal
                        y={22}
                        duration={0.65}
                        delay={0.1}
                        amount={0.2}
                    >
                        <h2 className="mt-3 max-w-5xl mx-auto font-serif text-[1.9rem] sm:text-[2.2rem] font-bold text-ink leading-[1.1] tracking-tight text-center">
                            Global Book Distribution: Amazon KDP,{" "}
                            <span className="text-[#E7665D]">
                                IngramSpark, Barnes &amp; Noble &amp; Beyond
                            </span>
                        </h2>
                    </AnimatedReveal>

                    {/* Animated Description */}
                    <AnimatedReveal
                        y={18}
                        duration={0.6}
                        delay={0.2}
                        amount={0.2}
                    >
                        <p className="mt-1 text-xs py-6 sm:text-sm text-ink-muted">
                            Your book is distributed across major retail and
                            library channels worldwide. Through the Ingram
                            Content Group, it becomes available to over
                            40,000 bookstores and libraries. Listings are
                            also set up on Amazon KDP, Barnes &amp; Noble,
                            Apple Books, and other leading platforms, with
                            optimized metadata for stronger discoverability.
                        </p>
                    </AnimatedReveal>
                </div>
            </div>

            {/* Animated Retailer Carousel */}
            <div className="relative pt-4 pb-12 lg:mb-20 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] overflow-hidden">

                <AnimatedReveal
                    y={18}
                    duration={0.7}
                    delay={0.1}
                    amount={0.1}
                    className="w-full"
                >
                    <div className="carousel-track flex gap-4 w-max px-6 animate-marquee">
                        {[...retailers, ...retailers].map((r, i) => (
                            <div
                                key={`${r.name}-${i}`}
                                className="flip-card w-[200px] h-[92px] flex-none cursor-pointer"
                                tabIndex={i < retailers.length ? 0 : -1}
                                aria-hidden={
                                    i >= retailers.length
                                        ? true
                                        : undefined
                                }
                            >
                                <div className="flip-inner shadow-sm hover:shadow-md transition-shadow">

                                    {/* Front */}
                                    <div className="flip-face bg-paper/95 border border-line hover:border-[#E7665D] transition-colors">
                                        {r.img && (
                                            <Image
                                                src={r.img}
                                                alt={i < retailers.length ? r.name : ""}
                                                width={150}
                                                height={42}
                                                className="max-h-[42px] max-w-[150px] w-auto h-auto object-contain"
                                            />
                                        )}
                                    </div>

                                    {/* Back */}
                                    <div className="flip-face flip-back bg-white border border-[#E7665D]/30 px-4">
                                        {r.img && (
                                            <Image
                                                src={r.img}
                                                alt=""
                                                width={150}
                                                height={42}
                                                className="max-h-[42px] max-w-[150px] w-auto h-auto object-contain"
                                            />
                                        )}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedReveal>
            </div>
        </section>
    );
}
