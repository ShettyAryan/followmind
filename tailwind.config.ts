import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base":       "#04070E",
        "accent-blue":   "#4A9EFF",
        "accent-glow":   "rgba(74,158,255,0.15)",
        "text-primary":  "#F0F4FF",
        "text-secondary":"#7A8BA8",
        "text-muted":    "#3D4F66",
        "green-signal":  "#3DDC97",
        "border-subtle": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans:  ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono:  ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "float-a":    "float 5s ease-in-out infinite",
        "float-b":    "float 5s ease-in-out 1.5s infinite",
        "float-c":    "float 5s ease-in-out 3s infinite",
        "pulse-dot":  "pulseDot 2s ease-in-out infinite",
        "shimmer":    "shimmer 2.5s linear infinite",
        "blink":      "blink 1s step-end infinite",
        "arrow-pulse":"arrowPulse 1.8s ease-in-out infinite",
        "scan":       "scan 3s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "marquee":    "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1",   transform: "scale(1)" },
          "50%":     { opacity: "0.4", transform: "scale(0.85)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        arrowPulse: {
          "0%,100%": { opacity: "0.3", transform: "translateX(0)" },
          "50%":     { opacity: "1",   transform: "translateX(4px)" },
        },
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 20px rgba(74,158,255,0.1)" },
          "50%":     { boxShadow: "0 0 40px rgba(74,158,255,0.3)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
