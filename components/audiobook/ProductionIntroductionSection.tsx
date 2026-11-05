
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function ProductionIntroductionSection() {
  return (
    <section
      id="production-process"
      className="pt-18 pb-6 lg:pt-20 lg:pb-4 bg-[#fdfbf7] border-b border-line"
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

            <h2 className="mt-4 display text-[2.1rem] sm:text-[2.6rem] leading-[1.14] text-ink max-w-2xl">
              Why Professional Audiobook{" "}
              <em className="italic text-[#E7665D]">
                Production Matters
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
                Home recording usually fails. Untreated rooms add echo, consumer microphones capture air conditioning and mouth clicks, and files without proper mastering get rejected by Audible. Narration is also a performance skill. Reading a full book with steady energy, clear character voices and emotional range is different from writing it. Weak narration causes drop-off and poor reviews. Professional production gives you trained voice talent, a controlled studio and files that meet platform standards the first time.
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
