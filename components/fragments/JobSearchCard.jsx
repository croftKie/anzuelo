import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  Linking,
} from "react-native";
import { JobContext } from "../../store/context/job-context";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "../generics/IconButton";

export const JobSearchCard = ({ job, id, navigation }) => {
  const jobCtx = useContext(JobContext);
  const handlePress = () => {
    jobCtx.updateSelectedJob(job);
    navigation.navigate("details", { id: job.job_id });
  };

  return (
    <Pressable onPress={handlePress} key={id} style={styles.container}>
      <View style={styles.imgContainer}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{job.employer_name}</Text>
        <Text style={styles.title}>{job.job_title}</Text>
        <View style={styles.capsuleContainer}>
          <Text style={styles.capsule}>
            {job.job_city ? job.job_city : "Unknown"}, {job.job_country}
          </Text>
          <Text style={styles.capsule}>
            {job.job_employment_type
              ? job.job_employment_type.toLowerCase()
              : "Unknown"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#313131",
    borderWidth: 3,
    borderBottomWidth: 3,
    elevation: 3,
  },
  imgContainer: {
    width: "5%",
    backgroundColor: "#1DBDE6",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  text: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
  },
  capsuleContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 16,
  },
  capsule: {
    fontSize: 12,
    backgroundColor: "#1DBDE6",
    borderRadius: 4,
    color: "#F1F1F1",
    padding: 4,
    width: "35%",
    textAlign: "center",
  },
});
