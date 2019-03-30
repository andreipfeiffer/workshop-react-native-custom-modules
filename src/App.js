import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Instructions from "./Instructions";
import Button from "./Button";

export default class App extends Component {
  state = { count: 0 };

  increment = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.increment}
          value={this.state.count}
          color="dodgerblue"
        >
          JavaScript counter
        </Button>

        <Instructions />

        <Button
          onPress={this.increment}
          value={this.state.count}
          color="orange"
        >
          Native counter
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#ffffff"
  }
});
