export default function Eyebrow({
  children,
  tone = "coral",
  align = "left",
}: {
  children: string;
  tone?: "gold" | "coral" | "ink" | "forest" | "terracotta" | "navy";
  align?: "left" | "center";
  showBrackets?: boolean;
}) {
  const toneClasses: Record<string, string> = {
    gold: "text-[#D4AF37]",
    coral: "text-[#E7665D]",
    terracotta: "text-[#E7665D]",
    ink: "text-ink-soft",
    forest: "text-forest",
    navy: "text-[#F08A82]",
  };

  const lineColors: Record<string, string> = {
    gold: "bg-[#D4AF37]/50",
    coral: "bg-[#E7665D]/50",
    terracotta: "bg-[#E7665D]/50",
    ink: "bg-ink-muted/40",
    forest: "bg-forest/40",
    navy: "bg-[#F08A82]/40",
  };

  return (
    <div
      className={`inline-flex items-center gap-3 ${
        align === "center" ? "justify-center mx-auto" : "justify-start"
      }`}
    >
      <span className={`h-px w-6 sm:w-8 ${lineColors[tone] || lineColors.coral}`} aria-hidden="true" />
      <span
        className={`font-sans text-[11px] sm:text-[11.5px] font-semibold tracking-[0.2em] uppercase ${
          toneClasses[tone] || toneClasses.coral
        }`}
      >
        {children}
      </span>
      <span className={`h-px w-6 sm:w-8 ${lineColors[tone] || lineColors.coral}`} aria-hidden="true" />
    </div>
  );
}
