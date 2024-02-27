/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui"],
      serif: ["Poppins", "Georgia"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        "3xl": "0px -12px 191px -43px rgba(0,0,0,0.75)",
      },
      colors: {
        primary: "#ff8700",
        secondary: "#101010",
        grayDark: "#3D3B40",
        grayLight: "rgb(242 243 248)",
        third: "#ff8710",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
