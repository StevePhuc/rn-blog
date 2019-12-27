import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

export default function App() {
    const value = useContext(BlogContext);
    return (
        <View>
            <Text>Index Screen</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
