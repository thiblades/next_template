import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  // Temp fonts
  fonts: {
    title: "'Poppins', sans-serif",
    main: "'Open Sans', sans-serif",
    mono: "'Space Mono', sans-serif",
  },
  // Colors for layout
  colors: {
    background_main: "radial-gradient(circle, rgba(156,156,156,1) 0%, rgba(170,119,28,1) 0%, rgba(252,246,186,1) 66%, rgba(251,245,183,1) 98%);",
    text: {
      primary: "hsl(210deg 11% 11%)",
    },
  },
};

export { defaultTheme };
