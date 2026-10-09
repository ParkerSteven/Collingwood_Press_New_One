
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  BookOpenText,
} from "lucide-react";

const businessInfo = {
  name: "The Collingwood Press",
  street: "[INSERT street address]",
  city: "Fort Worth",
  state: "TX",
  zip: "[INSERT ZIP]",
  phone: "[INSERT phone]",
  email: "[INSERT email]",
};

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="hero-gradient relative overflow-hidden border-b border-white/10 bg-[#0D1527] py-20 text-white sm:py-28 lg:py-32"
    >
      {/* Ambient background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[750px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7665D]/[0.06] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#4D6FA8]/10 blur-3xl"
      />

      <Container className="relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E7665D]" />

            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F08A82]">
              Your Next Step Starts Here
            </span>

            <span className="h-px w-8 bg-[#E7665D]" />
          </div>

          {/* Heading */}
          <h2
            id="final-cta-heading"
            className="font-serif text-[2.4rem] max-w-2xl font-medium leading-[1.08] tracking-tight text-white sm:text-[2.7rem] lg:text-[2.9rem]"
          >
            Ready to Publish Your Book?{" "}
            <span className="block italic font-normal text-[#F08A82] sm:inline">
              Let&apos;s Talk.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl font-sans text-[0.98rem] leading-[1.9] text-slate-300 sm:text-[1rem]">
            Send us your manuscript or your opening chapters.
            A senior editor will review your work and give you
            a candid, no-obligation assessment of where it
            stands and what it needs. Whether you are weeks
            from publication or still shaping a first draft,
            we will help you map the clearest path forward.
            With the right publishing partner, your manuscript can take its next step with confidence.
          </p>

          {/* Main button */}
          <div className="mt-9 flex flex-col items-center gap-4">
            <Button
              href="/contact-us#manuscript-review"
              variant="primary"
              size="lg"
              className="max-w-full px-7 py-4 text-center text-sm shadow-[0_10px_30px_rgba(231,102,93,0.22)] transition-shadow hover:shadow-[0_15px_35px_rgba(231,102,93,0.3)] sm:px-9 sm:text-base"
            >
              <BookOpenText
                size={17}
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <span>
                Submit Manuscript for Free Editorial Review
              </span>

              <ArrowRight
                size={16}
                aria-hidden="true"
              />
            </Button>
          </div>
        </motion.div>

        {/* Business NAP footer ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-16 max-w-5xl border-t border-white/15 pt-9 lg:mt-20"
        >
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#E7665D]/60" />

            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F08A82]">
              The Collingwood Press
            </span>

            <span className="h-px w-8 bg-[#E7665D]/60" />
          </div>

          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:gap-5">
            {/* Address */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#E7665D]/25 bg-[#E7665D]/10 text-[#F08A82]">
                <MapPin size={19} strokeWidth={1.6} />
              </div>

              <div>
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Press Location
                </span>

                <address className="mt-2 font-sans text-[0.82rem] not-italic leading-relaxed text-slate-200">
                  [INSERT ADDRESS HERE]
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#E7665D]/25 bg-[#E7665D]/10 text-[#F08A82]">
                <Phone size={19} strokeWidth={1.6} />
              </div>

              <div>
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Call Our Team
                </span>

                <p className="mt-2 font-sans text-[0.85rem] text-slate-200">
                  {businessInfo.phone}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#E7665D]/25 bg-[#E7665D]/10 text-[#F08A82]">
                <Mail size={19} strokeWidth={1.6} />
              </div>

              <div>
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Email Our Team
                </span>

                <p className="mt-2 font-sans text-[0.85rem] text-slate-200">
                  {businessInfo.email}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
