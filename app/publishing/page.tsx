import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, ShieldCheck, BookOpenCheck } from "lucide-react";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { publishingFAQs } from "@/lib/data";
import PublishingDistribution from "@/components/publishing/PublishingDistribution";
import PublishingRoadmap from "@/components/publishing/PublishingRoadmap";
import PublishingFormats from "@/components/publishing/PublishingFormats";
import PublishingAdvantages from "@/components/publishing/PublishingAdvantages";
import RelatedAuthorServices from "@/components/publishing/RelatedAuthorServices";
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.thecollingwoodpress.com/publishing/' },
    title:
        "Book Publishing Services for First-Time Authors",
    description:
        "Turn your manuscript into a published book with our book publishing services, including formatting, cover design, ISBN, Amazon KDP, and global distribution.",
};


const defaultTitle = (
    <>
        Professional Book Publishing Services for <br />
        <span className="text-[#E7665D] italic font-normal inline">
            First-Time Authors
            <br className="hidden sm:block" />
        </span>
    </>
);

export default function PublishingPage() {
    return (
        <>
            <UtilityBar />
            <Header />
            <main className="bg-white text-ink">
                <Hero
                    className="publishing-hero-gradient"
                    eyebrow="Full-Service Independent Trade Publishing"
                    title={defaultTitle}
                    highlightText="Ghostwriting Services"
                    titleSuffix=""
                    description="You wrote the book. Now let’s publish it the right way. Our book publishing services turn your raw draft into a retail-ready hardcover, paperback, and eBook. We handle the full production process while you retain 100% of your copyright and royalties."
                    firstButtonText="Submit Manuscript for Publishing"
                    secondButtonText="Explore The 6-Step Journey"
                    guarantees={[
                        { text: "Ingram Global Wholesale Distribution", icon: CheckCircle2 },
                        { text: "100% Author Copyright & Royalties", icon: ShieldCheck },
                        { text: "Custom InDesign Craftsmanship", icon: BookOpenCheck },
                    ]}
                    showBadges={false}
                />
                <PublishingDistribution />
                <PublishingRoadmap />
                <PublishingFormats />
                <PublishingAdvantages />
                <RelatedAuthorServices />
                <FAQAccordion
                    items={publishingFAQs}
                    eyebrow="Publishing FAQ"
                    title={<>Frequently Asked Questions</>}
                    sectionId="publishing-faq"
                />
                <FinalCTA
                    eyebrow="Start Publishing Today"
                    title={
                        <>
                            Your Manuscript Is Ready.{" "}
                            <span className="block italic font-normal text-[#F08A82] sm:inline">
                                Let Us Publish It.
                            </span>
                        </>
                    }
                    description={
                        <>
                            Send us your manuscript or your opening chapters. A senior editor will review your work and provide a candid, no-obligation assessment of where it stands and what it needs. Whether you are weeks from publication or still refining your first draft, our{" "}
                            <strong className="font-semibold text-white">book publishing services</strong>{" "}
                            team will map the clearest path from manuscript to marketplace. The right publishing partner makes all the difference, and we are ready to prove it.
                        </>
                    }
                    buttonText="Submit Manuscript for Free Editorial Review"
                    buttonHref="/contact-us/#manuscript-review"
                />
            </main>
            <Footer />
        </>
    );
}