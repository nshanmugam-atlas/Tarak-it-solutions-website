"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Trash2,
  Mail,
  Briefcase,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
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

  // FETCH DATA
  const fetchEnquiries = async () => {
    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase Error:", error);
      return;
    }

    setEnquiries(data || []);
  };

  // LOAD
  useEffect(() => {
    const load = async () => {
      await fetchEnquiries();
    };

    load();
  }, []);

  // DELETE
  const deleteEnquiry = async (id: number) => {
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

          {/* TOTAL */}
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

            <p className="text-gray-400 mt-2 text-sm">
              Total customer enquiries
            </p>

          </div>

          {/* OPEN */}
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

            <p className="text-gray-400 mt-2 text-sm">
              Open leads awaiting response
            </p>

          </div>

          {/* REPLIED */}
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

            <p className="text-gray-400 mt-2 text-sm">
              Successfully replied enquiries
            </p>

          </div>

        </div>

        {/* EMPTY STATE */}
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

          /* ENQUIRIES */
          <div className="grid gap-6">

            {enquiries.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-300"
              >

                {/* TOP */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

                  {/* USER */}
                  <div>

                    <h2 className="text-2xl font-medium">
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

                    {/* SERVICE */}
                    <span className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 text-blue-300">
                      {item.service}
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
                      className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none"
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
                      className="p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition"
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