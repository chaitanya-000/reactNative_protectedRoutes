import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Login from "./Login";
import { useStore } from "../global_store";

const Photos = ({ navigation }) => {
  const loggedIn = useStore((state) => state.loggedIn);
  const setLoggedIn = useStore((state) => state.setLoggedIn);

  return (
    <View style={styles.container}>
      <Text style={{ color: "black", fontSize: 50 }}>Photos</Text>
      <TouchableOpacity
        style={styles.TextInput}
        onPress={() => setLoggedIn(true)}
      >
        <Text style={styles.Text} onPress={() => setLoggedIn(false)}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Photos;

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
    paddingHorizontal: "6%",
    marginTop: "10%",
    marginBottom: "3%",
    borderRadius: 15,
    fontSize: "25%",
    // borderWidth: 2,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    fontSize: "25%",
    color: "white",
    fontWeight: "700",
  },
});
