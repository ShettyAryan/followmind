"use client";
import { useEffect, useRef } from "react";

const rows = [
  { feature: "Setup time", followmind: "< 5 minutes", manual: "Ongoing", crm: "Days to weeks" },
  { feature: "Personalized drafts", followmind: "AI-generated", manual: "Manual writing", crm: "Templates only" },
  { feature: "Context awareness", followmind: "Full sheet context", manual: "Your memory", crm: "CRM fields only" },
  { feature: "Follow-up queue", followmind: "Auto-prioritized", manual: "Spreadsheet chaos", crm: "Manual pipeline" },
  { feature: "Gmail integration", followmind: "Native, 1-click", manual: "Just Gmail", crm: "Plugin / workaround" },
  { feature: "Price to start", followmind: "Free", manual: "Free (but costly in time)", crm: "$50–$200/mo" },
  { feature: "Learns your voice", followmind: "Yes, over time", manual: "You already know yours", crm: "No" },
];

const cols = ["feature", "followmind", "manual", "crm"] as const;

const headers: Record<(typeof cols)[number], string> = {
  feature: "",
  followmind: "FollowMind",
  manual: "Manual (Gmail + Sheet)",
  crm: "HubSpot / Salesforce",
};

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="reveal flex items-center mb-4">
            <span className="section-rule font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66]">
              Why FollowMind
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#F0F4FF] leading-tight tracking-tight max-w-xl">
            You already know what you need.
            <br />
            <em className="italic font-normal opacity-70">Here&apos;s the honest comparison.</em>
          </h2>
        </div>

        {/* Table */}
        <div className="reveal reveal-delay-2 rounded-2xl overflow-hidden border border-white/8">
          {/* Header row */}
          <div className="grid grid-cols-4 border-b border-white/8" style={{ background: "rgba(255,255,255,0.03)" }}>
            {cols.map((col) => (
              <div
                key={col}
                className={`px-5 py-4 ${col === "feature" ? "" : "border-l border-white/5"}`}
              >
                {col === "followmind" ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border border-[#4A9EFF]/30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#4A9EFF] rounded-sm" />
                    </div>
                    <span className="font-mono text-[10px] text-[#4A9EFF] uppercase tracking-widest font-semibold">
                      {headers[col]}
                    </span>
                  </div>
                ) : (
                  <span className="font-mono text-[10px] text-[#3D4F66] uppercase tracking-widest">
                    {headers[col]}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 border-b border-white/5 last:border-0 hover:bg-white/[0.015] transition-colors`}
            >
              {/* Feature label */}
              <div className="px-5 py-4">
                <span className="text-[12px] text-[#7A8BA8]">{row.feature}</span>
              </div>

              {/* FollowMind — highlighted */}
              <div
                className="px-5 py-4 border-l border-white/5 relative"
                style={{ background: i % 2 === 0 ? "rgba(74,158,255,0.025)" : "rgba(74,158,255,0.015)" }}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-[#3DDC97] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[12px] text-[#F0F4FF] font-medium">{row.followmind}</span>
                </div>
              </div>

              {/* Manual */}
              <div className="px-5 py-4 border-l border-white/5">
                <span className="text-[12px] text-[#3D4F66]">{row.manual}</span>
              </div>

              {/* CRM */}
              <div className="px-5 py-4 border-l border-white/5">
                <span className="text-[12px] text-[#3D4F66]">{row.crm}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below table */}
        <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button className="btn-shimmer bg-[#4A9EFF] text-[#04070E] px-7 py-3.5 rounded-full font-semibold text-sm hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-[#4A9EFF]/20">
            Start for free
          </button>
          <span className="font-mono text-[10px] text-[#3D4F66]">
            No credit card · No migration · 4-minute setup
          </span>
        </div>
      </div>
    </section>
  );
}
