import fs from "fs";
import path from "path";
import Section from "../components/Section";
import ProHeroSlider from "../components/ProHeroSlider";
import Script from "next/script";
import MapEmbed from "../components/MapEmbed";
export const metadata = {
  title: "Hair International & Beauty | Best Hair Salon in Port Elizabeth",
  description:
    "The most experienced salon in Port Elizabeth. Hair International & Beauty offers premium haircuts, coloring, and beauty services. View gallery, services, hours, and location.",
  alternates: { canonical: "http://localhost:3000/" },
};

function getImagesFrom(dirRelativeToPublic) {
  const dir = path.join(process.cwd(), "public", dirRelativeToPublic);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
    .sort()
    .map((f) => `/${dirRelativeToPublic}/${f}`);
}

export default function HomePage() {
  const sliderImages = getImagesFrom("images/slider");

  const captionsPath = path.join(
    process.cwd(),
    "public",
    "images",
    "slider",
    "captions.json"
  );
  let captions = {};
  try {
    const raw = fs.readFileSync(captionsPath, "utf-8");
    captions = JSON.parse(raw);
  } catch {}
  const sliderItems = sliderImages.map((src) => {
    const file = src.split("/").pop();
    const meta = captions[file] || {};
    return {
      src,
      alt: meta.alt || "Hair International & Beauty — salon image",
      title: meta.title || "Hair International & Beauty",
      caption:
        meta.caption ||
        "The most experienced salon in Port Elizabeth — modern cuts, color, and care.",
      ctaText: meta.ctaText || "Book Now",
      ctaHref: meta.ctaHref || "/contact",
    };
  });
  const openingHours = [
    { days: "Tuesday – Friday", hours: "8:30 AM – 2:30 PM" },
    { days: "Saturday", hours: "8:30 AM – 1:00 PM" },
    { days: "Sunday & Monday", hours: "Closed" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Hair International & Beauty",
    image: sliderImages.length ? sliderImages : ["/images/slider/slide-1.jpg"],
    url: "http://localhost:3000",
    slogan: "The most experienced salon in Port Elizabeth",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Elizabeth",
      addressRegion: "Eastern Cape",
      addressCountry: "ZA",
    },
    sameAs: [
      "https://www.facebook.com/pages/Hair%20International%20&%20Beauty/237026237241764/#",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "14:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "13:00",
      },
    ],
    hasMap: "https://maps.app.goo.gl/vYuChr26FfPfvzuo6",
    priceRange: "$$",
    areaServed: "Port Elizabeth, South Africa",
    description:
      "Premium haircuts, coloring, and beauty treatments delivered by a friendly, highly experienced team in Port Elizabeth.",
  };

  return (
    <>
      <Script
        id="jsonld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Slider */}
      <ProHeroSlider items={sliderItems} />

      {/* Welcome */}
      <Section id="welcome" title="Welcome to Hair International & Beauty">
        <p>
          <strong>The most experienced salon in Port Elizabeth</strong> —
          trusted by locals for decades. We deliver modern haircuts, precise
          coloring, and nourishing treatments that keep your hair healthy and
          stylish.
        </p>
        <p>
          Whether you need a quick trim, a total refresh, or a special-occasion
          look, our team will tailor every service to your goals and hair type.
        </p>
      </Section>

      {/* About preview */}
      <Section id="about" title="About Us">
        <p>
          Founded in 1990, Hair International & Beauty has served Port Elizabeth
          with passion and craftsmanship. Our philosophy is simple: blend
          classic technique with modern trends, and treat every guest like
          family.
        </p>
        <p>
          We use salon-grade products and careful techniques to protect hair
          health while achieving your ideal style.
        </p>
      </Section>

      {/* Services summary */}
      <Section id="services" title="Popular Services">
        <ul className="grid gap-4 md:grid-cols-2 list-none p-0">
          <li>
            <strong>Haircut & Blow-Dry:</strong> Professional cuts tailored to
            your face shape and lifestyle.
          </li>
          <li>
            <strong>Color & Highlights:</strong> From subtle dimension to bold
            transformations, done with care.
          </li>
          <li>
            <strong>Keratin & Treatments:</strong> Smooth, strengthen, and
            restore natural shine.
          </li>
          <li>
            <strong>Styling for Events:</strong> Elegant updos and polished
            looks for any occasion.
          </li>
          <li>
            <strong>Beauty Services:</strong> Brow shaping, basic makeup, and
            finishing touches.
          </li>
        </ul>
        <p className="mt-4">
          Explore the full list on the <a href="/services">Services</a> page.
        </p>
      </Section>

      {/* Map & Hours */}
      <Section id="visit" title="Visit Us" className="bg-gray-50">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <MapEmbed
              embedSrc="https://maps.google.com/maps?q=Hair%20International%20%26%20Beauty%20Port%20Elizabeth&z=15&output=embed"
              query="Hair International & Beauty Port Elizabeth"
              title="Hair International & Beauty on Google Maps"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <ul className="space-y-2">
              {openingHours.map((row) => (
                <li
                  key={row.days}
                  className="flex justify-between border-b pb-2">
                  <span className="font-medium">{row.days}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                className="inline-block px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                href="https://www.facebook.com/pages/Hair%20International%20&%20Beauty/237026237241764/#"
                target="_blank"
                rel="noopener noreferrer">
                Connect on Facebook
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact blurb */}
      <Section id="contact" title="Book Your Appointment">
        <p>
          Ready for your new look? Reach out via the{" "}
          <a href="/contact">Contact</a> page. We look forward to welcoming you.
        </p>
      </Section>
    </>
  );
}
