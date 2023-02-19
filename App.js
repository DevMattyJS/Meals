import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//* Navigation in React Native => we can navigate between the app screens, use some animation, move back, etc...

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
