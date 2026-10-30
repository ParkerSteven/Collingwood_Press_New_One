import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { ArrowRight, FileText } from "lucide-react";
import {
    publishingRoadmap,
    phaseIcons,
    milestoneIcons,
} from "@/lib/publishingData";

export default function PublishingRoadmap() {
    return (
        <section
            id="publishing-roadmap"
            className="relative isolate overflow-hidden bg-[#07152B] py-16 sm:py-20 lg:py-24"
        >
            {/* Background Gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#071429] via-[#102440] to-[#1D3B63]" />

            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-40 -top-52 h-[650px] w-[650px] rounded-full bg-[#5277AB]/15 blur-[130px]" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-[450px] w-[550px] rounded-full bg-[#071225]/60 blur-[110px]" />

            {/* Main Content Container */}
            <div className="relative max-w-7xl 2xl:max-w-[1750px] z-10 mx-auto w-full px-5 sm:px-8 lg:px-14 xl:px-12 2xl:px-14">

                {/* Section Heading */}
                <div className="mb-12 max-w-[800px] lg:mb-14">

                    <AnimatedReveal
                        y={14}
                        duration={0.5}
                        amount={0.2}
                    >
                        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#EF746C]">
                            Here&apos;s How We Work
                        </span>
                    </AnimatedReveal>

                    <AnimatedReveal
                        y={20}
                        duration={0.6}
                        delay={0.1}
                        amount={0.2}
                    >
                        <h2 className="mt-4 max-w-[800px] font-serif text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.4rem] lg:text-[2.8rem]">
                            From Manuscript to
                            <br />
                            Published Book in{" "}
                            <span className="text-[#E7665D]">
                                Six Phases
                            </span>
                        </h2>
                    </AnimatedReveal>

                    <AnimatedReveal
                        y={16}
                        duration={0.55}
                        delay={0.2}
                        amount={0.2}
                    >
                        <p className="mt-5 max-w-[650px] font-sans text-sm leading-[1.8] text-slate-300 sm:text-base">
                            Our book publishing services follow a
                            transparent, six-phase roadmap so you
                            always know exactly where your project
                            stands and what comes next.
                        </p>
                    </AnimatedReveal>
                </div>

                {/* Roadmap Grid */}
                <div
                    className="
                        grid w-full min-w-0
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-6
                        2xl:grid-cols-6
                        2xl:gap-4
                    "
                >
                    {publishingRoadmap.map((step, index) => {
                        const Icon =
                            phaseIcons[index] || FileText;

                        const MilestoneIcon =
                            milestoneIcons[index] || FileText;

                        return (
                            <AnimatedReveal
                                key={step.number}
                                as="article"
                                y={24}
                                duration={0.55}
                                delay={(index % 3) * 0.08}
                                amount={0.1}
                                hoverY={-5}
                                className="
                                    group relative
                                    flex h-full min-w-0 flex-col
                                    rounded-xl
                                    border border-[#344B76]
                                    bg-gradient-to-br
                                    from-[#101A30]
                                    via-[#172B4D]
                                    to-[#294D78]
                                    p-5
                                    shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                                    transition-[border-color,box-shadow]
                                    duration-300
                                    hover:border-[#E7665D]/60
                                    hover:shadow-[0_12px_35px_rgba(231,102,93,0.12)]
                                    min-[1800px]:p-6
                                "
                            >
                                {/* Phase Number */}
                                <span className="font-sans text-[21px] font-extrabold leading-none text-[#F07870]">
                                    {step.number}
                                </span>
                                <div className="flex flex-col sm:flex-row gap-4 items-center">

                                    {/* Phase Icon */}
                                    <div
                                        className="
                                        mt-5 flex h-12 w-12
                                        shrink-0 items-center
                                        justify-center rounded-full
                                        border border-[#E7665D]/30
                                        bg-[radial-gradient(circle_at_50%_35%,#405371_0%,#25314D_55%,#17223C_100%)]
                                        text-[#F07870]
                                        transition-transform duration-300
                                        group-hover:scale-105
                                    "
                                    >
                                        <Icon
                                            size={23}
                                            strokeWidth={1.8}
                                        />

                                    </div>
                                    <h3 className="font-serif text-[17px] font-bold leading-[1.35] text-white 2xl:text-[16px] min-[1800px]:text-[19px] pt-4">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Card Content */}
                                <div className="mt-5 flex-1">
                                    <p className=" font-sans text-[13px] leading-[1.8] text-slate-300 2xl:text-[12px] min-[1800px]:text-[13px]">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Deliverable */}
                                <div
                                    className="
                                        mt-4 flex min-h-[90px]
                                        w-full min-w-0
                                        items-center gap-3
                                        rounded-lg
                                        border border-[#3B5984]/65
                                        bg-gradient-to-br
                                        from-[#142744]
                                        to-[#1B3B65]/85
                                        p-3
                                        2xl:gap-2
                                        2xl:p-2.5
                                        min-[1800px]:gap-3
                                        min-[1800px]:p-3
                                    "
                                >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E7665D]/20 bg-[#E7665D]/10 text-[#F07870]">
                                        <MilestoneIcon
                                            size={18}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <span className="block text-[9px] font-bold uppercase tracking-[0.08em] text-[#F07870]">
                                            Deliverable
                                        </span>

                                        <span className="mt-1 block break-words text-[11px] leading-[1.5] text-[#D3E3F8]">
                                            {step.milestone}
                                        </span>
                                    </div>
                                </div>

                                {/* Connecting Arrow */}
                                {index <
                                    publishingRoadmap.length - 1 && (
                                        <div
                                            className="
                                            absolute
                                            -right-[17px]
                                            top-[25%]
                                            z-20
                                            hidden h-7 w-7
                                            items-center
                                            justify-center
                                            rounded-full
                                            border border-[#E7665D]/70
                                            bg-[#142541]
                                            text-[#F07870]
                                            shadow-[0_0_0_3px_#102440]
                                            2xl:flex
                                        "
                                            aria-hidden="true"
                                        >
                                            <ArrowRight
                                                size={14}
                                                strokeWidth={1.8}
                                            />
                                        </div>
                                    )}
                            </AnimatedReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
