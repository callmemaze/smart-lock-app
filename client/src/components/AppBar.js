import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";
const AppBar = ({ title }) => {
  const fetchFonts = async () =>
    await Font.loadAsync({
      Poppins_700: Poppins_700Bold,
      Poppins_600: Poppins_600SemiBold,
      Poppins_400: Poppins_400Regular,
    });
  useEffect(() => {
    fetchFonts();
  });
  return (
    <Appbar.Header
      style={{
        height: 60,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fff",
        elevation: 0,
      }}
    >
      <Text style={{ fontFamily: "Poppins_700", fontSize: 18 }}>{title}</Text>
    </Appbar.Header>
  );
};

export default AppBar;

const styles = StyleSheet.create({});
