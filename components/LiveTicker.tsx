"use client";

const events = [
  { icon: "✦", text: "Alex M. just sent 3 AI-drafted follow-ups", time: "2m ago" },
  { icon: "⬆", text: "Sarah K. closed a deal after a FollowMind draft", time: "8m ago" },
  { icon: "✦", text: "Priya S. recovered a cold lead from 47 days ago", time: "11m ago" },
  { icon: "⬆", text: "Marcus T. set up 200-contact sheet in 4 minutes", time: "19m ago" },
  { icon: "✦", text: "Elena V. replied within 2 hours of AI draft sent", time: "23m ago" },
  { icon: "⬆", text: "James O. cleared his entire queue before noon", time: "31m ago" },
  { icon: "✦", text: "Naomi R. booked 3 calls from one batch of drafts", time: "44m ago" },
  { icon: "⬆", text: "Thomas W. integrated 5-year contact archive", time: "58m ago" },
];

// Duplicate for seamless loop
const items = [...events, ...events];

export default function LiveTicker() {
  return (
    <div
      className="py-4 sm:py-5 border-y overflow-hidden relative"
      style={{
        borderColor: "rgba(255,255,255,0.05)",
        background: "rgba(4,7,14,0.7)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #04070E, transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(270deg, #04070E, transparent)",
        }}
      />

      {/* Left label */}
      <div
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2"
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#3DDC97", boxShadow: "0 0 6px #3DDC97" }}
        />
        <span className="font-mono text-[9px] text-[#3D4F66] uppercase tracking-widest whitespace-nowrap">
          Live activity
        </span>
      </div>

      <div className="marquee-track" style={{ paddingLeft: "130px" }}>
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-8 shrink-0"
          >
            <span className="text-[#4A9EFF] text-xs">{item.icon}</span>
            <span className="font-mono text-[11px] text-[#7A8BA8] whitespace-nowrap">
              {item.text}
            </span>
            <span className="font-mono text-[9px] text-[#3D4F66] whitespace-nowrap">
              {item.time}
            </span>
            <span className="w-px h-3 bg-white/10 ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
