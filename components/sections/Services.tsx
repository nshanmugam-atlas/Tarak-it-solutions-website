"use client";

import { motion } from "framer-motion";
import { Code, Cloud, ShieldCheck, Cpu } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "Scalable, high-performance applications tailored to your business needs.",
  },
  {
    icon: Cloud,
    title: "ERP Solutions",
    desc: "Modern cloud architecture, migration, and optimization for efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "SAP & Security Solutions",
    desc: "End-to-end security solutions to protect your systems and data.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "Leverage AI-driven solutions to automate and scale operations.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-[#F8FAFC] overflow-hidden">

      {/* Premium Blue Background Glow */}
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
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            We deliver cutting-edge technology solutions designed to
            help your business grow, innovate, and scale efficiently.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#092D82]/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#092D82]/10 mb-5">
                  <Icon className="w-7 h-7 text-[#092D82]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-12 bg-[#092D82] rounded-full group-hover:w-20 transition-all duration-300" />
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}