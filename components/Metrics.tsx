"use client";
import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 1240,
    suffix: "+",
    label: "Waitlist signups",
    sublabel: "and growing daily",
    color: "#4A9EFF",
  },
  {
    value: 34,
    suffix: "%",
    label: "Avg. response rate lift",
    sublabel: "vs. manual follow-ups",
    color: "#3DDC97",
  },
  {
    value: 4,
    suffix: "min",
    label: "Avg. setup time",
    sublabel: "from zero to first draft",
    color: "#FFD166",
  },
  {
    value: 98,
    suffix: "%",
    label: "Draft approval rate",
    sublabel: "users send or lightly edit",
    color: "#4A9EFF",
  },
];

function useCountUp(target: number, duration = 1400, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function MetricCard({
  metric,
  active,
  delay,
}: {
  metric: (typeof metrics)[0];
  active: boolean;
  delay: number;
}) {
  const count = useCountUp(metric.value, 1400, active);

  return (
    <div
      className={`reveal reveal-delay-${delay} metric-card rounded-2xl p-8 text-center`}
    >
      <div
        className="text-[clamp(2.4rem,5vw,3.5rem)] font-serif font-bold leading-none mb-2"
        style={{ color: metric.color }}
      >
        {count}
        <span className="text-[0.55em] ml-0.5 opacity-80">{metric.suffix}</span>
      </div>
      <div className="text-[13px] font-semibold text-[#F0F4FF] mb-1">{metric.label}</div>
      <div className="font-mono text-[10px] text-[#3D4F66] uppercase tracking-wider">
        {metric.sublabel}
      </div>

      {/* Bar */}
      <div className="mt-6 h-px w-full bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bar-fill"
          style={
            {
              "--bar-width": `${Math.min(100, (metric.value / 1500) * 100 + 20)}%`,
              background: `linear-gradient(90deg, ${metric.color}60, ${metric.color})`,
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 relative" ref={ref}>
      {/* Dot grid bg */}
      <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #04070E 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center mb-4">
            <span className="section-rule font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66]">
              By the numbers
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0F4FF] leading-tight tracking-tight">
            Numbers that make the case.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <MetricCard
              key={m.label}
              metric={m}
              active={active}
              delay={Math.min(i + 1, 4)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
