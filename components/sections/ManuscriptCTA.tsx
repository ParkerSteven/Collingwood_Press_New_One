import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { Quote, BookOpenText } from "lucide-react";

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  book: string;
  genre?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "01",
    quote:
      "I review every detail, and the Collingwood Press team kept pace: editing done in July, formatting fixes turned around fast, and honest advice on how to position the book.",
    author: "Todd Shevlin",
    book: "12 Minutes to Freedom",
    genre: "",
  },
  {
    id: "02",
    quote:
      "My first book, handled with care and encouragement: patient through every cover revision, and the decisions stayed mine.",
    author: "John David Amon",
    book: "Grace in the Questions",
    genre: "",
  },
  {
    id: "03",
    quote:
      "An absolute pleasure to work with. Pamela caught spelling, tense slips, and hidden errors in the recipes and index that everyone else had missed for years.",
    author: "Jill Coleman",
    book: "Mechanics for the body",
    genre: "",
  },
];

export default function ManuscriptCTA() {
  return (
    <section
      id="author-testimonials"
      aria-labelledby="author-testimonials-heading"
      className="relative overflow-hidden border-b border-line bg-white py-20 lg:py-28"
    >
      <Container>
        {/* Section Heading */}
        <AnimatedReveal
          y={20}
          duration={0.55}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
              Hear It From Our Authors
            </span>
          </div>

          <h2
            id="author-testimonials-heading"
            className="font-serif text-[2rem] max-w-2xl mx-auto font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
          >
            What Authors Say About{" "}
            <span className="italic text-[#E7665D]">
              Publishing With Us
            </span>
          </h2>
        </AnimatedReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((testimonial, index) => (
            <AnimatedReveal
              key={testimonial.id}
              as="article"
              y={24}
              duration={0.55}
              delay={index * 0.1}
              amount={0.15}
              hoverY={-8}
              className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#172B4D] to-[#294D78] p-7 shadow-[0_12px_38px_rgba(16,26,48,0.18)] transition-shadow duration-500 hover:border-[#E7665D]/50 hover:shadow-[0_22px_55px_rgba(25,55,100,0.35)] sm:p-9"
            >
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#6B9DDB]/15 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-[#6B9DDB]/25" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#E7665D]/10 blur-3xl" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081222]/30 via-transparent to-white/[0.03]" />

              {/* Animated Top Border */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#E7665D] via-[#F5A29C] to-[#83B7F0] transition-all duration-500 group-hover:h-[4px]"
              />

              {/* Quote Icon and Number */}
              <div className="relative z-10 mb-7 flex items-start justify-between">
                <div className="flex h-13 w-13 items-center justify-center rounded-sm border border-white/20 bg-white/10 p-3 text-[#FF938B] backdrop-blur-sm transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                  <Quote
                    size={25}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <span className="font-serif text-3xl italic text-white/30">
                  {testimonial.id}
                </span>
              </div>

              {/* Testimonial Quote */}
              <blockquote className="relative z-10 flex-1">
                <p className="font-sans text-[0.9rem] leading-[1.6] text-white/95 sm:text-[1rem]">
                  {testimonial.quote}
                </p>
              </blockquote>

              {/* Author Details */}
              <div className="relative z-10 mt-9 border-t border-white/20 pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#FF938B] transition-all duration-300 group-hover:scale-105">
                    <BookOpenText
                      size={20}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-sans text-[1rem] font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#FFB0A9]">
                      {testimonial.author}
                    </h3>

                    <p className="mt-1 font-sans text-xs leading-relaxed text-white/70">
                      <span className="italic">
                        {testimonial.book}
                      </span>
                    </p>

                    {testimonial.genre && (
                      <span className="mt-2 block font-sans text-[10px] uppercase tracking-[0.13em] text-[#FF938B]">
                        {testimonial.genre}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}