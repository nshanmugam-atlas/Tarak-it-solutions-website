"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/ui/Particles";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden bg-white text-gray-900">

      {/* PARTICLES */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-100 blur-3xl rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-100 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-1 text-xs bg-blue-50 border border-blue-200 text-blue-600 rounded-full">
            🚀 Trusted Digital Partner
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
            Engineering the Future of
            <span className="block mt-3 text-[#092D82]">
              Digital Enterprises
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
            We help businesses build scalable platforms, automate workflows,
            and leverage AI to stay ahead in a rapidly evolving digital world.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#092D82] text-white rounded-lg text-sm font-medium hover:bg-[#0b3ba8] transition shadow-md"
            >
              Get Started
            </a>

            <a
              href="#services"
              className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
            >
              View Capabilities
            </a>
          </div>

          {/* Trust Line */}
          <p className="mt-6 text-xs text-gray-500">
            Trusted by startups & growing businesses
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-[420px] h-[420px] rounded-3xl bg-white border border-gray-200 shadow-2xl overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF4FF]" />

            <div className="relative h-full flex flex-col items-center justify-center p-10">

              {/* SAP LOGO */}
              <div>
                <Image
                  src="/ERP.png"
                  alt="SAP"
                  width={440}
                  height={220}
                  priority
                  className="object-contain"
                />
              </div>

              {/* Divider */}
              <div className="w-24 h-[2px] bg-[#092D82]/15 rounded-full mt-2 mb-4" />

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#092D82] tracking-wide">
                SAP ERP Solutions
              </h3>

              

            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}