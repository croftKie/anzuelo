import React, { useContext } from "react";
import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { IconButton } from "../generics/IconButton";
import { PlannerDailyContext } from "../../store/context/planner-context";
import { RecipeCardPlanner } from "./RecipeCardPlanner";
import { MEALS } from "../../data/dummy-data";

export const DailyCard = ({ navigation }) => {
    const plannerDailyCtx = useContext(PlannerDailyContext);
    const RecipeSelector = ({ id, space }) => {
        return <Pressable
            onLongPress={() => {
                plannerDailyCtx.removeSpace(space, id)
            }}
            style={styles.recipeSelector}>
            <Text style={{ flex: 4 }}>Click to add a recipe</Text>
            <View style={styles.recipeIcons}>
                <IconButton icon={"apps"} size={28} color={"black"} onPress={() => navigation.navigate("categories")} />
                <IconButton icon={"heart"} size={28} color={"black"} onPress={() => navigation.navigate("Favourites")} />
            </View>
        </Pressable>
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Morning</Text>
                <IconButton
                    onPress={() => {
                        plannerDailyCtx.addSpace("morning")
                    }}
                    icon={"add-circle-outline"}
                    size={35}
                    color={"black"} />
            </View>
            <View style={styles.recipeContainer}>
                {plannerDailyCtx.morningSpaces.map((space, index) => {
                    if (space === "") {
                        return <RecipeSelector id={index} key={index} space="morning" />
                    } else {
                        return <RecipeCardPlanner
                            onLongPress={() => {
                                plannerDailyCtx.removeSpace("morning", index)
                            }}
                            recipe={MEALS.filter((i) => i.id === space)[0]}
                            key={index}
                            navigation={navigation} />
                    }
                })}
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Afternoon</Text>
                <IconButton
                    onPress={() => {
                        plannerDailyCtx.addSpace("afternoon")
                    }}
                    icon={"add-circle-outline"}
                    size={35}
                    color={"black"} />
            </View>
            <View style={styles.recipeContainer}>
                {plannerDailyCtx.afternoonSpaces.map((space, index) => {
                    if (space === "") {
                        return <RecipeSelector id={index} key={index} space="afternoon" />
                    } else {
                        return <RecipeCardPlanner
                            onLongPress={() => {
                                plannerDailyCtx.removeSpace("afternoon", index)
                            }}
                            recipe={MEALS.filter((i) => i.id === space)[0]}
                            key={index}
                            navigation={navigation} />
                    }
                })}
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Evening</Text>
                <IconButton
                    onPress={() => {
                        plannerDailyCtx.addSpace("evening")
                    }}
                    icon={"add-circle-outline"}
                    size={35}
                    color={"black"} />
            </View>
            <View style={styles.recipeContainer}>
                {plannerDailyCtx.eveningSpaces.map((space, index) => {
                    if (space === "") {
                        return <RecipeSelector id={index} key={index} space="evening" />
                    } else {
                        return <RecipeCardPlanner
                            onLongPress={() => {
                                plannerDailyCtx.removeSpace("evening", index)
                            }}
                            recipe={MEALS.filter((i) => i.id === space)[0]}
                            key={index}
                            navigation={navigation} />
                    }
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        flexDirection: "row",
        alignItems: "center"
    },
    titleText: {
        fontSize: 32,
        marginRight: 16,
        paddingBottom: 6
    },
    recipeContainer: {
        margin: 16,
    },
    recipeSelector: {
        backgroundColor: "#d6d6d6",
        borderWidth: 3,
        borderColor: "#e3e3e3",
        borderRadius: 8,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    recipeIcons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})