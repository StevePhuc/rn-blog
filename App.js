import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./scr/screens/indexScreen";
import { Provider } from "./scr/context/BlogContext";
import ShowScreen from "./scr/screens/ShowScreen";
import CreateScreen from "./scr/screens/CreateScreen";

const navigation = createStackNavigator(
    {
        Index: IndexScreen,
        Show: ShowScreen,
        Create: CreateScreen
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
