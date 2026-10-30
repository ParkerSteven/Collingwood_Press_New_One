import {
    Layers3,
    FileText,
    CalendarDays,
    BarChart3,
    UsersRound,
    Search,
    Share2,
    Mail,
    TrendingUp,
    Radio,
    Rocket,
    CheckCircle2,
    Globe,
    Trophy,
} from "lucide-react";

export const bookMarketingServices = [
    {
        title: "Amazon Listing Optimization ",
        icon: Search,
        badge: "Amazon SEO",
        description: (
            <>
                We rewrite your description, choose categories and keywords, and set up A+ content and pricing, then track rankings and adjust as results come in.
            </>
        ),
        href: 'https://www.thecollingwoodpress.com/blogs/self-publishing-on-amazon/'
    },
    {
        title: "Social Media, BookTok, and Creator Campaigns",
        icon: Share2,
        badge: "Social Growth",
        description: (
            <>
                Platform-native content and creator partnerships matched to your genre, with every post pointing readers to your Amazon page, email list, or pre-order link.
            </>
        ),
        href: 'https://www.thecollingwoodpress.com/blogs/proven-digital-marketing-strategies/'
    },
    {
        title: "Email and Reader Audience Building",
        icon: Mail,
        badge: "Email Funnels",
        description: (
            <>
                Reader magnets, a newsletter on Mailchimp or Substack, and automated sequences that turn new subscribers into an audience you own.
            </>
        ),
        href: 'https://www.thecollingwoodpress.com/blogs/how-to-sell-books-directly-to-readers/'
    },
    {
        title: "Paid Advertising for Books",
        icon: TrendingUp,
        badge: "Paid Campaigns",
        description: (
            <>
                Amazon Ads and Meta ads aimed at readers of similar authors, with creative testing and a budget agreed before spend begins. We also prepare and submit BookBub Featured Deal applications, and BookBub&apos;s editors decide which books run.
            </>
        ),
        href: 'https://www.thecollingwoodpress.com//blogs/book-ads-mistakes-authors-should-avoid/'
    },
    {
        title: "Media, PR, and Podcast Outreach",
        icon: Radio,
        badge: "Media PR",
        description: (
            <>
                Pitches to podcasts, publications, reviewers, and book bloggers, tailored to your book and your expertise. Coverage can never be guaranteed.
            </>
        ),
        href: 'https://www.thecollingwoodpress.com/blogs/public-relations-for-authors-tips/'
    },
    {
        title: "Book Launch Campaigns",
        icon: Rocket,
        badge: "Book Launch",
        description: (
            <>
                A launch plan that sequences ARC copies, pre-order offers, promotional pricing, social, and ads over several weeks. Advance readers get free copies with no obligation to review.
            </>
        ),
        href: 'https://www.thecollingwoodpress.com/blogs/book-launch-checklist/'
    },
];



export const authorBrandingPillars = [
  {
    title: "Author Identity",
    description:
      "Consistent author identity across Amazon, social media, and your website.",
  },
  {
    title: "Owned Email Audience",
    description:
      "Owned email audience that does not depend on any platform's algorithm.",
  },
  {
    title: "Press Kit and Media Page",
    description:
      "Press kit and media page built for podcast hosts, journalists, and event organizers.",
  },
  {
    title: "Cross-Title Promotion Strategy",
    description:
      "Cross-title promotion strategy so every new book lifts backlist sales.",
  },
];

export const marketingHeroProps = {
    className: "marketing-hero-gradient",

    eyebrow: "Strategic Book Marketing for Independent Authors",

    title: "Professional",

    highlightText: "Book Marketing Services",

    titleSuffix: "for Self-Published Authors",

    description: (
        <p>
            Published your book, or about to launch, and not sure how readers will find it? At The Collingwood Press, our book marketing services help self-published authors reach the right readers. We build one plan around your book, genre, and goals, and you&apos;ll see what we will do and what it costs before work begins
        </p>
    ),

    buttons: [
        {
            text: "Get Your Custom Marketing Plan",
            href: "/contact-us/#manuscript-review",
            variant: "primary" as const,
            showArrow: true,
        },
        {
            text: "See What's Included",
            href: "#marketing-services",
            variant: "outline-white" as const,
        },
    ],

    guarantees: [
        {
            text: "Targeted Comp-Author Audiences",
            icon: CheckCircle2,
        },
        {
            text: "International Rights Fair Representation",
            icon: Globe,
        },
        {
            text: "Verified ARC & Reviewer Syndication",
            icon: Trophy,
        },
    ],
};

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

export const campaignFactors = [
    {
        title: "Genre",
        icon: Layers3,
        description:
            "Thriller, romance, and nonfiction readers don't browse the same way.",
    },
    {
        title: "Format",
        icon: FileText,
        description:
            "Ebook, print, and audio each have their own discovery routes.",
    },
    {
        title: "Book stage",
        icon: CalendarDays,
        description:
            "A pre-launch title needs different work from a backlist book with a year of sales behind it.",
    },
    {
        title: "Budget",
        icon: BarChart3,
        description:
            "A smaller budget goes into two or three channels done well, not spread across ten.",
    },
    {
        title: "Your existing audience",
        icon: UsersRound,
        description:
            "An author with a mailing list starts with email, and an author with no audience starts with the Amazon listing and ads.",
    },
];