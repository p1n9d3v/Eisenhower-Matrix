import { useContext } from "react";
import { TodoContext } from "@context/todoContext";
import TodoItem from "@components/TodoItem";

function TodoList() {
    const { state: todos } = useContext(TodoContext);

    return (
        <section>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </section>
    );
}

export default TodoList;
