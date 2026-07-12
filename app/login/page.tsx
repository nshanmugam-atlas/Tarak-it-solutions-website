"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ParticleBackground from "@/components/ui/Particles";
import {
   
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
            redirectTo: `${window.location.origin}/reset-password`,
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
    <div className="relative min-h-screen bg-[#F5F8FC] text-[#111827] flex flex-col lg:flex-row overflow-hidden isolate">
<div className="absolute inset-0 -z-10">
  <ParticleBackground />
  </div>
       

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative z-10 overflow-hidden border-r border-slate-200">

        {/* GLOW */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#093080]/20 blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#093080]/20 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-center px-20">

          <div className="mb-10">

            <div className="mb-10">

  <div className="mb-8">
    <Image
      src="/LOGO.png"
      alt="Tarak IT Solutions"
      width={200}
      height={40}
      priority
      className="object-contain"
    />
  </div>

  <p className="text-[#093080] uppercase tracking-[0.4em] text-sm mb-5"></p>

              
      </div>

            <p className="text-[#093080] uppercase tracking-[0.4em] text-sm mb-5">

              TARAK IT SOLUTIONS

            </p>

            <h1 className="text-6xl font-bold leading-tight mb-6">

              Tarak
              <br />
              Admin Portal

            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-xl">

              Manage client enquiries,
              business leads, projects,
              and communications through
              a secure centralized system.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-6 max-w-lg">

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md">

              <h3 className="text-3xl font-bold text-[#093080] mb-2">
                24/7
              </h3>

              <p className="text-slate-500 text-sm">
                Secure access management
              </p>

            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md">

              <h3 className="text-3xl font-bold text-[#093080] mb-2">
                100%
              </h3>

              <p className="text-slate-500 text-sm">
                Protected authentication
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative z-20 flex-1 flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-10 shadow-xl">

            <div className="mb-10 text-center lg:text-left">

              <p className="text-[#093080] uppercase tracking-[0.3em] text-xs mb-4">

                ADMIN LOGIN

              </p>

              <h2 className="text-4xl font-bold mb-4">

                Welcome Back

              </h2>

              <p className="text-slate-500 leading-relaxed">

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

                <label className="text-sm text-slate-700 mb-2 block">

                  Email Address

                </label>

                <div className="flex items-center gap-3 bg-white border border-slate-300 rounded-2xl px-4 py-4">

                  <Mail className="w-5 h-5 text-[#093080]" />

                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="w-full border-b border-slate-300 bg-transparent py-3 outline-none focus:border-[#02A3F0] placeholder:text-slate-400"
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div>

                <label className="text-sm text-slate-700 mb-2 block">

                  Password

                </label>

                <div className="flex items-center gap-3 bg-white border border-slate-300 rounded-2xl px-4 py-4">

                  <KeyRound className="w-5 h-5 text-[#093080]" />

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
                    className="w-full bg-transparent outline-none placeholder:text-slate-400"
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
                      <EyeOff className="w-5 h-5 text-slate-500" />
                    ) : (
                      <Eye className="w-5 h-5 text-slate-500" />
                    )}

                  </button>

                </div>

              </div>

              {/* FORGOT PASSWORD */}
              {/* FORGOT PASSWORD */}
<div className="flex justify-end">
  <button
    type="button"
    onClick={handleForgotPassword}
    className="text-sm text-[#02A3F0] hover:underline"
  >
    Forgot Password?
  </button>
</div>

              {/* BUTTON */}
              <button
                onClick={handleLogin}
                disabled={loading}
                  className="w-full py-4 rounded-2xl bg-[#02A3F0] text-white font-semibold hover:bg-[#028ED1] transition duration-300 shadow-lg shadow-[#02A3F0]/20"
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