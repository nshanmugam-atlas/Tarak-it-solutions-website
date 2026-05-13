"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Trash2,
  Mail,
  Briefcase,
  CheckCircle2,
  Clock3,
  RefreshCw,
} from "lucide-react";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

type Enquiry = {
  id: number;
  name: string;
  email: string;
  message: string;
  service: string;
  status: string;
  created_at: string;
};

export default function AdminPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  // FETCH ENQUIRIES
  const fetchEnquiries = async () => {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Missing Supabase environment variables");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase Error:", error);
        return;
      }

      setEnquiries(data || []);
    } catch (err) {
      console.error("Unexpected Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // INITIAL LOAD
  useEffect(() => {
    setTimeout(() => {
      fetchEnquiries();
    }, 0);
  }, []);

  // REFRESH
  const refreshEnquiries = async () => {
    setLoading(true);
    await fetchEnquiries();
  };

  // DELETE ENQUIRY
  const deleteEnquiry = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("enquiries")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    setEnquiries((prev) =>
      prev.filter((item) => item.id !== id)
    );
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

    setEnquiries((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status }
          : item
      )
    );
  };

  // STATS
  const openCount = enquiries.filter(
    (item) => item.status !== "Replied"
  ).length;

  const repliedCount = enquiries.filter(
    (item) => item.status === "Replied"
  ).length;

  // ENV ERROR
  if (!supabaseUrl || !supabaseAnonKey) {
    return (
      <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center p-8">
        <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-8 max-w-xl text-center">
          <h1 className="text-2xl font-semibold mb-4 text-red-400">
            Missing Environment Variables
          </h1>

          <p className="text-gray-300 leading-relaxed">
            Please add your Supabase credentials in
            <span className="text-blue-400">
              {" "}
              .env.local
            </span>
            {" "}or Vercel Environment Variables.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-600/10 blur-3xl rounded-full" />

        <div className="absolute bottom-[-200px] right-[-150px] w-[450px] h-[450px] bg-purple-600/10 blur-3xl rounded-full" />

        <div className="absolute top-[30%] left-[40%] w-[250px] h-[250px] bg-cyan-500/5 blur-3xl rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

          <div>

            <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4">
              Tarak IT Solutions
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Client Enquiry Dashboard
            </h1>

            <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
              Manage customer enquiries, monitor leads,
              and track client communication from one place.
            </p>

          </div>

          {/* REFRESH */}
          <button
            onClick={refreshEnquiries}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 rounded-2xl transition"
          >
            <RefreshCw
              className={`w-4 h-4 ${
                loading ? "animate-spin" : ""
              }`}
            />

            Refresh

          </button>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* TOTAL */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <div className="flex items-center justify-between mb-5">

              <div className="p-3 rounded-2xl bg-blue-500/10">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>

              <span className="text-xs text-gray-400">
                TOTAL
              </span>

            </div>

            <h2 className="text-4xl font-bold">
              {enquiries.length}
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Total enquiries received
            </p>

          </div>

          {/* OPEN */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <div className="flex items-center justify-between mb-5">

              <div className="p-3 rounded-2xl bg-yellow-500/10">
                <Clock3 className="w-6 h-6 text-yellow-400" />
              </div>

              <span className="text-xs text-gray-400">
                OPEN
              </span>

            </div>

            <h2 className="text-4xl font-bold text-yellow-400">
              {openCount}
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Awaiting response
            </p>

          </div>

          {/* REPLIED */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <div className="flex items-center justify-between mb-5">

              <div className="p-3 rounded-2xl bg-green-500/10">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>

              <span className="text-xs text-gray-400">
                REPLIED
              </span>

            </div>

            <h2 className="text-4xl font-bold text-green-400">
              {repliedCount}
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Completed conversations
            </p>

          </div>

        </div>

        {/* LOADING */}
        {loading ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-16 text-center backdrop-blur-xl">

            <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-5" />

            <p className="text-gray-400">
              Loading enquiries...
            </p>

          </div>
        ) : enquiries.length === 0 ? (

          /* EMPTY */
          <div className="bg-white/5 border border-white/10 rounded-3xl p-14 text-center backdrop-blur-xl">

            <h2 className="text-3xl font-semibold mb-4">
              No Enquiries Yet
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              Client enquiries submitted through your website
              chatbot will appear here.
            </p>

          </div>

        ) : (

          /* ENQUIRIES */
          <div className="grid gap-6">

            {enquiries.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-blue-500/20 transition-all duration-300"
              >

                {/* TOP */}
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mb-6">

                  {/* USER */}
                  <div>

                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>

                    <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">

                      <Mail className="w-4 h-4" />

                      <span>
                        {item.email}
                      </span>

                    </div>

                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-3 flex-wrap">

                    <span className="px-4 py-2 rounded-full text-sm border border-blue-500/20 bg-blue-500/10 text-blue-300">
                      {item.service || "General"}
                    </span>

                    {/* STATUS */}
                    <select
                      value={item.status || "Open"}
                      onChange={(e) =>
                        updateStatus(
                          item.id,
                          e.target.value
                        )
                      }
                      className={`px-4 py-2 rounded-xl text-sm border outline-none transition ${
                        item.status === "Replied"
                          ? "bg-green-500/10 border-green-500/20 text-green-300"
                          : "bg-yellow-500/10 border-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      <option value="Open">
                        Open
                      </option>

                      <option value="Replied">
                        Replied
                      </option>

                    </select>

                    {/* DELETE */}
                    <button
                      onClick={() =>
                        deleteEnquiry(item.id)
                      }
                      className="p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/10 transition"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>

                  </div>

                </div>

                {/* MESSAGE */}
                <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {item.message}
                  </p>

                </div>

                {/* FOOTER */}
                <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <p className="text-xs text-gray-500">
                    {new Date(
                      item.created_at
                    ).toLocaleString()}
                  </p>

                  <a
                    href={`mailto:${item.email}`}
                    className="w-fit px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition text-sm font-medium"
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