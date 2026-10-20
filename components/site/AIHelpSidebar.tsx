
"use client";

import { useState, useEffect } from "react";
import { X, MessageSquare, ArrowRight } from "lucide-react";

// Props Interface
interface AIHelpSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AIHelpSidebar({
    isOpen,
    onClose,
}: AIHelpSidebarProps): React.JSX.Element | null {
    const [isVisible, setIsVisible] = useState<boolean>(isOpen);

    // Handle sidebar visibility and body scrolling
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | undefined;

        if (isOpen) {
            setIsVisible(true);
        } else {
            timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-[99999] transition-opacity duration-300 ${isOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ai-sidebar-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Sidebar Panel */}
            <div
                className={`absolute top-0 right-0 h-full w-full max-w-[450px] bg-white shadow-2xl transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="bg-[#1F2A44] p-6 text-white relative">
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close AI help sidebar"
                        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-[#EB6358] flex items-center justify-center">
                            <MessageSquare
                                size={20}
                                className="text-white"
                            />
                        </div>

                        <p className="text-xs font-black uppercase tracking-widest text-[#EB6358]">
                            Available 24/7
                        </p>
                    </div>

                    <h2
                        id="ai-sidebar-title"
                        className="text-2xl md:text-3xl font-extrabold font-vidaloka pr-10"
                    >
                        AI Project Advisor
                    </h2>

                    <p className="text-white/70 text-sm mt-2 leading-relaxed">
                        Our specialized AI agent is ready to analyze your
                        manuscript details right now.
                    </p>
                </div>

                {/* Content Area */}
                <div className="p-6 h-[calc(100%-180px)] overflow-y-auto bg-[#F6F7F9]">
                    {/* Visual Instruction */}
                    <div className="bg-white border-2 border-[#1F2A44]/10 rounded-2xl p-6 mb-8 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#EB6358]" />

                        <p className="text-sm font-bold text-[#1F2A44] mb-2 flex items-center gap-2">
                            How it works
                            <ArrowRight
                                size={14}
                                className="text-[#EB6358]"
                            />
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Click the{" "}
                            <span className="font-bold text-[#1F2A44]">
                                blue chat bubble
                            </span>{" "}
                            in the bottom corner of your screen to start
                            your session with our agent.
                        </p>

                        {/* Decorative Arrow */}
                        <div className="mt-8 flex justify-end">
                            <div className="animate-bounce mr-4">
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#EB6358"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M7 7l5 5 5-5M12 12V2"
                                        transform="rotate(135 12 12)"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                        {/* Feature 1 */}
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-lg bg-white border border-[#1F2A44]/10 flex items-center justify-center shrink-0 shadow-sm">
                                <span className="text-[#EB6358] font-black text-sm">
                                    1
                                </span>
                            </div>

                            <div>
                                <p className="font-bold text-[#1F2A44] text-sm">
                                    Immediate Script Analysis
                                </p>

                                <p className="text-xs text-gray-500 mt-1">
                                    Get instant feedback on your book&apos;s
                                    genre and potential.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-lg bg-white border border-[#1F2A44]/10 flex items-center justify-center shrink-0 shadow-sm">
                                <span className="text-[#EB6358] font-black text-sm">
                                    2
                                </span>
                            </div>

                            <div>
                                <p className="font-bold text-[#1F2A44] text-sm">
                                    Custom Publishing Routes
                                </p>

                                <p className="text-xs text-gray-500 mt-1">
                                    Discover which of our services
                                    (Premium/Standard) fits your budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Area */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-white border-t border-[#1F2A44]/5 flex flex-col gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full bg-[#1F2A44] text-white font-bold py-4 rounded-xl hover:bg-[#0B1B3B] transition-all shadow-[4px_4px_0_#EB6358]"
                    >
                        I understand, show me the agent
                    </button>

                    <p className="text-[10px] text-center text-gray-400 font-medium uppercase tracking-tighter">
                        Professional Publishing Guidance • Secure
                        &amp; Confidential
                    </p>
                </div>
            </div>

            <style jsx>{`
        .font-vidaloka {
          font-family: var(--font-serif), Georgia, serif;
        }
      `}</style>
        </div>
    );
}
