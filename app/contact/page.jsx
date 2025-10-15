import MapEmbed from "../../components/MapEmbed";

export const metadata = {
  title: "Contact | Hair International & Beauty",
  description:
    "Contact Hair International & Beauty in Port Elizabeth. View hours, map, and message us to book your appointment.",
};

export default function ContactPage() {
  return (
    <section className="py-12">
      <div className="container-responsive">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-3">Send a Message</h2>
            <form
              action="mailto:hairinternationalbeauty@example.com"
              method="post"
              encType="text/plain"
              className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full border rounded-lg p-2"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full border rounded-lg p-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full border rounded-lg p-2"
                  placeholder="How can we help?"
                />
              </div>
              <button
                className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                type="submit">
                Send
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-500">
              Prefer email?{" "}
              <a href="mailto:hairinternationalbeauty@example.com">
                hairinternationalbeauty@example.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Visit & Hours</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b pb-2">
                <span>Tuesday – Friday</span>
                <span>8:30 AM – 2:30 PM</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Saturday</span>
                <span>8:30 AM – 1:00 PM</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Sunday & Monday</span>
                <span>Closed</span>
              </li>
            </ul>

            <MapEmbed
              embedSrc="https://maps.google.com/maps?q=Hair%20International%20%26%20Beauty%20Port%20Elizabeth&z=15&output=embed"
              query="Hair International & Beauty Port Elizabeth"
              title="Hair International & Beauty on Google Maps"
            />

            <div className="mt-4">
              <a
                className="inline-block px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                href="https://www.facebook.com/pages/Hair%20International%20&%20Beauty/237026237241764/#"
                target="_blank"
                rel="noopener noreferrer">
                Facebook Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
