import React, { useReducer } from "react";

export default (reducer, actions, initState) => {
    const Context = React.createContext;

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initState);

        return <Context.Provider value={{ state }}>{children}</Context.Provider>;
    };

    return { Context, Provider };
};
