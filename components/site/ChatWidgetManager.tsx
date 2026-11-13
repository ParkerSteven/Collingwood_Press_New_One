
"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { usePopup } from "@/contexts/PopupContext";
import AIHelpSidebar from "./AIHelpSidebar";
import { getStoredAdTracking } from "@/lib/adTracking";

// Widget Types
type WidgetType = "brevo" | "jotform" | null;

// Brevo Conversations Window Type
declare global {
    interface Window {
        BrevoConversations?: (
            command: string,
            data?: Record<string, string>
        ) => void;
        BrevoConversationsID?: string;
        BrevoConversationsConfig?: {
            verticalSpacing?: number;
            horizontalSpacing?: number;
        };
    }
}

// Check Home Page
function isHomePage(pathname: string | null): boolean {
    const normalized = pathname?.replace(/\/$/, "") || "/";
    return normalized === "/";
}

// Get Karachi Time in Minutes
function getKarachiMinutes(): number {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Karachi",
        hour12: false,
        hour: "numeric",
        minute: "numeric",
    });

    const timeParts = formatter.formatToParts(now);

    let hour = 0;
    let minute = 0;

    timeParts.forEach((part: Intl.DateTimeFormatPart) => {
        if (part.type === "hour") {
            hour = parseInt(part.value, 10);
        }

        if (part.type === "minute") {
            minute = parseInt(part.value, 10);
        }
    });

    if (hour === 24) hour = 0;

    return hour * 60 + minute;
}

// Check Brevo Time
function isBrevoTime(): boolean {
    const currentMinutes = getKarachiMinutes();

    // Brevo AI Chat: 6:00 PM to 4:30 AM
    const brevoStart = 18 * 60;
    const brevoEnd = 4 * 60 + 30;

    return (
        currentMinutes >= brevoStart ||
        currentMinutes < brevoEnd
    );
}

export default function ChatWidgetManager() {
    const [activeWidget, setActiveWidget] =
        useState<WidgetType>(null);

    const [isSidebarOpen, setIsSidebarOpen] =
        useState<boolean>(false);

    const [shouldLoadWidget, setShouldLoadWidget] =
        useState<boolean>(false);

    const { openPopup } = usePopup();
    const pathname = usePathname();

    // Load widget after user interaction
    useEffect(() => {
        const events: string[] = [
            "scroll",
            "mousemove",
            "touchstart",
            "keydown",
        ];

        const handleInteraction = (): void => {
            setShouldLoadWidget(true);

            events.forEach((event: string) => {
                window.removeEventListener(event, handleInteraction);
            });
        };

        events.forEach((event: string) => {
            window.addEventListener(event, handleInteraction, {
                passive: true,
            });
        });

        // Fallback timer: 4 seconds
        const timer: ReturnType<typeof setTimeout> = setTimeout(
            () => {
                setShouldLoadWidget(true);
            },
            4000
        );

        return () => {
            clearTimeout(timer);

            events.forEach((event: string) => {
                window.removeEventListener(event, handleInteraction);
            });
        };
    }, []);

    // Handle fallback popup
    useEffect(() => {
        const handleOpenPopup = (): void => {
            if (!isHomePage(pathname)) {
                setIsSidebarOpen(true);
                return;
            }

            if (!isBrevoTime()) {
                setIsSidebarOpen(true);
            } else {
                openPopup();
            }
        };

        window.addEventListener(
            "openFallbackPopup",
            handleOpenPopup
        );

        return () => {
            window.removeEventListener(
                "openFallbackPopup",
                handleOpenPopup
            );
        };
    }, [openPopup, pathname]);

    // Check time and select active widget
    useEffect(() => {
        const checkTimeAndSetWidget = (): void => {
            if (isBrevoTime()) {
                setActiveWidget("brevo");
            } else {
                setActiveWidget("jotform");
            }
        };

        checkTimeAndSetWidget();

        const interval: ReturnType<typeof setInterval> =
            setInterval(checkTimeAndSetWidget, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    // Attach stored ad-click attribution
    // to the live Brevo Conversations session
    useEffect(() => {
        if (
            activeWidget !== "brevo" ||
            !shouldLoadWidget
        ) {
            return;
        }

        const { msclkid, msclkidTs, landingUrl } =
            getStoredAdTracking();

        if (!msclkid) return;

        let attempts = 0;
        const maxAttempts = 20;

        const poll: ReturnType<typeof setInterval> =
            setInterval(() => {
                attempts += 1;

                if (
                    typeof window !== "undefined" &&
                    typeof window.BrevoConversations === "function"
                ) {
                    window.BrevoConversations(
                        "updateIntegrationData",
                        {
                            msclkid,
                            ad_click_time: String(msclkidTs || ""),
                            ad_landing_url: String(landingUrl || ""),
                        }
                    );

                    clearInterval(poll);
                } else if (attempts >= maxAttempts) {
                    clearInterval(poll);
                }
            }, 300);

        return () => {
            clearInterval(poll);
        };
    }, [activeWidget, shouldLoadWidget]);

    if (!activeWidget) return null;

    return (
        <>
            {/* Brevo Widget */}
            {activeWidget === "brevo" && shouldLoadWidget && (
                <>
                    <Script id="brevo-init" strategy="lazyOnload">
                        {`
              (function(d, w, c) {
                w.BrevoConversationsID = '6a4bda091ec9d4d3c004acf1';

                w.BrevoConversationsConfig = {
                  verticalSpacing: 120,
                  horizontalSpacing: 20
                };

                w[c] = w[c] || function() {
                  (w[c].q = w[c].q || []).push(arguments);
                };

                var s = d.createElement('script');
                s.async = true;
                s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';

                if (d.head) {
                  d.head.appendChild(s);
                }
              })(document, window, 'BrevoConversations');
            `}
                    </Script>

                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                #brevo-conversations-widget,
                .brevo-conversations-widget,
                iframe[src*="conversations-widget.brevo.com"] {
                  bottom: 120px !important;
                }
              `,
                        }}
                    />
                </>
            )}

            {/* Jotform Widget */}
            {activeWidget === "jotform" && (
                <>
                    {shouldLoadWidget && (
                        <Script
                            id="jotform-agent-auto"
                            strategy="lazyOnload"
                        >
                            {`
                // Inject Jotform Agent script
                (function() {
                  var s = document.createElement('script');
                  s.src = 'https://cdn.jotfor.ms/agent/embedjs/019d4a7018e47a9ba9de1aa47b2de6686c0b/embed.js';
                  s.async = true;
                  document.head.appendChild(s);
                })();

                // Fallback popup handler
                window.BrevoConversations = function(command) {
                  if (command === 'openChat') {
                    window.dispatchEvent(
                      new Event('openFallbackPopup')
                    );
                  }
                };
              `}
                        </Script>
                    )}

                    <AIHelpSidebar
                        isOpen={isSidebarOpen}
                        onClose={() => setIsSidebarOpen(false)}
                    />
                </>
            )}
        </>
    );
}
