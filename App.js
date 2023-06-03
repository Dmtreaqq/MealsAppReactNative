import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { spacing } from "./src/utils/spacing";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Search */}
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: spacing.md,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: "blue",
  },
});
