
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ghostwritingFAQs } from "@/lib/data";
import WhoWeWriteFor from "@/components/ghostwriting/WhoWeWriteFor";
import GhostwritingGenres from "@/components/ghostwriting/GhostwritingGenres";
import GhostwritingProcess from "@/components/ghostwriting/GhostwritingProcess";
import GhostwritingDeliverables from "@/components/ghostwriting/GhostwritingDeliverables";
import HumanGhostwriting from "@/components/ghostwriting/HumanGhostwriting";
import GhostwritingPricing from "@/components/ghostwriting/GhostwritingPricing";
import type { Metadata } from "next";
import UtilityBar from "@/components/layout/UtilityBar";
import HeroSection from "@/components/sections/HeroSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.thecollingwoodpress.com/ghostwriting/' },
    title:
        "Professional Ghostwriting Services | Your Expertise, Written into a Book",

    description:
        "Turn your ideas into a book with professional ghostwriting services. Work with experienced writers, retain full rights, and keep your story confidential.",
};
const defaultGuarantees = [
    "100% Confidential",
    "Professional Ghostwriters",
    "Full Copyright Ownership",
];
const defaultTitle = (
    <>
        Professional <br />
        <span className="text-[#E7665D] italic font-normal inline">
            Ghostwriting Services
            <br className="hidden sm:block" />
        </span>
    </>
);

export default function Page() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">
                <Hero
                    className="ghost-hero-gradient border-white/10 text-white"
                    eyebrow="Confidential Collaborative Ghostwriting"
                    title={defaultTitle}
                    highlightText="Ghostwriting Services"
                    titleSuffix=""
                    description="Bring your book idea to life with professional ghostwriting services. Work with experienced writers who understand your vision, capture your voice, and help turn your ideas into a professionally written manuscript."
                    firstButtonText="Get a Ghostwriting Quote"
                    secondButtonText="Schedule a Consultation"
                    guarantees={defaultGuarantees}
                    showBadges={false}
                />
                <WhoWeWriteFor />
                <GhostwritingGenres />
                <GhostwritingProcess />
                <GhostwritingDeliverables />
                <HumanGhostwriting />
                <GhostwritingPricing />
                <FAQAccordion
                    items={ghostwritingFAQs}
                    eyebrow="Ghostwriting FAQ"
                    title={<>Frequently Asked Questions </>}
                    sectionId="editing-faq"
                />
                <FinalCTA
                    eyebrow="Start Your Book"
                    title={
                        <>
                            Ready to Hire a Ghostwriter{" "}
                            <span className="block italic font-normal text-[#F08A82] sm:inline">for Your Book?</span>
                        </>
                    }
                    description={
                        <>
                            Tell us about your project. A consultation call will cover
                            your subject, your goals, your timeline, and how involved
                            you want to be in the writing process. From there, we
                            will recommend the right ghostwriter, scope the project,
                            and provide a clear quote. The conversation is free and
                            confidential.
                        </>
                    }
                    buttonText="Get a Ghostwriting Quote"
                    buttonHref="/contact-us/#manuscript-reviewave questions"
                />
            </main>
            <Footer />
        </>

    );
}