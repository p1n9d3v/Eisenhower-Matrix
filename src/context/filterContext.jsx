import { createContext, useReducer } from "react";

export const FilterContext = createContext("all");

export const FilterContextProvider = ({ children }) => {
    const reducer = (state, action) => {
        const { type } = action;
        switch (type) {
            case "all":
                return "all";
            case "active":
                return "active";
            case "completed":
                return "completed";
            default:
                throw new Error("Unhandle action");
        }
    };

    const [state, dispatch] = useReducer(reducer, "all");

    return (
        <FilterContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
