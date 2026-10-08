
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  BookOpenText,
  BriefcaseBusiness,
  Palette,
  UserRound,
  ArrowUpRight,
} from "lucide-react";

const teamMembers = [
  {
    id: "01",
    name: "[INSERT NAME]",
    role: "Senior Editor",
    icon: BookOpenText,
    image: "", // Add verified team member photo path
    imageAlt: "",
    bio: "[INSERT 2–3 sentence bio: genre expertise, years of experience, notable titles.]",
    specialty: "Editorial Leadership",
  },
  {
    id: "02",
    name: "[INSERT NAME]",
    role: "Publishing Director",
    icon: BriefcaseBusiness,
    image: "", // Add verified team member photo path
    imageAlt: "",
    bio: "[INSERT 2–3 sentence bio: role in the publishing process and what authors can expect.]",
    specialty: "Publishing Direction",
  },
  {
    id: "03",
    name: "[INSERT NAME]",
    role: "Design Lead",
    icon: Palette,
    image: "", // Add verified team member photo path
    imageAlt: "",
    bio: "[INSERT 2–3 sentence bio: design background and specialties.]",
    specialty: "Cover & Interior Design",
  },
];

export default function MarketingServices() {
  return (
    <section
      id="publishing-team"
      aria-labelledby="publishing-team-heading"
      className="relative overflow-hidden border-b border-line bg-white py-20 lg:py-28"
    >
      <Container>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E7665D]" />

            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7665D]">
              The People Behind Your Publishing Journey
            </span>

            <span className="h-px w-8 bg-[#E7665D]" />
          </div>

          <h2
            id="publishing-team-heading"
            className="font-serif text-[2rem] max-w-2xl mx-auto font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.7rem] lg:text-[2.7rem]"
          >
            Meet the Publishing Team{" "}
            <span className="italic text-[#E7665D]">
              Behind Your Book
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-[0.97rem] leading-[1.85] text-ink-muted sm:text-[1.05rem]">
            Real names, real experience, direct access.
            These are the professionals who will work on
            your manuscript.
          </p>
        </motion.div>

        {/* Section divider */}
        <div className="mb-7 flex items-center gap-4">
          <span className="h-[2px] w-9 bg-[#E7665D]" />

          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.17em] text-ink-muted">
            Our Publishing Professionals
          </span>

          <span className="h-px flex-1 bg-line" />

          <span className="font-sans text-xs text-[#E7665D]">
            01 — 03
          </span>
        </div>

        {/* Team member cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;

            return (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-md border border-[#E7665D]/20 bg-[#FCFAF7] shadow-[0_5px_24px_rgba(17,26,48,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E7665D]/45 hover:shadow-[0_14px_38px_rgba(231,102,93,0.10)]"
              >
                {/* Portrait */}
                <div className="relative h-[310px] overflow-hidden bg-gradient-to-br from-[#EAE5DD] via-[#D9D6D0] to-[#C7C9CD] sm:h-[350px]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={
                        member.imageAlt ||
                        `${member.name}, ${member.role} at The Collingwood Press`
                      }
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#A8A5A0]/40 bg-white/25">
                        <UserRound
                          size={54}
                          strokeWidth={1}
                          className="text-[#8E918F]"
                          aria-hidden="true"
                        />
                      </div>

                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#858683]">
                        Team Portrait Placeholder
                      </span>
                    </div>
                  )}

                  {/* Portrait overlay */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#121A2B]/60 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-sm border border-white/25 bg-[#121A2B]/65 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                    Team Member {member.id}
                  </span>

                  <div className="absolute bottom-5 left-6 right-6">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.17em] text-[#F7B0A9]">
                      The Collingwood Press
                    </span>

                    <h3 className="mt-1 font-serif text-[1.8rem] font-medium leading-tight text-white">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Profile content */}
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#E7665D]/20 bg-[#FDF0ED] text-[#E7665D]">
                      <Icon
                        size={19}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E7665D]">
                        {member.role}
                      </span>

                      <span className="mt-0.5 block font-sans text-[11px] text-ink-muted">
                        {member.specialty}
                      </span>
                    </div>
                  </div>

                  <div className="my-6 h-px bg-line/80" />

                  <p className="font-sans text-[0.91rem] leading-[1.85] text-ink-muted">
                    {member.bio}
                  </p>

                  {/* Card footer */}
                  <div className="mt-auto pt-8">
                    <div className="flex items-center justify-between border-t border-line/80 pt-5">
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                        Publishing Team
                      </span>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.7}
                        aria-hidden="true"
                        className="text-[#E7665D]"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
