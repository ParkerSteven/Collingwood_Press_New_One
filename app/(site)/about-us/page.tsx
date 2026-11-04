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
import EditorialBlogSection from "@/components/about/EditorialBlogSection";
import AiResourcesSection from "@/components/about/AiResourcesSection";


export const metadata = {
    title: "About Us | Book Publishing Company",

    description:
        "Learn about The Collingwood Press, an independent book publishing company offering professional editing, design, publishing and distribution with 100% author ownership.",

    alternates: {
        canonical: "https://www.thecollingwoodpress.com/about-us/",
    },
};


const blogArticles = [
    {
        title: "Developmental Editing vs Manuscript Assessment: Which Do You Need?",
        excerpt:
            "A manuscript assessment delivers a high-level, big-picture report on your book’s strengths and weaknesses. ",
        date: "October 15, 2026",
        href: "https://www.thecollingwoodpress.com/blogs/developmental-editing-vs-manuscript-assessment",
    },
    {
        title: "How to Prepare a Manuscript for an Editor: 2026 Checklist",
        excerpt:
            "To prepare a manuscript for an editor, finish your draft, self-edit, collect beta reader feedback, format in a clean",
        date: "October 14, 2026",
        href: "https://www.thecollingwoodpress.com/blogs/prepare-a-manuscript-for-an-editor",
    },
    {
        title: "Book Marketing Guide 2026: Process, Costs & Strategies to Sell More Books",
        excerpt:
            "Book marketing in 2026 requires shifting away from outdated keyword tricks to master algorithmic visibility and build independent.",
        date: "June 2026",
        href: "https://www.thecollingwoodpress.com/blogs/book-marketing-guide",
    },
];



const coreValues = [
    {
        icon: BookOpen,
        title: "Editorial Honesty",
        desc: "Your editor tells you what the manuscript needs, not what you want to hear. Good editing means challenging the work where it falls short and supporting it where it succeeds. We do not offer generic approval or surface-level checks.",
    },
    {
        icon: Award,
        title: "Production Quality",
        desc: "Books are physical and digital products that readers judge on appearance, feel, and readability. We typeset interiors in InDesign, design covers as original compositions, and review printed proofs before a book reaches retail. Templates and automated conversions are not part of our process.",
    },
    {
        icon: ShieldCheck,
        title: "Author Ownership",
        desc: "You retain 100% of your copyright, your master files, and every dollar of net royalties. The ISBN is registered in your name. The retail accounts belong to you. We never take a share of your sales or assign rights to ourselves.",
    },
    {
        icon: MessageCircle,
        title: "Direct Communication",
        desc: "Every author works with a named editor who is available by phone and email throughout the project. You are never handed off to a support team or routed through an automated system. Your editor knows your book because they read it.",
    },
];

export default function AboutUsPage() {
    return (
        <>
            <main className="bg-white text-ink">
                {/* Hero */}

                <HeroSection
                    className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white"
                    eyebrow="Founded in 2009. Subsidiary of Hambone Publishers LLC."
                    title="A Book Publishing Company"
                    highlightText="Built Around the Author"
                    description={
                        <p>
                            The Collingwood Press was founded on a straightforward
                            idea: independent authors should have access to the
                            same editorial standards, production quality, and
                            global distribution that traditional publishing houses
                            provide, without giving up their copyright or their
                            royalties. We are a full-service{" "}
                            book publishing company that handles
                            ghostwriting, editing, design, publishing, marketing,
                            and audiobook production under one roof. You keep
                            ownership of your work. We do the production.
                        </p>
                    }
                    buttons={[
                        {
                            text: "Meet Our Publishing Directors",
                            href: "/#publishing-team",
                            variant: "primary",
                            showArrow: true,
                        },
                        {
                            text: "Contact Our Editorial Desk",
                            href: "/contact-us/#manuscript-reviewave questions",
                            variant: "outline-white",
                        },
                    ]}
                    guarantees={[]}
                />
                <StatBar stats={AboutStats} />
                <HeritageEthosSection />
                <CoreValuesSection coreValues={coreValues} />
                <MarketingServices />
                <PartnersAffiliationsSection partners={partners} />
                <EditorialBlogSection blogArticles={blogArticles} />

                <AiResourcesSection aiPolicyData={aiPolicyData} />
            </main>
        </>
    );
}
