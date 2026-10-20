"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function AnalyticsManager() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // Wait for user interaction to load heavy analytics
        const handleInteraction = () => {
            setShouldLoad(true);
            ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(event =>
                window.removeEventListener(event, handleInteraction)
            );
        };

        ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(event =>
            window.addEventListener(event, handleInteraction, { passive: true })
        );

        // Load after 4 seconds regardless if they don't move
        const timer = setTimeout(() => {
            setShouldLoad(true);
        }, 4000);

        return () => {
            clearTimeout(timer);
            ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(event =>
                window.removeEventListener(event, handleInteraction)
            );
        };
    }, []);

    if (!shouldLoad) return null;

    return (
        <>
            {/* Google Tag (gtag.js) */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-16569370222"
                strategy="lazyOnload"
            />
            <Script id="google-tag" strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16569370222');
        `}
            </Script>

            {/* Inspectlet tracking code */}
            <Script id="inspectlet" strategy="lazyOnload">
                {`
    (function() {
      window.__insp = window.__insp || [];
      window.__insp.push(['wid', 1755129041]);

      var ldinsp = function() {
        if (typeof window.__inspld !== "undefined") return;

        window.__inspld = 1;

        var insp = document.createElement('script');
        insp.type = 'text/javascript';
        insp.async = true;
        insp.id = 'inspsync';

        insp.src =
          'https://cdn.inspectlet.com/inspectlet.js?wid=1755129041&r=' +
          Math.floor(new Date().getTime() / 3600000);

        document.head.appendChild(insp);
      };

      setTimeout(ldinsp, 0);
    })();
  `}
            </Script>

            {/* Bing UET */}
            <Script id="bing-uet" strategy="lazyOnload">{`
        (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"343238483",enableAutoSpaTracking:true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
      `}</Script>
        </>
    );
}
