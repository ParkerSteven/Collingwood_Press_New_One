
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";


interface ResourceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    buttonText: string;
    href: string;
}

export default function ResourceCard({
    icon: Icon,
    title,
    description,
    buttonText,
    href,
}: ResourceCardProps) {
    return (
        <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#E7665D]/40">
            <div>
                {/* Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7665D]/15 text-[#F08A82]">
                    <Icon size={20} />
                </div>

                {/* Title */}
                <h4 className="font-serif text-lg font-bold leading-snug text-white">
                    {title}
                </h4>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {description}
                </p>
            </div>

            {/* Button */}
            <div className="mt-6 border-t border-white/10 pt-5">
                <Button
                    href={href}
                    variant="primary"
                    size="sm"
                    className="w-full"
                >
                    <span>{buttonText}</span>
                    <ArrowRight size={15} />
                </Button>
            </div>
        </div>
    );
}
