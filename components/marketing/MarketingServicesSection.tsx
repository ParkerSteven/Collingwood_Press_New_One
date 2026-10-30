import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { platformStrip, brandMarks, getPlatformSymbol } from "./PlatformMarks";
import { bookMarketingServices, campaignFactors } from "@/lib/marketingData";
import Link from "next/link";


export default function MarketingServicesSection() {
    return (
        <section
            id="marketing-services"
            className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
        >

            {/* SECTION 2: Platforms and Channels */}

            <div className="relative mx-auto w-full max-w-[1360px] px-4 pt-2 pb-14 sm:px-6 sm:pb-16 lg:px-10 lg:pb-20 xl:px-12">

                {/* Section Heading */}
                <div className="flex flex-col items-center text-center">
                    <Eyebrow tone="coral" align="center">
                        Multi-Channel Campaign Management
                    </Eyebrow>

                    <h2 className="mt-5 max-w-[850px] font-serif text-[1.9rem] font-medium leading-[1.15] tracking-tight text-ink sm:text-[2.4rem] md:text-[2.6rem] lg:text-[2.9rem]">
                        Book Promotion on the Channels{" "}
                        <span className="block font-semibold text-[#E7665D]">
                            Your Readers Actually Use
                        </span>
                    </h2>

                    <p className="mt-5 max-w-[780px] font-sans text-sm leading-relaxed text-ink-muted sm:text-base">
                        We don&apos;t run every channel for every book.
                        Five things decide where your campaign goes:
                    </p>
                </div>

                {/* Five Oval Cards */}
                <div className="mt-10 grid grid-cols-1 justify-items-center gap-x-5 gap-y-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:mt-14 xl:grid-cols-5 xl:gap-4 2xl:gap-5">
                    {campaignFactors.map((factor, index) => {
                        const Icon = factor.icon;

                        return (
                            <div
                                key={factor.title}
                                className="
            campaign-oval-card group relative isolate
            flex w-full max-w-[290px] min-h-[300px]
            flex-col items-center
            rounded-[48%_48%_46%_46%/30%_30%_28%_28%]
            bg-white/90
            px-6 pt-9 pb-9 text-center
            transition-all duration-300
            hover:-translate-y-1.5
            sm:max-w-[270px]
            lg:min-h-[320px]
            xl:max-w-none xl:min-h-[330px] xl:px-4
          "
                            >
                                {/* Curved Orange Accent */}
                                <div
                                    className={`campaign-oval-arc ${index % 2 === 0 ? "arc-left" : "arc-right"
                                        }`}
                                    aria-hidden="true"
                                />

                                {/* Icon */}
                                <div
                                    className="
              relative z-10 flex h-[68px] w-[68px]
              shrink-0 items-center justify-center
              rounded-full bg-[#E7665D]/10
              text-[#E7665D]
              transition-all duration-300
              group-hover:bg-[#E7665D]
              group-hover:text-white
              sm:h-[70px] sm:w-[70px]
            "
                                >
                                    <Icon size={28} strokeWidth={2} />
                                </div>

                                {/* Title */}
                                <h3
                                    className="
              relative z-10 mt-5 max-w-[190px]
              font-sans text-[15px] font-bold
              leading-snug text-[#10213A]
              sm:text-base
            "
                                >
                                    {factor.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
              relative z-10 mt-3 max-w-[210px]
              font-sans text-[13px]
              leading-[1.65] text-[#707782]
              xl:text-[12px] 2xl:text-[13px]
            "
                                >
                                    {factor.description}
                                </p>

                                {/* Bottom Orange Accent */}
                                <span className="relative z-10 mt-auto pt-6">
                                    <span
                                        className="
                block h-[2px] w-5 rounded-full
                bg-[#E7665D]
                transition-all duration-300
                group-hover:w-10
              "
                                    />
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Supporting Text */}
                <p className="mx-auto mt-10 max-w-[800px] px-2 text-center font-sans text-sm leading-relaxed text-ink-muted sm:mt-12 sm:text-base">
                    Every channel we choose has one job in your plan,
                    from getting readers to your listing to bringing
                    them onto your email list.
                </p>
            </div>

            <div className="mx-auto w-full max-w-[1360px] min-w-0 overflow-hidden px-4 sm:px-6 lg:px-12">
                <div
                    className="mk-platform-viewport mb-12 w-full min-w-0 overflow-hidden sm:mb-16 lg:mb-24"
                    aria-label="Marketing platforms"
                >
                    <div className="mk-platform-track">
                        {[0, 1].map((copy) => (
                            <div
                                key={copy}
                                className="mk-platform-group"
                                aria-hidden={copy === 1 ? true : undefined}
                            >
                                {platformStrip.map((id) => {
                                    const mark = brandMarks[id];
                                    const title =
                                        id === "amazon" ? "Amazon" : mark?.title;

                                    if (!title) return null;

                                    return (
                                        <div
                                            key={`${id}-${copy}`}
                                            className="flip-card mk-platform-card"
                                            tabIndex={copy === 0 ? 0 : -1}
                                            aria-label={`${title} marketing platform`}
                                        >
                                            <div className="flip-inner">
                                                <div className="flip-face mk-platform-front">
                                                    <span className="mk-platform-symbol">
                                                        {getPlatformSymbol(id, "sm")}
                                                    </span>

                                                    <span className="mk-plat-name">
                                                        {title}
                                                    </span>
                                                </div>

                                                <div className="flip-face flip-back mk-platform-back">
                                                    <span className="mk-platform-symbol">
                                                        {getPlatformSymbol(id, "lg")}
                                                    </span>

                                                    <span className="mk-plat-name text-[#E7665D]">
                                                        {title}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 3: Coordinated Book Marketing Campaigns */}

            <Container className="flex flex-col gap-14 sm:gap-16">
                <SectionHeading
                    eyebrow="Coordinated Book Marketing Campaigns"
                    title={
                        <>
                            What&apos;s Included in Our{" "}
                            <span className="italic text-[#E7665D]">
                                Book Marketing Services
                            </span>
                        </>
                    }
                    description={
                        <>
                            Each service can run on its own, but it works better with the others. Ads that send readers to a weak Amazon page waste budget, so we plan every piece around the others.
                        </>
                    }
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookMarketingServices.map((svc) => {
                        const Icon = svc.icon;

                        return (
                            <div
                                key={svc.title}
                                className="group relative rounded-xl border border-[#E7665D]/25 bg-white p-7 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25 group-hover:bg-[#E7665D] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                            <Icon size={20} />
                                        </div>

                                        <span className="font-sans text-[10px] uppercase tracking-wider text-[#E7665D] font-semibold bg-[#fdf6f5] px-2.5 py-0.5 rounded border border-[#E7665D]/20">
                                            {svc.badge}
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-[1.2rem] font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                                        {svc.title}
                                    </h3>

                                    <div className="mt-2.5 text-xs sm:text-sm text-ink-soft leading-relaxed">
                                        {svc.description}
                                    </div>
                                </div>

                                <div className="mt-3 flex items-center ">
                                    <Link
                                        href={svc.href}
                                        className="flex items-center justify-center gap-2 border-t border-line/60 pt-3 text-xs font-semibold text-[#E7665D] transition-all duration-300 hover:gap-3"
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>

        </section>
    );
}
