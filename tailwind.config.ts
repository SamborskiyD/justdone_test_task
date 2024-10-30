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
        green: "#00B39B",
        lightGreen: "#D7F4F3",
        textMain: "#181B29",
        textSecondary: "#22293B",
        textLight: "#747E97",
        yellow: "#FECE1F",
        blue: "#3B71F7",
        lightYellow: "#FFCC8F",
        saleBlack: "#252525",
        red: "#FF0000",
      },
      keyframes: {
        infiniteSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-50% - 8px))",
          },
        },
        infiniteSlide2: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-33.3% - 16px))",
          },
        },
      },
      animation: {
        "infinite-slide-2": "infiniteSlide2 25s linear infinite",
        "infinite-slide": "infiniteSlide 30s linear infinite",
      },
      screens: {
        toolsLg: { min: "900px" },
      },
      backgroundImage: {
        check: "url('/images/check-icon.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
