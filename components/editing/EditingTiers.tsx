import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { editorialTiers } from "@/lib/editingData";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function EditingTiers() {
  return (
<section
                    id="tiers"
                    className="relative overflow-hidden border-b border-[#E8E3DD] bg-[#F8F7F3] py-12 sm:py-16 lg:py-28"
                >
                    {/* Subtle Grid Background */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-50"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(120,110,100,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,110,100,0.07) 1px, transparent 1px)",
                            backgroundSize: "34px 34px",
                        }}
                    />

                    <Container className="relative z-10 w-full min-w-0">

                        {/* Section Heading */}
                        <div className="mb-9 grid grid-cols-1 items-end gap-5 sm:mb-12 sm:gap-7 lg:mb-16 lg:grid-cols-2 lg:gap-16">
                            <div className="min-w-0">
                                <div className="mb-4 flex items-center gap-2 sm:mb-5 relative md:top-10">
                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D5645C] sm:text-[11px]">
                                        Choose the Right Service
                                    </span>
                                </div>

                                <h2 className="max-w-2xl font-serif text-[clamp(1.85rem,7vw,3.3rem)] font-bold leading-[1.12] tracking-tight text-[#202629] relative md:top-10">
                                    Four Levels of Editing,{" "}
                                    <span className="block text-[#D5645C]">
                                        and the One Your Manuscript Needs
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-xl text-[13px] leading-6 text-[#596064] sm:text-base sm:leading-7 lg:ml-auto">
                                Editing is four separate services, each working on a different
                                layer of your manuscript. Here is what each covers, who it
                                suits and what it costs.
                            </p>
                        </div>

                        {/* Responsive Staircase Cards */}
                        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:items-end xl:gap-4">
                            {editorialTiers.map((item, index) => {
                                const isFeatured = index === 3;

                                const colors = [
                                    {
                                        border: "#D8A243",
                                        accent: "#A97821",
                                        background: "#FFFFFF",
                                    },
                                    {
                                        border: "#E7665D",
                                        accent: "#C75148",
                                        background: "#FFFFFF",
                                    },
                                    {
                                        border: "#B53D35",
                                        accent: "#B53D35",
                                        background: "#FFF2ED",
                                    },
                                    {
                                        border: "#4A96B3",
                                        accent: "#FFAAA2",
                                        background: "#101A30",
                                    },
                                ];

                                const theme = colors[index] ?? colors[1];

                                return (
                                    <AnimatedReveal
                                        key={item.name}
                                        y={24}
                                        duration={0.55}
                                        delay={(index % 4) * 0.09}
                                        amount={0.1}
                                        className="h-full xl:h-auto"
                                    >
                                    <div
                                        className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-[#E5E0DB] border-t-[3px] p-5 shadow-[0_6px_20px_rgba(30,30,30,0.06)] transition-all duration-300 hover:border-[#E7665D]/40 hover:shadow-[0_16px_35px_rgba(30,30,30,0.12)] sm:p-6 xl:h-auto ${index === 0
                                            ? "xl:min-h-[510px]"
                                            : index === 1
                                                ? "xl:min-h-[555px]"
                                                : index === 2
                                                    ? "xl:min-h-[600px]"
                                                    : "xl:min-h-[650px]"
                                            } ${isFeatured
                                                ? "border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#172B4D] to-[#294D78] text-white shadow-[0_16px_35px_rgba(16,26,48,0.2)]"
                                                : ""
                                            }`}
                                        style={
                                            !isFeatured
                                                ? {
                                                    backgroundColor: theme.background,
                                                    borderTopColor: theme.border,
                                                }
                                                : {
                                                    borderTopColor: theme.border,
                                                }
                                        }
                                    >

                                        {/* Card Header */}
                                        <div className="mb-5 flex items-start justify-between gap-3 sm:mb-6">
                                            <div
                                                className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12 ${isFeatured
                                                    ? "bg-white/10 text-[#FFAAA2]"
                                                    : "bg-[#F9EBE7] text-[#B53D35]"
                                                    }`}
                                            >
                                                <span className="font-sans text-sm font-semibold">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            <span
                                                className={`max-w-[130px] text-right font-mono text-[9px] font-semibold uppercase leading-4 tracking-[0.1em] ${isFeatured
                                                    ? "text-[#A8DFE2]"
                                                    : "text-[#94682A]"
                                                    }`}
                                            >
                                                {item.badge}
                                            </span>
                                        </div>

                                        {/* Service Title */}
                                        <h3
                                            className={`font-serif text-[1.3rem] font-bold leading-tight sm:text-[1.4rem] ${isFeatured ? "text-white" : "text-[#202629]"
                                                }`}
                                        >
                                            {item.name}
                                        </h3>

                                        {/* Tagline */}
                                        <p
                                            className={`mt-2 text-xs font-semibold leading-5 ${isFeatured
                                                ? "text-[#B5DCE0]"
                                                : "text-[#B53D35]"
                                                }`}
                                        >
                                            {item.tagline}
                                        </p>

                                        {/* Description */}
                                        <div
                                            className={`mt-4 break-words text-[13px] leading-[1.75] sm:mt-5 ${isFeatured
                                                ? "text-slate-200"
                                                : "text-[#565B5E]"
                                                }`}
                                        >
                                            {item.description}
                                        </div>

                                        {/* Best For */}
                                        <div className="mt-5 sm:mt-6">
                                            <div
                                                className={`border-l-2 pl-3 ${isFeatured
                                                    ? "border-[#7CD0D5]"
                                                    : "border-[#E7665D]"
                                                    }`}
                                            >
                                                <span
                                                    className={`block font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${isFeatured
                                                        ? "text-[#B5DCE0]"
                                                        : "text-[#94682A]"
                                                        }`}
                                                >
                                                    Best For
                                                </span>

                                                <p
                                                    className={`mt-1 break-words text-xs leading-[1.7] ${isFeatured
                                                        ? "text-slate-200"
                                                        : "text-[#33383A]"
                                                        }`}
                                                >
                                                    {item.bestFor}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Pricing Footer */}
                                        <div
                                            className={`mt-auto border-t border-dashed pt-5 ${isFeatured
                                                ? "border-white/20"
                                                : "border-[#DED8D2]"
                                                }`}
                                        >
                                            <span
                                                className={`block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] ${isFeatured
                                                    ? "text-slate-300"
                                                    : "text-[#77716D]"
                                                    }`}
                                            >
                                                From
                                            </span>

                                            <div className="mt-1 flex flex-wrap items-baseline gap-2">
                                                <span
                                                    className={`font-sans text-[0.8rem] font-semibold leading-tight sm:text-[1rem] ${isFeatured ? "text-white" : "text-[#202629]"
                                                        }`}
                                                >
                                                    {item.startingPrice}
                                                </span>
                                            </div>

                                            {/* Turnaround */}
                                            <div className="mt-5">
                                                <span
                                                    className={`block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] ${isFeatured
                                                        ? "text-slate-300"
                                                        : "text-[#77716D]"
                                                        }`}
                                                >
                                                    Turnaround
                                                </span>

                                                <span
                                                    className={`mt-1 block text-xs font-semibold ${isFeatured
                                                        ? "text-white"
                                                        : "text-[#202629]"
                                                        }`}
                                                >
                                                    {item.turnaround}
                                                </span>
                                            </div>

                                            {/* Progress Indicator */}
                                            <div className="mt-3 flex h-1.5 gap-[3px]">
                                                {Array.from({ length: 8 }).map(
                                                    (_, barIndex) => (
                                                        <span
                                                            key={barIndex}
                                                            className="h-full flex-1 rounded-sm"
                                                            style={{
                                                                backgroundColor:
                                                                    barIndex < (index + 1) * 2
                                                                        ? isFeatured
                                                                            ? "#65B5BD"
                                                                            : theme.border
                                                                        : isFeatured
                                                                            ? "rgba(255,255,255,0.15)"
                                                                            : "#E6E4E1",
                                                            }}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    </AnimatedReveal>
                                );
                            })}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-8 flex w-full flex-col items-stretch gap-5 rounded-lg border border-[#E3DDD7] border-l-4 border-l-[#E7665D] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                            <div className="min-w-0 flex-1">
                                <h3 className="font-serif text-lg font-bold leading-snug text-[#202629] sm:text-xl">
                                    Not sure which service you need?
                                </h3>

                                <p className="mt-2 text-[13px] leading-relaxed text-[#646769] sm:text-sm">
                                    Get a personalized editing recommendation for your manuscript.
                                </p>
                            </div>

                            <div className="w-full sm:w-auto sm:shrink-0">
                                <Button
                                    href="/contact-us/#manuscript-review"
                                    variant="primary"
                                    size="lg"
                                >
                                    <span>Get a Quote</span>
                                    <ArrowRight size={15} />
                                </Button>
                            </div>
                        </div>

                    </Container>
                </section>
  );
}
