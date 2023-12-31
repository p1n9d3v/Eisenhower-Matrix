import TodoItem from "components/TodoItem";
import { TODO_STATUS } from "constant";
import { EisenContext } from "context/eisenContext";
import { useContext } from "react";
import styles from "./index.module.css";

function TodoList({ filter, category = "todo" }) {
    const { state } = useContext(EisenContext);
    const todos = Object.values(state).filter(
        (todo) => todo.category === category,
    );

    const filterTodos = (todos) => {
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
