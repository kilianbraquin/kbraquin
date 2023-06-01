import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      "card-border": "#303036",
      "container-border": "#27272C",
      "card-bg": "#27272C",
      "main-bg": "#18181B",
      "side-bg": "#000000",
      heading: "#FFFFFF",
      body: "#E6E6E6",
      primary: "#FF7F50",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        md: "768px",
      },
    },
    fontFamily: {
      heading: "ff-uberhand-pro, sans-serif",
      main: "zeitung-micro, sans-serif",
    },
  },
  plugins: [],
};

export default config;
