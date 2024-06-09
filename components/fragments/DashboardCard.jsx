import React from "react";
import { StyleSheet, View, Text, Pressable, useWindowDimensions } from "react-native";

export const DashboardCard = (props) => {
    const { width, height } = useWindowDimensions();

    const cardWidth = width > height ? "47.7%" : "45%";

    return (
        <Pressable 
        android_ripple={{color: "#FFF"}} 
        style={{
            ...styles.card,
            backgroundColor: props.item.color,
            width: cardWidth
        }} 
        onPress={()=>{
            props.navigation.navigate("recipes", {"id": props.item.id})
        }}>
            <View >
                <Text style={styles.cardText}>{props.item.title}</Text>
            </View>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    card: {
        height: 200,
        margin: 10,
        borderRadius: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        elevation: 10,
    },
    cardText: {
        fontSize: 20,
        fontWeight: "bold",
    }
})