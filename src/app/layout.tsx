import { primary } from "@/app/configs/fonts";
import type { Metadata } from "next";
import "./globals.css";

//==================
import { Footer, Header } from "@/components";
//==================

//========= Meta Data
export const metadata: Metadata = {
  // Title & Descriptions
  title: "Unlock Global Job Opportunities with AI Pro Resume",
  description:
    "Feeling stuck in your job search? Let AI Pro Resume guide you! Create a professional resume and submit it to over 100 global companies awaiting your application.",
  // Canonical
  alternates: { canonical: "https://ai-pro-resume-website-v2.vercel.app/" },
  // OG Metas
  openGraph: {
    title: "Unlock Global Job Opportunities with AI Pro Resume",
    description:
      "Feeling stuck in your job search? Let AI Pro Resume guide you! Create a professional resume and submit it to over 100 global companies awaiting your application.",
    url: "https://ai-pro-resume-website-v2.vercel.app/",
    siteName: "Ai Pro Resume",
    locale: "en_US",
    type: "website",
  },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
};
export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${primary.variable} font-primary bg-secondary`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}