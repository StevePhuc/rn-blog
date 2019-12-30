import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const EditScreen = ({ navigation }) => {



    return (
        <View>
            <Text>Edit Screen - {navigation.getParam('id')}</Text>
        </View>
    );
};


export default EditScreen;
