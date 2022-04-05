import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGOUT } from "../constant/type";
import { useDispatch } from "react-redux";
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
  console.log(user);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtn: {
    width: 200,
    height: 50,
    backgroundColor: "#FF7A00",
    alignItems: "center",
    justifyContent: "center",
  },
});
