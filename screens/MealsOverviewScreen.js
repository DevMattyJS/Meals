import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";

import { MEALS, CATEGORIES } from "../data/dummy-data";

// We also get a route prop in every component, that is registered as a screen in react-navigation
function MealsOverviewScreen({ route, navigation }) {
  // params - an optional object containing params which is defined while navigating
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // When we need to execute a side effect before the whole component is loaded for the first time,
  // we can use useLayoutEffect instead of useEffect (it will run this side effect simultaneously with the component execution)
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    // We can set screen options dynamically, from inside of a component by calling setOptions function
    // setting an options is taken as a sideeffect, so it should be used inside useEffect hook
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    // helper constants
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
