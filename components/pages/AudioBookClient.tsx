"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
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
import { formats } from "@/lib/formats";
import FAQAccordion from "../sections/FAQAccordion";
import { audiobookFAQs } from "@/lib/data";
import FinalCTA from "../sections/FinalCTA";
import HeroSection from "../sections/HeroSection";

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
              href: "/contact-us/#manuscript-reviewave questions",
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


        {/* REQUIRED NEW SECTION 1: Audiobook Production Process (6 Steps) */}

        <section
          id="production-process"
          className="py-20 lg:py-20 bg-[#fdfbf7] border-b border-line"
        >
          <div className="relative mx-auto max-w-[1360px] px-6 lg:px-12 pb-4">
            <div className="flex flex-col items-center text-center">

              <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                The Problem with Home Recording
              </span>

              <h2 className="mt-4 display text-[2.1rem] sm:text-[2.6rem] leading-[1.14] text-ink max-w-xl">
                Why Most DIY Audiobooks{" "}
                <em className="italic text-[#E7665D]">
                  Lose Listeners
                </em>
              </h2>

              <div className="mt-5 pb-20 flex flex-col gap-4 text-sm sm:text-base text-ink-muted text-center max-w-3xl mx-auto leading-relaxed font-sans">
                <p>
                  Recording an audiobook at home sounds simple until you try
                  it. Untreated rooms produce echo and inconsistent tone.
                  Consumer microphones pick up air conditioning, keyboard
                  noise, and mouth clicks that listeners notice immediately.
                  Without proper
                  post-production
                  and
                  audio mastering
                  , the finished files often fail Audible&apos;s technical
                  review and get sent back for corrections.
                </p>

                <p>
                  Even when the recording itself is clean, narration is a
                  performance skill. Reading a 60,000-word book aloud with
                  consistent energy, character distinction, and emotional
                  range is a different discipline from writing one. Poor
                  narration leads to listener drop-off, low completion rates,
                  and negative reviews that follow your book permanently.
                </p>

                <p>
                  Professional audiobook production
                  solves both problems. You get trained voice talent, a
                  controlled acoustic environment, and technical delivery
                  that meets platform standards the first time.
                </p>
              </div>
            </div>
          </div>

          {/* Production Process — Unchanged */}

          <Container className="flex flex-col gap-14 sm:gap-16">
            <div className="flex flex-col items-center text-center">
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

              <div className="mt-6 max-w-3xl mx-auto flex flex-col gap-4 text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                <p>
                  Our
                  audiobook creation services
                  are designed for authors who want a finished product without
                  managing freelance narrators, renting studio time, or learning
                  audio engineering. We handle the full production pipeline:
                  manuscript preparation,
                  voice actor narration
                  casting,
                  studio recording
                  , editing, mastering,
                  quality control
                  , and platform delivery.
                </p>

                <p>
                  The service works for
                  self-published authors
                  indie authors
                  with multiple titles, and traditionally published writers
                  adding audio to their catalog. If your book is already
                  published in print or ebook, audiobook production is a
                  standalone project. The manuscript does not need to be
                  republished.
                </p>
              </div>
            </div>
          </Container>

        </section>


        {/* REQUIRED NEW SECTION 2: Professional Audiobook Production (6 Core Highlights) */}

        <section className="py-20 lg:py-28 bg-white border-b border-line">
          <Container className="flex flex-col gap-14 sm:gap-16">
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

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] gap-10 lg:gap-8 items-center mt-10 md:mt-16">

              {/* LEFT: Narration Options */}
              <div className="flex flex-col gap-8">

                {/* Professional Narrator */}
                <div className="flex items-start gap-5 py-6 border-t border-[#E7665D]/20">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30">
                    <Mic2 size={22} />
                  </span>

                  <div className="flex-1">
                    <h3 className="font-serif text-[1.2rem] pt-2 font-bold text-ink leading-snug mb-3">
                      Professional Narrator
                    </h3>

                    <p className="text-sm sm:text-sm text-ink-soft leading-relaxed">
                      For most fiction and nonfiction titles, a
                      professional narration
                      performer produces the best result. We cast from a
                      roster of experienced
                      voice actor narration
                      professionals and present you with custom audition
                      samples recorded from your manuscript. You listen,
                      compare, and select the voice that fits your book.
                      The narrator records in a professional studio
                      environment under direction from an audio producer
                      who monitors pronunciation, pacing, and emotional
                      consistency.
                    </p>
                  </div>
                </div>

                {/* Author-Narrated */}
                <div className="flex items-start gap-5 py-6 border-t border-b border-[#E7665D]/20">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30">
                    <UserCheck size={22} />
                  </span>

                  <div className="flex-1">
                    <h3 className="font-serif pt-2 text-[1.2rem] font-bold text-ink leading-snug mb-3">
                      Author-Narrated
                    </h3>

                    <p className="text-sm sm:text-sm text-ink-soft leading-relaxed">
                      For memoirs, personal nonfiction, and authors with
                      a strong public speaking presence, an
                      author narrated audiobook
                      can be the right choice. We provide guided recording
                      support, pronunciation review, and the same
                      post-production
                      and mastering pipeline that professional narrator
                      projects receive. The technical quality of the
                      finished files is identical regardless of who reads.
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-2 pt-2">
                  <Button
                    href="/contact-us/#manuscript-reviewave questions"
                    variant="primary"
                    size="lg"
                  >
                    <span>Request Narrator Samples</span>
                    <ArrowRight size={15} />
                  </Button>

                  <Button
                    href="/contact-us/#manuscript-reviewave questions"
                    variant="outline"
                    size="lg"
                  >
                    <span>
                      Not Sure Which Narrator Fits? Ask Us
                    </span>
                  </Button>
                </div>
              </div>

              {/* RIGHT: Audiobook Image — Unchanged */}
              <div className="relative flex items-center justify-center py-10">
                <div className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-3xl bg-[#fdf6f5] border border-[#E7665D]/15 -z-10" />

                <Image
                  src="/audiobook_Asset.png"
                  alt="Audiobook Book Editions Mockup"
                  width={650}
                  height={650}
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>


        {/* Standards Banner */}

        <section
          id="standards"
          className="hero-gradient py-20 lg:py-24 text-white border-b border-white/10 relative overflow-hidden paper-grain"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />

          <Container className="relative z-10">
            <div className="flex flex-col items-center text-center">

              {/* Eyebrow */}
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                The Production Pipeline
              </span>

              {/* H2 Heading */}
              <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight max-w-3xl">
                How We Produce Your Audiobook{" "}
                <span className="italic text-[#E7665D]">
                  Step by Step
                </span>
              </h2>

              {/* Introduction */}
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Every project follows the same production sequence.
                What the author provides is a finalized manuscript.
                What the author receives is a set of mastered,
                distribution-ready
                audio files.
              </p>

              {/* Production Steps */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">

                {/* Step 1 */}
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                      <FileAudio size={22} />
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                      Step 01
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                    1. Manuscript Preparation and Pronunciation Notes
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    We review the manuscript and mark it up with
                    pronunciation keys for proper nouns, character voice
                    notes, pacing cues, and any specialized terminology.
                    This annotated script becomes the narrator&apos;s
                    reference document and prevents mispronunciations
                    from reaching the recording.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                      <UserCheck size={22} />
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                      Step 02
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                    2. Narrator Casting and Audition Samples
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    We select narrators from our talent roster based on
                    genre, tone, and your preferences. Each candidate
                    records a custom audition sample from your manuscript.
                    You review the samples and choose the voice. For{" "}
                    author narrated audiobook
                    projects, we skip casting and move directly to
                    recording preparation.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                      <Mic2 size={22} />
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                      Step 03
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                    3. Studio Recording
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Recording takes place in acoustically isolated studio
                    environments. A dedicated producer directs the session,
                    monitoring pronunciation accuracy, emotional
                    consistency, and energy across long recording sessions.
                    Raw tracks are captured at broadcast-quality sample rates.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                      <Wand2 size={22} />
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                      Step 04
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                    4. Editing and Post-Production
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Audio editors proof-listen against the manuscript
                    word by word. Mouth clicks, stray breaths, retakes,
                    ambient noise, and pacing errors are removed.{" "}
                    Post-production
                    produces clean, assembled{" "}
                    chapter files
                    ready for mastering.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                      <Sliders size={22} />
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                      Step 05
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                    5. Audio Mastering to Platform Standards
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="font-semibold text-white">
                      Audio mastering
                    </strong>{" "}
                    calibrates the final files to meet Audible, ACX, and
                    retailer technical requirements: RMS levels between
                    -23dB and -18dB, peak headroom at -3dB, noise floor
                    below -60dB, and consistent room tone across all
                    chapters. The result is an{" "}
                    Audible ready audiobook
                    that passes platform review on the first submission.
                  </p>
                </div>


                {/* Step 6 */}
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-7 hover:border-[#E7665D]/50 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                      <FileCheck2 size={22} />
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#F08A82]">
                      Step 06
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.3rem] font-bold text-white leading-snug mb-4">
                    6. Final Review and Delivery
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    You receive the mastered files for final review. One round of
                    corrections is included. Once approved, the files are formatted
                    for distribution and uploaded to your selected platforms.
                  </p>
                </div>

              </div>


              {/* Typical Timeline & CTA */}
              <div className="mt-10 flex flex-col items-center text-center gap-6">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  <strong className="font-semibold text-white">
                    Typical timeline:
                  </strong>{" "}
                  6 to 12 weeks from manuscript submission to finished files,
                  depending on book length and narrator scheduling.
                </p>

                <Button
                  href="/contact-us/#manuscript-reviewave questions"
                  variant="primary"
                  size="lg"
                >
                  <span className="whitespace-nowrap">
                    Get a Timeline for Your Manuscript
                  </span>
                  <ArrowRight size={15} className="shrink-0" />
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 6: What You Actually Get */}
        <section
          id="audiobook-deliverables"
          className="py-20 lg:pt-24 lg:pb-20 bg-[#fdfbf7] border-b border-line"
        >
          <Container>
            {/* Section Heading */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                Deliverables
              </span>

              <h2 className="mt-4 font-serif text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                What You Actually Get with Our{" "}
                <span className="italic text-[#E7665D]">
                  Audiobook Production
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-ink-muted leading-relaxed">
                Every
                audiobook production service
                engagement delivers the following.
              </p>
            </div>

            {/* Deliverables Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Deliverable 1 */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-white p-7 shadow-sm hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <FileAudio size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    01
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  Mastered Chapter Files
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  Mastered chapter files
                  in MP3 and WAV format, calibrated to Audible/ACX
                  technical specifications.
                </p>
              </div>

              {/* Deliverable 2 */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-white p-7 shadow-sm hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <Headphones size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    02
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  Chapter Markers and Metadata
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  Chapter markers and metadata
                  formatted for platform ingestion.
                </p>
              </div>

              {/* Deliverable 3 */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-white p-7 shadow-sm hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <FileCheck2 size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    03
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  Pronunciation Guide
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  Pronunciation guide
                  used during recording, provided for your records.
                </p>
              </div>

              {/* Deliverable 4 */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-white p-7 shadow-sm hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <ShieldCheck size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    04
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  Quality Control Report
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  Quality control report
                  confirming RMS levels, noise floor, and peak headroom
                  compliance.
                </p>
              </div>

              {/* Deliverable 5 */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-white p-7 shadow-sm hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <CheckCircle2 size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    05
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  One Round of Revisions
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  One round of revisions
                  after final review.
                </p>
              </div>

              {/* Deliverable 6 */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-white p-7 shadow-sm hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <Globe2 size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    06
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  Upload Support
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  Upload support
                  for Audible, Apple Books, and your selected
                  distribution platforms.
                </p>
              </div>
            </div>

            {/* Audio Rights / Ownership */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-xl border border-[#E7665D]/25 bg-white px-6 py-7 text-center sm:text-left shadow-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fdf6f5] text-[#E7665D]">
                <ShieldCheck size={25} />
              </span>

              <p className="font-serif text-lg sm:text-xl font-semibold text-ink leading-relaxed">
                You retain all rights to the final audio files.{" "}
                <span className="text-[#E7665D]">
                  The recordings belong to you.
                </span>
              </p>
            </div>
          </Container>
        </section>



        {/* SECTION 7: Studio Standards and Platform Compliance */}
        <section
          id="studio-standards"
          className="py-20 lg:py-28 bg-white border-b border-line"
        >
          <Container>
            {/* Section Heading */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                Technical Specifications
              </span>

              <h2 className="mt-4 max-w-xl font-serif text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                Studio Standards That Meet{" "}
                <span className="italic text-[#E7665D]">
                  Platform Requirements
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-ink-muted leading-relaxed">
                Audible and ACX reject files that do not meet their
                technical specifications. Other platforms have their own
                requirements. Our
                audiobook recording services
                produce files that comply with all of them.
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* RMS Levels */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <Volume2 size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    01
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  RMS Levels
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  -23dB to -18dB
                  , consistent across all chapters.
                </p>
              </div>

              {/* Peak Headroom */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <Sliders size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    02
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  Peak Headroom
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  -3dB maximum
                  , preventing distortion on any playback system.
                </p>
              </div>

              {/* Noise Floor */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <ShieldCheck size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    03
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  Noise Floor
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  Below -60dB RMS
                  , eliminating audible background hiss.
                </p>
              </div>

              {/* Room Tone */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <Headphones size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    04
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  Room Tone
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  Matched across chapters so transitions sound natural.
                </p>
              </div>

              {/* File Format */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <FileAudio size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    05
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  File Format
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  MP3 at 192kbps or higher constant bitrate
                  , 44.1 kHz sample rate, mono.
                </p>
              </div>

              {/* Human Quality Control */}
              <div className="group rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-7 hover:border-[#E7665D]/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors">
                    <FileCheck2 size={23} />
                  </span>
                  <span className="font-serif text-2xl text-ink-muted/30">
                    06
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  Human Quality Control
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  Every file goes through human{" "}
                  quality control
                  before delivery. We do not rely on automated checks alone.
                  A production engineer listens to verify compliance before
                  any file leaves the studio.
                </p>
              </div>
            </div>
          </Container>
        </section>



        {/* SECTION 8: DISTRIBUTION */}
        <section
          id="audiobook-distribution"
          className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
        >
          <Container>
            {/* Section Heading */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                Global Audio Retail
              </span>

              <h2 className="mt-4 max-w-2xl font-serif text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                Distribution-Ready Files for{" "}
                <span className="italic text-[#E7665D]">
                  Audible, Apple Books, and More
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-ink-muted leading-relaxed">
                Once your files are approved, we prepare them for
                audiobook distribution=
                across all major listening platforms. You choose where
                your audiobook is available, and you retain full rights
                and royalties.
              </p>
            </div>

            {/* Supported Platforms */}
            <div className="mt-12">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink text-center mb-7">
                Supported platforms
              </h3>

              {/* Logo Carousel — Same Design & Animation */}
              <div
                className="mk-platform-viewport relative pt-8 mt-8"
                role="region"
                aria-label="Audiobook distribution platforms"
              >
                <div className="mk-platform-track">
                  {[0, 1].map((copy) => (
                    <div
                      key={copy}
                      className="mk-platform-group"
                      aria-hidden={copy === 1 ? true : undefined}
                    >
                      {platforms.map((r) => (
                        <div
                          key={`${r.name}-${copy}`}
                          className="flip-card mk-platform-card"
                          tabIndex={copy === 0 ? 0 : -1}
                          aria-label={`${r.name} audiobook distribution platform`}
                        >
                          <div className="flip-inner">
                            <div className="flip-face mk-platform-front">
                              <span className="font-serif text-[18px] sm:text-[20px] tracking-wide text-ink text-center px-3 font-semibold">
                                {r.name}
                              </span>
                            </div>

                            <div className="flip-face flip-back mk-platform-back">
                              {r.mark ? (
                                <Image
                                  src={r.mark}
                                  alt=""
                                  aria-hidden="true"
                                  width={150}
                                  height={42}
                                  className="max-h-[42px] max-w-[150px] w-auto object-contain"
                                />
                              ) : (
                                <Headphones
                                  size={32}
                                  aria-hidden="true"
                                  className="text-[#A83E39]"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Distribution Details */}
            <div className="mt-12 max-w-4xl mx-auto">
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed text-center">
                For authors who want to
                self-publish audiobook
                editions independently, we deliver the finished files
                and metadata formatted for direct upload to ACX,
                Findaway Voices, or any distributor you choose.
                For authors who want us to handle distribution, we
                manage the upload process and confirm each listing is live.
              </p>
            </div>
          </Container>
        </section>

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

        {/* SECTION 10: Closing CTA */}
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
          buttonHref="/contact-us/#manuscript-reviewave questions"
        />



      </main>
      <Footer />
    </>
  );
}
