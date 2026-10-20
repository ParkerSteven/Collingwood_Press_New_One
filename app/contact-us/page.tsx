import ContactUsClientPage from "@/components/sections/ContactUsClientPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | The Collingwood Press",
    description:
        "Let's talk about your book. Contact The Collingwood Press for publishing inquiries, audiobook quotes, and manuscript submissions.",
};

export default function ContactUsPage() {
    return <ContactUsClientPage />;
}
