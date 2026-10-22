
import AudiobookPage from "@/components/pages/AudioBookClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Audiobook Production & Narration Services | The Collingwood Press",

  description:
    "Expand your author reach with professional audiobook production. Expert voice actors, studio audio mastering, and distribution to Audible, Apple, and Spotify.",

  keywords: [
    // Primary Keywords
    "audiobook services",
    "audiobook production services",
    "professional audiobook production",
    "audiobook production service",
    "audiobook creation services",

    // Secondary Keywords
    "audiobook recording services",
    "audiobook narration services",
    "voice actor narration",
    "author narrated audiobook",
    "audiobook mastering",
    "Audible ready audiobook",
    "audiobook distribution",
    "self-publish audiobook",
    "publish audiobook",

    // Long-Tail Keywords
    "how much does audiobook production cost",
    "how long does audiobook production take",
    "can I choose my narrator",
    "do you distribute to Audible",
    "what's included in audiobook production services",
    "author narrated vs professional narrator",
    "how to self-publish an audiobook",
  ],

  openGraph: {
    title:
      "Audiobook Production & Narration Services | The Collingwood Press",
    description:
      "Expand your author reach with professional audiobook production. Expert voice actors, studio audio mastering, and distribution to Audible, Apple, and Spotify.",
    type: "website",
    siteName: "The Collingwood Press",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <AudiobookPage />;
}