
import { Mic2, ArrowRight, UserCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Image from "next/image";
import ProfessionalNarrator from "/CollingwoodPressIcons/ProfessionalNarrator.png";
import AuthorNarrated from "/CollingwoodPressIcons/AuthorNarrated.png";

export default function NarratorSelectionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-line">
      <Container className="flex flex-col gap-14 sm:gap-16">

        {/* Section Heading Animation */}
        <AnimatedReveal
          y={25}
          duration={0.7}
          amount={0.2}
        >
          <SectionHeading
            eyebrow="Choose Your Narrator"
            title={
              <>
                Professional Voice Actor{" "}
                <span className="italic text-[#E7665D]">
                  or Author-Narrated
                </span>
              </>
            }
            description="The narrator is the biggest creative decision. We offer two paths based on your genre, timeline and budget."
          />
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] gap-10 lg:gap-8 items-center mt-10 md:mt-16">

          {/* LEFT: Narration Options */}
          <div className="flex flex-col gap-8">

            {/* Professional Narrator */}
            <AnimatedReveal
              y={30}
              duration={0.65}
              delay={0.1}
              amount={0.2}
              className="flex items-start gap-5 py-6 border-t border-[#E7665D]/20"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5]">
                <Image
                  src="/CollingwoodPressIcons/ProfessionalNarrator.png"
                  alt="Professional Narrator"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-[1.2rem] pt-2 font-bold text-ink leading-snug mb-3">
                  Professional Audiobook Narrator
                </h3>

                <p className="text-sm sm:text-sm text-ink-soft leading-relaxed">
                  Best for most fiction and nonfiction. We cast from experienced voice actors and send custom audition samples recorded from your manuscript. You choose the voice. The narrator records in a professional studio with a producer monitoring pronunciation, pacing and consistency.
                </p>
              </div>
            </AnimatedReveal>

            {/* Author-Narrated */}
            <AnimatedReveal
              y={30}
              duration={0.65}
              delay={0.2}
              amount={0.2}
              className="flex items-start gap-5 py-6 border-t border-b border-[#E7665D]/20"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5]">
                <Image
                  src="/CollingwoodPressIcons/AuthorNarrated.png"
                  alt="Professional Narrator"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </span>
              <div className="flex-1">
                <h3 className="font-serif pt-2 text-[1.2rem] font-bold text-ink leading-snug mb-3">
                  Author-Narrated Audiobook
                </h3>

                <p className="text-sm sm:text-sm text-ink-soft leading-relaxed">
                  Better for memoirs, personal nonfiction and authors with a strong speaking presence. You get guided recording support and pronunciation review. Post-production quality stays the same as professional narrator projects.
                </p>
              </div>
            </AnimatedReveal>

            {/* CTA Buttons Animation */}
            <AnimatedReveal
              y={20}
              duration={0.6}
              delay={0.25}
              amount={0.2}
              className="flex flex-col sm:flex-row items-start gap-2 pt-2"
            >
              <Button
                href="/contact-us/#manuscript-review"
                variant="primary"
                size="lg"
              >
                <span>Request Narrator Samples</span>
                <ArrowRight size={15} />
              </Button>

              <Button
                href="/contact-us/#manuscript-review"
                variant="outline"
                size="lg"
              >
                <span>
                  Not Sure Which Narrator Fits? Ask Us
                </span>
              </Button>
            </AnimatedReveal>
          </div>

          {/* RIGHT: Audiobook Image Animation */}
          <AnimatedReveal
            y={35}
            duration={0.8}
            delay={0.2}
            amount={0.15}
            className="relative flex items-center justify-center py-10"
          >
            <div className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-3xl bg-[#fdf6f5] border border-[#E7665D]/15 -z-10" />

            <Image
              src="/audiobook_Asset.png"
              alt="Audiobook Book Editions Mockup"
              width={650}
              height={650}
              className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
