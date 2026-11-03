
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import PublishingInquiryForm from "./PublishingInquiryForm";
import ContactOfficeInfo from "./ContactOfficeInfo";

export default function ContactFormSection() {
    return (
        <section
            id="publishing-form"
            className="scroll-mt-24 bg-[#fdfbf7] py-20 lg:py-28 border-b border-line"
        >
            <Container>
                {/* Section Heading Animation */}
                <AnimatedReveal
                    y={20}
                    duration={0.6}
                    amount={0.15}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <div id="manuscript-review">
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
                            Start Your Publishing Journey
                        </span>

                        <h2 className="mt-4 font-serif text-[2.2rem] sm:text-[2.8rem] font-bold text-ink leading-tight">
                            Ready to{" "}
                            <span className="italic text-[#E7665D]">
                                Publish?
                            </span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl font-sans text-sm sm:text-base text-ink-soft leading-relaxed">
                            Tell us about your manuscript and connect directly
                            with our publishing team.
                        </p>
                    </div>
                </AnimatedReveal>

                {/* Form + Office Information */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">

                    {/* Left - Publishing Form */}
                    <AnimatedReveal
                        y={25}
                        duration={0.6}
                        delay={0.1}
                        amount={0.1}
                        className="h-full"
                    >
                        <PublishingInquiryForm />
                    </AnimatedReveal>

                    {/* Right - Contact Information */}
                    <AnimatedReveal
                        y={25}
                        duration={0.6}
                        delay={0.2}
                        amount={0.1}
                        className="h-full"
                    >
                        <ContactOfficeInfo />
                    </AnimatedReveal>

                </div>
            </Container>
        </section>
    );
}
