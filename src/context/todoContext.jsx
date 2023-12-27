import { createContext, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";
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
