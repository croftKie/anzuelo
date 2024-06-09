import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons} from "@expo/vector-icons";

export const IconButton = ({icon, color, size, onPress}) => {
    return (
        <Pressable onPress={onPress} style={({pressed})=>pressed ? styles.pressed : {}}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }
});