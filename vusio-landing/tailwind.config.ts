import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        meteor: {
          "0%": { transform: "translate3d(0,0,0)", opacity: "1" },
          "100%": { transform: "translate3d(-100px,100vh,0)", opacity: "0" },
        },
        "shimmer-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-vertical": "marquee-vertical 25s linear infinite",
        meteor: "meteor 8s linear infinite",
        "shimmer-slide": "shimmer-slide 2s linear infinite",
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
