import React, { useContext } from "react";
import { FavouritesContext } from "../../store/context/favourites-context";
import { RecipeCardFavourite } from "../fragments/RecipeCardFavourite";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";

export const Favourites = ({ navigation }) => {
    const favouriteCtx = useContext(FavouritesContext);

    return (
        <ScrollView style={styles.container}>
            {favouriteCtx.ids.length > 0 ? favouriteCtx.ids.map((fave, index) => {
                return (
                    <RecipeCardFavourite job={fave} id={index} navigation={navigation} />
                )
            }) : <View style={styles.emptyContainer}>
                    <Ionicons name="checkmark-circle" size={70} color={"#1DBDE6"}/>
                    <Text style={{fontSize: 25}}>No favourites added</Text>
                </View>}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    emptyContainer: {
        flex: 1,
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.25
    }
});