import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Modal } from "react-native";
import { Appbar, Card } from "react-native-paper";
import { Icon } from "react-native-elements";
import socketIOClient from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import io from "socket.io-client";
import { TouchableOpacity } from "react-native-gesture-handler";
const ENDPOINT = "http://127.0.0.1:5001";

const Home = ({ navigation }) => {
  const click = async () => {
    const socket = socketIOClient(ENDPOINT);
    socket.connect();
    const data = "hello";
    socket.send("message", data);
    socket.close();
  };
  const [user, setUser] = useState();
  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem("user");
    setUser(JSON.parse(jsonValue));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Appbar.Header
        style={{
          height: 80,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
          elevation: 0,
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            marginLeft: 8,
            fontSize: 15,
          }}
        >
          {" "}
          Smart Lock{" "}
        </Text>
      </Appbar.Header>
      <View style={styles.paper}>
        <View style={styles.welcome}>
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 30 }}>
            Welcome
          </Text>
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 30 }}>
            {user ? user.name.split(" ")[0] : ""}
          </Text>
        </View>
        <View style={styles.boxContainer}>
          <Card
            style={styles.box}
            onPress={() => {
              navigation.navigate("Navigation", { screen: "QR" });
            }}
          >
            <TouchableOpacity style={styles.content}>
              <Icon
                name="qrcode"
                type="font-awesome-5"
                color="#fff"
                size={40}
              />
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 18,
                  color: "white",
                }}
              >
                {" "}
                Show Qr Code{" "}
              </Text>
            </TouchableOpacity>
          </Card>
          <Card style={styles.box}>
            <View style={styles.content}>
              <Icon
                name="door-closed"
                type="font-awesome-5"
                color="#fff"
                size={40}
              />
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                {" "}
                Open Door
              </Text>
            </View>
          </Card>
          <Card style={styles.box} onPress={click}>
            <View style={styles.content}>
              <Icon
                name="door-closed"
                type="font-awesome-5"
                color="#fff"
                size={40}
              />
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                {" "}
                Open Door
              </Text>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  paper: {
    padding: 20,
  },
  boxContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  box: {
    width: "46%",
    height: 150,
    backgroundColor: "red",
    margin: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 4,
  },
  content: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,

    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
