import type { Metadata } from "next";
import { books } from "@/lib/data";
import BookCard from "@/components/sections/BookCard";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IllustrationGallery from "@/components/sections/IlustrationGallery";

export const metadata: Metadata = {
    title: "Explore the Collection | Collingwood Books",
    description: "Discover 24 books from the Collingwood collection.",
};

export default function ProfilePage() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-[#FAF7F2]">
                <section
                    aria-labelledby="collection-heading"
                    className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 md:py-20 lg:px-10 lg:py-24"
                >
                    <header className="mb-12 max-w-2xl md:mb-16">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8553F]">
                            Collingwood Collection
                        </p>
                        <h1
                            id="collection-heading"
                            className="mt-3 text-3xl font-bold tracking-tight text-[#0F1B3D] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
                        >
                            Explore the Collection
                        </h1>
                        <p className="mt-4 text-base leading-relaxed text-slate-600">
                            Discover 24 books from the Collingwood collection.
                        </p>
                    </header>

                    <ul className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-8 md:grid-cols-3 md:gap-y-14 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-16">
                        {books.map((book, index) => (
                            <li key={book.id}>
                                {/* Remove the href prop below if /books/[slug] isn't ready yet */}
                                <BookCard
                                    book={book}
                                    href={`/books/${book.slug}`}
                                    priority={index < 4}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
                <IllustrationGallery />
            </main>
            <Footer />
        </>

    );
}