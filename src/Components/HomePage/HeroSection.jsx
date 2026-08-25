"use client";

import { useState } from "react";
import Link from "next/link";
import LearningPhilosophy from "./LearningPhilosophy";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const codeSnippet = `learn().then(build).then(share).then(inspire);`;

    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-10 selection:bg-emerald-500 selection:text-slate-950 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
      {/* Dynamic Background Effects */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="absolute top-[-10%] h-[350px] w-[350px] rounded-full bg-emerald-500/15 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px] lg:h-[700px] lg:w-[700px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Badge + Philosophy */}
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1.5 text-[10px] font-medium text-emerald-400 backdrop-blur-md sm:px-3.5 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Learn • Practice • Teach
          </div>

          <LearningPhilosophy />
        </div>

        {/* Hero Grid */}
        <div className=" grid items-center gap-10  lg:grid-cols-12 lg:gap-10">
          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Main Title */}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[1.15]">
              Learn Everyday. Learn Today.
              <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Build Tomorrow.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-relaxed md:text-lg lg:mx-0">
              Programming শেখাকে সহজ, practical এবং approachable করে তুলতেই এই
              learning platform-এর যাত্রা। আমি যা শিখি, আগে নিজে বুঝি, তারপর সহজ
              ভাষায় লিখে রাখি—যাতে একজন নতুন learner-ও সহজে বুঝতে এবং practice
              করতে পারে।
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Link
                href="#"
                className="group inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-500/30 active:scale-95 sm:w-auto sm:px-8 sm:text-base"
              >
                <span>Start Learning</span>

                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/80 hover:text-white active:scale-95 sm:w-auto sm:px-8 sm:text-base"
              >
                Our Mission
              </Link>
            </div>
          </div>

          {/* ================= RIGHT TERMINAL ================= */}
          <div className="relative w-full lg:col-span-5">
            {/* Background Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl opacity-75" />

            {/* Terminal */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/60 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80 sm:h-3 sm:w-3" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 sm:h-3 sm:w-3" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80 sm:h-3 sm:w-3" />
                </div>

                <span className="font-mono text-[10px] font-medium text-slate-500 sm:text-xs">
                  devAcademy.md
                </span>
              </div>

              {/* Terminal Body */}
              <div className="space-y-5 p-4 sm:space-y-6 sm:p-6">
                {/* Philosophy */}
                <div className="border-l-2 border-emerald-500/50 pl-3 transition-colors hover:border-emerald-400 sm:pl-4">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-emerald-400 sm:text-[10px]">
                    // Philosophy
                  </span>

                  <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-100 italic sm:text-base">
                    “Learning becomes more powerful when you share what you
                    learn.”
                  </p>
                </div>

                {/* Mission */}
                <div className="border-l-2 border-cyan-500/50 pl-3 transition-colors hover:border-cyan-400 sm:pl-4">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-cyan-400 sm:text-[10px]">
                    // My Mission
                  </span>

                  <p className="mt-1 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-relaxed">
                    I learn to understand, write to remember, practice to
                    improve, and teach to inspire.
                  </p>
                </div>

                {/* Goal */}
                <div className="border-l-2 border-teal-500/50 pl-3 transition-colors hover:border-teal-400 sm:pl-4">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-teal-400 sm:text-[10px]">
                    // My Goal
                  </span>

                  <p className="mt-1 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-relaxed">
                    To demystify programming by making it simple, practical, and
                    approachable—empowering newcomers to build with confidence
                    and keep learning without fear.
                  </p>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="flex flex-col gap-3 border-t border-slate-800/80 bg-slate-950/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-3.5">
                {/* Code Flow */}
                <div className="flex min-w-0 items-center gap-1.5 overflow-x-auto whitespace-nowrap font-mono text-[10px] text-slate-400 sm:gap-2 sm:text-xs">
                  <span className="font-bold text-emerald-400">&gt;</span>

                  <span className="text-slate-300">learn()</span>
                  <span className="text-slate-600">→</span>

                  <span className="text-slate-300">build()</span>
                  <span className="text-slate-600">→</span>

                  <span className="text-slate-300">share()</span>
                  <span className="text-slate-600">→</span>

                  <span className="font-medium text-cyan-400">inspire()</span>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyCode}
                  className="shrink-0 self-end rounded border border-slate-800 bg-slate-900 px-2.5 py-1 font-mono text-[10px] font-medium text-slate-400 transition-all hover:bg-slate-800 hover:text-white active:scale-95 sm:self-auto"
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
