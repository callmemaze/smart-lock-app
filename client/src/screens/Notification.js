import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Card, Title, Paragraph } from "react-native-paper";
import AppBar from "../components/AppBar";
import { Icon } from "react-native-elements";
import { getAlert } from "../actions/alert";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ListItem = ({ item }) => {
  const handleSubmitAccess = () => {
    console.log("pressed");
  };
  const closeRow = (index) => {
    console.log("closerow");
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  };

  const renderRightActions = (progress, dragX, onClick) => {
    return (
      <View
        style={{
          margin: 0,
          alignContent: "center",
          justifyContent: "center",
          width: 70,
        }}
      >
        <Button color="red" onPress={onClick} title="DELETE"></Button>
      </View>
    );
  };
  <Swipeable
    renderRightActions={(progress, dragX) =>
      renderRightActions(progress, dragX, onClick)
    }
    onSwipeableOpen={() => closeRow(index)}
    ref={(ref) => (row[index] = ref)}
    rightOpenValue={-100}
  >
    <View style={styles.cardContainer} key={item._id.$oid}>
      <Card style={styles.card}>
        <Card.Content
          style={{
            backgroundColor: "#318dff",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <Paragraph style={{ fontFamily: "Poppins_600SemiBold" }}>
            Door Access Request
          </Paragraph>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              name="clock-time-three"
              type="material-community"
              color="#fff"
            />
            <Title
              style={{
                fontFamily: "Poppins_600SemiBold",
                marginLeft: 7,
                color: "#fff",
              }}
            >
              12 P.M 2022
            </Title>
          </View>
        </Card.Content>
        <Card.Cover
          style={{ margin: 10, height: 200, borderRadius: 10 }}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Card.Actions
          style={{
            justifyContent: "space-around",
            alignItems: "center",

            backgroundColor: "#318dff",
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
        >
          <TouchableOpacity style={{ margin: 5 }} onPress={handleSubmitAccess}>
            <Text style={styles.text}>Access</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
    </View>
  </Swipeable>;
};

const Notification = () => {
  const dispatch = useDispatch();
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
        if (alerts || alerts.length !== 0) {
          setData(alerts);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    dispatch(getAlert());
    setLoading(false);
  }, []);
  const alert = useSelector((state) => state.history);
  console.log(alert);
  const refresh = () => [dispatch(getAlert()), setLoading(false)];
  return (
    <View style={styles.container}>
      <AppBar title={"Notification"} />
      {/*  <View style={styles.modal}>
        <Image
          source={{ uri: data }}
          style={{ width: 200, height: 200 }}
        ></Image> 
      </View>*/}

      {data?.length === 0 || !data ? (
        <ScrollView
          style={{ height: "100%" }}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => refresh()}
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
          onRefresh={() => refresh()}
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
    height: 300,
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
    fontSize: 15,
    color: "#fff",
  },
});
