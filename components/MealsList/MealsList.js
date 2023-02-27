import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

function MealsList({ items }) {
  function renderMealItem(itemData) {
    // helper constants
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    // function pressHandler() {
    //   //* Navigate to a meal details screen
    //   navigation.navigate("MealDetails", {
    //     mealId: item.id,
    //   });
    // }

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
