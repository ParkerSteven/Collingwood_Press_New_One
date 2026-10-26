
import type { Metadata, Viewport } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { StickySocialStripLeft } from "@/components/ui/StickySocialStrip";
import ChatWidgetManager from "@/components/site/ChatWidgetManager";
import { PopupProvider } from "@/contexts/PopupContext";
import AdTrackingCapture from "@/components/site/AdTrackingCapture";
import AnalyticsManager from "@/components/site/AnalyticsManager";
import Clarity from "@/components/site/Clarity";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Tracking IDs from previous layout
const GOOGLE_ANALYTICS_ID = "G-YWRQMP00E2";
const GOOGLE_TAG_ID =
  process.env.NEXT_PUBLIC_GTAG_ID ?? "G-2TTE16DC3Z";

const FACEBOOK_PIXEL_ID = "905102058883202";
const MAILMUNCH_SITE_ID = "1103682";

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.thecollingwoodpress.com"),

  title: {
    default: "Trusted Book Publishing Company | Keep 100% Royalties",
    template: "%s | The Collingwood Press",
  },

  description:
    "Best book publishing company for independent authors. Professional ghostwriting, editing, cover design, marketing and global distribution services. You keep copyright and 100% of royalties.",

  keywords: [
    "book publishing company",
    "self publishing services",
    "book editing and formatting",
    "book cover design",
    "author marketing services",
  ],

  verification: {
    google: "dkn3Hv-kdq9D0XgUiyfDTyOJ-KuKqcnErb2gD3tNNTY",
    other: {
      "facebook-domain-verification":
        "lw3tzfad0y9qx9ewmwgjnn390w6pg3",
      "p:domain_verify":
        "ba918a4e719fc84c4b65cc03de6b3a41",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      {
        url: "/assets/images/Fav_icon.png?v=2",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/assets/images/Fav_icon.png?v=2",
    apple: "/assets/images/Fav_icon.png?v=2",
  },

  openGraph: {
    title: "Trusted Book Publishing Company | Keep 100% Royalties",
    description:
      "Best book publishing company for independent authors. Professional ghostwriting, editing, cover design, marketing and global distribution services. You keep copyright and 100% of royalties.",
    url: "https://www.thecollingwoodpress.com",
    siteName: "The Collingwood Press",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trusted Book Publishing Company | Keep 100% Royalties",
    description:
      "Best book publishing company for independent authors. Professional ghostwriting, editing, cover design, marketing and global distribution services. You keep copyright and 100% of royalties.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Structured Data
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id":
        "https://www.thecollingwoodpress.com/#organization",
      name: "The Collingwood Press",
      legalName: "Hambone Publishers LLC",
      alternateName: "The Collingwood Press",
      url: "https://www.thecollingwoodpress.com/",

      logo: {
        "@type": "ImageObject",
        "@id":
          "https://www.thecollingwoodpress.com/#logo",
        url:
          "https://www.thecollingwoodpress.com/assets/images/Collingwood-Site-Logo.png",
      },

      image: {
        "@type": "ImageObject",
        "@id":
          "https://www.thecollingwoodpress.com/#primaryimage",
        url:
          "https://www.thecollingwoodpress.com/assets/images/Collingwood-Site-Logo.png",
      },

      description:
        "The Collingwood Press is a Fort Worth, Texas-based independent book publishing company and imprint of Hambone Publishers, offering ghostwriting, editing, cover design, book marketing, distribution, and audiobook production.",

      telephone: "+19362233644",
      email: "info@thecollingwoodpress.com",

      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+19362233644",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },

      address: {
        "@type": "PostalAddress",
        streetAddress: "6777 Camp Bowie Blvd",
        addressLocality: "Fort Worth",
        addressRegion: "TX",
        postalCode: "76116",
        addressCountry: "US",
      },

      geo: {
        "@type": "GeoCoordinates",
        latitude: 32.72037122788938,
        longitude: -97.4339853448605,
      },

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],

      areaServed: {
        "@type": "Country",
        name: "United States",
      },

      priceRange: "$$",

      knowsAbout: [
        "Book Publishing",
        "Ghostwriting",
        "Book Editing",
        "Book Marketing",
        "Book Cover Design",
        "Book Distribution",
        "Audiobook Production",
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Book Publishing Services",
        itemListElement: [
          ["ghostwriting-service", "Ghostwriting", "ghostwriting"],
          ["editing-service", "Book Editing", "editing"],
          ["publishing-service", "Book Publishing", "publishing"],
          ["marketing-service", "Book Marketing", "marketing"],
          ["audiobook-service", "Audiobook Production", "audiobook"],
        ].map(([id, name, path]) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id":
              `https://www.thecollingwoodpress.com/#${id}`,
            name,
            url:
              `https://www.thecollingwoodpress.com/${path}/`,
          },
        })),
      },

      sameAs: [
        "https://www.facebook.com/theCollingwoodpress",
        "https://www.instagram.com/thecollingwoodpress/",
        "https://www.linkedin.com/company/collingwood-press/",
        "https://www.tiktok.com/@thecollingwoodpress",
        "https://x.com/CollingwoodUS",
        "https://www.g2.com/sellers/collingwood-press",
        "https://www.reviews.io/company-reviews/store/www.thecollingwoodpress.com",
        "https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/",
        "https://www.trustpilot.com/review/thecollingwoodpress.com",
      ],
    },

    {
      "@type": "WebSite",
      "@id":
        "https://www.thecollingwoodpress.com/#website",
      url: "https://www.thecollingwoodpress.com/",
      name: "The Collingwood Press",
      alternateName: "The Collingwood Press",
      publisher: {
        "@id":
          "https://www.thecollingwoodpress.com/#organization",
      },
      inLanguage: "en-US",
    },

    {
      "@type": "WebPage",
      "@id":
        "https://www.thecollingwoodpress.com/#webpage",
      url: "https://www.thecollingwoodpress.com/",
      name: "The Collingwood Press | Book Publishing Services",
      isPartOf: {
        "@id":
          "https://www.thecollingwoodpress.com/#website",
      },
      about: {
        "@id":
          "https://www.thecollingwoodpress.com/#organization",
      },
      publisher: {
        "@id":
          "https://www.thecollingwoodpress.com/#organization",
      },
      primaryImageOfPage: {
        "@id":
          "https://www.thecollingwoodpress.com/#primaryimage",
      },
      inLanguage: "en-US",
    },

    {
      "@type": "Service",
      "@id":
        "https://www.thecollingwoodpress.com/#book-publishing-service",
      name: "Book Publishing Services",
      description:
        "Complete book publishing services including writing, editing, cover design, distribution, marketing, and audiobook production for authors.",
      serviceType: "Book Publishing",
      provider: {
        "@id":
          "https://www.thecollingwoodpress.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: "https://www.thecollingwoodpress.com/",
    },
  ],
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTAG_ID ?? "G-2TTE16DC3Z";
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cormorant.variable}`}
    >
      <head>
        <meta
          name="facebook-domain-verification"
          content="lw3tzfad0y9qx9ewmwgjnn390w6pg3"
        />
        <meta
          name="p:domain_verify"
          content="ba918a4e719fc84c4b65cc03de6b3a41"
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YWRQMP00E2"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-YWRQMP00E2');`,
          }}
        />

        {/* Trustpilot */}
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />

        {/* Site-wide Schema.org JSON-LD graph */}
        <script
          id="site-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased text-ink bg-paper selection:bg-coral selection:text-white">

        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '905102058883202');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Tag */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtmId}');
          `}
        </Script>

        {/* Mailmunch */}
        <Script
          src="//a.mailmunch.co/app/v1/site.js"
          id="mailmunch-script"
          data-mailmunch-site-id="1103682"
          strategy="afterInteractive"
        />


        {/* Sticky Social Sidebar */}
        <StickySocialStripLeft />

        {/* Website Pages */}
        <PopupProvider>
          {children}
          <ChatWidgetManager />
          <AdTrackingCapture />
          <AnalyticsManager />
          <Clarity />
          <SpeedInsights />
        </PopupProvider>
      </body>
    </html>
  );
}
