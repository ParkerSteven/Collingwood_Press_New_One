"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { projectManagers } from "@/lib/data";
import { PhoneCall } from "lucide-react";

export default function ProjectManagers() {
  return (
    <section id="directors" className="bg-white py-20 lg:py-28 border-b border-line">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Publishing Leadership"
          title={
            <>
              Meet the senior publishing directors{" "}
              <span className="italic text-[#E7665D]">who shepherd your work</span>
            </>
          }
          description="At The Collingwood Press, you are never passed off to customer support tickets or junior offshore contractors. These are the seasoned publishing professionals who read your drafts and answer your calls."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectManagers.map((pm, i) => (
            <motion.div
              key={pm.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group flex flex-col justify-between rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] hover:border-[#E7665D]/50 hover:shadow-[0_6px_32px_0_rgba(231,102,93,0.18),0_2px_8px_0_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Executive Portrait with Editorial Frame */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#fdf6f5]">
                  <img
                    src={pm.avatar}
                    alt={`Portrait of ${pm.name}, ${pm.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Dossier Number Top Right */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-sm text-white font-mono text-[10px] tracking-widest uppercase">
                    0{i + 1} &bull; DIRECTOR
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-white/80 font-medium block mb-1">
                      {pm.experience}
                    </span>
                    <h3 className="font-sans text-[1.45rem] font-medium leading-tight">
                      {pm.name}
                    </h3>
                  </div>
                </div>

                {/* Editorial Body Content */}
                <div className="p-6 sm:p-7 flex flex-col gap-4">
                  <div>
                    <span className="font-sans text-[11px] font-semibold text-[#E7665D] tracking-[0.16em] uppercase block">
                      {pm.title}
                    </span>
                    <p className="mt-2.5 font-sans text-[0.91rem] leading-relaxed text-ink-muted">
                      {pm.bio}
                    </p>
                  </div>

                  {/* Philosophy Quote */}
                  <div className="p-3.5 rounded-sm bg-[#fdf6f5] border-l-2 border-[#E7665D] text-xs font-sans italic text-ink/90 leading-relaxed">
                    {pm.philosophy}
                  </div>

                  {/* Specialties Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pm.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-sm bg-[#fdf6f5] text-[10px] font-sans text-ink-muted border border-[#E7665D]/20"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-7 pt-0">
                <Button
                  href="/contact-us#manuscript-review"
                  variant="primary"
                  size="md"
                  className="w-full flex items-center justify-center gap-2 rounded-sm"
                >
                  <PhoneCall size={13} className="text-white" />
                  <span>Consultation with {pm.name.split(" ")[0]}</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}