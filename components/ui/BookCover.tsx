"use client";

import React from "react";
import Image from "next/image";

export interface BookCoverProps {
  title?: string;
  subtitle?: string;
  author: string;
  genre?: string;
  bg?: string;
  accent?: string;
  artTheme?: "coast" | "geometric" | "foliage" | "astronomy" | "minimal";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  elevation?: boolean;
  frontSrc?: string;
  backSrc?: string;
}

export default function BookCover({
  title,
  subtitle,
  author,
  genre,
  bg = "#1C2434",
  accent = "#E7665D",
  artTheme = "coast",
  className = "",
  size = "md",
  elevation = true,
  frontSrc,
  backSrc,
}: BookCoverProps) {
  // Size dimensions (aspect ratio ~ 1 : 1.5)
  const sizeClasses = {
    sm: "w-28 h-42 text-[10px]",
    md: "w-44 h-66 text-xs",
    lg: "w-56 h-84 text-sm",
    xl: "w-68 h-102 text-base",
  }[size];

  return (
    <div
      className={`group relative select-none rounded-[3px] transition-all duration-300 ${elevation ? "book-spine-effect hover:shadow-bookHover hover:-translate-y-1.5" : ""
        } ${className}`}
      style={{
        backgroundColor: bg,
        aspectRatio: "1 / 1.52",
      }}
      role="img"
      aria-label={`Book cover for "${title}" by ${author}`}
    >
      {frontSrc ? (
        <>
          {backSrc && (
            <div className="absolute left-0 top-[7%] z-0 h-[86%] w-[62%] overflow-hidden rounded-[3px] shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:-translate-x-2">
              <Image
                src={backSrc}
                alt={`${title} back cover`}
                fill
                sizes="176px"
                className="object-cover"
                draggable={false}
              />
            </div>
          )}
          <div className={`absolute z-10 h-full overflow-hidden rounded-[3px] shadow-xl transition-transform duration-300 ${backSrc ? "right-0 top-0 w-[70%]" : "inset-0 w-full"
            }`}>
            <Image
              src={frontSrc}
              alt={`${title} front cover`}
              fill
              sizes="(max-width: 640px) 220px, 260px"
              className="object-cover"
              draggable={false}
            />
          </div>
        </>
      ) : (
        <div className="relative h-full w-full flex flex-col justify-between p-4 sm:p-5 z-20 text-center overflow-hidden">
          {/* Elegant gold foil perimeter border */}
          <div
            className="absolute inset-2.5 sm:inset-3 border pointer-events-none z-10 rounded-[1px] transition-opacity duration-300"
            style={{
              borderColor: accent,
              opacity: 0.45,
            }}
          />

          {/* Book Dust Jacket Grain Simulation */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-10"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.2) 1px, transparent 0)`,
              backgroundSize: "4px 4px",
            }}
          />

          {/* Top Header / Genre */}
          <div className="pt-2 z-20">
            <span
              className="font-sans text-[8.5px] uppercase tracking-[0.24em] font-semibold block"
              style={{ color: accent }}
            >
              {genre || "Collingwood Edition"}
            </span>
          </div>

          {/* Center Title and Artwork */}
          <div className="my-auto py-2 flex flex-col items-center justify-center z-20">
            <h4 className="font-serif text-[1.05rem] sm:text-[1.2rem] font-medium leading-tight text-white tracking-wide uppercase">
              {title}
            </h4>

            {subtitle && (
              <p className="font-serif italic text-[9.5px] sm:text-[10px] text-slate-300 mt-1 max-w-[90%] leading-snug">
                {subtitle}
              </p>
            )}

            {/* Emblem */}
            <div className="mt-3 opacity-80">
              <svg viewBox="0 0 80 40" className="w-12 sm:w-14" fill="none">
                <circle cx="40" cy="20" r="10" stroke={accent} strokeWidth="1" strokeDasharray="2 2" />
                <path d="M40 8V12" stroke={accent} strokeWidth="1.2" />
                <path d="M40 28V32" stroke={accent} strokeWidth="1.2" />
                <path d="M28 20H32" stroke={accent} strokeWidth="1.2" />
                <path d="M48 20H52" stroke={accent} strokeWidth="1.2" />
              </svg>
            </div>
          </div>

          {/* Bottom Author & Colophon */}
          <div className="pb-1 z-20 flex flex-col items-center">
            <span className="font-serif text-[11px] sm:text-xs tracking-[0.16em] uppercase text-slate-200 font-medium">
              {author}
            </span>
            <span
              className="font-sans text-[7.5px] uppercase tracking-[0.22em] mt-1 block opacity-70"
              style={{ color: accent }}
            >
              The Collingwood Press
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
