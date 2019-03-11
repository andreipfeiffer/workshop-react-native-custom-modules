import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Instructions = () => {
  return (
    <View style={styles.separator}>
      <Text style={styles.text}>1. Tap to increment</Text>
      <Text style={styles.text}>
        2. Long-press to send value to other counter
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: "#f5f5f5",
    borderColor: "#dddddd",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 20
  },
  text: {
    fontSize: 16,
    color: "#aaaaaa"
  }
});

export default Instructions;
