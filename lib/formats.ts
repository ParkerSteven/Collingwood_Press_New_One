import { Book, Layers, Sparkles, type LucideIcon } from "lucide-react";

export interface PublicationFormat {
    title: string;
    tagline: string;
    specs: string;
    icon: LucideIcon;
    badge: string;
}

export const formats: PublicationFormat[] = [
    {
        title: "Collector-Grade Hardcovers",
        tagline: "Archival Physical Presence",
        specs: "Archival Smyth-sewn binding with rich linen cloth or printed dust jacket, gold foil spine stamping, head & tail bands, and optional custom endpapers.",
        icon: Book,
        badge: "Trade Hardcover",
    },
    {
        title: "French-Fold Trade Paperbacks",
        tagline: "Everyday Commercial Elegance",
        specs: "Premium 60lb/70lb natural cream interior paper, velvet soft-touch matte lamination, scoring on hinges, and optional embossed spot UV lettering.",
        icon: Layers,
        badge: "Trade Paperback",
    },
    {
        title: "Mastered Reflowable ePubs",
        tagline: "Universal Screen Fidelity",
        specs: "Hand-coded valid ePub3 and Kindle formats tailored for responsive font scaling, high-DPI tablets, dynamic TOCs, and cross-platform fidelity.",
        icon: Sparkles,
        badge: "Digital ePub3",
    },
];
