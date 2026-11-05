import type { Metadata } from "next";
import ResourceLibrary from "./ResourceLibrary";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.thecollingwoodpress.com/author-resource-library/" },
  title: "Author Resource Library | The Collingwood Press",
  description: "Explore free author resources, manuscript templates, and publishing guidance from The Collingwood Press.",
  keywords: "author resource library, manuscript template, book formatting template, writing resources, The Collingwood Press",
};

export default function AuthorResourceLibraryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Author Resource Library",
    description: "Industry-standard templates and author resources for every stage of publishing.",
    provider: { "@type": "Organization", name: "The Collingwood Press", url: "https://www.thecollingwoodpress.com/" },
    url: "https://www.thecollingwoodpress.com/author-resource-library/",
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <ResourceLibrary />
  </>;
}
