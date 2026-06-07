import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        reborn: {
          cream: "#F4EFE6",
          forest: "#1E2C26",
          gold: "#D9B472",
          teal: "#549B85",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
