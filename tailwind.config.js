/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
  daisyui: {
    // themes: [{"retro": {
    //       "primary": "blue",
    //       "primary-focus": "mediumblue",
    //     }},"acid", "coffee"],
    //darkTheme: ["forest"],
    themes: ["retro", "acid", "coffee"],
    base: true,
      styled: true,
      utils: true,
  },
}


