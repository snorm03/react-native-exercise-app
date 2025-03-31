import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import RepetitionExercise from "./screens/RepetitionExercise";
import DurationExercise from "./screens/DurationExercise";

//Resources Used:
//Stack Nav: https://docs.expo.dev/router/advanced/stack/
//https://www.youtube.com/watch?v=A39cBW-WJ7Q

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="RepetitionExercise"
          component={RepetitionExercise}
        />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
