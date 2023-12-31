import { TODO_STATUS } from "constant";
import { v4 as uuidv4 } from "uuid";

const eisenReducer = (state, action) => {
    const { category, todo } = action;

    switch (action.type) {
        case "ADD": {
            const id = uuidv4();
            return {
                ...state,
                [id]: {
                    id,
                    text: todo.text,
                    status: TODO_STATUS.active,
                    category: "todo",
                },
            };
        }
        case "MOVE": {
            return {
                ...state,
                [todo.id]: {
                    ...state[todo.id],
                    category,
                },
            };
        }
        case "DELETE": {
            return Object.values(state).reduce((acc, cur) => {
                if (cur.id !== todo.id)
                    return {
                        ...acc,
                        [cur.id]: {
                            ...cur,
                        },
                    };
                return acc;
            }, {});
        }
        case "UPDATE": {
            return Object.values(state).reduce((acc, cur) => {
                if (cur.id === todo.id)
                    return {
                        ...acc,
                        [todo.id]: {
                            ...state[todo.id],
                            text: todo.text,
                        },
                    };

                return {
                    ...acc,
                    [cur.id]: {
                        ...cur,
                    },
                };
            }, {});
        }
        case "STATUS": {
            return Object.values(state).reduce((acc, cur) => {
                if (cur.id === todo.id) {
                    return {
                        ...acc,
                        [todo.id]: {
                            ...state[todo.id],
                            status:
                                cur.status === TODO_STATUS.active
                                    ? TODO_STATUS.completed
                                    : TODO_STATUS.active,
                        },
                    };
                }

                return {
                    ...acc,
                    [cur.id]: {
                        ...cur,
                    },
                };
            }, {});
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export default eisenReducer;
