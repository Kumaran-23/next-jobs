/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
  daisyui: {
    themes: ["acid", "retro", "coffee"],
    //darkTheme: ["forest"],
    base: true,
      styled: true,
      utils: true,
  },
}


