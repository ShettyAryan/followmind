"use client";

import { useEffect, useRef } from "react";

const painPoints = [
  "You forgot to follow up",
  "You didn't know what to say",
  "You lost track of the conversation",
];

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 },
    );

    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 45%, rgba(74,158,255,0.05) 0%, transparent 75%)",
        }}
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start relative">
        <div className="reveal">
          <span className="section-rule font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66]">
            The Real Problem
          </span>

          <h2 className="mt-4 font-serif text-[clamp(1.9rem,5.4vw,3.25rem)] leading-tight tracking-tight text-[#F0F4FF] max-w-2xl">
            You&apos;re not losing deals because of bad products.
          </h2>

          <p className="mt-7 text-[#7A8BA8] text-base leading-relaxed max-w-xl">
            Most relationships don&apos;t go cold.
            <br />
            They&apos;re just... not followed up.
          </p>
        </div>

        <div className="reveal reveal-delay-2 glass rounded-2xl border border-white/10 p-5 sm:p-7">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66] mb-5">
            Why deals slip
          </div>
          <ul className="space-y-3.5">
            {painPoints.map((point, i) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-3"
              >
                <span className="w-5 h-5 shrink-0 mt-0.5 rounded-full border border-[#4A9EFF]/30 bg-[#4A9EFF]/10 flex items-center justify-center font-mono text-[10px] text-[#4A9EFF]">
                  {i + 1}
                </span>
                <span className="text-[#F0F4FF] text-[15px] leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

