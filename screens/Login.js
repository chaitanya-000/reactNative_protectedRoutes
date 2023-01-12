import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import axios from "axios";
import { useStore } from "../global_store";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loggedIn = useStore((state) => state.loggedIn);
  const setLoggedIn = useStore((state) => state.setLoggedIn);

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:8000/applogincheckusers", {
        // .post("http://127.0.0.1:8000/applogincheckusers", {
        email: email,
        password: password,
      })
      .then(async (response) => {
        console.log(response.data.token);
        response.data.token && navigation.navigate("Videos");
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.TextInput}
        value={email}
        onChangeText={(enteredValue) => setEmail(enteredValue)}
      />
      <TextInput
        placeholder="Password"
        style={styles.TextInput}
        value={password}
        onChangeText={(enteredValue) => setPassword(enteredValue)}
      />
      <Button title="Login" />
      <Button
        title="Not an user ? Click to Regitser"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default Login;

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
