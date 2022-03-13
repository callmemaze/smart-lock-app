import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Appbar, Card } from "react-native-paper";
import { Icon } from "react-native-elements";

const Home = () => {
  const handleSubmitDoor = () => {
    fetch("http://127.0.0.1:5000/unlock", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        openDoor: true,
        user: "test",
      }),
    });
  };
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
            User
          </Text>
        </View>
        <View style={styles.boxContainer}>
          <Card style={styles.box} onPress={() => console.log("pressed")}>
            <View style={styles.content}>
              <Icon
                name="qrcode"
                type="font-awesome-5"
                color="#517fa4"
                size={40}
              />
              <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 18 }}>
                {" "}
                Show Qr Code{" "}
              </Text>
            </View>
          </Card>
          <Card style={styles.box}>
            <View style={styles.content}>
              <Icon
                name="door-closed"
                type="font-awesome-5"
                color="#517fa4"
                size={40}
              />
              <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 18 }}>
                {" "}
                Open Door
              </Text>
            </View>
          </Card>
          <Card style={styles.box} onPress={handleSubmitDoor}>
            <View style={styles.content}>
              <Icon
                name="door-closed"
                type="font-awesome-5"
                color="#517fa4"
                size={40}
              />
              <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 18 }}>
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
});
