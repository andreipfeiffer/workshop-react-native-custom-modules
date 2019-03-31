import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  NativeModules,
  DeviceEventEmitter,
  NativeEventEmitter
} from "react-native";

import Instructions from "./Instructions";
import Button from "./Button";

console.log(NativeModules);

const { Counter } = NativeModules;
const CounterEvents = new NativeEventEmitter(Counter);

export default function App() {
  const [count, setCount] = useState(0);
  const [nativeCount, setNativeCount] = useState(0);

  const updateJavaScriptCounter = async () => {
    setCount(await Counter.getCount());
  };

  const updateNativeCounter = () => {
    Counter.setCount(count);
  };

  useEffect(() => {
    const setNativeCounter = value => {
      setNativeCount(value);
    };

    DeviceEventEmitter.addListener("onChange", setNativeCounter);
    CounterEvents.addListener("onChange", setNativeCounter);

    return function cleanup() {
      DeviceEventEmitter.removeListener("onChange", setNativeCounter);
      CounterEvents.removeListener("onChange", setNativeCounter);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => setCount(count + 1)}
        onLongPress={updateNativeCounter}
        value={count}
        color="dodgerblue"
      >
        JavaScript counter
      </Button>

      <Instructions />

      <Button
        onPress={() => Counter.increment()}
        onLongPress={updateJavaScriptCounter}
        value={nativeCount}
        color="orange"
      >
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
