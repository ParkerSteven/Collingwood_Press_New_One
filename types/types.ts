import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type HeroButton = {
    text: string;
    href: string;
    variant?: "primary" | "outline" | "outline-white";
    showArrow?: boolean;
};

export type HeroBadge = {
    src: string;
    alt: string;
    href: string;
    width?: number;
    height?: number;
};

export interface HeroProps {
    className?: string;

    eyebrow?: string;

    title?: ReactNode;
    highlightText?: string;
    titleSuffix?: string;

    description?: ReactNode;

    firstButtonText?: string;
    secondButtonText?: string;
    buttons?: HeroButton[];
    actions?: ReactNode;

    badges?: HeroBadge[];
    badgeHeading?: string;
    showBadges?: boolean;

    guarantees?: any;

    rightContent?: ReactNode;
    children?: ReactNode;
}