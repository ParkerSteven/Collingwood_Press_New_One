import { Award, ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { authorBrandingPillars } from "@/lib/marketingData";



export default function AuthorBrandingSection() {
    return (
        <section className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line">
            <Container>
                <div className="rounded-xl border border-[#E7665D]/25 bg-white p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-14 items-center">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex items-center gap-3">
                                <span className="font-sans text-xs uppercase tracking-[0.18em] font-bold text-[#E7665D]">
                                    Long-Term Author Growth
                                </span>
                            </div>

                            <h2 className="font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-ink leading-tight text-balance">
                                Author Branding That Keeps{" "}
                                <span className="italic text-[#E7665D]">
                                    Working After Launch
                                </span>
                            </h2>

                            <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                                A single campaign sells one book. An author brand makes the next one easier to sell. We build the pieces that carry over from title to title, so each launch starts with readers who already know your name.
                            </p>

                            {/* FOUR AUTHOR BRANDING PILLARS */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                {authorBrandingPillars.map((pillar) => (
                                    <div
                                        key={pillar.title}
                                        className="p-4 rounded-lg bg-[#fdf6f5] border border-[#E7665D]/20 flex items-start gap-3"
                                    >
                                        {/* Check Icon */}
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold mt-0.5">
                                            ✓
                                        </span>

                                        {/* Content */}
                                        <div>
                                            <h3 className="font-serif text-sm font-bold text-ink">
                                                {pillar.title}
                                            </h3>

                                            <p className="text-xs text-ink-soft mt-0.5 leading-relaxed">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CONCLUSION */}
                            <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                                These are not add-ons. They are the
                                infrastructure that separates authors who
                                sell one book from authors who build a
                                readership. Our book marketing agency builds
                                them into the campaign from the start.
                            </p>

                            {/* CTA */}
                            <div className="pt-2">
                                <Button
                                    href="/contact-us/#manuscript-reviewave questions"
                                    variant="primary"
                                    size="lg"
                                >
                                    <span>Build Your Author Brand</span>
                                    <ArrowRight size={15} />
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT VISUAL CARD */}
                        <div className="p-8 sm:p-10 rounded-xl bg-gradient-to-b from-[#10192e] to-[#0a1020] text-white border border-white/15 shadow-xl flex flex-col items-center text-center relative overflow-hidden">

                            <div className="absolute inset-0 bg-[#E7665D]/5 pointer-events-none" />

                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E7665D]/20 text-[#F08A82] border border-[#E7665D]/40 mb-5 shadow-inner">
                                <Award size={32} />
                            </div>

                            <h3 className="font-serif text-2xl font-bold text-white">
                                Long-Term Author Growth
                            </h3>

                            <span className="text-xs uppercase tracking-widest text-[#F08A82] font-semibold mt-1">
                                Beyond Single-Book Marketing
                            </span>

                            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs">
                                Build a recognizable author identity,
                                grow your owned audience, and create
                                long-term systems that support every
                                future book release.
                            </p>

                            <div className="w-full h-px bg-white/10 my-6" />

                            <div className="text-left w-full flex flex-col gap-2.5 text-xs text-slate-200">
                                <div className="flex items-center gap-2">
                                    <Check
                                        size={14}
                                        className="text-[#E7665D]"
                                    />
                                    <span>
                                        Consistent Author Branding
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Check
                                        size={14}
                                        className="text-[#E7665D]"
                                    />
                                    <span>
                                        Owned Email Audience Growth
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Check
                                        size={14}
                                        className="text-[#E7665D]"
                                    />
                                    <span>
                                        Press Kits &amp; Media Outreach
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Check
                                        size={14}
                                        className="text-[#E7665D]"
                                    />
                                    <span>
                                        Cross-Title Promotion Strategy
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
