import Thankyou from '@/components/pages/thankyou';
import { Suspense } from 'react';

export const metadata = {
    alternates: { canonical: 'https://www.thecollingwoodpress.com/thankyou/' },
    robots: {
        index: false,
        follow: false,
    },
    title: 'Thank You - The Collingwood Press',
    description: 'Thank you for reaching out to The Collingwood Press. Your journey to becoming a published author starts here.',
};

export default function Page() {
    return (
        <>
            <Suspense fallback={<div />}>
                <Thankyou />
            </Suspense>
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(w, d, t, u, o) {w[u] = w[u] || [], o.ts = (new Date).getTime();var n = d.createElement(t);n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : ""),n.async = 1, n.onload = n.onreadystatechange = function() {var s = this.readyState;s && "loaded" !== s && "complete" !== s ||(o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad"),n.onload = n.onreadystatechange = null)};var i = d.getElementsByTagName(t)[0];i.parentNode.insertBefore(n, i);})(window, document, "script", "uetq", {ti: "343173118",enableAutoSpaTracking: true});`,
                }}
            />
        </>
    );
}


