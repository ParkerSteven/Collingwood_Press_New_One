import { Headphones, Sliders, ShieldCheck, Volume2, FileAudio, FileCheck2 } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { technicalSpecs } from "@/lib/data";

export default function StudioStandardsSection() {
  return (
    <section
      id="studio-standards"
      className="border-b border-line bg-[#FCFAF7] py-16 lg:py-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-24">

          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-28">
            <AnimatedReveal
              y={12}
              duration={0.5}
              amount={0.2}
            >
              <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#E7665D]">
                Technical Specifications
              </span>
            </AnimatedReveal>

            <AnimatedReveal
              y={18}
              duration={0.55}
              delay={0.06}
              amount={0.2}
            >
              <h2
                className="
              mt-5 max-w-lg
              font-serif text-[2.3rem]
              font-bold leading-[1.15]
              tracking-tight text-ink
              sm:text-[2.5rem]
              lg:text-[2.7rem]
            "
              >
                Audiobook Technical{" "}
                <span className="italic text-[#E7665D]">
                  Standards We Meet
                </span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal
              y={14}
              duration={0.5}
              delay={0.12}
              amount={0.2}
            >
              <p className="mt-6 max-w-md text-sm leading-[1.9] text-ink-muted sm:text-base">
                Audible and ACX reject files that miss their
                specifications. Our recording and mastering is
                built to pass them. A human engineer listens
                to every file before delivery.
              </p>
            </AnimatedReveal>


          </div>

          {/* RIGHT SPECIFICATIONS */}
          <div className="min-w-0">
            <AnimatedReveal
              y={20}
              duration={0.55}
              amount={0.1}
              className="
            overflow-hidden rounded-2xl
            border border-[#E7665D]/20
            bg-white
            shadow-[0_12px_40px_rgba(16,26,48,0.04)]
          "
            >
              <div className="divide-y divide-[#E7665D]/10">
                {technicalSpecs.map((spec) => {
                  const Icon = spec.icon;

                  return (
                    <div
                      key={spec.id}
                      className="
                    group flex items-center gap-4
                    px-5 py-5
                    transition-colors duration-300
                    hover:bg-[#FFF8F6]
                    sm:gap-5 sm:px-7
                  "
                    >
                      {/* Icon */}
                      <div
                        className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl bg-[#FDF3F1]
                      text-[#E7665D]
                      transition-[background-color,color,transform]
                      duration-300
                      group-hover:scale-105
                      group-hover:bg-[#E7665D]
                      group-hover:text-white
                      sm:h-12 sm:w-12
                    "
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Specification Details */}
                      <div className="min-w-0 flex-1">
                        <h3
                          className="
                        font-serif text-base
                        font-bold text-ink
                        sm:text-[17px]
                      "
                        >
                          {spec.title}
                        </h3>

                        <p className="mt-1 text-xs leading-relaxed text-ink-muted sm:text-sm">
                          {spec.description}
                        </p>
                      </div>

                      {/* Value */}
                      <div className="min-w-0 max-w-[42%] text-right">
                        <p
                          className="
                        text-xs font-bold
                        leading-snug text-[#E7665D]
                        sm:text-sm
                      "
                        >
                          {spec.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
