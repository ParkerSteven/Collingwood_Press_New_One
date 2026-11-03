
import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function ThankYouPrivacyNoticeSection() {
    return (
        <section className="border-b border-line bg-white py-6">
            <Container>
                <AnimatedReveal
                    y={15}
                    duration={0.5}
                    delay={0}
                    amount={0.2}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="font-sans text-xs leading-relaxed text-ink-muted">
                        If you opted in to marketing communications,
                        you can manage your preferences at any time
                        by visiting{" "}
                        <Link
                            href="/privacy-choices/"
                            className="font-semibold text-[#E7665D] underline transition-colors hover:text-[#D8574E]"
                        >
                            Your Privacy Choices
                        </Link>
                        .
                    </p>
                </AnimatedReveal>
            </Container>
        </section>
    );
}
