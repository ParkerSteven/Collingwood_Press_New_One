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
  Volume2,
  FileAudio,
  UserCheck,
  Wand2,
  FileCheck2,
  Globe2,
  Sparkles,
  Check
} from "lucide-react";

const productionProcess = [
  {
    number: "01",
    step: "Step 01",
    title: "Script Preparation",
    tagline: "Phonetic & Character Markup",
    description: "Our audio directors mark up your manuscript with pronunciation keys for unusual proper nouns, character voice guides, pacing cues, and emotional tone notes.",
    deliverable: "Annotated Production Script",
    icon: FileAudio,
  },
  {
    number: "02",
    step: "Step 02",
    title: "Voice Selection",
    tagline: "SAG-AFTRA Auditions",
    description: "We audition seasoned voice talent and present you with custom recorded sample reads. You select the exact cadence, vocal texture, and temperament for your narrative.",
    deliverable: "Custom Voice Audition Reel",
    icon: UserCheck,
  },
  {
    number: "03",
    step: "Step 03",
    title: "Studio Recording",
    tagline: "Acoustically Isolated Booths",
    description: "Recordings are captured in professional acoustic environments supervised by a dedicated director ensuring pronunciation fidelity, emotional consistency, and energy.",
    deliverable: "Raw High-Fidelity Studio Tracks",
    icon: Mic2,
  },
  {
    number: "04",
    step: "Step 04",
    title: "Audio Editing",
    tagline: "Detailed Proof-Listening",
    description: "Audio editors proof-listen against the manuscript word-for-word, eliminating mouth clicks, stray breaths, retakes, and ambient noise to ensure seamless listening flow.",
    deliverable: "Cleaned Multi-Track Assemblies",
    icon: Wand2,
  },
  {
    number: "05",
    step: "Step 05",
    title: "Audio Mastering",
    tagline: "Audible & ACX Certification",
    description: "Mastering engineers calibrate strict industry specs: -23dB to -18dB RMS levels, -3dB peak limiters, a noise floor below -60dB, and uniform room tone.",
    deliverable: "Mastered Broadcast Quality Files",
    icon: Sliders,
  },
  {
    number: "06",
    step: "Step 06",
    title: "Global Distribution",
    tagline: "Direct Ingestion Worldwide",
    description: "Seamless distribution to over 40 platforms including Audible, Apple Books, Spotify Audiobooks, Barnes & Noble, Google Play, and public libraries via OverDrive / Libby.",
    deliverable: "Live Retail & Library Presence",
    icon: Globe2,
  },
];

const productionFeatures = [
  {
    title: "Professional Narration",
    tagline: "Award-Winning Voice Talent",
    description: "Experienced SAG-AFTRA and Audie Award-nominated narrators who bring distinct character voices, emotional depth, and theatrical pacing to your text.",
    icon: Mic2,
    badge: "Voice Talent",
  },
  {
    title: "Studio-Quality Audio",
    tagline: "Pristine Sound Architecture",
    description: "Engineered in soundproof WhisperRoom isolation environments with industry-standard Neumann microphones and zero audible background noise floor.",
    icon: Volume2,
    badge: "Acoustic Purity",
  },
  {
    title: "Multiple Voice Styles",
    tagline: "Genre-Calibrated Timbres",
    description: "From warm, authoritative baritones for leadership books to energetic multi-character vocal ranges for dynamic fantasy and thrillers.",
    icon: Music,
    badge: "Vocal Diversity",
  },
  {
    title: "Professional Editing",
    tagline: "Word-by-Word Quality Control",
    description: "Rigorous quality sweeps that compare every recorded second against the manuscript to guarantee 100% text fidelity and perfect flow.",
    icon: FileCheck2,
    badge: "100% Fidelity",
  },
  {
    title: "Audio Mastering",
    tagline: "Audible / ACX / Apple Specs",
    description: "Precision dynamic range compression, EQ sweetening, and headroom management meeting the strictest technical requirements of global retailers.",
    icon: Sliders,
    badge: "ACX Certified",
  },
  {
    title: "Distribution-Ready Files",
    tagline: "Turnkey Metadata Packaging",
    description: "Fully tagged MP3 files with ID3 metadata, chapterized timing tables, and square audiobook cover art calibrated for all major digital storefronts.",
    icon: Headphones,
    badge: "Turnkey Files",
  },
];

const platforms: { name: string; mark?: string }[] = [
  { name: "Audible", mark: "/platform-icons/audible.svg" },
  { name: "Amazon", mark: "/platform-icons/kindle-icon.png" },
  { name: "Apple Books", mark: "/platform-icons/apple-icon.png" },
  { name: "Google Play Books", mark: "/platform-icons/gplay-books.svg" },
  { name: "Spotify", mark: "/platform-icons/spotify.svg" },
  { name: "Kobo", mark: "/platform-icons/kobo-icon.png" },
  { name: "Scribd", mark: "/platform-icons/scribd-icon.png" },
  { name: "Barnes & Noble", mark: "/platform-icons/barnes-icon.png" },
  { name: "OverDrive", mark: "/platform-icons/overdrive-icon.png" },
  { name: "Hoopla", mark: "/platform-icons/hoopla-icon.png" },
  { name: "Libro.fm" },
  { name: "Storytel" },
];

export default function AudiobookPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="bg-white text-ink">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E7665D]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl pointer-events-none" />

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <Eyebrow tone="coral" align="center">
                Audible &amp; ACX Certified Studio Production
              </Eyebrow>

              <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
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
                <Button href="#production-process" variant="outline-white" size="lg">
                  <span>Explore Production Process</span>
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

        {/* REQUIRED NEW SECTION 1: Audiobook Production Process (6 Steps) */}
        <section id="production-process" className="py-20 lg:py-20 bg-[#fdfbf7] border-b border-line">
          <div className="relative mx-auto max-w-[1360px] px-6 lg:px-12 pb-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="mt-4 display text-[2.1rem] sm:text-[2.6rem] leading-[1.14] text-ink max-w-[28ch]">
                Your Audiobook, Where <em className="italic text-[#E7665D]">Listeners Already Are</em>
              </h2>
              <p className="mt-3.5 text-sm sm:text-base text-ink-muted text-center max-w-2xl mx-auto leading-relaxed font-sans">
                                Paid search, social campaigns, video, email and reader communities.<br className="hidden sm:inline" />
                                {" "}We set them up, run them together, and report on each one.
                            </p>
            </div>
          </div>

          <div className="relative pt-4 pb-10 mb-14">
            <div className="audio-logo-viewport" role="region" aria-label="Audiobook distribution platforms">
              <div className="audio-logo-track">
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    className="audio-logo-group"
                    aria-hidden={copy === 1 ? true : undefined}
                  >
                    {platforms.map((r) => (
                      <div key={`${r.name}-${copy}`} className="audio-logo-card">
                        <span className="audio-logo-symbol">
                          {r.mark ? (
                            <img src={r.mark} alt="" aria-hidden="true" loading="lazy" />
                          ) : (
                            <Headphones size={32} aria-hidden="true" />
                          )}
                        </span>
                        <span className="audio-logo-name">{r.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Container className="flex flex-col gap-14 sm:gap-16">
            <SectionHeading
              eyebrow="The Studio Pipeline"
              title={
                <>
                  Audiobook{" "}
                  <span className="italic text-[#E7665D]">Production Process</span>
                </>
              }
              description="From raw text preparation to global listening storefronts, our six-stage studio pipeline ensures flawless acoustic quality and narrative resonance."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {productionProcess.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="group relative rounded-xl border border-[#E7665D]/25 bg-white p-8 shadow-[0_4px_24px_0_rgba(231,102,93,0.10),0_1px_4px_0_rgba(0,0,0,0.04)] hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-line/70">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/25 group-hover:bg-[#E7665D] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                          <Icon size={20} />
                        </div>
                        <span className="font-serif text-2xl font-normal text-ink-muted/40 group-hover:text-[#E7665D] transition-colors">
                          {step.number}
                        </span>
                      </div>

                      <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#E7665D] block mb-1">
                        {step.step}
                      </span>

                      <h3 className="font-serif text-[1.28rem] font-bold text-ink leading-snug group-hover:text-[#E7665D] transition-colors">
                        {step.title}
                      </h3>

                      <span className="text-[11px] text-ink-muted italic block mt-1 mb-3">
                        {step.tagline}
                      </span>

                      <p className="text-sm text-ink-soft leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-line/70">
                      <span className="text-[10px] uppercase tracking-wider text-ink-muted block font-semibold">
                        Stage Output
                      </span>
                      <span className="text-xs font-semibold text-ink mt-0.5 block">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* REQUIRED NEW SECTION 2: Professional Audiobook Production (6 Core Highlights) */}
        <section className="py-20 lg:py-28 bg-white border-b border-line">
          <Container className="flex flex-col gap-14 sm:gap-16">
            <SectionHeading
              eyebrow="Craftsmanship &amp; Engineering"
              title={
                <>
                  Professional{" "}
                  <span className="italic text-[#E7665D]">Audiobook Production</span>
                </>
              }
              description="We pair world-class vocal performers with precision audio engineering to craft immersive, broadcast-standard audio listening experiences."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productionFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-8 sm:p-9 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 shadow-sm">
                          <Icon size={24} />
                        </span>
                        <span className="font-sans text-[10.5px] uppercase tracking-[0.16em] text-ink-muted font-semibold bg-[#fdf6f5] px-2.5 py-1 rounded-md border border-[#E7665D]/20">
                          {feat.badge}
                        </span>
                      </div>

                      <h3 className="font-serif text-[1.3rem] font-bold text-ink">
                        {feat.title}
                      </h3>
                      <span className="text-xs text-ink-muted italic block mt-0.5 mb-3">
                        {feat.tagline}
                      </span>
                      <p className="text-sm text-ink-soft leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Standards Banner */}
        <section id="standards" className="hero-gradient py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden paper-grain">
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

              {/* Specs pill row */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left w-full max-w-2xl bg-white/[0.04] p-5 rounded-lg border border-white/10">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Check size={14} className="text-[#E7665D] shrink-0" />
                  <span>-23dB to -18dB RMS Target</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Check size={14} className="text-[#E7665D] shrink-0" />
                  <span>-3dB Peak Headroom Limit</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Check size={14} className="text-[#E7665D] shrink-0" />
                  <span>Noise Floor &lt; -60dB RMS</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Consult an Audio Production Specialist</span>
                  <ArrowRight size={15} />
                </Button>
                <Button href="/contact-us" variant="outline-white" size="lg">
                  <span>Request Narrator Samples</span>
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
