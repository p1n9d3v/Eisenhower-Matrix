import {
    createContext,
    useCallback,
    useEffect,
    useLayoutEffect,
    useReducer,
} from "react";
import eisenReducer from "reducer/eisenReducer";

export const EisenContext = createContext();

export const EisenContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        eisenReducer,
        JSON.parse(localStorage.getItem("todos") ?? "{}"),
    );

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state));
    }, [state]);

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
