import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { editingSteps } from "@/lib/editingData";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function EditingProcess() {
  return (
<section
                    id="editing-process"
                    className="py-20 lg:py-28 bg-[#fdfbf7] border-b border-line"
                >
                    <Container className="flex flex-col gap-14 sm:gap-16">

                        {/* Section Heading */}
                        <AnimatedReveal y={20} duration={0.6}>
                        <SectionHeading
                            eyebrow="Clear Steps from Submission to Delivery"
                            title={
                                <>
                                    How Our{" "}
                                    <span className="italic text-[#E7665D]">
                                        Book Editing Process
                                    </span>{" "}
                                    Works
                                </>
                            }
                            description="Every engagement follows the same sequence, regardless of which editing level you choose."
                        />
                        </AnimatedReveal>

                        {/* Four-Step Editorial Process */}

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {editingSteps.map((item, index) => (
                                <AnimatedReveal y={22} duration={0.55} delay={(index % 4) * 0.09} amount={0.1}
                                    key={item.id}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#344B76] bg-gradient-to-br from-[#101A30] via-[#172B4D] to-[#294D78] p-7 shadow-[0_12px_38px_rgba(16,26,48,0.18)] transition-all duration-500 hover:border-[#E7665D]/50 hover:shadow-[0_22px_55px_rgba(25,55,100,0.35)] sm:p-8"
                                >

                                    {/* Step Title */}
                                    <h3 className="mb-4 text-base font-semibold leading-snug text-white sm:text-xl">
                                        {item.title}
                                    </h3>

                                    {/* Step Description */}
                                    <p className="text-sm leading-relaxed text-slate-200 sm:text-[14px]">
                                        {item.description}
                                    </p>
                                </AnimatedReveal>
                            ))}
                        </div>
                    </Container>
                </section>
  );
}
