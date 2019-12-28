import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./scr/screens/indexScreen";
import { Provider } from "./scr/context/BlogContext";

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
        <Provider>
            <App />
        </Provider>
    );
};
