import { AboutStats, aiPolicyData, partners } from "@/lib/data";
import {
    ShieldCheck,
    Award,
    BookOpen,
    MessageCircle
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import StatBar from "@/components/sections/StatBar";
import MarketingServices from "@/components/sections/MarketingServices";
import HeritageEthosSection from "@/components/about/HeritageEthosSection";
import CoreValuesSection from "@/components/about/CoreValueSection";
import PartnersAffiliationsSection from "@/components/about/PartnersAffiliationsSection";
import AiResourcesSection from "@/components/about/AiResourcesSection";


export const metadata = {
    title: "About Us | Book Publishing Company",

    description:
        "Learn about The Collingwood Press, an independent book publishing company offering professional editing, design, publishing and distribution with 100% author ownership.",

    alternates: {
        canonical: "https://www.thecollingwoodpress.com/about-us/",
    },
};

const coreValues = [
    {
        icon: BookOpen,
        title: "Editorial Honesty",
        desc: "We provide honest, constructive feedback to help every manuscript reach its full potential.",
    },
    {
        icon: Award,
        title: "Production Quality",
        desc: "From custom book design to final proofing, we maintain professional production standards.",
    },
    {
        icon: ShieldCheck,
        title: "Author Ownership",
        desc: "Authors retain ownership of their copyright, master files, and royalties, as outlined in their publishing agreements.",
    },
    {
        icon: MessageCircle,
        title: "Direct Communication",
        desc: "Every author receives direct guidance and support from a dedicated publishing professional.",
    },
];

export default function AboutUsPage() {
    return (
        <>
            <main className="bg-white text-ink">
                <HeroSection
                    className="about-hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white"
                    eyebrow="Founded in 2009. Subsidiary of Hambone Publishers LLC."
                    title="A Book Publishing Company"
                    highlightText="Built Around the Author"
                    description={
                        <p>
                            Founded in 2009, The Collingwood Press helps independent authors turn their manuscripts into professionally published books. We provide comprehensive book publishing services, including ghostwriting, editing, book design, publishing, marketing, and audiobook production.

                            Our approach combines professional publishing standards with personalized support, giving authors greater control over their work, copyright, and royalties.
                        </p>
                    }
                    guarantees={[]}
                />
                <StatBar stats={AboutStats} />
                <HeritageEthosSection />
                <CoreValuesSection coreValues={coreValues} />
                <MarketingServices />
                <PartnersAffiliationsSection partners={partners} />
                <AiResourcesSection aiPolicyData={aiPolicyData} />
            </main>
        </>
    );
}
