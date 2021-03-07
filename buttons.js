import React from "react";
import { View, Button, StyleSheet } from "react-native";

const App1 = () => {
  return (
<View style={styles.screenContainer}>
<Button title="Hey there!" />
</View>
);
};

const styles = StyleSheet.create({
screenContainer: {
flex: 1,
justifyContent: "center",
padding: 16
}
});

export default App1;