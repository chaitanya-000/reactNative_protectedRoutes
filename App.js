import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./screens/Register";
import Photos from "./screens/Photos";
import Videos from "./screens/Videos";
import { useState } from "react";
import { useStore } from "./global_store";

export default function App() {
  const Stack = createNativeStackNavigator();
  const loggedIn = useStore((state) => state.loggedIn);
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <>
            <Stack.Screen name="Photos" component={Photos} />
            <Stack.Screen name="Videos" component={Videos} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />

            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
