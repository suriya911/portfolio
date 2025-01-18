/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryColor: {
          light: "#e35557",
          DEFAULT: "#bc4749",
        },
        textColor: {
          primary: {
            day: "#000000",
            night: "#ffffff",
          },
          secondary: {
            day: "#868e96",
            night: "#868e96",
          },
          tertiary: {
            day: "#6a737d",
            night: "#ffffff",
          },
          appPrimaryColor: {
            light: "#e35557",
            DEFAULT: "#bc4749",
          },
        },
        backgroundColor: {
          day: "#ffffff",
          night: "#000000",
          card: {
            day: "#ebebeb",
            night: "#1f2028",
          },
        },
        borderColor: {
          DEFAULT: "#d4d4d4",
        },
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        blink: "blink 1s ease infinite",
      },
      boxShadow: {
        "3xl": "0px 1px 4px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
