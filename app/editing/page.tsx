import EditingPageClient from "@/components/sections/EditingPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Book Editing & Proofreading Services | The Collingwood Press",
    description:
        "Refine your manuscript with expert book editing services. We offer developmental editing, copyediting, line editing, and proofreading. Get a free sample edit!",
};

export default function Page() {
    return <EditingPageClient />;
}