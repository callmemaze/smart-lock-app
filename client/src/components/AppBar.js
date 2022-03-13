import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
const AppBar = ({ title }) => {
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
      <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 18 }}>
        {title}
      </Text>
    </Appbar.Header>
  );
};

export default AppBar;

const styles = StyleSheet.create({});
