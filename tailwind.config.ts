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
        primary: "#0A192F",
        secondary: "#f97316",
        third: "#54d6BB",
      },
    },
    screens: {
      lg: { max: "2023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1150px" },
      // => @media (max-width: 767px) { ... }
      smd: { max: "900px" },

      sm: { max: "650px" },
      // => @media (max-width: 639px) { ... }
      vsm: { max: "450px" },
      // => @media (max-width: 400px) { ... }
    },
  },
  plugins: [],
};
export default config;
