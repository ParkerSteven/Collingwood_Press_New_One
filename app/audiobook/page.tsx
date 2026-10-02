"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Headphones,
  Mic2,
  Sliders,
  Radio,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Music,
  Volume2
} from "lucide-react";

const audioSteps = [
  {
    step: "Step 01",
    title: "Narrator Casting & Voice Auditions",
    desc: "We audition SAG-AFTRA voice actors and professional audiobook narrators, presenting you with tailored vocal samples to choose the exact cadence, vocal texture, and emotional resonance that fits your narrative.",
  },
  {
    step: "Step 02",
    title: "Director-Supervised Studio Recording",
    desc: "Recordings take place in acoustically isolated recording booths with dedicated audio engineers monitoring pronunciation, pacing, character voice distinctions, and emotional cadence.",
  },
  {
    step: "Step 03",
    title: "Post-Production Mastering & Quality Assurance",
    desc: "Our mastering engineers eliminate mouth clicks, breaths, and ambient noise floors, balancing RMS levels (-23dB to -18dB) and peak limiters to exceed strict Audible/ACX and Apple Audio standards.",
  },
  {
    step: "Step 04",
    title: "Global Distribution to 40+ Audio Platforms",
    desc: "Seamless ingestion into Audible, Apple Books, Spotify Audiobooks, Google Play, Chirp, Barnes & Noble Audiobooks, and public library channels via OverDrive / Libby.",
  },
];

export default function AudiobookPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="bg-white text-ink">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <Eyebrow tone="coral" align="center">
                Audible &amp; ACX Certified Studio Production
              </Eyebrow>

              <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.2rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                Your story given voice.{" "}
                <span className="italic text-[#E7665D] block sm:inline">Broadcast-grade audiobook mastery.</span>
              </h1>

              <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                Audiobooks represent the fastest-growing segment of the publishing industry. We shepherd your book into pristine audio with award-winning voice talent, state-of-the-art sound engineering, and global retail distribution.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Audition Narrators for Your Book</span>
                  <ArrowRight size={15} />
                </Button>
                <Button href="#standards" variant="outline-white" size="lg">
                  <span>View Production Standards</span>
                </Button>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/75">
                <div className="flex items-center gap-2">
                  <Mic2 size={14} className="text-[#E7665D]" />
                  <span>SAG-AFTRA Professional Narrators</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#E7665D]" />
                  <span>100% Guaranteed ACX / Audible Acceptance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones size={14} className="text-[#E7665D]" />
                  <span>Distributed to Audible, Spotify &amp; Libraries</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* The Audio Process */}
        <section className="py-20 lg:py-24 bg-white border-b border-line">
          <Container className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="The Studio Pipeline"
              title={
                <>
                  How we craft your volume into{" "}
                  <span className="italic text-[#E7665D]">an immersive audio experience</span>
                </>
              }
              description="A seamless, end-to-end studio workflow that transforms your manuscript into broadcast-quality sound files ready for global listeners."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {audioSteps.map((step) => (
                <div
                  key={step.title}
                  className="p-8 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 transition-all duration-300"
                >
                  <div>
                    <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-2">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-[1.25rem] font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Standards Banner */}
        <section id="standards" className="hero-gradient py-20 text-white border-b border-white/10 relative overflow-hidden paper-grain">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />
          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                Acoustic Perfection Guaranteed
              </span>
              <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                Zero rejections. Flawless acoustic master files.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Every chapter file is mastered to conform to -192kbps or higher constant bitrates, 44.1 kHz sample rates, and seamless head-and-tail room tone matching the highest industry audio standards.
              </p>
              <div className="mt-8">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Consult an Audio Production Specialist</span>
                  <ArrowRight size={15} />
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
