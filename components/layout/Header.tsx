"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import MobileMenu from "../ui/MobileMenu";

// const navItems = [
//   { label: "Ghostwriting", href: "/ghostwriting" },
//   { label: "Editing", href: "/editing" },
//   { label: "Publishing", href: "/publishing" },
//   { label: "Marketing", href: "/marketing" },
//   { label: "Audiobook", href: "/audiobook" },
//   { label: "About Us", href: "/about-us" },
//   { label: "Contact Us", href: "/contact-us" },
// ]

const navItems = [
  { label: "Ghostwriting", href: "/ghostwriting" },
  { label: "Editing", href: "/editing" },
  { label: "Publishing", href: "/publishing" },
  { label: "Marketing", href: "/marketing" },
  { label: "Audiobook", href: "/audiobook" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];
export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white backdrop-blur-md transition-all relative">
      <Container className="flex items-center justify-between py-3.5 sm:py-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/Collingwood-Logo.png"
            alt="The Collingwood Press"
            width={240}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-4 lg:gap-5 xl:gap-5 lg:flex"
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[13px] font-medium tracking-[0.01em] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#E7665D] after:transition-all ${isActive
                    ? "text-[#E7665D] after:w-full"
                    : "text-ink-soft hover:text-[#E7665D] after:w-0 hover:after:w-full"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* <Button
            href="/contact-us#manuscript-review"
            variant="primary"
            size="sm"
            className="px-4 py-2 text-xs font-semibold"
          >
            <span>Claim Your Free Manuscript</span>
            <ArrowUpRight size={13} />
          </Button> */}
          <Button
            href="#"
            variant="primary"
            size="sm"
            className="px-4 py-2 text-xs font-semibold"
          >
            <span>Claim Your Free Manuscript</span>
            <ArrowUpRight size={13} />
          </Button>
        </div>

        {/* Mobile Menu (Client Component) */}
        <MobileMenu />
      </Container>
    </header>
  );
}