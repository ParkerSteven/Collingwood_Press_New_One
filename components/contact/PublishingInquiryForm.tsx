"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { submitToGoogleSheet, submitToNewGoogleSheet } from "@/lib/submitToGoogleSheet";
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
export default function PublishingInquiryForm() {
    const router = useRouter();
    const [formData, setFormData] =
        useState<ContactFormData>(initialFormData);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setError("");

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.manuscript,
            source: "Contact Us Page - Publishing Form",
            marketingConsent: formData.marketingConsent,
            websiteUrl: window.location.href,
        };

        console.log("++++++", payload);


        try {
            // Send data to old Make.com and new Google Sheet
            const [oldResult, newResult] = await Promise.all([
                submitToGoogleSheet({
                    ...payload,
                    preventRedirect: true,
                }),
                submitToNewGoogleSheet(payload),
            ]);

            // New Google Sheet submission failed
            if (!newResult.success) {
                console.error(
                    "New Google Sheet submission failed:",
                    newResult.message
                );

                setError(
                    "Could not save your form to the new Google Sheet. Please contact support before submitting again."
                );
                return;
            }

            // Existing Make.com submission failed
            if (!oldResult.success) {
                console.warn(
                    "Make.com submission failed:",
                    oldResult.message
                );
            }

            // Redirect after new Google Sheet succeeds
            const authorName = formData.name.trim();

            const thankYouUrl = authorName
                ? `/thankyou?name=${encodeURIComponent(authorName)}`
                : "/thankyou";

            router.push(thankYouUrl);

        } catch (error) {
            console.error("Contact form error:", error);
            setError("Unable to submit your request.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
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
    );
}
