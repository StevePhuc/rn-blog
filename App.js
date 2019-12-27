import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./scr/screens/indexScreen";
import { BlogProvider } from "./scr/context/BlogContext";

const navigation = createStackNavigator(
    {
        Index: IndexScreen
    },
    {
        initialRouteName: "Index",
        defaultNavigationOptions: {
            title: "Blogs"
        }
    }
);

const App = createAppContainer(navigation);

export default () => {
    return (
        <BlogProvider>
            <App />
        </BlogProvider>
    );
};
