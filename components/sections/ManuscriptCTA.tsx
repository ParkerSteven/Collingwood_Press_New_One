"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ShieldCheck, Clock, PhoneCall, CheckCircle2, Lock, ArrowRight } from "lucide-react";

export default function ManuscriptCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="manuscript-review" className="bg-white py-20 lg:py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl border border-[#E7665D]/25 bg-white p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] rounded-sm"
        >
          {/* Header Plaque */}
          <div className="text-center max-w-xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#fdf6f5] text-[#E7665D] font-sans text-[11px] font-semibold tracking-[0.18em] uppercase border border-[#E7665D]/20">
              <ShieldCheck size={13} />
              <span>Complimentary Editorial Evaluation</span>
            </span>

            <h2 className="mt-4 font-serif text-[2.3rem] sm:text-[2.85rem] font-medium text-ink leading-tight text-balance">
              Your story&rsquo;s next chapter{" "}
              <span className="italic text-[#E7665D] font-normal">starts here</span>
            </h2>

            <p className="mt-3 font-sans text-[0.98rem] leading-relaxed text-ink-muted">
              Submit your manuscript or opening chapters. Within 5–7 business days, a senior trade
              editor reads your work and provides an honest, constructive appraisal—free of sales
              pressure or automated replies.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 p-8 rounded-sm bg-[#fdf6f5] border border-[#E7665D]/20 text-center flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-serif text-xl font-medium text-ink">
                Manuscript Received with Appreciation
              </h3>
              <p className="text-sm font-sans text-ink-soft max-w-md leading-relaxed">
                Your submission has been cataloged and assigned to our Senior Acquisitions Editor.
                Expect our comprehensive editorial appraisal and telephone invite within 5 business days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-sans text-[#E7665D] underline hover:text-ink transition-colors"
              >
                Submit another manuscript
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-[11.5px] font-semibold text-ink uppercase tracking-wider">
                  Author Full Name <span className="text-[#E7665D]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Katherine Vance"
                  className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 transition-all outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-[11.5px] font-semibold text-ink uppercase tracking-wider">
                  Email Address <span className="text-[#E7665D]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="author@example.com"
                  className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 transition-all outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-[11.5px] font-semibold text-ink uppercase tracking-wider">
                  Working Title &amp; Genre
                </label>
                <input
                  type="text"
                  placeholder="e.g., The Silent Moor (Literary Mystery)"
                  className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 transition-all outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-[11.5px] font-semibold text-ink uppercase tracking-wider">
                  Approximate Word Count / Status
                </label>
                <input
                  type="text"
                  placeholder="e.g., 75,000 words (Completed 2nd Draft)"
                  className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 transition-all outline-none"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="font-sans text-[11.5px] font-semibold text-ink uppercase tracking-wider">
                  Manuscript Synopsis &amp; Publishing Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your story, target readership, and what you hope to achieve with this publication..."
                  className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 transition-all outline-none"
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <Button type="submit" variant="primary" size="lg" className="w-full font-sans">
                  <span>Submit Manuscript for Senior Editor Appraisal</span>
                  <ArrowRight size={15} />
                </Button>
              </div>
            </form>
          )}

          {/* Three Reassurance Badges */}
          <div className="mt-8 pt-6 border-t border-line/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-sans text-xs text-ink-muted">
            <div className="flex items-center justify-center gap-2">
              <Clock size={15} className="text-[#E7665D] shrink-0" />
              <span>5–7 Business Day Review</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <PhoneCall size={15} className="text-[#E7665D] shrink-0" />
              <span>Direct Call with Editor</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Lock size={15} className="text-[#E7665D] shrink-0" />
              <span>100% Confidential &amp; Protected</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}