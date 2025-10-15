export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className="container-responsive">
        {title && <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>}
        <div className="prose max-w-none prose-p:my-3 prose-headings:mb-3 prose-a:text-green-600">
          {children}
        </div>
      </div>
    </section>
  );
}
