
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import MobileMenu from "../ui/MobileMenu";
import DesktopNav from "../ui/DesktopNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white backdrop-blur-md transition-all">
      <Container className="flex items-center justify-between py-3.5 sm:py-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/Collingwood-Logo.png"
            alt="The Collingwood Press"
            width={240}
            height={70}
            priority
            className="object-contain"
          />
        </Link>

        <DesktopNav />

        <div className="hidden items-center gap-4 lg:flex">
          <Button
            href="/contact-us/#manuscript-review"
            variant="primary"
            size="sm"
            className="px-3 py-2 text-xs font-semibold"
          >
            <span>Complimentary Manuscript Review</span>
            <ArrowUpRight size={13} />
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
