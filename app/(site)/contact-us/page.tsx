
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactOptionsSection from "@/components/contact/ContactOptionsSection";
import HeroSection from "@/components/sections/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.thecollingwoodpress.com/contact-us/' },
    title: "Contact Us",
    description:
        "Let's talk about your book. Contact The Collingwood Press for publishing inquiries, audiobook quotes, and manuscript submissions.",
};

export default function ContactUsPage() {
    return (
        <>
            <main className="bg-white text-ink">
                <HeroSection
                    className="about-hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white"
                    eyebrow="Contact Our Publishing Team"
                    title="Let's Talk About"
                    highlightText="Your Book."
                    description={
                        <p>
                            We respond to every inquiry within 1 business day.
                            Share your vision, questions, or manuscript our
                            team is ready to help.
                        </p>
                    }
                    buttons={[]}
                    guarantees={[]}
                />
                <ContactOptionsSection />
                <ContactFormSection />
            </main>
        </>
    );
}
