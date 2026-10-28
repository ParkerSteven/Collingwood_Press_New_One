import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  Mail,
  FileText,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "@/components/ui/Container";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.thecollingwoodpress.com/privacy-policy/' },
  title: "Privacy Policy | The Collingwood Press",
  description:
    "Learn how The Collingwood Press collects, uses, and protects your personal information.",
};

interface PrivacySubsection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface PrivacySection {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: PrivacySubsection[];
  after?: string;
}

const privacySections: PrivacySection[] = [
  {
    id: "information-collection",
    title: "Information Collection",
    subsections: [
      {
        title: "a. Information You Provide",
        paragraphs: [
          "When you interact with us, such as registering an account, submitting an order, uploading your manuscript, contacting support, or subscribing to communications, you may provide:",
        ],
        bullets: [
          "Personal details: name, email address, postal address, phone number, date of birth.",
          "Financial details: payment method, billing information.",
          "Manuscript or project data.",
          "Account credentials and authentication data.",
        ],
      },
      {
        title: "b. Information Collected Automatically",
        paragraphs: ["We automatically gather:"],
        bullets: [
          "Device details: IP address, browser type, device ID.",
          "Usage data: pages visited, time stamps, referring URLs, session duration via cookies and web server logs.",
          "Location data (approximate, based on IP).",
          "Cookies, web beacons, and similar tracking tools to operate the site, improve functionality, and provide personalized services.",
        ],
      },
      {
        title: "c. Information from Other Sources",
        paragraphs: [
          "We may supplement our data with information from third-party service providers you use, such as chat tools or social login services, and publicly available databases.",
        ],
      },
    ],
  },
  {
    id: "use-of-information",
    title: "Use of Collected Information",
    paragraphs: ["We use your information to:"],
    bullets: [
      "Provide, operate, and maintain our services.",
      "Process orders, payments, and deliverables.",
      "Communicate updates, billing, project milestones, promotions (if opted in).",
      "Personalize content and improve user experience.",
      "Analyze usage and perform site analytics.",
      "Protect against fraud and ensure security.",
      "Fulfill legal and regulatory obligations.",
      "Conduct research and develop new features.",
    ],
  },
  {
    id: "sharing-information",
    title: "Sharing of Your Information",
    paragraphs: ["We may share your data with:"],
    bullets: [
      "Service providers (e.g., payment processors, hosting, analytics, messaging).",
      "Affiliated entities (e.g., business units or subsidiaries).",
      "Legal authorities, if required by law.",
      "Following a business transaction, such as a sale or merger.",
    ],
    after:
      "We do not sell or rent your personal information to third parties.",
  },
  {
    id: "cookies",
    title: "Cookies, Analytics and Advertising",
    paragraphs: [
      "We use cookies and beacons to analyze usage, perform remarketing, and personalize content. You can manage cookie preferences via your browser or opt-out tools.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    paragraphs: [
      "We retain personal data only as long as necessary to fulfill the purposes outlined, such as project completion, analytics, legal compliance, or dispute resolution.",
    ],
  },
  {
    id: "communication",
    title: "Communications Preferences",
    paragraphs: [
      "SMS and Email: You may opt in to receive updates, marketing, or service-related messages.",
    ],
    bullets: [
      "To unsubscribe, reply STOP (SMS) or use the unsubscribe link (email).",
      "Messaging frequency varies (e.g., up to approximately 4 messages per week).",
      "HELP replies or contacting support is available at any time.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    paragraphs: [
      "Our services are not intended for individuals under 18. We do not knowingly collect personal information from minors. If we learn that we have done so, we will delete it promptly.",
    ],
  },
  {
    id: "third-party",
    title: "Third Party Links",
    paragraphs: [
      "Our site may contain links to third-party websites. This Privacy Policy does not apply to those sites. Please review their privacy practices directly; we are not responsible for their content or data handling.",
    ],
  },
  {
    id: "international",
    title: "International Transfers",
    paragraphs: [
      "Data you provide may be stored or processed in the U.S. or other countries. By using our services, you consent to such transfers in accordance with this Privacy Policy.",
    ],
  },
  {
    id: "rights",
    title: "Users' Rights (Where Applicable)",
    paragraphs: [
      "Depending on your jurisdiction (e.g., EU, UK, California), you may have rights such as:",
    ],
    bullets: [
      "Accessing, correcting, deleting, or exporting your data.",
      "Withdrawing consent or objecting to processing.",
      "Filing complaints with data protection authorities.",
    ],
    after:
      "To exercise these rights, contact us via the details below. Verification may be required.",
  },
  {
    id: "updates",
    title: "Policy Updates",
    paragraphs: [
      'If this policy is updated materially, the "Effective Date" above will be updated. Continued use of our services after a revision indicates acceptance of the changes.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden paper-grain pt-14 pb-14 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-white/10 text-white">
        <Container className="max-w-3xl">
          <Eyebrow tone="coral">
            Legal Information &amp; Data Protection
          </Eyebrow>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Privacy{" "}
            <span className="italic text-[#E7665D]">
              Policy
            </span>
          </h1>

          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            How The Collingwood Press collects, uses, and protects
            your personal information.
          </p>

          <p className="mt-2 text-xs text-[#ccccccad]">
            Effective Date: January 1st, 2026
          </p>
        </Container>
      </section>

      {/* Privacy Policy Content */}
      <main className="bg-white text-ink py-16 sm:py-24">
        <Container className="max-w-3xl">

          <div className="flex flex-col gap-10 font-sans text-sm text-ink-soft leading-relaxed">

            {/* Introduction */}
            <div className="flex flex-col gap-4">
              <p>
                PLEASE REVIEW THIS PRIVACY POLICY CAREFULLY.
                The Collingwood Press (&quot;We,&quot;
                &quot;Us,&quot; &quot;Our&quot;) reserves
                the right to update this Privacy Policy periodically.
                Any changes will be posted on this website, and
                your continued use of our services indicates
                acceptance of those changes.
              </p>
            </div>

            {/* Dynamic Privacy Sections */}
            {privacySections.map(
              (section: PrivacySection) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  {/* Section Heading */}
                  <h2 className="font-serif text-2xl sm:text-[1.8rem] font-bold text-ink leading-tight mb-4">
                    {section.title}
                  </h2>

                  {/* Paragraphs */}
                  {section.paragraphs?.map(
                    (paragraph: string, index: number) => (
                      <p
                        key={index}
                        className="mb-4 text-sm text-ink-soft leading-7"
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                  {/* Bullet Points */}
                  {section.bullets && (
                    <ul className="flex flex-col gap-3 mt-4 pl-5 list-disc marker:text-[#E7665D]">
                      {section.bullets.map(
                        (bullet: string, index: number) => (
                          <li
                            key={index}
                            className="pl-1 text-sm text-ink-soft leading-7"
                          >
                            {bullet}
                          </li>
                        )
                      )}
                    </ul>
                  )}

                  {/* Subsections */}
                  {section.subsections?.map(
                    (sub: PrivacySubsection, index: number) => (
                      <div
                        key={sub.title}
                        className={index !== 0 ? "mt-8" : "mt-6"}
                      >
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-3">
                          {sub.title}
                        </h3>

                        {/* Subsection Paragraphs */}
                        {sub.paragraphs.map(
                          (paragraph: string, i: number) => (
                            <p
                              key={i}
                              className="mb-3 text-sm text-ink-soft leading-7"
                            >
                              {paragraph}
                            </p>
                          )
                        )}

                        {/* Subsection Bullets */}
                        {sub.bullets && (
                          <ul className="flex flex-col gap-3 mt-4 pl-5 list-disc marker:text-[#E7665D]">
                            {sub.bullets.map(
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
                      </div>
                    )
                  )}

                  {/* Additional Description */}
                  {section.after && (
                    <p className="mt-5 text-sm text-ink-soft leading-7">
                      {section.after}
                    </p>
                  )}
                </section>
              )
            )}
          </div>

          {/* Contact Us Section */}
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
                If you have questions about this Privacy Policy,
                your personal information, or wish to exercise
                your privacy rights, please contact our team.
              </p>

              <p className="mt-5 font-serif font-bold text-ink">
                The Collingwood Press
              </p>

              <div className="mt-5 flex flex-col items-center gap-3 text-sm text-ink-soft">
                <div className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    className="text-[#E7665D]"
                  />
                  <span>
                    6777 Camp Bowie Blvd Ste. 125,
                    Fort Worth, TX 76116
                  </span>
                </div>

                <a
                  href="mailto:info@thecollingwoodpress.com"
                  className="flex items-center gap-2 hover:text-[#E7665D] transition-colors"
                >
                  <Mail
                    size={16}
                    className="text-[#E7665D]"
                  />
                  info@thecollingwoodpress.com
                </a>

                <a
                  href="tel:+16832933144"
                  className="flex items-center gap-2 hover:text-[#E7665D] transition-colors"
                >
                  <Phone
                    size={16}
                    className="text-[#E7665D]"
                  />
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
