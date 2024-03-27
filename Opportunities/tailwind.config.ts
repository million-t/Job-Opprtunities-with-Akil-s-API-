import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        'mi': '919px',
        'dmi': '815px',
        'sp': '293.5px',
      },
      width: {
        'mi': '919px',
      },
      colors: {
        "mi": "#25324B",
        "mi-gray": "#7C8493",
        "divide-gray": "#D6DDEB",
        "about-gray": "#515B6F",
        "skill-gray": "#F8F8FD",
      }
    },
  },
  plugins: [],
};
export default config;
