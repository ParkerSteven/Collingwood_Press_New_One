
import MarketingPage from "@/components/sections/MarketingPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Result-Driven Book Marketing Services | The Collingwood Press",
    description:
        "Drive book sales and boost rankings. Our book marketing services cover Amazon Ads, BookTok, media PR, and launch campaigns. Get your custom marketing plan!",
};

export default function Page() {
    return <MarketingPage />;
}
