import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

// We also get a route prop in every component, that is registered as a screen in react-navigation
function MealsOverviewScreen({ route }) {
  // params - an optional object containing params which is defined while navigating
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
