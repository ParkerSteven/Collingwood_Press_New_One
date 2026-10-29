import Container from "@/components/ui/Container";
import HeroAnimated from "../ui/HeroAnimated";

export default function Hero() {
  return (
    <section
      className="hero-section-background relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-line"
    >
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 xl:gap-14 relative z-10">
        <HeroAnimated />
      </Container>
    </section>
  );
}