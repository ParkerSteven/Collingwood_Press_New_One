/**
 * Global chat helper for triggering the AI Chat widget (Jotform Agent)
 */
export function openAIChat(): boolean {
    if (typeof window === "undefined") return false;

    // Set flag for when script initializes
    (window as Window & { __pendingOpenAIChat?: boolean }).__pendingOpenAIChat = true;

    // Notify ChatWidgetManager to immediately load/mount widget if not loaded yet
    window.dispatchEvent(new Event("openAIChat"));

    const tryOpen = (): boolean => {
        // 1. Try global jotformAgentInstance
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

        // 2. Try clicking DOM elements inside the Jotform widget container
        const trigger = document.querySelector<HTMLElement>(
            "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b .__chat, " +
            "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b .__avatar, " +
            "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b input, " +
            "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b button, " +
            "#JotformAgent-019d4a7018e47a9ba9de1aa47b2de6686c0b .ai-agent-chat-avatar-container"
        );

        if (trigger) {
            trigger.click();
            return true;
        }

        return false;
    };

    if (tryOpen()) {
        return true;
    }

    // If not ready yet, poll for up to 5 seconds
    let attempts = 0;
    const interval = window.setInterval(() => {
        attempts += 1;
        if (tryOpen() || attempts >= 25) {
            window.clearInterval(interval);
        }
    }, 200);

    return true;
}
