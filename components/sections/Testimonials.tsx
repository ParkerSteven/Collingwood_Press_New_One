import Container from "@/components/ui/Container";
import { benefits } from "@/lib/data";
import AnimatedBenefitCard from "../ui/AnimatedBenefitCard";

export default function Testimonials() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative overflow-hidden border-b border-line bg-white py-20 lg:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* LEFT SIDE - Heading & Description */}
          <div className="lg:sticky lg:top-28 lg:col-span-6">
            <div className="text-left">
              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E7665D]">
                  Author-First Publishing, Built Around Your Rights
                </span>
              </div>

              {/* Heading */}
              <h2
                id="why-choose-us-heading"
                className="mb-6 font-serif text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.4rem] pt-2"
              >
                Why Authors Choose{" "}
                <span className="italic text-[#E7665D]">
                  The Collingwood Press
                </span>
              </h2>

              {/* Description */}
              <p className="max-w-lg text-left font-sans text-[0.9rem] pt-2 leading-[1.9] text-ink-soft">
                The traditional publishing model forces a trade:
                professional quality in exchange for your rights,
                your earnings, and often your creative control.
                We rejected that trade from day one.
              </p>

              <p className="max-w-lg text-left font-sans text-[0.9rem] pt-4 leading-[1.9] text-ink-soft">
                The Collingwood Press brings major-house editorial
                standards to every project while leaving you in
                full control of your work. You work with the same
                small team from the first manuscript review through
                final distribution, with no handoffs and no
                rotating freelancers.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Benefits Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
            {benefits.map((benefit, index) => (
              <AnimatedBenefitCard
                key={benefit.number}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}