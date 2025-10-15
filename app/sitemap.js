export default function sitemap() {
  const base = "https://hairinternational.elixflare.com";
  const lastMod = new Date();
  return [
    { url: `${base}/`, lastModified: lastMod },
    { url: `${base}/about`, lastModified: lastMod },
    { url: `${base}/services`, lastModified: lastMod },
    { url: `${base}/gallery`, lastModified: lastMod },
    { url: `${base}/contact`, lastModified: lastMod },
  ];
}
