import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import AppBar from "../components/AppBar";
import { Icon } from "react-native-elements";
const ListItem = ({ item }) => {
  return (
    <View style={styles.cardContainer} key={item._id.$oid}>
      <Card style={styles.card}>
        <Card.Content
          style={{
            backgroundColor: "#318dff",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Icon
              name="clock-time-three"
              type="material-community"
              color="#fff"
              size={18}
            />
            <Paragraph
              style={{
                fontFamily: "Poppins_600SemiBold",
                marginLeft: 7,
                fontSize: 18,
                color: "#fff",
              }}
            >
              12 P.M 2022
            </Paragraph>
          </View>
          <Title
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 15,
              color: "#fff",
            }}
          >
            {item.status === "accepted"
              ? "Door Access Request"
              : "Unknown Door Access Request"}
          </Title>
          <Title
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 15,
              color: "#fff",
            }}
          >
            Requested By {item.message}
          </Title>
        </Card.Content>
      </Card>
    </View>
  );
};

const History = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
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
          keyExtractor={(item) => `${item._id}`}
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
  noHistoryText: {
    margin: 30,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  card: {
    width: "85%",
    borderRadius: 25,
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 8,
    color: "#fff",
  },
});
