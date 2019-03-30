import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = props => {
  const color = props.color || "#000000";
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      <Text style={[styles.button, { color }]}>{props.value}</Text>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    fontSize: 100
  },
  text: {
    fontSize: 16,
    color: "#aaaaaa"
  }
});

export default Button;
