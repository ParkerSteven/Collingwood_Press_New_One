import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import UtilityBar from '@/components/layout/UtilityBar';
import MarketingServices from '@/components/sections/MarketingServices';
import ThankYouConfirmationSection from '@/components/thankyou/ThankYouConfirmationSection';
import ThankYouHeroSection from '@/components/thankyou/ThankYouHeroSection';
import ThankYouPrivacyNoticeSection from '@/components/thankyou/ThankYouPrivacyNoticeSection';
import ThankYouServicesSection from '@/components/thankyou/ThankYouServicesSection';

export const metadata = {
    alternates: { canonical: 'https://www.thecollingwoodpress.com/thankyou/' },
    robots: {
        index: false,
        follow: false,
    },
    title: 'Thank You - The Collingwood Press',
    description: 'Thank you for reaching out to The Collingwood Press. Your journey to becoming a published author starts here.',
};
type SearchParams = Promise<{ name?: string | string[] }>;

interface ThankYouPageProps {
    searchParams: SearchParams;
}

export default async function Page({ searchParams }: ThankYouPageProps) {
    const params = await searchParams;
    const rawName = Array.isArray(params.name) ? params.name[0] ?? "" : params.name ?? "";
    const displayName = rawName
        .trim()
        .slice(0, 100)
        .split(/\s+/)
        .filter(Boolean)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(" ");

    return (
        <>
            <UtilityBar />
            <Header />
            <main className="min-h-screen bg-white text-ink">
                <ThankYouHeroSection displayName={displayName} />
                <ThankYouConfirmationSection />
                <ThankYouPrivacyNoticeSection />
                <ThankYouServicesSection />
                <MarketingServices />
            </main>
            <Footer />
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(w, d, t, u, o) {w[u] = w[u] || [], o.ts = (new Date).getTime();var n = d.createElement(t);n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : ""),n.async = 1, n.onload = n.onreadystatechange = function() {var s = this.readyState;s && "loaded" !== s && "complete" !== s ||(o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad"),n.onload = n.onreadystatechange = null)};var i = d.getElementsByTagName(t)[0];i.parentNode.insertBefore(n, i);})(window, document, "script", "uetq", {ti: "343173118",enableAutoSpaTracking: true});`,
                }}
            />
        </>
    );
}


