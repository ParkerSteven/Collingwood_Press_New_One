import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { shelfOne, shelfTwo } from "@/lib/marketingShelves";


export default function MarketingPackagesSection() {
    return (
        <section
            id="book-marketing-packages"
            className="hero-gradient py-20 lg:py-28 text-white border-b border-white/10 relative overflow-hidden paper-grain"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10 flex flex-col gap-14">
                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                        Packages and Pricing
                    </span>

                    <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                        Book Marketing Packages{" "}
                        <span className="italic text-[#F08A82]">
                            and Individual Services
                        </span>
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                        Choose a full campaign or a single piece of work, depending on where your book is and what it needs. Either way, you see the scope and the price before anything starts.
                    </p>
                </div>

                {/* TWO-COLUMN CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                    {/* LEFT: PACKAGE OPTIONS */}
                    <div className="flex flex-col gap-5">
                        {/* BOOK MARKETING PACKAGES */}
                        <div className="p-6 sm:p-7 rounded-xl border border-white/10 bg-white/[0.04] shadow-sm flex flex-col justify-between hover:border-[#E7665D]/40 transition-colors">
                            <div>
                                <div className="flex items-center gap-2 mb-2.5 text-xs font-sans text-[#F08A82]">
                                    <CheckCircle2 size={14} />
                                    <span className="font-semibold">
                                        Coordinated Campaigns
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-white leading-snug">
                                    Book Marketing Packages
                                </h3>

                                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    A package combines several services into one coordinated campaign, built around your launch timeline, genre, and goals. It suits authors who want the whole campaign managed from start to finish.
                                </p>
                            </div>

                            <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#F08A82] font-medium">
                                <CheckCircle2 size={13} />
                                <span>
                                    Full Campaign Management
                                </span>
                            </div>
                        </div>

                        {/* INDIVIDUAL MARKETING SERVICES */}
                        <div className="p-6 sm:p-7 rounded-xl border border-white/10 bg-white/[0.04] shadow-sm flex flex-col justify-between hover:border-[#E7665D]/40 transition-colors">
                            <div>
                                <div className="flex items-center gap-2 mb-2.5 text-xs font-sans text-[#F08A82]">
                                    <CheckCircle2 size={14} />
                                    <span className="font-semibold">
                                        Standalone Projects
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-white leading-snug">
                                    Individual Services
                                </h3>

                                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    Need one thing done? If your Amazon listing needs a rewrite, your email funnel needs building, or you want a focused BookTok campaign, we can scope it as a standalone project.
                                </p>
                            </div>

                            <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#F08A82] font-medium">
                                <CheckCircle2 size={13} />
                                <span>
                                    Custom Scope for Individual Projects
                                </span>
                            </div>
                        </div>

                        {/* AFFORDABLE MARKETING SERVICES */}
                        <div className="p-6 sm:p-7 rounded-xl border border-[#E7665D]/30 bg-[#E7665D]/[0.06] shadow-sm flex flex-col justify-between hover:border-[#E7665D]/50 transition-colors">
                            <div>
                                <div className="flex items-center gap-2 mb-2.5 text-xs font-sans text-[#F08A82]">
                                    <CheckCircle2 size={14} />
                                    <span className="font-semibold">
                                        Budget-Focused Marketing
                                    </span>
                                </div>

                                <h3 className="font-serif text-[1.25rem] font-bold text-white leading-snug">
                                    Affordable Book Marketing Services
                                </h3>

                                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    We also offer{" "}
                                    <strong>
                                        affordable book marketing services
                                    </strong>{" "}
                                    for authors on tighter budgets. Not every
                                    campaign needs to run on every channel.
                                </p>
                            </div>

                            <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#F08A82] font-medium">
                                <CheckCircle2 size={13} />
                                <span>
                                    Goal-Based Planning and Custom Pricing
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: ORIGINAL VISUAL DESIGN */}
                    <div className="relative flex items-center justify-center py-8">
                        {/* GLOW */}
                        <div className="absolute h-[80%] w-[80%] rounded-full bg-[#E7665D]/20 blur-3xl -z-10" />

                        <div className="relative w-full max-w-[460px]">
                            {/* BANNER */}
                            <div className="relative mx-auto -mb-1 w-[92%] rounded-t-xl bg-gradient-to-r from-[#E7665D] via-[#d9564d] to-[#b8433b] px-6 py-4 text-center shadow-[0_10px_30px_-8px_rgba(231,102,93,0.6)]">
                                <p className="text-[9px] uppercase tracking-[0.3em] text-white/80 font-semibold">
                                    Customized Campaigns
                                </p>

                                <p className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                                    Book Marketing
                                </p>
                            </div>

                            {/* ORIGINAL BOOKSHELF VISUAL */}
                            <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#1b2233] to-[#10141f] p-5 sm:p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
                                {[shelfOne, shelfTwo].map((shelf, i) => (
                                    <div key={i} className="mb-1">
                                        <div className="flex items-end justify-center gap-1.5 h-[110px]">
                                            {shelf.map((b, idx) => (
                                                <div
                                                    key={idx}
                                                    className="w-[9%] max-w-[34px] rounded-t-[3px] relative"
                                                    style={{
                                                        height: `${b.h}%`,
                                                        backgroundColor: b.c,
                                                    }}
                                                >
                                                    <span className="absolute inset-x-0 top-2 mx-auto h-px w-3/5 bg-black/20" />
                                                    <span className="absolute inset-x-0 bottom-3 mx-auto h-px w-3/5 bg-black/20" />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="h-2 rounded-sm bg-gradient-to-b from-[#8a6a4a] to-[#5b432d] shadow-md" />
                                    </div>
                                ))}

                                {/* COUNTER */}
                                <div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3">
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.22em] text-white/50">
                                            Campaign
                                        </p>
                                        <p className="font-serif text-lg font-bold text-white leading-none">
                                            Custom
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-[11px] text-[#F08A82] font-medium">
                                        <CheckCircle2 size={14} />
                                        <span>Built Around Your Book</span>
                                    </div>
                                </div>
                            </div>

                            {/* FLOATING BADGE */}
                            <div className="absolute -right-2 sm:-right-6 -top-4 flex items-center gap-2 rounded-full border border-[#E7665D]/40 bg-[#10141f] px-4 py-2 shadow-lg">
                                <CheckCircle2
                                    size={14}
                                    className="text-[#F08A82]"
                                />
                                <span className="text-[11px] font-semibold text-white tracking-wide">
                                    Flexible Packages
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA BUTTON */}
                <div className="text-center">
                    <Button
                        href="/contact-us/#manuscript-reviewave questions"
                        variant="primary"
                        size="lg"
                    >
                        <span>Get Your Custom Marketing Plan</span>
                        <ArrowRight size={15} />
                    </Button>
                </div>
            </Container>
        </section>
    );
}
