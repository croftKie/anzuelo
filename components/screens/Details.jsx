import React, { useContext, useLayoutEffect, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { RecipeCardFull } from "../fragments/RecipeCardFull";
import { IconButton } from "../generics/IconButton";
import { FavouritesContext } from "../../store/context/favourites-context";
import { JobContext } from "../../store/context/job-context";
import axios from "axios";

export const Details = ({ route, navigation }) => {
  const favouritesCtx = useContext(FavouritesContext);
  const jobCtx = useContext(JobContext);
  const selectedJob = jobCtx.selectedJob;

  console.log(selectedJob);

  let isFavourite = false;

  favouritesCtx.ids.forEach((item) => {
    if (item.id === selectedJob.job_id) {
      isFavourite = true;
    }
  });

  const favouriteHandler = () => {
    if (isFavourite) {
      favouritesCtx.removeFavourite(selectedJob.job_id);
    } else {
      favouritesCtx.addFavourite(
        selectedJob.job_id,
        selectedJob.job_title,
        selectedJob.employer_logo,
        selectedJob.employer_name,
        selectedJob.job_country
      );
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedJob.job_title,
      headerRight: () => {
        return (
          <View style={{ flexDirection: "row", gap: 20 }}>
            <IconButton
              icon={isFavourite ? "heart-sharp" : "heart-outline"}
              color={"#1DBDE6"}
              size={32}
              onPress={favouriteHandler}
            />
            <IconButton
              icon={false ? "archive-sharp" : "archive-outline"}
              color={"#1DBDE6"}
              size={30}
              onPress={() => {}}
            />
          </View>
        );
      },
    });
  }, [route.params.id, navigation, isFavourite]);

  return (
    <ScrollView style={styles.container}>
      <RecipeCardFull job={selectedJob} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
