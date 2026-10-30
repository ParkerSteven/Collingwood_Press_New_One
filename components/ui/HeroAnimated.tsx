import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import HeroActions from "./HeroActions";
import type { HeroBadge, HeroProps } from "@/types/types";


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

function DefaultTrustBadges({ heading }: { heading: string }) {
    return (
        <div className="mt-10 w-full">
            <div className="flex justify-center items-center gap-4">
                <span className="h-px flex-1 bg-line" />

                <span className="shrink-0 font-sans text-[10.5px] uppercase font-semibold text-ink-muted tracking-[0.2em]">
                    {heading}
                </span>

                <span className="h-px flex-1 bg-line max-w-xl" />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
                <Link
                    href="https://www.ibpa-online.org/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="flex h-11 items-center opacity-85 transition-opacity hover:opacity-100"
                >
                    <Image
                        src="/ibpa-proud-memberFooter.png"
                        alt="The Collingwood Press IBPA Member"
                        width={140}
                        height={44}
                        sizes="140px"
                        className="block h-12 w-auto object-contain"
                    />
                </Link>

                <span
                    className="hidden h-7 w-px bg-line sm:block"
                    aria-hidden="true"
                />

                <Link
                    href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                >
                    <Image
                        src="/blue-seal.png"
                        alt="The Collingwood Press BBB Business Review"
                        width={140}
                        height={44}
                        sizes="140px"
                        className="block h-auto max-h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                </Link>
            </div>
        </div>
    );
}

function CustomTrustBadges({
    badges,
    heading,
}: {
    badges: HeroBadge[];
    heading: string;
}) {
    return (
        <div className="mt-10 w-full">
            <div className="flex justify-center items-center gap-4">
                <span className="h-px flex-1 bg-line" />

                <span className="shrink-0 font-sans text-[10.5px] uppercase font-semibold text-ink-muted tracking-[0.2em]">
                    {heading}
                </span>

                <span className="h-px flex-1 bg-line max-w-xl" />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
                {badges.map(({ src, alt, href, width = 140, height = 44 }) => (
                    <Link
                        key={`${href}-${src}`}
                        href={href}
                        className="flex h-11 items-center opacity-85 transition-opacity hover:opacity-100"
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={width}
                            height={height}
                            sizes={`${width}px`}
                            className="block h-12 w-auto object-contain"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default function HeroAnimated({
    eyebrow = "Your Story. Your Vision. Your Publishing Journey.",
    title = defaultTitle,
    highlightText,
    titleSuffix = "",
    description = defaultDescription,

    firstButtonText,
    secondButtonText,
    buttons,
    actions,

    badges,
    badgeHeading = "Accredited & Member",
    showBadges = true,
    guarantees,

    rightContent,
    children,
}: HeroProps) {
    return (
        <>
            {/* Left Column */}
            <div className="max-w-5xl">
                <Eyebrow tone="coral" align="left">
                    {eyebrow}
                </Eyebrow>

                <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.2rem] font-medium leading-[1.05] text-white tracking-tight text-balance">
                    {title}
                </h1>

                <p className="mt-6 text-[1.02rem] sm:text-[1.08rem] leading-relaxed text-slate-300 font-sans font-normal md:pr-20">
                    {description}
                </p>

                {/* Default HeroActions preserved */}
                {actions === undefined ? <HeroActions /> : actions}

                {/* Trust Badges */}
                {showBadges &&
                    (badges === undefined ? (
                        <DefaultTrustBadges heading={badgeHeading} />
                    ) : (
                        <CustomTrustBadges
                            badges={badges}
                            heading={badgeHeading}
                        />
                    ))}
            </div>

            {/* Right Column - reserved for editorial image */}
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