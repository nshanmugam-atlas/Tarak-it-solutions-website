"use client";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ui/Particles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden bg-black text-white">

      {/* 🔥 Particle Background */}
      <ParticleBackground />

      {/* 🔥 Gradient Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />
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
          <div className="inline-block mb-6 px-4 py-1 text-xs bg-white/10 border border-white/20 rounded-full backdrop-blur">
            🚀 Trusted Digital Partner
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Engineering the Future of
            <span className="block mt-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Digital Enterprises
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
            We help businesses build scalable platforms, automate workflows,
            and leverage AI to stay ahead in a rapidly evolving digital world.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-medium hover:opacity-90 transition shadow-lg"
            >
              Get Started
            </a>

            <a
              href="#services"
              className="px-6 py-3 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/10 transition"
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
          <div className="relative w-[420px] h-[420px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">

            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

            {/* Animated Highlight */}
            <div className="absolute inset-0 animate-pulse bg-white/5 opacity-20" />

            {/* Content Placeholder */}
            <div className="relative h-full flex items-center justify-center text-gray-400 text-sm">
              Your Product / Dashboard Preview
            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}