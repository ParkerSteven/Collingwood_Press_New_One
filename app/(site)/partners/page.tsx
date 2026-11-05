import type { Metadata } from 'next';
import PartnersClient from './PartnersClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.thecollingwoodpress.com/partners/' },
  title: 'Collingwood Partners | The Collingwood Press',
  description:
    'Introduce authors to The Collingwood Press and earn a 10% referral commission when a referred writer begins a publishing project.',
  keywords:
    'Collingwood Partners, publishing referral program, book referral commission, The Collingwood Press',
};

export default function PartnersPage() {
  return <PartnersClient />;
}
