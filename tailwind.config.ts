import type { Config } from "tailwindcss";
 
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'translate-x-20',
    '-translate-x-20',
    'translate-y-20',
    '-translate-y-20',
    'duration-700',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        xs: { max: "576px" },
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        primary: ["var(--font-primary),sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hamzaPrimary: "#7f6afc",
      },
      backgroundImage: {
        primary: "linear-gradient(to right, #9885FF,#79A9FF)",
        PrimaryDark: "radial-gradient(95.2% 351.86% at 100.99% 0%, #7D16C4 0%, #3358C3 81.2%, #3358C3 100%)",
        secondary: "linear-gradient(90deg, rgba(207,199,255,0.6) 0%, rgba(211,211,211,0.1) 50%, rgba(212,228,255,1) 100%)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-in-up": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "60%": { transform: "translateY(-10px)", opacity: "1" },
          "80%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        diagonalFloat: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-10px, 10px)" },
        },
        dropdown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out forwards", "bounce-in-up": "bounce-in-up 0.8s ease-out forwards",
        rotate: "rotate 5s cubic-bezier(0.8, 0.2, 0.2, 0.8) infinite alternate",
        float: "float 2s ease-in-out infinite",
        diagonalFloat: "diagonalFloat 2s ease-in-out infinite",
        dropdown: "dropdown 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
 
 