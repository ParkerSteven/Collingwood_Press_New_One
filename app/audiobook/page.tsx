
import AudiobookPage from "@/components/pages/AudioBookClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.thecollingwoodpress.com/audiobook/' },
  title:
    "Audiobook Production Services That Give Stories a Voice",

  description:
    "Expand your reach with audiobook production services, featuring expert audiobook narrators, professional audio mastering, and distribution on Audible, Apple Books, and Spotify.",
};

export default function Page() {
  return <AudiobookPage />;
}