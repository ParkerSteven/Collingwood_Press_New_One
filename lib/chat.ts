/**
 * Global chat helper for triggering the active Chat widget (Brevo Conversations or Jotform Agent)
 */
// export function openAIChat(): boolean {
//     if (typeof window === "undefined") return false;

//     // Set flag for when script initializes
//     (window as Window & { __pendingOpenAIChat?: boolean }).__pendingOpenAIChat = true;

//     // Notify ChatWidgetManager to immediately load/mount widget if not loaded yet
//     window.dispatchEvent(new Event("openAIChat"));

//     const tryOpen = (): boolean => {
//         const w = window as any;

//         // 1. Try Brevo Conversations API
//         if (typeof w.BrevoConversations === "function") {
//             try {
//                 w.BrevoConversations("show");
//                 w.BrevoConversations("openChat", true);
//                 w.BrevoConversations("expandWidget", true);
//                 return true;
//             } catch (e) { }
//         } else if (w.BrevoConversations && Array.isArray(w.BrevoConversations.q)) {
//             w.BrevoConversations("show");
//             w.BrevoConversations("openChat", true);
//         }

//         // 2. Try Brevo iframe trigger click or hash navigation
//         const brevoIframe = document.querySelector<HTMLElement>(
//             "#brevo-conversations-widget, .brevo-conversations-widget, iframe[src*='conversations-widget.brevo.com']"
//         );
//         if (brevoIframe) {
//             try {
//                 window.location.hash = "brevoConversationsExpanded";
//             } catch (e) { }
//         }

//         // 3. Try global jotformAgentInstance
//         const agentInstance = w.jotformAgentInstance;
//         if (agentInstance && typeof agentInstance.setIsOpened === "function") {
//             agentInstance.setIsOpened(true);
//             if (typeof agentInstance.setIsExpanded === "function") {
//                 agentInstance.setIsExpanded(true);
//             }
//             return true;
//         }

//         // 4. Try clicking DOM elements inside the Jotform widget container
//         const trigger = document.querySelector<HTMLElement>(
//             "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b .__chat, " +
//             "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b .__avatar, " +
//             "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b input, " +
//             "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b button, " +
//             "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b .ai-agent-chat-avatar-container"
//         );

//         if (trigger) {
//             trigger.click();
//             return true;
//         }

//         return false;
//     };

//     if (tryOpen()) {
//         return true;
//     }

//     // Queue for Brevo if Brevo is initializing
//     const w = window as any;
//     if (w.BrevoConversations) {
//         try {
//             w.BrevoConversations("show");
//             w.BrevoConversations("openChat", true);
//             w.BrevoConversations("expandWidget", true);
//         } catch (e) { }
//     }

//     // If not ready yet, poll for up to 5 seconds
//     let attempts = 0;
//     const interval = window.setInterval(() => {
//         attempts += 1;
//         if (tryOpen() || attempts >= 30) {
//             window.clearInterval(interval);
//         }
//     }, 150);

//     return true;
// }

