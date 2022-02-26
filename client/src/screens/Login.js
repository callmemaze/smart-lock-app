import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { Appbar } from "react-native-paper";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

const Login = ({ navigation }) => {
  const initialState = { email: "", password: "" };
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
  const fetchFonts = async () =>
    await Font.loadAsync({
      Poppins_600: Poppins_600SemiBold,
      Poppins_400: Poppins_400Regular,
    });
  const handleSubmit = () => {
    navigation.navigate("BottomTab");
  };
  useEffect(() => {
    fetchFonts();
  });
  return (
    <View style={styles.container}>
      <View style={styles.paper}>
        <View style={styles.header}>
          <Appbar.Header style={styles.appbar}>
            <Appbar.BackAction
              onPress={() => {}}
              style={{ padding: 0, margin: 0 }}
            />
          </Appbar.Header>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{
              fontFamily: "Poppins_600",
              fontSize: 40,
              color: "#111",
            }}
          >
            {" "}
            Welcome{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_600",
              fontSize: 40,
              color: "#111",
            }}
          >
            {" "}
            Back!{" "}
          </Text>
        </View>

        <KeyboardAvoidingView
          style={styles.form}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400",
                color: "#111",
              }}
            >
              Email
            </Text>
            <TextInput
              label="Email"
              type="flat"
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
                fontFamily: "Poppins_400",
                color: "#111",
              }}
            >
              Password
            </Text>
            <TextInput
              label="Password"
              type="flat"
              value={formData.password}
              onChangeText={(text) => {
                handleChangePassword(text);
              }}
            />
          </View>
        </KeyboardAvoidingView>

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
              fontFamily: "Poppins_600",
              fontSize: 15,
              color: "#fff",
              backgroundColor: "#FF7A00",
            }}
          >
            Log In
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
                fontFamily: "Poppins_600",
                fontSize: 15,
                color: "#111",
              }}
            >
              {" "}
              No account yet?{" "}
            </Text>
            <Button
              mode="text"
              uppercase={false}
              onPress={() => navigation.navigate("Signup")}
              color="#FF7A00"
              style={{
                fontFamily: "Poppins_600",
              }}
            >
              Sign Up
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
    height: "30%",
  },
  button: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
