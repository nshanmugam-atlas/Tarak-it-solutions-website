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
    <section className="relative py-24 px-6 md:px-16 bg-[#F8FAFC] overflow-hidden">

      {/* Premium Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-[#092D82]/5 blur-3xl rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-[#092D82]/5 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#092D82]">
            Our Impact in Numbers
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Delivering measurable results, building long-term partnerships,
            and helping businesses achieve sustainable growth.
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
              className="group bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:border-[#092D82]/30 transition-all duration-300"
            >
              {/* Number */}
              <h3 className="text-4xl md:text-5xl font-bold text-[#092D82]">
                {stat.number}
              </h3>

              {/* Label */}
              <p className="mt-3 text-gray-600 text-sm font-medium">
                {stat.label}
              </p>

              {/* Accent Line */}
              <div className="mt-5 mx-auto h-1 w-12 bg-[#092D82] rounded-full group-hover:w-20 transition-all duration-300" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}