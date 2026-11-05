import ProductionIntroductionSection from "@/components/audiobook/ProductionIntroductionSection";
import NarratorSelectionSection from "@/components/audiobook/NarratorSelectionSection";
import ProductionStepsSection from "@/components/audiobook/ProductionStepsSection";
import AudiobookDeliverablesSection from "@/components/audiobook/AudiobookDeliverablesSection";
import StudioStandardsSection from "@/components/audiobook/StudioStandardsSection";
import AudiobookDistributionSection from "@/components/audiobook/AudiobookDistributionSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { audiobookFAQs } from "@/lib/data";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";

const defaultGuarantees = [
  "Professional Voice Actor Narrators",
  "ACX/Audible-Compliant Files",
  "Distribution to Audible, Spotify and Libraries",
];

const defaultTitle = (
  <>
    Professional Audiobook Production Services <br />
    <span className="text-[#E7665D] italic font-normal inline">
      for Authors
      <br className="hidden sm:block" />
    </span>
  </>
);

export default function AudiobookPage() {
  return (
    <>
      <main className="bg-white text-ink">
        <Hero
          className="audiobook-hero-gradient border-white/10 text-white"
          eyebrow="Studio-Grade Audiobook Production"
          title={defaultTitle}
          highlightText="Services for Authors"
          description="Most self-produced audiobooks lose listeners early because of flat narration, background noise, or files that fail platform checks. Our services cover narrator casting, studio recording, editing, mastering and distribution. You provide the manuscript. We deliver clean, distribution-ready files that sound like a published audiobook."
          firstButtonText="Get a Audiobook Quote"
          secondButtonText="Schedule a Consultation"
          guarantees={defaultGuarantees}
          showBadges={false}
        />
        <AudiobookDistributionSection />
        {/* <ProductionIntroductionSection /> */}
        <NarratorSelectionSection />
        <ProductionStepsSection />
        <AudiobookDeliverablesSection />
        <StudioStandardsSection />
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
              Ready to Turn Your Book into{" "}
              <span className="block italic font-normal text-[#F08A82] sm:inline">
                an Audiobook?
              </span>
            </>
          }
          description={
            <>
              Send us your manuscript. We’ll recommend the right narration approach and give you a quote with a clear timeline and fixed price.
            </>
          }
          buttonText="Get a Custom Production Quote"
          buttonHref="/contact-us/#manuscript-review"
        />
      </main>
    </>
  );
}
