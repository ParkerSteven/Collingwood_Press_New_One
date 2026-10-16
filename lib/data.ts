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
  },
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
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80",
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
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
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
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
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
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80",
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
    philosophy:
      "“A true editor doesn't rewrite your story; they polish the glass until your original light shines without distortion.”",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=750&q=85",
    specialties: [
      "Developmental Editing",
      "Commercial Narrative Pacing",
      "Trade Acquisitions",
    ],
  },
  {
    name: "Rachel Miller",
    title: "Senior Author Strategist & Imprint Manager",
    experience: "16 Years in Author Publishing",
    bio: "With an editorial background spanning university presses and independent imprints, Rachel coordinates every author's timeline, production milestones, and marketing launch with calm precision.",
    philosophy:
      "“Writing is an intensely solitary act. Publishing should never feel that way.”",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&h=750&q=85",
    specialties: [
      "Author Positioning",
      "Launch Strategy",
      "Editorial Project Management",
    ],
  },
  {
    name: "Sarah Edwards",
    title: "Chief Typographer & Production Editor",
    experience: "18 Years in Book Architecture & Design",
    bio: "A master of classical book design and digital typography, Sarah inspects proof pages letter-by-letter to ensure flawless kerning, binding integrity, and print perfection.",
    philosophy:
      "“The finest typography is silent—it invites the reader deep into the prose without demanding applause for itself.”",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=750&q=85",
    specialties: [
      "Book Interior Architecture",
      "Dust Jacket Finishes",
      "Print Galley Proofing",
    ],
  },
];

export const catalogBooks = [
  {
    title: "Space World",
    subtitle: "A Celestial Odyssey of Cosmic Discovery",
    author: "Josh Emerson",
    genre: "Illustrated Sci-Fi & Speculative Fiction",
    blurb:
      "“A visual and narrative triumph that pairs breathtaking cosmic illustration with profound speculative philosophy.”",
    citation: "The Speculative Review",
    specs: "Hardcover with Silver Foil • 340 Pages • ISBN 978-1-954",
    bg: "#1C2434",
    accent: "#D4B07B",
    artTheme: "geometric" as const,
    frontSrc:
      "/assets/images/PublishedAuthors/JoshEmerson/josh COVER DESIGN front.jpg",
  },
  {
    title: "Fate of the Silver Wolf",
    subtitle: "Chronicles of the Northern Marches, Vol. I",
    author: "Sonya E. Maestler",
    genre: "Dark Fantasy & Supernatural Thriller",
    blurb:
      "“Immaculate worldbuilding complemented by a dark, brooding cover illustration that commands attention on any shelf.”",
    citation: "The Historical Fiction Guild",
    specs: "Foil-Embossed Hardcover • 464 Pages • ISBN 978-1-955",
    bg: "#1E332A",
    accent: "#E2C38F",
    artTheme: "foliage" as const,
    frontSrc:
      "/assets/images/PublishedAuthors/susan-clark/WOLF FULL BOOK COVER DESIGN front.jpg",
  },
  {
    title: "The Politician's Curse",
    subtitle: "A Satirical Chronicle of Modern Power",
    author: "Michael D. Evans",
    genre: "Satirical Fiction & Illustrated Narrative",
    blurb:
      "“Biting satire meets vivid editorial illustration—a bold, unforgettable work of contemporary literary wit.”",
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
    artTheme: "foliage" as const,
  },
  {
    title: "Beneath the Iron Stars",
    author: "Priya Ashworth",
    genre: "Speculative Fiction",
    bg: "#19263A",
    accent: "#E5C888",
    artTheme: "astronomy" as const,
  },
  {
    title: "The Whispers of Wind",
    author: "S. R. Okafor",
    genre: "Historical Mystery",
    bg: "#8C3120",
    accent: "#F2D8AB",
    artTheme: "geometric" as const,
  },
  {
    title: "Under the Starlight",
    author: "Marion Castellano",
    genre: "Literary Fiction",
    bg: "#392236",
    accent: "#E9B77F",
    artTheme: "astronomy" as const,
  },
  {
    title: "The Old Guard's Path",
    author: "Danny Abrams",
    genre: "Nautical Drama",
    bg: "#171D26",
    accent: "#D1B27A",
    artTheme: "coast" as const,
  },
  {
    title: "Shadows of the Guildhall",
    author: "Claire Moreau",
    genre: "Renaissance History",
    bg: "#2E241E",
    accent: "#DFC089",
    artTheme: "geometric" as const,
  },
  {
    title: "The Quiet Harbor",
    author: "Denise Alvarado",
    genre: "Coastal Mystery",
    bg: "#23323B",
    accent: "#E8C98B",
    artTheme: "coast" as const,
  },
  {
    title: "Signal Loss",
    author: "Warren Pruitt",
    genre: "Sci-Fi Thriller",
    bg: "#341E2F",
    accent: "#F0B67F",
    artTheme: "astronomy" as const,
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
    question:
      "How does The Collingwood Press differ from a self-publishing vanity mill or self-serve platform?",
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
    question:
      "What goes into custom book cover design at The Collingwood Press?",
    answer:
      "We treat book jackets as pieces of visual literature. Our design team analyzes your genre's market conventions, creates custom typographic lockups and hand-crafted artwork, and applies sophisticated tactile finishes such as foil stamping, spot gloss, and soft-touch matte lamination.",
  },
  {
    question: "How long does the publishing process take?",
    answer:
      "Most projects move from manuscript to published book in 3 to 6 months, depending on the scope of editorial, design and production work.",
  },
  {
    question:
      "What is the difference between hybrid, traditional and self-publishing?",
    answer:
      "Traditional publishing is publisher-funded, but the house keeps most of the royalties and most of the creative control. Hybrid publishing is also author-funded, and the publisher usually stays on the contract and often keeps a share of the royalties. Self-publishing leaves you as the publisher. You keep the copyright and the royalties, and you hire the team. The Collingwood Press is an assisted self-publishing company. You stay the publisher. We handle the editing, design, and distribution.",
  },
  {
    question: "How much does it cost to publish a book?",
    answer:
      "n 2026, a typical professional self-published book runs about $2,940 to $5,660, based on a review of more than 230,000 freelancer quotes. Editing is the highest cost. A custom cover most often falls between $625 and $1,250. Illustration, ghostwriting, and ads sit outside that range. With The Collingwood Press, the price depends on the services you choose. You fund the work, and you keep the copyright and 100% royalties. Request a free consultation for an itemized quote.",
  },
];

export const publishingFAQs = [
  {
    question: "Can a first-time author publish with you?",
    answer:
      "Yes. A first book follows the same professional production path as any other title. You remain the publisher of record. We handle the editorial development, the cover design, the interior typesetting, and the retail setup. You do not need a literary agent, and you do not surrender your book to a traditional house. Our self-publishing services are built for authors at every stage.",
  },
  {
    question: "Do I need an ISBN to self-publish?",
    answer:
      "Print distribution requires an ISBN, and so does placement in any store beyond Amazon. We register the ISBN directly to you, so you are the publisher of record. A free KDP ISBN lists Amazon as the publisher instead. We do not use one.",
  },
  {
    question: "How do I get my book on Amazon KDP and IngramSpark?",
    answer:
      "We prepare the production files and the metadata, then open both accounts in your name. KDP carries the Kindle edition, paperback, and hardcover. IngramSpark is the path to bookstores and libraries worldwide. You keep the login credentials. Our Amazon KDP publishing services handle every technical requirement.",
  },
  {
    question: "What formats can you publish?",
    answer:
      "Paperback, hardcover, and eBook. Print editions use print-on-demand production, which eliminates the need for large upfront print runs. Audiobook production is available as a separate service, recorded by a professional narrator.",
  },
  {
    question: "Who is the publisher of record?",
    answer:
      "You are. The ISBN is registered in your name, and the retail accounts are opened in your name. Some self-publishing company services assign an ISBN from their own prefix, making them the publisher on the record. We never do that.",
  },
  {
    question: "What is a galley proof, and do I see it?",
    answer:
      "It is the finished proof of the pages, bound and printed before the book goes to retail. You read every page, mark what needs changing, and we do not upload the final files until you have signed off. No book goes live without your explicit approval.",
  },
  {
    question: "Can I publish a book without handing it to a publisher?",
    answer:
      "Yes. This is a self-publishing services model, not a rights deal. You hire the production. You keep the copyright and the royalties. The Collingwood Press provides professional-grade execution without requiring you to surrender any ownership.",
  },
  {
    question: "What happens after the book is live?",
    answer:
      "Your book sits in your accounts, and the royalties flow directly to you. A launch campaign, advertising, and reviewer outreach are planned separately through our marketing services if you want them. They are not bundled into the production invoice.",
  },
  {
    question: "How do I publish a children's book?",
    answer:
      "Publishing a children's book follows the same path as any other title. You stay the publisher, and we handle the editing, cover, interior, and distribution. A picture book or early reader also needs an age range, a reading level, and, when the story calls for it, an illustrator from our artist network. You approve the galley proof before it goes to retail, and you keep the copyright and royalties. Send the manuscript or opening pages for a senior editor review, usually within 5 to 7 days.",
  },
  {
    question: "Can I self-publish a children's book with you?",
    answer:
      "Yes. Children's book publishing here is a self-publishing service, not a rights deal. You can come to us with a finished manuscript, or with a story you want help writing. We match the editorial work, illustration, and production to the book, then set up distribution.",
  },
];

export const marketingFAQs = [
  {
    question: "What's included in book marketing services?",
    answer:
      "Our book marketing services typically include Amazon listing optimization, paid advertising across Amazon and Meta, social media content and management, email marketing setup, media outreach, and performance reporting. The exact scope depends on your book, your genre, and your goals. Every engagement starts with a review and a custom plan.",
  },
  {
    question: "How do book marketing services work?",
    answer:
      "We start by reviewing your book and its current market position. From there, we build a plan with specific channels, tactics, and timelines. Once approved, we execute the campaign and report on results monthly. The book marketing process for authors follows four stages: review, plan, execute, and report.",
  },
  {
    question: "How much do book marketing services cost?",
    answer:
      "Costs vary based on the scope of the campaign, the number of channels involved, and the duration. We build custom proposals rather than publishing a fixed rate card. Affordable book marketing packages are available for authors who need focused work on two or three channels. Every proposal includes a clear budget breakdown before work begins.",
  },
  {
    question:
      "What do book marketing services for self-published authors include?",
    answer:
      "Book marketing services for indie authors cover the same channels and tactics as any campaign, with additional focus on areas where self-published authors typically need the most help: Amazon optimization, building an email audience, and establishing credibility through reviews and media coverage. We work with self-published authors at every stage, from first launch to backlist revival.",
  },
  {
    question: "Can you market a book that has already been published?",
    answer:
      "Yes. Marketing services for already published books follow the same process. We review the book's current positioning, identify what has and has not worked, and build a campaign around the opportunities that remain. A book that has been live for months or years can still gain traction with the right advertising, listing improvements, and audience-building work.",
  },
  {
    question:
      "What is the difference between a book marketing package and individual services?",
    answer:
      "A package combines multiple services into a coordinated campaign with a shared strategy and timeline. Individual services are standalone projects focused on one area, such as Amazon optimization or email marketing setup. Packages cost less per service and produce better results because the channels reinforce each other. Individual services make sense when you only need one specific thing done.",
  },
  {
    question: "Do you offer affordable book marketing services?",
    answer:
      "Yes. Not every author needs a full multi-channel campaign. We scope affordable book marketing services around the channels most likely to produce results for your genre and budget. A focused plan built around Amazon Ads and one additional channel can produce meaningful sales movement without a large upfront investment.",
  },
  {
    question: "How is performance measured?",
    answer:
      "Every campaign includes monthly reporting that ties spend to results. We track Amazon sales attribution, ad click-through and conversion rates, email subscriber growth, and social engagement. Reports show what each channel is producing so you can make informed decisions about scaling or shifting your investment.",
  },
];

export const editingFAQs = [
  {
    question: "What's included in book editing services?",
    answer:
      "Every engagement includes a marked-up manuscript with tracked changes, margin comments, a custom style sheet, and direct communication with your editor. Developmental editing also includes a standalone editorial letter. The specific scope depends on which service level your manuscript needs.",
  },
  {
    question: "How much do book editing services cost?",
    answer:
      "Pricing depends on your manuscript's word count and the level of editing required. Proofreading services start at $0.01 per word. Copyediting starts at $0.02. Line editing starts at $0.03. Developmental editing starts at $0.05. Exact pricing is provided after we review your manuscript.",
  },
  {
    question: "How do book editing services work?",
    answer:
      "You submit your manuscript, we review the opening pages and send a quote, your assigned editor completes the work using tracked changes, and you receive the marked-up file with a style sheet and any supplementary documents. The book editing services process follows four steps: submit, review, edit, deliver.",
  },
  {
    question: "Do you offer book editing services for self-published authors?",
    answer:
      "Yes. The majority of our clients are self-published authors and indie authors who need professional editing without signing with a traditional publisher. We follow the same standards used by trade houses.",
  },
  {
    question: "Which type of editing do I need?",
    answer:
      "If your manuscript has structural problems with pacing, plot, or organization, you need developmental editing. If the structure works but the prose needs tightening, you need line editing. If the writing is polished but needs grammatical precision, you need copy editing. If the book is production-ready and just needs a final error check, you need proofreading. We will recommend the right combination after reviewing your opening pages.",
  },
  {
    question: "Can I get a sample edit?",
    answer:
      "Yes. Send us your first 1,000 words and a senior editor will return them within 48 hours with tracked changes, margin notes, and a brief assessment. No payment required, no obligation.",
  },
  {
    question:
      "What is the difference between line editing and developmental editing?",
    answer:
      "Developmental editing addresses the book's structure: chapter order, pacing, character arcs, and thematic coherence. Line editing addresses the prose: sentence rhythm, word choice, clarity, and voice. Developmental works on the blueprint. Line editing works on the finish. If both need attention, developmental comes first.",
  },
  {
    question: "What file format do you accept?",
    answer:
      "We accept Word (.doc and .docx), Google Docs, and RTF. Edits are returned in Word with tracked changes enabled. If you need a different format, let us know when you submit.",
  },
  {
    question: "Can I communicate with the editor?",
    answer:
      "Yes. You speak directly with the editor assigned to your project by phone and email. You are not routed through a customer service team or a project manager. Your editor is your single point of contact from start to delivery.",
  },
  {
    question: "Do you edit children's books?",
    answer:
      "Yes. We offer children's book editing for picture books, early readers, chapter books, and middle grade. Our editors understand the specific conventions these formats require, including age-appropriate vocabulary, pacing for younger readers, and illustration-text coordination for picture books.",
  },
];


export const audiobookFAQs = [
  {
    question: "What's included in audiobook production services?",
    answer:
      "Our audiobook production services include manuscript preparation, narrator casting with custom audition samples, studio recording, editing, mastering to platform specifications, quality control, one round of revisions, and upload support for Audible and other platforms. You receive mastered chapter files, metadata, and a pronunciation guide.",
  },
  {
    question: "How much does audiobook production cost?",
    answer:
      "Cost depends on the length of the manuscript, the narrator selected, and whether you choose professional narration or author-narrated recording. We provide a custom quote after reviewing your manuscript. Pricing is per finished hour of audio, and a typical 60,000-word book produces approximately 7 to 8 hours of finished audio.",
  },
  {
    question: "How long does audiobook production take?",
    answer:
      "Most projects are completed in 6 to 12 weeks from manuscript submission to finished files. The timeline depends on book length, narrator availability, and the revision process. We provide specific delivery dates when we send your quote.",
  },
  {
    question: "Can I choose my narrator?",
    answer:
      "Yes. We present you with custom audition samples recorded from your manuscript by multiple narrators. You listen, compare, and select the voice you want. You are never assigned a narrator without your approval.",
  },
  {
    question: "Do you distribute to Audible and other platforms?",
    answer:
      "Yes. We prepare distribution-ready files for Audible, Apple Books, Spotify, Google Play, Kobo, Scribd, Barnes & Noble, OverDrive, and other platforms. We can handle the upload process for you or deliver the files for you to distribute independently.",
  },
  {
    question:
      "What's the difference between author-narrated and professional narrator?",
    answer:
      "A professional narrator is a trained voice performer who records in a studio environment under a producer's direction. An author narrated audiobook uses your own voice, with guided recording support and the same post-production and mastering. Professional narration is the standard choice for most genres. Author narration works well for memoirs and personal nonfiction where your voice is part of the book's identity.",
  },
  {
    question: "Can I produce an audiobook for an already published book?",
    answer:
      "Yes. Audiobook production is a standalone project. Your book does not need to be republished. If you have a finalized manuscript in print or ebook, we can begin production immediately.",
  },
  {
    question: "What file formats and standards do you deliver?",
    answer:
      "Mastered chapter files in MP3 (192kbps or higher, 44.1 kHz, mono) and WAV. All files meet Audible/ACX specifications for RMS levels, peak headroom, and noise floor. Chapter markers and metadata are included for platform ingestion.",
  },
  {
    question: "Do you offer a sample or audition?",
    answer:
      "Yes. Before production begins, we record custom audition samples from your manuscript using narrators matched to your genre. You review the samples and select your narrator before any full recording starts.",
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
    slug: "https://www.amazon.com/Seasonal-Liturgy-Meditations-Throughout-Year/dp/B0HLY5655F/ref=sr_1_1?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-1&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 2,
    title: "Cops & Lovers: Unspoken Truths",
    author: "JR Wilrose", // VERIFY: Author spelling
    image: "/assets/images/bookmockups/Bk2.jpg",
    slug: "https://www.amazon.com/Cops-Lovers-Unspoken-Truths-One-ebook/dp/B0HK5Y5S37/ref=sr_1_3?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-3&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 3,
    title: "Grace in the Questions",
    author: "John Davidson", // VERIFY: Author spelling
    image: "/assets/images/bookmockups/Bk3.jpg",
    slug: "https://www.amazon.com/GRACE-QUESTIONS-Walking-Through-Questions-ebook/dp/B0HH7Q6CJN/ref=sr_1_4?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-4&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 4,
    title: "Mudpuddles", // VERIFY: Full title
    author: "Miles R. Stember",
    image: "/assets/images/bookmockups/Bk4.jpg",
    slug: "https://www.amazon.com/Mudpuddles-New-Friend-Miles-Stember-ebook/dp/B0HFQ5DPSQ/ref=sr_1_5?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-5&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 5,
    title: "12 Minutes to Freedom",
    author: "Todd Shevlin",
    image: "/assets/images/bookmockups/Bk5.jpg",
    slug: "https://www.amazon.com/12-Minutes-Freedom-Todd-Shevlin/dp/B0HFBMGG3G/ref=sr_1_7?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-7&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 6,
    title: "We Are All Gods Walking",
    author: "David Jay",
    image: "/assets/images/bookmockups/Bk6.jpg",
    slug: "https://www.amazon.com/We-Are-All-Gods-Walking/dp/B0HD9MXFTC/ref=sr_1_9?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-9&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 7,
    title: "The Kid That Found Courage",
    author: "Jasper Townsend",
    image: "/assets/images/bookmockups/Bk7.jpg",
    slug: "https://www.amazon.com/Kid-That-Found-Courage-ebook/dp/B0HBGYQ4ZR/ref=sr_1_10?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-10&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 8,
    title: "Love & Hate",
    author: "Andrew McClure",
    image: "/assets/images/bookmockups/Bk8.jpg",
    slug: "https://www.amazon.com/Love-Hate-Andrew-McClure-ebook/dp/B0H8ZW3DWF/ref=sr_1_11?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-11&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 9,
    title: "Whispers of the Heart",
    author: "Stacey Michelle",
    image: "/assets/images/bookmockups/Bk9.jpg",
    slug: "https://www.amazon.com/Whispers-Heart-Stacey-Michelle/dp/B0H4C2Z28K/ref=sr_1_13?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-13&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 10,
    title: "Whispers in Bellbrook",
    author: "Helen Stafford",
    image: "/assets/images/bookmockups/Bk10.jpg",
    slug: "https://www.amazon.com/Whispers-Bellebrook-Helen-Stafford-ebook/dp/B072BV8G2R/ref=sr_1_15?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-15&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 11,
    title: "Bellbrook's Secrets",
    author: "Helen Stafford",
    image: "/assets/images/bookmockups/Bk11.jpg",
    slug: "https://www.amazon.com/Bellebrooks-Secrets-Helen-Stafford-ebook/dp/B071F7GLM2/ref=sr_1_16?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.pr1_3mXHGis1a3E84VFbtzTdcbE3uCBzgSfMmCtI4KhyG9kHWdhFkp-8pzreFVZWOddKzE7t5m3WhVKr8wH7ksonjU-2sanZDNA3NrJehozB4BhgF6kvRpaY7XxH2WZrk516JfIKvcFd5BZA5aqOXiknFPW7PllpAdB3xvhWjQ9X1aD8P1fkhC2VrS2wMeKUxqG9HV4XJIbdYtoY75TYEy5dg-IYzHcICOB6nHrMFUs.dX0fQ7NVJK4_N-8vKl2Stu97omcqydaM1MFGxo7TpCw&dib_tag=se&qid=1791486159&refinements=p_30%3ACollingwood+Press&s=books&sr=1-16&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 12,
    title: "Fate of the Silver Wolf",
    author: "Sonya E. Destler",
    image: "/assets/images/bookmockups/BK12.jpg",
    slug: "https://www.amazon.com/Fate-Silver-Wolf-Sonya-Destler/dp/1967864071/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.gy813hgTcqEOsxV4mouBEnd7nTddT-Mcog8CeQHddEwFUONzw5phf3yToS4lodKBS-4484aJnWl7AgUQ_npBhidlOJDSUgj_iZN9f1k6rKeCoLEx8B66slCRYL8nJAqi7rF0IfARL-wZJfq_-I8Y_3HCX-l7Pn-f_zlAYfzqFi9It5BmhoBu4rhkk0hsqUPsuzgvSY-Fpzyzv9T7B7M-vCuAz-1p-glI44_sUTKtOmA.sWb8oRN21AAzjvi7snWnybLfxt46X0Cr1nCZEfZuBdc&qid=1774022665&sr=8-1",
  },
  {
    id: 13,
    title: "The Liberation of Sue Moody",
    author: "Gail Gelburd",
    image: "/assets/images/bookmockups/Bk13.jpg",
    slug: "https://www.amazon.com/Liberation-Sue-Moody-Slaying-Dragons/dp/1967864101/ref=sr_1_1?crid=1K892WE9Q8FA0&dib=eyJ2IjoiMSJ9.5Ij0ZSupFXLlIIO1Qfp-xw.6N5UTiCR-LwuRXKmsrETxJIxO5mG7NapCskqNmt_Lfo&dib_tag=se&keywords=The+Liberation+of+Sue+Moody%3A+Slaying+the+Dragons&nsdOptOutParam=true&qid=1774022756&sprefix=the+liberation+of+sue+moody+slaying+the+dragons%2Caps%2C264&sr=8-1",
  },
  {
    id: 14,
    title: "Serious Roommate Problems",
    author: "Paul Arata",
    image: "/assets/images/bookmockups/Bk14.jpg",
    slug: "https://www.amazon.com/Serious-Roommate-Problems-Paul-Arata/dp/1967864403",
  },
  {
    id: 15,
    title: "Llama Louise: The Shy Llama That Wasn't",
    author: "Reneé Marie Borowy",
    image: "/assets/images/bookmockups/Bk15.jpg",
    slug: "https://www.amazon.com/Llama-Louise-Shy-That-Wasnt/dp/B0FF66WYQB/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.R6EgJdl-hnKGwcjiAGIiZcqqYDtQVQKFIqxFRgQvccFTimGtukvzARWFdDQTdVbnp9VLglET7r17cBRjttl8-mH6FWbCqcZltALG3DB9-W4D3q_u4rK-LNucfRInAXRr-75q0ZIZgj1_iPOWOoBwgQ.m0BdwEqYQdM6krDk96JOUQlJwy8UrX42k15a-PvFcPw&qid=1774022526&sr=8-1",
  },
  {
    id: 16,
    title: "Mechanics for the Body: Common Sense for the Soul",
    author: "Jill Suzanne Coleman",
    image: "/assets/images/bookmockups/Bk16.webp",
    slug: "https://www.amazon.com/Mechanic-Body-Common-Sense-Soul/dp/B0HDWC3ZNH/ref=sr_1_9?Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=13&dib=eyJ2IjoiMSJ9.ikqubuNU3cTqoCxBVK_NL14U_PHxAoE-4g29LCHNGSWilrCCGrqxQSlKbul5-0PZgCAZmfDQHo3xgzcmgnXfE2ve-P7_NrtMxVMC1QYb5Heq3_RvIHzumFQi8hdvGrx130SJI5BwNmF4zsGlbvdfUCsufihW9wtkjuItjud_oV6UQyK2mXLUCxAucPsdO3RVbWHyxTuzHW4p6jvzN3Ok_b23Hy3tNNeOu6UHQrMFpeo.R3TVkVOGpwI4tZJluMv8-IIt3BHnnLlO6Vbq6SG035M&dib_tag=se&qid=1791575078&refinements=p_30%3ACollingwood+Press&s=books&sr=1-9&unfiltered=1&xpid=C913lH7VLAd-Y",
  },
  {
    id: 17,
    title: "Llama Louise Says: Color With Me!!",
    author: "Renee' Marie Borowy",
    image: "/assets/images/bookmockups/Bk17.jpg",
    slug: "https://www.amazon.com/Llama-Louise-Says-Color-Me/dp/1967864209/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.dexR7N2NuMqIpawwn2NUOzyW3CqMJP_ly9FKQxjf85rqWoICZQa99gzdTIRMZhkY.078iq5uLW5RP9hqk-rDYcsAQg-dTxOlSK0c3JU0aQhY&qid=1774023304&sr=8-1",
  },
  {
    id: 18,
    title: "Voices of Nature: The Postures of Light",
    author: "Juniper Uriah Pearson Good",
    image: "/assets/images/bookmockups/BK18.jpg",
    slug: "https://www.amazon.com/Voices-Nature-Juniper-Urieh-Pearson/dp/1967864330/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.dyCPtRnMrAXtoGLa1vtIeupsKLNCKPm6sNxzOnCc8zFzghy8JsCY9_aVbzx7JGG_.EO03_xf4z3Ubkc06551dnxehvb0HEV-ADZm7t8jlo28&qid=1774023558&sr=8-1",
  },
  {
    id: 19,
    title: "Emotions",
    author: "Al Bayyat",
    image: "/assets/images/bookmockups/Bk19.jpg",
    slug: "https://www.amazon.com/Emotions-Al-Bayyat/dp/1967864233/ref=sr_1_1?crid=16EHSKQDH9QW9&dib=eyJ2IjoiMSJ9.IpgCHnfuHc8LwfHFWu4D-g.8yDiIKF0Z-9r-tXyQqfOuLaFxBmlSv4ZHx0UlUROvdY&dib_tag=se&keywords=Emotions+Al+Bayyat&qid=1774023419&sprefix=emotions+al+bayyat%2Caps%2C299&sr=8-1",
  },
  {
    id: 20,
    title: "Shattered: Everything Falls to Pieces",
    author: "Caleb Ekeh",
    image: "/assets/images/bookmockups/Bk20.jpg",
    slug: "https://www.amazon.com/SHATTERED-Caleb-Ekeh/dp/1967864160/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.X_KOAWBGPUpeFb_r_JLa0d4OJnD-sGR-0O-LsfRZDQSEnehga5aMmrSWhmK0Zx6Axw34qpxfRGcxYRwKEqLAN-asNRGLtes4Q6YXWzip17gpdc7tcxYogLf4DK6ZbFuTk__Cn9dAeyvhiQJgzfKLzANO_E9S9q_fLRGsOtoRVTVuOw225Bc5Z7nWNt5P9QTXOEg_8fFGlptmcIuO1zBjcYUb8QHKd2Ifc3GE6rKYtG4.yumiloeu34nH-dm_EblJzEBcztf5iUkhUFADLYWrbqY&qid=1774023050&sr=8-1",
  },
  {
    id: 21,
    title: "Silver, Silver Little Star",
    author: "Renee' Marie Borowy",
    image: "/assets/images/bookmockups/Bk22.jpg",
    slug: "https://www.amazon.com/Silver-Little-Renee-Marie-Borowy/dp/1967864187/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.1RuHX9unmXi6uCNagvokfYb6naJ1mRRjJEyfn3U0R63tzrmalgQjHs-47VfHKeDCI_i5yME10CMCnDFENZw6hhtVQBTBLQ6anTpbr_DAxdFW_WYjsPhQxzO6CKa6rfIxctSvG4OrhFCgusL34zkOImWmnH-9VpLHydS6tQWoFNyBg7L_-4rja-slfXqUDcR5vHLHqMs4yGFhLBa6p9QoZyIEfDmYm4DZhKXUIPANFwo.Ji7XwDs8kjP1MeirNJ1q-d-k__-f4Q8KIO5N7rKxeKE&qid=1774023187&sr=8-1",
  },
  {
    id: 22,
    title: "Drag Racing's Original Kentucky Colonel: The David Heath Story",
    author: "Mark L. Brothers",
    image: "/assets/images/bookmockups/Bk23.jpg",
    slug: "https://www.amazon.com/Racings-Original-Kentucky-Colonel-David/dp/1967864136/ref=sr_1_1?crid=1COHNVO7D6LW4&dib=eyJ2IjoiMSJ9.G3_xc5w5rSrUh_X4e4InqA.pTvZYo4yO2kp08OtuCz7LNyBsKjRw4qesmMB4PDt3pA&dib_tag=se&keywords=Drag+Racings+Original+Kentucky+Colonel-The+David+Heath+Story&nsdOptOutParam=true&qid=1774022848&sprefix=drag+racings+original+kentucky+colonel-the+david+heath+story%2Caps%2C383&sr=8-1",
  },
  {
    id: 23,
    title: "Godfidence",
    author: "Veronica Graham RN, BSN",
    image: "/assets/images/bookmockups/Bk24.jpg",
    slug: "https://www.amazon.com/GODFIDENCE-Spiritual-Road-Overcome-Overachieve/dp/B0F5PBYXN1/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.5ivoxzxGg-6uZvf9orE2YhQJqZ-IpKhK1WP5JJyVnXwsA2IOnHRbIuBcnsi6d98fg__nyHEpj0HRN4rZYoQEXTPJwA4Zj-Q0uIZMlL3AUk8.yiL_bv90ziCEXIZdt-psBGWzvDrjxZvNjVV2KqbpLVs&qid=1774022402&sr=8-1",
  },
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

export const illustrationProjects: IllustrationProject[] = Array.from(
  { length: 9 },
  (_, index) => {
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
  },
);
