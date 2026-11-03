
import { Headphones } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Image from "next/image";

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

export default function AudiobookDistributionSection() {
  return (
    <section
      id="audiobook-distribution"
      className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
    >
      <Container>
        {/* Section Heading Animation */}
        <AnimatedReveal
          y={25}
          duration={0.7}
          amount={0.2}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
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
            audiobook distribution across all major listening
            platforms. You choose where your audiobook is
            available, and you retain full rights and royalties.
          </p>
        </AnimatedReveal>

        {/* Supported Platforms */}
        <div className="mt-12">
          {/* Supported Platforms Heading Animation */}
          <AnimatedReveal
            y={20}
            duration={0.6}
            delay={0.1}
            amount={0.2}
          >
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink text-center mb-7">
              Supported platforms
            </h3>
          </AnimatedReveal>

          {/* Carousel Reveal Animation */}
          <AnimatedReveal
            y={35}
            duration={0.8}
            delay={0.15}
            amount={0.1}
          >
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
          </AnimatedReveal>
        </div>

        {/* Distribution Details Animation */}
        <AnimatedReveal
          y={25}
          duration={0.7}
          delay={0.1}
          amount={0.2}
          className="mt-12 max-w-4xl mx-auto"
        >
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed text-center">
            For authors who want to self-publish audiobook editions
            independently, we deliver the finished files and
            metadata formatted for direct upload to ACX,
            Findaway Voices, or any distributor you choose.
            For authors who want us to handle distribution, we
            manage the upload process and confirm each listing is live.
          </p>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
