import Image from "next/image";
import QRCode from "qrcode";
import MapEmbed from "../../components/MapEmbed";

export const metadata = {
  title: "Contact | Hair International & Beauty",
  description:
    "Get in touch with Hair International & Beauty in Port Elizabeth (Gqeberha). Call, WhatsApp, or visit us in person.",
};

async function generateQR(url) {
  const dataUrl = await QRCode.toDataURL(url, { margin: 2, width: 220 });
  return dataUrl;
}

export default async function ContactPage() {
  const salonPhone = "+27413643322";
  const whatsappNumber = "27213333333"; // wa.me compatible
  const siteUrl = "https://hairinternational.elixflare.com/";

  const qrCode = await generateQR(siteUrl);

  return (
    <section className="py-12">
      <div className="container-responsive">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6">
            {/* Contact buttons */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                Reach us instantly via WhatsApp or phone — no forms, no hassle.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-green-600 text-white font-medium shadow-sm hover:bg-green-700 hover:shadow-md transition active:scale-95">
                  WhatsApp
                </a>

                <a
                  href={`tel:${salonPhone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-green-600 text-green-700 font-medium shadow-sm hover:bg-green-50 hover:shadow-md transition active:scale-95">
                  Call Salon
                </a>
              </div>
            </div>

            {/* Salon info */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Salon Info</h2>
              <ul className="text-gray-700 space-y-1">
                <li>
                  <strong>Address:</strong> 45 1st Ave, Newton Park, Gqeberha,
                  6045, South Africa
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${salonPhone}`} className="text-green-700">
                    +27 41 364 3322
                  </a>
                </li>
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    className="text-green-700">
                    021 333 3333
                  </a>
                </li>
              </ul>
            </div>

            {/* QR Code section */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Website QR Code</h2>

              <div className="p-3 border rounded-xl inline-block bg-white shadow-md hover:shadow-lg transition">
                <Image
                  src={qrCode}
                  alt="QR Code to Hair International & Beauty website"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              <div className="mt-5">
                <a
                  href={qrCode}
                  download="hairinternational-qr.png"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-600 text-white font-semibold shadow-sm hover:bg-green-700 hover:shadow-md transition active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </svg>
                  Download QR Code
                </a>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Visit & Hours</h2>
            <ul className="space-y-2 text-gray-700 mb-4">
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

            {/* 🔥 Restored your original MapEmbed */}
            <MapEmbed
              embedSrc="https://maps.google.com/maps?q=Hair%20International%20%26%20Beauty%20Port%20Elizabeth&z=15&output=embed"
              query="Hair International Port Elizabeth"
              title="Hair International on Google Maps"
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
