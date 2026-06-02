"use client";

import { useEffect, useState, useRef } from "react";
import {
  Trash2,
  Mail,
  Briefcase,
  CheckCircle2,
  Clock3,
  User,
  Moon,
  Sun,
  LogOut,
  Settings,
  Bell,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  HelpCircle,
} from "lucide-react";

import { useRouter } from "next/navigation";
import type { User as SupabaseUser } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase";

type Enquiry = {
  id: number;
  name: string;
  email: string;
  message: string;
  service: string;
  status: string;
  created_at: string;
};

type Theme = "dark" | "light";

export default function AdminPage() {
  const router = useRouter();

  // PREFETCH LOGIN PAGE
  useEffect(() => {
    router.prefetch("/login");
  }, [router]);

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [user, setUser] =
    useState<SupabaseUser | null>(null);

  const [checkingAuth, setCheckingAuth] =
    useState(true);

  // PROFILE MENU
  const [profileOpen, setProfileOpen] =
    useState(false);

  const profileRef =
    useRef<HTMLDivElement | null>(null);

  // THEME
  const [theme, setTheme] =
    useState<Theme>(() => {
      if (typeof window === "undefined")
        return "dark";

      return (
        (localStorage.getItem(
          "theme"
        ) as Theme) || "dark"
      );
    });

  // APPLY THEME
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  // CLOSE PROFILE MENU
  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(
          event.target as Node
        )
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // FETCH ENQUIRIES
  const fetchEnquiries = async () => {
    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(
        "Supabase Error:",
        error
      );

      return;
    }

    setEnquiries(data || []);
  };

  // ULTRA FAST AUTH CHECK
  useEffect(() => {
    const sessionData =
      localStorage.getItem(
        "sb-uccpqshlpoxwuozcfmve-auth-token"
      );

    // INSTANT REDIRECT
    if (!sessionData) {
      router.replace("/login");
      return;
    }

    const loadUser = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          router.replace("/login");
          return;
        }

        setUser(session.user);

        fetchEnquiries();
      } catch (error) {
        console.error(error);
        router.replace("/login");
      } finally {
        setCheckingAuth(false);
      }
    };

    loadUser();
  }, [router]);

  // DELETE
  const deleteEnquiry = async (
    id: number
  ) => {
    const { error } = await supabase
      .from("enquiries")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    fetchEnquiries();
  };

  // UPDATE STATUS
  const updateStatus = async (
    id: number,
    status: string
  ) => {
    const { error } = await supabase
      .from("enquiries")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    fetchEnquiries();
  };

  // ULTRA FAST LOGOUT
  const logout = async () => {
    // INSTANT NAVIGATION
    router.replace("/login");

    // CLEAR SESSION IN BACKGROUND
    setTimeout(async () => {
      await supabase.auth.signOut();
    }, 0);
  };

  // LOADING SCREEN
  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#070B14] flex items-center justify-center text-white">

        <div className="text-center">

          <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />

          <p className="text-gray-400">
            Loading Dashboard...
          </p>

        </div>

      </div>
    );
  }

  const openCount = enquiries.filter(
    (item) => item.status !== "Replied"
  ).length;

  const repliedCount = enquiries.filter(
    (item) => item.status === "Replied"
  ).length;

  return (
    <div className="min-h-screen bg-[#070B14] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-3xl rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      {/* PROFILE */}
      <div
        ref={profileRef}
        className="absolute top-6 right-6 z-50"
      >

        <button
          onClick={() =>
            setProfileOpen(!profileOpen)
          }
          className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-3 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
        >

          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>

          <div className="hidden md:block text-left">
            <p className="text-sm font-medium">
              Admin
            </p>

            <p className="text-xs text-gray-400 max-w-[140px] truncate">
              {user?.email}
            </p>
          </div>

          <ChevronDown className="w-4 h-4 text-gray-400" />

        </button>

        {/* DROPDOWN */}
        {profileOpen && (
          <div className="absolute right-0 mt-4 w-72 bg-[#0D1320]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

            {/* USER INFO */}
            <div className="p-5 border-b border-white/10">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="font-medium">
                    Tarak Admin
                  </h3>

                  <p className="text-sm text-gray-400">
                    {user?.email}
                  </p>
                </div>

              </div>

            </div>

            {/* MENU */}
            <div className="p-3">

              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition text-left"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-400" />
                )}

                <span>
                  Switch to{" "}
                  {theme === "dark"
                    ? "Light"
                    : "Dark"}{" "}
                  Mode
                </span>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition text-left">
                <Settings className="w-5 h-5 text-gray-300" />
                <span>Settings</span>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition text-left">
                <Bell className="w-5 h-5 text-cyan-400" />
                <span>Notifications</span>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition text-left">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span>Security</span>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition text-left">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>AI Insights</span>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition text-left">
                <HelpCircle className="w-5 h-5 text-orange-400" />
                <span>Help Center</span>
              </button>

              <div className="h-px bg-white/10 my-3" />

              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-red-500/10 transition text-left text-red-400"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>

            </div>

          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="mb-12">

          <p className="text-blue-400 text-sm tracking-[0.25em] uppercase mb-4">
            Tarak IT Solutions
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Client Enquiry Dashboard
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Monitor, manage, and respond to client enquiries
            from your AI-powered business website.
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-blue-500/10">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>

              <span className="text-xs text-gray-400">
                Total
              </span>
            </div>

            <h2 className="text-4xl font-semibold">
              {enquiries.length}
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-yellow-500/10">
                <Clock3 className="w-6 h-6 text-yellow-400" />
              </div>

              <span className="text-xs text-gray-400">
                Pending
              </span>
            </div>

            <h2 className="text-4xl font-semibold text-yellow-400">
              {openCount}
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-green-500/10">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>

              <span className="text-xs text-gray-400">
                Completed
              </span>
            </div>

            <h2 className="text-4xl font-semibold text-green-400">
              {repliedCount}
            </h2>
          </div>

        </div>

        {/* EMPTY */}
        {enquiries.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-xl">

            <h2 className="text-3xl font-medium mb-4">
              No Enquiries Yet
            </h2>

            <p className="text-gray-400 max-w-lg mx-auto">
              Customer enquiries submitted through your chatbot
              or contact form will appear here.
            </p>

          </div>
        ) : (
          <div className="grid gap-6">

            {enquiries.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-300"
              >

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

                  <div>
                    <h2 className="text-2xl font-medium">
                      {item.name}
                    </h2>

                    <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                      <Mail className="w-4 h-4" />
                      <span>{item.email}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">

                    <span className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 text-blue-300">
                      {item.service}
                    </span>

                    <select
                      value={item.status || "Open"}
                      onChange={(e) =>
                        updateStatus(
                          item.id,
                          e.target.value
                        )
                      }
                      className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none"
                    >
                      <option value="Open">
                        Open
                      </option>

                      <option value="Replied">
                        Replied
                      </option>
                    </select>

                    <button
                      onClick={() =>
                        deleteEnquiry(item.id)
                      }
                      className="p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>

                  </div>

                </div>

                <div className="bg-black/20 border border-white/5 rounded-2xl p-5">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {item.message}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between flex-wrap gap-4">

                  <p className="text-xs text-gray-500">
                    {new Date(
                      item.created_at
                    ).toLocaleString()}
                  </p>

                  <a
                    href={`mailto:${item.email}`}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-sm hover:opacity-90 transition"
                  >
                    Reply to Client
                  </a>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}