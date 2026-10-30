import Container from "@/components/ui/Container";
import AnimatedStatItem from "../ui/AnimatedStatItem";

export interface StatItem {
  value: string;
  label: string;
}

interface StatBarProps {
  stats: StatItem[];
}

export default function StatBar({ stats }: StatBarProps) {
  return (
    <section className="bg-white border-y border-white/10 py-12 lg:py-14 text-white relative">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-5 lg:gap-y-0">
          {stats?.map((stat, i) => (
            <AnimatedStatItem
              key={stat.label}
              stat={stat}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}