import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Soft Indigo
        accent: '#ffbd59', // Existing playful orange/yellow
        'background-light': '#F9FAFB', // Very light gray
        'text-dark': '#1F2937', // Dark gray for primary text
        'dark-gray': '#2f2f2f', // Keep existing for compatibility if used elsewhere
        'light-gray': '#dedede', // Keep existing for compatibility if used elsewhere
        'white': '#ffffff', // Keep existing for compatibility if used elsewhere
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        blob: "blob 7s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
