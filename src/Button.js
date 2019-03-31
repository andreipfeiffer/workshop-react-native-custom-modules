import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ value, children, ...props }) => {
  const color = props.color || "#000000";
  return (
    <TouchableOpacity style={styles.wrapper} {...props}>
      <Text style={[styles.button, { color }]}>{value}</Text>
      <Text style={styles.text}>{children}</Text>
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
