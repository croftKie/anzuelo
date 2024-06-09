import React, { useContext, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import axios from "axios";
import { PushButton } from "../generics/PushButton";

export const Login = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [loginMode, setLoginMode] = useState(true);

  return (
    <View style={styles.dashboardView}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require("../../assets/logo.png")}
      />
      <View style={{ width: "100%", alignItems: "center" }}>
        {loginMode ? (
          <>
            <TextInput
              style={styles.dashboardInput}
              placeholder="Email Address"
              onChangeText={() => {}}
              value={input}
            />
            <TextInput
              style={styles.dashboardInput}
              placeholder="Password"
              onChangeText={() => {}}
              value={input}
            />
          </>
        ) : (
          <>
            <TextInput
              style={styles.dashboardInput}
              placeholder="Email Address"
              onChangeText={() => {}}
              value={input}
            />
            <TextInput
              style={styles.dashboardInput}
              placeholder="Password"
              onChangeText={() => {}}
              value={input}
            />
            <TextInput
              style={styles.dashboardInput}
              placeholder="Confirm Password"
              onChangeText={() => {}}
              value={input}
            />
          </>
        )}
        <PushButton text={loginMode ? "Login" : "Sign Up"} onPress={() => {}} />
        <Pressable
          onPress={() => setLoginMode(!loginMode)}
          style={{ marginTop: 20 }}
        >
          <Text>Switch to sign {loginMode ? "up" : "in"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardView: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 32,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 24,
    gap: 16,
  },
  dashboardInput: {
    fontSize: 18,
    borderWidth: 2,
    height: 50,
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "80%",
    borderColor: "#2F2F2F",
  },
  img: {
    height: 200,
    width: 300,
  },
  recentContainer: {
    marginTop: 32,
    width: "100%",
    backgroundColor: "#1dbde6",
    padding: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    elevation: 8,
  },
  titleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#F1F1F1",
    paddingBottom: 8,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  recentTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 1,
    color: "#F1F1F1",
  },
  recentSearches: {
    marginVertical: 16,
    marginHorizontal: 6,
  },
  recent: {
    fontSize: 18,
    color: "#F1F1F1",
  },
});
