import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//Resources Used
//Implementing touchable opacity for buttons:
//https://kmarks2013.medium.com/using-buttons-in-react-native-eab86155f56
//https://syeddayimshah.hashnode.dev/react-native-touchable-opacity-vs-button-element-explained

function Timer() {
  const [running, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      const start = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - start);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  function start() {
    setRunning(true);
  }

  function stop() {
    setRunning(false);
  }

  function reset() {
    setRunning(false);
    setElapsedTime(0);
  }

  function formatTime() {
    let hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(
      2,
      "0"
    );
    let minutes = String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    let seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(
      2,
      "0"
    );
    let milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(
      2,
      "0"
    );

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.display}>{formatTime()}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={start} style={styles.startButton}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stop} style={styles.stopButton}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset} style={styles.resetButton}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: "center",
    padding: 20,
  },
  display: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  startButton: {
    backgroundColor: "#69c777",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  stopButton: {
    backgroundColor: "#cc6e78",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  resetButton: {
    backgroundColor: "#5b9dd4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Timer;
