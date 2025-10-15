import fs from "fs";
import path from "path";

export const metadata = {
  title: "Gallery | Hair International",
  description:
    "View our salon gallery: haircuts, coloring, styling, and beauty looks from Port Elizabeth’s trusted team.",
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

export default function GalleryPage() {
  const gallery = getImagesFrom("images/gallery");
  return (
    <section className="py-12">
      <div className="container-responsive">
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>
        {gallery.length === 0 ? (
          <p className="text-gray-600">
            Add images to <code>/public/images/gallery</code> to populate this
            page.
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-none p-0">
            {gallery.map((src, i) => (
              <li
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                {/* Using plain img to avoid layout warnings without dimensions; object-fit via class */}
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading={i < 6 ? "eager" : "lazy"}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
