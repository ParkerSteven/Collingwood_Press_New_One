"use client";

import { Share2 } from "lucide-react";
import BlogShareButtons from "@/components/site/BlogShareButtons";

type BlogArticleActionsProps = {
    title: string;
    url: string;
};

/** Interactive article-share UI. Server page can import this safely. */
export default function BlogArticleActions({ title, url }: BlogArticleActionsProps) {
    return (
        <div className="mt-10 rounded-lg border border-[#e8e0dc] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    <Share2 className="h-4 w-4 shrink-0 text-[#E7665D]" aria-hidden="true" />
                    <span>Found this valuable? Share with fellow writers:</span>
                </div>
                <BlogShareButtons title={title} url={url} />
            </div>
        </div>
    );
}
