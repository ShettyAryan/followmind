"use client";
import { useEffect, useRef, useState } from "react";

const draftLines = [
  "Hi Marcus,",
  "",
  "I wanted to follow up on our conversation about the Series B timeline",
  "from our call two weeks ago. Given the updated market conditions,",
  "I think there's a compelling case to revisit the",
];

export default function EmailDemo() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          animateLines();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  function animateLines() {
    let lineIdx = 0;
    let charIdx = 0;

    function tick() {
      if (lineIdx >= draftLines.length) return;
      const currentLine = draftLines[lineIdx];

      if (charIdx <= currentLine.length) {
        setVisibleLines(lineIdx);
        setCharCount(charIdx);
        charIdx++;
        setTimeout(tick, currentLine.length === 0 ? 0 : 28 + Math.random() * 18);
      } else {
        lineIdx++;
        charIdx = 0;
        setVisibleLines(lineIdx);
        setTimeout(tick, 120);
      }
    }
    setTimeout(tick, 400);
  }

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className="glass rounded-3xl overflow-hidden border border-white/8 shadow-2xl"
          style={{ boxShadow: "0 0 80px rgba(74,158,255,0.06), 0 40px 80px rgba(0,0,0,0.4)" }}
        >
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {/* Left — Contact record */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-8">
                <span className="section-rule font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66]">
                  Contact Record
                </span>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-[#4A9EFF] border border-[#4A9EFF]/20"
                  style={{ background: "rgba(74,158,255,0.08)" }}
                >
                  MC
                </div>
                <div>
                  <div className="text-lg font-semibold text-[#F0F4FF]">Marcus Chen</div>
                  <div className="font-mono text-[11px] text-[#3D4F66]">Partner · Vertex Capital</div>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Last note", val: "Discussed Series B timeline. Interested in lead." },
                  { label: "Last contact", val: "14 days ago · Cold" },
                  { label: "Deal stage", val: "Warm intro sent" },
                  { label: "Priority", val: "High" },
                ].map((r) => (
                  <div key={r.label} className="border-b border-white/5 pb-4">
                    <span className="font-mono text-[9px] text-[#3D4F66] uppercase tracking-widest block mb-1.5">
                      {r.label}
                    </span>
                    <span className="text-[12px] text-[#7A8BA8]">{r.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse-dot"
                  style={{ background: "#3DDC97" }}
                />
                <span className="font-mono text-[10px] text-[#3DDC97]">
                  FollowMind is processing this contact
                </span>
              </div>
            </div>

            {/* Right — AI draft */}
            <div className="p-6 sm:p-8 lg:p-10 relative">
              <div className="flex items-center justify-between mb-8">
                <span className="section-rule font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66]">
                  AI-Generated Draft
                </span>
                <span className="font-mono text-[9px] text-[#4A9EFF] bg-[#4A9EFF]/10 border border-[#4A9EFF]/20 px-2.5 py-1 rounded-full">
                  ✦ AI-drafted in 1.2s
                </span>
              </div>

              <div className="space-y-2">
                <div className="border-b border-white/5 pb-3 mb-5">
                  <span className="font-mono text-[9px] text-[#3D4F66] block mb-1.5 uppercase tracking-widest">
                    Subject
                  </span>
                  <span className="text-[12px] text-[#F0F4FF]">
                    Following up — Series B Conversation
                  </span>
                </div>

                <div
                  className="font-mono text-[11px] text-[#7A8BA8] leading-relaxed min-h-[160px]"
                  aria-live="polite"
                >
                  {draftLines.map((line, i) => {
                    if (i < visibleLines) {
                      return (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      );
                    }
                    if (i === visibleLines) {
                      return (
                        <span key={i}>
                          {line.slice(0, charCount)}
                          <span className="typing-cursor" />
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button className="flex-1 py-3 glass rounded-xl text-[11px] font-mono text-[#7A8BA8] border border-white/8 hover:text-[#F0F4FF] transition-colors">
                  Edit Draft
                </button>
                <button className="flex-1 py-3 bg-[#4A9EFF] rounded-xl text-[11px] font-semibold text-[#04070E] hover:brightness-110 transition-all shadow-lg shadow-[#4A9EFF]/20 btn-shimmer">
                  Send to Gmail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
