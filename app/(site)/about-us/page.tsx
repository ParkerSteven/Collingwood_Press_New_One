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
    title: "About Us | Book Publishing Company | The Collingwood Press",

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
const defaultDescription = (
    <>
        <span className="text-white  text-base font-semibold">Helping authors bring their stories to life.</span>
        <br />
        Founded in 2009, The Collingwood Press helps independent authors bring their books to life through professional ghostwriting, editing, publishing, marketing, and audiobook production. We combine expert support with personalized service, ensuring authors retain control of their work, copyright, and royalties.<br />
        <span className="text-white text-base font-semibold">Your book. Your rights. Your publishing journey.</span>
    </>
);


export default function AboutUsPage() {
    return (
        <>
            <main className="bg-white text-ink">
                <HeroSection
                    className="about-hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white"
                    eyebrow="Founded in 2009. Subsidiary of Hambone Publishers LLC."
                    title="A Book Publishing Company"
                    highlightText="Built Around the Author"
                    description={defaultDescription}
                    button={false}
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
