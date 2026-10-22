import GhostwritingClientPage from "@/components/pages/GhostwritingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Professional Ghostwriting Services | The Collingwood Press",

    description:
        "Turn your story or business idea into a finished book. Our professional ghostwriting services match you with experienced ghostwriters. Full confidentiality. You retain all rights.",

    keywords: [
        // Primary Keywords
        "ghostwriting services",
        "professional ghostwriting services",
        "book ghostwriting services",

        // Genre-Specific Keywords
        "memoir ghostwriter",
        "memoir writing services",
        "business book ghostwriter",
        "fiction ghostwriter",
        "fiction ghostwriting services",
        "self-help book ghostwriter",
        "nonfiction ghostwriter",

        // Transactional Keywords
        "hire a ghostwriter",
        "ghostwriter for hire",
        "how much do ghostwriting services cost",
        "ghostwriting cost",
        "Get a Ghostwriting Quote",

        // Long-Tail FAQ Keywords
        "how long does it take to ghostwrite a book",
        "can I choose my ghostwriter",
        "what's included in ghostwriting services",
        "is ghostwriting confidential",
        "ghostwriting services for self-published authors",
        "can you work from a partial manuscript",
    ],

    openGraph: {
        title:
            "Professional Ghostwriting Services | The Collingwood Press",
        description:
            "Turn your story or business idea into a finished book. Our professional ghostwriting services match you with experienced ghostwriters. Full confidentiality. You retain all rights.",
        type: "website",
        siteName: "The Collingwood Press",
    },

    robots: {
        index: true,
        follow: true,
    },
};


export default function Page() {
    return <GhostwritingClientPage />;
}