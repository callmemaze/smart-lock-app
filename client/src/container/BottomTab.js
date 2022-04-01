import React from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import History from "../screens/History";
import Profile from "../screens/Profile";
import { Icon } from "react-native-elements";
import {
  FontAwesome5,
  AntDesign,
  Feather,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRef } from "react";
import "react-native-gesture-handler";
const Tab = createBottomTabNavigator();

function getWidth() {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 4;
}

const BottomTab = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 40,
            marginHorizontal: 20,
            // Max Height...
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Feather
                  name="home"
                  size={24}
                  color={focused ? "black" : "gray"}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          name={"Notification"}
          component={Notification}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Entypo
                  name="notification"
                  size={24}
                  color={focused ? "black" : "gray"}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          name={"History"}
          component={History}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <MaterialIcons
                  name="history"
                  size={26}
                  color={focused ? "black" : "gray"}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Profile"}
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="user"
                  size={24}
                  color={focused ? "black" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: "red",
          position: "absolute",
          bottom: 98,
          // Horizontal Padding = 20...
          left: 50,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
