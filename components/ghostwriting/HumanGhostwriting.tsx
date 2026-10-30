
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { humanGhostwritingData } from "@/lib/ghostwritingData";
import Image from "next/image";

export default function HumanGhostwriting() {
    return (
        <section
            id="human-ghostwriting"
            className="py-20 lg:py-28 bg-white border-b border-line"
        >
            <Container>
                {/* Section Heading */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

                    {/* Animated Eyebrow */}
                    <AnimatedReveal
                        y={15}
                        duration={0.5}
                        delay={0}
                        amount={0.2}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                            Human Writing vs. AI Tools
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
                            Why Human Ghostwriting{" "}
                            <span className="italic text-[#E7665D]">
                                Still Matters
                            </span>
                        </h2>
                    </AnimatedReveal>
                </div>

                {/* Animated Content Cards */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {humanGhostwritingData.map((item, index) => (
                        <AnimatedReveal
                            key={item.id}
                            as="article"
                            y={30}
                            duration={0.6}
                            delay={index * 0.15}
                            amount={0.15}
                            hoverY={-5}
                            className="
                                group relative flex h-full flex-col
                                overflow-hidden rounded-lg
                                border border-[#344B76]
                                bg-gradient-to-br
                                from-[#101A30] via-[#172B4D] to-[#294D78]
                                p-7 sm:p-9
                                shadow-[0_12px_38px_rgba(16,26,48,0.18)]
                                hover:border-[#E7665D]/50
                                hover:shadow-[0_22px_55px_rgba(25,55,100,0.35)]
                                transition-[border-color,box-shadow] duration-500
                            "
                        >
                            {/* Image */}
                            <div className="mb-6">
                                <span
                                    className="
                                        flex h-14 w-14 shrink-0
                                        items-center justify-center
                                        overflow-hidden rounded-lg
                                        border border-white/20 bg-white/10
                                        group-hover:border-[#E7665D]/50
                                        transition-colors duration-300
                                    "
                                >
                                    <Image
                                        src={item.image}
                                        alt={
                                            item.id === 1
                                                ? "AI Writing"
                                                : "Human Writer"
                                        }
                                        width={56}
                                        height={56}
                                        className="
                                            h-full w-full object-cover
                                            transition-transform duration-300
                                            group-hover:scale-110
                                        "
                                    />
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                                {item.description}
                            </p>
                        </AnimatedReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
