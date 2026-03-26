"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    n: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    title: "Connect",
    desc: "Plug in your Google Sheet. FollowMind reads every row, every column, every note — no data left behind.",
  },
  {
    n: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    title: "Understand",
    desc: "AI reads the context of each relationship — last interaction, deal stage, tone history, what was promised.",
  },
  {
    n: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
    title: "Draft & Send",
    desc: "Personalized follow-ups appear directly in Gmail, ready to review and send. One click. Done.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 relative" ref={ref}>
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(74,158,255,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-0 mb-4">
          <span className="section-rule font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66]">
            Our Workflow
          </span>
        </div>

        {/* Headline */}
        <h2 className="reveal reveal-delay-1 font-serif text-[clamp(1.8rem,7vw,3.5rem)] text-[#F0F4FF] leading-tight tracking-tight mb-10 sm:mb-14 lg:mb-20 max-w-xl">
          From contact list to sent email in three steps.
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative">
          {/* Connector lines (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(33.33%-24px)] right-[calc(33.33%-24px)] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(74,158,255,0.3), transparent)" }}
          />

          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`reveal reveal-delay-${i + 1} glass card-glow rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/8 transition-all duration-300 relative group`}
            >
              {/* Step number */}
              <div className="step-number mb-6">{step.n}</div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-[#4A9EFF] mb-6 group-hover:border-[#4A9EFF]/30 transition-colors duration-300">
                {step.icon}
              </div>

              <h3 className="text-[#F0F4FF] text-lg sm:text-xl font-semibold mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[#7A8BA8] text-sm leading-relaxed">{step.desc}</p>

              {/* Arrow connector (between cards) */}
              {i < 2 && (
                <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-8 h-8">
                  <svg className="w-4 h-4 text-[#4A9EFF] animate-arrow-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
