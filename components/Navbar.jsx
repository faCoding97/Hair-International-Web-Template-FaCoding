"use client";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // Close on scroll when menu is open (mobile UX)
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [open]);
  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <nav className="container-responsive flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-extrabold tracking-tight text-lg md:text-xl">
          <span className="text-gray-900">Hair International</span>
          <span className="text-green-600"> & Beauty</span>
        </Link>
        <HamburgerButton open={open} onToggle={() => setOpen((v) => !v)} />

        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-green-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-green-600">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white">
          <ul className="container-responsive py-3 space-y-3 font-medium">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={() => setOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
