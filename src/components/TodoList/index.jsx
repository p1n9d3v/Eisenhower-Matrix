import TodoItem from "components/TodoItem";
import { TODO_STATUS } from "constant";
import { TodoContext } from "context/todoContext";
import { useContext } from "react";
import styles from "./index.module.css";

function TodoList({ filter }) {
    const { state: todos } = useContext(TodoContext);

    const filterTodos = (todos) => {
        switch (filter) {
            case "all": {
                return todos;
            }
            case "active": {
                return todos.filter(
                    (todo) => todo.status === TODO_STATUS.active,
                );
            }

            case "completed": {
                return todos.filter(
                    (todo) => todo.status === TODO_STATUS.completed,
                );
            }
            default: {
                throw new Error("Invalid filter");
            }
        }
    };

    return (
        <section>
            <ul className={styles.container}>
                {filterTodos(todos).map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </section>
    );
}

export default TodoList;
