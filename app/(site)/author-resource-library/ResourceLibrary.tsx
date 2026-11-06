"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { submitToGoogleSheet } from "@/lib/submitToGoogleSheet";
import HeroSection from "@/components/sections/HeroSection";

// Keep the same endpoint used in the existing download form.
const WEBHOOK_URL = "https://hook.us1.make.com/lqy6w5qba6mwnnbak7likgzti4edzt4h";

type Template = {
  title: string;
  format: string;
  size: string;
  description: string;
  docsLink: string;
  downloadName: string;
  badge?: string;
  type: "PDF" | "DOCX" | "XLSX";
};

const templates: Template[] = [
  { title: "Fiction Manuscript", format: "Novel", size: '6″ × 9″ Trade', description: "A professional novel manuscript with chapter headings, scene breaks, and double-spaced pages.", docsLink: "/assets/docs/collingwood_fiction_manuscript_template.pdf", downloadName: "Fiction Manuscript.pdf", badge: "POPULAR", type: "PDF" },
  { title: "Non-Fiction Manuscript", format: "Trade", size: '6″ × 9″', description: "Organize your memoir or narrative nonfiction with elegant parts, sections, and epigraphs.", docsLink: "/assets/docs/Memoir Nonfiction Template.docx", downloadName: "Non-Fiction Manuscript.docx", type: "DOCX" },
  { title: "Children’s Picture Book", format: "Landscape", size: '8″ × 7″', description: "Plan your story spread by spread with plenty of space for illustration direction.", docsLink: "/assets/docs/Childrens Picture Book Template.docx", downloadName: "Childrens Picture Book Template.docx", type: "DOCX" },
  { title: "Poetry Collection", format: "Digest", size: '5.5″ × 8.5″', description: "Keep the integrity of every stanza, line break, and intentional whitespace.", docsLink: "/assets/docs/Poetry Collection Manuscript Template.docx", downloadName: "Poetry Collection Manuscript Template.docx", type: "DOCX" },
  { title: "Cookbook", format: "Square", size: '8.5″ × 8.5″', description: "Make recipes easier to follow with dedicated ingredients, instructions, and photo sections.", docsLink: "/assets/docs/Cookbook Template.docx", downloadName: "Cookbook Template.docx", type: "DOCX" },
  { title: "Query Letter", format: "1-page", size: "Letter", description: "Introduce your work to agents and editors with a strong hook, overview, and author bio.", docsLink: "/assets/docs/Query Letter Template.docx", downloadName: "Query Letter Template.docx", badge: "NEW", type: "DOCX" },
  { title: "Author Bio", format: "Short & Long", size: "", description: "Introduce yourself with polished short and long bios for your book and press kit.", docsLink: "/assets/docs/Author Bio Template.docx", downloadName: "Author Bio Template.docx", type: "DOCX" },
  { title: "Book Marketing Timeline", format: "12-Week Planner", size: "", description: "Plan your pre-launch, launch week, and post-launch marketing in one useful spreadsheet.", docsLink: "/assets/docs/Book Marketing Timeline.xlsx", downloadName: "Book Marketing Timeline.xlsx", badge: "PLANNER", type: "XLSX" },
];

const services = [
  { number: "01", title: "Professional Editing", description: "Developmental, line, and copy editing that gives your manuscript the attention it deserves.", href: "/editing/", action: "Explore Editing" },
  { number: "02", title: "Book Publishing", description: "Get your book published with professional support from preparation through distribution and launch.", href: "/publishing/", action: "Explore Publishing" },
  { number: "03", title: "Book Marketing", description: "Promote your book with campaigns that build visibility, attract readers, and drive sales.", href: "/marketing/", action: "Explore Marketing" },
];

function SectionTitle({ eyebrow, children, light = false, description }: { eyebrow: string; children: ReactNode; light?: boolean; description?: string }) {
  return <div className="mx-auto mb-12 max-w-2xl text-center">
    <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.28em] ${light ? "text-[#ff938b]" : "text-[#E7665D]"}`}>{eyebrow}</p>
    <h2 className={`text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${light ? "text-white" : "text-[#10182b]"}`}>{children}</h2>
    {description && <p className={`mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base ${light ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
  </div>;
}

function DocumentIcon({ type }: { type: Template["type"] }) {
  return <div className="relative flex h-16 w-14 items-center justify-center rounded-lg border border-[#e6ddcf] bg-white shadow-sm">
    <svg width="34" height="42" viewBox="0 0 34 42" fill="none" aria-hidden="true">
      <path d="M6 1H22L32 11V37C32 39 30 41 28 41H6C4 41 2 39 2 37V5C2 3 4 1 6 1Z" fill="#FFFAF3" stroke="#E3D6C4" strokeWidth="1.5" />
      <path d="M22 1V11H32" stroke="#E3D6C4" strokeWidth="1.5" />
      <path d="M8 18H26M8 23H26M8 28H22" stroke="#E8B3A5" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <span className="absolute -bottom-2 -right-3 rounded bg-[#18253F] px-1.5 py-0.5 text-[9px] font-bold text-white">{type}</span>
  </div>;
}

function DownloadModal({ template, onClose }: { template: Template; onClose: () => void }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = old; document.removeEventListener("keydown", onKey); };
  }, [onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !fullName.trim() || !email.trim()) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(), email: email.trim(),
          source: `Template Download Popup | ${template.title}`,
          marketingConsent: false,
          timestamp: new Date().toISOString(),
          emailSubject: `Template Download: ${template.title}`,
          emailBody: `New template download request\n\nName: ${fullName.trim()}\nEmail: ${email.trim()}\nTemplate: ${template.title}`,
        }),
      });
      if (!response.ok) throw new Error(`Submission failed: ${response.status}`);
      const link = document.createElement("a");
      link.href = encodeURI(template.docsLink);
      link.download = template.downloadName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      onClose();
    } catch (err) {
      console.error(err);
      setError("We couldn't process your request. Please try again.");
    } finally { setBusy(false); }
  }

  return <div role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }} className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#081126]/75 p-4 backdrop-blur-sm">
    <div role="dialog" aria-modal="true" aria-labelledby="template-modal-title" className="relative w-full max-w-lg rounded-2xl bg-white p-7 shadow-2xl sm:p-10">
      <button type="button" onClick={onClose} aria-label="Close popup" className="absolute right-5 top-4 rounded-lg p-2 text-2xl text-slate-500 hover:bg-slate-100">×</button>
      <span className="mb-4 inline-block rounded-full bg-[#fff1ec] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#d6584f]">Free author resource</span>
      <h2 id="template-modal-title" className="mb-3 text-2xl font-semibold text-[#10182b] sm:text-3xl">Get your {template.title}</h2>
      <p className="mb-7 text-sm leading-7 text-slate-600">Enter your details to unlock your free {template.type} resource and start downloading.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block text-sm font-semibold text-[#1f2a44]">Full name<input value={fullName} onChange={e => setFullName(e.target.value)} required autoComplete="name" placeholder="Your full name" className="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-[#E7665D]" /></label>
        <label className="block text-sm font-semibold text-[#1f2a44]">Email address<input type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" placeholder="you@email.com" className="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-[#E7665D]" /></label>
        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
        <button disabled={busy} type="submit" className="button-primary w-full rounded-lg px-6 py-3.5 text-sm font-semibold shadow-lg disabled:opacity-60">{busy ? "Submitting…" : "Submit & Download Free →"}</button>
      </form>
      <p className="mt-5 text-center text-xs text-slate-500">Free download • No payment required</p>
    </div>
  </div>;
}

export default function ResourceLibrary() {
  const [selected, setSelected] = useState<Template | null>(null);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  async function subscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || busy) return;
    setBusy(true); setNewsletterError("");
    try {
      await submitToGoogleSheet({ email: email.trim(), source: "Template Newsletter", marketingConsent: true });
      setSubscribed(true); setEmail("");
    } catch (err) { console.error(err); setNewsletterError("Subscription failed. Please try again."); }
    finally { setBusy(false); }
  }

  return <main className="overflow-hidden bg-white">
    {/* HERO: relies on the existing global .section-gradient */}

    <HeroSection
      className="about-hero-gradient relative overflow-hidden paper-grain pt-14 pb-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-white/10 text-white"
      eyebrow="The Collingwood Press · Free Author Resources"
      title="Your Story Deserves a"
      highlightText="Strong Start."
      description={
        <p>
          Explore our free manuscript templates, author tools, and
          publishing resources designed to help independent authors
          write, prepare, and publish with confidence.

          From manuscript formatting to book marketing, find
          practical resources to support every stage of your
          publishing journey.
        </p>
      }
      button={false}
      guarantees={[]}
    />

    <section id="browse-templates" className="scroll-mt-20 bg-white py-18 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionTitle eyebrow="The Free Resource Collection" description="From your first draft to your book launch, find professionally structured tools made for real authors.">Find the Right Resource <br /> <span className="text-[#E7665D]">For Your Book</span></SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{templates.map(template => <article key={template.title} className="bg-paper-card group flex flex-col rounded-xl border border-[#eee7df] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#eab3a8] hover:shadow-xl">
        <div className="mb-8 flex items-start justify-between"><DocumentIcon type={template.type} />{template.badge && <span className="rounded-full bg-[#ffe9e4] px-2.5 py-1 text-[9px] font-extrabold tracking-wider text-[#d45b52]">{template.badge}</span>}</div>
        <h3 className="text-lg font-semibold leading-snug text-[#17243c]">{template.title}</h3>
        <p className="mt-2 text-xs font-semibold text-[#cc695f]">{template.format}{template.size ? ` • ${template.size}` : ""}</p>
        <p className="mb-7 mt-4 flex-1 text-sm leading-7 text-slate-600">{template.description}</p>
        <button type="button" onClick={() => setSelected(template)} className="button-primary w-full rounded-lg px-4 py-3 text-sm font-semibold">Download Free <span aria-hidden="true">↗</span></button>
      </article>)}</div>
      <p className="mt-8 text-center text-xs text-slate-500">All templates are available at no cost. File formats include PDF, Word and Excel.</p>
    </div></section>

    <section id="how-it-works" className="bg-[#f9f6f0] py-14 sm:pb-32"><div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionTitle eyebrow="Simple From Start to Finish" description="The next chapter is easier when the essentials are already in place.">Three Steps to <span className="text-[#E7665D]">Get Started</span></SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">{[{ n: "01", title: "Choose Your Resource", copy: "Browse the collection and select the template that matches your writing project." }, { n: "02", title: "Unlock Your Download", copy: "Fill in your name and email to access the resource—no payment required." }, { n: "03", title: "Make It Your Own", copy: "Open the file in the appropriate application and customize it for your book." }].map(step => <div key={step.n} className="bg-paper-card rounded-xl border border-[#eee7df] p-8"><span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe9e4] text-lg font-bold text-[#E7665D]">{step.n}</span><h3 className="mb-3 text-lg text-[#15223b]">{step.title}</h3><p className="text-sm leading-7 text-slate-600">{step.copy}</p></div>)}</div>
    </div></section>

    <section className="hero-gradient py-20 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionTitle eyebrow="Need a Helping Hand?" light description="Templates help you begin. Our team can help turn that work into a beautifully published book.">From Manuscript to <span className="text-[#ff968c]">Published Book</span></SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">{services.map(service => <article key={service.number} className="rounded-xl border border-white/10 bg-white/[0.055] p-7 shadow-lg transition hover:bg-white/[0.09]"><span className="mb-6 block text-3xl font-bold text-[#ff968c]">{service.number}</span><h3 className="mb-3 text-xl text-white">{service.title}</h3><p className="mb-7 min-h-24 text-sm leading-7 text-slate-300">{service.description}</p><Link href={service.href} className="text-sm font-semibold text-[#ff9d91] hover:text-white">{service.action} →</Link></article>)}</div>
    </div></section>

    <section className="bg-white py-20 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><SectionTitle eyebrow="Helpful to Know">Before You <span className="text-[#E7665D]">Download</span></SectionTitle>
      <div className="grid gap-8 lg:grid-cols-2"><div className="bg-paper-card rounded-xl border border-[#eee7df] p-7 sm:p-9"><h3 className="mb-5 text-xl text-[#15223b]">A Few Helpful Notes</h3><div className="space-y-5">{["Resources come in PDF, DOCX, or XLSX formats—check the file type before opening.", "Editable Word templates can be used in Microsoft Word or Google Docs; Excel planners open in Excel or compatible spreadsheet apps.", "Use the instructions in your template and always check the specific requirements of your intended publisher or agent."].map(line => <p key={line} className="flex gap-3 text-sm leading-7 text-slate-600"><span className="font-bold text-[#E7665D]">✓</span>{line}</p>)}</div></div>
        <div className="rounded-xl border border-[#eee7df] bg-white p-7 sm:p-9"><h3 className="mb-5 text-xl text-[#15223b]">Frequently Asked Questions</h3><div className="divide-y divide-[#eee7df]">{[{ q: "Are the templates really free?", a: "Yes. The resources listed on this page are free to download after completing the short form." }, { q: "Do I need special software?", a: "PDFs need a PDF reader, DOCX files can be opened with Word or Google Docs, and XLSX files work with Excel or compatible spreadsheet tools." }, { q: "Will a template replace professional formatting?", a: "Templates help with drafting and organization. Professional interior layout may still be needed for a finished print or eBook edition." }].map(item => <details key={item.q} className="group py-4 first:pt-0"><summary className="cursor-pointer list-none text-sm font-semibold text-[#15223b] marker:hidden">{item.q}<span className="float-right text-[#E7665D] group-open:rotate-45">+</span></summary><p className="pt-3 text-sm leading-7 text-slate-600">{item.a}</p></details>)}</div></div></div>
    </div></section>

    <section className="hero-gradient py-20 text-white sm:py-24"><div className="mx-auto max-w-3xl px-5 text-center sm:px-8"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#D5655D]">Join Our Author Community</p><h2 className="text-3xl font-semibold text-white sm:text-4xl">Get New Templates <br /> <span className="text-[#D5655D]">Before Anyone Else</span></h2><p className="mx-auto mb-8 mt-5 max-w-[500px] text-sm leading-7 text-white/85">Be the first to hear about newly added author resources, practical publishing tips, and helpful guides.</p>
      {subscribed ? <p role="status" className="rounded-lg border border-white/20 bg-white/15 p-4 text-sm font-semibold">You&apos;re on the list! Thanks for subscribing.</p> : <form onSubmit={subscribe} className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="author-newsletter-email">Email address</label><input id="author-newsletter-email" value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-lg border border-white/30 bg-white px-5 py-3.5 text-sm text-[#10182b] outline-none focus:border-[#E7665D]" /><button type="submit" disabled={busy} className="button-primary rounded-lg px-7 py-3.5 text-sm font-semibold disabled:opacity-60">{busy ? "Submitting…" : "Notify Me →"}</button></form>}
      {newsletterError && <p role="alert" className="mt-3 text-sm text-white">{newsletterError}</p>}
      <p className="mt-4 text-xs text-white/70">Only useful writing and publishing updates.</p>
    </div></section>
    {selected && <DownloadModal template={selected} onClose={() => setSelected(null)} />}
  </main>;
}
