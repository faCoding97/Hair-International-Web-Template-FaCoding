"use client";
export default function Error({ error, reset }) {
  return (
    <section className="container-responsive py-16 text-center">
      <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
      <p className="text-gray-600">{error?.message || "Please try again."}</p>
      <button
        onClick={() => reset()}
        className="mt-6 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
        Try again
      </button>
    </section>
  );
}
