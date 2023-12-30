import { createContext, useReducer, useState } from "react";
import todoReducer from "reducer/todoReducer";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, []);
    return (
        <TodoContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
