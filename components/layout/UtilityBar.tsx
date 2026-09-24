import { Mail, Phone, ShieldCheck, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function UtilityBar() {
  return (
    <div className="border-b hidden lg:block border-line bg-[#E7665D] text-ink-soft py-2 px-3 text-[0.8rem] font-sans">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <Link
            href="mailto:info@thecollingwoodpress.com"
            className="inline-flex items-center gap-1.5 text-[#fff] transition-colors tracking-wide"
          >
            <Mail size={13} className="text-[#fff]" />
            <span>info@thecollingwoodpress.com</span>
          </Link>
          <span className="hidden md:inline-block w-[1px] h-3 bg-[#fff]" />
          <Link
            href="tel:+19362233644"
            className="hidden md:inline-flex items-center gap-1.5 text-[#fff] transition-colors"
          >
            <Phone size={13} className="text-[#fff]" />
            <span>Direct Line: +1 (936) 223-3644</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 text-ink-muted text-[0.76rem]">
          <span className="inline-flex text-[#fff] items-center gap-1">
            <Award size={13} className="text-[#fff]" />
            <span>Independent Book Publishers Association (IBPA)</span>
          </span>
          <span className="w-[1px] h-3 bg-[#fff]" />
          <span className="inline-flex text-[#fff] items-center gap-1">
            <ShieldCheck size={13} className="text-[#E7665D]" />
            <span>BBB A+ Accredited</span>
          </span>
        </div>
      </Container>
    </div>
  );
}
