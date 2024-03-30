import { ThemeProvider } from "@shopify/restyle";
import Navigation from "./src/navigations";
import theme from "utils/theme";
// import theme from "./src/utils/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
