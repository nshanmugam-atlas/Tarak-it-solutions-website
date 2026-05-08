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
    <section className="relative py-24 px-6 md:px-16 bg-[#0a0a0a] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[350px] h-[350px] bg-purple-600/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
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
            Our Services
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            We deliver cutting-edge solutions designed to help your business grow and scale.
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
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition"
              >
                {/* Glow Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition" />

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/20 mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {service.desc}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}