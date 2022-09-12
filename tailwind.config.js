/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      black: "#000000",
      bedazzle: "#3d5a80ff",
      powder: "#c0e0deff",
      lightpink: "#edafb8ff",
      darkpurple: "#240115ff",
      jazzberry: "#9a275aff",
      paradise: "#ee4266ff"
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
