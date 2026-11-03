
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function ProductionIntroductionSection() {
  return (
    <section
      id="production-process"
      className="py-20 lg:py-20 bg-[#fdfbf7] border-b border-line"
    >
      {/* First Introduction */}
      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-12 pb-4">
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow + Heading Animation */}
          <AnimatedReveal
            y={25}
            duration={0.7}
            amount={0.2}
            className="flex flex-col items-center"
          >
            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
              The Problem with Home Recording
            </span>

            <h2 className="mt-4 display text-[2.1rem] sm:text-[2.6rem] leading-[1.14] text-ink max-w-xl">
              Why Most DIY Audiobooks{" "}
              <em className="italic text-[#E7665D]">
                Lose Listeners
              </em>
            </h2>
          </AnimatedReveal>

          {/* Paragraphs With Staggered Animation */}
          <div className="mt-5 pb-20 flex flex-col gap-4 text-sm sm:text-base text-ink-muted text-center max-w-3xl mx-auto leading-relaxed font-sans">

            <AnimatedReveal
              y={20}
              duration={0.6}
              delay={0.1}
              amount={0.2}
            >
              <p>
                Recording an audiobook at home sounds simple until
                you try it. Untreated rooms produce echo and
                inconsistent tone. Consumer microphones pick up air
                conditioning, keyboard noise, and mouth clicks that
                listeners notice immediately. Without proper
                post-production and audio mastering, the finished
                files often fail Audible&apos;s technical review
                and get sent back for corrections.
              </p>
            </AnimatedReveal>

            <AnimatedReveal
              y={20}
              duration={0.6}
              delay={0.2}
              amount={0.2}
            >
              <p>
                Even when the recording itself is clean, narration
                is a performance skill. Reading a 60,000-word book
                aloud with consistent energy, character distinction,
                and emotional range is a different discipline from
                writing one. Poor narration leads to listener
                drop-off, low completion rates, and negative reviews
                that follow your book permanently.
              </p>
            </AnimatedReveal>

            <AnimatedReveal
              y={20}
              duration={0.6}
              delay={0.3}
              amount={0.2}
            >
              <p>
                Professional audiobook production solves both
                problems. You get trained voice talent, a controlled
                acoustic environment, and technical delivery that
                meets platform standards the first time.
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </div>

      {/* Full-Service Production Introduction */}
      <Container className="flex flex-col gap-14 sm:gap-16">
        <div className="flex flex-col items-center text-center">

          {/* Second Heading Animation */}
          <AnimatedReveal
            y={25}
            duration={0.7}
            amount={0.2}
          >
            <SectionHeading
              eyebrow="Full-Service Production"
              title={
                <>
                  Audiobook Production Services for Authors{" "}
                  <span className="italic text-[#E7665D]">
                    Who Want It Done Right
                  </span>
                </>
              }
            />
          </AnimatedReveal>

          {/* Second Content */}
          <div className="mt-6 max-w-3xl mx-auto flex flex-col gap-4 text-sm sm:text-base text-ink-muted leading-relaxed font-sans">

            <AnimatedReveal
              y={20}
              duration={0.6}
              delay={0.1}
              amount={0.2}
            >
              <p>
                Our audiobook creation services are designed for
                authors who want a finished product without managing
                freelance narrators, renting studio time, or
                learning audio engineering. We handle the full
                production pipeline: manuscript preparation,
                voice actor narration casting, studio recording,
                editing, mastering, quality control, and platform
                delivery.
              </p>
            </AnimatedReveal>

            <AnimatedReveal
              y={20}
              duration={0.6}
              delay={0.2}
              amount={0.2}
            >
              <p>
                The service works for self-published authors, indie
                authors with multiple titles, and traditionally
                published writers adding audio to their catalog.
                If your book is already published in print or ebook,
                audiobook production is a standalone project.
                The manuscript does not need to be republished.
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
