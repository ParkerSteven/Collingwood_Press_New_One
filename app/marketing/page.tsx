
import MarketingPage from "@/components/pages/MarketingPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.thecollingwoodpress.com/marketing/' },
    title: "Result-Driven Book Marketing Services | The Collingwood Press",
    description:
        "Drive book sales and boost rankings. Our book marketing services cover Amazon Ads, BookTok, media PR, and launch campaigns. Get your custom marketing plan!",
};

export default function Page() {
    return <MarketingPage />;
}
