import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductionIntroductionSection from "@/components/audiobook/ProductionIntroductionSection";
import NarratorSelectionSection from "@/components/audiobook/NarratorSelectionSection";
import ProductionStepsSection from "@/components/audiobook/ProductionStepsSection";
import AudiobookDeliverablesSection from "@/components/audiobook/AudiobookDeliverablesSection";
import StudioStandardsSection from "@/components/audiobook/StudioStandardsSection";
import AudiobookDistributionSection from "@/components/audiobook/AudiobookDistributionSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { audiobookFAQs } from "@/lib/data";
import FinalCTA from "@/components/sections/FinalCTA";
import HeroSection from "@/components/sections/HeroSection";
import { Headphones, Mic2, ShieldCheck } from "lucide-react";

export default function AudiobookPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="bg-white text-ink">
        <HeroSection
          className="audiobook-hero-gradient"
          eyebrow="Studio-Grade Audiobook Production"
          title="Professional Audiobook Production"
          highlightText="That Keeps Listeners Engaged"
          description={
            <p>
              Most self-produced audiobooks lose listeners in the
              first ten minutes. The narration is flat, the recording
              has background noise, or the audio fails platform
              technical requirements and gets rejected on upload.
              These are production problems, and they are why
              professional audiobook production exists. Our
              audiobook production services handle everything from
              narrator casting and studio recording to audio
              mastering and distribution to Audible, Apple Books,
              Spotify, and 40+ additional platforms. You provide
              the manuscript. We deliver distribution-ready
              chapter files that meet every technical standard
              and sound the way a published audiobook should.
            </p>
          }
          buttons={[
            {
              text: "Audition Narrators for Your Book",
              href: "/contact-us/#manuscript-review",
              variant: "primary",
              showArrow: true,
            },
            {
              text: "Explore the Production Process",
              href: "#production-process",
              variant: "outline-white",
            },
          ]}
          guarantees={[
            {
              text: "SAG-AFTRA Professional Narrators",
              icon: Mic2,
            },
            {
              text: "100% Guaranteed ACX / Audible Acceptance",
              icon: ShieldCheck,
            },
            {
              text: "Distributed to Audible, Spotify & Libraries",
              icon: Headphones,
            },
          ]}
        />
        <ProductionIntroductionSection />
        <NarratorSelectionSection />
        <ProductionStepsSection />
        <AudiobookDeliverablesSection />
        <StudioStandardsSection />
        <AudiobookDistributionSection />
        <FAQAccordion
          items={audiobookFAQs}
          eyebrow="Audiobook FAQ"
          title={
            <>
              Frequently Asked Questions{" "}

            </>
          }
          sectionId="audiobook-faq"
        />
        <FinalCTA
          eyebrow="Start Production"
          title={
            <>
              Get Your Audiobook Produced{" "}
              <span className="block italic font-normal text-[#F08A82] sm:inline">
                Without the Hassle
              </span>
            </>
          }
          description={
            <>
              Send us your manuscript. We will review it, recommend
              the right narration approach, and provide a quote
              with a clear timeline and fixed price. If you want
              to hear narrator options first, we can arrange
              audition samples before you commit to anything.
              The conversation starts when you are ready.
            </>
          }
          buttonText="Get a Custom Production Quote"
          buttonHref="/contact-us/#manuscript-review"
        />
      </main>
      <Footer />
    </>
  );
}
