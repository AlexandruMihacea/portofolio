import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
        display: ["Impact", "Arial Black", "Inter", "sans-serif"],
      },
      colors: {
        ink: "#131313",
        panel: "#161b22",
        panelSoft: "#1c222c",
        lime: "#d5ff3f",
        muted: "#8b949e",
        line: "rgba(255,255,255,0.1)",
      },
      boxShadow: {
        glow: "0 0 70px rgba(213, 255, 63, 0.16)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
