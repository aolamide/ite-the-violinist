module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#916071",
        dolphinGray: "#879988",
      },
      letterSpacing: { widest: "0.6em" },

      width: {
        128: "560px",
      },
    },
  },
  plugins: [],
};
