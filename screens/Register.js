import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Register</Text>
      <TextInput
        placeholder="Name"
        style={styles.TextInput}
        value={email}
        onChangeText={(enteredValue) => setEmail(enteredValue)}
      />
      <TextInput
        placeholder="Email"
        style={styles.TextInput}
        value={password}
        onChangeText={(enteredValue) => setPassword(enteredValue)}
      />
      <TextInput
        placeholder="Password"
        style={styles.TextInput}
        value={password}
      />
      <Button title="Sign Up" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    width: "70%",
    height: "7%",
    borderWidth: 3,
    paddingHorizontal: "6%",
    marginTop: "10%",
    marginBottom: "3%",
    borderRadius: 15,
    fontSize: "25%",
  },
  Text: {
    fontSize: "40%",
  },
});
