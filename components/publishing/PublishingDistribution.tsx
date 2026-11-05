
import Image from "next/image";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { retailers } from "@/lib/publishingData";

export default function PublishingDistribution() {
    return (
        <section
            id="publishing-process"
            className="pt-14 lg:pt-20 lg:pb-4 bg-[#fdfbf7] border-b border-line"
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

            <div className="mx-auto w-full max-w-[1360px] min-w-0 px-4 sm:px-6 lg:px-12">
                <div
                    className="
      relative w-full min-w-0 overflow-hidden
      pt-4 pb-10 lg:pb-14
      [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]
    "
                >
                    <AnimatedReveal
                        y={18}
                        duration={0.7}
                        delay={0.1}
                        amount={0.1}
                        className="w-full min-w-0"
                    >
                        <div
                            className="
          carousel-track flex w-max
          max-w-none gap-4
          animate-marquee
          motion-reduce:animate-none
          motion-reduce:flex-wrap
          motion-reduce:w-full
          motion-reduce:justify-center
        "
                        >
                            {[...retailers, ...retailers].map((r, i) => {
                                const isDuplicate = i >= retailers.length;

                                return (
                                    <div
                                        key={`${r.name}-${i}`}
                                        className="
                flip-card
                h-[76px] w-[155px]
                flex-none
                sm:h-[86px] sm:w-[180px]
                lg:h-[92px] lg:w-[200px]
              "
                                        tabIndex={isDuplicate ? -1 : 0}
                                        aria-hidden={isDuplicate ? true : undefined}
                                    >
                                        <div className="flip-inner shadow-sm transition-shadow duration-300 hover:shadow-md">

                                            {/* Front */}
                                            <div
                                                className="
                    flip-face border border-line
                    bg-paper/95
                    transition-colors duration-300
                    hover:border-[#E7665D]
                  "
                                            >
                                                {r.img && (
                                                    <Image
                                                        src={r.img}
                                                        alt={isDuplicate ? "" : r.name}
                                                        width={150}
                                                        height={42}
                                                        sizes="(max-width: 640px) 115px, (max-width: 1024px) 135px, 150px"
                                                        className="
                        h-auto w-auto
                        max-h-[34px] max-w-[115px]
                        object-contain
                        sm:max-h-[38px] sm:max-w-[135px]
                        lg:max-h-[42px] lg:max-w-[150px]
                      "
                                                    />
                                                )}
                                            </div>

                                            {/* Back */}
                                            <div
                                                className="
                    flip-face flip-back
                    border border-[#E7665D]/30
                    bg-white px-3 sm:px-4
                  "
                                            >
                                                {r.img && (
                                                    <Image
                                                        src={r.img}
                                                        alt=""
                                                        width={150}
                                                        height={42}
                                                        sizes="(max-width: 640px) 115px, (max-width: 1024px) 135px, 150px"
                                                        className="
                        h-auto w-auto
                        max-h-[34px] max-w-[115px]
                        object-contain
                        sm:max-h-[38px] sm:max-w-[135px]
                        lg:max-h-[42px] lg:max-w-[150px]
                      "
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </AnimatedReveal>
                </div>
            </div>
        </section>
    );
}
