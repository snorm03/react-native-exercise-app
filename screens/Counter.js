import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseRep() {
    setCount(count + 1);
  }
  function decreaseRep() {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  }
  function resetCount() {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.countDisplay}>{count} reps</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase Count" color="#69c777" onPress={increaseRep} />
        <Button title="Decrease Count" color="#cc6e78" onPress={decreaseRep} />
        <Button title="Reset Count" color="#5b9dd4" onPress={resetCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
  },
  countDisplay: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    gap: 10,
  },
});

export default Counter;
