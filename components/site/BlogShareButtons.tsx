"use client";

import React, { useState } from "react";
import { Copy, Check, Twitter, Linkedin, Facebook, Share2 } from "lucide-react";

type BlogShareButtonsProps = {
    title: string;
    url?: string;
};

export default function BlogShareButtons({ title, url }: BlogShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const getShareUrl = (): string => {
        if (url) return url;
        if (typeof window !== "undefined") return window.location.href;
        return "https://www.thecollingwoodpress.com/blog";
    };

    const handleCopy = async () => {
        const shareUrl = getShareUrl();
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(shareUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2400);
            }
        } catch (err) {
            console.error("Failed to copy link:", err);
        }
    };

    const shareUrl = encodeURIComponent(getShareUrl());
    const shareTitle = encodeURIComponent(title);

    const twitterHref = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
    const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
    const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

    return (
        <div className="flex flex-wrap items-center gap-2">
            <span className="hidden items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted sm:inline-flex">
                <Share2 className="h-3.5 w-3.5 text-[#E7665D]" /> Share:
            </span>

            {/* Copy Link Button */}
            <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy article link"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink transition-all hover:border-[#E7665D] hover:text-[#E7665D] active:scale-95 shadow-subtle"
            >
                {copied ? (
                    <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Link Copied!</span>
                    </>
                ) : (
                    <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Link</span>
                    </>
                )}
            </button>

            {/* Share to X / Twitter */}
            <a
                href={twitterHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X (Twitter)"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-ink transition-all hover:border-[#E7665D] hover:bg-[#E7665D] hover:text-white shadow-subtle"
            >
                <Twitter className="h-3.5 w-3.5" />
            </a>

            {/* Share to LinkedIn */}
            <a
                href={linkedInHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-ink transition-all hover:border-[#E7665D] hover:bg-[#E7665D] hover:text-white shadow-subtle"
            >
                <Linkedin className="h-3.5 w-3.5" />
            </a>

            {/* Share to Facebook */}
            <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-ink transition-all hover:border-[#E7665D] hover:bg-[#E7665D] hover:text-white shadow-subtle"
            >
                <Facebook className="h-3.5 w-3.5" />
            </a>
        </div>
    );
}
