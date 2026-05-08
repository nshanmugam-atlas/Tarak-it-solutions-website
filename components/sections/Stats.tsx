"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "20+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-3xl rounded-full top-0 left-0" />
        <div className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-3xl rounded-full bottom-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Delivering measurable results and building long-term partnerships.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:border-blue-500/40 transition"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition" />

              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stat.number}
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}