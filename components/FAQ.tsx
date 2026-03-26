"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "How does FollowMind read my Google Sheet?",
    a: "FollowMind connects via the Google Sheets API using OAuth2. You authorize read access, select which sheet to use, and map your columns — Name, Company, Last Contact, Notes, etc. — in under two minutes. Your data never leaves your Google account; FollowMind only reads what you point it to.",
  },
  {
    q: "Can I customize how the AI writes emails?",
    a: "Yes. You can provide a tone brief — \"formal and warm\", \"casual and direct\", \"technical\" — and FollowMind applies it across all drafts. You can also edit any draft before sending, and the AI learns from your edits over time.",
  },
  {
    q: "Does FollowMind send emails automatically, or do I review them?",
    a: "By default, FollowMind drafts emails directly into Gmail for your review. You choose whether to send, edit, or discard. If you want full automation, you can enable auto-send rules per contact category — but human review is the default. Always.",
  },
  {
    q: "What happens to my contact data?",
    a: "Your contact data is processed transiently to generate drafts and is never stored on FollowMind servers beyond the session. We don't sell, share, or train on your data. Full SOC 2 Type II compliance is in progress for enterprise customers.",
  },
  {
    q: "How is this different from a CRM like HubSpot?",
    a: "CRMs are record-keeping systems. FollowMind is an action system — it takes your existing data, wherever it lives, and turns silence into sent emails. If you already use HubSpot, Notion, or a plain Google Sheet, FollowMind plugs into it. No migration, no new database to maintain.",
  },
  {
    q: "Is there a free tier?",
    a: "Yes — the Starter plan is free forever for up to 50 contacts and 10 AI drafts per month. It's genuinely functional, not a crippled trial. We believe you should be able to see the value before paying.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
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
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="reveal flex items-center mb-4">
            <span className="section-rule font-mono text-[10px] tracking-[0.2em] uppercase text-[#3D4F66]">
              FAQ
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-serif text-[clamp(2rem,5vw,3rem)] text-[#F0F4FF] leading-tight tracking-tight">
            Questions we get asked.
            <br />
            <em className="italic font-normal opacity-70">Answered honestly.</em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} faq-item`}
            >
              <button
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className={`text-[14px] font-medium leading-snug transition-colors duration-200 ${
                    open === i ? "text-[#F0F4FF]" : "text-[#7A8BA8] group-hover:text-[#F0F4FF]"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
                    open === i
                      ? "border-[#4A9EFF]/50 bg-[#4A9EFF]/10 rotate-45"
                      : "border-white/10 group-hover:border-white/20"
                  }`}
                >
                  <svg
                    className={`w-2.5 h-2.5 transition-colors duration-200 ${
                      open === i ? "text-[#4A9EFF]" : "text-[#3D4F66]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{
                  maxHeight: open === i ? "300px" : "0px",
                  opacity: open === i ? 1 : 0,
                  transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
                }}
              >
                <p className="pb-6 text-[13px] text-[#7A8BA8] leading-relaxed pr-12">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
