import { ReactNode } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "outline" | "dark" | "secondary";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#E7665D] text-white border border-[#E7665D] hover:bg-[#d8574e] hover:border-[#d8574e] active:bg-[#c2463e] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5",
  outline:
    "bg-transparent text-ink border border-line-strong hover:border-[#E7665D] hover:text-[#E7665D] hover:bg-paper-card transition-all duration-200 active:bg-paper-warm",
  secondary:
    "bg-paper-card text-ink border border-line hover:border-line-strong hover:bg-paper-warm active:bg-paper-muted shadow-subtle transition-all duration-200",
  dark:
    "bg-ink text-white border border-ink hover:bg-[#2A241C] hover:border-[#2A241C] active:bg-[#151310] shadow-subtle transition-all duration-200",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-[0.88rem]",
  lg: "px-7 py-3.5 text-[0.92rem]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-sm font-sans font-medium tracking-[0.02em] transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7665D] disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
