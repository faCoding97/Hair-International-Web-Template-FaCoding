export const metadata = {
  title: "About | Hair International",
  description:
    "Learn about Hair International  — Port Elizabeth’s most experienced salon. Established in 1990, offering expert hair and beauty services.",
};

export default function AboutPage() {
  return (
    <section className="py-12">
      <div className="container-responsive">
        <h1 className="text-3xl font-bold mb-4">About Hair International </h1>
        <p>
          Hair International is the most experienced salon in Port Elizabeth,
          offering premium hair and beauty services since 1990. Located in the
          heart of the city, we specialize in modern cuts, precise coloring, and
          restorative treatments that protect your hair’s health while elevating
          your style.
        </p>
        <p className="mt-4">
          Our approach blends classic technique with the latest trends. We
          listen first, then tailor every service to your goals, face shape, and
          hair texture. From everyday maintenance to special events, our
          friendly team is committed to making you feel confident and cared for.
        </p>
        <p className="mt-4">
          We proudly serve the Port Elizabeth community and welcome all ages.
          Visit our <a href="/services">Services</a> to explore what we offer,
          or head to <a href="/contact">Contact</a> to get in touch.
        </p>
      </div>
    </section>
  );
}
