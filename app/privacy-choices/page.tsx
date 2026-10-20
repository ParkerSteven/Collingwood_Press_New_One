import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import PrivacyOptOutForm from "@/components/sections/PrivacyOptForm";

export const metadata: Metadata = {
  title: "Your Privacy Choices | The Collingwood Press",
  description:
    "Learn how to opt out of the sale or sharing of personal information and exercise your privacy rights.",
};

export default function PrivacyChoicesPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-14 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-white/10 text-white">
        <Container className="max-w-3xl">
          <Eyebrow tone="coral">
            Author Preference Management
          </Eyebrow>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Your{" "}
            <span className="italic text-[#E7665D]">
              Privacy Choices
            </span>
          </h1>

          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Opt-out of the sale or sharing of your personal information.
          </p>

          <p className="mt-3 text-xs text-[#ccccccad]">
            Effective: January 1st, 2026
            <span className="mx-2">|</span>
            Last reviewed: January 1st, 2026
          </p>
        </Container>
      </section>

      {/* Privacy Choices Content */}
      <main className="bg-white text-ink py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-10 text-sm text-ink-soft leading-relaxed font-sans">

            {/* Introduction */}
            <div>
              <p>
                This page is primarily intended for California
                residents exercising their rights under the
                California Consumer Privacy Act (CCPA) and
                California Privacy Rights Act (CPRA). Residents
                of other states with applicable privacy laws
                (Virginia, Colorado, Connecticut, Texas, etc.)
                may also submit requests using the form below.
              </p>
            </div>

            {/* What This Means */}
            <section>
              <h2 className="font-serif text-2xl sm:text-[1.8rem] font-bold text-ink leading-tight mb-4">
                1. What This Means
              </h2>

              <div className="flex flex-col gap-4">
                <p>
                  The Collingwood Press uses third-party
                  advertising and analytics technologies on
                  our website. These include tools like
                  Microsoft Advertising (Universal Event
                  Tracking / UET) and Google Analytics.
                  These technologies may collect data about
                  your browsing behavior, such as the pages
                  you visit and actions you take, and share
                  that data with those platforms to serve
                  you relevant ads on other websites.
                </p>

                <p>
                  Under California law (CCPA/CPRA), this type
                  of data sharing may qualify as a "sale" or
                  "sharing" of your personal information,
                  even when no money changes hands. As a
                  California resident, you have the right
                  to opt out of this activity.
                </p>
              </div>
            </section>

            {/* What Data Is Involved */}
            <section>
              <h2 className="font-serif text-2xl sm:text-[1.8rem] font-bold text-ink leading-tight mb-4">
                2. What Data Is Involved
              </h2>

              <div className="flex flex-col gap-4">
                <p>
                  <strong className="text-ink">
                    Internet or network activity data:
                  </strong>{" "}
                  pages visited, session duration, ad interactions,
                  referring URLs.
                </p>

                <p>
                  <strong className="text-ink">
                    Device identifiers:
                  </strong>{" "}
                  IP address, browser type, device IDs.
                </p>

                <p>
                  <strong className="text-ink">
                    Inferences:
                  </strong>{" "}
                  advertising profiles built from your browsing
                  behavior on our site.
                </p>

                <p>
                  We do not sell your name, email address,
                  phone number, financial information, or
                  manuscript data to third parties.
                </p>
              </div>
            </section>

            {/* How to Opt Out */}
            <section>
              <h2 className="font-serif text-2xl sm:text-[1.8rem] font-bold text-ink leading-tight mb-4">
                3. How To Opt Out
              </h2>

              <p className="mb-6">
                You have three ways to exercise your opt out
                right. You may use any or all of them:
              </p>

              {/* Option A */}
              <div className="rounded-xl border border-[#E7665D]/20 bg-[#fdfbf7] p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink leading-snug">
                  Option A: Submit a Request Below
                  <span className="block text-[#E7665D]">
                    (Recommended)
                  </span>
                </h3>

                <p className="mt-4 text-sm text-ink-soft leading-7">
                  Complete the opt-out request form below with
                  your name and email address. We will process
                  your request within 15 business days and
                  instruct our advertising partners to suppress
                  your data from their targeting systems.
                </p>

                <PrivacyOptOutForm />
              </div>

              {/* Option B */}
              <div className="mt-10">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink leading-snug mb-4">
                  Option B: Use Your Browser&apos;s
                  Global Privacy Control (GPC)
                </h3>

                <p>
                  We honor the Global Privacy Control (GPC)
                  signal. If your browser or browser extension
                  is configured to send a GPC signal, we will
                  automatically treat this as an opt-out
                  request for the sale and sharing of your
                  personal information. No form submission
                  required.
                </p>
              </div>

              {/* Option C */}
              <div className="mt-10">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink leading-snug mb-4">
                  Option C: Opt Out Directly with
                  Our Advertising Partners
                </h3>

                <p>
                  You may also opt out of interest-based
                  advertising directly through our third
                  party partners like Microsoft Advertising
                  or Google Ads Settings.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Us */}
          <div className="mt-16 pt-12 border-t border-line">
            <div className="text-center">
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#E7665D]">
                Privacy Assistance
              </span>

              <h2 className="mt-3 font-serif text-3xl font-bold text-ink">
                Contact{" "}
                <span className="italic text-[#E7665D]">
                  Us
                </span>
              </h2>

              <p className="mt-4 text-sm text-ink-soft leading-relaxed max-w-lg mx-auto">
                If you have questions about this page or your
                privacy rights, please contact our Privacy Team.
              </p>

              <div className="mt-6 flex flex-col items-center gap-3 text-sm text-ink-soft">
                <a
                  href="mailto:privacy@thecollingwoodpress.com?subject=Privacy%20Choices%20Request"
                  className="flex items-center gap-2 hover:text-[#E7665D] transition-colors"
                >
                  <Mail size={16} className="text-[#E7665D]" />
                  privacy@thecollingwoodpress.com
                </a>

                <a
                  href="tel:+19362233644"
                  className="flex items-center gap-2 hover:text-[#E7665D] transition-colors"
                >
                  <Phone size={16} className="text-[#E7665D]" />
                  +1 (936) 223-3644
                </a>

                <div className="flex items-center gap-2 text-center">
                  <MapPin size={16} className="text-[#E7665D] shrink-0" />
                  <span>
                    6777 Camp Bowie Blvd Ste. 125,
                    Fort Worth, TX 76116
                  </span>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center justify-center gap-3 bg-[#E7665D] hover:bg-[#D8574E] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Contact Our Privacy Team
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
