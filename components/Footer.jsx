export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-6 mt-12 text-sm">
      <div className="container-responsive flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Hair International — Port Elizabeth,
          South Africa
        </p>
        <p className="text-gray-900 flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
          <span className="whitespace-nowrap">Written by:</span>
          <a
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
            href="https://elixcode.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/logo/logo.png"
              alt="Elix Code Logo"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
            />
            Elix Code
          </a>
        </p>
      </div>
    </footer>
  );
}
