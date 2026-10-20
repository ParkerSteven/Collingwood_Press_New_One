import Link from "next/link";
import { Mail, Phone, ShieldCheck, Award, BookOpen, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import instagram from '@/public/assets/images/socials/instagram.svg';
import tiktok from '@/public/assets/images/socials/tiktok.svg';

// const servicesLinks = [
//   { label: "Ghostwriting", href: "/ghostwriting" },
//   { label: "Editing", href: "/editing" },
//   { label: "Publishing", href: "/publishing" },
//   { label: "Marketing", href: "/marketing" },
//   { label: "Book Fairs", href: "/marketing#book-fairs" },
//   { label: "Cover Design", href: "/publishing#cover-design" },
//   { label: "Audiobook Production", href: "/audiobook" },
// ];

const servicesLinks = [
  { label: "Ghostwriting", href: "/ghostwriting" },
  { label: "Editing", href: "/editing" },
  { label: "Publishing", href: "/publishing" },
  { label: "Marketing", href: "/marketing" },
  { label: "Book Fairs", href: "#" },
  { label: "Cover Design", href: "#" },
  { label: "Audiobook Production", href: "/audiobook" },
];

// const companyLinks = [
//   { label: "About Us", href: "/about-us" },
//   { label: "Our Team", href: "/about-us#team" },
//   { label: "Testimonials", href: "/#testimonials" },
//   { label: "Contact", href: "/contact-us" },
//   { label: "Blog", href: "/about-us#blog" },
//   { label: "AI & LLM Resources", href: "/about-us#ai-resources" },
// ];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/#publishing-team" },
  { label: "Contact", href: "/contact-us" },
  { label: "Blog", href: "/#publishing-insights" },
  { label: "AI & LLM Resources", href: "/" },
];

// const authorLibraryLinks = [
//   { label: "Templates", href: "/publishing#templates" },
//   { label: "Collingwood Partners", href: "/about-us#partners" },
//   { label: "Author Checklist", href: "/publishing#checklist" },
// ];

const authorLibraryLinks = [
  { label: "Templates", href: "#" },
  { label: "Collingwood Partners", href: "#" },
  { label: "Author Checklist", href: "#" },
];
export const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/thecollingwoodpress/',
    img: instagram
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/theCollingwoodpress',
    icon: (
      <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/the-collingwood-press/',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#0A66C2" />
        <path fill="#ffffff" d="M19 19h-3v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19zM6.88 7.63a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48zM8.38 19h-3V9h3v10z" />
      </svg>
    )
  },

  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com/Thecollingwoodpress/',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#ffffff" />
        <path fill="#E60023" fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
      </svg>
    )
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@thecollingwoodpress',
    img: tiktok
  },

  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@TheCollingwoodPress',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <polygon fill="#ffffff" points="9.545,15.568 15.818,12 9.545,8.432" />
      </svg>
    )
  },
  {
    name: 'X',
    href: 'https://x.com/CollingwoodUS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#000000" />
        <path fill="#ffffff" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
      </svg>
    )
  },
  {
    name: 'Mastodon',
    href: 'https://mastodon.social/@Collingwoodpress',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#6364FF" d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.697 1.496 2.512.793 5.313.25 7.48.01 10.05.01 12.392c0 2.222.02 4.542.427 6.643.504 2.61 2.923 4.887 5.645 5.16 2.855.287 5.76.227 8.528-.432 0 0 .195-.045.297-.087v-2.368c-.015.005-.183.045-.297.069-1.99.414-4.086.327-6.04-.153-.787-.193-.974-.757-.998-1.383 0-.022.002-.045.002-.068.756.2 1.528.342 2.308.423 1.096.115 2.193.12 3.284.015 2.456-.237 4.79-1.25 5.922-2.73.917-1.2 1.442-2.925 1.547-5.068.04-1.04.05-2.35.05-3.673 0-1.34-.01-2.484-.047-3.41z" />
        <path fill="#ffffff" d="M18.963 12.956h-2.385V7.482c0-1.895-.806-2.857-2.418-2.857-1.782 0-2.673 1.15-2.673 3.45v3.473H9.49V8.075c0-2.3-.89-3.45-2.673-3.45-1.612 0-2.418.962-2.418 2.857v5.474H2.014V7.482c0-1.895.485-3.398 1.455-4.509.97-1.11 2.24-1.666 3.81-1.666 1.815 0 3.18.697 4.095 2.091.433-.67 1.01-1.218 1.73-1.644.72-.426 1.52-.64 2.4-.64 1.57 0 2.84.555 3.81 1.666.97 1.11 1.455 2.614 1.455 4.509v5.474z" />
      </svg>
    )
  },
];



export default function Footer() {
  return (
    <footer className="bg-[#0A111F] border-t border-[#1E293B] text-white font-sans selection:bg-[#E7665D] selection:text-white">
      <Container className="pt-16 pb-12 lg:pt-20 lg:pb-14">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Left Column: Branding, Description & Badges (4 cols) */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-4 lg:pr-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              {/* <span className="flex h-10 w-10 items-center justify-center rounded-xs border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] font-serif text-xl font-bold transition-all group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/20">
                C
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-[1.3rem] font-bold text-white leading-tight tracking-tight group-hover:text-[#E8C98B] transition-colors">
                  The Collingwood Press
                </span>
                <span className="font-sans text-[8.5px] uppercase tracking-[0.18em] text-[#C5A059]/80 font-medium">
                  Independent Publishing House &bull; Est. 2009
                </span>
              </div> */}
              <Image src={'/footerLogo.png'}
                alt="The Collingwood Press"
                width={260}
                height={50}
                priority
                className="object-contain" />
            </Link>

            <p className="text-[0.78rem] leading-relaxed text-slate-300 max-w-sm font-sans">
              A boutique independent press dedicated to shepherding fine manuscripts into print with
              trade-grade editing, bespoke typography, and international distribution.
            </p>

            {/* Accreditation Badges */}
            <div className="mt-4 w-full">
              <div className="flex items-center justify-center gap-6 sm:gap-8">
                {/* IBPA Logo */}
                <Link
                  href="https://www.ibpa-online.org/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center opacity-90 transition-opacity hover:opacity-100"
                >
                  <Image
                    src="/ibpa-proud-memberFooter.png"
                    alt="The Collingwood Press IBPA Member"
                    width={140}
                    height={48}
                    className="h-10 sm:h-11 w-auto object-contain"
                  />
                </Link>

                {/* Divider */}
                <span className="h-8 w-px bg-white/50" aria-hidden="true" />

                {/* BBB Logo */}
                <Link
                  href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    src="/blue-seal.png"
                    alt="The Collingwood Press IBPA Member"
                    width={140}
                    height={48}
                    className="h-10 sm:h-11 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059] hover:bg-[#C5A059]/15"
                >
                  {social.icon ? (
                    social.icon
                  ) : social.img ? (
                    <Image
                      src={social.img}
                      alt={social.name}
                      width={22}
                      height={22}
                      className="h-5 w-5 object-contain"
                    />
                  ) : null}
                </a>
              ))}
            </div>

          </div>

          {/* Column 1: Services (2 cols) */}
          <div className="flex flex-col gap-3.5 lg:col-span-3">
            <h3 className="font-serif text-[1.05rem] font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E7665D]" />
              Services
            </h3>
            <ul className="flex flex-col gap-2 mt-1">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.86rem] text-slate-300 transition-colors hover:text-[#F08A82] hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company (2 cols) */}
          <div className="flex flex-col gap-3.5 lg:col-span-3">
            <h3 className="font-serif text-[1.05rem] font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E7665D]" />
              Company
            </h3>
            <ul className="flex flex-col gap-2 mt-1">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.86rem] text-slate-300 transition-colors hover:text-[#F08A82] hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Author Resource Library (2 cols) */}
          {/* <div className="flex flex-col gap-3.5 lg:col-span-2">
            <h3 className="font-serif text-[1.05rem] font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E7665D]" />
              Author Library
            </h3>
            <ul className="flex flex-col gap-2 mt-1">
              {authorLibraryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.86rem] text-slate-300 transition-colors hover:text-[#F08A82] hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Column 4: Contact & Social (2 cols) */}
          <div className="flex flex-col gap-3.5 lg:col-span-2">
            <h3 className="font-serif text-[1.05rem] font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E7665D]" />
              Contact
            </h3>
            <div className="flex flex-col gap-2.5 mt-1 text-[0.85rem]">
              <Link
                href="mailto:info@thecollingwoodpress.com"
                className="text-slate-300 hover:text-[#F08A82] transition-colors break-words flex items-center gap-2 group"
              >
                <Mail size={14} className="text-[#E7665D] shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@thecollingwoodpress.com</span>
              </Link>

              <Link
                href="tel:+19362233644"
                className="text-slate-300 hover:text-[#F08A82] transition-colors flex items-center gap-2 group"
              >
                <Phone size={14} className="text-[#E7665D] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium">+1 (936) 223-3644</span>
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href={"https://www.google.com/maps/dir//The+Collingwood+Press,+6777+Camp+Bowie+Blvd,+Fort+Worth,+TX+76116,+United+States/@24.9233408,67.1285248,25585m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x864e7323299d9751:0xcc1f2e674682154f!2m2!1d-97.4339746!2d32.7202269?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D"}
                className=" text-slate-300 hover:text-[#F08A82] transition-colors flex items-center gap-2 group"
              >
                <MapPin size={14} className="text-[#E7665D] shrink-0 group-hover:scale-110 transition-transform" />
                <p>6777 Camp Bowie Blvd, Fort Worth, TX 76116, United States</p>

              </Link>
              <div>
                <span className="font-medium">
                  <iframe
                    title="The Collingwood Press Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.963072729635!2d-97.4339746!3d32.7202269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7323299d9751%3A0xcc1f2e674682154f!2sThe%20Collingwood%20Press!5e1!3m2!1sen!2s!4v1792009463693!5m2!1sen!2s"
                    width="100%"
                    height="50"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-[0.76rem] text-slate-400 italic">
            The Collingwood Press is not affiliated with any other publisher operating under a similar name.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-col items-center justify-between gap-3 sm:flex-row text-xs text-slate-400">
          <p className="text-[0.78rem] text-slate-400 text-center sm:text-left">
            &copy; 2026 | The Collingwood Press (Subsidiary of Hambone Publishers LLC) | All rights reserved
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[0.78rem]">
            <Link href="/privacy-policy" className="hover:text-[#F08A82] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href="/terms-and-conditions" className="hover:text-[#F08A82] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href="/privacy-choices" className="hover:text-[#F08A82] transition-colors">
              Your Privacy Choices
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
