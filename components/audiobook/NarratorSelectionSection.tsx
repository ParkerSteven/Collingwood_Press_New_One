
import { Mic2, ArrowRight, UserCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Image from "next/image";

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
            eyebrow="Narrator Casting"
            title={
              <>
                Professional Narrator or Author-Narrated:{" "}
                <span className="italic text-[#E7665D]">
                  Which Fits Your Book?
                </span>
              </>
            }
            description="The narrator is the single most important creative decision in audiobook production. The right voice brings the book to life. The wrong one makes listeners stop. We offer two paths, and your choice depends on genre, personal preference, timeline, and budget."
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
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30">
                <Mic2 size={22} />
              </span>

              <div className="flex-1">
                <h3 className="font-serif text-[1.2rem] pt-2 font-bold text-ink leading-snug mb-3">
                  Professional Narrator
                </h3>

                <p className="text-sm sm:text-sm text-ink-soft leading-relaxed">
                  For most fiction and nonfiction titles, a
                  professional narration performer produces the best
                  result. We cast from a roster of experienced
                  voice actor narration professionals and present you
                  with custom audition samples recorded from your
                  manuscript. You listen, compare, and select the voice
                  that fits your book. The narrator records in a
                  professional studio environment under direction from
                  an audio producer who monitors pronunciation,
                  pacing, and emotional consistency.
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
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30">
                <UserCheck size={22} />
              </span>

              <div className="flex-1">
                <h3 className="font-serif pt-2 text-[1.2rem] font-bold text-ink leading-snug mb-3">
                  Author-Narrated
                </h3>

                <p className="text-sm sm:text-sm text-ink-soft leading-relaxed">
                  For memoirs, personal nonfiction, and authors with
                  a strong public speaking presence, an author narrated
                  audiobook can be the right choice. We provide guided
                  recording support, pronunciation review, and the same
                  post-production and mastering pipeline that
                  professional narrator projects receive. The technical
                  quality of the finished files is identical regardless
                  of who reads.
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
