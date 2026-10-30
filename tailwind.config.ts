import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        datelar: {
          navy: "#0F1B2D",
          dark: "#090F1A",
          deep: "#060A12",
          card: "#0D1726",
          cyan: "#3CC6D9",
          "cyan-hover": "#32B2C4",
          amber: "#E8A33D",
          sand: "#F3F1EA",
          border: "rgba(60, 198, 217, 0.18)",
        },
      },
      boxShadow: {
        glow: "0 0 24px -4px rgba(60, 198, 217, 0.35)",
        "glow-amber": "0 0 24px -4px rgba(232, 163, 61, 0.35)",
        panel: "0 10px 40px -10px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(to right, rgba(60, 198, 217, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(60, 198, 217, 0.05) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(60, 198, 217, 0.15) 0%, transparent 70%)",
        "radial-amber":
          "radial-gradient(circle at 80% 20%, rgba(232, 163, 61, 0.12) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
