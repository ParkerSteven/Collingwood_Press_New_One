import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import MarketingServicesSection from "@/components/marketing/MarketingServicesSection";
import MarketingProcessSection from "@/components/marketing/MarketingProcessSection";
import AuthorBrandingSection from "@/components/marketing/AuthorBrandingSection";
import MarketingPackagesSection from "@/components/marketing/MarketingPackagesSection";
import type { Metadata } from "next";
import { marketingFAQs, marketingHeroProps } from "@/lib/marketingData";

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.thecollingwoodpress.com/marketing/' },
    title: "Book Marketing Services | Share Your Story with the World",
    description:
        "Book marketing services built to sell more copies: Amazon Ads, BookTok, media PR, and launch campaigns. Get your custom marketing plan today.",
};

export default function Page() {
    return (
        <>
            <UtilityBar />
            <Header />

            <main className="bg-white text-ink">
                {/* Shared Hero - marketing props */}
                <HeroSection {...marketingHeroProps} />

                <MarketingServicesSection />
                <MarketingProcessSection />
                <AuthorBrandingSection />
                <MarketingPackagesSection />

                {/* Shared FAQ */}
                <FAQAccordion
                    items={marketingFAQs}
                    eyebrow="Marketing FAQ"
                    title="Frequently Asked Questions"
                    sectionId="marketing-faq"
                />

                {/* Shared CTA - marketing props */}
                <FinalCTA eyebrow="Start Your Campaign"
                    title={
                        <>
                            Your Book Needs Readers.{" "}
                            <span className="block italic font-normal text-[#F08A82] sm:inline">
                                Let&apos;s Build the Plan.
                            </span>
                        </>
                    }
                    description={
                        <>
                            Send us your book or tell us about the title you are
                            preparing to launch. A{" "}
                            book marketing consultant
                            on our team will review your genre positioning, your
                            current market presence, and your goals, then deliver
                            a clear assessment of what a results-driven campaign
                            would look like for your title. The plan is free.
                            The conversation starts when you are ready.
                        </>
                    }
                    buttonText="Get Your Custom Marketing Plan"
                    buttonHref="/contact-us/#manuscript-reviewave questions" />
            </main>

            <Footer />
        </>
    );
}
