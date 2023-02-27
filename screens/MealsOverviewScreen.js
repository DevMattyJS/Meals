import { useLayoutEffect } from "react";
import { View } from "react-native";

import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

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

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
