import type { Metadata } from "next";
import { IBM_Plex_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GITHUB_PAGES_REPO, site } from "@/lib/site.config";

const pagesAssetPrefix =
  process.env.NODE_ENV === "production" ? `/${GITHUB_PAGES_REPO}` : "";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport = {
  themeColor: "#030712",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
    locale: "en_IN",
    url: site.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
  },
  icons: {
    icon: `${pagesAssetPrefix}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${ibmPlex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col page-gradient font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-slate-950 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
