import React, { useContext, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { JobContext } from "../../store/context/job-context";
import { IconButton } from "../generics/IconButton";
import { SearchesContext } from "../../store/context/searches-context";
import { PushButton } from "../generics/PushButton";

export const Dashboard = ({ navigation }) => {
  const [input, setInput] = useState("");
  const jobCtx = useContext(JobContext);
  const searchCtx = useContext(SearchesContext);
  const [loading, setLoading] = useState(false);

  const searchJobs = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: input,
        page: "1",
        num_pages: "1",
        date_posted: "all",
      },
      headers: {
        "x-rapidapi-key": "8e016b8c69msh581b01f2c98c973p1af1fajsnb66a51633500",
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
      },
    };

    const { data } = await axios.request(options);

    jobCtx.addJobs(data.data);
    jobCtx.updateSearch(input);
    searchCtx.addSearch(input);
    setLoading(false);
    navigation.navigate("jobs");
  };

  return (
    <View style={styles.dashboardView}>
      {loading ? (
        <ActivityIndicator style={styles.img} size={"large"} />
      ) : (
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require("../../assets/job.png")}
        />
      )}
      <View style={{ width: "100%", alignItems: "center" }}>
        <TextInput
          style={styles.dashboardInput}
          placeholder="Search for your dream job"
          onChangeText={(value) => setInput(value)}
          value={input}
        />
        <PushButton text={"Search"} onPress={searchJobs} />
      </View>
      <ScrollView style={styles.recentContainer}>
        <View style={styles.titleContainer}>
          <IconButton icon={"search-circle"} size={38} color={"#F1F1F1"} />
          <Text style={styles.recentTitle}>Recent Searches:</Text>
        </View>
        <View style={styles.recentSearches}>
          {searchCtx.searches.length > 0 ? (
            searchCtx.searches.map((item) => {
              return (
                <Pressable style={{ flexDirection: "row", gap: 8 }}>
                  <IconButton icon={"search-circle-outline"} size={26} />
                  <Text style={styles.recent}>{item}</Text>
                </Pressable>
              );
            })
          ) : (
            <Text style={styles.recent}>No searches made yet...</Text>
          )}
        </View>
      </ScrollView>
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
    width: "100%",
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
