"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const links = ["How it works", "Features", "Pricing"];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 overflow-x-clip transition-all duration-500 px-2 sm:px-4 lg:px-6 ${
        scrolled ? "mt-2 sm:mt-4" : "mt-0"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl min-w-0 justify-between items-center px-3 sm:px-6 lg:px-8 py-3 sm:py-4 transition-all duration-500 ${
          scrolled
            ? "max-w-6xl glass rounded-2xl sm:rounded-full border border-white/10 shadow-2xl shadow-black/40"
            : "border-b border-white/0"
        }`}
      >
        {/* Logo */}
        <div className="flex flex-1 items-center gap-2 sm:gap-3 min-w-0">
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
          <span className="hidden min-[380px]:inline font-serif font-bold text-[#F0F4FF] text-sm sm:text-lg tracking-tight truncate">
            FollowMind
          </span>
        </div>

        {/* Center links */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
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
        <div className="flex items-center gap-2 sm:gap-5 shrink-0">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-9 h-9 rounded-lg border border-white/10 glass flex items-center justify-center text-[#F0F4FF]"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
              {menuOpen ? (
                <path strokeLinecap="round" d="M5 5l10 10M15 5 5 15" />
              ) : (
                <path strokeLinecap="round" d="M3.5 5.5h13M3.5 10h13M3.5 14.5h13" />
              )}
            </svg>
          </button>
          <button className="hidden sm:block text-sm text-[#7A8BA8] hover:text-[#F0F4FF] transition-colors duration-200">
            Log in
          </button>
          <button className="hidden sm:block btn-shimmer bg-[#4A9EFF] text-[#04070E] text-[10px] sm:text-sm font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full hover:brightness-110 transition-all duration-300 active:scale-95 shadow-lg shadow-[#4A9EFF]/20 whitespace-nowrap min-w-[92px]">
            Get Access
          </button>
        </div>
      </div>

      <div
        className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="glass rounded-2xl border border-white/10 p-3">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm text-[#7A8BA8] hover:text-[#F0F4FF] transition-colors rounded-lg hover:bg-white/[0.03]"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="h-px bg-white/8 my-2" />
          <div className="flex items-center gap-2">
            <button className="flex-1 py-2.5 rounded-lg border border-white/10 text-sm text-[#7A8BA8] hover:text-[#F0F4FF]">
              Log in
            </button>
            <button className="flex-1 py-2.5 rounded-lg bg-[#4A9EFF] text-[#04070E] text-sm font-semibold btn-shimmer whitespace-nowrap">
              Get Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
