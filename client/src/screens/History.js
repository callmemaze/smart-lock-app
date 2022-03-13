import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import AppBar from "../components/AppBar";

const ListItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>Notification</Text>
      <Text style={styles.text}>{item.message}</Text>
    </View>
  );
};

const History = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const getPost = () => {
    fetch("http://127.0.0.1:5000/history", {
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
  useEffect(() => {
    getPost();
  }, []);
  return (
    <View style={styles.container}>
      <AppBar title={"History"} />
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

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
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
