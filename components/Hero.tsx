"use client";
import React from "react";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ mixBlendMode: "luminosity", filter: "saturate(0.3) brightness(0.5)" }}
        >
          <source
            src="https://res.cloudinary.com/dsvgadc5d/video/upload/v1774459446/sass_video_e2umit.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="hero-ambient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 pt-24 sm:pt-28 text-center flex flex-col items-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-3 sm:px-4 py-2 rounded-full glass border-l-2 mb-8 sm:mb-10 cursor-default"
          style={{ borderLeftColor: "#4A9EFF" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
            style={{ background: "#3DDC97" }}
          />
          <span className="font-mono text-[8px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] uppercase text-[#7A8BA8]">
            Now live — Google Sheets + Gmail
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(2.3rem,10vw,5.5rem)] font-serif text-[#F0F4FF] leading-[1.05] tracking-tight mb-5 sm:mb-6"
          style={{ textShadow: "0 0 80px rgba(74,158,255,0.12)" }}
        >
          Stop forgetting.
          <br />
          <em className="italic font-normal opacity-85">Start following up.</em>
        </h1>

        {/* Subheadline */}
        <p className="max-w-xl text-[13px] sm:text-base md:text-lg text-[#7A8BA8] mb-8 sm:mb-10 leading-relaxed">
          Connect your Google Sheets. Get personalized, context-aware follow-up
          emails drafted directly into Gmail — automatically.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-14 sm:mb-20 w-full sm:w-auto">
          <button className="btn-shimmer bg-[#4A9EFF] text-[#04070E] px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:brightness-110 transition-all duration-300 active:scale-95 shadow-2xl shadow-[#4A9EFF]/25">
            Get Early Access
          </button>
          <button className="glass glass-hover border border-white/10 text-[#F0F4FF] px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 active:scale-95">
            See how it works
          </button>
        </div>

        {/* Hero mockup cards */}
        <div className="relative hidden md:flex w-full max-w-4xl h-[360px] items-center justify-center mb-0">
          {/* Card 3 — Context chip (furthest back) */}
          <div
            className="absolute glass rounded-xl p-4 w-56 shadow-2xl animate-float-c"
            style={{
              right: "2%",
              bottom: "10%",
              zIndex: 1,
              transform: "rotate(3deg)",
              opacity: 0.85,
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[9px] text-[#3D4F66] uppercase tracking-widest">
                AI CONTEXT
              </span>
            </div>
            <p className="font-mono text-[10px] text-[#7A8BA8] leading-relaxed">
              Last discussed:{" "}
              <span className="text-[#4A9EFF]">Series A deck</span>
              <br />
              <span className="text-[#3D4F66]">14 days ago</span>
            </p>
            <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
                style={{ background: "#3DDC97" }}
              />
              <span className="font-mono text-[9px] text-[#3DDC97]">
                Context loaded
              </span>
            </div>
          </div>

          {/* Card 1 — Google Sheets contact row */}
          <div
            className="absolute glass rounded-xl p-5 w-72 shadow-2xl animate-float-a card-glow transition-all duration-300"
            style={{
              left: "2%",
              top: "5%",
              zIndex: 2,
              transform: "rotate(-2deg)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[9px] text-[#3D4F66] uppercase tracking-widest">
                CONTACTS SHEET
              </span>
              <span className="font-mono text-[9px] text-[#3DDC97] bg-green-signal/10 border border-green-signal/20 px-2 py-0.5 rounded-full">
                Follow-up due
              </span>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-semibold text-[#F0F4FF]">
                  Elena Vance
                </span>
                <span className="font-mono text-[10px] text-[#3D4F66]">
                  row 14
                </span>
              </div>
              <div className="font-mono text-[10px] text-[#7A8BA8]">
                Principal Architect · Lumon Corp
              </div>
              <div className="pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-[#3D4F66]">
                    LAST CONTACT
                  </span>
                  <span className="font-mono text-[10px] text-[#7A8BA8]">
                    4 days ago
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — AI draft compose */}
          <div
            className="absolute glass rounded-xl overflow-hidden shadow-2xl animate-float-b card-glow transition-all duration-300"
            style={{
              right: "4%",
              top: "0%",
              width: "340px",
              zIndex: 3,
              transform: "rotate(1.5deg)",
            }}
          >
            {/* Gmail-style header */}
            <div className="bg-white/[0.03] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#F0F4FF]">
                New Message
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[9px] text-[#4A9EFF] bg-[#4A9EFF]/10 px-2 py-0.5 rounded-full border border-[#4A9EFF]/20">
                  ✦ AI Drafted
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2.5">
              <div className="border-b border-white/5 pb-2">
                <span className="font-mono text-[9px] text-[#3D4F66] block mb-1">
                  TO
                </span>
                <span className="text-[11px] text-[#7A8BA8]">
                  elena@lumon.corp
                </span>
              </div>
              <div className="border-b border-white/5 pb-2">
                <span className="font-mono text-[9px] text-[#3D4F66] block mb-1">
                  SUBJECT
                </span>
                <span className="text-[11px] text-[#F0F4FF]">
                  Re: Architecture Proposal — Updated Blueprints
                </span>
              </div>
              <div>
                <p className="text-[11px] text-[#7A8BA8] leading-relaxed">
                  Hi Elena, I&apos;ve updated the blueprints reflecting your
                  feedback on the negative space from Tuesday&apos;s session.
                  The revised structural flow addresses...
                </p>
                <span className="typing-cursor text-[11px] text-[#4A9EFF]" />
              </div>
            </div>
            <div className="px-4 pb-4 flex gap-2">
              <button className="flex-1 py-2 glass rounded-lg text-[10px] font-mono text-[#7A8BA8] hover:text-[#F0F4FF] transition-colors border border-white/5">
                Edit
              </button>
              <button className="flex-1 py-2 bg-[#4A9EFF] rounded-lg text-[10px] font-semibold text-[#04070E] hover:brightness-110 transition-all shadow-lg shadow-[#4A9EFF]/20">
                Send Now
              </button>
            </div>
          </div>

          {/* Ambient glow under cards */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(74,158,255,0.08) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </div>
        <div className="md:hidden w-full max-w-sm glass rounded-2xl border border-white/10 p-5 text-left">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[9px] text-[#3D4F66] uppercase tracking-widest">
              AI Draft Preview
            </span>
            <span className="font-mono text-[9px] text-[#4A9EFF] bg-[#4A9EFF]/10 px-2 py-0.5 rounded-full border border-[#4A9EFF]/20">
              Live
            </span>
          </div>
          <div className="space-y-2.5">
            <p className="text-xs text-[#F0F4FF]">To: elena@lumon.corp</p>
            <p className="text-xs text-[#7A8BA8] leading-relaxed">
              FollowMind reads your context, drafts a personalized follow-up, and sends it to Gmail in one click.
            </p>
            <div className="pt-3 border-t border-white/5 flex gap-2">
              <button className="flex-1 py-2.5 glass rounded-lg text-[10px] font-mono text-[#7A8BA8] border border-white/8">
                Edit
              </button>
              <button className="flex-1 py-2.5 bg-[#4A9EFF] rounded-lg text-[10px] font-semibold text-[#04070E]">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
