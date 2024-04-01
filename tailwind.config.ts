import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      "card-border": "#313244",
      "container-border": "#1e1e2e",
      "card-bg": "#1e1e2e",
      "main-bg": "#181825",
      "side-bg": "#11111b",
      heading: "#cdd6f4",
      body: "#bac2de",
      primary: "#74c7ec",
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
      heading: "var(--font-nunito), sans-serif",
      main: "var(--font-ubuntu), sans-serif",
    },
  },
  plugins: [],
};

export default config;
