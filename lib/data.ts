export interface StatItem {
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  {
    value: "1,300+",
    label: "Titles Brought to Print",
  },
  {
    value: "94%",
    label: "Production Placement Rate",
  },
  {
    value: "5–7 Days",
    label: "Senior Editor Review",
  },
  {
    value: "4.9 / 5.0",
    label: "Author Satisfaction",
  },
  {
    value: "100%",
    label: "Copyright & Royalties Retained",
  }
];

export const platforms = [
  { name: "Ingram Content Group", note: "Global Distribution" },
  { name: "Barnes & Noble", note: "Retail & Online" },
  { name: "Amazon & Kindle", note: "Print & Digital" },
  { name: "Apple Books", note: "Reflowable ePub" },
  { name: "Kobo Rakuten", note: "International Reach" },
  { name: "Independent Bookstores", note: "Direct Order Channels" },
];

export interface Testimonial {
  name: string;
  role: string;
  book: string;
  genre: string;
  quote: string;
  rating: number;
  avatar: string;
  palette: "navy" | "gold" | "forest" | "burgundy";
  jacketArt: {
    title: string;
    subtitle?: string;
    author: string;
    artTheme: "coast" | "geometric" | "foliage" | "astronomy";
    colorBg: string;
    colorAccent: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    name: "Denise Alvarado",
    role: "Debut Historical Novelist",
    book: "The Quiet Harbor",
    genre: "Historical Fiction",
    quote:
      "I had collected polite rejections from four commercial literary agencies. At Collingwood, my editor read my manuscript with genuine literary sensitivity. The physical hardcover edition feels like an heirloom volume.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80",
    palette: "gold",
    jacketArt: {
      title: "The Quiet Harbor",
      subtitle: "A Novel of the Maine Coastline",
      author: "Denise Alvarado",
      artTheme: "coast",
      colorBg: "#2B3A42",
      colorAccent: "#E5C384",
    },
  },
  {
    name: "Dr. Michael Ostrander",
    role: "Memoirist & Historian",
    book: "Everything We Buried",
    genre: "Literary Memoir",
    quote:
      "No hollow promises, no automated templates, and no bait-and-switch. Michael Turner challenged my prose where it needed discipline and preserved my voice where it counted. Truly an editor's press.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    palette: "navy",
    jacketArt: {
      title: "Everything We Buried",
      subtitle: "Memoirs from the Coal Basin",
      author: "Dr. Michael Ostrander",
      artTheme: "geometric",
      colorBg: "#1C2434",
      colorAccent: "#D4B07B",
    },
  },
  {
    name: "Grace Tanaka-Reyes",
    role: "Mystery Author",
    book: "Halfway to Kestrel Bay",
    genre: "Literary Mystery",
    quote:
      "The dust jacket design alone secured stocking orders from three independent Bay Area bookshops before launch week. Collingwood understands that a book's physical presence is its first dialogue with a reader.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
    palette: "forest",
    jacketArt: {
      title: "Halfway to Kestrel Bay",
      subtitle: "A Pacific Northwest Mystery",
      author: "Grace Tanaka-Reyes",
      artTheme: "foliage",
      colorBg: "#1E332A",
      colorAccent: "#E3C28D",
    },
  },
  {
    name: "Warren Pruitt",
    role: "Speculative Fiction Author",
    book: "Signal Loss",
    genre: "Speculative Fiction",
    quote:
      "Preparing dual interior layouts for archival Smyth-sewn print and responsive typography for digital readers seemed insurmountable. Sarah Edwards delivered flawless InDesign galleys with zero template artifacts.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80",
    palette: "burgundy",
    jacketArt: {
      title: "Signal Loss",
      subtitle: "A Deep Space Logbook",
      author: "Warren Pruitt",
      artTheme: "astronomy",
      colorBg: "#341E2F",
      colorAccent: "#F0B67F",
    },
  },
];

export const formattingServices = [
  {
    step: "01",
    title: "Genre-Specific Typographical Architecture",
    description:
      "Every genre possesses its own typographic rhythm. We calibrate leading, line length, gutter margins, running headers, and drop caps to match the classical expectations of literary readers and bookstore buyers.",
    highlight: "Custom margins & grid balance",
  },
  {
    step: "02",
    title: "Comprehensive Editions & Foil Stamping",
    description:
      "We prepare your title for three distinct formats simultaneously: archival cloth hardcover with foil spine blocking, French-fold trade paperback, and reflowable ePub for Kindle and Apple Books.",
    highlight: "Hardcover, paperback & reflowable ePub",
  },
  {
    step: "03",
    title: "Adobe InDesign Master Craftsmanship",
    description:
      "We reject automated layout converters and cookie-cutter templates. Every interior is manually typeset in InDesign by seasoned book designers who eliminate widows, orphans, and awkward hyphen ladders.",
    highlight: "No automated template artifacts",
  },
  {
    step: "04",
    title: "Physical Galleys & Archival Print Proofing",
    description:
      "Before a single volume enters retail distribution, we provide physical unbound galleys and bindery proofs to evaluate paper opacity, deckle edges, weight, and spine durability.",
    highlight: "Physical proof copy verification",
  },
];

export interface ProjectManager {
  name: string;
  title: string;
  experience: string;
  bio: string;
  philosophy: string;
  avatar: string;
  specialties: string[];
}

export const projectManagers: ProjectManager[] = [
  {
    name: "Michael Turner",
    title: "Senior Editorial Director & Acquisitions",
    experience: "24 Years in Literary & Trade Publishing",
    bio: "Former acquisitions editor for East Coast literary presses. Michael has guided over 400 titles from initial manuscript evaluation through global bookstore distribution.",
    philosophy: "“A true editor doesn't rewrite your story; they polish the glass until your original light shines without distortion.”",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=750&q=85",
    specialties: ["Developmental Editing", "Commercial Narrative Pacing", "Trade Acquisitions"],
  },
  {
    name: "Rachel Miller",
    title: "Senior Author Strategist & Imprint Manager",
    experience: "16 Years in Author Publishing",
    bio: "With an editorial background spanning university presses and independent imprints, Rachel coordinates every author's timeline, production milestones, and marketing launch with calm precision.",
    philosophy: "“Writing is an intensely solitary act. Publishing should never feel that way.”",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&h=750&q=85",
    specialties: ["Author Positioning", "Launch Strategy", "Editorial Project Management"],
  },
  {
    name: "Sarah Edwards",
    title: "Chief Typographer & Production Editor",
    experience: "18 Years in Book Architecture & Design",
    bio: "A master of classical book design and digital typography, Sarah inspects proof pages letter-by-letter to ensure flawless kerning, binding integrity, and print perfection.",
    philosophy: "“The finest typography is silent—it invites the reader deep into the prose without demanding applause for itself.”",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=750&q=85",
    specialties: ["Book Interior Architecture", "Dust Jacket Finishes", "Print Galley Proofing"],
  },
];

export const catalogBooks = [
  {
    title: "Space World",
    subtitle: "A Celestial Odyssey of Cosmic Discovery",
    author: "Josh Emerson",
    genre: "Illustrated Sci-Fi & Speculative Fiction",
    blurb: "“A visual and narrative triumph that pairs breathtaking cosmic illustration with profound speculative philosophy.”",
    citation: "The Speculative Review",
    specs: "Hardcover with Silver Foil • 340 Pages • ISBN 978-1-954",
    bg: "#1C2434",
    accent: "#D4B07B",
    artTheme: "geometric" as const,
    frontSrc: "/assets/images/PublishedAuthors/JoshEmerson/josh COVER DESIGN front.jpg",
  },
  {
    title: "Fate of the Silver Wolf",
    subtitle: "Chronicles of the Northern Marches, Vol. I",
    author: "Sonya E. Maestler",
    genre: "Dark Fantasy & Supernatural Thriller",
    blurb: "“Immaculate worldbuilding complemented by a dark, brooding cover illustration that commands attention on any shelf.”",
    citation: "The Historical Fiction Guild",
    specs: "Foil-Embossed Hardcover • 464 Pages • ISBN 978-1-955",
    bg: "#1E332A",
    accent: "#E2C38F",
    artTheme: "foliage" as const,
    frontSrc: "/assets/images/PublishedAuthors/susan-clark/WOLF FULL BOOK COVER DESIGN front.jpg",
  },
  {
    title: "The Politician's Curse",
    subtitle: "A Satirical Chronicle of Modern Power",
    author: "Michael D. Evans",
    genre: "Satirical Fiction & Illustrated Narrative",
    blurb: "“Biting satire meets vivid editorial illustration—a bold, unforgettable work of contemporary literary wit.”",
    citation: "Independent Book Review",
    specs: "French-Fold Trade Paperback • 312 Pages • ISBN 978-1-956",
    bg: "#872E1E",
    accent: "#F6DFB7",
    artTheme: "coast" as const,
    frontSrc: "/assets/images/PublishedAuthors/Michael D. Evans/front.jpg",
  },
];

export const relatedBooks = [
  {
    title: "A Broken Mind",
    author: "Elena Duvic",
    genre: "Botanical Memoir",
    bg: "#1D3328",
    accent: "#D7B576",
    artTheme: "foliage" as const
  },
  {
    title: "Beneath the Iron Stars",
    author: "Priya Ashworth",
    genre: "Speculative Fiction",
    bg: "#19263A",
    accent: "#E5C888",
    artTheme: "astronomy" as const
  },
  {
    title: "The Whispers of Wind",
    author: "S. R. Okafor",
    genre: "Historical Mystery",
    bg: "#8C3120",
    accent: "#F2D8AB",
    artTheme: "geometric" as const
  },
  {
    title: "Under the Starlight",
    author: "Marion Castellano",
    genre: "Literary Fiction",
    bg: "#392236",
    accent: "#E9B77F",
    artTheme: "astronomy" as const
  },
  {
    title: "The Old Guard's Path",
    author: "Danny Abrams",
    genre: "Nautical Drama",
    bg: "#171D26",
    accent: "#D1B27A",
    artTheme: "coast" as const
  },
  {
    title: "Shadows of the Guildhall",
    author: "Claire Moreau",
    genre: "Renaissance History",
    bg: "#2E241E",
    accent: "#DFC089",
    artTheme: "geometric" as const
  },
  {
    title: "The Quiet Harbor",
    author: "Denise Alvarado",
    genre: "Coastal Mystery",
    bg: "#23323B",
    accent: "#E8C98B",
    artTheme: "coast" as const
  },
  {
    title: "Signal Loss",
    author: "Warren Pruitt",
    genre: "Sci-Fi Thriller",
    bg: "#341E2F",
    accent: "#F0B67F",
    artTheme: "astronomy" as const
  },
];

export const marketingServices = [
  {
    badge: "Metadata & Placement",
    title: "Global Discoverability & Catalog Placement",
    description:
      "We orchestrate meticulous BISAC subject categorization, keyword algorithms, and Amazon A+ rich editorial layouts so your title surfaces organically when discerning readers search.",
    points: [
      "Precision BISAC categorization & keyword optimization",
      "Amazon A+ Content layout and editorial back-cover copy",
      "Global ISBN registration and Bowker Library Catalog indexing",
    ],
  },
  {
    badge: "Critical Acclaim",
    title: "Press, Reviewer & ARC Outreach",
    description:
      "Authentic reader reviews are the foundation of literary credibility. We coordinate physical and digital advance reading copies (ARCs) with reputable book bloggers, literary influencers, and reviewers.",
    points: [
      "Dedicated Advance Reader Copy (ARC) distribution",
      "Curated outreach to independent book reviewers & literary journals",
      "Goodreads launch campaigns and verified editorial blurbs",
    ],
  },
  {
    badge: "Retail Strategy",
    title: "Strategic Launch & Bookstore Placement",
    description:
      "A coordinated launch strategy that transforms publication day into a cultural moment with targeted press releases, author bookstore signing coordination, and digital advertising.",
    points: [
      "Publication week pricing and promotional cadence",
      "Bookstore and library acquisition catalog pitch sheets",
      "Author website and newsletter announcement assets",
    ],
  },
];

export const faqs = [
  {
    question: "How does The Collingwood Press differ from a self-publishing vanity mill or self-serve platform?",
    answer:
      "Unlike automated self-publishing mills that charge exorbitant fees for automated PDF exports, The Collingwood Press operates with the ethos of a traditional literary house. Every author is assigned a dedicated senior trade editor who reads the manuscript line-by-line, discusses structural revisions directly by phone, and coordinates bespoke interior typesetting, custom cover art, and global distribution.",
  },
  {
    question: "Who retains the copyright and royalties to my book?",
    answer:
      "You retain 100% of your copyright, creative ownership, and publishing rights at all times. The Collingwood Press does not claim rights to your intellectual property or take permanent cuts of your author royalties. Our role is that of a trusted publishing partner and production house.",
  },
  {
    question: "What is included in the complimentary manuscript review?",
    answer:
      "When you submit your manuscript, a senior trade editor reads your opening chapters and summary. Within 5–7 business days, you receive an honest, constructive editorial evaluation analyzing narrative pacing, genre marketability, proofing requirements, and a transparent scope of work. There is zero obligation to publish with us.",
  },
  {
    question: "How long does the complete publication journey typically take?",
    answer:
      "A thorough, professional publishing journey typically takes 10 to 16 weeks from manuscript acceptance to physical shelf readiness. This allows adequate time for rigorous developmental and copy editing, interior InDesign typesetting, custom jacket illustration and foil blocking, physical proof copy review, and advance marketing outreach.",
  },
  {
    question: "Will my book be available in physical bookstores and libraries?",
    answer:
      "Yes. We distribute through the Ingram Content Group, the world's largest wholesale distributor for booksellers, allowing any independent bookstore, Barnes & Noble location, or public library worldwide to order your physical hardcover and paperback editions directly into their catalog.",
  },
  {
    question: "Can you accommodate both print and digital formats?",
    answer:
      "Yes. Every title is prepared in three distinct formats: a collector-grade hardcover with optional foil embossing, a French-fold trade paperback for retail shelves, and a reflowable ePub designed specifically for Amazon Kindle, Apple Books, Kobo, and Barnes & Noble Nook.",
  },
  {
    question: "What if my manuscript is still a rough first draft?",
    answer:
      "Many of our authors begin with an unpolished first draft. Our editorial team offers developmental editing and structural story coaching to help shape your raw manuscript into a compelling, market-ready literary work before typesetting begins.",
  },
  {
    question: "What goes into custom book cover design at The Collingwood Press?",
    answer:
      "We treat book jackets as pieces of visual literature. Our design team analyzes your genre's market conventions, creates custom typographic lockups and hand-crafted artwork, and applies sophisticated tactile finishes such as foil stamping, spot gloss, and soft-touch matte lamination.",
  },
];


export type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  slug: string;
};


export const books: Book[] = [
  {
    id: 1,
    title: "Season of Liturgy",
    author: "Kate Moody", // VERIFY: Full author name
    image: "/assets/images/bookmockups/Bk1.jpg",
    slug: "https://www.amazon.com/Seasonal-Liturgy-Meditations-Throughout-Year/dp/B0HLY5655F/ref=sr_1_1?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-1&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 2,
    title: "Cops & Lovers: Unspoken Truths",
    author: "JR Wilrose", // VERIFY: Author spelling
    image: "/assets/images/bookmockups/Bk2.jpg",
    slug: "https://www.amazon.com/Cops-Lovers-Unspoken-Truths-One-ebook/dp/B0HK5Y5S37/ref=sr_1_3?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-3&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 3,
    title: "Grace in the Questions",
    author: "John Davidson", // VERIFY: Author spelling
    image: "/assets/images/bookmockups/Bk3.jpg",
    slug: "https://www.amazon.com/GRACE-QUESTIONS-Walking-Through-Questions-ebook/dp/B0HH7Q6CJN/ref=sr_1_4?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-4&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 4,
    title: "Mudpuddles", // VERIFY: Full title
    author: "Miles R. Stember",
    image: "/assets/images/bookmockups/Bk4.jpg",
    slug: "https://www.amazon.com/Mudpuddles-New-Friend-Miles-Stember-ebook/dp/B0HFQ5DPSQ/ref=sr_1_5?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-5&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 5,
    title: "12 Minutes to Freedom",
    author: "Todd Shevlin",
    image: "/assets/images/bookmockups/Bk5.jpg",
    slug: "https://www.amazon.com/12-Minutes-Freedom-Todd-Shevlin/dp/B0HFBMGG3G/ref=sr_1_7?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-7&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 6,
    title: "We Are All Gods Walking",
    author: "David Jay",
    image: "/assets/images/bookmockups/Bk6.jpg",
    slug: "https://www.amazon.com/We-Are-All-Gods-Walking/dp/B0HD9MXFTC/ref=sr_1_9?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-9&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 7,
    title: "The Kid That Found Courage",
    author: "Jasper Townsend",
    image: "/assets/images/bookmockups/Bk7.jpg",
    slug: "https://www.amazon.com/Kid-That-Found-Courage-ebook/dp/B0HBGYQ4ZR/ref=sr_1_10?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-10&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 8,
    title: "Love & Hate",
    author: "Andrew McClure",
    image: "/assets/images/bookmockups/Bk8.jpg",
    slug: "https://www.amazon.com/Love-Hate-Andrew-McClure-ebook/dp/B0H8ZW3DWF/ref=sr_1_11?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-11&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 9,
    title: "Whispers of the Heart",
    author: "Stacey Michelle",
    image: "/assets/images/bookmockups/Bk9.jpg",
    slug: "https://www.amazon.com/Whispers-Heart-Stacey-Michelle/dp/B0H4C2Z28K/ref=sr_1_13?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-13&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 10,
    title: "Whispers in Bellbrook",
    author: "Helen Stafford",
    image: "/assets/images/bookmockups/Bk10.jpg",
    slug: "https://www.amazon.com/Whispers-Bellebrook-Helen-Stafford-ebook/dp/B072BV8G2R/ref=sr_1_15?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-15&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 11,
    title: "Bellbrook's Secrets",
    author: "Helen Stafford",
    image: "/assets/images/bookmockups/Bk11.jpg",
    slug: "https://www.amazon.com/Bellebrooks-Secrets-Helen-Stafford-ebook/dp/B071F7GLM2/ref=sr_1_16?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-16&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 12,
    title: "Fate of the Silver Wolf",
    author: "Sonya E. Destler",
    image: "/assets/images/bookmockups/Bk12.jpg",
    slug: "#"
  },
  {
    id: 13,
    title: "The Liberation of Sue Moody",
    author: "Gail Gelbard",
    image: "/assets/images/bookmockups/Bk13.jpg",
    slug: "#"
  },
  {
    id: 14,
    title: "Stress Remains Forever", // VERIFY: Cover title
    author: "Don Austin", // VERIFY: Author name
    image: "/assets/images/bookmockups/Bk14.jpg",
    slug: "#"
  },
  {
    id: 15,
    title: "39 Virtues of Integrity",
    author: "Sir Wolfgang ...", // VERIFY: Full author name
    image: "/assets/images/bookmockups/Bk15.jpg",
    slug: "https://www.amazon.com/39-Virtues-Integrity-Sir-Wolfdogg-ebook/dp/B0HLT47MDR/ref=sr_1_2?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-2&unfiltered=1&xpid=C913lH7VLAd-Y"
  },
  {
    id: 16,
    title: "Mechanics for the Body: Common Sense for the Soul",
    author: "Author to verify",
    image: "/assets/images/bookmockups/Bk16.webp",
    slug: "https://www.amazon.com/Mechanic-Body-Common-Sense-Soul/dp/B0HDWC3ZNH/ref=sr_1_8?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-8&unfiltered=1&xpid=C913lH7VLAd-Y"
  }
];



export type Illustration = {
  id: number;
  title: string;
  image: string;
  alt: string;
};

export type IllustrationProject = {
  id: number;
  title: string;
  cover: string;
  images: Illustration[];
};

export const illustrationProjects: IllustrationProject[] =
  Array.from({ length: 9 }, (_, index) => {
    const projectNumber = index + 1;
    const folder = `/assets/Project ${projectNumber}`;

    return {
      id: projectNumber,
      title: `Project ${projectNumber}`,
      cover: `${folder}/1.jpg`,
      images: Array.from({ length: 3 }, (_, imageIndex) => ({
        id: imageIndex + 1,
        title: `Image ${imageIndex + 1}`,
        image: `${folder}/${imageIndex + 1}.jpg`,
        alt: `Project ${projectNumber} - Image ${imageIndex + 1}`,
      })),
    };
  });
