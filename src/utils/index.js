import { TODO_STATUS } from "constant";

export const filterTodos = (todos, filter) => {
    switch (filter) {
        case "all": {
            return Object.values(todos);
        }
        case "active": {
            return Object.values(todos).filter(
                (todo) => todo.status === TODO_STATUS.active,
            );
        }

        case "completed": {
            return Object.values(todos).filter(
                (todo) => todo.status === TODO_STATUS.completed,
            );
        }
        default: {
            throw new Error("Invalid filter");
        }
    }
};
