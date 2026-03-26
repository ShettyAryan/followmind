"use client";
import { useEffect, useRef } from "react";

/* ── UI Previews ─────────────────────────────────────────── */

function ContextBriefPreview() {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/8 shadow-2xl scan-line">
      <div className="bg-white/[0.03] px-5 py-3.5 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-pulse-dot" />
          <span className="font-mono text-[10px] text-[#3D4F66] tracking-widest uppercase">
            AI Relationship Brief
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#4A9EFF]">live</span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <span className="font-mono text-[9px] text-[#3D4F66] uppercase tracking-widest block mb-2">
            Contact
          </span>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#4A9EFF]/10 border border-[#4A9EFF]/20 flex items-center justify-center text-[#4A9EFF] text-sm font-semibold">
              EV
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F0F4FF]">Elena Vance</div>
              <div className="font-mono text-[10px] text-[#3D4F66]">Principal Architect · Lumon Corp</div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-4 space-y-3">
          <span className="font-mono text-[9px] text-[#3D4F66] uppercase tracking-widest block">
            Extracted Context
          </span>
          {[
            { label: "Last topic", val: "Series A deck review" },
            { label: "Deal stage", val: "Proposal sent" },
            { label: "Tone", val: "Warm, professional" },
            { label: "Next action", val: "Follow up on blueprint revisions" },
          ].map((r) => (
            <div key={r.label} className="flex justify-between items-baseline">
              <span className="font-mono text-[10px] text-[#3D4F66]">{r.label}</span>
              <span className="font-mono text-[10px] text-[#7A8BA8]">{r.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GmailDraftPreview() {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
      <div className="bg-white/[0.03] px-5 py-3 border-b border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-[#F0F4FF]">Gmail — New Compose</span>
        <span className="font-mono text-[9px] text-[#4A9EFF] bg-[#4A9EFF]/10 px-2.5 py-1 rounded-full border border-[#4A9EFF]/20">
          ✦ AI-drafted in 1.2s
        </span>
      </div>
      <div className="p-5 space-y-3">
        <div className="border-b border-white/5 pb-3 flex gap-3 items-baseline">
          <span className="font-mono text-[9px] text-[#3D4F66] w-12 shrink-0">TO</span>
          <span className="text-[11px] text-[#7A8BA8]">elena@lumon.corp</span>
        </div>
        <div className="border-b border-white/5 pb-3 flex gap-3 items-baseline">
          <span className="font-mono text-[9px] text-[#3D4F66] w-12 shrink-0">SUBJECT</span>
          <span className="text-[11px] text-[#F0F4FF]">Re: Blueprint Revisions — Updated Structural Flow</span>
        </div>
        <div className="pt-1">
          <p className="text-[11px] text-[#7A8BA8] leading-relaxed">
            Hi Elena,
            <br /><br />
            I&apos;ve updated the blueprints reflecting your feedback from
            Tuesday&apos;s session. The negative space adjustments you mentioned
            have been incorporated into the revised structural flow on level 3.
            <br /><br />
            Would you have 20 minutes this week to review
            <span className="typing-cursor" />
          </p>
        </div>
        <div className="pt-3 flex gap-2">
          <button className="px-4 py-2 glass rounded-lg text-[10px] font-mono text-[#7A8BA8] border border-white/8 hover:text-[#F0F4FF] transition-colors">
            Edit Draft
          </button>
          <button className="px-4 py-2 bg-[#4A9EFF] rounded-lg text-[10px] font-semibold text-[#04070E] hover:brightness-110 transition-all shadow-lg shadow-[#4A9EFF]/20">
            Send Now
          </button>
          <button className="px-4 py-2 glass rounded-lg text-[10px] font-mono text-[#7A8BA8] border border-white/8 hover:text-[#F0F4FF] transition-colors ml-auto">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}

function PriorityQueuePreview() {
  const contacts = [
    { name: "Marcus Chen", co: "Vertex Capital", status: "overdue", label: "5 days overdue", days: "–5d" },
    { name: "Sarah O'Brien", co: "Meridian Labs", status: "today", label: "Due today", days: "0d" },
    { name: "James Whitfield", co: "Arco Systems", status: "upcoming", label: "Due in 2 days", days: "+2d" },
    { name: "Priya Sharma", co: "Nexus Ventures", status: "upcoming", label: "Due in 4 days", days: "+4d" },
  ];

  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
      <div className="bg-white/[0.03] px-5 py-3.5 border-b border-white/5 flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#3D4F66] tracking-widest uppercase">
          Follow-up Queue
        </span>
        <span className="font-mono text-[9px] text-[#7A8BA8]">4 contacts · sorted by urgency</span>
      </div>
      <div className="divide-y divide-white/5">
        {contacts.map((c) => (
          <div key={c.name} className="px-5 py-4 flex items-center gap-4 hover:bg-white/[0.02] transition-colors">
            <div
              className={`w-1 h-10 rounded-full ${
                c.status === "overdue"
                  ? "bg-[#FF6B6B]"
                  : c.status === "today"
                  ? "bg-[#FFD166]"
                  : "bg-[#3DDC97]/50"
              }`}
            />
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-semibold text-[#F0F4FF]">{c.name}</div>
              <div className="font-mono text-[10px] text-[#3D4F66]">{c.co}</div>
            </div>
            <div className="text-right">
              <span
                className={`font-mono text-[9px] px-2 py-0.5 rounded-full border ${
                  c.status === "overdue"
                    ? "badge-overdue"
                    : c.status === "today"
                    ? "badge-today"
                    : "badge-upcoming"
                }`}
              >
                {c.label}
              </span>
            </div>
            <div className="font-mono text-[10px] text-[#3D4F66] w-6 text-right">{c.days}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Features data ───────────────────────────────────────── */

const features = [
  {
    label: "Smart Context Awareness",
    title: "It knows the whole story,\nnot just the last email.",
    desc: "FollowMind doesn't just read names. It synthesizes every note, date, stage, and memo in your sheet into a living relationship brief — so every follow-up arrives with surgical relevance.",
    bullets: ["Deal stage tracking", "Tone & sentiment history", "Last interaction extraction"],
    preview: <ContextBriefPreview />,
  },
  {
    label: "One-Click Gmail Drafts",
    title: "Drafts that sound\nlike you wrote them.",
    desc: "AI-generated emails that match your voice, reference what was last discussed, and land at exactly the right moment. Review, tweak, send — or let it fly automatically.",
    bullets: ["Voice-matched writing", "Context-referenced body", "Auto-queued to Gmail"],
    preview: <GmailDraftPreview />,
  },
  {
    label: "Never Miss a Follow-up",
    title: "Your priority queue,\nalways sorted by urgency.",
    desc: "Every contact is scored by how overdue their follow-up is. Overdue glows red. Due today glows amber. The rest are patient. You always know who needs you first.",
    bullets: ["Urgency-ranked queue", "Color-coded status badges", "One-click draft for any contact"],
    preview: <PriorityQueuePreview />,
  },
];

/* ── Component ───────────────────────────────────────────── */

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 sm:py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24 lg:space-y-32">
        {features.map((f, i) => (
          <div
            key={f.label}
            className={`feature-row grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}
          >
            {/* Text */}
            <div className="reveal">
              <span className="section-rule font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66]">
                {f.label}
              </span>
              <h3 className="mt-4 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#F0F4FF] leading-tight tracking-tight mb-5 whitespace-pre-line">
                {f.title}
              </h3>
              <p className="text-[#7A8BA8] text-base leading-relaxed mb-7">{f.desc}</p>
              <ul className="space-y-3">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A9EFF] shrink-0" />
                    <span className="font-mono text-[11px] text-[#7A8BA8] tracking-wide">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="reveal reveal-delay-2">{f.preview}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
