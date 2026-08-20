"use client";

import { useState } from "react";
import Link from "next/link";
import LearningPhilosophy from "./LearningPhilosophy";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const steps = ["Read", "Understand", "Write", "Practice", "Teach"];

  const handleCopyCode = () => {
    const codeSnippet = `learn().then(build).then(share).then(inspire);`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 max-w-7xl py-10 sm:py-15 lg:py-20 px-4 lg:px-10  selection:bg-emerald-500 selection:text-slate-950">
      {/* Dynamic Background Effects */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="absolute top-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-[120px] sm:w-[700px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/*Status Badge & Interactive Philosophy Pipeline */}
      <div className="flex justify-center flex-col items-center gap-4 ">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Learn • Practice • Teach
        </div>

        <LearningPhilosophy />
      </div>

      <div className="relative mx-auto ">
        <div className="grid  gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ================= LEFT CONTENT (7 Cols) ================= */}
          <div className=" lg:col-span-7 lg:text-left">
            {/* Main Title */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white lg:text-[50px] lg:leading-[1.15]">
              Learn Programming.{" "}
              <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Build with Confidence.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
              Programming শেখাকে সহজ, practical এবং approachable করার উদ্দেশ্যে
              তৈরি একটি learning platform। এখানে আমরা শিখি, বুঝি, লিখি, practice
              করি এবং অন্যদের শেখাই।
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-emerald-500 px-8 py-2 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-500/30 active:scale-95"
              >
                <span>Start Learning</span>
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 px-8 py-2 font-semibold text-slate-300 transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/80 hover:text-white active:scale-95"
              >
                Our Mission
              </Link>
            </div>
          </div>

          {/* ================= RIGHT TERMINAL CARD (5 Cols) ================= */}
          <div className="relative lg:col-span-5">
            {/* Background Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl opacity-75" />

            {/* Main Terminal Shell */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/60 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs font-medium text-slate-500">
                  devAcademy.md
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 space-y-6">
                {/* Section 1 */}
                <div className="border-l-2 border-emerald-500/50 pl-4 transition-colors hover:border-emerald-400">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    // Philosophy
                  </span>
                  <p className="mt-1 text-base font-semibold leading-relaxed text-slate-100 italic">
                    “Learning becomes more powerful when you share what you
                    learn.”
                  </p>
                </div>

                {/* Section 2 */}
                <div className="border-l-2 border-cyan-500/50 pl-4 transition-colors hover:border-cyan-400">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-cyan-400">
                    // My Mission
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    I learn to understand, write to remember, practice to
                    improve, and teach to inspire.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="border-l-2 border-teal-500/50 pl-4 transition-colors hover:border-teal-400">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-teal-400">
                    // My Goal
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    To demystify programming by making it simple, practical, and
                    approachable—empowering newcomers to build with confidence
                    and keep learning without fear.
                  </p>
                </div>
              </div>

              {/* Terminal Interactive Footer Bar */}
              <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-950/60 px-5 py-3.5">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 overflow-x-auto">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span className="text-slate-300">learn()</span>
                  <span className="text-slate-600">→</span>
                  <span className="text-slate-300">build()</span>
                  <span className="text-slate-600">→</span>
                  <span className="text-slate-300">share()</span>
                  <span className="text-slate-600">→</span>
                  <span className="text-cyan-400 font-medium">inspire()</span>
                </div>

                {/* Copy Snippet Button */}
                <button
                  onClick={handleCopyCode}
                  className="ml-2 rounded border border-slate-800 bg-slate-900 px-2.5 py-1 font-mono text-[10px] font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-all active:scale-95"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
