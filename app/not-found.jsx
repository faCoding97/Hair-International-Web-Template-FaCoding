export default function NotFound() {
  return (
    <section className="container-responsive py-16 text-center">
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-600">
        The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="inline-block mt-6 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
        Go Home
      </a>
    </section>
  );
}
