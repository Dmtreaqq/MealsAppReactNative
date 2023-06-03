import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { AlegreyaSansSC_400Regular } from "@expo-google-fonts/alegreya-sans-sc";
import { useFonts } from "expo-font";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.sceen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infra/theme";

export default function App() {
  const [alegreyaLoaded] = useFonts({
    AlegreyaSansSC_400Regular,
  });

  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!latoLoaded || !alegreyaLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar />
      </ThemeProvider>
    </>
  );
}
