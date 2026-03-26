"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "I was losing deals just because I forgot to follow up. FollowMind changed that overnight — it's like having a chief of staff who never sleeps.",
    name: "Arjun Mehta",
    role: "Founder, Bridgewater Labs",
    initials: "AM",
    hue: "#4A9EFF",
    stars: 5,
  },
  {
    quote:
      "The AI actually sounds like me. I've tried other tools that produce robotic emails — FollowMind nails the tone because it reads all my previous context.",
    name: "Sofia Reyes",
    role: "VP Sales, Meridian SaaS",
    initials: "SR",
    hue: "#3DDC97",
    stars: 5,
  },
  {
    quote:
      "Setup took 4 minutes. Plugged in our Sheets, authorized Gmail, and by the time I made coffee the first batch of drafts was waiting. Insane.",
    name: "Thomas Wren",
    role: "Partner, Dusk Capital",
    initials: "TW",
    hue: "#FFD166",
    stars: 5,
  },
  {
    quote:
      "The priority queue alone is worth the subscription. I can open the app at 8am and instantly know exactly who I need to reach out to and why.",
    name: "Leila Nouri",
    role: "Head of Partnerships, Apex Health",
    initials: "LN",
    hue: "#4A9EFF",
    stars: 5,
  },
  {
    quote:
      "My response rate jumped 34% in the first month. Context-aware emails just perform better — FollowMind proves that at scale.",
    name: "James Osei",
    role: "Business Development, Nexus",
    initials: "JO",
    hue: "#3DDC97",
    stars: 5,
  },
  {
    quote:
      "I manage 200+ investor relationships. Before FollowMind, I missed follow-ups constantly. Now the queue tells me exactly where the gaps are.",
    name: "Naomi Takashima",
    role: "IR Manager, Redwood VC",
    initials: "NT",
    hue: "#FF6B6B",
    stars: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3 h-3 text-[#FFD166]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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

  // Split into two columns for masonry feel
  const col1 = testimonials.filter((_, i) => i % 2 === 0);
  const col2 = testimonials.filter((_, i) => i % 2 === 1);

  return (
    <section className="py-32 px-6 relative" ref={ref}>
      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(74,158,255,0.035) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal flex items-center justify-center mb-4">
            <span className="section-rule font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66]">
              Social Proof
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#F0F4FF] leading-tight tracking-tight mb-4">
            Trusted by people who close deals.
          </h2>
          <p className="reveal reveal-delay-2 text-[#7A8BA8] text-base max-w-md mx-auto">
            Early access users have seen meaningful improvements in response rates and recovered
            relationships within their first week.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${Math.min((i % 3) + 1, 4)} testimonial-card rounded-2xl p-7 flex flex-col`}
            >
              <StarRow count={t.stars} />
              <blockquote className="text-[13px] text-[#7A8BA8] leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                  style={{
                    background: `${t.hue}15`,
                    border: `1px solid ${t.hue}30`,
                    color: t.hue,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-[#F0F4FF]">{t.name}</div>
                  <div className="font-mono text-[10px] text-[#3D4F66]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom metric strip */}
        <div className="reveal reveal-delay-2 mt-16 grid grid-cols-3 divide-x divide-white/6 border border-white/6 rounded-2xl overflow-hidden">
          {[
            { val: "34%", label: "Avg. response rate lift" },
            { val: "1,240+", label: "Waitlist signups" },
            { val: "< 5 min", label: "Avg. setup time" },
          ].map((m) => (
            <div key={m.label} className="py-8 text-center" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="font-serif text-3xl font-bold text-[#F0F4FF] mb-1">{m.val}</div>
              <div className="font-mono text-[10px] text-[#3D4F66] uppercase tracking-widest">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
