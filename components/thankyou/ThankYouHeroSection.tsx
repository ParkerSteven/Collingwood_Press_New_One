
import Link from "next/link";
import { CheckCircle2, Home } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

interface ThankYouHeroSectionProps {
    displayName: string;
}

export default function ThankYouHeroSection({
    displayName,
}: ThankYouHeroSectionProps) {
    return (
        <section className="hero-gradient relative overflow-hidden paper-grain border-b border-white/10 py-20 text-white sm:py-24 lg:py-28">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7665D]/10 blur-[110px]" />

            <Container className="relative z-10">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

                    {/* Success Icon Animation */}
                    <AnimatedReveal
                        y={15}
                        duration={0.5}
                        delay={0}
                        amount={0.1}
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#E7665D]/40 bg-[#E7665D]/10 text-[#F08A82]">
                            <CheckCircle2
                                size={32}
                                strokeWidth={1.8}
                            />
                        </div>
                    </AnimatedReveal>

                    {/* Eyebrow Animation */}
                    <AnimatedReveal
                        y={15}
                        duration={0.5}
                        delay={0.1}
                        amount={0.1}
                        className="mt-6"
                    >
                        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F08A82]">
                            Your Submission Has Been Received
                        </span>
                    </AnimatedReveal>

                    {/* Heading Animation */}
                    <AnimatedReveal
                        y={25}
                        duration={0.6}
                        delay={0.2}
                        amount={0.1}
                        className="mt-5 w-full"
                    >
                        <h1 className="font-serif text-[2.8rem] font-bold leading-tight text-white sm:text-[2.8rem] lg:text-[3.2rem]">
                            Thank{" "}
                            <span className="italic text-[#E7665D]">
                                You{displayName ? "," : "!"}
                            </span>

                            {displayName && (
                                <span className="mt-2 block break-words text-white">
                                    {displayName}!
                                </span>
                            )}
                        </h1>
                    </AnimatedReveal>

                    {/* Description Animation */}
                    <AnimatedReveal
                        y={20}
                        duration={0.6}
                        delay={0.3}
                        amount={0.1}
                        className="mt-6"
                    >
                        <p className="mx-auto max-w-xl font-sans text-sm leading-relaxed text-slate-300 sm:text-base">
                            Thank you for choosing{" "}
                            <strong className="font-semibold text-white">
                                The Collingwood Press.
                            </strong>{" "}
                            Every great book begins with a story worth sharing.
                            We&apos;re excited to help you take the next step
                            toward bringing yours to readers around the world.
                        </p>
                    </AnimatedReveal>

                    {/* Button Animation */}
                    <AnimatedReveal
                        y={20}
                        duration={0.6}
                        delay={0.4}
                        amount={0.1}
                        className="mt-9"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/[0.05] px-7 py-3.5 font-sans text-sm font-semibold text-white transition-[background-color,border-color] duration-300 hover:border-[#E7665D] hover:bg-white/10"
                            >
                                <Home size={16} />
                                Back to Home
                            </Link>
                        </div>
                    </AnimatedReveal>

                </div>
            </Container>
        </section>
    );
}
