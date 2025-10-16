export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-6 mt-12 text-sm">
      <div className="container-responsive flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Hair International — Port Elizabeth,
          South Africa
        </p>
        <p className="text-gray-500">
          <span className=" whitespace-nowrap">Written by:</span>
          <a
            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
            href="https://www.linkedin.com/in/farazaghababayi"
            target="_blank"
            rel="noopener noreferrer">
            www.linkedin.com/in/farazaghababayi
          </a>
        </p>
      </div>
    </footer>
  );
}
