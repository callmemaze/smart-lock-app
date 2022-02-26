import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";
import AppBar from "../components/AppBar";
const Notification = () => {
  /* const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const getPost = () => {
    fetch("http://127.0.0.1:5000/", {
      method: "GET",
    })
      .then((res) => res.blob())
      .then((users) => {
        var user = URL.createObjectURL(users);
        console.log(user);
        setData(user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPost();
  }, []);
  console.log(data); */
  return (
    <View style={styles.container}>
      <AppBar title={"Notification"} />
      <View style={styles.modal}>
        {/* <Image
          source={{ uri: data }}
          style={{ width: 200, height: 200 }}
        ></Image> */}
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
