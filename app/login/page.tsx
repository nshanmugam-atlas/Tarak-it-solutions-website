"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  ShieldCheck,
  Mail,
  KeyRound,
  Loader2,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  // LOGIN
  const handleLogin = async () => {
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage(
        "Please enter email and password."
      );
      return;
    }

    try {
      setLoading(true);

      const { error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
        return;
      }

      router.push("/admin");

    } catch {
      setErrorMessage(
        "Something went wrong."
      );

      setLoading(false);
    }
  };

  // FORGOT PASSWORD
  const handleForgotPassword =
    async () => {
      if (!email) {
        setErrorMessage(
          "Enter your email first."
        );
        return;
      }

      const { error } =
        await supabase.auth.resetPasswordForEmail(
          email,
          {
            redirectTo:
              "http://localhost:3000/admin/login",
          }
        );

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      alert(
        "Password reset link sent."
      );
    };

  return (
    <div className="min-h-screen bg-[#040816] text-white flex flex-col lg:flex-row">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden border-r border-white/10">

        {/* GLOW */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-center px-20">

          <div className="mb-10">

            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 flex items-center justify-center shadow-2xl mb-8">

              <ShieldCheck className="w-12 h-12 text-white" />

            </div>

            <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm mb-5">

              TARAK IT SOLUTIONS

            </p>

            <h1 className="text-6xl font-bold leading-tight mb-6">

              Tarak
              <br />
              Admin Portal

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">

              Manage client enquiries,
              business leads, projects,
              and communications through
              a secure centralized system.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-6 max-w-lg">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                24/7
              </h3>

              <p className="text-gray-400 text-sm">
                Secure access management
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <h3 className="text-3xl font-bold text-purple-400 mb-2">
                100%
              </h3>

              <p className="text-gray-400 text-sm">
                Protected authentication
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          <div className="bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-2xl p-8 md:p-10 shadow-2xl">

            <div className="mb-10 text-center lg:text-left">

              <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-4">

                ADMIN LOGIN

              </p>

              <h2 className="text-4xl font-bold mb-4">

                Welcome Back

              </h2>

              <p className="text-gray-400 leading-relaxed">

                Sign in to continue to your
                admin dashboard.

              </p>

            </div>

            {/* ERROR */}
            {errorMessage && (
              <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">

                {errorMessage}

              </div>
            )}

            <div className="space-y-5">

              {/* EMAIL */}
              <div>

                <label className="text-sm text-gray-300 mb-2 block">

                  Email Address

                </label>

                <div className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-2xl px-4 py-4">

                  <Mail className="w-5 h-5 text-cyan-400" />

                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="w-full bg-transparent outline-none placeholder:text-gray-500"
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div>

                <label className="text-sm text-gray-300 mb-2 block">

                  Password

                </label>

                <div className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-2xl px-4 py-4">

                  <KeyRound className="w-5 h-5 text-purple-400" />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                    className="w-full bg-transparent outline-none placeholder:text-gray-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >

                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}

                  </button>

                </div>

              </div>

              {/* FORGOT PASSWORD */}
              <div className="flex justify-end">

                <button
                  onClick={
                    handleForgotPassword
                  }
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition"
                >
                  Forgot Password?
                </button>

              </div>

              {/* BUTTON */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 font-semibold hover:opacity-90 transition"
              >

                <span className="flex items-center justify-center gap-3">

                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    <>
                      Access Dashboard
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}

                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}