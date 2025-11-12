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
    },
  },
  plugins: [],
};
export default config;
