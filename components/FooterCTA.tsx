"use client";
import { useEffect, useRef } from "react";

export default function FooterCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden" ref={ref}>
        {/* Subtle video bleed */}
        <div className="absolute inset-0 z-0 opacity-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.2) brightness(0.4)" }}
          >
            <source
              src="https://res.cloudinary.com/dsvgadc5d/video/upload/v1774459446/sass_video_e2umit.mp4"
              type="video/mp4"
            />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #04070E 0%, transparent 30%, transparent 70%, #04070E 100%)",
            }}
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(74,158,255,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="reveal font-mono text-[9px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#3D4F66] mb-5 sm:mb-6">
            Ready to start
          </div>
          <h2 className="reveal reveal-delay-1 font-serif text-[clamp(2.4rem,6vw,4rem)] text-[#F0F4FF] leading-tight tracking-tight mb-6">
            Your leads are waiting.
            <br />
            <em className="italic font-normal opacity-75">
              Your drafts are ready.
            </em>
          </h2>
          <p className="reveal reveal-delay-2 text-[#7A8BA8] text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto">
            Join the waitlist. Be first when FollowMind opens to the public. No
            credit card. No noise.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <input
              type="email"
              placeholder="you@company.com"
              className="glass border border-white/10 rounded-full px-5 sm:px-6 py-3.5 text-sm text-[#F0F4FF] placeholder-[#3D4F66] outline-none focus:border-[#4A9EFF]/40 transition-colors w-full sm:w-72"
            />
            <button className="btn-shimmer bg-[#4A9EFF] text-[#04070E] px-7 py-3.5 rounded-full font-semibold text-sm hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-[#4A9EFF]/25 whitespace-nowrap">
              Join the Waitlist
            </button>
          </div>
          <div className="reveal reveal-delay-4 mt-5 font-mono text-[10px] text-[#3D4F66]">
            1,240 people already on the list
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-white/5 py-10 sm:py-12 px-4 sm:px-6 lg:px-8"
        style={{ background: "rgba(4,7,14,0.98)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-[#4A9EFF]/15 border border-[#4A9EFF]/30 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 3h10M2 7h6M2 11h8"
                  stroke="#4A9EFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="11"
                  cy="10"
                  r="2.5"
                  stroke="#3DDC97"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <span className="font-serif font-bold text-[#F0F4FF]">
              FollowMind
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {["Privacy Policy", "Terms of Service", "Security", "Status"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="font-mono text-[10px] uppercase tracking-widest text-[#3D4F66] hover:text-[#4A9EFF] transition-colors"
                >
                  {l}
                </a>
              ),
            )}
          </div>

          <div className="font-mono text-[10px] text-[#3D4F66]">
            © 2024 FollowMind Inc.
          </div>
        </div>
      </footer>
    </>
  );
}
