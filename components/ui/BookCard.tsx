import Image from "next/image";
type Book = {
    title: string;
    author: string;
    image: string;
    href?: string;
};

export function BookCard({ book }: { book: Book }) {
    return (
        <>
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm bg-slate-800 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1.5 group-focus-visible:ring-2 group-focus-visible:ring-[#E7665D]">
                <Image
                    src={book.image}
                    alt={`${book.title} by ${book.author}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                    loading="lazy"
                    draggable={false}
                    className="object-cover"
                />
            </div>
            <h3 className="mt-3 break-words text-sm font-semibold leading-snug text-white sm:mt-4 sm:text-base">
                {book.title}
            </h3>
            <p className="mt-1 break-words text-xs text-slate-400 sm:text-sm">{book.author}</p>
        </>
    );
}