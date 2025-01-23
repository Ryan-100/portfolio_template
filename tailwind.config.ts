import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syncopate:[
          'Syncopate'
        ],
      },
      backgroundImage: {
        "web-bg": "url('/images/web-bg.png')",
        'gradient': 'linear-gradient(90.64deg, #FF00FF 1.23%, #00BBFF 69.09%)',
        "card":"url('/images/card.svg')",
        "card-md":"url('/images/card-md.svg')"
      },
      colors:{
        "pink":"#FF00FF",
        "blue":"#00BBFF"
      },
      screens: {
        lg:"1120px"
      },
    },
  },
  plugins: [],
} satisfies Config;
