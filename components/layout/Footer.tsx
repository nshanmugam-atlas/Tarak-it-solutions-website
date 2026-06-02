"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#092D82]/10 bg-[#F8FAFC] text-[#092D82]">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-xl bg-[#092D82] flex items-center justify-center font-bold text-white shadow-lg">
                T
              </div>

              <h2 className="text-xl font-bold">
                Tarak IT Solutions
              </h2>

            </div>

            <p className="text-gray-600 text-sm leading-7">
              Engineering premium digital experiences through
              innovative technology, scalable business solutions,
              enterprise systems, and modern web applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-600">

              <a
                href="#hero"
                className="hover:text-[#092D82] transition"
              >
                Home
              </a>

              <a
                href="#services"
                className="hover:text-[#092D82] transition"
              >
                Services
              </a>

              <a
                href="#portfolio"
                className="hover:text-[#092D82] transition"
              >
                Portfolio
              </a>

              <a
                href="#contact"
                className="hover:text-[#092D82] transition"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <span>ERP Solutions</span>
              <span>UI/UX Design</span>
              <span>Web Development</span>
              <span>SAP Solutions</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-600">

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#092D82]" />
                <span>tarakitsolutions@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#092D82]" />
                <span>+91 8838178553</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#092D82] mt-1" />
                <span>
                  No 29, MEENA ESTATE,
                  SOWRIPALAYAM ROAD,
                  COIMBATORE, TAMILNADU,
                  India - 641028
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-[#092D82]/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex flex-col">

            <p className="text-gray-500 text-sm">
              © 2026 Tarak IT Solutions. All rights reserved.
            </p>

            <p className="text-gray-500 text-xs mt-1">
              Designed & Developed by{" "}
              <span className="font-semibold text-[#092D82]">
                Tarak IT Solutions
              </span>
            </p>

          </div>

          <div className="flex gap-6 text-sm text-gray-500">

            <span className="hover:text-[#092D82] transition cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-[#092D82] transition cursor-pointer">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}