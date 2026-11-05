import { Mic2, Sliders, ArrowRight, FileAudio, UserCheck, Wand2, FileCheck2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
export default function ProductionStepsSection() {
  return (
    <section
      id="standards"
      className="hero-gradient py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden paper-grain"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">

          <AnimatedReveal y={24} duration={0.6} amount={0.2}>
            {/* Eyebrow */}
            <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
              The Production Pipeline
            </span>

            {/* H2 Heading */}
            <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight max-w-3xl">
              How Our Audiobook Production {" "}
              <span className="italic text-[#E7665D]">
                Process Works
              </span>
            </h2>

            {/* Introduction */}
            <p className="mt-4 text-sm sm:text-base mx-auto text-slate-300 leading-relaxed max-w-2xl">
              Every project follows the same production sequence.
              What the author provides is a finalized manuscript.
              What the author receives is a set of mastered,
              distribution-ready
              audio files.
            </p>

          </AnimatedReveal>

          {/* Production Steps */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">

            {/* Step 1 */}
            <AnimatedReveal as="article" y={24} duration={0.5} delay={0.00} amount={0.15} hoverY={-5} className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                  <FileAudio size={22} />
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                  Step 01
                </span>
              </div>

              <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                Manuscript Preparation
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                We mark up the manuscript with pronunciation keys, character notes and pacing cues.

              </p>
            </AnimatedReveal>

            {/* Step 2 */}
            <AnimatedReveal as="article" y={24} duration={0.5} delay={0.09} amount={0.15} hoverY={-5} className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                  <UserCheck size={22} />
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                  Step 02
                </span>
              </div>

              <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                Narrator Casting
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                We shortlist narrators and send custom audition samples from your manuscript so you can choose.
              </p>
            </AnimatedReveal>

            {/* Step 3 */}
            <AnimatedReveal as="article" y={24} duration={0.5} delay={0.18} amount={0.15} hoverY={-5} className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                  <Mic2 size={22} />
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                  Step 03
                </span>
              </div>

              <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                Studio Recording
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Sessions happen in isolated studios with a producer checking accuracy and energy.
              </p>
            </AnimatedReveal>

            {/* Step 4 */}
            <AnimatedReveal as="article" y={24} duration={0.5} delay={0.00} amount={0.15} hoverY={-5} className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                  <Wand2 size={22} />
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                  Step 04
                </span>
              </div>

              <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                Editing Production
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Editors proof-listen against the manuscript and remove clicks, breaths, retakes and noise.
              </p>
            </AnimatedReveal>

            {/* Step 5 */}
            <AnimatedReveal as="article" y={24} duration={0.5} delay={0.09} amount={0.15} hoverY={-5} className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                  <Sliders size={22} />
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                  Step 05
                </span>
              </div>

              <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                Audio Mastering
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Files are mastered to Audible/ACX specs and a human engineer listens through every file.
              </p>
            </AnimatedReveal>


            {/* Step 6 */}
            <AnimatedReveal as="article" y={24} duration={0.5} delay={0.18} amount={0.15} hoverY={-5} className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                  <FileCheck2 size={22} />
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                  Step 06
                </span>
              </div>

              <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                Final Review and Delivery
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                You review the files (one round of corrections included), then we format and upload.
              </p>
            </AnimatedReveal>

          </div>

          {/* Typical Timeline & CTA */}
          <AnimatedReveal y={20} duration={0.55} amount={0.2} className="mt-10 flex flex-col items-center text-center gap-6">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              <strong className="font-semibold text-white">
                Typical timeline:
              </strong>{" "}
              6 to 12 weeks from manuscript submission to finished files,
              depending on book length and narrator scheduling.
            </p>

            <Button
              href="/contact-us/#manuscript-review"
              variant="primary"
              size="lg"
            >
              <span className="whitespace-nowrap">
                Get a Timeline for Your Manuscript
              </span>
              <ArrowRight size={15} className="shrink-0" />
            </Button>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
