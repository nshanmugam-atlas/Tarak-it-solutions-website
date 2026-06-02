"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Globe,
  BarChart3,
} from "lucide-react";

const projects = [
  {
    title: "AI Chat Application",
    description:
      "Multilingual AI chat platform with real-time streaming responses.",
    tags: ["Next.js", "AI", "Groq"],
    icon: Bot,
  },
  {
    title: "Business Website",
    description:
      "Modern responsive website for a service-based company.",
    tags: ["React", "Tailwind", "SEO"],
    icon: Globe,
  },
  {
    title: "Automation Dashboard",
    description:
      "Custom dashboard to manage workflows and analytics.",
    tags: ["Dashboard", "API", "Automation"],
    icon: BarChart3,
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-[#F8FAFC] px-6 md:px-16"
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">

        <span className="inline-block px-4 py-2 rounded-full bg-[#092D82]/10 text-[#092D82] text-sm font-medium mb-5">
          Our Portfolio
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#092D82] tracking-tight">
          Our Work
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Delivering innovative digital solutions that help
          businesses grow, automate, and transform.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Preview */}
              <div className="h-44 rounded-2xl bg-gradient-to-br from-[#F4F8FF] to-white border border-[#092D82]/10 flex items-center justify-center mb-6">

                <div className="w-20 h-20 rounded-2xl bg-[#092D82]/10 flex items-center justify-center group-hover:scale-110 transition duration-300">

                  <Icon
                    className="w-10 h-10 text-[#092D82]"
                    strokeWidth={1.8}
                  />

                </div>

              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#092D82] transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#092D82]/10 text-[#092D82] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">

                <span className="text-xs text-gray-500">
                  Project Showcase
                </span>

                <button className="text-sm font-medium text-[#092D82] hover:underline">
                  View →
                </button>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* CTA */}
      <div className="text-center mt-16">

        <a
          href="#contact"
          className="inline-flex items-center px-7 py-3 rounded-xl bg-[#092D82] text-white font-medium hover:bg-[#0B3AAB] transition shadow-lg"
        >
          Start Your Project
        </a>

      </div>
    </section>
  );
}