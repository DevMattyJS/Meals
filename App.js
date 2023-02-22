import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {/* check react-navigation docs for more info about the package */}
      <NavigationContainer>
        <Stack.Navigator
          // We can set an options that we want to apply to all screens to a navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* We need to register all screens, that we want to be able to navigate between in our Navigator component */}
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            // screen specific options can be apllied to each screen separately
            // (these ones overwrites the navigator screenOptions if there are a clash)
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            //* We can also set an options dynamically using a function like bellow or from inside a component (check MealsOverView screen)
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
