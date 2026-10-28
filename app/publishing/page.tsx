import PublishingClient from "@/components/pages/PublishingClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.thecollingwoodpress.com/publishing/' },
    title:
        "Book Publishing Services for First-Time Authors | The Collingwood Press",
    description:
        "Turn your manuscript into a published book. Our book publishing services include formatting, cover design, ISBN, Amazon KDP, and global distribution. Speak to a publisher!",
};

export default function PublishingPage() {
    return <PublishingClient />;
}