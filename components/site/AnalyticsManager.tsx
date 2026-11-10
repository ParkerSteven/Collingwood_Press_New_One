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

        let idleCallbackId: number | undefined;
        let fallbackTimer: number | undefined;
        const loadWhenIdle = () => {
            setShouldLoad(true);
        };
        const scheduleLoadWhenIdle = () => {
            if (typeof window.requestIdleCallback === "function") {
                idleCallbackId = window.requestIdleCallback(loadWhenIdle, {
                    timeout: 5000,
                });
            } else {
                fallbackTimer = window.setTimeout(loadWhenIdle, 1000);
            }
        };

        if (document.readyState === "complete") {
            scheduleLoadWhenIdle();
        } else {
            window.addEventListener("load", scheduleLoadWhenIdle, {
                once: true,
            });
        }

        return () => {
            window.removeEventListener("load", scheduleLoadWhenIdle);
            if (
                idleCallbackId !== undefined &&
                typeof window.cancelIdleCallback === "function"
            ) {
                window.cancelIdleCallback(idleCallbackId);
            }
            if (fallbackTimer !== undefined) {
                window.clearTimeout(fallbackTimer);
            }
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
