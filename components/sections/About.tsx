"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-black to-slate-900">

      {/* Background glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] top-0 left-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] bottom-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We deliver scalable, enterprise-grade digital solutions for global businesses.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-3xl font-semibold mb-6">
              Transforming Businesses Digitally
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Tarak IT Solutions helps organizations modernize their infrastructure,
              build scalable applications, and leverage AI to stay competitive.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <Stat number="120+" label="Projects" />
              <Stat number="80+" label="Clients" />
              <Stat number="5+" label="Years" />
              <Stat number="10+" label="Awards" />
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              Deliver innovative technology solutions that drive measurable impact.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h3>
            <p className="text-gray-400">
              Become a global leader in enterprise digital transformation.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <h4 className="text-3xl font-bold text-blue-500">{number}</h4>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}