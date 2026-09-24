import Container from "@/components/ui/Container";
import HeroAnimated from "../ui/HeroAnimated";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1E2139] paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-line">
      {/* Subtle background radial glow */}
      {/* <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#EBE2D0]/60 blur-3xl pointer-events-none" /> */}

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 xl:gap-16 relative z-10">
        <HeroAnimated />
      </Container>
    </section>
  );
}