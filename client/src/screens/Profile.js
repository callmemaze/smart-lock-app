import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGOUT } from "../constant/type";
import { useDispatch } from "react-redux";
import { List } from "react-native-paper";
import AppBar from "../components/AppBar";
const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  const [user, setUser] = useState();
  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem("user");
    setUser(JSON.parse(jsonValue));
  };
  useEffect(() => {
    getData();
  }, []);

  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <AppBar title={"Profile"} />
      <View style={styles.paper}>
        <View style={styles.user}>
          <View style={styles.avatar}>
            <Text
              style={{
                color: "white",
                fontFamily: "Poppins_600SemiBold",
                fontSize: 15,
              }}
            >
              {user ? user.name.charAt(0) : ""}
            </Text>
          </View>
          <View style={{ marginLeft: 14 }}>
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 18,
              }}
            >
              {user ? user.name : ""}
            </Text>
          </View>
        </View>
        <List.Section>
          <List.Item
            style={{ marginTop: 10 }}
            title="Show QR Code"
            left={(props) => <List.Icon {...props} icon="qrcode" />}
            onPress={() => navigation.navigate("Navigation", { screen: "QR" })}
          ></List.Item>
          <List.Item
            title="Privacy Policy"
            left={(props) => (
              <List.Icon {...props} icon="shield-lock-outline" />
            )}
            onPress={handlePress}
          ></List.Item>
          <List.Item
            title="Terms of Service"
            left={(props) => <List.Icon {...props} icon="text-box-check" />}
            onPress={handlePress}
          ></List.Item>
        </List.Section>
        <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
          <Text style={{ color: "white", fontFamily: "Poppins_600SemiBold" }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  paper: {
    padding: 30,
  },

  user: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
