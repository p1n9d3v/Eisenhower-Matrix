import TodoItem from "components/TodoItem";
import { TODO_STATUS } from "constant";
import { TodoContext } from "context/todoContext";
import { useContext } from "react";

function TodoList({ filter }) {
    const { state: todos } = useContext(TodoContext);

    return (
        <section>
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
