import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_BASE_URL || "http://127.0.0.1:3000";

export const viewport = {
  themeColor: "#000000"
};

export const metadata = {
  metadataBase: new URL(SITE_BASE_URL),

  title: {
    default: "Vaisakh P V - Full Stack Developer | Python, Django, React, Next.js",
    template: "%s | Vaisakh P V Portfolio"
  },

  description:
    "Explore the portfolio of Vaisakh P V, a passionate Full Stack Developer proficient in Python, Django, React, Next.js, and more. Discover innovative projects and a journey of continuous learning in web development and AI.",

  keywords: [
    "vaisakh",
    "vaisakh p v",
    "vaisakhpv033",
    "full stack developer",
    "software developer",
    "python developer",
    "django developer",
    "react developer",
    "next.js developer",
    "frontend developer",
    "backend developer",
    "web development",
    "software engineering",
    "portfolio",
    "tech enthusiast",
    "AI enthusiast",
    "self learner",
    "web design",
    "javascript developer",
    "API development"
  ],

  authors: [{ name: "Vaisakh P V", url: SITE_BASE_URL }],
  creator: "Vaisakh P V",
  publisher: "Vaisakh P V",
  generator: "Next.js",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  // For canonical URLs and alternate languages
  alternates: {
    canonical: '/', //  homepage is the canonical version
    // languages: {
    //   'en-US': '/en-US',
    // },
  },


  // Open Graph (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Vaisakh P V: Expert Full Stack Developer | Portfolio",
    description:
      "Dive into the work of Vaisakh P V, a Full Stack Developer specializing in Python, Django, React, and Next.js. Discover a portfolio of innovative projects and a passion for cutting-edge technology and AI.",
    url: `${SITE_BASE_URL}/`,
    siteName: "Vaisakh P V Portfolio",
    images: [
      {
        url: `${SITE_BASE_URL}/og-image-vaisakh-portfolio.png`,
        width: 1200,
        height: 630,
        alt: "Vaisakh P V - Full Stack Developer Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Vaisakh P V - Full Stack Developer | Python, Django, React, Next.js Expert",
    description:
      "Explore the portfolio of Vaisakh P V, a skilled Full Stack Developer creating dynamic web solutions with Python, Django, React, and Next.js. Connect with a dedicated tech and AI enthusiast. #FullStackDev #WebDevelopment #Portfolio",
    // site: '@yourTwitterHandle', // Optional: Your site's Twitter handle
    creator: "@yourPersonalTwitterHandle", // Your personal Twitter handle
    images: [`${SITE_BASE_URL}/twitter-image-vaisakh-portfolio.jpg`], // Consider a specific Twitter image
  },

  // Favicons and App Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    // other: [ // Example for other icons if needed
    //   { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    // ],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/site.webmanifest",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vaisakh P V',
  url: SITE_BASE_URL,
  image: `${SITE_BASE_URL}/images/profile.jpg`,
  sameAs: [
    'https://www.linkedin.com/in/vaisakhpv033/', // LinkedIn
    'https://github.com/vaisakhpv033',         //  GitHub
    'https://leetcode.com/u/vaisakhpv033/'    // Leetcode
    // 'https://twitter.com/yourhandle'        // Your Twitter
  ],
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Vaisakh P V', 
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      "name": "Government Engineering College Idukki"
    }
  ],
  knowsAbout: ['Python', 'Django', 'React', 'Next.js', 'JavaScript', 'Full Stack Development', 'Web Development', 'Software Engineering', 'AI Enthusiast'],
  description: "Vaisakh P V is a passionate and skilled Full Stack Developer specializing in creating dynamic and efficient web applications using Python, Django, React, Next.js, and other modern technologies. He is a continuous learner with a strong interest in AI.",
  address: {
    "@type": "PostalAddress",
    "addressLocality": "Kochi",
    "addressCountry": "India"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
