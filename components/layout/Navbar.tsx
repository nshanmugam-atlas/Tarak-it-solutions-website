"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            T
          </div>

          <span className="text-lg font-semibold tracking-wide text-white">
            Tarak IT Solutions
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <a href="#hero" className="hover:text-white transition">
            Home
          </a>

          <a href="#services" className="hover:text-white transition">
            Services
          </a>

          <a href="#portfolio" className="hover:text-white transition">
            Portfolio
          </a>

          <a href="#stats" className="hover:text-white transition">
            Stats
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </nav>

        {/* CTA */}
        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hidden md:block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-medium hover:opacity-90 transition shadow-lg shadow-blue-500/20 text-white"
        >
          Get Quote
        </button>

      </div>
    </header>
  );
}