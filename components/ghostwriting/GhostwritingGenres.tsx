
import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedReveal from "../ui/AnimatedReveal";
import { servicesData } from "@/lib/ghostwritingData";

export default function GhostwritingGenres() {
    return (
        <section
            id="ghostwriting-genres"
            className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
        >
            <Container className="flex flex-col gap-14 sm:gap-16">

                {/* Section Heading */}
                <AnimatedReveal
                    y={20}
                    duration={0.6}
                    amount={0.2}
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                >
                    <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                        Genre-Specific Expertise
                    </span>

                    <h2 className="mt-4 font-serif text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                        Ghostwriting Services{" "}
                        <span className="italic text-[#E7665D]">
                            by Genre
                        </span>
                    </h2>

                    <p className="mt-5 text-sm max-w-xl sm:text-base text-ink-muted leading-relaxed">
                        Each genre needs different skills, so we match you
                        with a ghostwriter whose experience fits your project.
                    </p>
                </AnimatedReveal>

                {/* Genre Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {servicesData.map((item, index) => (
                        <AnimatedReveal
                            key={item.id}
                            as="article"
                            y={24}
                            duration={0.55}
                            delay={(index % 2) * 0.12}
                            amount={0.15}
                            className={`group h-full p-7 sm:p-8 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-[border-color,box-shadow] duration-300 ${item.className || ""}`}
                        >
                            {/* Image & Title */}
                            <div className="flex items-center gap-4 mb-5">
                                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] overflow-hidden">
                                    {item.image && (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={52}
                                            height={52}
                                            className="h-full w-full object-contain p-1"
                                        />
                                    )}
                                </span>

                                <h3 className="font-serif text-[1.1rem] sm:text-[1.3rem] font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-ink-soft leading-relaxed">
                                {item.description}
                            </p>
                        </AnimatedReveal>
                    ))}
                </div>

            </Container>
        </section>
    );
}
