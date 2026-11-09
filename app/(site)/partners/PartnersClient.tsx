'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { submitToGoogleSheet } from '@/lib/submitToGoogleSheet';
import HeroSection from '@/components/sections/HeroSection';


type PartnerForm = {
  fullName: string;
  email: string;
  phone: string;
  channel: string;
};

const initialForm: PartnerForm = { fullName: '', email: '', phone: '', channel: '' };

function formatUSPhone(input: string): string {
  const digits = input.replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '').slice(0, 10);
  if (!digits) return '';
  if (digits.length <= 3) return `+1 (${digits}`;
  if (digits.length <= 6) return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const stats = [
  { value: '10%', label: 'Flat commission' },
  { value: '45 days', label: 'Referral window' },
  { value: 'Monthly', label: 'Commission payouts' },
];

const steps = [
  { number: '01', title: 'Apply to join', text: "Tell us a little about yourself. Once approved, you'll receive your personal referral link and ready-to-share materials." },
  { number: '02', title: 'Share with authors', text: 'Introduce writers through your newsletter, community, website, or social channels — wherever your audience already follows you.' },
  { number: '03', title: 'Earn when they begin', text: 'When a referred author starts a publishing project within the referral window, you earn a 10% commission.' },
];

const benefits = [
  { symbol: '✦', title: 'Ready-to-use materials', text: 'Get banners, email copy and social content so sharing the program feels effortless.' },
  { symbol: '◎', title: 'Dedicated support', text: 'Have a question about referrals or commissions? Our team is here to help during working hours.' },
  { symbol: '♡', title: 'Personal author care', text: 'Every author you introduce receives thoughtful, human support from a publishing team.' },
  { symbol: '↗', title: 'Start sharing quickly', text: 'Once your application is approved, you can begin using your referral link right away.' },
];

const fieldClass = 'mt-2 w-full rounded-lg border border-[#dcdfe6] bg-white px-4 py-3 text-sm text-[#18233b] outline-none transition focus:border-[#E7665D] focus:ring-2 focus:ring-[#E7665D]/15';

export default function PartnersClient() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<PartnerForm>(initialForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!isFormOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isSubmitting) setIsFormOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isFormOpen, isSubmitting]);

  const openForm = () => {
    setError('');
    setSuccess('');
    setIsFormOpen(true);
  };

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const channel = formData.channel.trim();
    if (!fullName || !email || !phone || !channel) {
      setError('Please complete all four fields.');
      return;
    }
    if (!/^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
      setError('Please enter a valid US phone number, such as +1 (415) 555-0172.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    try {
      const result = await submitToGoogleSheet({
        name: fullName,
        email,
        phone,
        source: 'Collingwood Partners Popup',
        promotion_channel: channel,
        marketingConsent: false,
      });
      if (result.success) {
        setFormData(initialForm);
        setIsFormOpen(false);
        setSuccess(result.message || 'Your application was submitted successfully.');
      } else {
        setError(result.message || 'We could not submit your application. Please try again.');
      }
    } catch (err) {
      console.error('Partners application submission error:', err);
      setError('There was a problem submitting the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="overflow-hidden bg-[#fffefa] text-[#18233b]">
      {/* Existing shared HeroSection, rather than a custom one-off hero. */}
      <HeroSection
        className="about-hero-gradient relative overflow-hidden paper-grain border-b border-white/10 pt-14 pb-16 text-white sm:pb-20 lg:pt-20 lg:pb-24"
        eyebrow="The Collingwood Press Partners"
        title="You Know the Authors."
        highlightText="We Reward the Connection."
        description={
          <p>
            Introduce writers to professional publishing support and earn a 10% referral
            commission when a referred author begins a publishing project with us.
            Helping authors move forward can help your business grow, too.
          </p>
        }
        button={false}
        guarantees={[]}
      />

      {/* Referral stats and primary CTA */}
      <section className="border-b border-[#ece7de] bg-[#fffefa] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center px-5 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="grid w-full grid-cols-3 gap-3 divide-x divide-[#e8e1d9] lg:max-w-[660px]">
              {stats.map((stat) => (
                <div key={stat.label} className="px-2 text-center sm:px-6 first:pl-0 last:pr-0">
                  <strong className="block text-xl font-bold text-[#E7665D] sm:text-3xl">{stat.value}</strong>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.1em] text-[#5e6777] sm:text-xs">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <button type="button" onClick={openForm} className="button-primary w-full rounded-lg mt-10 px-7 py-4 text-sm font-semibold shadow-lg shadow-[#E7665D]/15 sm:w-auto">
            Apply to Become a Partner ↗
          </button>
          {success && <p role="status" className="mt-5 text-center text-sm font-medium text-[#17633b]">{success}</p>}
        </div>
      </section>

      {/* Process */}
      <section className="bg-paper py-20 sm:py-24" id="how-it-works">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.27em] text-[#E7665D]">A Simple Partnership</p>
            <h2 className="text-3xl max-w-xl mx-auto font-bold leading-tight text-[#17243c] sm:text-4xl">How <span className="text-[#E7665D]"> The Collingwood Press </span>Partners Works</h2>
            <p className="mt-4 text-sm max-w-xl mx-auto leading-7 text-[#697284] sm:text-base">Three straightforward steps, from joining the program to earning on successful referrals.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="bg-paper-card relative border border-[#eee7dc] p-7 sm:p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#FBE8E3] text-lg font-bold text-[#E7665D]">{step.number}</div>
                <h3 className="mb-3 text-xl font-bold text-[#17243c]">{step.title}</h3>
                <p className="text-sm leading-7 text-[#677080]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Commission promise */}
      <section className="hero-gradient relative overflow-hidden py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[.8fr_1.2fr]">
          <div className="flex items-center gap-4 md:justify-center">
            <div className="text-7xl font-bold tracking-tight text-[#D5635C] sm:text-8xl">10%</div>
            <span className="max-w-[110px] text-sm font-semibold uppercase tracking-[0.15em] text-white/75">One flat rate for every partner</span>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D5635C]">A Clear Commission Structure</p>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">One Rate. <span className="text-[#D5635C]">No Tiers to Climb.</span></h2>
            <p className="max-w-xl text-base leading-8 text-white/80">Earn a 10% referral commission when an eligible referred writer begins a publishing project. The referral window is 45 days, and commission payouts are made monthly.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#fffefa] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.27em] text-[#E7665D]">Why Partner With Us</p>
            <h2 className="text-3xl font-bold leading-tight text-[#17243c] sm:text-4xl">Support for You. <span className="text-[#E7665D]">Care for Your Authors.</span></h2>
            <p className="mt-4 text-sm leading-7 text-[#697284] sm:text-base">Everything you need to share confidently and help writers find the right publishing support.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-xl border border-[#ede7df] bg-white p-6 shadow-[0_12px_30px_-20px_rgba(19,29,49,.25)] transition-transform duration-300 hover:-translate-y-1">
                {/* <div aria-hidden="true" className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FCECE7] text-2xl text-[#E7665D]">{benefit.symbol}</div> */}
                <h3 className="mb-3 text-lg font-bold text-[#17243c]">{benefit.title}</h3>
                <p className="text-sm leading-7 text-[#687183]">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="hero-gradient relative py-20 text-center text-white sm:py-24" id="partner-application">
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D56259]">Let&apos;s Work Together</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Know a Writer? <span className="text-[#D56259]">Let&apos;s Talk.</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/85 sm:text-base">Every application gets a real review, not an automated rejection. We aim to respond within two business days.</p>
          <button type="button" onClick={openForm} className="button-primary mt-8 rounded-lg px-8 py-4 text-sm font-semibold shadow-xl">Apply to Become a Partner ↗</button>
        </div>
      </section>

      {/* Application modal — retains existing sheet integration. */}
      {isFormOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-[#080f20]/75 px-4 py-8 backdrop-blur-sm"
          onMouseDown={(event) => { if (event.target === event.currentTarget && !isSubmitting) setIsFormOpen(false); }}
        >
          <div role="dialog" aria-modal="true" aria-labelledby="partners-modal-title" className="relative my-auto w-full max-w-lg rounded-2xl bg-[#fffefa] p-6 shadow-2xl sm:p-9">
            <button type="button" aria-label="Close form" disabled={isSubmitting} onClick={() => setIsFormOpen(false)} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f3eee8] text-xl text-[#28364d] hover:bg-[#fae1db] disabled:opacity-50">×</button>
            <p className="mb-3 pr-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E7665D]">Collingwood Partners Application</p>
            <h2 id="partners-modal-title" className="text-2xl font-bold text-[#17243c] sm:text-3xl">Let&apos;s Get You Set Up</h2>
            <p className="mt-2 text-sm text-[#6a7382]">Four quick details to start your application.</p>
            <form className="mt-7 space-y-4" onSubmit={submitApplication}>
              <div><label htmlFor="partner-name" className="text-sm font-semibold text-[#27324a]">Full name</label><input className={fieldClass} id="partner-name" autoComplete="name" required placeholder="Jordan Blake" value={formData.fullName} onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))} /></div>
              <div><label htmlFor="partner-email" className="text-sm font-semibold text-[#27324a]">Email</label><input className={fieldClass} id="partner-email" type="email" autoComplete="email" required placeholder="jordan@example.com" value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} /></div>
              <div><label htmlFor="partner-phone" className="text-sm font-semibold text-[#27324a]">US phone number</label><input className={fieldClass} id="partner-phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="+1 (415) 555-0172" value={formData.phone} onChange={(event) => setFormData((prev) => ({ ...prev, phone: formatUSPhone(event.target.value) }))} /></div>
              <div><label htmlFor="partner-channel" className="text-sm font-semibold text-[#27324a]">Where will you promote us?</label><input className={fieldClass} id="partner-channel" required placeholder="Website, newsletter, or social handle" value={formData.channel} onChange={(event) => setFormData((prev) => ({ ...prev, channel: event.target.value }))} /></div>
              {error && <p role="alert" className="rounded-lg bg-[#fff0ed] p-3 text-sm text-[#a5322c]">{error}</p>}
              <button className="button-primary w-full rounded-lg px-5 py-3.5 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Application ↗'}</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
