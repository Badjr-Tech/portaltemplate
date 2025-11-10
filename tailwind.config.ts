import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'dark-gray': '#2f2f2f',
      'light-gray': '#dedede',
      'white': '#ffffff',
      'accent': '#ffbd59',
    },
  },
  plugins: [],
};
export default config;
