
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    ArrowRight,
    CheckCircle2,
    Mail,
    MapPin,
    Phone,
    BookOpen,
    Headphones,
    Send,
    Facebook,
    Instagram,
    Linkedin,
} from "lucide-react";

import Container from "@/components/ui/Container";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { submitToGoogleSheet } from "@/lib/submitToGoogleSheet";
import HeroSection from "../sections/HeroSection";

interface ContactFormData {
    manuscript: string;
    name: string;
    email: string;
    phone: string;
    marketingConsent: boolean;
}

const initialFormData: ContactFormData = {
    manuscript: "",
    name: "",
    email: "",
    phone: "+1 ",
    marketingConsent: false,
};

const contactOptions = [
    {
        icon: Mail,
        title: "General Inquiries",
        description:
            "Questions about our services, process, or anything else? We're here to help.",
        buttonText: "Contact Us",
        href: "#publishing-form",
    },
    {
        icon: Headphones,
        title: "Audiobook Quote",
        description:
            "Get a personalized quote for your audiobook project—fast and easy.",
        buttonText: "Get a Quote",
        href: "/audiobook",
    },
    {
        icon: BookOpen,
        title: "Submit Manuscript",
        description:
            "Ready to publish? Send us your manuscript and we'll review it promptly.",
        buttonText: "Submit Manuscript",
        href: "#publishing-form",
    },
];

const socialLinks = [
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/company/collingwood-press/",
        label: "LinkedIn",
    },
    {
        icon: Facebook,
        href: "https://www.facebook.com/theCollingwoodpress",
        label: "Facebook",
    },
    {
        icon: Instagram,
        href: "https://www.instagram.com/thecollingwoodpress/",
        label: "Instagram",
    },
];

export default function ContactUsClientPage() {
    const [formData, setFormData] =
        useState<ContactFormData>(initialFormData);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();



    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setError("");

        try {
            const result = await submitToGoogleSheet({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.manuscript,
                source: "Contact Us Page - Publishing Form",
                marketingConsent: formData.marketingConsent,
                preventRedirect: true,
            });

            // Submission failed
            if (!result.success) {
                setError(
                    result.message ||
                    "Something went wrong. Please try again."
                );
                return;
            }

            // Submission successful - redirect to Thank You page
            const authorName = formData.name.trim();

            const thankYouUrl = authorName
                ? `/thankyou?name=${encodeURIComponent(authorName)}`
                : "/thankyou";

            router.push(thankYouUrl);

        } catch (error) {
            console.error("Contact form submission error:", error);

            setError(
                "Unable to submit your request. Please try again later."
            );
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            <UtilityBar />
            <Header />

            <main className="bg-white text-ink">
                {/* =====================================
            CONTACT HERO SECTION
        ===================================== */}

                <HeroSection
                    className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white"
                    eyebrow="Contact Our Publishing Team"
                    title="Let's Talk About"
                    highlightText="Your Book."
                    description={
                        <p>
                            We respond to every inquiry within 1 business day.
                            Share your vision, questions, or manuscript—our
                            team is ready to help.
                        </p>
                    }
                    buttons={[]}
                    guarantees={[]}
                />


                {/* =====================================
            CONTACT OPTION CARDS
        ===================================== */}
                <section className="border-b border-line bg-[#fdfbf7] py-16 sm:py-20 lg:py-24">
                    <Container>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                            {contactOptions.map((option) => {
                                const Icon = option.icon;

                                return (
                                    <div
                                        key={option.title}
                                        className="group flex flex-col items-center rounded-xl border border-[#E7665D]/25 bg-white p-7 text-center shadow-[0_4px_24px_rgba(231,102,93,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/50 hover:shadow-[0_8px_36px_rgba(231,102,93,0.16)] sm:p-8"
                                    >
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#E7665D]/20 bg-[#fdf6f5] text-[#E7665D] transition-all duration-300 group-hover:bg-[#E7665D] group-hover:text-white">
                                            <Icon size={22} />
                                        </div>

                                        <h2 className="font-serif text-xl font-bold text-ink">
                                            {option.title}
                                        </h2>

                                        <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink-soft">
                                            {option.description}
                                        </p>

                                        <Link
                                            href={option.href}
                                            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#E7665D] px-5 py-3 font-sans text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D8574E]"
                                        >
                                            {option.buttonText}
                                            <ArrowRight size={15} />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </section>



                {/* Contact Form Section */}
                <section
                    id="publishing-form"
                    className="scroll-mt-24 bg-[#fdfbf7] py-20 lg:py-28 border-b border-line"
                >
                    <Container>
                        {/* Section Heading */}
                        <div className="mx-auto mb-12 max-w-2xl text-center"
                            id="manuscript-review"
                        >
                            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
                                Start Your Publishing Journey
                            </span>

                            <h2 className="mt-4 font-serif text-[2.2rem] sm:text-[2.8rem] font-bold text-ink leading-tight">
                                Ready to{" "}
                                <span className="italic text-[#E7665D]">
                                    Publish?
                                </span>
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl font-sans text-sm sm:text-base text-ink-soft leading-relaxed">
                                Tell us about your manuscript and connect directly
                                with our publishing team.
                            </p>
                        </div>

                        {/* Contact Form + Office Information */}
                        <div

                            className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">

                            {/* Left - Publishing Form */}
                            <div className="rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-9 lg:p-10 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]">
                                <div className="mb-8">
                                    <span className="font-sans text-[10px] uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                        Manuscript Inquiries
                                    </span>

                                    <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-ink">
                                        Let&apos;s Bring Your Book to Life
                                    </h3>

                                    <p className="mt-3 font-sans text-sm text-ink-soft leading-relaxed">
                                        Share your publishing goals with our editorial team.
                                        Complete the form below and we&apos;ll be in touch.
                                    </p>
                                </div>


                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-5"
                                >
                                    {/* Name */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-name"
                                            className="font-sans text-xs font-semibold text-ink"
                                        >
                                            Full Name <span className="text-[#E7665D]">*</span>
                                        </label>

                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    name: e.target.value,
                                                }))
                                            }
                                            className="w-full rounded-lg border border-[#E5E0DA] bg-[#fdfbf7] px-4 py-3.5 font-sans text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-all focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-email"
                                            className="font-sans text-xs font-semibold text-ink"
                                        >
                                            Email Address <span className="text-[#E7665D]">*</span>
                                        </label>

                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    email: e.target.value,
                                                }))
                                            }
                                            className="w-full rounded-lg border border-[#E5E0DA] bg-[#fdfbf7] px-4 py-3.5 font-sans text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-all focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-phone"
                                            className="font-sans text-xs font-semibold text-ink"
                                        >
                                            Phone Number <span className="text-[#E7665D]">*</span>
                                        </label>

                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            pattern="\+1 [0-9]{10}"
                                            title="Enter a 10-digit US phone number"
                                            onChange={(e) => {
                                                const value = e.target.value;

                                                if (!value.startsWith("+1 ")) return;

                                                const digits = value
                                                    .slice(3)
                                                    .replace(/\D/g, "");

                                                if (digits.length > 10) return;

                                                setFormData((prev) => ({
                                                    ...prev,
                                                    phone: "+1 " + digits,
                                                }));
                                            }}
                                            className="w-full rounded-lg border border-[#E5E0DA] bg-[#fdfbf7] px-4 py-3.5 font-sans text-sm text-ink outline-none transition-all focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15"
                                        />
                                    </div>

                                    {/* Manuscript Details */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="contact-manuscript"
                                            className="font-sans text-xs font-semibold text-ink"
                                        >
                                            Tell Us About Your Manuscript{" "}
                                            <span className="text-[#E7665D]">*</span>
                                        </label>

                                        <textarea
                                            id="contact-manuscript"
                                            required
                                            rows={5}
                                            placeholder="Tell us about your book, its genre, current status, or the publishing services you need..."
                                            value={formData.manuscript}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    manuscript: e.target.value,
                                                }))
                                            }
                                            className="w-full resize-none rounded-lg border border-[#E5E0DA] bg-[#fdfbf7] px-4 py-3.5 font-sans text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-all focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15"
                                        />
                                    </div>

                                    {/* Marketing Consent */}
                                    <label className="flex cursor-pointer items-start gap-3">
                                        <input
                                            type="checkbox"
                                            checked={formData.marketingConsent}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    marketingConsent: e.target.checked,
                                                }))
                                            }
                                            className="mt-1 h-4 w-4 shrink-0 accent-[#E7665D]"
                                        />

                                        <span className="font-sans text-[11px] leading-relaxed text-ink-muted">
                                            By checking this box, you consent to receive
                                            marketing communications from The Collingwood
                                            Press. Msg &amp; data rates may apply. Reply
                                            STOP to unsubscribe. By submitting this form,
                                            you agree to our{" "}
                                            <Link
                                                href="/terms-and-conditions"
                                                className="font-semibold text-[#E7665D] underline"
                                            >
                                                Terms &amp; Conditions
                                            </Link>{" "}
                                            and{" "}
                                            <Link
                                                href="/privacy-policy"
                                                className="font-semibold text-[#E7665D] underline"
                                            >
                                                Privacy Policy
                                            </Link>
                                            .
                                        </span>
                                    </label>

                                    {error && (
                                        <p role="alert" className="text-xs text-red-600">
                                            {error}
                                        </p>
                                    )}

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#E7665D] px-6 py-4 font-sans text-sm font-semibold text-white shadow-[0_4px_12px_rgba(231,102,93,0.20)] transition-all duration-300 hover:bg-[#D8574E] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {isSubmitting
                                            ? "Submitting..."
                                            : "Submit Your Manuscript"}

                                        {!isSubmitting && <ArrowRight size={16} />}
                                    </button>
                                </form>

                            </div>

                            {/* Right - Contact Information */}
                            <div className="rounded-xl border border-[#E7665D]/25 bg-white p-7 sm:p-9 lg:p-10 shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]">
                                <div className="mb-7">
                                    <span className="font-sans text-[10px] uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                                        Direct Editorial Contact
                                    </span>

                                    <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-ink">
                                        Connect with Us
                                    </h3>

                                    <p className="mt-3 font-sans text-sm text-ink-soft leading-relaxed">
                                        Prefer to speak directly with our team?
                                        Reach us using the contact details below.
                                    </p>
                                </div>

                                {/* Map */}
                                <div className="overflow-hidden rounded-xl border border-[#E7665D]/20 shadow-sm">
                                    <a href="https://www.google.com/maps/search/?api=1&query=The+Collingwood+Press+6777+Camp+Bowie+Blvd+Fort+Worth+TX+76116"
                                        target="_blank"
                                    >
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.963072729635!2d-97.4339746!3d32.7202269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7323299d9751%3A0xcc1f2e674682154f!2sThe%20Collingwood%20Press!5e1!3m2!1sen!2sus!4v1792605694864!5m2!1sen!2sus"
                                            width="100%"
                                            height="260"
                                            style={{ border: "0" }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            title="The Collingwood Press Location"
                                        />
                                    </a>

                                </div>

                                {/* Contact Details */}
                                <div className="mt-8 flex flex-col gap-5">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D]">
                                            <MapPin size={19} />
                                        </div>

                                        <div>
                                            <h4 className="font-sans text-sm font-semibold text-ink">
                                                Office Address
                                            </h4>
                                            <a href="https://www.google.com/maps/search/?api=1&query=The+Collingwood+Press+6777+Camp+Bowie+Blvd+Fort+Worth+TX+76116" target="_blank">

                                                <p className="mt-1 font-sans text-sm leading-relaxed text-ink-soft">
                                                    6777 Camp Bowie Blvd Ste. 125,
                                                    Fort Worth, TX 76116
                                                </p>
                                            </a>

                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D]">
                                            <Phone size={19} />
                                        </div>

                                        <div>
                                            <h4 className="font-sans text-sm font-semibold text-ink">
                                                Phone Number
                                            </h4>

                                            <a
                                                href="tel:+19362233644"
                                                className="mt-1 block font-sans text-sm text-ink-soft hover:text-[#E7665D]"
                                            >
                                                +1 (936) 223-3644
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdf6f5] text-[#E7665D]">
                                            <Mail size={19} />
                                        </div>

                                        <div>
                                            <h4 className="font-sans text-sm font-semibold text-ink">
                                                Email Address
                                            </h4>

                                            <a
                                                href="mailto:info@thecollingwoodpress.com"
                                                className="mt-1 block break-all font-sans text-sm text-ink-soft hover:text-[#E7665D]"
                                            >
                                                info@thecollingwoodpress.com
                                            </a>
                                        </div>
                                    </div>
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
