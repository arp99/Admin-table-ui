module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgDark: "#141c2f",
        lightblue: "#0079FF",
        blueGray: "#1F2A48",
        lightGray: "#d3d3d3",
        lightText: "#141C2F",
        darkText: "#D3D3D3",
      },
      boxShadow : {
        'hover' : '0 0 0 3px #0079FF'
      }
    },
  },
  plugins: [],
};
