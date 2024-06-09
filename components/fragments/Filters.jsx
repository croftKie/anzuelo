import React from "react";
import { StyleSheet, Text, Pressable, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { filterOptions } from "../../data/Constants";
import { PushButton } from "../generics/PushButton";

export const Filter = (props) => {
  if (props.active) {
    return (
      <View style={styles.container}>
        <View style={styles.filter}>
          <SelectDropdown
            data={filterOptions.datePosted}
            onSelect={(selectedItem) => {
              props.setDatePostedOptions(selectedItem);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    {selectedItem || "Select a date range"}
                  </Text>
                  <Ionicons
                    color={"white"}
                    name={isOpened ? "arrow-up" : "arrow-down"}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text>{item}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.filter}>
          <SelectDropdown
            data={filterOptions.remoteJobs}
            onSelect={(selectedItem) => {
              props.setRemoteJobsOnlyOptions(
                selectedItem === "remote" ? true : false
              );
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    {selectedItem || "Remote or Office Role"}
                  </Text>
                  <Ionicons
                    color={"white"}
                    name={isOpened ? "arrow-up" : "arrow-down"}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text>{item}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.filter}>
          <SelectDropdown
            data={filterOptions.employmentTypes}
            onSelect={(selectedItem) => {
              props.setEmploymentTypesOption(selectedItem);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    {selectedItem || "Select an Employment Type"}
                  </Text>
                  <Ionicons
                    color={"white"}
                    name={isOpened ? "arrow-up" : "arrow-down"}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text>{item}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.filter}>
          <SelectDropdown
            data={filterOptions.jobRequirements}
            onSelect={(selectedItem) => {
              props.setJobRequirements(selectedItem);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    {selectedItem || "Select an experience requirement"}
                  </Text>
                  <Ionicons
                    color={"white"}
                    name={isOpened ? "arrow-up" : "arrow-down"}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text>{item}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <PushButton
            onPress={() => {
              props.searchJob();
            }}
            text={"Filter"}
          />
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  filter: {
    flexDirection: "column",
    gap: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1DBDE6",
    padding: 5,
    borderRadius: 10,
    gap: 10,
  },
  buttonText: {
    color: "white",
  },
});
