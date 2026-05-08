"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chat Application",
    description: "Multilingual AI chat platform with real-time streaming responses.",
    tags: ["Next.js", "AI", "Groq"],
  },
  {
    title: "Business Website",
    description: "Modern responsive website for a service-based company.",
    tags: ["React", "Tailwind", "SEO"],
  },
  {
    title: "Automation Dashboard",
    description: "Custom dashboard to manage workflows and analytics.",
    tags: ["Dashboard", "API", "Automation"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black text-white px-6 md:px-16">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Our Work
        </h2>
        <p className="text-gray-400 mt-4">
          A glimpse of what we’ve built for modern businesses
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-white/30 transition"
          >
            
            {/* Image Placeholder */}
            <div className="h-40 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-6" />

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-white/10 border border-white/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Case Study</span>
              <button className="text-sm text-blue-400 hover:underline">
                View →
              </button>
            </div>

          </motion.div>
        ))}

      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          Start Your Project
        </a>
      </div>

    </section>
  );
}