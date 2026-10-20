
"use client";

import { submitToGoogleSheet } from "@/lib/submitToGoogleSheet";
import { useState, type FormEvent } from "react";

interface OptOutFormData {
    fullName: string;
    email: string;
    state: string;
    optOutSale: boolean;
    optOutAdvertising: boolean;
}

export default function PrivacyOptOutForm() {
    const effectiveDate = "January 1st, 2026";
    const reviewDate = "January 1st, 2026";

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        state: "",
        doNotSell: false,
        doNotShare: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: any) => {
        const { name, value, type, checked }: any = e.target;
        setFormData((prev: any) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccessMessage("");

        if (!formData.doNotSell && !formData.doNotShare) {
            setError("Please select at least one privacy request option.");
            return;
        }

        if (isSubmitting) return;
        setIsSubmitting(true);

        const privacyMessage = [
            "*** PRIVACY REQUEST - NOT A LEAD ***",
            "----------------------------------",
            `State of Residence: ${formData.state}`,
            `Opt-out (Do Not Sell): ${formData.doNotSell ? "YES" : "NO"}`,
            `Opt-out (Do Not Share): ${formData.doNotShare ? "YES" : "NO"}`,
            `Effective Date: ${effectiveDate} | Review Date: ${reviewDate}`,
            "----------------------------------",
            "Please process this request within 15 business days.",
        ].join("\n");

        try {
            const result = await submitToGoogleSheet({
                name: formData.fullName,
                email: formData.email,
                message: privacyMessage,
                source: "PRIVACY REQUEST (NOT A LEAD)",
                preventRedirect: true,
            });

            if (result.success) {
                setSuccessMessage(
                    "Your privacy request has been submitted successfully. We will process it within 15 business days."
                );
                setFormData({
                    fullName: "",
                    email: "",
                    state: "",
                    doNotSell: false,
                    doNotShare: false,
                });
            } else {
                setError(
                    result.message || "There was an issue submitting your request. Please try again."
                );
            }
        } catch (err) {
            console.error("Privacy request submission error:", err);
            setError("There was an unexpected error. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <input
                type="text"
                required
                name="fullName"
                aria-label="Full Name"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-[#E7665D]"
            />

            <input
                type="email"
                required
                name="email"
                aria-label="Email Address"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-[#E7665D]"
            />

            <input
                type="text"
                required
                name="state"
                aria-label="State of Residence"
                placeholder="State of Residence"
                value={formData.state}
                onChange={handleChange}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-[#E7665D]"
            />

            <div className="mt-2 flex flex-col gap-3">
                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
                    <input
                        type="checkbox"
                        name="doNotSell"
                        checked={formData.doNotSell}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 accent-[#E7665D]"
                    />
                    <span>Do Not Sell My Personal Information</span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
                    <input
                        type="checkbox"
                        name="doNotShare"
                        checked={formData.doNotShare}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 accent-[#E7665D]"
                    />
                    <span>
                        Do Not Share My Personal Information for Behavioral Advertising
                    </span>
                </label>
            </div>

            {error && (
                <p role="alert" className="text-xs font-medium text-red-600">
                    {error}
                </p>
            )}

            {successMessage && (
                <div
                    role="status"
                    className="rounded-lg border border-green-200 bg-green-50 p-4 text-xs font-medium text-green-800"
                >
                    {successMessage}
                </div>
            )}

            <div className="mt-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-[#344768] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E7665D] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
            </div>
        </form>
    );
}
