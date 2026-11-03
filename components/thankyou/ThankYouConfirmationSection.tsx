
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function ThankYouConfirmationSection() {
    return (
        <section className="border-b border-line bg-[#fdfbf7] py-12 sm:py-16">
            <Container>
                <AnimatedReveal
                    y={25}
                    duration={0.6}
                    delay={0.1}
                    amount={0.15}
                    className="mx-auto max-w-3xl rounded-xl border border-[#E7665D]/25 bg-white p-7 text-center shadow-[0_4px_24px_0_rgba(231,102,93,0.10)] sm:p-10"
                >
                    <CheckCircle2
                        size={29}
                        className="mx-auto text-[#E7665D]"
                    />

                    <h2 className="mt-4 font-serif text-2xl font-bold text-ink sm:text-3xl">
                        Your Publishing Journey Starts Here
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
                        Your inquiry has been submitted successfully.
                        Our publishing team will review the information
                        you provided and reach out to discuss the next
                        steps for your book.
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E7665D]/20 bg-[#fdf6f5] px-4 py-2">
                        <CheckCircle2
                            size={14}
                            className="text-[#E7665D]"
                        />

                        <span className="font-sans text-xs font-semibold text-ink">
                            Thank You for Connecting With Us
                        </span>
                    </div>
                </AnimatedReveal>
            </Container>
        </section>
    );
}
