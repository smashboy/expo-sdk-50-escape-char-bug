import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "expo-dev-client";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>FUCK!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
