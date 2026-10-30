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
    "Trusted Book Publishing Company | The Collingwood Press",

  description:
    "Looking for a book publishing company? Get writing, editing, publishing, marketing, distribution, and audiobook production with The Collingwood Press.",

  alternates: {
    canonical: "https://www.thecollingwoodpress.com/",
  },
};

export default function Home() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <Hero className="hero-section-background" />
        <StatBar stats={stats} />
        <PlatformLogos />
        <Testimonials />
        <TrustBand />
        <ServicesGrid />
        <BookCarousel />
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
