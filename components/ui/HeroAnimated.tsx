
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import HeroActions from "./HeroActions";

export default function HeroAnimated() {
    return (
        <>
            {/* Left Column */}
            <div className="max-w-5xl">
                <Eyebrow tone="coral" align="left">
                    Your Story. Your Vision. Your Publishing Journey.
                </Eyebrow>

                <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.2rem] font-medium leading-[1.05] text-white tracking-tight text-balance">
                    Trusted Book Publishing{" "}
                    <span className="text-[#E7665D] italic font-normal inline">
                        Company
                        <br className="hidden sm:block" /> & Author
                    </span>{" "}
                    Services
                </h1>

                <p className="mt-6 text-[1.02rem] sm:text-[1.08rem] leading-relaxed text-slate-300 font-sans font-normal pr-20">
                    You wrote the book. You should own what comes next.
                    <br />
                    The Collingwood Press provides full-service book
                    publishing with professional writing, senior editorial
                    support, original cover design, and worldwide marketing
                    and distribution. You retain 100% of your copyright
                    and royalties.
                </p>

                {/* Interactive buttons */}
                <HeroActions />

                {/* Trust Badges */}
                <div className="mt-10 w-full">
                    <div className="flex justify-center items-center gap-4">
                        <span className="h-px flex-1 bg-line" />
                        <span className="shrink-0 font-sans text-[10.5px] uppercase font-semibold text-ink-muted tracking-[0.2em]">
                            Accredited &amp; Member
                        </span>
                        <span className="h-px flex-1 bg-line" />
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
            </div>

            {/* Right Column - reserved for editorial image */}
            <div className="relative mx-auto w-full max-w-[480px] lg:max-w-[520px] h-[460px] sm:h-[520px] lg:h-[550px] flex items-center justify-center">
                <div className="absolute inset-8 rounded-full pointer-events-none" />
                <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]" />
            </div>
        </>
    );
}
