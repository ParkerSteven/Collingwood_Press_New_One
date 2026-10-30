import { Layers, Globe, ShieldCheck, Palette, FileSpreadsheet, FileText, Settings, Rocket, BookOpenCheck, PenLine, Layers3, Globe2, Truck, Image as ImageIcon, Database, Megaphone } from "lucide-react";

export const publishingRoadmap = [
    {
        number: "01",
        title: "Manuscript Preparation",
        tagline: "Editorial & Intake Sign-Off",
        description:
            "Your manuscript is reviewed, formatting issues are fixed, and a clean master document is prepared before design work begins.",
        milestone: "Certified Clean Master Document",
        icon: FileText,
    },
    {
        number: "02",
        title: "Cover & Interior Design",
        tagline: "Visual & Tactile Artistry",
        description:
            "Original cover artwork and a custom interior layout are created to match your genre and book type.",
        milestone: "Jacket Mechanicals & Sample Interior Spreads",
        icon: Palette,
    },
    {
        number: "03",
        title: "Formatting & Typesetting",
        tagline: "Adobe InDesign Precision",
        description:
            "The book is professionally typeset in Adobe InDesign. Print-ready and eBook files are prepared for review.",
        milestone: "Full Bound Galley Proof for Author Review",
        icon: Layers,
    },
    {
        number: "04",
        title: "Publishing Setup",
        tagline: "Identifiers & Legal Cataloguing",
        description:
            "ISBNs are registered in your name, barcodes are generated, and all cataloguing details (including BISAC categories and metadata) are completed. You remain the publisher of record.",
        milestone: "Official Global Catalogue Filings",
        icon: Settings,
    },
    {
        number: "05",
        title: "Trade Distribution",
        tagline: "Global Wholesale Ingestion",
        description:
            "Your book is distributed through Ingram and listed on Amazon KDP, Barnes & Noble, and other major platforms.",
        milestone: "Active Worldwide Bookseller Feed",
        icon: Globe,
    },
    {
        number: "06",
        title: "Launch & Release",
        tagline: "Publication Day Rollout",
        description:
            "Retail pages go live, physical and digital editions become available, and your book is ready for sale.",
        milestone: "Shelf-Ready Physical & Digital Book",
        icon: Rocket,
    },
];


export const services = [
    {
        id: 1,
        icon: FileText,
        title: "Book Editing & Proofreading",
        description:
            "Developmental editing, copyediting, line editing, and proofreading to prepare your manuscript for publishing.",
        href: "/editing",
        linkText: "Learn more: Book Editing Services",
    },
    {
        id: 2,
        icon: Rocket,
        title: "Book Marketing & Launch Strategy",
        description:
            "Amazon ads, reviewer outreach, and launch campaigns to help your book reach the right readers.",
        href: "/marketing",
        linkText: "Learn more: Book Marketing Services",
    },
    {
        id: 3,
        icon: BookOpenCheck,
        title: "Audiobook Production & Distribution",
        description:
            "Professional narration, studio recording, and distribution to Audible, Apple Books, and other platforms.",
        href: "/audiobook",
        linkText: "Learn more: Audiobook Production Services",
    },
];

export const publishingFeatures = [
    {
        id: 1,
        icon: ShieldCheck,
        title: "100% Copyright & Royalty Retention",
        description:
            "You keep full ownership of your book and 100% of the royalties. This is written into every agreement.",
    },
    {
        id: 2,
        icon: BookOpenCheck,
        title: "You Are the Publisher of Record",
        description:
            "ISBNs and retail accounts are registered in your name. We never list ourselves as the publisher.",
    },
    {
        id: 3,
        icon: FileSpreadsheet,
        title: "Transparent Pricing",
        description:
            "No hidden fees. You review and approve the plan, timeline, and cost before any work begins.",
    },
    {
        id: 4,
        icon: FileText,
        title: "Author Sign-Off",
        description:
            "No book goes live without your approval on the final galley proof.",
    },
];

export const phaseIcons = [
    FileText,
    PenLine,
    Layers3,
    Globe2,
    Truck,
    Rocket,
];

export const milestoneIcons = [
    FileText,
    ImageIcon,
    FileText,
    Database,
    Megaphone,
    Rocket,
];

export const retailers: { name: string; slug?: string; img: string; color: string }[] = [
    { name: "Amazon", img: "/amazon.png", color: "FF9900" },
    { name: "Barnes & Noble", img: "/b&n.svg", color: "00704A" },
    { name: "Apple Books", img: "/applebook.webp", color: "000000" },
    { name: "Google Play Books", img: "/google-play-books.png", color: "4285F4" },
    { name: "Kobo", img: "/kobo.png", color: "F68B1E" },
    // { name: "Goodreads", img: "/goodreads.svg", color: "553B08" },
    { name: "Scribd", img: "/scribd.svg", color: "1E7B85" },
    { name: "IngramSpark", img: "/ingramSpark.png", color: "1F3A2E" },
    { name: "OverDrive", img: "/overdrive.svg", color: "0D65A6" },
    { name: "Books-A-Million", img: "/bam.png", color: "C8102E" },
    // { name: "Lulu", img: "/lulu.svg", color: "E63946" },
    { name: "Smashwords", img: "/sw.png", color: "F5A623" },
];
