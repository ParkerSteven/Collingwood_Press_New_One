
"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { getStoredAdTracking } from "@/lib/adTracking";
import { usePopup } from "@/contexts/PopupContext";
import AIHelpSidebar from "./AIHelpSidebar";

type ActiveWidget = "brevo" | "jotform" | null;

interface BrevoIntegrationData {
    msclkid: string;
    ad_click_time: string;
    ad_landing_url: string;
}

type BrevoConversationsFunction = {
    (
        command: "updateIntegrationData",
        data: BrevoIntegrationData
    ): void;
    (command: "openChat"): void;
    q?: unknown[][];
};

declare global {
    interface Window {
        BrevoConversations?: BrevoConversationsFunction;
        BrevoConversationsID?: string;
        BrevoConversationsConfig?: {
            verticalSpacing?: number;
            horizontalSpacing?: number;
        };
    }
}

function isHomePage(pathname: string | null): boolean {
    const normalized = pathname?.replace(/\/$/, "") || "/";
    return normalized === "/";
}

function getPakistanMinutes(): number {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Karachi",
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h23",
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

    if (hour === 24) {
        hour = 0;
    }

    return hour * 60 + minute;
}

function isBrevoTime(): boolean {
    const currentMinutes = getPakistanMinutes();

    const brevoStart = 17 * 60 + 30;
    const brevoEnd = 3 * 60 + 10;

    return (
        currentMinutes >= brevoStart ||
        currentMinutes < brevoEnd
    );
}

export default function ChatWidgetManager(): React.JSX.Element | null {
    const [activeWidget, setActiveWidget] =
        useState<ActiveWidget>(null);

    const [isSidebarOpen, setIsSidebarOpen] =
        useState<boolean>(false);

    const [shouldLoadWidget, setShouldLoadWidget] =
        useState<boolean>(false);

    const { openPopup } = usePopup();
    const pathname = usePathname();

    // Load widget on user interaction or after 4 seconds
    useEffect(() => {
        const events: (keyof WindowEventMap)[] = [
            "scroll",
            "mousemove",
            "touchstart",
            "keydown",
        ];

        const handleInteraction = (): void => {
            setShouldLoadWidget(true);

            events.forEach((event) => {
                window.removeEventListener(event, handleInteraction);
            });
        };

        events.forEach((event) => {
            window.addEventListener(event, handleInteraction, {
                passive: true,
            });
        });

        const timer = window.setTimeout(() => {
            setShouldLoadWidget(true);
        }, 4000);

        return () => {
            window.clearTimeout(timer);

            events.forEach((event) => {
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

            if (isBrevoTime()) {
                openPopup();
            } else {
                setIsSidebarOpen(true);
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

    // Handle opening AI chat directly
    useEffect(() => {
        const handleOpenAIChat = (): void => {
            setShouldLoadWidget(true);

            const tryOpen = (): boolean => {
                const agentInstance = (window as Window & {
                    jotformAgentInstance?: {
                        setIsOpened?: (opened: boolean) => void;
                        setIsExpanded?: (expanded: boolean) => void;
                    };
                }).jotformAgentInstance;

                if (agentInstance && typeof agentInstance.setIsOpened === "function") {
                    agentInstance.setIsOpened(true);
                    if (typeof agentInstance.setIsExpanded === "function") {
                        agentInstance.setIsExpanded(true);
                    }
                    return true;
                }

                const trigger = document.querySelector<HTMLElement>(
                    "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b .__chat, " +
                    "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b .__avatar, " +
                    "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b input, " +
                    "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b button"
                );

                if (trigger) {
                    trigger.click();
                    return true;
                }

                return false;
            };

            if (!tryOpen()) {
                let attempts = 0;
                const pollInterval = window.setInterval(() => {
                    attempts += 1;
                    if (tryOpen() || attempts >= 30) {
                        window.clearInterval(pollInterval);
                    }
                }, 150);
            }
        };

        window.addEventListener("openAIChat", handleOpenAIChat);

        return () => {
            window.removeEventListener("openAIChat", handleOpenAIChat);
        };
    }, []);

    // Determine active chat widget based on Pakistan time
    useEffect(() => {
        const checkTimeAndSetWidget = (): void => {
            setActiveWidget(
                isBrevoTime() ? "brevo" : "jotform"
            );
        };

        checkTimeAndSetWidget();

        const interval = window.setInterval(
            checkTimeAndSetWidget,
            60000
        );

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    // Send stored ad tracking data to Brevo
    useEffect(() => {
        if (
            activeWidget !== "brevo" ||
            !shouldLoadWidget
        ) {
            return;
        }

        const {
            msclkid,
            msclkidTs,
            landingUrl,
        } = getStoredAdTracking();

        if (!msclkid) {
            return;
        }

        let attempts = 0;
        const maxAttempts = 20;

        const poll = window.setInterval(() => {
            attempts += 1;

            if (
                typeof window.BrevoConversations === "function"
            ) {
                window.BrevoConversations(
                    "updateIntegrationData",
                    {
                        msclkid,
                        ad_click_time: msclkidTs || "",
                        ad_landing_url: landingUrl || "",
                    }
                );

                window.clearInterval(poll);
            } else if (attempts >= maxAttempts) {
                window.clearInterval(poll);
            }
        }, 300);

        return () => {
            window.clearInterval(poll);
        };
    }, [activeWidget, shouldLoadWidget]);

    if (!activeWidget) {
        return null;
    }

    return (
        <>
            {/* Brevo Live Chat Widget */}
            {activeWidget === "brevo" && shouldLoadWidget && (
                <>
                    <Script
                        id="brevo-init"
                        strategy="afterInteractive"
                    >
                        {`
              (function(d, w, c) {
                w.BrevoConversationsID =
                  '6a4bda091ec9d4d3c004acf1';

                w.BrevoConversationsConfig = {
                  verticalSpacing: 120,
                  horizontalSpacing: 20
                };

                w[c] = w[c] || function() {
                  (w[c].q = w[c].q || []).push(arguments);
                };

                var s = d.createElement('script');
                s.async = true;
                s.src =
                  'https://conversations-widget.brevo.com/brevo-conversations.js';

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

            {/* Jotform AI Agent */}
            {activeWidget === "jotform" && (
                <>
                    {shouldLoadWidget && (
                        <Script
                            id="jotform-agent-auto"
                            strategy="afterInteractive"
                        >
                            {`
                (function() {
                  var _AgentInitializer = window.AgentInitializer;
                  function wrapInit(ai) {
                    if (!ai || ai.__wrapped) return ai;
                    var origInit = ai.init;
                    if (typeof origInit === 'function') {
                      ai.init = function(config) {
                        var instance = origInit.call(this, config);
                        window.jotformAgentInstance = instance;
                        if (window.__pendingOpenAIChat) {
                          try {
                            instance.setIsOpened(true);
                            if (instance.setIsExpanded) instance.setIsExpanded(true);
                          } catch (e) {}
                          window.__pendingOpenAIChat = false;
                        }
                        return instance;
                      };
                      ai.__wrapped = true;
                    }
                    return ai;
                  }

                  if (_AgentInitializer) {
                    wrapInit(_AgentInitializer);
                  }

                  try {
                    Object.defineProperty(window, 'AgentInitializer', {
                      configurable: true,
                      enumerable: true,
                      get: function() { return _AgentInitializer; },
                      set: function(val) { _AgentInitializer = wrapInit(val); }
                    });
                  } catch (e) {}

                  var s = document.createElement('script');
                  s.src =
                    'https://cdn.jotfor.ms/agent/embedjs/019d4a7018e47a9ba9de1aa47b2de6686c0b/embed.js';
                  s.async = true;
                  document.head.appendChild(s);
                })();

                window.openAIChat = function() {
                  window.dispatchEvent(new Event('openAIChat'));
                };

                window.BrevoConversations = function(command) {
                  if (command === 'openChat') {
                    window.dispatchEvent(
                      new Event('openAIChat')
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
