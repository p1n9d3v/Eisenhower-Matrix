import { v4 as uuidv4 } from "uuid";
const { TODO_STATUS } = require("constant");

const todoReducer = (state, action) => {
    const { id, text } = action.payload;
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
        case "TOGGLE": {
            return state.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        status:
                            todo.status === TODO_STATUS.active
                                ? TODO_STATUS.completed
                                : TODO_STATUS.active,
                    };
                }
                return todo;
            });
        }
        case "DELETE": {
            return state.filter((todo) => todo.id !== id);
        }
        case "UPDATE": {
            return state.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        text,
                    };
                }
                return todo;
            });
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export default todoReducer;
