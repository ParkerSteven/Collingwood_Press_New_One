import EditingPageClient from "@/components/pages/EditingPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.thecollingwoodpress.com/editing/' },
    title:
        "Book Editing & Proofreading Services | The Collingwood Press",
    description:
        "Refine your manuscript with expert book editing services. We offer developmental editing, copyediting, line editing, and proofreading. Get a free sample edit!",
};

export default function Page() {
    return <EditingPageClient />;
}