/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#246972 ",
        secondary: "#44a299 ",
        tertiary: "#a24490",
      },
    },
    fontFamily: {
      comfortaa: ['Comfortaa', 'sans-serif'],
    },
  },
  plugins: [],
};
