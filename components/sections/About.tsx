"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-[#F4F8FF] to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-[#092D82]/10 blur-[140px] top-0 left-0" />
      <div className="absolute w-[450px] h-[450px] bg-[#092D82]/10 blur-[140px] bottom-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#092D82]">
            About Tarak IT Solutions
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Delivering innovative digital solutions that empower
            businesses to grow, automate operations, and stay ahead
            in a rapidly evolving technological world.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-[#092D82]">
              Transforming Businesses Through Technology
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              Tarak IT Solutions specializes in enterprise software,
              AI-powered applications, web development, SAP solutions,
              and digital transformation services. We help organizations
              streamline operations, improve efficiency, and unlock new
              growth opportunities through innovative technology.
            </p>

            <div className="grid grid-cols-2 gap-5">

              <Stat number="10+" label="Projects Delivered" />

              <Stat number="100%" label="Client Focused" />

              <Stat number="24/7" label="Support Available" />

              <Stat number="AI" label="Powered Solutions" />

            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-white to-[#F4F8FF] border border-[#C9D6F2] p-7 rounded-3xl shadow-xl max-w-md mx-auto"
          >

            {/* Accent Line */}
            <div className="w-16 h-1 bg-[#092D82] rounded-full mb-6" />

            <h3 className="text-2xl font-semibold mb-4 text-[#092D82]">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Deliver secure, scalable, and innovative technology
              solutions that help businesses{" "}
              <span className="font-semibold text-[#092D82]">
                automate processes
              </span>
              , improve productivity, and achieve measurable results.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-[#092D82]">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To become a trusted global technology partner delivering
              world-class{" "}
              <span className="font-semibold text-[#092D82]">
                digital transformation
              </span>
              , enterprise solutions, and future-ready innovation.
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="bg-gradient-to-br from-white to-[#F4F8FF] border border-[#C9D6F2] rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300">

      <h4 className="text-3xl font-bold text-[#092D82]">
        {number}
      </h4>

      <p className="text-gray-500 mt-1">
        {label}
      </p>

    </div>
  );
}