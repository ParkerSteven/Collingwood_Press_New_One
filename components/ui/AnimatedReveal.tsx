"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedRevealProps {
    children: ReactNode;
    className?: string;
    as?: "div" | "article";
    y?: number;
    duration?: number;
    delay?: number;
    amount?: number;
    margin?: string;
    hoverY?: number;
}

export default function AnimatedReveal({
    children,
    className = "",
    as = "div",
    y = 20,
    duration = 0.6,
    delay = 0,
    amount,
    margin,
    hoverY,
}: AnimatedRevealProps) {
    const animationProps = {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: {
            once: true,
            ...(amount !== undefined ? { amount } : {}),
            ...(margin !== undefined ? { margin } : {}),
        },
        transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
        },
        ...(hoverY !== undefined
            ? { whileHover: { y: hoverY } }
            : {}),
        className,
        children,
    };

    if (as === "article") {
        return <motion.article {...animationProps} />;
    }

    return <motion.div {...animationProps} />;
}