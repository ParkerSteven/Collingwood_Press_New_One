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
    Award,
    FileCheck2,
    Calendar,
    Sparkles
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
                    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E7665D]/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl pointer-events-none" />

                    <Container className="relative z-10">
                        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                            <Eyebrow tone="coral" align="center">
                                Publisher Inquiries &bull; Direct Editorial Line
                            </Eyebrow>

                            <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                                Connect directly with{" "}
                                <span className="italic text-[#E7665D] block sm:inline">our publishing directors.</span>
                            </h1>

                            <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                                Whether you are holding an unpolished first draft or an active production-ready manuscript, our doors and phone lines are open. We invite authors to discuss their publishing vision without sales pressure.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-white/80">
                                <span className="inline-flex items-center gap-1.5 bg-white/[0.06] px-3.5 py-1.5 rounded-full border border-white/10">
                                    <Clock size={13} className="text-[#E7665D]" />
                                    <span>Fast Response Within 24 Hours</span>
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-white/[0.06] px-3.5 py-1.5 rounded-full border border-white/10">
                                    <Lock size={13} className="text-[#E7665D]" />
                                    <span>Strict Non-Disclosure Protection</span>
                                </span>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Contact Info Cards */}
                <section className="py-16 sm:py-20 bg-white border-b border-line">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
                            {/* Phone */}
                            <a
                                href="tel:+19362233644"
                                className="p-8 sm:p-9 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col items-center text-center group hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4 group-hover:scale-105 group-hover:bg-[#E7665D] group-hover:text-white transition-all duration-300">
                                    <Phone size={22} />
                                </div>
                                <span className="font-sans text-[10px] uppercase tracking-wider text-[#E7665D] font-semibold bg-[#fdf6f5] px-2.5 py-0.5 rounded border border-[#E7665D]/20 mb-2">
                                    Telephone Desk
                                </span>
                                <h3 className="font-serif text-xl font-bold text-ink">
                                    Direct Press Line
                                </h3>
                                <span className="font-sans text-base text-[#E7665D] font-semibold mt-2 group-hover:underline">
                                    +1 (936) 223-3644
                                </span>
                                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                                    Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM EST<br />
                                    No automated call trees or gatekeepers
                                </p>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:info@thecollingwoodpress.com"
                                className="p-8 sm:p-9 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col items-center text-center group hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4 group-hover:scale-105 group-hover:bg-[#E7665D] group-hover:text-white transition-all duration-300">
                                    <Mail size={22} />
                                </div>
                                <span className="font-sans text-[10px] uppercase tracking-wider text-[#E7665D] font-semibold bg-[#fdf6f5] px-2.5 py-0.5 rounded border border-[#E7665D]/20 mb-2">
                                    Written Correspondence
                                </span>
                                <h3 className="font-serif text-xl font-bold text-ink">
                                    Editorial Inquiries
                                </h3>
                                <span className="font-sans text-base text-[#E7665D] font-semibold mt-2 break-all group-hover:underline">
                                    info@thecollingwoodpress.com
                                </span>
                                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                                    Expect a prompt, personalized reply from an editor within 24 business hours
                                </p>
                            </a>

                            {/* Office Location */}
                            <div className="p-8 sm:p-9 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col items-center text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-4">
                                    <MapPin size={22} />
                                </div>
                                <span className="font-sans text-[10px] uppercase tracking-wider text-[#E7665D] font-semibold bg-[#fdf6f5] px-2.5 py-0.5 rounded border border-[#E7665D]/20 mb-2">
                                    Publishing Offices
                                </span>
                                <h3 className="font-serif text-xl font-bold text-ink">
                                    Corporate Headquarters
                                </h3>
                                <span className="font-sans text-base text-ink font-semibold mt-2">
                                    Ontario, California, USA
                                </span>
                                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                                    The Collingwood Press<br />
                                    Subsidiary of Hambone Publishers LLC
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Manuscript Review Form Section */}
                <section id="manuscript-review" className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line">
                    <Container>
                        <div className="mx-auto max-w-3xl rounded-xl border border-[#E7665D]/25 bg-white p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]">
                            <div className="text-center max-w-xl mx-auto flex flex-col items-center">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#fdf6f5] text-[#E7665D] font-sans text-xs font-semibold tracking-wider uppercase border border-[#E7665D]/20">
                                    <ShieldCheck size={14} />
                                    <span>Complimentary Editorial Evaluation</span>
                                </span>

                                <h2 className="mt-4 font-serif text-[2.2rem] sm:text-[2.7rem] font-bold text-ink leading-tight text-balance">
                                    Submit your manuscript for{" "}
                                    <span className="italic text-[#E7665D]">expert appraisal</span>
                                </h2>

                                <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-ink-soft">
                                    Within 5&ndash;7 business days, a senior trade acquisitions editor reviews your synopsis and sample chapters, returning a constructive diagnostic assessment with zero obligation.
                                </p>
                            </div>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mt-10 p-8 sm:p-10 rounded-xl bg-[#fdf6f5] border border-[#E7665D]/20 text-center flex flex-col items-center gap-3.5"
                                >
                                    <div className="w-14 h-14 rounded-full bg-forest/10 text-forest flex items-center justify-center">
                                        <CheckCircle2 size={28} />
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-ink">
                                        Submission Received with Appreciation
                                    </h3>
                                    <p className="text-sm font-sans text-ink-soft max-w-md leading-relaxed">
                                        Your materials have been safely logged and assigned to our Editorial Acquisitions Board. Expect our written diagnostic assessment and telephone consultation offer within 5 business days.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-3 text-xs font-sans font-semibold text-[#E7665D] underline hover:text-ink transition-colors"
                                    >
                                        Submit another manuscript or message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
                                    {/* Author Details Block */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="font-sans text-xs font-semibold text-ink">
                                                Author Full Name <span className="text-[#E7665D]">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g., Katherine Vance"
                                                className="rounded-lg border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="font-sans text-xs font-semibold text-ink">
                                                Email Address <span className="text-[#E7665D]">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="author@example.com"
                                                className="rounded-lg border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="font-sans text-xs font-semibold text-ink">
                                                Direct Phone Number <span className="text-ink-muted font-normal">(optional)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                className="rounded-lg border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="font-sans text-xs font-semibold text-ink">
                                                Primary Service of Interest
                                            </label>
                                            <select
                                                className="rounded-lg border border-line bg-white px-4 py-3 text-[0.92rem] text-ink focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15 outline-none transition-all"
                                                defaultValue="publishing"
                                            >
                                                <option value="publishing">Full-Service Book Publishing</option>
                                                <option value="editing">Trade Editorial Services</option>
                                                <option value="ghostwriting">Bespoke Ghostwriting</option>
                                                <option value="audiobook">Audiobook Studio Production</option>
                                                <option value="marketing">Book Publicity &amp; Marketing</option>
                                                <option value="consultation">General Editorial Consultation</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Manuscript Scope */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="font-sans text-xs font-semibold text-ink">
                                                Working Title &amp; Literary Genre
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g., The Silent Moor (Literary Mystery)"
                                                className="rounded-lg border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="font-sans text-xs font-semibold text-ink">
                                                Estimated Word Count &amp; Manuscript Status
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g., 78,000 words &bull; Complete second draft"
                                                className="rounded-lg border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Synopsis / Publication Goals */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-sans text-xs font-semibold text-ink">
                                            Synopsis, Background &amp; Publishing Goals
                                        </label>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us about your book, your intended audience, any comparable titles, and what level of publishing support you are seeking..."
                                            className="rounded-lg border border-line bg-white px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/50 focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15 outline-none transition-all resize-none"
                                        />
                                    </div>

                                    {/* Action button */}
                                    <div className="pt-2">
                                        <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                                            <span>Submit for Senior Editorial Evaluation</span>
                                            <ArrowRight size={15} />
                                        </Button>
                                    </div>
                                </form>
                            )}

                            {/* Trust Guarantees */}
                            <div className="mt-10 pt-6 border-t border-line/70 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-sans text-xs text-ink-muted">
                                <div className="flex items-center justify-center gap-2">
                                    <Clock size={15} className="text-[#E7665D] shrink-0" />
                                    <span>5&ndash;7 Business Day Review</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <PhoneCall size={15} className="text-[#E7665D] shrink-0" />
                                    <span>Direct Call with Senior Editor</span>
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
