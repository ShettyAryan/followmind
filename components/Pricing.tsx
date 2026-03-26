"use client";
import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "Perfect for solo founders and freelancers getting started.",
    features: [
      "Up to 50 contacts",
      "10 AI drafts / month",
      "Gmail integration",
      "Google Sheets sync",
      "Basic context awareness",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    desc: "For professionals who rely on relationships to close deals.",
    features: [
      "Unlimited contacts",
      "Unlimited AI drafts",
      "Gmail + Calendar sync",
      "Deep context awareness",
      "Priority queue view",
      "Custom follow-up rules",
      "Email analytics",
    ],
    cta: "Get Early Access",
    featured: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "per month",
    desc: "For small teams that need shared relationship intelligence.",
    features: [
      "Everything in Pro",
      "Up to 5 seats",
      "Shared contact sheets",
      "Team activity feed",
      "Admin controls",
      "Priority support",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export default function Pricing() {
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
    <section id="pricing" className="py-32 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(74,158,255,0.03) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-0 mb-4">
            <span className="section-rule font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66]">
              Pricing
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#F0F4FF] leading-tight tracking-tight">
            Simple. No surprises.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.featured
                  ? "glass-glow animate-glow-pulse"
                  : "glass border-white/8 card-glow"
              }`}
              style={
                plan.featured
                  ? {
                      background: "rgba(74,158,255,0.05)",
                      border: "1px solid rgba(74,158,255,0.25)",
                      boxShadow: "0 0 40px rgba(74,158,255,0.08), 0 0 0 1px rgba(74,158,255,0.1)",
                    }
                  : {}
              }
            >
              {plan.featured && (
                <div className="absolute -top-px left-0 right-0 h-px rounded-t-2xl"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(74,158,255,0.8), transparent)" }}
                />
              )}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-mono text-[9px] text-[#04070E] bg-[#4A9EFF] px-3 py-1 rounded-full font-semibold tracking-widest uppercase">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="font-mono text-[11px] text-[#3D4F66] uppercase tracking-widest mb-3">
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-4xl text-[#F0F4FF] font-bold">{plan.price}</span>
                  <span className="font-mono text-[11px] text-[#3D4F66]">/{plan.period}</span>
                </div>
                <p className="text-[#7A8BA8] text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className="w-3.5 h-3.5 text-[#3DDC97] shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-[12px] text-[#7A8BA8]">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95 ${
                  plan.featured
                    ? "bg-[#4A9EFF] text-[#04070E] hover:brightness-110 shadow-lg shadow-[#4A9EFF]/25 btn-shimmer"
                    : "glass border border-white/10 text-[#F0F4FF] hover:bg-white/8"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
