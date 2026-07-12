"use client";

import { supabase } from "@/lib/supabase";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Stats from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8FAFC] text-slate-900 overflow-hidden min-h-screen">
        
        {/* HERO */}
        <section
          id="hero"
          className="scroll-mt-28"
        >
          <Hero />
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-28"
        >
          <Services />
        </section>

        {/* PORTFOLIO */}
        <section
          id="portfolio"
          className="scroll-mt-28"
        >
          <Portfolio />
        </section>

        {/* STATS */}
        <section
          id="stats"
          className="scroll-mt-28"
        >
          <Stats />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-28"
        >
          <Contact />
        </section>

        <Footer />
        <ChatBot />
      </main>
    </>
  );
}