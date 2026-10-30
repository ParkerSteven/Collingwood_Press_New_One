import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { editingFAQs } from "@/lib/data";
import { CheckCircle2, ShieldCheck, FileCheck2 } from "lucide-react";

import SelfPublishedAuthors from "@/components/editing/SelfPublishedAuthors";
import EditingTiers from "@/components/editing/EditingTiers";
import EditingProcess from "@/components/editing/EditingProcess";
import EditingDeliverables from "@/components/editing/EditingDeliverables";
import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.thecollingwoodpress.com/editing/' },
    title: "Professional Book Editing Services | Your Words, Worth Publishing",
    description:
        "Professional book editing services including developmental editing, copyediting, line editing, and proofreading. Get a free sample edit and a clear quote.",
};

export default function Page() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">
                <HeroSection
                    className="editing-hero-gradient"
                    eyebrow="Professional Editorial Services"
                    title="Professional"
                    highlightText="Book Editing Services"
                    description={<p>Need more than a spell check before readers see your book? At The Collingwood Press, we offer proofreading, copyediting, line editing, and developmental editing so your book gets exactly what it needs.</p>}
                    firstButtonText="Get a Editing Quote"
                    secondButtonText="Schedule a Consultation"
                    guarantees={[
                        { text: "Experienced Trade Press Editors", icon: CheckCircle2 },
                        { text: "Chicago Manual of Style current edition", icon: ShieldCheck },
                        { text: "Track Changes & Direct Phone Consultations", icon: FileCheck2 },
                    ]}
                />
                <SelfPublishedAuthors />
                <EditingTiers />
                <EditingProcess />
                <EditingDeliverables />
                <FAQAccordion
                    items={editingFAQs}
                    eyebrow="Editing FAQ"
                    title={<>Frequently Asked Questions</>}
                    sectionId="editing-faq"
                />
                <FinalCTA
                    eyebrow="Start Your Edit"
                    title={<>Your Manuscript Is Ready{" "}<span className="block italic font-normal text-[#F08A82] sm:inline">for a Professional Editor.</span></>}
                    description={<>Send us your manuscript or your first 1,000 words. A senior editor will review the opening pages, tell you which editing levels your book needs, and provide a quote with a fixed price and a clear timeline. The sample edit is free. The quote is free. The conversation starts when you are ready.</>}
                    buttonText="Get a Quote for Your Manuscript"
                    buttonHref="/contact-us/#manuscript-review"
                />
            </main>
            <Footer />
        </>
    );
}