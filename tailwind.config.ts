import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        navbarTop: "rgba( 0, 0, 0, 0.02)",
        navbarHover: "rgba( 0, 0, 0, 0.04)",
        brandColor: "#4b2a78",
        brandBackground: "#f0eff4",
        backToTopBg: "rgba(255, 255, 255, 0.4)",
        lineColor: "#eaeaea",
        footerSocials: "#808080",
        blackGlass: "rgba( 0, 0, 0, 0.65 )",
        contactCard: "#96B1C2",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        animFw: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        animFw: "animFw 1s ease-in-out",
      },

      boxShadow: {
        navbarShadow: "3px 0px 51px 1px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
