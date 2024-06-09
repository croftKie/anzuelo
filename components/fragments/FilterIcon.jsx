import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const FilterIcon = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#FFF" }}
      style={{
        ...styles.card,
      }}
      onPress={() => {
        props.setActive(!props.active);
      }}
    >
      <Text style={styles.cardText}>Filter</Text>
      <Ionicons name={props.active ? "arrow-up" : "arrow-down"} size={20} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 50,
    margin: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    gap: 5,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
