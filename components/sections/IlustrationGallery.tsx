"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { illustrationProjects } from "@/lib/data";
import IllustrationLightbox from "./Illustrationlightbox";

export default function IllustrationGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeProject = illustrationProjects[activeProjectIndex];

    const activeImages = useMemo(
        () => activeProject?.images ?? [],
        [activeProject]
    );

    const total = activeImages.length;

    const open = (projectIndex: number) => {
        setActiveProjectIndex(projectIndex);
        setActiveIndex(0);
        setIsOpen(true);
    };

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    const next = useCallback(() => {
        if (total === 0) return;

        setActiveIndex((i) => (i + 1) % total);
    }, [total]);

    const previous = useCallback(() => {
        if (total === 0) return;

        setActiveIndex((i) => (i - 1 + total) % total);
    }, [total]);

    return (
        <section
            aria-labelledby="illustrations-heading"
            className="bg-[#FAF7F2] py-16 md:py-24"
        >
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
                <header className="mb-10 max-w-2xl md:mb-14">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8553F]">
                        Illustrations
                    </p>

                    <h2
                        id="illustrations-heading"
                        className="mt-3 text-3xl font-bold tracking-tight text-[#0F1B3D] sm:text-4xl"
                    >
                        Visual Stories
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                        A collection of illustrations from the world of Collingwood.
                    </p>
                </header>

                <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {illustrationProjects.map((project, index) => (
                        <li key={project.id}>
                            <button
                                type="button"
                                onClick={() => open(index)}
                                aria-label={`Open ${project.title} in full screen`}
                                aria-haspopup="dialog"
                                className="group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-[3px] bg-[#E9E3D6] shadow-[0_2px_10px_-4px_rgba(15,27,61,0.25)] ring-1 ring-[#0F1B3D]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8553F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF7F2]"
                            >
                                <Image
                                    src={project.cover}
                                    alt={`${project.title} preview`}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                />

                                <span
                                    aria-hidden
                                    className="absolute inset-0 bg-[#0F1B3D]/0 transition-colors duration-300 group-hover:bg-[#0F1B3D]/25 group-focus-visible:bg-[#0F1B3D]/25"
                                />

                                <span
                                    aria-hidden
                                    className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF7F2]/90 text-[#0F1B3D] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                    </svg>
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {activeProject && (
                <IllustrationLightbox
                    key={activeProject.id}
                    illustrations={activeImages}
                    activeIndex={activeIndex}
                    isOpen={isOpen}
                    onClose={close}
                    onNext={next}
                    onPrevious={previous}
                    onSelect={setActiveIndex}
                />
            )}
        </section>
    );
}
