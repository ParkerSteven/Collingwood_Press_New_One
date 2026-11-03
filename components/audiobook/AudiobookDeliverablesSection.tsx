
import {
  Headphones,
  ShieldCheck,
  CheckCircle2,
  FileAudio,
  FileCheck2,
  Globe2,
} from "lucide-react";

import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

const deliverables = [
  {
    number: "01",
    icon: FileAudio,
    title: "Mastered Chapter Files",
    description:
      "Mastered chapter files in MP3 and WAV format, calibrated to Audible/ACX technical specifications.",
  },
  {
    number: "02",
    icon: Headphones,
    title: "Chapter Markers and Metadata",
    description:
      "Chapter markers and metadata formatted for platform ingestion.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Pronunciation Guide",
    description:
      "Pronunciation guide used during recording, provided for your records.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality Control Report",
    description:
      "Quality control report confirming RMS levels, noise floor, and peak headroom compliance.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "One Round of Revisions",
    description:
      "One round of revisions after final review.",
  },
  {
    number: "06",
    icon: Globe2,
    title: "Upload Support",
    description:
      "Upload support for Audible, Apple Books, and your selected distribution platforms.",
  },
];

export default function AudiobookDeliverablesSection() {
  return (
    <section
      id="audiobook-deliverables"
      className="py-20 lg:pt-24 lg:pb-20 bg-[#fdfbf7] border-b border-line"
    >
      <Container>
        {/* Section Heading */}
        <AnimatedReveal
          y={25}
          duration={0.7}
          amount={0.2}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
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
            Every audiobook production service engagement delivers
            the following.
          </p>
        </AnimatedReveal>

        {/* Deliverables Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedReveal
                key={item.number}
                as="article"
                y={35}
                duration={0.6}
                delay={(index % 3) * 0.12}
                amount={0.15}
                hoverY={-6}
                className="group h-full rounded-xl border border-[#E7665D]/20 bg-white p-7 shadow-sm hover:border-[#E7665D]/50 hover:shadow-lg transition-[border-color,box-shadow] duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white transition-colors duration-300">
                    <Icon size={23} />
                  </span>

                  <span className="font-serif text-2xl text-ink-muted/30">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-ink mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  {item.description}
                </p>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* Audio Rights / Ownership */}
        <AnimatedReveal
          y={30}
          duration={0.7}
          delay={0.1}
          amount={0.2}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-xl border border-[#E7665D]/25 bg-white px-6 py-7 text-center sm:text-left shadow-sm"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fdf6f5] text-[#E7665D]">
            <ShieldCheck size={25} />
          </span>

          <p className="font-serif text-lg sm:text-xl font-semibold text-ink leading-relaxed">
            You retain all rights to the final audio files.{" "}
            <span className="text-[#E7665D]">
              The recordings belong to you.
            </span>
          </p>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
