import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

export default function App() {
    const blogPosts = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={blogPosts}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
