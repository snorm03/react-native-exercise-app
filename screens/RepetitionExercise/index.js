import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Counter from "../Counter";

//Resources Used:
//https://reactnavigation.org/docs/params/
//https://medium.com/swlh/passing-params-with-react-navigation-dd86c5de024c

function RepetitionExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const suggestedExercise = exercises.find(
    (e) => e.name === exercise.suggested
  );

  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Counter />

      <View style={styles.buttonContainer}>
        {suggestedExercise && (
          <Button
            title={`Suggested: ${suggestedExercise.name}`}
            onPress={() =>
              navigation.navigate(
                suggestedExercise.type === "Repetition"
                  ? "RepetitionExercise"
                  : "DurationExercise",
                { exercise: suggestedExercise, exercises }
              )
            }
            color="#595959"
          />
        )}
        <View style={{ height: 20 }} />
        <Button
          title="Home"
          color="#595959"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    width: "75%",
  },
});

export default RepetitionExercise;
