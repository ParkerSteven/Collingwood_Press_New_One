import { Compass, TrendingUp, Search, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";



export default function MarketingProcessSection() {
    return (
        <section className="py-20 lg:py-24 bg-white border-b border-line">
            <Container className="flex flex-col gap-12">
                <SectionHeading
                    eyebrow="Four-Stage Campaign Framework"
                    title={
                        <>
                            How Our{" "}
                            <span className="italic text-[#E7665D]">
                                Book Marketing Process
                            </span>{" "}
                            Works
                        </>
                    }
                    description="Our book marketing process follows the same four steps, whether you're launching a new title or promoting a book that's been out for a year."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start mt-10 md:mt-16">
                    {/* LEFT: Four-Stage Marketing Process */}
                    <div className="flex flex-col">
                        {[
                            {
                                title: "1. Review",
                                icon: Search,
                                badge: "Stage 01",
                                description: (
                                    <>
                                        We review your book, Amazon listing, social presence, and audience assets, then check your competitive positioning and genre discovery patterns to find the gaps.
                                    </>
                                ),
                            },
                            {
                                title: "2. Plan",
                                icon: Compass,
                                badge: "Stage 02",
                                description: (
                                    <>
                                        You get channels, tactics, timelines, and budget allocations, and you see what we&apos;ll do and what it costs before any work begins. It&apos;s scoped to your goals, not a fixed tier.
                                    </>
                                ),
                            },
                            {
                                title: "3. Execute",
                                icon: Rocket,
                                badge: "Stage 03",
                                description: (
                                    <>
                                        We set up ad accounts, produce creative, optimize your listings, start outreach, and publish social content, adjusting bids, creative, and budget pacing as data comes in.
                                    </>
                                ),
                            },
                            {
                                title: "4. Report",
                                icon: TrendingUp,
                                badge: "Stage 04",
                                description: (
                                    <>
                                        Monthly reports show what you spent and what it produced, using Amazon Attribution, BookBub analytics, email metrics, and social data. Amazon&apos;s ad reports and your KDP sales don&apos;t always match, so we explain the difference and end each report with where to invest next.
                                    </>
                                ),
                            },
                        ].map((stage) => {
                            const Icon = stage.icon;

                            return (
                                <div
                                    key={stage.title}
                                    className="flex items-start gap-5 py-6 border-t border-[#E7665D]/20 last:border-b"
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30">
                                        <Icon size={22} />
                                    </span>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <h3 className="font-serif text-[1.2rem] font-bold text-ink leading-snug flex-1">
                                                {stage.title}
                                            </h3>

                                            <span className="shrink-0 font-sans text-[10.5px] uppercase tracking-[0.16em] text-ink-muted font-semibold bg-[#fdf6f5] px-2.5 py-1 rounded-md border border-[#E7665D]/20">
                                                {stage.badge}
                                            </span>
                                        </div>

                                        <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                                            {stage.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT: Original Marketing Image */}
                    <div className="relative flex items-center justify-center py-10 lg:sticky lg:top-28">
                        {/* Soft Backdrop */}
                        <div className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-3xl bg-[#fdf6f5] border border-[#E7665D]/15 -z-10" />

                        <Image
                            src="/marketing_Asset.png"
                            alt="Four-Stage Book Marketing Process for Authors"
                            width={650}
                            height={650}
                            className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
