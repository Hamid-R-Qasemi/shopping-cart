module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pop: {
          "0% ": { transform: "scale(100%)" },
          "50%": { transform: "scale(102%)" },
          "100% ": { transform: "scale(100%)" },
        },
      },
      animation: {
        poping: "pop 200ms ease-in-out 1",
      },
    },
  },
  plugins: [],
};
