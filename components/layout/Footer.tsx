"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[300px] h-[300px] bg-blue-600/10 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[250px] h-[250px] bg-purple-600/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
                T
              </div>

              <h2 className="text-xl font-semibold">
                Tarak IT Solutions
              </h2>
            </div>

            <p className="text-gray-400 text-sm leading-7">
              Engineering premium digital experiences through
              innovative technology, scalable solutions, and
              modern enterprise systems.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-medium mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">

              <a href="#hero" className="hover:text-white transition">
                Home
              </a>

              <a href="#services" className="hover:text-white transition">
                Services
              </a>

              <a href="#portfolio" className="hover:text-white transition">
                Portfolio
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-5">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <span>ERP Solutions</span>
              <span>UI/UX Design</span>
              <span>Web Development</span>
              <span>SAP Solutions</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>tarakitsolutions@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+91 ***********</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>No 29, MEENA ESTATE, SOWRIPALAYAM ROAD, COIMBATORE, TAMILNADU, India - 641028</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

         <div className="flex flex-col">
            <p className="text-gray-500 text-sm">
                © 2026 Tarak IT Solutions. All rights reserved.
            </p>

            <p className="text-gray-600 text-xs mt-1">
                 Designed & Developed by{" "}
              <a
                href="#hero"
                 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium hover:opacity-80 transition"
              >
                  Tarak IT Solutions
              </a>
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}