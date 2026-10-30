
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function WhoWeWriteFor() {
    return (
        <section className="py-20 lg:py-28 bg-white border-b border-line">
            <Container className="flex flex-col gap-12 sm:gap-14">
                <div className="flex flex-col items-center text-center">

                    {/* Animated Section Heading */}
                    <AnimatedReveal
                        y={20}
                        duration={0.6}
                        delay={0}
                        amount={0.2}
                        className="w-full"
                    >
                        <SectionHeading
                            eyebrow="Who We Write For"
                            title={
                                <>
                                    Ghostwriting Services for Authors{" "}
                                    <span className="italic text-[#E7665D]">
                                        Who Need the Book Written
                                    </span>
                                </>
                            }
                        />
                    </AnimatedReveal>

                    {/* Animated Description */}
                    <div className="mt-6 max-w-3xl mx-auto flex flex-col gap-5 text-sm sm:text-base text-ink-muted leading-relaxed font-sans">

                        <AnimatedReveal
                            y={18}
                            duration={0.55}
                            delay={0.12}
                            amount={0.2}
                        >
                            <p>
                                Not all of our clients are full-time writers.
                                They are executives, consultants, entrepreneurs,
                                and subject-matter experts with a book in them
                                but no time or writing background to draft
                                60,000 words. Some are first-time authors who
                                know their story. Others are public figures
                                who want a book that matches the credibility
                                they have built.
                            </p>
                        </AnimatedReveal>

                        <AnimatedReveal
                            y={18}
                            duration={0.55}
                            delay={0.22}
                            amount={0.2}
                        >
                            <p>
                                Our book ghostwriting services suit anyone
                                who wants a professionally written manuscript
                                without drafting it themselves. You provide
                                the ideas, the direction, and the feedback.
                                We do the writing.
                            </p>
                        </AnimatedReveal>

                    </div>
                </div>
            </Container>
        </section>
    );
}
