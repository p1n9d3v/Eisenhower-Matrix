import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { TODO_STATUS } from "@constants/index";
export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const reducer = (state, action) => {
        const { text, status } = action;
        switch (action.type) {
            case "ADD": {
                return [
                    ...state,
                    {
                        id: uuidv4(),
                        text,
                        status,
                    },
                ];
            }
            case "DELETE": {
                return state.filter((todo) => todo.id !== action.id);
            }
            case "UPDATE": {
                return state.map((todo) => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            status: todo.status
                                ? TODO_STATUS.done
                                : TODO_STATUS.activate,
                        };
                    }

                    return todo;
                });
            }

            default: {
                throw new Error("Unhandled action type");
            }
        }
    };

    const [state, dispatch] = useReducer(reducer, []);

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
