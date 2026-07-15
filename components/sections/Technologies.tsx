"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    name: "SAP",
    logo: "/tech/SAP logo.png",
    description: "Enterprise Business Suite",
  },
  {
    name: "SAP Ariba",
    logo: "/tech/ARIBA logo.png",
    description: "Procurement & Supply Chain",
  },
  {
    name: "ERP Solutions",
    logo: "/tech/ERP logo.png",
    description: "Enterprise Resource Planning",
  },
  {
    name: "Next.js",
    logo: "/tech/Next logo.png",
    description: "Modern React Framework",
  },
];

export default function Technologies() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 px-6 md:px-16">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#093080]/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#02A3F0]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-block rounded-full border border-[#02A3F0]/20 bg-[#02A3F0]/10 px-5 py-2 text-sm font-semibold text-[#02A3F0]">
            Trusted Technologies
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-[#093080]">
            Our Technology Expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We specialize in enterprise platforms and modern development
            frameworks to build secure, scalable, and future-ready digital
            solutions for businesses of all sizes.
          </p>

        </motion.div>

        {/* Technology Cards */}

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {technologies.map((tech, index) => (

            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md transition-all duration-500 hover:border-[#02A3F0]/40 hover:bg-gradient-to-b hover:from-white hover:to-[#F3F8FF] hover:shadow-2xl"
            >

              {/* Logo */}

              <div className="mb-7 flex h-22 w-22 items-center justify-center rounded-3xl bg-[#F8FAFC] transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">

                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={68}
                  height={68}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />

              </div>

              {/* Name */}

              <h3 className="text-2xl font-bold text-[#093080]">
                {tech.name}
              </h3>

              {/* Description */}

              <p className="mt-4 min-h-[50px] text-sm leading-7 text-gray-600">
                {tech.description}
              </p>

              {/* Accent */}

              <div className="mt-7 h-1 w-12 rounded-full bg-[#093080] transition-all duration-300 group-hover:w-24 group-hover:bg-[#02A3F0]" />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}