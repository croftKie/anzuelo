import React, { useContext, useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = ({ navigation }) => {
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [confirmInput, setConfirmInput] = useState("");
  const [loginMode, setLoginMode] = useState(true);
  const [result, setResult] = useState(false);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("key", value);
    } catch (e) {
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("key");
      if (value !== null) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  const login = async () => {
    try {
      const { data } = await axios.get(
        `https://contractor-backend.onrender.com/auth/login?email=${emailInput}&pass=${passInput}`
      );
      storeData(data.key);
      setResult(true);
      console.log(data);
      navigate();
    } catch (error) {
      console.log(error);
    }
  };
  const signup = async () => {
    try {
      const { data } = await axios.get(
        `https://contractor-backend.onrender.com/auth/signup?email=${emailInput}&pass=${passInput}&confirm=${confirmInput}`
      );
      storeData(data.key);
      setResult(true);
      console.log(data);
      navigate();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = async () => {
    if (result) {
      navigation.navigate("DrawNav");
    }
  };

  useEffect(() => {
    const value = getData();
    setResult(value);
  }, []);

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
              onChangeText={(v) => {
                setEmailInput(v);
              }}
              value={emailInput}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.dashboardInput}
              placeholder="Password"
              onChangeText={(v) => {
                setPassInput(v);
              }}
              value={passInput}
            />
          </>
        ) : (
          <>
            <TextInput
              style={styles.dashboardInput}
              placeholder="Email Address"
              onChangeText={(v) => {
                setEmailInput(v);
              }}
              value={emailInput}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.dashboardInput}
              placeholder="Password"
              onChangeText={(v) => {
                setPassInput(v);
              }}
              value={passInput}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.dashboardInput}
              placeholder="Confirm Password"
              onChangeText={(v) => {
                setConfirmInput(v);
              }}
              value={confirmInput}
            />
          </>
        )}
        <PushButton
          text={loginMode ? "Login" : "Sign Up"}
          onPress={() => {
            if (loginMode) {
              login();
            } else {
              signup();
            }
          }}
        />
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
    gap: 8,
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
    height: 100,
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
