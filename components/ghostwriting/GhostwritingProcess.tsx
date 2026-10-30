
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { stepsData } from "@/lib/ghostwritingData";

export default function GhostwritingProcess() {
    return (
        <section
            id="process"
            className="relative isolate overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#071429] via-[#0C1D36] to-[#162D4D] py-20 text-white lg:py-24 paper-grain"
        >
            {/* Soft Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7665D]/[0.05] blur-[110px]" />

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Animated Eyebrow */}
                    <AnimatedReveal
                        y={15}
                        duration={0.5}
                        delay={0}
                        amount={0.2}
                    >
                        <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#F08A82]">
                            Staged Drafts with Author Approval
                        </span>
                    </AnimatedReveal>

                    {/* Animated Heading */}
                    <AnimatedReveal
                        y={22}
                        duration={0.65}
                        delay={0.1}
                        amount={0.2}
                    >
                        <h2 className="mt-4 font-serif text-[2.2rem] font-bold leading-tight text-white sm:text-[2.6rem]">
                            How Our{" "}
                            <span className="italic text-[#E7665D]">
                                Ghostwriting Process
                            </span>{" "}
                            Works
                        </h2>
                    </AnimatedReveal>

                    {/* Animated Description */}
                    <AnimatedReveal
                        y={18}
                        duration={0.6}
                        delay={0.2}
                        amount={0.2}
                    >
                        <p className="mt-5 max-w-3xl font-sans text-sm leading-relaxed text-slate-300 sm:text-base">
                            Every project follows a staged process designed
                            to keep you in control of the direction without
                            requiring you to do the writing. You review and
                            approve key stages before the next one begins.
                        </p>
                    </AnimatedReveal>

                    {/* Animated Process Cards */}
                    <div className="mt-12 grid w-full grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
                        {stepsData.map((item, index) => (
                            <AnimatedReveal
                                key={item.id}
                                as="article"
                                y={30}
                                duration={0.6}
                                delay={(index % 3) * 0.12}
                                amount={0.15}
                                hoverY={-5}
                                className="group relative flex h-full flex-col rounded-xl border border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#142541] to-[#1B3657] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.20)] transition-[border-color,box-shadow] duration-300 hover:border-[#E7665D]/50 hover:shadow-[0_12px_35px_rgba(231,102,93,0.12)]"
                            >
                                {/* Image & Title */}
                                <div className="mb-5 flex items-center gap-4">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#E7665D]/30 bg-[#243551] transition-all duration-300 group-hover:border-[#E7665D]/60">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={48}
                                            height={48}
                                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </span>

                                    <h3 className="font-serif text-[1.1rem] font-bold leading-snug text-white sm:text-[1.3rem]">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="font-sans text-sm leading-[1.8] text-slate-300">
                                    {item.description}
                                </p>
                            </AnimatedReveal>
                        ))}
                    </div>

                    {/* Animated CTA */}
                    <AnimatedReveal
                        y={20}
                        duration={0.55}
                        delay={0.15}
                        amount={0.2}
                        className="mt-10 flex justify-center"
                    >
                        <Button
                            href="/contact-us/#manuscript-review"
                            variant="primary"
                            size="md"
                        >
                            <span>
                                See How This Works for Your Book
                            </span>
                            <ArrowRight size={15} />
                        </Button>
                    </AnimatedReveal>

                </div>
            </Container>
        </section>
    );
}
