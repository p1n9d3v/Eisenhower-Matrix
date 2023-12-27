import TodoItem from "components/TodoItem";
import { TodoContext } from "context/todoContext";
import { useContext } from "react";

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
