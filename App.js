import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { AlegreyaSansSC_400Regular } from "@expo-google-fonts/alegreya-sans-sc";
import { useFonts } from "expo-font";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.sceen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infra/theme";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const MapScreen = () => {
  return (
    <View>
      <Text>Map</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

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
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar />
      </ThemeProvider>
    </>
  );
}
