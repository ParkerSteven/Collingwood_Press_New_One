import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { FileCheck2, MessageSquareQuote, ClipboardCheck, BookOpen, PhoneCall, CheckCheck, CheckCircle2, Clock, ArrowRight } from "lucide-react";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function EditingDeliverables() {
    return (
        <section
            id="editing-deliverables"
            className="relative overflow-hidden bg-[#F8F9FC] py-14 lg:py-20"
        >
            <Container className="flex flex-col gap-8 lg:gap-8">

                {/* Section Heading */}
                <AnimatedReveal y={20} duration={0.6}>
                    <SectionHeading
                        eyebrow="Deliverables and Standards"
                        title={
                            <>
                                What&apos;s Included in{" "}
                                <span className="italic text-[#E7665D]">
                                    Book Editing Services
                                </span>
                            </>
                        }
                        description="Every editing engagement includes the following, regardless of which service level you choose."
                    />
                </AnimatedReveal>


                {/* Editorial Deliverables - Animated Checklist */}
                <div className="relative rounded-2xl px-5 py-9 sm:px-10 sm:py-12">

                    {/* Deliverables Bullet List */}
                    <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
                        {[
                            {
                                title: "Marked-up Manuscript",
                                icon: FileCheck2,
                                badge: "Tracked Changes",
                                description:
                                    "Every edit appears in tracked changes, so nothing is changed silently.",
                            },
                            {
                                title: "Margin Comments",
                                icon: MessageSquareQuote,
                                badge: "Editorial Feedback",
                                description:
                                    "Notes explaining the reasoning behind significant edits, so you understand each change and learn from it.",
                            },
                            {
                                title: "Custom Style Sheet",
                                icon: ClipboardCheck,
                                badge: "Consistency",
                                description:
                                    "A record of the terminology, capitalization, hyphenation and spelling decisions made for your book.",
                            },
                            {
                                title: "Chicago Manual of Style Compliance",
                                icon: BookOpen,
                                badge: "Editorial Standards",
                                description:
                                    "Our default standard, current edition. APA, AP or MLA on request.",
                            },
                            {
                                title: "Direct Editor Communication",
                                icon: PhoneCall,
                                badge: "Personal Support",
                                description:
                                    "You talk to your assigned editor by phone and email about any editorial question, with no support queue in between.",
                            },
                            {
                                title: "One Round of Follow-up",
                                icon: CheckCheck,
                                badge: "Post-Delivery",
                                description:
                                    "After delivery, one round for questions, clarifications or a brief additional review.",
                            },
                        ].map((item, index) => (
                            <AnimatedReveal
                                key={item.title}
                                y={22}
                                duration={0.55}
                                delay={(index % 2) * 0.12}
                                amount={0.15}
                                className="group flex items-start gap-4 border-t border-[#E6DED7] py-7 transition-colors duration-300"
                            >
                                {/* Bullet Icon */}
                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FCEAE7] text-[#E7665D] transition-colors duration-300 group-hover:bg-[#E7665D] group-hover:text-white">
                                    <CheckCircle2 size={17} strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#E7665D]">
                                        {item.badge}
                                    </span>

                                    <h4 className="mt-2 font-serif text-base font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-[#E7665D] sm:text-[1.2rem]">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 max-w-xl text-sm leading-7 text-ink-soft sm:text-[14px]">
                                        {item.description}
                                    </p>
                                </div>
                            </AnimatedReveal>
                        ))}
                    </div>
                </div>

                {/* Free Sample Edit CTA */}
                <AnimatedReveal
                    y={28}
                    duration={0.65}
                    delay={0.1}
                    amount={0.15}
                    className="relative overflow-hidden rounded-2xl border border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#172B4D] to-[#294D78] p-6 shadow-[0_12px_38px_rgba(16,26,48,0.18)] sm:p-10 lg:p-8"
                >
                    <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

                        {/* CTA Content */}
                        <div className="max-w-2xl">

                            {/* Eyebrow */}
                            <AnimatedReveal
                                y={12}
                                duration={0.45}
                                delay={0.15}
                            >
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFAAA2]">
                                    Complimentary Editorial Evaluation
                                </span>
                            </AnimatedReveal>

                            {/* Heading */}
                            <AnimatedReveal
                                y={18}
                                duration={0.55}
                                delay={0.2}
                            >
                                <h3 className="mt-3 font-serif text-xl font-bold leading-tight text-white sm:text-[1.4rem]">
                                    See Our Editing Approach Before You Commit
                                </h3>
                            </AnimatedReveal>

                            {/* Description */}
                            <AnimatedReveal
                                y={16}
                                duration={0.55}
                                delay={0.25}
                            >
                                <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-[14px]">
                                    Send your first 1,000 words and see how we work
                                    before you decide. It comes back with tracked
                                    changes and a brief diagnostic summary.
                                </p>
                            </AnimatedReveal>

                            {/* Benefits */}
                            <AnimatedReveal
                                y={15}
                                duration={0.5}
                                delay={0.3}
                                className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200"
                            >
                                <div className="flex items-center gap-2">
                                    <Clock
                                        size={16}
                                        className="text-[#FFAAA2]"
                                    />
                                    <span>48-Hour Turnaround</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={16}
                                        className="text-[#FFAAA2]"
                                    />
                                    <span>No Purchase Obligation</span>
                                </div>
                            </AnimatedReveal>
                        </div>

                        {/* CTA Button */}
                        <AnimatedReveal
                            y={18}
                            duration={0.55}
                            delay={0.35}
                            className="shrink-0"
                        >
                            <Button
                                href="/contact-us/#manuscript-review"
                                variant="primary"
                                size="md"
                            >
                                <span>Request a Free Sample Edit</span>
                                <ArrowRight size={15} />
                            </Button>
                        </AnimatedReveal>
                    </div>
                </AnimatedReveal>
            </Container>
        </section>
    );
}
