import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import {
  termsSections,
  type TermsSection,
} from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.thecollingwoodpress.com/terms-and-conditions/' },
  title: "Terms & Conditions | The Collingwood Press",
  description:
    "Everything you need to know about our terms, conditions, refund policies, copyright, and publishing services.",
};


export default function TermsAndConditionsPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <section className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-14 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-white/10 text-white">
        <Container className="max-w-3xl">
          <Eyebrow tone="coral">
            Publishing Standards &amp; Terms
          </Eyebrow>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Terms{" "}
            <span className="italic text-[#E7665D]">
              &amp; Conditions
            </span>
          </h1>

          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Everything you need to know about our terms and services.
          </p>
        </Container>
      </section>

      {/* Terms and Conditions Content */}
      <main className="bg-white text-ink py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-10 font-sans text-sm text-ink-soft leading-relaxed">

            {/* Introductory Information */}
            <div className="flex flex-col gap-4">
              <p>
                Please do not use this Website or Our services
                if You do not agree with any of these terms
                and conditions.
              </p>

              <p>
                You are not permitted to access or use this
                Website or Our services if you are under the
                legal age of consent in Your particular district.
                You understand and agree that in order to access
                any of Our products or services accessible on
                this Website or elsewhere, You must be of
                legal age.
              </p>

              <p>
                You acknowledge that you have read and understood
                these terms and conditions by placing an order
                and/or making a payment. You agree to be legally
                bound by these terms and conditions by placing
                an order and/or payment, which constitute
                the complete agreement between You and
                The Collingwood Press.
              </p>
            </div>

            {/* Dynamic Terms Sections */}
            {termsSections.map(
              (section: TermsSection, index: number) => (
                <section
                  key={section.title}
                  id={`terms-section-${index + 1}`}
                  className="scroll-mt-28"
                >
                  <h2 className="font-serif text-2xl sm:text-[1.8rem] font-bold text-ink leading-tight mb-4">
                    {section.title}
                  </h2>

                  {/* Paragraphs */}
                  {section.paragraphs?.map(
                    (paragraph: string, i: number) => (
                      <p
                        key={i}
                        className="mb-4 text-sm text-ink-soft leading-7"
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                  {/* List Items */}
                  {section.bullets && (
                    <ul className="flex flex-col gap-3 mt-4 pl-5 list-disc marker:text-[#E7665D]">
                      {section.bullets.map(
                        (bullet: string, i: number) => (
                          <li
                            key={i}
                            className="pl-1 text-sm text-ink-soft leading-7"
                          >
                            {bullet}
                          </li>
                        )
                      )}
                    </ul>
                  )}

                  {/* Nested Sections */}
                  {section.subsections?.map((sub, i) => (
                    <div key={sub.title} className="mt-6">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-3">
                        {sub.title}
                      </h3>

                      {sub.paragraphs?.map((paragraph, j) => (
                        <p
                          key={j}
                          className="text-sm text-ink-soft leading-7"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </section>
              )
            )}
          </div>

          {/* Contact Us */}
          <div className="mt-16 pt-12 border-t border-line">
            <div className="text-center">
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#E7665D]">
                Need Assistance?
              </span>

              <h2 className="mt-3 font-serif text-3xl font-bold text-ink">
                Contact{" "}
                <span className="italic text-[#E7665D]">
                  Us
                </span>
              </h2>

              <p className="mt-4 text-sm text-ink-soft leading-relaxed max-w-lg mx-auto">
                If you have any questions regarding our Terms
                and Conditions, please contact our team.
              </p>

              <p className="mt-5 font-serif font-bold text-ink">
                The Collingwood Press
              </p>

              <div className="mt-5 flex flex-col items-center gap-3 text-sm text-ink-soft">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#E7665D]" />
                  <span>
                    6777 Camp Bowie Blvd Ste. 125,
                    Fort Worth, TX 76116
                  </span>
                </div>

                <a
                  href="mailto:info@thecollingwoodpress.com"
                  className="flex items-center gap-2 hover:text-[#E7665D] transition-colors"
                >
                  <Mail size={16} className="text-[#E7665D]" />
                  info@thecollingwoodpress.com
                </a>

                <a
                  href="tel:+16832933144"
                  className="flex items-center gap-2 hover:text-[#E7665D] transition-colors"
                >
                  <Phone size={16} className="text-[#E7665D]" />
                  +1 (683) 293-3144
                </a>
              </div>

              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center justify-center gap-3 bg-[#E7665D] hover:bg-[#D8574E] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Contact Our Editorial Desk
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
