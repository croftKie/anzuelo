import React, { useContext } from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { IconButton } from "../generics/IconButton";
import { JobContext } from "../../store/context/job-context";
import axios from "axios";

export const RecipeCardFavourite = ({ job, id, navigation }) => {
    const jobCtx = useContext(JobContext);

    const handlePressFavourite = async () => {
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/job-details',
            params: {
                job_id: job.id,
                extended_publisher_details: 'false'
            },
            headers: {
                'x-rapidapi-key': '8e016b8c69msh581b01f2c98c973p1af1fajsnb66a51633500',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        try {
            const { data } = await axios.request(options);
            jobCtx.updateSelectedJob(data.data[0]);
            navigation.navigate("details", { "id": job.id })
        } catch (error) {
            console.error(error);
        }

    }

    console.log(job);

    return (
        <Pressable onPress={handlePressFavourite} key={id} style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{job.title}</Text>
                <Text style={styles.text}>{job.employer}</Text>
                <View style={styles.iconContainer}>
                    <Text style={styles.tab}>{job.location}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 16,
        backgroundColor: "#1DBDE6",
        borderRadius: 10,
        borderColor: "#313131",
        borderWidth: 4,
        elevation: 2,
        margin: 16,
    },
    img: {
        height: "100%",
        width: "20%",
        elevation: 8,
    },
    title: {
        fontSize: 20,
        padding: 8,
        color: "#F1F1F1",
    },
    text: {
        fontSize: 16,
        paddingHorizontal: 8,
        color: "#F1F1F1",
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 16,
        marginBottom: 8,
        marginRight: 8
    },
    tab: {
        fontSize: 12,
        backgroundColor: "#F1F1F1",
        borderRadius: 4,
        color: "#2F2F2F",
        padding: 4,
        width: "20%",
        textAlign: "center"
    }
});