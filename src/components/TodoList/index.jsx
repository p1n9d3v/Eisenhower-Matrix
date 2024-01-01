import TodoItem from "components/TodoItem";
import { EisenContext } from "context/eisenContext";
import { FilterContext } from "context/filterContext";
import { useContext } from "react";
import { filterTodos } from "utils";
import styles from "./index.module.css";

function TodoList({ category = "todo" }) {
    const { state } = useContext(EisenContext);
    const { state: filter } = useContext(FilterContext);
    const todos = Object.values(state).filter(
        (todo) => todo.category === category,
    );

    return (
        <section>
            <ul className={styles.container}>
                {filterTodos(todos, filter).map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </section>
    );
}

export default TodoList;
