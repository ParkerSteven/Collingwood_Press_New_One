
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

// Popup code separate chunk mein load hoga
const PopupForm = dynamic(
    () => import("@/components/forms/popupform"),
    { ssr: false }
);

export default function HeroActions({ firstButtonText, secondButtonText }: any) {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    return (
        <>
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                    onClick={() => setIsPopupOpen(true)}
                    variant="primary"
                    size="md"
                    className="shadow-sm hover:shadow-md cursor-pointer"
                >
                    <span>{firstButtonText}</span>
                    <ArrowRight size={15} />
                </Button>

                <Button
                    onClick={() => {
                        if (typeof window !== 'undefined' && window.BrevoConversations) {
                            // the API doesn't expose an "open" method – use openChat instead
                            // passing `true` opens the widget immediately (argument is optional)
                            window.BrevoConversations('openChat');
                        } else {
                            // fallback if the script hasn't injected yet; we don't have a /chat
                            // route, so navigate to the homepage instead (or remove entirely)
                            window.location.href = '/';
                        }
                    }}
                    variant="outline"
                    size="md"
                    className="text-white cursor-pointer"
                >
                    <span>{secondButtonText}</span>
                </Button>
            </div>

            {/* Mount popup only when user opens it */}
            {isPopupOpen && (
                <PopupForm
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    source="Hero Section - Free Publishing Consultation"
                />
            )}
        </>
    );
}
