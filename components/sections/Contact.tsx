"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import React, { useState } from "react";

type FormType = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, message } = form;

    // ✅ Basic validation
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    // 📧 Email redirect
    const mailto = `mailto:tarakitsolutions@gmail.com?subject=New Enquiry from ${encodeURIComponent(
      name
    )}&body=Name: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(
      email
    )}%0AMessage: ${encodeURIComponent(message)}`;

    // 💬 WhatsApp redirect
    const whatsapp = `https://wa.me/918123615206?text=New Enquiry:%0AName: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(
      email
    )}%0AMessage: ${encodeURIComponent(message)}`;

    window.open(mailto, "_blank");
    window.open(whatsapp, "_blank");

    // ✅ Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-24 px-6 md:px-16 bg-[#0a0a0a] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[350px] h-[350px] bg-purple-600/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 max-w-md">
            Have a project in mind? Fill out the form and we’ll get back to you instantly via email and WhatsApp.
          </p>

          <div className="space-y-4 mt-6">

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-600/20">
                <Mail className="text-blue-400 w-5 h-5" />
              </div>
              <span className="text-gray-300 text-sm">
                tarakitsolutions@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-600/20">
                <Phone className="text-purple-400 w-5 h-5" />
              </div>
              <span className="text-gray-300 text-sm">
                +91 **********
              </span>
            </div>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl"
        >
          <div className="space-y-4">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-sm"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-sm"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-sm"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition shadow-lg shadow-blue-500/20"
            >
              Send Message
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}