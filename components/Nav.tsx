"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "w-[calc(100%-3rem)] max-w-6xl mt-4"
          : "w-full max-w-7xl mt-0"
      }`}
    >
      <div
        className={`flex justify-between items-center px-8 py-4 transition-all duration-500 ${
          scrolled
            ? "glass rounded-full border border-white/10 shadow-2xl shadow-black/40"
            : "border-b border-white/0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-[#4A9EFF]/15 border border-[#4A9EFF]/30 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 3h10M2 7h6M2 11h8"
                stroke="#4A9EFF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="11"
                cy="10"
                r="2.5"
                stroke="#3DDC97"
                strokeWidth="1.2"
              />
            </svg>
          </div>
          <span className="font-serif font-bold text-[#F0F4FF] text-lg tracking-tight">
            FollowMind
          </span>
        </div>

        {/* Center links */}
        <div className="hidden md:flex gap-8">
          {["How it works", "Features", "Pricing"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-[#7A8BA8] hover:text-[#F0F4FF] transition-colors duration-200 tracking-wide"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-5">
          <button className="hidden sm:block text-sm text-[#7A8BA8] hover:text-[#F0F4FF] transition-colors duration-200">
            Log in
          </button>
          <button className="btn-shimmer bg-[#4A9EFF] text-[#04070E] text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition-all duration-300 active:scale-95 shadow-lg shadow-[#4A9EFF]/20">
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
}
