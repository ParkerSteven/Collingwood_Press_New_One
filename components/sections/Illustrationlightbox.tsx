"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Illustration } from "@/lib/data";

type IllustrationLightboxProps = {
    illustrations: Illustration[];
    activeIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
    onSelect: (index: number) => void;
};

type Transition = { from: number; dir: 1 | -1 } | null;

const SLIDE_MS = 400;
const SWIPE_THRESHOLD = 50;

const FOCUSABLE = 'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

export default function IllustrationLightbox({
    illustrations,
    activeIndex,
    isOpen,
    onClose,
    onNext,
    onPrevious,
    onSelect,
}: IllustrationLightboxProps) {
    const total = illustrations.length;
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // ----- Slide direction + outgoing slide -----------------------------------
    // When activeIndex changes, remember which slide is leaving and which way it
    // should travel. Derived during render so the new slide never paints
    // un-animated for a frame.
    const [lastIndex, setLastIndex] = useState(activeIndex);
    const [transition, setTransition] = useState<Transition>(null);

    if (lastIndex !== activeIndex) {
        const delta = (activeIndex - lastIndex + total) % total;
        let dir: 1 | -1;
        if (delta === 1) dir = 1; // next (including 9 -> 1)
        else if (delta === total - 1) dir = -1; // previous (including 1 -> 9)
        else dir = activeIndex > lastIndex ? 1 : -1; // thumbnail jump
        setTransition({ from: lastIndex, dir });
        setLastIndex(activeIndex);
    }

    useEffect(() => {
        if (!transition) return;
        const t = window.setTimeout(() => setTransition(null), SLIDE_MS + 30);
        return () => window.clearTimeout(t);
    }, [transition]);

    // ----- Body scroll lock (no layout shift) + focus restore ------------------
    useEffect(() => {
        if (!isOpen) return;
        const previouslyFocused = document.activeElement as HTMLElement | null;
        const { overflow, paddingRight } = document.body.style;
        const scrollbar = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
        closeRef.current?.focus();

        return () => {
            document.body.style.overflow = overflow;
            document.body.style.paddingRight = paddingRight;
            previouslyFocused?.focus?.();
        };
    }, [isOpen]);

    // ----- Keyboard: arrows, Escape, focus trap --------------------------------
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                e.preventDefault();
                onNext();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                onPrevious();
            } else if (e.key === "Escape") {
                e.preventDefault();
                onClose();
            } else if (e.key === "Tab" && dialogRef.current) {
                const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
                if (items.length === 0) return;
                const first = items[0];
                const last = items[items.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, onNext, onPrevious, onClose]);

    // ----- Keep the active thumbnail in view -----------------------------------
    useEffect(() => {
        if (!isOpen) return;
        thumbRefs.current[activeIndex]?.scrollIntoView({
            inline: "center",
            block: "nearest",
            behavior: "smooth",
        });
    }, [activeIndex, isOpen]);

    // ----- Swipe / drag --------------------------------------------------------
    const [dragX, setDragX] = useState(0);
    const startX = useRef<number | null>(null);
    const didDrag = useRef(false);

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (transition) return;
        startX.current = e.clientX;
        didDrag.current = false;
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        if (Math.abs(dx) > 5) didDrag.current = true;
        setDragX(dx);
    };

    const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        startX.current = null;
        setDragX(0);
        if (Math.abs(dx) > SWIPE_THRESHOLD) {
            if (dx < 0) onNext();
            else onPrevious();
        }
        // Let the click event that follows pointerup see the flag, then reset it.
        window.setTimeout(() => {
            didDrag.current = false;
        }, 0);
    };

    // Clicking the empty area around the artwork closes; clicking the image does not.
    const onStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (didDrag.current) return;
        if (!(e.target instanceof HTMLImageElement)) onClose();
    };

    if (!isOpen) return null;

    const active = illustrations[activeIndex];
    const leaving = transition ? illustrations[transition.from] : null;

    const enterAnim = transition
        ? transition.dir === 1
            ? "ill-in-right"
            : "ill-in-left"
        : "";
    const exitAnim = transition
        ? transition.dir === 1
            ? "ill-out-left"
            : "ill-out-right"
        : "";

    const slideBase =
        "absolute inset-0 flex items-center justify-center px-4 sm:px-20";
    const imageClass =
        "h-auto w-auto max-h-[calc(100vh-11rem)] max-w-[90vw] select-none object-contain shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]";

    const arrowClass =
        "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0A1128]/60 text-white ring-1 ring-white/15 backdrop-blur transition-colors duration-200 hover:bg-[#E8553F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8553F] sm:h-12 sm:w-12";

    return createPortal(
        <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Illustration viewer"
            className="ill-overlay fixed inset-0 z-[9999] flex flex-col bg-[#060B1C]/95 text-white"
        >
            <style>{`
        @keyframes ill-overlay-in { from { opacity: 0; transform: scale(.985); } to { opacity: 1; transform: none; } }
        @keyframes ill-in-right { from { transform: translateX(100%); opacity: 0; } to { transform: none; opacity: 1; } }
        @keyframes ill-in-left  { from { transform: translateX(-100%); opacity: 0; } to { transform: none; opacity: 1; } }
        @keyframes ill-out-left  { from { transform: none; opacity: 1; } to { transform: translateX(-100%); opacity: 0; } }
        @keyframes ill-out-right { from { transform: none; opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
        .ill-overlay { animation: ill-overlay-in 280ms ease-out; }
        .ill-in-right  { animation: ill-in-right ${SLIDE_MS}ms cubic-bezier(.22,.8,.26,1) both; }
        .ill-in-left   { animation: ill-in-left ${SLIDE_MS}ms cubic-bezier(.22,.8,.26,1) both; }
        .ill-out-left  { animation: ill-out-left ${SLIDE_MS}ms cubic-bezier(.22,.8,.26,1) both; }
        .ill-out-right { animation: ill-out-right ${SLIDE_MS}ms cubic-bezier(.22,.8,.26,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .ill-overlay, .ill-in-right, .ill-in-left, .ill-out-left, .ill-out-right { animation-duration: 1ms; }
        }
      `}</style>

            {/* Top bar: counter + title, close */}
            <div className="relative z-10 flex h-16 shrink-0 items-start justify-between px-4 pt-4 sm:px-6">
                <div>
                    <p className="text-sm font-medium tabular-nums tracking-wide" aria-live="polite">
                        {activeIndex + 1} / {total}
                    </p>
                    <p className="mt-0.5 text-xs text-white/60">{active.title}</p>
                </div>
                <button
                    ref={closeRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Close viewer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-[#E8553F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8553F]"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Stage: horizontal slides, swipe/drag, arrows */}
            <div
                className="relative flex-1 touch-pan-y overflow-hidden"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onClick={onStageClick}
            >
                {leaving && (
                    <div
                        key={`out-${transition!.from}`}
                        aria-hidden
                        className={`${slideBase} ill-anim pointer-events-none ${exitAnim}`}
                    >
                        <Image
                            src={leaving.image}
                            alt=""
                            width={1600}
                            height={1200}
                            sizes="90vw"
                            draggable={false}
                            className={imageClass}
                        />
                    </div>
                )}

                <div
                    key={`in-${activeIndex}`}
                    className={`${slideBase} ill-anim ${enterAnim}`}
                    style={
                        dragX !== 0
                            ? { transform: `translateX(${dragX}px)` }
                            : { transition: "transform 250ms ease-out" }
                    }
                >
                    <Image
                        src={active.image}
                        alt={active.alt}
                        width={1600}
                        height={1200}
                        sizes="90vw"
                        priority
                        draggable={false}
                        className={imageClass}
                    />
                </div>

                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrevious();
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                    aria-label="Previous illustration"
                    className={`${arrowClass} left-2 sm:left-5`}
                >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                    aria-label="Next illustration"
                    className={`${arrowClass} right-2 sm:right-5`}
                >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
            </div>

            {/* Thumbnail strip */}
            <div className="relative z-10 h-20 shrink-0">
                <ul className="flex h-full items-center gap-2 overflow-x-auto px-4 sm:justify-center sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {illustrations.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <li key={item.id} className="shrink-0">
                                <button
                                    ref={(el) => {
                                        thumbRefs.current[index] = el;
                                    }}
                                    type="button"
                                    onClick={() => onSelect(index)}
                                    aria-label={`Go to ${item.title}`}
                                    aria-current={isActive}
                                    className={`relative block h-11 w-[58px] overflow-hidden rounded-[2px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${isActive
                                        ? "opacity-100 ring-2 ring-[#E8553F]"
                                        : "opacity-50 hover:opacity-90"
                                        }`}
                                >
                                    <Image
                                        src={item.image}
                                        alt=""
                                        fill
                                        sizes="58px"
                                        className="object-cover"
                                    />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>,
        document.body
    );
}