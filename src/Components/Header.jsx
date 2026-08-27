"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { FaGithub, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: FaGithub,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/",
      icon: FaFacebookF,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/",
      icon: FaYoutube,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 text-white backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* ================= LOGO ================= */}
          <Link href="/" className="group flex items-center gap-2">
            {/* Logo Mark */}
            <div className="flex  items-center justify-center p-1 rounded border-emerald-400/30 bg-emerald-400/10 font-mono text-sm font-bold text-emerald-400 transition-all duration-300  group-hover:bg-emerald-400/20">
              &gt;_
              <Image
                src="/devAcademy_logo.png"
                alt="devAcademy"
                width={150}
                height={40}
                priority
                className="h-8 w-auto"
              />
            </div>

            {/* Logo Text */}
            <div className="font-mono text-lg font-bold tracking-tight ">
              <span className="text-white">dev</span>
              <span className="text-emerald-400">Academy</span>
            </div>
          </Link>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-3">
            {/* ================= SOCIAL ICONS ================= */}
            <div className="hidden items-center gap-1 border-r border-slate-800 pr-3 sm:flex">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-all duration-200 hover:bg-slate-900 hover:text-emerald-400"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* ================= AUTH ================= */}
            <div className="flex items-center gap-2">
              {/* Sign In */}
              <Link
                href="/Sign-In"
                className={`rounded-lg px-4 py-1.5   text-sm font-medium transition-all duration-200 ${
                  pathname === "/Sign-In"
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                Sign In
              </Link>

              {/* Sign Up */}
              <Link
                href="/Sign-Up"
                className={`rounded border px-4 py-1 text-sm font-semibold transition-all duration-300 ${
                  pathname === "/Sign-Up"
                    ? "border-emerald-400/60 bg-emerald-400/15 text-emerald-400"
                    : "border-emerald-400/30 bg-emerald-400/10 text-emerald-400 hover:border-emerald-400/60 hover:bg-emerald-400/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
                }`}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
