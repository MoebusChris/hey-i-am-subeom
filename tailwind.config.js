module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  theme: {
    extend: {
      fontFamily: {
        brandon: ["brandon-grotesque", "system-ui", "sans-serif"],
        roboto: ["Roboto", "helvetica", "sans-serif"],
        bebas: ["Bebas Neue", "helvetica", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
