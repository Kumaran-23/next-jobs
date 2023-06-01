/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
  daisyui: {
    themes: ["retro", "night"],
    darkTheme: ["night"],
    base: true,
    //  styled: true,
    //  utils: true,
  },
}
