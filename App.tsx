import { ThemeProvider } from "@shopify/restyle";
import Navigation from "./src/navigations";
import theme from "utils/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
// import theme from "./src/utils/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

//SafeAreaProvider use korar karon hocce jeno component content jeno phone er notifiction area cere na jay tar jonno ja lagbe ta holo--> SafeAreaProvider ar SafeAreaWrapper jeita each screen er jonno wrap kora hoice
