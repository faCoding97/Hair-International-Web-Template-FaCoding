import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata = {
  title: "Hair International  | Port Elizabeth",
  description:
    "Hair International  — the most experienced salon in Port Elizabeth. Expert haircuts, color, and beauty services. View prices, hours, and location.",
  openGraph: {
    title: "Hair International  | Port Elizabeth",
    description:
      "The most experienced salon in Port Elizabeth. Haircuts, coloring, and beauty services with a friendly team.",
    url: "https://hairinternational.elixflare.com",
    siteName: "Hair International",
    images: [
      {
        url: "/images/slider/slide-1.jpg",
        width: 1200,
        height: 630,
        alt: "Salon interior",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  alternates: { canonical: "https://hairinternational.elixflare.com" },
  twitter: {
    card: "summary_large_image",
    title: "Hair International",
    description: "The most experienced salon in Port Elizabeth.",
    images: ["/images/slider/slide-1.jpg"],
  },
  verification: {
    google: `dKQzs1JM_VAihmAWs_4w86bKV9GGaqnpIiJzsWKCEqg`,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }], // اختیاری اما خوبه
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Analytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
        </Script>
      </body>
    </html>
  );
}
