import React, { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { JobSearchCard } from "../fragments/JobSearchCard";
import { JobContext } from "../../store/context/job-context";
import { FilterIcon } from "../fragments/FilterIcon";
import { Filter } from "../fragments/Filters";
import axios from "axios";
import { SearchesContext } from "../../store/context/searches-context";

export const Jobs = ({ navigation }) => {
  const [active, setActive] = useState(false);
  const jobCtx = useContext(JobContext);
  const searchCtx = useContext(SearchesContext);
  const [datePostedOptions, setDatePostedOptions] = useState("");
  const [remoteJobsOnlyOptions, setRemoteJobsOnlyOptions] = useState(false);
  const [employmentTypesOptions, setEmploymentTypesOptions] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: jobCtx.search,
    });
  }, [navigation]);

  const searchJobs = async () => {
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: searchCtx.searches[searchCtx.searches.length - 1],
        page: "1",
        num_pages: "1",
        date_posted: `${datePostedOptions}`,
        remote_jobs_only: `${remoteJobsOnlyOptions}`,
        employment_types: `${employmentTypesOptions}`,
        job_requirements: `${jobRequirements}`,
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

    navigation.navigate("jobs");
  };

  return (
    <>
      <View style={{ alignItems: "flex-end" }}>
        <FilterIcon active={active} setActive={setActive} />
      </View>
      <Filter
        active={active}
        searchJob={searchJobs}
        setDatePostedOptions={setDatePostedOptions}
        setRemoteJobsOnlyOptions={setRemoteJobsOnlyOptions}
        setEmploymentTypesOption={setEmploymentTypesOptions}
        setJobRequirements={setJobRequirements}
      />
      <ScrollView style={styles.container}>
        {jobCtx.jobs.map((item, index) => {
          return (
            <JobSearchCard
              key={index}
              job={item}
              id={index}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
