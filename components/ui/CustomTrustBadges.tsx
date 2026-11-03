import { HeroBadge } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export function DefaultTrustBadges({ heading }: { heading: string }) {
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


export function CustomTrustBadges({
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

