
"use client";

import React, {
    createContext,
    useContext,
    useState,
    useRef,
    ReactNode,
} from "react";

import PopupForm from "@/components/forms/popupform";

// Context Type
interface PopupContextType {
    openPopup: (source?: string) => void;
    closePopup: () => void;
    isPopupOpen: boolean;
}

// Provider Props Type
interface PopupProviderProps {
    children: ReactNode;
}

// Create Context
const PopupContext = createContext<PopupContextType | undefined>(
    undefined
);

export function PopupProvider({
    children,
}: PopupProviderProps) {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

    const [popupSource, setPopupSource] = useState<string>(
        "Home Page Auto Popup"
    );

    const [popupInstance, setPopupInstance] = useState<number>(0);

    const popupClosedRef = useRef<boolean>(false);

    const openPopup = (
        source: string = "General Lead Popup"
    ): void => {
        popupClosedRef.current = false;

        setPopupInstance((instance) => instance + 1);
        setPopupSource(source);
        setIsPopupOpen(true);
    };

    const closePopup = (): void => {
        // Mark that the user intentionally closed the popup
        popupClosedRef.current = true;

        // Actually close the popup
        setIsPopupOpen(false);
    };

    return (
        <PopupContext.Provider
            value={{
                openPopup,
                closePopup,
                isPopupOpen,
            }}
        >
            {children}

            <PopupForm
                key={popupInstance}
                isOpen={isPopupOpen}
                onClose={closePopup}
                source={popupSource}
            />
        </PopupContext.Provider>
    );
}

export function usePopup(): PopupContextType {
    const context = useContext(PopupContext);

    if (!context) {
        throw new Error(
            "usePopup must be used within a PopupProvider"
        );
    }

    return context;
}
