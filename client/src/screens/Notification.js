import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";
import AppBar from "../components/AppBar";

const ListItem = ({ item }) => {
  console.log("item");
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{item.id}</Text>
      <Text style={styles.text}>{item.message}</Text>
    </View>
  );
};

const Notification = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  /* const getPost = () => {
    fetch("http://127.0.0.1:5000/alert", {
      method: "GET",
    })
      .then((res) => res.blob())
      .then((alerts) => {
        var alert = URL.createObjectURL(alerts);
        console.log(alert);
        setData(alert);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }; */
  const getPost = () => {
    fetch("http://127.0.0.1:5000/alert", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((alerts) => {
        setData(alerts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <View style={styles.container}>
      <AppBar title={"Notification"} />
      {/*  <View style={styles.modal}>
        <Image
          source={{ uri: data }}
          style={{ width: 200, height: 200 }}
        ></Image> 
      </View>*/}
      {data?.length === 0 || null ? (
        <ScrollView
          style={{ height: "100%" }}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => getPost()}
            />
          }
        >
          <View style={styles.noNotification}>
            <Image
              source={require("../../assets/no-notification.png")}
              style={styles.noNotificationImage}
              resizeMode="cover"
            />
            <Text style={styles.noHistoryText}>No Notification</Text>
          </View>
        </ScrollView>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <ListItem item={item} />}
          onRefresh={() => getPost()}
          refreshing={isLoading}
          showsVerticalScrollIndicator={false}
        />
      )}
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
  noNotification: {
    width: "100%",
    height: 600,
    justifyContent: "center",
    alignItems: "center",
  },
  noNotificationImage: {
    width: "100%",
    height: 200,
  },
});
