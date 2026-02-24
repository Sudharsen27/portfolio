"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/src/data/nav";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`font-nav fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-zinc-700/80 bg-zinc-900/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-zinc-800/80 bg-zinc-900/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:py-4">
        <Link
          href="/"
          className="text-xl font-semibold text-white transition-colors hover:text-blue-400 md:text-2xl"
        >
          Sundar Lingam
        </Link>

        <ul className="hidden gap-1 md:flex md:gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`group relative py-2 text-base font-medium transition-colors hover:text-white ${
                  pathname === href ? "text-white" : "text-zinc-400"
                }`}
              >
                {label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-200 group-hover:w-full" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-zinc-800 bg-zinc-900/98 px-4 py-4 md:hidden">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-zinc-800 hover:text-white ${
                  pathname === href ? "text-white" : "text-zinc-400"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
