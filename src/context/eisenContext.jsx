import { createContext, useReducer } from "react";
import eisenReducer from "reducer/eisenReducer";

export const EisenContext = createContext();

const initialState = {};
export const EisenContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(eisenReducer, initialState);
    return (
        <EisenContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </EisenContext.Provider>
    );
};
