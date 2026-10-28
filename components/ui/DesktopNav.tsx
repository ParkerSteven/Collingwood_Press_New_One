
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Ghostwriting", href: "/ghostwriting/" },
    { label: "Editing", href: "/editing/" },
    { label: "Publishing", href: "/publishing/" },
    { label: "Marketing", href: "/marketing/" },
    { label: "Audiobook", href: "/audiobook/" },
    { label: "About Us", href: "/about-us/" },
    { label: "Contact Us", href: "/contact-us/" },
];

export default function DesktopNav() {
    const pathname = usePathname();

    const normalizedPath =
        pathname === "/"
            ? "/"
            : pathname.replace(/\/+$/, "") + "/";

    return (
        <nav
            aria-label="Primary"
            className="hidden items-center gap-4 lg:gap-5 xl:gap-5 lg:flex"
        >
            {navItems.map((item) => {
                const isActive =
                    normalizedPath === item.href ||
                    normalizedPath.startsWith(item.href);

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
    );
}
