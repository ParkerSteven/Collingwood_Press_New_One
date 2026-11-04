import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import UtilityBar from "@/components/layout/UtilityBar";
import { Poppins, Cormorant_Garamond } from "next/font/google";

// Fonts
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


export default function SiteLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className={`${poppins.variable} ${cormorant.variable} font-sans min-h-screen`}>
            <UtilityBar />
            <Header />
            <main style={{ margin: 0, padding: 0 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}