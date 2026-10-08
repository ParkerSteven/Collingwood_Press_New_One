import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import StickySocialStrip from "@/components/ui/StickySocialStrip";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.thecollingwoodpress.com"),

  title: {
    default: "Trusted Book Publishing Company | Keep 100% Royalties",
    template: "%s | The Collingwood Press",
  },

  description:
    "Best book publishing company for independent authors. Professional ghostwriting, editing, cover design, marketing and global distribution services. You keep copyright and 100% of royalties.",

  keywords: [
    "book publishing company",
    "self publishing services",
    "book editing and formatting",
    "book cover design",
    "author marketing services",
  ],

  openGraph: {
    title: "Trusted Book Publishing Company | Keep 100% Royalties",
    description:
      "Best book publishing company for independent authors. Professional ghostwriting, editing, cover design, marketing and global distribution services. You keep copyright and 100% of royalties.",
    url: "https://www.thecollingwoodpress.com",
    siteName: "The Collingwood Press",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trusted Book Publishing Company | Keep 100% Royalties",
    description:
      "Best book publishing company for independent authors. Professional ghostwriting, editing, cover design, marketing and global distribution services. You keep copyright and 100% of royalties.",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased text-ink bg-paper selection:bg-coral selection:text-white">
        <StickySocialStrip />
        {children}
      </body>
    </html>
  );
}
