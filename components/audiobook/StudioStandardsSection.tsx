import { Headphones, Sliders, ShieldCheck, Volume2, FileAudio, FileCheck2 } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function StudioStandardsSection() {
  return (
    <section
      id="studio-standards"
      className="py-20 lg:py-28 bg-white border-b border-line"
    >
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <AnimatedReveal y={16} duration={0.5} amount={0.2}>
            <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
              Technical Specifications
            </span>
          </AnimatedReveal>

          <AnimatedReveal y={20} duration={0.55} delay={0.08} amount={0.2}>
            <h2 className="mt-4 max-w-xl font-serif text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
              Studio Standards That Meet{" "}
              <span className="italic text-[#E7665D]">
                Platform Requirements
              </span>
            </h2>
          </AnimatedReveal>

          <AnimatedReveal y={18} duration={0.55} delay={0.14} amount={0.2}>
            <p className="mt-5 text-sm sm:text-base text-ink-muted leading-relaxed">
              Audible and ACX reject files that do not meet their technical
              specifications. Other platforms have their own requirements. Our
              audiobook recording services produce files that comply with all of
              them.
            </p>
          </AnimatedReveal>
        </div>

        {/* Technical Specifications Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* RMS Levels */}
          <AnimatedReveal as="article" y={24} duration={0.5} delay={0} amount={0.15} hoverY={-5} className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-[border-color,box-shadow] duration-300">
            <div className="flex items-center justify-between mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                <Volume2 size={23} />
              </span>
              <span className="font-serif text-2xl text-ink-muted/30">01</span>
            </div>
            <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">RMS Levels</h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              -23dB to -18dB, consistent across all chapters.
            </p>
          </AnimatedReveal>

          {/* Peak Headroom */}
          <AnimatedReveal as="article" y={24} duration={0.5} delay={0.07} amount={0.15} hoverY={-5} className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-[border-color,box-shadow] duration-300">
            <div className="flex items-center justify-between mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                <Sliders size={23} />
              </span>
              <span className="font-serif text-2xl text-ink-muted/30">02</span>
            </div>
            <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">Peak Headroom</h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              -3dB maximum, preventing distortion on any playback system.
            </p>
          </AnimatedReveal>

          {/* Noise Floor */}
          <AnimatedReveal as="article" y={24} duration={0.5} delay={0.14} amount={0.15} hoverY={-5} className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-[border-color,box-shadow] duration-300">
            <div className="flex items-center justify-between mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                <ShieldCheck size={23} />
              </span>
              <span className="font-serif text-2xl text-ink-muted/30">03</span>
            </div>
            <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">Noise Floor</h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              Below -60dB RMS, eliminating audible background hiss.
            </p>
          </AnimatedReveal>

          {/* Room Tone */}
          <AnimatedReveal as="article" y={24} duration={0.5} delay={0.05} amount={0.15} hoverY={-5} className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-[border-color,box-shadow] duration-300">
            <div className="flex items-center justify-between mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                <Headphones size={23} />
              </span>
              <span className="font-serif text-2xl text-ink-muted/30">04</span>
            </div>
            <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">Room Tone</h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              Matched across chapters so transitions sound natural.
            </p>
          </AnimatedReveal>

          {/* File Format */}
          <AnimatedReveal as="article" y={24} duration={0.5} delay={0.12} amount={0.15} hoverY={-5} className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-[border-color,box-shadow] duration-300">
            <div className="flex items-center justify-between mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                <FileAudio size={23} />
              </span>
              <span className="font-serif text-2xl text-ink-muted/30">05</span>
            </div>
            <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">File Format</h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              MP3 at 192kbps or higher constant bitrate, 44.1 kHz sample rate, mono.
            </p>
          </AnimatedReveal>

          {/* Human Quality Control */}
          <AnimatedReveal as="article" y={24} duration={0.5} delay={0.19} amount={0.15} hoverY={-5} className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-[border-color,box-shadow] duration-300">
            <div className="flex items-center justify-between mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                <FileCheck2 size={23} />
              </span>
              <span className="font-serif text-2xl text-ink-muted/30">06</span>
            </div>
            <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">Human Quality Control</h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              Every file goes through human quality control before delivery.
              We do not rely on automated checks alone. A production engineer
              listens to verify compliance before any file leaves the studio.
            </p>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
