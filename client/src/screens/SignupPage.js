import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Appbar } from "react-native-paper";

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import axios from "axios";
import { useDispatch } from "react-redux";

const SignupPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const initialState = { name: "", email: "", password: "" };
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [formData, setData] = useState(initialState);
  const handleChangeEmail = (e) => {
    setData({
      ...formData,
      email: e,
    });
  };
  const handleChangePassword = (e) => {
    setData({
      ...formData,
      password: e,
    });
  };
  const handleChangeUsername = (e) => {
    setData({
      ...formData,
      name: e,
    });
  };
  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:5000/register", formData)
      .then((res) => {
        dispatch({ type: AUTH, data: res.data });
        dispatch({ type: TOKEN, data: res.data.email });
      })
      .catch((error) => {
        console.log(error.response.data.message);
        Alert.alert(`${error.response.data.message}`);
      });
  };
  const fetchFonts = async () =>
    await Font.loadAsync({
      Poppins_600: Poppins_600SemiBold,
      Poppins_400: Poppins_400Regular,
    });
  useEffect(() => {
    fetchFonts();
  });
  return (
    <View style={styles.container}>
      <View style={styles.paper}>
        <View style={styles.header}>
          <Appbar.Header style={styles.appbar}>
            <Appbar.BackAction
              onPress={() => navigation.goBack()}
              style={{ padding: 0, margin: 0 }}
            />
          </Appbar.Header>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 40,
              color: "#111",
            }}
          >
            {" "}
            Create New{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 40,
              color: "#111",
            }}
          >
            {" "}
            Account!{" "}
          </Text>
        </View>
        <View style={styles.form}>
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                color: "#111",
              }}
            >
              Name
            </Text>
            <TextInput
              label="Name"
              type="flat"
              value={formData.username}
              outlineColor="#fff"
              onChangeText={(text) => {
                handleChangeUsername(text);
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                color: "#111",
              }}
            >
              Email
            </Text>
            <TextInput
              label="Email"
              type="flat"
              autoCapitalize="none"
              value={formData.email}
              outlineColor="#fff"
              onChangeText={(text) => {
                handleChangeEmail(text);
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                color: "#111",
              }}
            >
              Password
            </Text>
            <TextInput
              label="Password"
              type="flat"
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              value={formData.password}
              onChangeText={(text) => {
                handleChangePassword(text);
              }}
              right={
                secureTextEntry ? (
                  <TextInput.Icon
                    name="eye-off"
                    size={24}
                    color="black"
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                      return false;
                    }}
                  />
                ) : (
                  <TextInput.Icon
                    name="eye"
                    size={24}
                    color="black"
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                      return false;
                    }}
                  />
                )
              }
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button
            mode="contained"
            uppercase={false}
            onPress={handleSubmit}
            style={{
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Poppins_600SemiBold",
              fontSize: 15,
              color: "#fff",
              backgroundColor: "#FF7A00",
            }}
          >
            Sign Up
          </Button>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#111",
              width: "100%",
              borderWidth: 1,
              borderRadius: 4,
              height: 50,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 15,
                color: "#111",
              }}
            >
              {" "}
              Already Have an account?{" "}
            </Text>
            <Button
              mode="text"
              uppercase={false}
              onPress={() => navigation.navigate("Login")}
              color="#FF7A00"
              style={{
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              Log In
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "80%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  header: {
    width: "100%",
  },
  appbar: {
    backgroundColor: "transparent",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "flex-start",
  },
  text: {
    fontFamily: "Poppins_900Black",
    fontSize: 40,
    color: "#fff",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "35%",
  },
  button: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
