import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
          mute: "rgb(var(--ink-mute) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
        night: "#0A0B12",
        accent: {
          DEFAULT: "#4F46FF",
          soft: "#EEEDFF",
          deep: "#3730D6",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,13,20,0.04), 0 12px 32px -12px rgba(11,13,20,0.10)",
        lift: "0 2px 4px rgba(11,13,20,0.04), 0 28px 56px -20px rgba(79,70,255,0.28)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gridmove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "56px 56px" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dash: {
          to: { strokeDashoffset: "-24" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        gridmove: "gridmove 8s linear infinite",
        rise: "rise 0.9s cubic-bezier(0.2,0.7,0.2,1) both",
        dash: "dash 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
