"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F8FAFC]/95 backdrop-blur-xl border-b border-[#DCE3F0] shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="relative w-[95px] h-[95px] -my-3">
            <Image
              src="/LOGO.png"
              alt="TARAK IT SOLUTIONS"
              fill
              sizes="95px"
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col leading-tight">

            <span className="text-lg font-bold tracking-wide text-[#092D82]">
              TARAK IT SOLUTIONS
            </span>

            <span className="text-[11px] tracking-[0.2em] uppercase text-[#4B5B7A]">
              Innovate • Build • Scale
            </span>

          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          <a
            href="#hero"
            className="hover:text-[#092D82] transition-colors"
          >
            Home
          </a>

          <a
            href="#services"
            className="hover:text-[#092D82] transition-colors"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="hover:text-[#092D82] transition-colors"
          >
            Portfolio
          </a>

          <a
            href="#stats"
            className="hover:text-[#092D82] transition-colors"
          >
            Technologies
          </a>

          <a
            href="#contact"
            className="hover:text-[#092D82] transition-colors"
          >
            Contact
          </a>

        </nav>

        {/* CTA Button */}
        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hidden md:block px-6 py-2.5 rounded-xl bg-[#092D82] text-white text-sm font-semibold hover:bg-[#0B3BA8] transition-all duration-300 shadow-lg shadow-blue-900/20"
        >
          Get Quote
        </button>

      </div>
    </header>
  );
}