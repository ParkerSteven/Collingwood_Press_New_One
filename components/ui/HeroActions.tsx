
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

export default function HeroActions() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleChat = () => {
        if (
            typeof window !== "undefined" &&
            window.BrevoConversations
        ) {
            window.BrevoConversations("openChat");
        } else {
            // Prevent unexpected homepage navigation
            console.warn("Chat widget is not available yet.");
        }
    };

    return (
        <>
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                    onClick={() => setIsPopupOpen(true)}
                    variant="primary"
                    size="md"
                    className="shadow-sm hover:shadow-md cursor-pointer"
                >
                    <span>Get a Free Publishing Consultation</span>
                    <ArrowRight size={15} />
                </Button>

                <Button
                    onClick={handleChat}
                    variant="outline"
                    size="md"
                    className="text-white cursor-pointer"
                >
                    Talk to a Senior Editor
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
