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

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const mailto = `mailto:tarakitsolutions@gmail.com?subject=New Enquiry from ${encodeURIComponent(
      name
    )}&body=Name: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(
      email
    )}%0AMessage: ${encodeURIComponent(message)}`;

    const whatsapp = `https://wa.me/918123615206?text=New Enquiry:%0AName: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(
      email
    )}%0AMessage: ${encodeURIComponent(message)}`;

    window.open(mailto, "_blank");
    window.open(whatsapp, "_blank");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#092D82]/10 text-[#092D82] text-sm font-medium">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#092D82] leading-tight">
            Let&apos;s Build Something Amazing Together
          </h2>

          <p className="text-gray-600 text-lg max-w-lg">
            Have a project in mind? We&apos;d love to hear about it.
            Reach out and our team will get back to you as soon as possible.
          </p>

          <div className="space-y-5 pt-4">

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#092D82]/10">
                <Mail className="w-5 h-5 text-[#092D82]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-medium text-gray-800">
                  tarakitsolutions@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#092D82]/10">
                <Phone className="w-5 h-5 text-[#092D82]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="font-medium text-gray-800">
                  +91 8838178553
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg"
        >
          <div className="space-y-5">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:border-[#092D82] focus:ring-2 focus:ring-[#092D82]/20 outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:border-[#092D82] focus:ring-2 focus:ring-[#092D82]/20 outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:border-[#092D82] focus:ring-2 focus:ring-[#092D82]/20 outline-none"
            />

            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-xl bg-[#092D82] text-white font-medium hover:bg-[#0B389F] transition"
            >
              Send Message
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}