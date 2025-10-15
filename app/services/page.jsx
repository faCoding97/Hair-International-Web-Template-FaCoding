export const metadata = {
  title: "Services | Hair International",
  description:
    "Explore haircuts, coloring, treatments, styling, and beauty services in Port Elizabeth. Book with the most experienced salon in the city.",
};

const services = [
  {
    name: "Haircut & Blow-Dry",
    description:
      "Professional cuts tailored to your face shape, lifestyle, and hair texture — finished with a smooth blow-dry.",
    keywords: ["haircut", "women haircut", "men haircut", "kids haircut"],
  },
  {
    name: "Color & Highlights",
    description:
      "From subtle dimension to full color transformations, we use careful techniques to protect hair integrity.",
    keywords: ["balayage", "highlights", "root touch-up", "grey coverage"],
  },
  {
    name: "Keratin & Smoothing Treatments",
    description:
      "Reduce frizz, add shine, and strengthen hair with salon-grade treatments for long-lasting manageability.",
    keywords: ["keratin", "smoothing", "treatment"],
  },
  {
    name: "Styling & Updos",
    description:
      "Polished blowouts, curls, and elegant updos for weddings, matric farewells, and special occasions.",
    keywords: ["bridal hair", "event styling", "updo"],
  },
  {
    name: "Beauty Essentials",
    description:
      "Brow shaping, basic makeup, and finishing touches to complete your look in one convenient visit.",
    keywords: ["brow shaping", "makeup"],
  },
  {
    name: "Consultations",
    description:
      "Not sure where to start? Book a quick consult to discuss your goals and hair health with our stylists.",
    keywords: ["hair consult", "style advice"],
  },
];

export default function ServicesPage() {
  return (
    <section className="py-12">
      <div className="container-responsive">
        <h1 className="text-3xl font-bold mb-6">Salon Services</h1>
        <p className="mb-6">
          Looking for the <strong>best hair salon in Port Elizabeth</strong>?
          Hair International offers a full range of hair and beauty services
          tailored to your needs. From precision haircuts to rich color and
          restorative treatments, our team focuses on healthy hair and beautiful
          results.
        </p>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
          {services.map((s) => (
            <li
              key={s.name}
              className="border rounded-xl p-5 bg-white shadow-sm">
              <h2 className="text-xl font-semibold">{s.name}</h2>
              <p className="mt-2 text-gray-700">{s.description}</p>
              <p className="mt-2 text-xs text-gray-500">
                Keywords: {s.keywords.join(", ")}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            className="inline-block px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            href="/contact">
            Book an Appointment
          </a>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-3">Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <blockquote className="border-l-4 border-green-600 pl-4">
              “Best colour I’ve had in years. The team really listened and my
              hair feels so healthy.” — Local guest
            </blockquote>
            <blockquote className="border-l-4 border-green-600 pl-4">
              “Friendly, professional, and fast. I won’t go anywhere else in
              Port Elizabeth.” — Community member
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
