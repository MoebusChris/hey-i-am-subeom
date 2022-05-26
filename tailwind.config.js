module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brandon: ["brandon-grotesque", "system-ui", "sans-serif"],
        roboto: ["Roboto", "helvetica", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
