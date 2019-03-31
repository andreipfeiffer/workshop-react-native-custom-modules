import React from "react";
import { StyleSheet, View } from "react-native";

import Instructions from "./Instructions";
import Button from "./Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={() => {}} value={0} color="dodgerblue">
        JavaScript counter
      </Button>

      <Instructions />

      <Button onPress={() => {}} value={0} color="orange">
        Native counter
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#ffffff"
  }
});
