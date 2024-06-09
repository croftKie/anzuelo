import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export const PushButton = ({text, onPress, textStyle}) => {
    return (
        <Pressable onPress={onPress} style={({pressed})=>pressed ? {...styles.pressed, ...styles.button} : styles.button}>
            <Text style={{color: "#F1F1F1", fontSize: 17, textAlign: "center", ...textStyle}} >{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1DBDE6",
        padding: 10,
        paddingHorizontal: 24,
        borderRadius: 10,
        elevation: 8,
    },
    pressed: {
        backgroundColor: "#1DBDE6",
        padding: 10,
        paddingHorizontal: 24,
        borderRadius: 10,
        elevation: 8,
    }
});