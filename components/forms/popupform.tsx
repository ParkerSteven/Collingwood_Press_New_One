"use client";

import { useState, useEffect, useCallback, type ChangeEvent, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { submitToGoogleSheet } from "@/lib/submitToGoogleSheet";
import Link from "next/link";
import Image from "next/image";

export interface PopupFormProps {
    isOpen: boolean;
    onClose: () => void;
    source: string;
}

interface PopupFormData {
    manuscript: string;
    name: string;
    email: string;
    phone: string;
    marketingConsent: boolean;
}

const PopupForm = ({ isOpen, onClose, source }: PopupFormProps) => {
    const [formData, setFormData] = useState<PopupFormData>({
        manuscript: "",
        name: "",
        email: "",
        phone: "+1 ",
        marketingConsent: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mounted, setMounted] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Escape key handler to close modal
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, handleClose]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        const submissionSource = source || "Home Page Popup";

        const result = await submitToGoogleSheet({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.manuscript,
            source: submissionSource,
            marketingConsent: formData.marketingConsent,
            preventRedirect: true, // Prevent the library redirect to handle download and smooth route transition client-side
        });

        if (!result.success) {
            alert(result.message);
            setIsSubmitting(false);
            return;
        }

        // Save flags in localStorage so popup won't show again
        try {
            localStorage.setItem("ink_to_legacy_submitted", "true");
            localStorage.setItem("hasSubmittedLeadForm", "true");
        } catch (err) {
            console.error("Failed to save popup flag to localStorage:", err);
        }

        // Automatically download the specified checklist PDF
        try {
            const link = document.createElement("a");
            link.href =
                "/assets/docs/The Authors Scam-Proof & Cost Checklist (F).pdf";
            link.setAttribute(
                "download",
                "The Authors Scam-Proof & Cost Checklist (F).pdf",
            );
            link.rel = "noopener";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            console.error("Failed to auto-download PDF:", err);
        }

        // Clear form data
        setFormData({
            manuscript: "",
            name: "",
            email: "",
            phone: "+1 ",
            marketingConsent: false,
        });

        handleClose();

        // Smooth client-side redirect to thank you page
        const encodedName = encodeURIComponent((formData.name || "").trim());
        router.push(`/thankyou${encodedName ? `?name=${encodedName}` : ""}`);
        setIsSubmitting(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.currentTarget;

        if (name === "phone") {
            if (!value.startsWith("+1 ")) return;
            const digits = value.slice(3).replace(/\D/g, "");
            if (digits.length > 10) return;
            setFormData((prev) => ({ ...prev, phone: "+1 " + digits }));
            return;
        }

        if (name === "marketingConsent" && e.currentTarget instanceof HTMLInputElement) {
            const checked = e.currentTarget.checked;
            setFormData((prev) => ({ ...prev, marketingConsent: checked }));
            return;
        }

        if (name === "name" || name === "email" || name === "manuscript") {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    if (!isOpen || !mounted) return null;

    return createPortal(
        <>
            <style>{`
        .lead-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 1000;
          backdrop-filter: blur(4px);
          overflow-y: auto;
          box-sizing: border-box;
        }

        .lead-popup-panel {
          position: relative;
          display: flex;
          width: min(930px, 100%);
          max-height: calc(100dvh - 32px);
          min-height: 0;
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 22px 70px rgba(15, 23, 42, 0.3);
          animation: leadPopupFadeIn 0.3s ease-out;
        }

        @keyframes leadPopupFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .lead-popup-left {
          width: 42%;
          min-width: 0;
          background: linear-gradient(180deg, #1f2a44 0%, #1c2940 100%);
          color: #fff;
          padding: 40px 36px 36px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-sizing: border-box;
           overflow-y: auto;

        }

        .lead-popup-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #d5b77a;
          margin-bottom: 20px;
        }

        .lead-popup-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(213, 183, 122, 0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d5b77a;
          margin-bottom: 20px;
        }

        .lead-popup-icon svg {
          width: 26px;
          height: 26px;
        }

        .lead-popup-left h3 {
          margin: 0 0 20px;
          color: #fff;
          font-size: 24px;
          line-height: 1.25;
          font-family: 'Vidaloka', serif !important;
          font-weight: 700;
        }

        .lead-popup-left ul {
          margin: 0;
          padding-left: 18px;
          list-style: disc;
          color: rgba(255, 255, 255, 0.87);
          font-size: 14px;
          line-height: 1.8;
        }

        .lead-popup-left li + li {
          margin-top: 6px;
        }

        .lead-popup-security-message {
          color: #fff !important;
          font-size: 12px !important;
          line-height: 1.45 !important;
        }

        .lead-popup-contact-details {
          padding: 12px;
          margin-top: 18px !important;
        }

        .lead-popup-contact-details > div {
          margin-bottom: 12px;
        }

        .lead-popup-contact-details > div:last-child {
          margin-bottom: 0;
        }

        .lead-popup-contact-details span,
        .lead-popup-contact-details a {
          font-size: 12px !important;
          line-height: 1.45;
        }

        .lead-popup-trust {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(213, 183, 122, 0.2);
          border-radius: 10px;
          padding: 14px 12px;
          margin-top: 18px;
          max-width: 260px;
        }

        .lead-popup-trust-logos {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          height: 105px;
        }

        .lead-popup-trust-logos img {
          display: block;
          width: auto;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        .lead-popup-trust-logos img:first-child {
          width: min(170px, 100%);
        }

        .lead-popup-trust-logos img:last-child {
          width: min(150px, 100%);
        }

        .lead-popup-trust strong {
          display: block;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
        }

        .lead-popup-footer-line {
          width: 100%;
          margin-top: 16px;
          font-size: 10px;
          line-height: 1.5;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          overflow-wrap: anywhere;
        }

        .lead-popup-right {
          width: 58%;
          min-width: 0;
          background: #f8f7f4;
          padding: 44px 38px 30px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .lead-popup-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(31, 42, 68, 0.18);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: #1f2a44;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .lead-popup-close:hover {
          background: #fff;
          border-color: rgba(31, 42, 68, 0.3);
          transform: scale(1.05);
        }

        .lead-popup-mini-label {
          display: inline-block;
          align-self: flex-start;
          font-size: 10px;
          letter-spacing: 0.14em;
          font-weight: 700;
          text-transform: uppercase;
          color: #7c6a43;
          background: rgba(213, 183, 122, 0.12);
          border-radius: 999px;
          padding: 6px 12px;
          margin-bottom: 12px;
        }

        .lead-popup-right h2 {
          margin: 0 0 10px;
          color: #1f2a44 !important;
          font-size: clamp(24px, 2.2vw, 32px);
          line-height: 1.15;
          font-family: 'Vidaloka', serif !important;
          font-weight: 700;
        }

        .lead-popup-right p.lead-popup-sub {
          margin: 0 0 20px;
          color: #4a5568 !important;
          font-size: 14px;
          line-height: 1.6;
        }

        .lead-popup-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .lead-popup-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .lead-popup-field label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1f2a44;
          opacity: 0.9;
        }

        .lead-popup-field input,
        .lead-popup-field textarea {
          width: 100%;
          border: 1px solid rgba(31, 42, 68, 0.2);
          background: rgba(255, 255, 255, 0.85);
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 14px;
          color: #1f2a44;
          outline: none;
          box-sizing: border-box;
          font-family: inherit;
        }

        .lead-popup-field textarea {
          resize: none;
          height: 80px;
        }

        .lead-popup-field input::placeholder,
        .lead-popup-field textarea::placeholder {
          color: #7d8596;
        }

        .lead-popup-field input:focus,
        .lead-popup-field textarea:focus {
          border-color: rgba(31, 42, 68, 0.5);
          box-shadow: 0 0 0 2px rgba(31, 42, 68, 0.08);
        }

        .lead-popup-submit {
          margin-top: 6px;
          width: 100%;
          border: none;
          border-radius: 8px;
          background: #1f2a44;
          color: #fff;
          cursor: pointer;
          padding: 14px 18px;
          font-size: 16px;
          font-weight: 700;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: inherit;
        }

        .lead-popup-submit:hover {
          background: #151e30;
          transform: translateY(-1px);
        }

        .lead-popup-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .lead-popup-meta {
          margin-top: 14px;
          text-align: center;
          color: #5b687d;
          font-size: 12px;
          line-height: 1.6;
        }

        .lead-popup-meta button {
          display: block;
          margin: 6px auto 0;
          border: none;
          background: transparent;
          color: #1f2a44;
          cursor: pointer;
          text-decoration: underline;
          font-size: 12px;
          font-weight: 500;
        }
        @media (max-width: 820px) {
          .lead-popup-overlay {
            align-items: flex-start;
          }

          .lead-popup-panel {
            flex-direction: column;
            width: min(540px, 100%);
            max-height: calc(100dvh - 32px);
            overflow-y: auto;
            margin: auto 0;
          }

          .lead-popup-left,
          .lead-popup-right {
            width: 100%;
          }

          .lead-popup-left {
            padding: 30px 24px;
            gap: 16px;
          }

          .lead-popup-left > div:last-child {
            margin-top: 0;
          }

          .lead-popup-right {
            padding: 30px 24px;
            overflow-y: visible;
          }

          .lead-popup-trust {
            max-width: none;
          }
        }

        @media (max-width: 480px) {
          .lead-popup-overlay {
            padding: 8px;
          }

          .lead-popup-panel {
            border-radius: 12px;
            max-height: calc(100dvh - 16px);
          }

          .lead-popup-left {
            padding: 24px 16px;
          }

          .lead-popup-right {
            padding: 24px 16px;
          }

          .lead-popup-right h2 {
            font-size: 22px;
          }

          .lead-popup-footer-line {
            font-size: 9px;
            letter-spacing: 0.1em;
          }

          .lead-popup-close {
            top: 12px;
            right: 12px;
          }
        }
      `}</style>

            {/* Backdrop */}
            <div
                className="lead-popup-overlay"
                onClick={handleClose}
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-heading"
                aria-describedby="popup-subheading"
            >
                {/* Modal Panel */}
                <div className="lead-popup-panel" onClick={(e) => e.stopPropagation()}>
                    {/* Left Column - Navy Information Panel */}
                    <div className="lead-popup-left">
                        <div>
                            <div className="lead-popup-badge">Security Notice</div>

                            <h3 id="popup-heading">Protecting Our Author Community</h3>

                            <p className="lead-popup-security-message text-sm leading-relaxed">
                                We&apos;ve been made aware of fraudulent individuals and
                                organizations falsely claiming to represent The Collingwood
                                Press. To help protect our authors, please verify that all
                                communications originate from our official email domain, phone
                                numbers, and verified channels listed below.
                            </p>
                        </div>

                        <div>
                            <div className="lead-popup-contact-details mt-5 rounded-xl border border-white/10 bg-white/5">
                                <div className="mb-4">
                                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                                        Official Email
                                    </span>
                                    <span className="mt-1 block text-sm font-medium text-white">
                                        contact@thecollingwoodpress.com
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                                        Official Phone Numbers
                                    </span>

                                    <div className="mt-2 flex flex-col gap-1 font-medium text-white">
                                        <a href="tel:+19362233644">(936) 223-3644</a>
                                        <a href="tel:+19362233730">(936) 223-3730</a>
                                        <a href="tel:+18176324550">(817) 632-4550</a>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-3">
                                    <p className="lead-popup-security-message text-xs leading-relaxed">
                                        We will never send unsolicited calls, use generic email
                                        domains, or request wire transfers. Any communication
                                        outside these official channels should be treated as
                                        fraudulent and reported immediately.
                                    </p>
                                </div>
                            </div>
                            <div className="lead-popup-trust">
                                <div className="lead-popup-trust-logos">
                                    {/* IBPA */}
                                    <Link
                                        href="https://www.ibpa-online.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src="/assets/images/IBPA_H_proudmember.png"
                                            alt="IBPA Proud Member"
                                            width={170}
                                            height={50}
                                        />
                                    </Link>

                                    {/* BBB */}
                                    <Link
                                        href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src="/assets/images/blue-seal-200-42-whitetxt-bbb-1000231047.png"
                                            alt="BBB Accredited"
                                            width={150}
                                            height={42}
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="lead-popup-footer-line ">
                                Official Communication Channels • The Collingwood Press
                            </div>
                        </div>
                    </div>

                    {/* Right Column - White Form Panel */}
                    <div className="lead-popup-right">
                        {/* Close Button 'x' */}
                        <button
                            type="button"
                            onClick={handleClose}
                            className="lead-popup-close"
                            aria-label="Close popup"
                        >
                            ×
                        </button>

                        <div className="lead-popup-mini-label">Free Download</div>

                        <h2>Thinking About Publishing Your Book?</h2>

                        <p id="popup-subheading" className="lead-popup-sub">
                            Get the checklist 1,500+ authors have used to spot scams and
                            budget their launch correctly — before they sign with anyone.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="lead-popup-form"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            {/* Name */}
                            <div className="lead-popup-field">
                                <label htmlFor="popup-name">First Name</label>
                                <input
                                    id="popup-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jordan"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="lead-popup-field">
                                <label htmlFor="popup-email">Email Address</label>
                                <input
                                    id="popup-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@email.com"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="lead-popup-field">
                                <label htmlFor="popup-phone">Phone Number</label>
                                <input
                                    id="popup-phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    required
                                />
                            </div>

                            {/* Manuscript textarea */}
                            <div className="lead-popup-field">
                                <label htmlFor="popup-manuscript">
                                    Tell Us About Your Manuscript
                                </label>
                                <textarea
                                    id="popup-manuscript"
                                    name="manuscript"
                                    value={formData.manuscript}
                                    onChange={handleChange}
                                    placeholder="Genre, word count, current status, etc..."
                                    required
                                />
                            </div>

                            {/* Marketing Consent */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="popupMarketingConsent"
                                    name="marketingConsent"
                                    checked={formData.marketingConsent}
                                    onChange={handleChange}
                                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#1f2a44]"
                                />
                                <label
                                    htmlFor="popupMarketingConsent"
                                    className="text-[11px] text-gray-500 leading-relaxed cursor-pointer select-none"
                                >
                                    By checking this box, you consent to receive marketing
                                    communications from The Collingwood Press. Msg &amp; data rates
                                    may apply. Reply STOP to unsubscribe. By submitting this form,
                                    you agree to our{" "}
                                    <a
                                        href="/privacy-policy/"
                                        className="text-[#1f2a44] underline hover:text-[#EB6358]"
                                    >
                                        The Collingwood Press
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="/privacy-choices/"
                                        className="text-[#1f2a44] underline hover:text-[#EB6358]"
                                    >
                                        Your Privacy Choices
                                    </a>
                                    .
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="lead-popup-submit"
                            >
                                {isSubmitting ? "Sending..." : "Send Me the Free Checklist →"}
                            </button>
                        </form>

                        <div className="lead-popup-meta">
                            <span>
                                Instant download. We&apos;ll send two short follow-up emails —
                                unsubscribe anytime.
                            </span>
                            <button type="button" onClick={handleClose}>
                                No thanks, I&apos;ll keep browsing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

export default PopupForm;
