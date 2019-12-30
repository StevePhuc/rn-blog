import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./scr/screens/indexScreen";
import { Provider } from "./scr/context/BlogContext";
import ShowScreen from "./scr/screens/ShowScreen";
import CreateScreen from "./scr/screens/CreateScreen";
import EditScreen from "./scr/screens/EditScreen";

const navigation = createStackNavigator(
    {
        Index: IndexScreen,
        Show: ShowScreen,
        Create: CreateScreen,
        Edit: EditScreen,
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
