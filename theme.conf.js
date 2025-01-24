// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/nunito/200.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";

// 2. Extend the theme to include custom colors, fonts, etc

const theme = extendTheme({
  fonts: {
    heading: "Nunito, sans-serif",
    body: "Nunito, sans-serif",
  },
  colors: {
    brand: {
      500: "#C45260",
    },
  },
  config: {
    initialColorMode: "dark",
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },

      // 3. We can add a new visual variant
      variants: {
        // 4. We can override existing variants
        solid: (props) => ({
          bg: "transparent",
        }),
      },
    },
    Table: {
      // 1. We can update the base styles
      baseStyle: {
        color: "red",
        fontWeight: "bold", // Normally, it is "semibold"
      },

      // 3. We can add a new visual variant
      variants: {
        // 4. We can override existing variants
        simple: {
          color: "red",
        },
      },
    },
  },
});
export default theme;
