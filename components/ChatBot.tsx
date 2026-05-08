"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Send,
  X,
  RefreshCw,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

type Message = {
  role: "bot" | "user";
  text: string;
};

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text:
        "Welcome to Tarak IT Solutions ✨\n\nWe help businesses build modern websites, AI solutions, cloud systems, and digital platforms.\n\nTell us what you're looking for — we're here to help.",
    },
  ]);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [step, setStep] = useState<
    "welcome" | "askName" | "askEmail" | "chat"
  >("welcome");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const resetChat = () => {
    setMessages([
      {
        role: "bot",
        text:
          "Welcome to Tarak IT Solutions ✨\n\nWe help businesses build modern websites, AI solutions, cloud systems, and digital platforms.\n\nTell us what you're looking for — we're here to help.",
      },
    ]);

    setInput("");
    setUserName("");
    setUserEmail("");
    setStep("welcome");
  };

  const addBotMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        text,
      },
    ]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    // USER MESSAGE
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");

    // STEP 1
    if (step === "welcome") {
      setTimeout(() => {
        addBotMessage(
          "Great ✨ Before we continue, may I know your name?"
        );

        setStep("askName");
      }, 900);

      return;
    }

    // STEP 2
    if (step === "askName") {
      setUserName(userMessage);

      setTimeout(() => {
        addBotMessage(
          `Nice to meet you ${userMessage} 😊\n\nPlease share your email address so our team can contact you.`
        );

        setStep("askEmail");
      }, 900);

      return;
    }

    // STEP 3
    if (step === "askEmail") {
      setUserEmail(userMessage);

      setTimeout(() => {
        addBotMessage(
          "Perfect ✅\n\nNow tell us about the service or requirement you're looking for."
        );

        setStep("chat");
      }, 900);

      return;
    }

    // MAIN CHAT
    if (step === "chat") {
      let response =
        "Thank you ✨ Our team received your enquiry and will contact you shortly.";

      const lower = userMessage.toLowerCase();

      let service = "General Enquiry";

      // WEBSITE
      if (
        lower.includes("website") ||
        lower.includes("web development")
      ) {
        service = "Website Development";

        response =
          "We build premium modern websites with fast performance, responsive UI, SEO optimization, and scalable architecture tailored for businesses 🚀";
      }

      // MOBILE APP
      else if (
        lower.includes("app") ||
        lower.includes("mobile")
      ) {
        service = "Mobile App Development";

        response =
          "We develop Android, iOS, and cross-platform mobile applications with premium UI/UX and scalable backend systems 📱";
      }

      // AI
      else if (
        lower.includes("ai") ||
        lower.includes("chatbot")
      ) {
        service = "AI Solutions";

        response =
          "We provide AI-powered solutions including chatbots, automation systems, smart business assistants, and AI integrations 🤖";
      }

      // CLOUD
      else if (
        lower.includes("cloud") ||
        lower.includes("aws") ||
        lower.includes("azure")
      ) {
        service = "Cloud Solutions";

        response =
          "Our cloud solutions help businesses scale securely using AWS, Azure, DevOps pipelines, infrastructure automation, and monitoring ☁️";
      }

      // UI UX
      else if (
        lower.includes("ui") ||
        lower.includes("design")
      ) {
        service = "UI/UX Design";

        response =
          "We create premium UI/UX designs focused on modern aesthetics, user experience, animations, and conversion optimization 🎨";
      }

      // BOT REPLY
      setTimeout(() => {
        addBotMessage(response);
      }, 900);

      // SAVE TO SUPABASE
      const { error } = await supabase
        .from("enquiries")
        .insert([
          {
            name: userName,
            email: userEmail,
            message: userMessage,
            service: service,
          },
        ]);

      if (error) {
        console.error("Supabase Error:", error);
      } else {
        console.log("Enquiry Saved Successfully");
      }

      // FINAL BOT MESSAGE
      setTimeout(() => {
        addBotMessage(
          "Your enquiry has been securely submitted to our team ✅"
        );
      }, 2500);

      // WHATSAPP + EMAIL REDIRECT
      setTimeout(() => {
        const finalMessage = `
New Enquiry from Tarak IT Solutions Website

Name: ${userName}
Email: ${userEmail}

Service:
${service}

Requirement:
${userMessage}
        `;

        // WHATSAPP
        window.open(
          `https://wa.me/918123615206?text=${encodeURIComponent(
            finalMessage
          )}`,
          "_blank"
        );

        // EMAIL
        window.location.href = `mailto:tarakitsolutions@gmail.com?subject=New ${service} Enquiry from ${userName}&body=${encodeURIComponent(
          finalMessage
        )}`;
      }, 5000);
    }
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Bot className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[320px] h-[480px] bg-[#0f1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Tarak AI Assistant
                  </h3>

                  <p className="text-xs text-green-400">
                    Online
                  </p>
                </div>
              </div>

              {/* RESET BUTTON */}
              <button
                onClick={resetChat}
                className="p-2 rounded-lg hover:bg-white/10 transition"
              >
                <RefreshCw className="w-4 h-4 text-gray-300" />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="h-[350px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm"
                        : "bg-white/5 border border-white/10 text-gray-200 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-white/10 bg-[#0f1117]">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                />

                <button
                  onClick={handleSend}
                  className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}