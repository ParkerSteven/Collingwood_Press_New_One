import { Book } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type BookCardProps = {
    book: Book;
    /**
     * Link target for the card. Omit it (or remove the prop in the page)
     * and the card renders as a plain, non-clickable block.
     */
    href?: string;
    /** Pass true for above-the-fold covers so they load first. */
    priority?: boolean;
};

export default function BookCard({ book, href, priority = false }: BookCardProps) {
    const content = (
        <>
            <div
                className="
          relative aspect-[2/3] w-full overflow-hidden rounded-[2px] bg-[#E9E3D6]
          shadow-[0_6px_18px_-6px_rgba(15,27,61,0.25)]
          transition-[transform,box-shadow] duration-300 ease-out
          group-hover:-translate-y-1 group-hover:shadow-[0_16px_30px_-8px_rgba(15,27,61,0.38)]
          group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_30px_-8px_rgba(15,27,61,0.38)]
          motion-reduce:transition-none motion-reduce:group-hover:translate-y-0
        "
            >
                <Image
                    src={book.image}
                    alt={`Cover of ${book.title} by ${book.author}`}
                    fill
                    priority={priority}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                />
                {/* Faint spine highlight for a printed-book feel */}
                <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-[6%] bg-gradient-to-r from-black/15 via-white/10 to-transparent"
                />
            </div>

            <h3 className="mt-4 line-clamp-2 text-base font-semibold leading-snug text-[#0F1B3D] transition-colors duration-300 group-hover:text-[#E8553F] group-focus-visible:text-[#E8553F] lg:text-lg">
                {book.title}
            </h3>
            <p className="mt-1.5 text-sm text-slate-500">{book.author}</p>
        </>
    );

    const baseClasses = "group block w-full text-left";

    if (!href) {
        return <article className={baseClasses}>{content}</article>;
    }

    return (
        <article>
            {/* <Link
                href={href}
                className={`${baseClasses} cursor-pointer rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8553F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF7F2]`}
            > */}
            <div className={`${baseClasses} cursor-pointer rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8553F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF7F2]`}>
                {content}
            </div>
            {/* </Link> */}
        </article>
    );
}