import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatBar from "@/components/sections/StatBar";
import PlatformLogos from "@/components/sections/PlatformLogos";
import Testimonials from "@/components/sections/Testimonials";
import TrustBand from "@/components/sections/TrustBand";
import ServicesGrid from "@/components/sections/ServicesGrid";
import MarketingServices from "@/components/sections/MarketingServices";
import ManuscriptCTA from "@/components/sections/ManuscriptCTA";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { faqs, stats } from "@/lib/data";
import HomeBlogs from "@/components/sections/HomeBlogs";
import BookCarousel from "@/components/sections/BookCovers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Book Publishing & Author Services | The Collingwood Press",

  description:
    "Publish your book with confidence. The Collingwood Press offers professional book publishing, ghostwriting, editing, marketing, and audiobook services for authors.",

  alternates: {
    canonical: "https://www.thecollingwoodpress.com/",
  },

  keywords: [
    "book publishing services",
    "professional book publishing company",
    "book publishing company",
    "author publishing services",
    "ghostwriting services",
    "book editing services",
    "book marketing services",
    "audiobook publishing",
    "publish your book",
    "self publishing services",
    "book publishers for new authors",
  ],

  openGraph: {
    title:
      "Book Publishing & Author Services | The Collingwood Press",
    description:
      "Professional book publishing, ghostwriting, editing, marketing, and audiobook services to help authors bring their books to life.",
    url: "https://www.thecollingwoodpress.com/",
    siteName: "The Collingwood Press",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Book Publishing & Author Services | The Collingwood Press",
    description:
      "Publish your book with professional publishing, editing, ghostwriting, and marketing support.",
  },

  robots: {
    index: true,
    follow: true,
  },
};



export default function Home() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <Hero />
        <StatBar stats={stats} />
        <PlatformLogos />
        <Testimonials />
        <TrustBand />
        <ServicesGrid />
        {/* <CoverSpotlight /> */}
        <BookCarousel />
        {/* <ProjectManagers /> */}
        {/* <Catalog /> */}
        {/* <RelatedCarousel /> */}
        <MarketingServices />
        <ManuscriptCTA />
        <FAQAccordion
          items={faqs}
          eyebrow="What Authors Want to Know"
          title={
            <>
              Book Publishing FAQs:{" "}
              <span className="italic text-[#E7665D]">
                What Authors Ask Before They Start
              </span>
            </>
          }
          sectionId="faq"
        />
        <HomeBlogs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
