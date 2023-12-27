import TodoFilter from "components/TodoFilter";
import TodoItem from "components/TodoItem";
import { TODO_STATUS } from "constant";
import { TodoContext } from "context/todoContext";
import { useContext, useState } from "react";

const FILTERS = ["all", "active", "completed"];

function TodoList() {
    const { state: todos } = useContext(TodoContext);
    const [filter, setFilter] = useState(FILTERS[0]);

    const onFilter = (filter) => {
        setFilter(filter);
    };

    return (
        <section>
            <TodoFilter filters={FILTERS} onFilter={onFilter} />
            <ul>
                {filter === "all" &&
                    todos.map((todo) => <TodoItem todo={todo} />)}
                {filter === "active" &&
                    todos
                        .filter((todo) => todo.status === TODO_STATUS.active)
                        .map((todo) => <TodoItem todo={todo} />)}
                {filter === "completed" &&
                    todos
                        .filter((todo) => todo.status === TODO_STATUS.completed)
                        .map((todo) => <TodoItem todo={todo} />)}
            </ul>
        </section>
    );
}

export default TodoList;
