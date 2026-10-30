
import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/publishingData";

export default function RelatedAuthorServices() {
    return (
        <section
            id="related-author-services"
            className="relative isolate overflow-hidden border-b border-white/10 bg-[#0B1428] py-20 lg:py-28"
        >
            {/* Navy Blue Gradient Background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#080F20] via-[#162643] to-[#354B6A]" />

            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#E7665D]/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 left-0 h-[450px] w-[450px] rounded-full bg-[#46699A]/20 blur-[120px]" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">

                    {/* RIGHT CONTENT - Mobile First */}
                    <AnimatedReveal
                        y={24}
                        duration={0.65}
                        className="order-1 lg:order-2"
                    >
                        <div className="max-w-xl">

                            {/* Eyebrow */}
                            <div className="mb-6 flex items-center gap-3">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F17A70]">
                                    Craft, Publish & Grow
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[2.8rem]">
                                Beyond Publishing
                                <span className="mt-3 block leading-[1.2] text-[#E7665D]">
                                    Complete Author Solutions
                                </span>
                            </h2>
                            {/* Description */}
                            <p className="mt-7 max-w-lg text-base leading-[1.85] text-slate-300">
                                Discover the complete range of publishing
                                services designed to bring your book to life,
                                reach more readers, and grow your author brand.
                            </p>

                            {/* CTA */}
                            <Link
                                href="  "
                                className="group mt-9 inline-flex items-center gap-3 rounded-md bg-[#E7665D] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#E7665D]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9554c] hover:shadow-[#E7665D]/25"
                            >
                                Explore Our Services
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </AnimatedReveal>

                    {/* LEFT CONTENT - Stacked Service Cards */}
                    <div
                        id="related-services-list"
                        className="order-2 flex flex-col gap-4 lg:order-1 lg:gap-5"
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <AnimatedReveal
                                    key={service.id}
                                    y={24}
                                    delay={index * 0.12}
                                    duration={0.55}
                                    amount={0.15}
                                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.07] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/45 hover:bg-white/[0.11] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] sm:p-6"
                                >
                                    {/* Accent Line */}
                                    <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#E7665D] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    <div className="flex items-start gap-4 sm:gap-5">
                                        {/* Icon */}
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#E7665D]/25 bg-[#E7665D]/10 text-[#F17A70] transition-all duration-300 group-hover:border-[#E7665D] group-hover:bg-[#E7665D] group-hover:text-white sm:h-14 sm:w-14">
                                            <Icon size={23} strokeWidth={1.8} />
                                        </div>

                                        {/* Card Content */}
                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-serif text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#F17A70] sm:text-xl">
                                                {service.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                                {service.description}
                                            </p>

                                            <Link
                                                href={service.href}
                                                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#F17A70] transition-colors hover:text-white sm:text-sm"
                                            >
                                                {service.linkText}
                                                <ArrowRight
                                                    size={15}
                                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </AnimatedReveal>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
