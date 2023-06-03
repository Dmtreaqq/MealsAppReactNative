import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.sceen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar />
    </>
  );
}
