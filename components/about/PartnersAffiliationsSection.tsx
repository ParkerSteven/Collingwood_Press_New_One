import { Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

type Partner = {
    name: string;
    role: string;
};

interface PartnersAffiliationsSectionProps {
    partners: Partner[];
}

export default function PartnersAffiliationsSection({
    partners,
}: PartnersAffiliationsSectionProps) {
    return (
        <section id="partners" className="py-20 bg-white border-b border-line">
            <Container className="flex flex-col gap-12">
                <AnimatedReveal y={20} duration={0.55} amount={0.15}>
                    <SectionHeading
                        eyebrow="Trade Affiliations"
                        title={
                            <>
                                Partners and{" "}
                                <span className="italic text-[#E7665D]">
                                    Trade Affiliations
                                </span>
                            </>
                        }
                        description="We maintain verified operational standards through the publishing industry's primary governing bodies and distribution networks."
                    />
                </AnimatedReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
                    {partners.map((p, index) => (
                        <AnimatedReveal
                            key={p.name}
                            y={24}
                            duration={0.5}
                            delay={Math.min(index, 7) * 0.08}
                            amount={0.15}
                            hoverY={-5}
                            className="p-6 sm:p-7 rounded-xl border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between text-center items-center hover:border-[#E7665D]/50 transition-[border-color,box-shadow] duration-300"
                        >
                            <Award size={26} className="text-[#E7665D] mb-3" />

                            <h4 className="font-serif text-base font-bold text-ink">
                                {p.name}
                            </h4>

                            <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                                {p.role}
                            </p>
                        </AnimatedReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
