
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  BookOpen,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const comparisonData = [
  {
    feature: "Author Royalties",
    hybrid: "Often a split, commonly 50–85% of net",
    traditional: "Typically 10–15%",
    collingwood: "100%",
  },
  {
    feature: "Copyright Ownership",
    hybrid: "Often retained, sometimes shared",
    traditional: "Usually held by publisher",
    collingwood: "Retained by author",
  },
  {
    feature: "Upfront Cost to Author",
    hybrid: "Author-funded",
    traditional: "None (publisher-funded)",
    collingwood: "Author-funded services",
  },
  {
    feature: "Timeline to Release",
    hybrid: "Often 6–12 months",
    traditional: "Typically 1–2 years",
    collingwood: "3–6 months",
  },
  {
    feature: "Editorial & Design Team",
    hybrid: "Publisher's team",
    traditional: "Publisher-assigned",
    collingwood: "Dedicated professionals",
  },
  {
    feature: "Distribution",
    hybrid: "Publisher's channels",
    traditional: "Publisher-controlled",
    collingwood: "Global retail channels, set up in your name",
  },
  {
    feature: "Creative Control",
    hybrid: "Shared with the publisher",
    traditional: "Publisher-directed",
    collingwood: "Full author control",
  },
];

export default function ProjectManagers() {
  return (
    <section
      id="publishing-comparison"
      aria-labelledby="publishing-comparison-heading"
      className="relative overflow-hidden border-b border-line bg-white py-20 lg:py-28"
    >
      <Container>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-4xl text-center lg:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E7665D]" />

            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
              Know Your Options Before You Commit
            </span>

            <span className="h-px w-8 bg-[#E7665D]" />
          </div>

          <h2
            id="publishing-comparison-heading"
            className="font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.6rem]"
          >
            Hybrid vs. Traditional vs. Self-Publishing:{" "}
            <span className="italic text-[#E7665D]">
              Which Path Keeps Your Rights?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-sans text-[0.96rem] leading-[1.85] text-ink-muted sm:text-[1rem]">
            Authors today have more routes to publication than
            ever, and they do not deliver the same results.
            Here is how the three models compare. The
            Collingwood Press sits in the self-publishing column:
            you stay the publisher, and we do the production work.
          </p>
        </motion.div>

        {/* Comparison table container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-md border border-[#E7665D]/20 bg-white shadow-[0_8px_35px_rgba(17,26,48,0.06)]"
        >


          {/* Horizontal scroll on mobile */}
          <div
            className="overflow-x-auto"
            role="region"
            aria-label="Publishing models comparison table"
            tabIndex={0}
          >
            <table className="w-full min-w-[760px] border-collapse text-left font-sans">
              <thead>
                <tr className="bg-[#F4F1EC]">
                  <th
                    scope="col"
                    className="w-[22%] border-b border-line px-5 py-6 text-xs font-semibold text-ink sm:px-7"
                  >
                    Comparison Factor
                  </th>

                  <th
                    scope="col"
                    className="w-[25%] border-b border-line px-5 py-6 text-sm font-semibold text-ink sm:px-7"
                  >
                    Hybrid Publishing
                  </th>

                  <th
                    scope="col"
                    className="w-[25%] border-b border-line px-5 py-6 text-sm font-semibold text-ink sm:px-7"
                  >
                    Traditional Publishing
                  </th>

                  <th
                    scope="col"
                    className="w-[28%] border-b-2 border-[#E7665D] bg-[#FCEEEB] px-5 py-5 sm:px-7"
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck
                        size={19}
                        className="shrink-0 text-[#E7665D]"
                        aria-hidden="true"
                      />

                      <span className="text-sm font-semibold leading-snug text-ink">
                        Self-Publishing with The Collingwood Press
                      </span>
                    </div>

                    <span className="mt-2 inline-flex rounded-sm border border-[#E7665D]/20 bg-white/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#E7665D]">
                      Author-First Model
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`transition-colors hover:bg-[#FCFAF7] ${index % 2 === 0
                      ? "bg-white"
                      : "bg-[#FAF8F5]"
                      }`}
                  >
                    <th
                      scope="row"
                      className="border-b border-line/80 px-5 py-5 text-[0.84rem] font-semibold leading-relaxed text-ink sm:px-7"
                    >
                      {row.feature}
                    </th>

                    <td className="border-b border-line/80 px-5 py-5 text-[0.84rem] leading-relaxed text-ink-muted sm:px-7">
                      {row.hybrid}
                    </td>

                    <td className="border-b border-line/80 px-5 py-5 text-[0.84rem] leading-relaxed text-ink-muted sm:px-7">
                      {row.traditional}
                    </td>

                    <td className="border-b border-[#E7665D]/15 bg-[#E7665D]/[0.055] px-5 py-5 sm:px-7">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={17}
                          strokeWidth={1.8}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-[#E7665D]"
                        />

                        <span className="text-[0.87rem] font-medium leading-relaxed text-ink">
                          {row.collingwood}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comparison footnote */}
          <div className="border-t border-line bg-[#FCFAF7] px-6 py-5 sm:px-8">
            <p className="font-sans text-xs italic leading-relaxed text-ink-muted">
              Traditional and hybrid figures are typical
              industry ranges and vary by publisher.
            </p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-9 flex flex-col items-start justify-between gap-5 rounded-sm border border-[#E7665D]/20 bg-[#FCFAF7] px-7 py-7 sm:flex-row sm:items-center sm:px-9"
        >
          <div>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
              Your Book. Your Rights.
            </span>

            <p className="mt-2 font-serif text-xl font-medium text-ink sm:text-2xl">
              Make an informed publishing decision.
            </p>

            <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-ink-muted">
              Understand your options, protect your creative
              ownership and choose the publishing path that
              supports your goals.
            </p>
          </div>

          <Link
            href="/contact-us#manuscript-review"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-[#E7665D] px-5 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#D9574E]"
          >
            Discuss Your Publishing Options
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
