import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090909",
        foreground: "#EDEDED",
        dark: {
          900: "#090909",
          850: "#0D0D0F",
          800: "#131316",
          700: "#1A1A1F",
          600: "#26262E",
        },
        brand: {
          green: "#00F59B",
          greenHover: "#00DC82",
          greenGlow: "rgba(0, 245, 155, 0.35)",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Syne", "Impact", "Arial Black", "sans-serif"],
      },
      letterSpacing: {
        widest: ".2em",
        mega: ".35em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
