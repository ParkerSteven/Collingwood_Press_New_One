"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Megaphone,
  Compass,
  Trophy,
  Globe,
  Calendar,
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Bookmark
} from "lucide-react";

const marketingPillars = [
  {
    title: "Advance Reader Copy (ARC) Outreach",
    desc: "Coordinated distribution of digital and physical bound galleys to verified Amazon Top Reviewers, Goodreads community leaders, and genre-specific book bloggers to build authentic launch-week momentum.",
    badge: "Social Proof",
  },
  {
    title: "Amazon A+ Content & Keyword Architecture",
    desc: "Bespoke graphical modules, rich editorial reviews, and deep algorithm optimization designed to convert browsing booklovers into passionate buyers on retail product pages.",
    badge: "Conversion Optimization",
  },
  {
    title: "Bookstore Buyer & Library Pitch Kits",
    desc: "Professional sell-sheets, BISAC categorization summaries, and wholesale Ingram catalog listings pitched directly to acquisition librarians and independent bookstore buyers nationwide.",
    badge: "Trade Distribution",
  },
  {
    title: "Targeted Paid Reader Advertising",
    desc: "Data-driven advertising campaigns across Amazon Ads, BookBub featured newsletters, and Meta targeting readers of comparable bestselling authors in your exact literary space.",
    badge: "Paid Acquisition",
  },
];

const bookFairs = [
  {
    name: "Frankfurt Book Fair (Frankfurter Buchmesse)",
    location: "Frankfurt, Germany",
    focus: "The world's largest gathering for international publishing rights, translation licenses, and foreign distribution agreements.",
  },
  {
    name: "London Book Fair",
    location: "London, United Kingdom",
    focus: "The global marketplace for rights negotiation, European bookstore placement, and Commonwealth distribution channels.",
  },
  {
    name: "American Library Association (ALA) Annual",
    location: "United States (Rotational)",
    focus: "Direct exposure to over 15,000 public and university acquisition librarians responsible for nationwide catalog purchasing.",
  },
  {
    name: "Beijing & Tokyo International Book Fairs",
    location: "Asia-Pacific Region",
    focus: "Expanding author footprint into rapidly growing East Asian translation rights markets and academic collections.",
  },
];

export default function MarketingPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="bg-white text-ink">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <Eyebrow tone="coral" align="center">
                Commercial Discovery &bull; Global Book Publicity
              </Eyebrow>

              <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.2rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                Your book is in print.{" "}
                <span className="italic text-[#E7665D] block sm:inline">Now we place it in readers&rsquo; hands.</span>
              </h1>

              <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                Publication day is not the finish line—it is day one of your book&rsquo;s public life. Our marketing strategists craft bespoke campaigns built around the commercial realities of your genre.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Develop Your Custom Launch Campaign</span>
                  <ArrowRight size={15} />
                </Button>
                <Button href="#book-fairs" variant="outline-white" size="lg">
                  <span>International Book Fair Representation</span>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Marketing Pillars */}
        <section className="py-20 lg:py-24 bg-white border-b border-line">
          <Container className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Targeted Campaign Cadence"
              title={
                <>
                  Strategic publicity designed for{" "}
                  <span className="italic text-[#E7665D]">lasting literary momentum</span>
                </>
              }
              description="We avoid one-size-fits-all promotional spam. Every marketing package is engineered to create compounding credibility with readers, reviewers, and booksellers."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketingPillars.map((p) => (
                <div
                  key={p.title}
                  className="p-8 sm:p-10 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 transition-all duration-300"
                >
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.14em] font-bold text-[#E7665D] bg-[#fdf6f5] px-2.5 py-1 rounded-sm border border-[#E7665D]/20 inline-block mb-4">
                      {p.badge}
                    </span>
                    <h3 className="font-serif text-[1.3rem] font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Book Fairs Anchor Section */}
        <section id="book-fairs" className="hero-gradient py-20 lg:py-28 text-white border-b border-white/10 relative overflow-hidden paper-grain">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />
          <Container className="relative z-10 flex flex-col gap-14">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                Global Rights &amp; Exhibition
              </span>
              <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                International Book Fair Representation
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                The Collingwood Press represents author titles at the world&rsquo;s most prestigious trade exhibitions, presenting physical display copies to international publishers, film scouts, and rights buyers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
              {bookFairs.map((fair) => (
                <div
                  key={fair.name}
                  className="p-6 rounded-sm border border-white/10 bg-white/[0.04] shadow-sm flex flex-col justify-between hover:border-[#E7665D]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-xs font-sans text-[#F08A82]">
                      <Globe size={14} />
                      <span>{fair.location}</span>
                    </div>
                    <h3 className="font-serif text-[1.2rem] font-bold text-white">
                      {fair.name}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                      {fair.focus}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#F08A82]">
                    <CheckCircle2 size={13} />
                    <span>Physical Catalog &amp; Stand Placement Included</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                <span>Inquire About Book Fair Inclusion</span>
                <ArrowRight size={15} />
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
