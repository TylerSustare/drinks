import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Thing() {
  const [name, setUser] = React.useState("");
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setUser}
        testID="input"
        style={{ backgroundColor: "#fff" }}
      />

      <Button
        title="Print Username"
        onPress={() => {
          setTimeout(() => {
            setShow(!show);
          }, Math.floor(Math.random() * 200));
        }}
      />
      {show && <Text testID="printed-username">{name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444",
    alignItems: "center",
    justifyContent: "center"
  }
});
