import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--hair)",
        background: "var(--bg)",
        foreground: "var(--ink)",
        muted: {
          DEFAULT: "var(--surface)",
          foreground: "var(--muted)",
        },
        accent: {
          DEFAULT: "var(--blue)",
          foreground: "var(--accent-ink)",
        },
        ok: "var(--ok)",
        danger: "var(--danger)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 3px)",
        sm: "calc(var(--radius) - 6px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
