import { View, Text, StyleSheet } from "react-native";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>MealDetails Screen</Text>
      <Text>Meal ID: {mealId}</Text>
    </View>
  );
}

export default MealDetailsScreen;
