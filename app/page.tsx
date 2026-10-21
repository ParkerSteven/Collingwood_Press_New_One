import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatBar from "@/components/sections/StatBar";
import PlatformLogos from "@/components/sections/PlatformLogos";
import Testimonials from "@/components/sections/Testimonials";
import TrustBand from "@/components/sections/TrustBand";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CoverSpotlight from "@/components/sections/CoverSpotlight";
import ProjectManagers from "@/components/sections/ProjectManagers";
import Catalog from "@/components/sections/Catalog";
import RelatedCarousel from "@/components/sections/RelatedCarousel";
import MarketingServices from "@/components/sections/MarketingServices";
import ManuscriptCTA from "@/components/sections/ManuscriptCTA";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { faqs, stats } from "@/lib/data";
import HomeBlogs from "@/components/sections/HomeBlogs";

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
        <CoverSpotlight />
        <ProjectManagers />
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
