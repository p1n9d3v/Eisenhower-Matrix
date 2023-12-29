import AddTodoForm from "components/AddTodoForm";
import TodoFilter from "components/TodoFilter";
import TodoList from "components/TodoList";
import { TODO_STATUS } from "constant";
import { TodoContextProvider } from "context/todoContext";
import { useState } from "react";
import styles from "./index.module.css";

const FILTERS = Object.keys(TODO_STATUS);

function Todos() {
    const [filter, setFilter] = useState(FILTERS[0]);
    return (
        <TodoContextProvider>
            <div className={styles.container}>
                <div className={styles.content}>
                    <TodoFilter
                        filters={FILTERS}
                        onFilter={(filter) => setFilter(filter)}
                    />
                    <TodoList filter={filter} />
                    <AddTodoForm />
                </div>
            </div>
        </TodoContextProvider>
    );
}

export default Todos;
