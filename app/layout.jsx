import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hair International & Beauty | Port Elizabeth",
  description:
    "Hair International & Beauty — the most experienced salon in Port Elizabeth. Expert haircuts, color, and beauty services. View prices, hours, and location.",
  openGraph: {
    title: "Hair International & Beauty | Port Elizabeth",
    description:
      "The most experienced salon in Port Elizabeth. Haircuts, coloring, and beauty services with a friendly team.",
    url: "http://localhost:3000",
    siteName: "Hair International & Beauty",
    images: [
      { url: "/images/slider/slide-1.jpg", width: 1200, height: 630, alt: "Salon interior" }
    ],
    locale: "en_ZA",
    type: "website"
  },
  alternates: { canonical: "http://localhost:3000" },
  twitter: {
    card: "summary_large_image",
    title: "Hair International & Beauty",
    description: "The most experienced salon in Port Elizabeth.",
    images: ["/images/slider/slide-1.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
