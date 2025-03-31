import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

//Resources Used:
//https://reactnavigation.org/docs/params/
//https://medium.com/swlh/passing-params-with-react-navigation-dd86c5de024c

const exercises = [
  { id: "1", name: "Running", type: "Duration", suggested: "Push-ups" },
  { id: "2", name: "Push-ups", type: "Repetition", suggested: "Crunches" },
  { id: "3", name: "Crunches", type: "Repetition", suggested: "Swimming" },
  { id: "4", name: "Swimming", type: "Duration", suggested: "Running" },
];

export default function Home() {
  const navigation = useNavigation();

  const handlePress = (exercise) => {
    const screen =
      exercise.type === "Repetition"
        ? "RepetitionExercise"
        : "DurationExercise";
    navigation.navigate(screen, { exercise, exercises });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <Button
            key={item.id}
            title={item.name}
            onPress={() => handlePress(item)}
            buttonStyle={styles.button}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    marginVertical: 10,
    backgroundColor: "#5b9dd4",
  },
});
