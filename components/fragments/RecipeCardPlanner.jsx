import React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";

export const RecipeCardPlanner = ({ recipe, key, navigation, onLongPress }) => {
    return (
        <Pressable onLongPress={onLongPress} onPress={() => navigation.navigate("details", { "id": recipe.id })} key={key} style={styles.container}>
            <Image style={styles.img} source={{ uri: recipe.imageUrl }} />
            <View style={{flex: 1}}>
                <Text style={styles.title}>{recipe.title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#ffedb3",
        borderRadius: 10,
        borderColor: "#313131",
        borderWidth: 4,
        elevation: 2,
        marginVertical: 16
    },
    img: {
        height: "100%", 
        width: "20%",
        elevation: 8,
    },
    title: {
        fontSize: 16,
        padding: 16
    },
    text: {
        fontSize: 16,
        paddingHorizontal: 16
    }
});