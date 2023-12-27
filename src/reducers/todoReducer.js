import { TODO_STATUS } from "@constants";
import { v4 as uuidv4 } from "uuid";

export const todoReducer = (state, action) => {
    const { text, id } = action;
    switch (action.type) {
        case "ADD": {
            return [
                ...state,
                {
                    id: uuidv4(),
                    text,
                    status: TODO_STATUS.active,
                },
            ];
        }
        case "DELETE": {
            return state.filter((todo) => todo.id !== id);
        }
        case "UPDATE": {
            return state.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        status: todo.status
                            ? TODO_STATUS.completed
                            : TODO_STATUS.active,
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
