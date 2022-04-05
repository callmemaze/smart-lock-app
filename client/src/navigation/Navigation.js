import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QR from "../components/QR";
import Home from "../screens/Home";
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="QR"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="QR" component={QR} />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
