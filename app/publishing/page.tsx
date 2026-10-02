"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Book,
  Layers,
  Sparkles,
  Globe,
  Download,
  CheckSquare,
  ShieldCheck,
  ArrowRight,
  Palette,
  FileSpreadsheet
} from "lucide-react";

const formats = [
  {
    title: "Collector-Grade Hardcovers",
    specs: "Archival Smyth-sewn binding with rich linen cloth or printed dust jacket, gold foil spine stamping, head & tail bands, and optional custom endpapers.",
    icon: Book,
  },
  {
    title: "French-Fold Trade Paperbacks",
    specs: "Premium 60lb/70lb natural cream interior paper, velvet soft-touch matte lamination, scoring on hinges, and optional embossed spot UV lettering.",
    icon: Layers,
  },
  {
    title: "Mastered Reflowable ePubs",
    specs: "Hand-coded valid ePub3 and Kindle formats tailored for responsive font scaling, high-DPI tablets, dynamic TOCs, and cross-platform fidelity.",
    icon: Sparkles,
  },
];

const checklistItems = [
  "Complete polished manuscript in Word or RTF format",
  "Working author bio, credentials, and high-resolution portrait",
  "Genre positioning & competitive title analysis",
  "Dedicated ISBN registration & Barcode assignment",
  "Library of Congress Control Number (LCCN) filing",
  "BISAC subject categories & metadata search keywords",
  "Interior typesetting approval & physical proof review",
  "Final jacket mechanical proof & foil registration sign-off",
];

export default function PublishingPage() {
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
                Full-Service Independent Trade Publishing
              </Eyebrow>

              <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.2rem] font-bold leading-[1.08] text-white tracking-tight text-balance">
                From manuscript draft to{" "}
                <span className="italic text-[#E7665D] block sm:inline">world-class physical book.</span>
              </h1>

              <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-[#ccccccad] font-sans max-w-2xl">
                We reject automated converters and generic templates. Every Collingwood edition is custom-typeset in Adobe InDesign, dressed in bespoke jacket artwork, and distributed worldwide through the premier bookseller networks.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Submit Manuscript to Active Publishing</span>
                  <ArrowRight size={15} />
                </Button>
                <Button href="#checklist" variant="outline-white" size="lg">
                  <span>View Author Publishing Checklist</span>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Formats Section */}
        <section className="py-20 lg:py-24 bg-white border-b border-line">
          <Container className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Three Coordinated Editions"
              title={
                <>
                  Crafted for every reading environment,{" "}
                  <span className="italic text-[#E7665D]">compromised on none</span>
                </>
              }
              description="Every acquired title is prepared simultaneously across hardcover, paperback, and reflowable digital formats."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {formats.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="p-8 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-[#E7665D]/50 transition-all duration-300"
                  >
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#fdf6f5] text-[#E7665D] border border-[#E7665D]/30 mb-6">
                        <Icon size={24} />
                      </span>
                      <h3 className="font-serif text-[1.3rem] font-bold text-ink">
                        {f.title}
                      </h3>
                      <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                        {f.specs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Cover Design Spotlight Anchor Section */}
        <section id="cover-design" className="py-14 lg:py-20 bg-white border-b border-line">
          <Container className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Visual Literature"
              title={
                <>
                  Bespoke Cover Design &amp;{" "}
                  <span className="italic text-[#E7665D]">Tactile Luxury Finishes</span>
                </>
              }
              description="Your dust jacket is the first conversation your book holds with a reader. We craft unforgettable typographic lockups and exquisite tactile embellishments."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]">
                <Palette size={24} className="text-[#E7665D] mb-4" />
                <h3 className="font-serif text-xl font-bold text-ink">
                  Tactile Embellishments
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  Real metallic gold foil stamping, spot UV varnish, custom blind debossing, and velvety soft-touch matte lamination that makes book collectors reluctant to put your volume down.
                </p>
              </div>

              <div className="p-8 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]">
                <Globe size={24} className="text-[#E7665D] mb-4" />
                <h3 className="font-serif text-xl font-bold text-ink">
                  Genre-Calibrated Visual Strategy
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  We analyze the current bestseller list in your specific subgenre to balance familiar visual conventions with distinctive artistic identity that stands out on retail shelves.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Templates & Checklist Anchor Sections */}
        <section id="templates" className="py-20 bg-white border-b border-line">
          <Container className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Author Resource Library"
              title={
                <>
                  Manuscript Preparation{" "}
                  <span className="italic text-[#E7665D]">Templates &amp; Guidelines</span>
                </>
              }
              description="Download industry-standard manuscript formatting templates and style guides crafted by our senior editorial directors."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
              <div className="p-6 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between">
                <div>
                  <FileSpreadsheet size={22} className="text-[#E7665D] mb-3" />
                  <h4 className="font-serif text-lg font-bold text-ink">
                    Standard Trade Word Template (.docx)
                  </h4>
                  <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">
                    Standard 1-inch margins, Times / Garamond 12pt, styled headings, and clean page breaks.
                  </p>
                </div>
                <Button href="/contact-us#manuscript-review" variant="outline" size="sm" className="mt-5 w-full">
                  <span>Request Template</span>
                </Button>
              </div>

              <div className="p-6 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between">
                <div>
                  <FileSpreadsheet size={22} className="text-[#E7665D] mb-3" />
                  <h4 className="font-serif text-lg font-bold text-ink">
                    Memoir Chapter Outline Kit (.pdf)
                  </h4>
                  <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">
                    Pacing worksheets and emotional arc mapping for autobiographical storytelling.
                  </p>
                </div>
                <Button href="/contact-us#manuscript-review" variant="outline" size="sm" className="mt-5 w-full">
                  <span>Request Kit</span>
                </Button>
              </div>

              <div className="p-6 rounded-sm border border-[#E7665D]/25 bg-white shadow-[0_4px_24px_0_rgba(231,102,93,0.12),0_1px_4px_0_rgba(0,0,0,0.06)] flex flex-col justify-between">
                <div>
                  <FileSpreadsheet size={22} className="text-[#E7665D] mb-3" />
                  <h4 className="font-serif text-lg font-bold text-ink">
                    BISAC Subject Code Reference
                  </h4>
                  <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">
                    Strategic categorization guide to optimize bookstore discoverability.
                  </p>
                </div>
                <Button href="/contact-us#manuscript-review" variant="outline" size="sm" className="mt-5 w-full">
                  <span>Request Guide</span>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Author Checklist Anchor Section */}
        <section id="checklist" className="hero-gradient py-20 lg:py-28 text-white border-b border-white/10 relative overflow-hidden paper-grain">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E7665D]/10 blur-[100px] rounded-full pointer-events-none" />
          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#F08A82]">
                  Production Readiness
                </span>
                <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                  The Collingwood Author Publishing Checklist
                </h2>
                <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
                  Every milestone we shepherd on your behalf before a single carton of books ships from the bindery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {checklistItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm border border-white/10 bg-white/[0.04] flex items-center gap-3 hover:border-[#E7665D]/40 transition-colors"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E7665D] text-white text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 font-sans">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Begin Your Publishing Journey</span>
                  <ArrowRight size={15} />
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
