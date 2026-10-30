
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import PopupForm from "../forms/popupform";

interface HeroActionsProps {
    firstButtonText?: string;
    secondButtonText?: string;
}

type BrevoWindow = Window & {
    BrevoConversations?: (...args: string[]) => void;
};

export default function HeroSectionClient({
    firstButtonText = "Get a Ghostwriting Quote",
    secondButtonText = "Schedule a Consultation",
}: HeroActionsProps) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenChat = () => {
        const brevoWindow = window as BrevoWindow;

        if (
            typeof brevoWindow.BrevoConversations === "function"
        ) {
            brevoWindow.BrevoConversations("openChat");
        } else {
            window.location.href = "/";
        }
    };

    return (
        <>
            <div
                className="
                    mt-7 sm:mt-8 lg:mt-9
                    flex w-full flex-col
                    items-stretch justify-center
                    gap-3 sm:w-auto sm:flex-row
                    sm:items-center sm:gap-4
                "
            >
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
                    onClick={handleOpenChat}
                    variant="outline"
                    size="md"
                    className="text-white cursor-pointer"
                >
                    <span>{secondButtonText}</span>
                </Button>
            </div>

            <PopupForm
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                source="Hero Section - Free Publishing Consultation"
            />
        </>
    );
}
