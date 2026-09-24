import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f7f2e7",   // Warm bookish ivory (main background)
          warm: "#ebe2d0",      // Paper deep / editorial beige
          muted: "#e2d7c3",     // Soft muted paper
          card: "#fdfbf7",      // Crisp folio / card surface
        },
        ink: {
          DEFAULT: "#181511",   // Deep charcoal ink
          soft: "#363028",      // Secondary body copy
          muted: "#6b6254",     // Metadata & captions
          faint: "#968b7b",
        },
        // Coral palette (primary accent)
        coral: {
          DEFAULT: "#E7665D",
          dark: "#D9C69A",
          deep: "#A83E39",
          light: "#F08A82",
          pale: "#F7D8D4",
          tint: "#FDF0EE",
        },
        // Backwards-compatible aliases mapping to coral palette
        terracotta: {
          DEFAULT: "#E7665D",
          dark: "#D9C69A",
          deep: "#A83E39",
          light: "#F08A82",
          pale: "#F7D8D4",
          tint: "#FDF0EE",
        },
        navy: {
          DEFAULT: "#0d1527",   // Midnight luxury navy
          deep: "#070b14",
          soft: "#141f36",
          card: "#10192e",
          tint: "#f2f5fa",
        },
        forest: {
          DEFAULT: "#16382B",
          tint: "#EDF5F1",
        },
        gold: {
          DEFAULT: "#D4AF37",
          deep: "#A83E39",
          dark: "#C59B27",
          champagne: "#E8D8A0",
          metallic: "#D9C69A",
          light: "#F5E6B8",
          pale: "#FAF2DB",
          tint: "#FDF9EE",
        },
        line: {
          DEFAULT: "#ded4c1",   // Delicate book rule
          subtle: "#eae1d2",
          strong: "#c8bca7",
          gold: "#D4AF3740",
          coral: "#E7665D30",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        heading: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
        editorial: "840px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(26, 23, 18, 0.04), 0 8px 24px -8px rgba(26, 23, 18, 0.08)",
        cardHover: "0 4px 12px rgba(26, 23, 18, 0.06), 0 20px 36px -12px rgba(26, 23, 18, 0.12)",
        book: "0 4px 6px -1px rgba(26, 23, 18, 0.1), 0 20px 40px -15px rgba(26, 23, 18, 0.28), -4px 0 10px rgba(26, 23, 18, 0.15)",
        bookHover: "0 10px 20px -3px rgba(26, 23, 18, 0.15), 0 30px 60px -20px rgba(26, 23, 18, 0.35), -6px 0 16px rgba(26, 23, 18, 0.2)",
        subtle: "0 1px 2px rgba(26, 23, 18, 0.05)",
      },
      borderRadius: {
        xs: "3px",
        sm: "5px",
        md: "8px",
        lg: "12px",
      },
      letterSpacing: {
        editorial: "0.08em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;