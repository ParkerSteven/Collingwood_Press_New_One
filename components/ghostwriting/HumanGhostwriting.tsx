import Container from "@/components/ui/Container";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { humanGhostwritingData } from "@/lib/ghostwritingData";
import Image from "next/image";
import { AlertTriangle, BookOpen, UsersRound, Zap } from "lucide-react";

export default function HumanGhostwriting() {
    return (
        <section
            id="human-ghostwriting"
            className="py-20 lg:py-28 bg-white border-b border-line"
        >
            <Container>
                {/* Section Heading */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

                    {/* Animated Eyebrow */}
                    <AnimatedReveal
                        y={15}
                        duration={0.5}
                        delay={0}
                        amount={0.2}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#E7665D]">
                            Human Writing vs. AI Tools
                        </span>
                    </AnimatedReveal>

                    {/* Animated Heading */}
                    <AnimatedReveal
                        y={22}
                        duration={0.65}
                        delay={0.1}
                        amount={0.2}
                    >
                        <h2 className="mt-4 font-serif max-w-xl text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.14] text-ink">
                            Why Human Ghostwriting{" "}
                            <span className="italic text-[#E7665D]">
                                Still Matters
                            </span>
                        </h2>
                    </AnimatedReveal>
                </div>

                {/* Animated Content Cards */}


                <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {humanGhostwritingData.map((item, index) => {
                        const isAI = item.id === 1;

                        return (
                            <AnimatedReveal
                                key={item.id}
                                as="article"
                                y={30}
                                duration={0.6}
                                delay={index * 0.15}
                                amount={0.15}
                                hoverY={-5}
                                className="
          group relative flex h-full flex-col
          overflow-hidden rounded-[22px]
          border border-[#222E49]/10
          bg-[#FFFEFC]
          shadow-[0_12px_35px_rgba(34,46,73,0.10)]
          transition-[border-color,box-shadow] duration-500
          hover:border-[#E9776F]/50
          hover:shadow-[0_20px_45px_rgba(34,46,73,0.16)]
        "
                            >
                                {/* TOP BANNER */}
                                <div
                                    className={`
            relative flex h-[150px] items-center
            gap-4 overflow-hidden
            sm:h-[170px] sm:gap-6
            ${isAI
                                            ? "bg-gradient-to-r from-[#DCE2ED] to-[#F0F2F6]"
                                            : "bg-gradient-to-r from-[#F9DCD8] to-[#FFF0ED]"
                                        }
          `}
                                >
                                    {/* LEFT IMAGE */}
                                    <div
                                        className="
              relative h-full w-[38%] shrink-0
              sm:w-[40%]
            "
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.heading}
                                            fill
                                            sizes="(max-width: 1024px) 40vw, 20vw"
                                            className="
                object-contain object-left-bottom
                transition-transform duration-500
                group-hover:scale-105
              "
                                        />
                                    </div>

                                    {/* RIGHT HEADING */}
                                    <div
                                        className="
              flex min-w-0 flex-1
              items-center gap-3
              pr-4 sm:gap-4 sm:pr-6
            "
                                    >


                                        <h3
                                            className="
                text-left text-lg font-bold
                leading-tight tracking-tight
                text-[#222E49]
                sm:text-xl xl:text-[28px]
                relative md:right-10 
              "
                                        >
                                            {item.heading}
                                        </h3>
                                    </div>
                                </div>

                                {/* CONTENT AREA */}
                                <div
                                    className="
            relative z-10 -mt-3
            flex flex-1 flex-col
            rounded-t-[22px]
            bg-[#FFFEFC]
            px-5 py-5
            sm:px-7 sm:py-6
          "
                                >
                                    {item.points.map((point, pointIndex) => (
                                        <div key={point.id}>
                                            {/* POINT ROW */}
                                            <div
                                                className="
                  flex items-start
                  gap-4 sm:gap-5
                "
                                            >
                                                {/* SVG ICON CIRCLE */}
                                                <div
                                                    className={`
                    flex h-14 w-14 shrink-0
                    items-center justify-center
                    rounded-full
                    border
                    shadow-[0_4px_12px_rgba(34,46,73,0.07)]
                    sm:h-16 sm:w-16
                    ${isAI
                                                            ? "border-[#222E49]/10 bg-[#E6EAF1] text-[#222E49]"
                                                            : "border-[#E9776F]/15 bg-[#FCE8E5] text-[#E9776F]"
                                                        }
                  `}
                                                >
                                                    {point.icon === "zap" && (
                                                        <Zap
                                                            className="h-7 w-7 sm:h-8 sm:w-8"
                                                            strokeWidth={2.5}
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        />
                                                    )}

                                                    {point.icon === "alert" && (
                                                        <AlertTriangle
                                                            className="h-7 w-7 sm:h-8 sm:w-8"
                                                            strokeWidth={2.5}
                                                            aria-hidden="true"
                                                        />
                                                    )}

                                                    {point.icon === "users" && (
                                                        <UsersRound
                                                            className="h-7 w-7 sm:h-8 sm:w-8"
                                                            strokeWidth={2.5}
                                                            aria-hidden="true"
                                                        />
                                                    )}

                                                    {point.icon === "book" && (
                                                        <BookOpen
                                                            className="h-7 w-7 sm:h-8 sm:w-8"
                                                            strokeWidth={2.5}
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </div>

                                                {/* DESCRIPTION */}
                                                <p
                                                    className="
                    min-w-0 flex-1 pt-1
                    text-sm font-medium
                    leading-[1.6]
                    text-ink-soft
                    sm:text-[16px]
                  "
                                                >
                                                    {point.description}
                                                </p>
                                            </div>

                                            {/* DIVIDER */}
                                            {pointIndex < item.points.length - 1 && (
                                                <div className="my-5 h-px w-full bg-[#222E49]/10" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </AnimatedReveal>
                        );
                    })}
                </div>


            </Container>
        </section>
    );
}
