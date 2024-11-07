import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#F4E4C3",        // メインカラー（背景色など）
        accent: "#F59D06",      // サブカラー（オレンジ系）
        calmGreen: "#31A768",   // サブカラー（緑系）
        vibrantRed: "#DB5B2A",  // サブカラー（赤系）
        softPink: "#F88BAD",    // サブカラー（ピンク系）
      },
    },
  },
  plugins: [],
};

export default config;

