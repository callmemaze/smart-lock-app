import { StyleSheet, Text, View } from "react-native";
import SvgQRCode from "react-native-qrcode-svg";
import { Entypo } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
const QR = ({ navigation }) => {
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
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="cross" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <View>
          <Text style={styles.textStyle}>Your Qr Code </Text>
        </View>
        <SvgQRCode value={user?.name} size={250} />
      </View>
    </View>
  );
};

export default QR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    fontFamily: "Poppins_600SemiBold",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
