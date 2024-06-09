import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Button,
  Linking,
} from "react-native";
import { PushButton } from "../generics/PushButton";

export const RecipeCardFull = ({ job }) => {
  return (
    <View style={styles.container}>
      <View style={styles.typeContainer}>
        <Text style={styles.type}>{job.job_employment_type}</Text>
        <Text style={styles.type}>
          {job.job_is_remote ? "Remote" : "Not Remote"}
        </Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={styles.type}>
            Quality Score: {parseInt(100 * job.job_apply_quality_score)}
          </Text>
        </View>
      </View>
      <Text style={styles.title}>{job.job_title}</Text>
      <Pressable
        onPress={() => {
          if (job.employer_website !== null) {
            Linking.openURL(job.employer_website);
          }
        }}
      >
        <Text style={styles.text}>{job.employer_name}</Text>
      </Pressable>
      <View style={styles.stepsContainer}>
        <PushButton
          text={"Click for Application"}
          onPress={() => Linking.openURL(job.job_apply_link)}
        />
      </View>
      <View style={styles.tipsContainer}>
        <Text style={styles.type}>
          {job.job_city}, {job.job_state} - {job.job_country}
        </Text>
      </View>
      <View style={styles.ingContainer}>
        <Text style={styles.tab}>{job.job_description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 50,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    paddingBottom: 16,
    backgroundColor: "white",
    borderColor: "#313131",
    elevation: 2,
  },
  title: {
    fontSize: 20,
    marginTop: 16,
    padding: 16,
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 16,
  },
  tab: {
    fontSize: 16,
    // backgroundColor: "#1DBDE6",
    margin: 6,
    borderRadius: 10,
    padding: 8,
    color: "#2f2f2f",
  },
  ingContainer: {
    marginTop: 16,
    padding: 8,
    margin: 16,
  },
  stepsContainer: {
    marginTop: 16,
    padding: 8,
    margin: 16,
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    backgroundColor: "#1DBDE6",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  tipsContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    alignItems: "center",
  },
  type: {
    backgroundColor: "#F1F1F1",
    width: "auto",
    padding: 4,
    borderRadius: 4,
    fontSize: 12,
  },
});
