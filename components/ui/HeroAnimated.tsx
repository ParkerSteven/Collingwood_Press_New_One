
import Eyebrow from "@/components/ui/Eyebrow";
import HeroActions from "./HeroActions";
import type { HeroProps } from "@/types/types";
import {
    CustomTrustBadges,
    DefaultTrustBadges,
} from "./CustomTrustBadges";
import AnimatedReveal from "./AnimatedReveal";

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
    firstButtonText,
    secondButtonText,
    badges,
    badgeHeading = "Accredited & Member",
    showBadges = true,
    rightContent,
}: HeroProps) {
    return (
        <>
            {/* LEFT COLUMN */}
            <div className="mx-auto w-full max-w-5xl text-center sm:mx-0 sm:text-left">

                {/* Eyebrow */}
                <div className="flex justify-center sm:justify-start">
                    <Eyebrow tone="coral" align="left">
                        {eyebrow}
                    </Eyebrow>
                </div>

                {/* Heading — no animation for LCP */}
                <h1
                    className="
            mt-6 font-serif
            text-[2.6rem]
            sm:text-[3rem]
            lg:text-[3.2rem]
            font-medium leading-[1.05]
            text-white tracking-tight text-balance
            text-center sm:text-left
          "
                >
                    {title}
                </h1>

                {/* Description */}
                <AnimatedReveal
                    y={12}
                    duration={0.5}
                    delay={0.1}
                >
                    <p
                        className="
              mx-auto mt-6
              max-w-xl
              font-sans
              text-[1.02rem]
              sm:mx-0 sm:text-[1.08rem]
              leading-relaxed
              font-normal text-slate-300
              text-center sm:text-left
              md:pr-20
            "
                    >
                        {description}
                    </p>
                </AnimatedReveal>

                {/* Buttons */}
                <AnimatedReveal
                    y={16}
                    duration={0.55}
                    delay={0.15}
                    className="w-full"
                >
                    <div className="flex w-full justify-center sm:justify-start">
                        <HeroActions
                            firstButtonText={firstButtonText}
                            secondButtonText={secondButtonText}
                        />
                    </div>
                </AnimatedReveal>

                {/* Trust Badges */}
                {showBadges && (
                    <AnimatedReveal
                        y={12}
                        duration={0.5}
                        delay={0.2}
                        className="mx-auto w-full max-w-[540px] sm:mx-0"
                    >
                        {badges === undefined ? (
                            <DefaultTrustBadges heading={badgeHeading} />
                        ) : (
                            <CustomTrustBadges
                                badges={badges}
                                heading={badgeHeading}
                            />
                        )}
                    </AnimatedReveal>
                )}
            </div>

            {/* RIGHT COLUMN — unchanged */}
            <div
                className="
          relative hidden md:block
          mx-auto w-full
          max-w-[480px] lg:max-w-[520px]
          h-[460px] sm:h-[520px] lg:h-[550px]
        "
            >
                <AnimatedReveal
                    y={20}
                    duration={0.7}
                    delay={0.15}
                    className="h-full w-full"
                >
                    {rightContent === undefined ? (
                        <div
                            className="
                flex h-full w-full
                items-center justify-center
                transition-transform duration-500
                hover:scale-[1.02]
                motion-reduce:transform-none
              "
                        />
                    ) : (
                        rightContent
                    )}
                </AnimatedReveal>
            </div>
        </>
    );
}
