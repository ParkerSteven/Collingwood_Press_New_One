
import Eyebrow from "@/components/ui/Eyebrow";
import HeroActions from "./HeroActions";
import type { HeroProps } from "@/types/types";
import AnimatedReveal from "./AnimatedReveal";
import {
    CustomTrustBadges,
    DefaultTrustBadges,
} from "./CustomTrustBadges";

const defaultTitle = (
    <>
        Trusted Book Publishing{" "}
        <span className="text-[#E7665D] italic font-normal inline">
            Company
            <br className="hidden sm:block" /> & Author
        </span>{" "}
        Services
    </>
);

const defaultDescription = (
    <>
        You wrote the book. You should own what comes next.
        <br />
        The Collingwood Press provides full-service book publishing
        with professional writing, senior editorial support,
        original cover design, and worldwide marketing and
        distribution. You retain 100% of your copyright
        and royalties.
    </>
);

export default function HeroAnimated({
    eyebrow = "Your Story. Your Vision. Your Publishing Journey.",
    title = defaultTitle,
    description = defaultDescription,
    actions,
    badges,
    badgeHeading = "Accredited & Member",
    showBadges = true,
    rightContent,
}: HeroProps) {
    return (
        <>
            {/* LEFT COLUMN */}
            <div className="max-w-5xl">
                {/* Immediately visible */}
                <Eyebrow tone="coral" align="left">
                    {eyebrow}
                </Eyebrow>

                {/* H1 — no animation */}
                <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.2rem] font-medium leading-[1.05] text-white tracking-tight text-balance">
                    {title}
                </h1>

                {/* Description — no animation */}
                <p className="mt-6 text-[1.02rem] sm:text-[1.08rem] leading-relaxed text-slate-300 font-sans font-normal md:pr-20">
                    {description}
                </p>

                {/* Animated actions */}
                <AnimatedReveal y={20} duration={0.6} delay={0.3}>
                    {actions === undefined ? <HeroActions /> : actions}
                </AnimatedReveal>

                {/* Animated trust badges */}
                {showBadges && (
                    <div className="w-full max-w-[540px]">
                        <AnimatedReveal y={16} duration={0.6} delay={0.4}>
                            {badges === undefined ? (
                                <DefaultTrustBadges heading={badgeHeading} />
                            ) : (
                                <CustomTrustBadges
                                    badges={badges}
                                    heading={badgeHeading}
                                />
                            )}
                        </AnimatedReveal>
                    </div>
                )}
            </div>

            {/* RIGHT COLUMN */}
            <div className="relative hidden md:block mx-auto w-full max-w-[480px] lg:max-w-[520px] h-[460px] sm:h-[520px] lg:h-[550px] items-center justify-center">
                {rightContent === undefined ? (
                    <>
                        <div className="absolute inset-8 rounded-full pointer-events-none" />
                        <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]" />
                    </>
                ) : (
                    rightContent
                )}
            </div>
        </>
    );
}
