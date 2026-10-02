"use client";

import { useState } from "react";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Lock,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <UtilityBar />
      <Header />
      <main className="bg-white text-ink">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <Eyebrow tone="coral" align="center">
                Publisher Inquiries &bull; Direct Editorial Line
              </Eyebrow>

              <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.2rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                Connect directly with{" "}
                <span className="italic text-[#E7665D] block sm:inline">our publishing directors.</span>
              </h1>

              <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                Whether you are holding an unpolished first draft or an active production-ready manuscript, our doors and phone lines are open. We invite authors to discuss their publishing vision without sales pressure.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white border-b border-line">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Phone */}
              <a
                href="tel:+19362233644"
                className="p-8 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col items-center text-center group hover:border-[#E7665D]/50 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink">
                  Direct Press Line
                </h3>
                <span className="font-sans text-sm text-[#E7665D] font-semibold mt-1">
                  +1 (936) 223-3644
                </span>
                <p className="text-xs text-ink-muted mt-2">
                  Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM EST
                </p>
              </a>

              {/* Email */}
              <a
                href="mailto:info@thecollingwoodpress.com"
                className="p-8 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col items-center text-center group hover:border-[#E7665D]/50 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink">
                  General &amp; Editorial Inquiries
                </h3>
                <span className="font-sans text-sm text-[#E7665D] font-semibold mt-1 break-all">
                  info@thecollingwoodpress.com
                </span>
                <p className="text-xs text-ink-muted mt-2">
                  Expect a prompt editorial reply within 24 hours
                </p>
              </a>

              {/* Office Location */}
              <div className="p-8 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4">
                  <MapPin size={22} />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink">
                  Publishing House
                </h3>
                <span className="font-sans text-sm text-ink font-semibold mt-1">
                  Ontario, California, USA
                </span>
                <p className="text-xs text-ink-muted mt-2">
                  Subsidiary of Hambone Publishers LLC
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Manuscript Review Form Section */}
        <section id="manuscript-review" className="py-20 lg:py-28 bg-white border-b border-line">
          <Container>
            <div className="mx-auto max-w-3xl rounded-sm border border-[#E7665D]/25 bg-white p-8 sm:p-12 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]">
              <div className="text-center max-w-xl mx-auto flex flex-col items-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#fdf6f5] text-[#E7665D] font-sans text-xs font-semibold tracking-wider uppercase border border-[#E7665D]/20">
                  <ShieldCheck size={14} />
                  <span>Complimentary Editorial Evaluation</span>
                </span>

                <h2 className="mt-4 font-serif text-[2.2rem] sm:text-[2.7rem] font-normal text-ink leading-tight text-balance">
                  Submit your manuscript for{" "}
                  <span className="italic text-[#E7665D]">expert appraisal</span>
                </h2>

                <p className="mt-3 font-sans text-[0.98rem] leading-relaxed text-ink-soft">
                  Within 5&ndash;7 business days, a senior trade acquisitions editor reviews your synopsis and sample chapters, returning a constructive diagnostic assessment.
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
                    Submission Received with Appreciation
                  </h3>
                  <p className="text-sm font-sans text-ink-soft max-w-md">
                    Your materials have been safely logged and assigned to our Editorial Acquisitions Board. Expect our written evaluation and telephone consultation offer within 5 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-sans text-[#E7665D] underline hover:text-ink"
                  >
                    Submit another manuscript
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-medium text-ink">
                      Author Full Name <span className="text-[#E7665D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Katherine Vance"
                      className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:border-[#E7665D] outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-medium text-ink">
                      Email Address <span className="text-[#E7665D]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="author@example.com"
                      className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:border-[#E7665D] outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-medium text-ink">
                      Direct Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:border-[#E7665D] outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-medium text-ink">
                      Working Title &amp; Genre
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., The Silent Moor (Literary Mystery)"
                      className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:border-[#E7665D] outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="font-sans text-xs font-medium text-ink">
                      Estimated Word Count &amp; Current Manuscript Status
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 82,000 words &bull; Complete second draft"
                      className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:border-[#E7665D] outline-none transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-medium text-ink">
                      Synopsis &amp; Publication Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your book, your intended audience, and what level of publishing support you are seeking..."
                      className="rounded-sm border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:border-[#E7665D] outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 mt-2">
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      <span>Submit for Senior Editorial Evaluation</span>
                      <ArrowRight size={15} />
                    </Button>
                  </div>
                </form>
              )}

              {/* Guarantees */}
              <div className="mt-8 pt-6 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-sans text-xs text-ink-muted">
                <div className="flex items-center justify-center gap-2">
                  <Clock size={15} className="text-[#E7665D] shrink-0" />
                  <span>5&ndash;7 Business Day Review</span>
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
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
