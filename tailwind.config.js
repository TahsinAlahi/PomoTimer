module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Flex", "sans-serif"],
      },

      textColor: {
        "light-focused": "rgb(71, 21, 21)",
        "dark-focused": "rgb(255, 242, 242)",
        "light-short": "rgb(20, 64, 29)",
        "dark-short": "rgb(242, 255, 245)",
        "light-long": "rgb(21, 48, 71)",
        "dark-long": "rgb(242, 249, 255)",
      },
      backgroundColor: {
        "light-focused": "rgb(255, 242, 242)",
        "light-short": "rgb(242, 255, 245)",
        "light-long": "rgb(242, 249, 255)",
        dark: "rgb(13, 4, 4)",
        "btn-focused": "rgba(255, 76, 76, 0.15)",
        "btn-short": "rgba(77, 218, 110, 0.15)",
        "btn-long": "rgba(76, 172, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
